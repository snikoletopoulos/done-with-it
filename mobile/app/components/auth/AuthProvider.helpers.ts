import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";

import { UserData } from "./AuthProvider";

const STORE_KEY = "auth_token";

const storeToken = async (authToken: string) => {
	try {
		await SecureStore.setItemAsync(STORE_KEY, authToken);
	} catch (error) {
		console.log("Error storing the auth token", error);
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
		console.log("Error getting the auth token", error);
	}
};

const removeToken = async () => {
	try {
		await SecureStore.deleteItemAsync(STORE_KEY);
	} catch (error) {
		console.log("Error removing the auth token", error);
	}
};

export default {
	storeToken,
	getToken,
	getUser,
	removeToken,
};
