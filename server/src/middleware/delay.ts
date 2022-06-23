import { RequestHandler } from "express";
import config from "config";

const delay: RequestHandler = async (req, res, next) => {
	setTimeout(() => next(), config.get("delay"));
};

export default delay;
