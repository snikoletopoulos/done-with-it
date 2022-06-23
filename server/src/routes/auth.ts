import express from "express";
import jwt from "jsonwebtoken";
import { z } from "zod";

import { getUserByEmail } from "../store/users";
import validateWith from "../middleware/validation";

const router = express.Router();

const userCredentials = z.object({
	email: z.string().email(),
	password: z.string().min(5),
});

router.post("/", validateWith(userCredentials), (req, res) => {
	const { email, password } = req.body as { [key: string]: string };

	const user = getUserByEmail(email);
	if (!user || user.password !== password)
		return res.status(400).send({ error: "Invalid email or password." });

	const token = jwt.sign({ userId: user.id, name: user.name, email }, "jwtPrivateKey");
	res.send(token);
});

export default router;
