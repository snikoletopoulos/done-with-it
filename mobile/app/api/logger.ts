import client from "./client";

const endpoint = "/logger";

const log = (errorData: { error?: Error; message: string }) =>
	client.post(endpoint, errorData);

export default {
	log,
};
