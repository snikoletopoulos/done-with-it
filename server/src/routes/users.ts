import express from "express";
import { z } from "zod";

import { getUserByEmail, addUser, getUsers } from "../store/users";
import validateWith from "../middleware/validation";

const router = express.Router();

const schema = z.object({
	name: z.string().min(2),
	email: z.string().email(),
	password: z.string().min(5),
});

router.post("/", validateWith(schema), (req, res) => {
	const { name, email, password } = req.body as { [key: string]: string };
	if (getUserByEmail(email))
		return res
			.status(400)
			.send({ error: "A user with the given email already exists." });

	const user = { name, email, password };
	if (addUser(user)) {
		res.status(201).send(user);
	}
});

router.get("/", (req, res) => {
	res.send(getUsers());
});

export default router;
