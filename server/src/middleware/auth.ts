import { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import { z } from "zod";

const tokenSchema = z.object({
	userId: z.number(),
	name: z.string(),
	email: z.string(),
});

const auth: RequestHandler = (req, res, next) => {
	const token = req.header("x-auth-token");
	if (!token)
		return res.status(401).send({ error: "Access denied. No token provided." });

	try {
		const payload = jwt.verify(token, "jwtPrivateKey");
		const userInfo = tokenSchema.parse(payload);

		req.user = userInfo;

		next();
	} catch (error) {
		res.status(400).send({ error: "Invalid token." });
	}
};

export default auth;
