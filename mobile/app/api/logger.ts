import client from "./client";

const endpoint = "/logger";

interface LoggerResponse {
	success: boolean;
}

const log = (errorData: { error?: Error; message: string }) =>
	client.post<LoggerResponse>(endpoint, errorData);

export default {
	log,
};
