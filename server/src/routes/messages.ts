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
	const messages = getMessagesForUser(req.user.userId);

	const mapUser = (userId: number) => {
		const user = getUserById(userId);
		return { id: user.id, name: user.name };
	};

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

router.post(
	"/",
	[auth, validateWith(messageSchema)],
	async (req: Request, res: Response) => {
		const { listingId, message } = req.body;

		const listing = getListing(listingId);
		if (!listing) return res.status(400).send({ error: "Invalid listingId." });

		const targetUser = getUserById(listing.userId);
		if (!targetUser) return res.status(400).send({ error: "Invalid userId." });

		add({
			fromUserId: req.user.userId,
			toUserId: listing.userId,
			listingId,
			content: message,
		});

		//TODO
		// const { expoPushToken } = targetUser;

		// if (Expo.isExpoPushToken(expoPushToken)) await sendPushNotification(expoPushToken, message);

		res.status(201).send();
	}
);

export default router;
