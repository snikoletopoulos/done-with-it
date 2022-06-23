import express, { Request, Response } from "express";
import { z } from "zod";

import { getUserById } from "../store/users";
import auth from "../middleware/auth";
import validateWith from "../middleware/validation";

const router = express.Router();

const token = z.object({
	token: z.string(),
});

router.post("/", [auth, validateWith(token)], (req: Request, res: Response) => {
	const user = getUserById(req.user.userId);
	if (!user) return res.status(400).send({ error: "Invalid user." });

	console.log("User registered for notifications: ", {
		...user,
		expoPushToken: req.body.token,
	});
	res.status(201).send();
});

export default router;
