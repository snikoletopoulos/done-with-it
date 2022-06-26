import AsyncStorage from "@react-native-async-storage/async-storage";
import dayjs from "dayjs";

const CACHE_KEY = "cache";
const EXPIRY_IN_MINUTES = 5;

const store = async (key: string, value: unknown) => {
	try {
		const item = {
			value,
			timestamp: Date.now(),
		};

		await AsyncStorage.setItem(CACHE_KEY + key, JSON.stringify(item));
	} catch (error) {
		console.log(error);
	}
};

const get = async (key: string) => {
	try {
		const item = await AsyncStorage.getItem(CACHE_KEY + key);
		if (item) {
			const parsed = JSON.parse(item);
			if (!isExpired(parsed.timestamp)) {
				return parsed.value;
			}

			await AsyncStorage.removeItem(CACHE_KEY + key);
		}
	} catch (error) {
		console.log(error);
	}
	return null;
};

const isExpired = (timestamp: number) => {
	const now = dayjs();
	const storedTime = dayjs(timestamp);
	return now.diff(storedTime, "minute") > EXPIRY_IN_MINUTES;
};

export default {
	store,
	get,
};
