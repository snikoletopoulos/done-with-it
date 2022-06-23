import express, { RequestHandler, Request, Response } from "express";
import { z } from "zod";
import multer from "multer";
import config from "config";

import { addListing, getListings } from "../store/listings";
import { getCategory } from "../store/categories";
import validateWith from "../middleware/validation";
import imageResize from "../middleware/imageResize";
import auth from "../middleware/auth";
import delay from "../middleware/delay";
import listingMapper from "../mappers/listings";
import { Listing } from "../types/listing.types";

const router = express.Router();

const upload = multer({
	dest: "uploads/",
	limits: { fieldSize: 25 * 1024 * 1024 },
});

const ListingSchema = z.object({
	title: z.string(),
	description: z.string(),
	price: z.number().min(1),
	categoryId: z.number().min(1),
	location: z
		.object({
			latitude: z.number(),
			longitude: z.number(),
		})
		.optional(),
});

const validateCategoryId: RequestHandler = (req, res, next) => {
	if (!getCategory(parseInt(req.body.categoryId)))
		return res.status(400).send({ error: "Invalid categoryId." });

	next();
};

router.get("/", (req, res) => {
	const listings = getListings();
	const resources = listings.map(listingMapper);
	res.send(resources);
});

router.post(
	"/",
	[
		// Order of these middleware matters.
		// "upload" should come before other "validate" because we have to handle
		// multi-part form data. Once the upload middleware from multer applied,
		// request.body will be populated and we can validate it. This means
		// if the request is invalid, we'll end up with one or more image files
		// stored in the uploads folder. We'll need to clean up this folder
		// using a separate process.
		// auth,
		upload.array("images", config.get("maxImageCount")),
		validateWith(ListingSchema),
		validateCategoryId,
		imageResize,
	],

	async (req: Request, res: Response) => {
		const listing: Partial<Listing> = {
			title: req.body.title,
			price: parseFloat(req.body.price),
			categoryId: parseInt(req.body.categoryId),
			description: req.body.description,
		};
		listing.images = req.images.map((fileName: string) => ({ fileName: fileName }));
		if (req.body.location) listing.location = JSON.parse(req.body.location);
		if (req.user) listing.userId = req.user.userId;

		addListing(listing as Listing);

		res.status(201).send(listing);
	}
);

export default router;
