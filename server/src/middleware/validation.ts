import { RequestHandler } from "express";
import { Schema } from "zod";

const validation =
	(schema: Schema): RequestHandler =>
	(req, res, next) => {
		const result = schema.parse(req.body);

		if (result.error)
			return res.status(400).send({ error: result.error.details[0].message });

		next();
	};

export default validation;
