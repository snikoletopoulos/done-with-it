import express, { Request, Response } from "express";
import { z } from "zod";
import { Expo } from "expo-server-sdk";

import { getUserById } from "../store/users";
import { getListing } from "../store/listings";
import { getMessagesForUser, add } from "../store/messages";
import sendPushNotification from "../utilities/pushNotifications";
import auth from "../middleware/auth";
import validateWith from "../middleware/validation";

const router = express.Router();

const messageSchema = z.object({
	listingId: z.number(),
	message: z.string(),
});

router.get("/", auth, (req, res) => {
	if (!req.user)
		return res.status(401).send({ error: "Access denied. No token provided." });

	const messages = getMessagesForUser(req.user.userId);

	const resources = messages.map(message => ({
		id: message.id,
		listingId: message.listingId,
		dateTime: message.dateTime,
		content: message.content,
		fromUser: mapUser(message.fromUserId),
		toUser: mapUser(message.toUserId),
	}));

	res.send(resources);
});

const mapUser = (userId: number) => {
	const user = getUserById(userId);
	if (!user) return null;

	return { id: user.id, name: user.name };
};

router.post(
	"/",
	[auth, validateWith(messageSchema)],
	async (req: Request, res: Response) => {
		if (!req.user) return res.status(401).send({ error: "Unauthorized." });
		const { listingId, message } = req.body;

		const listing = getListing(listingId);
		if (!listing) return res.status(400).send({ error: "Invalid listingId." });

		const targetUser = getUserById(listing.userId);
		if (!targetUser) return res.status(400).send({ error: "Invalid userId." });
		if (!targetUser.expoPushToken)
			return res.status(400).send({ error: "Token not found" });

		add({
			fromUserId: req?.user?.userId,
			toUserId: listing.userId,
			listingId,
			content: message,
		});

		const { expoPushToken } = targetUser;

		if (Expo.isExpoPushToken(expoPushToken))
			await sendPushNotification(expoPushToken, message);

		res.status(201).send({ success: true });
	}
);

export default router;
