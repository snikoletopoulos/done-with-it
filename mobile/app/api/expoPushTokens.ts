import type { ExpoPushToken } from "expo-notifications";
import client from "./client";

const endpoint = "/expoPushTokens";

const register = (pushToken: ExpoPushToken["data"]) =>
	client.post(endpoint, { token: pushToken });

export default {
	register,
};
