import express from "express";

import { getCategories } from "../store/categories";

const router = express.Router();

router.get("/", (req, res) => {
	const categories = getCategories();
	res.send(categories);
});

export default router;
