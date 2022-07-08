import { RequestHandler } from "express";
import sharp from "sharp";
import path from "path";
import fs from "fs";

const outputFolder = "public/assets";

const imageResize: RequestHandler = async (req, res, next) => {
	const images: any[] = [];

	if (!req.files) return;

	const resizePromises = req.files.map(async file => {
		await sharp(file.path)
			.resize(2000)
			.jpeg({ quality: 50 })
			.toFile(path.resolve(outputFolder, file.filename + "_full.jpg"));

		await sharp(file.path)
			.resize(100)
			.jpeg({ quality: 30 })
			.toFile(path.resolve(outputFolder, file.filename + "_thumb.jpg"));

		fs.unlinkSync(file.path);

		images.push(file.filename);
	});

	await Promise.all([...resizePromises]);

	req.images = images;

	next();
};

export default imageResize;
