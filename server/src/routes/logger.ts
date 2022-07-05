import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
	//  Normally save log to DB and/or notify admin
	console.log(req.body);
	res.status(201).send({ success: true });
});

export default router;
