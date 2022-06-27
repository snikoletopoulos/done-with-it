import * as SecureStore from "expo-secure-store";

const STORE_KEY = "authToken";

const storeToken = async (authToken: string) => {
	try {
		await SecureStore.setItemAsync(STORE_KEY, authToken);
	} catch (error) {
		console.log("Error storing the auth token", error);
	}
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
	removeToken,
};
