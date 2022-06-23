import express from "express";

import { getUserById } from "../store/users";
import { filterListings } from "../store/listings";
import auth from "../middleware/auth";

const router = express.Router();

router.get("/:id", auth, (req, res) => {
	const userId = parseInt(req.params.id);
	const user = getUserById(userId);
	if (!user) return res.status(404).send();

	const listings = filterListings(listing => listing.userId === userId);

	res.send({
		id: user.id,
		name: user.name,
		email: user.email,
		listings: listings.length,
	});
});

export default router;
