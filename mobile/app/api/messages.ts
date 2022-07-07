import client from "./client";

const endpoint = "/messages";

interface SendResponse {
	success: boolean;
}

const send = (message: string, listingId: number) =>
	client.post<SendResponse>(endpoint, {
		message,
		listingId,
	});

export default {
	send,
};
