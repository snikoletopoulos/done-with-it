import logger from "api/logger";

export const logError = (error: unknown, message = "An error occured") => {
	if (!error || !(error instanceof Error)) {
		logger.log({ message });
		return;
	}

	logger.log({ message, error });
};
