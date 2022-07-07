import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";

import { logError } from "../../helpers/error-handling.helpers";
import { UserData } from "./AuthProvider";

const STORE_KEY = "auth_token";

const storeToken = async (authToken: string) => {
	try {
		await SecureStore.setItemAsync(STORE_KEY, authToken);
	} catch (error) {
		logError(error, "Error storing the auth token");
	}
};

const getUser = async () => {
	const token = await getToken();

	return token ? jwtDecode<UserData>(token) : null;
};

const getToken = async () => {
	try {
		return await SecureStore.getItemAsync(STORE_KEY);
	} catch (error) {
		logError(error, "Error getting the auth token");
	}
};

const removeToken = async () => {
	try {
		await SecureStore.deleteItemAsync(STORE_KEY);
	} catch (error) {
		logError(error, "Error removing the auth token");
	}
};

export default {
	storeToken,
	getToken,
	getUser,
	removeToken,
};
