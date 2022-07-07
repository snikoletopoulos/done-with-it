import { useEffect } from "react";
import { Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Notifications from "expo-notifications";
import * as Device from "expo-device";

import { logError } from "../helpers/error-handling.helpers";
import { useAuth } from "../components/auth/AuthProvider.hooks";
import expoPushTokensApi from "../api/expoPushTokens";

const useNotifications = () => {
	const navigation = useNavigation();
	const userContext = useAuth();

	useEffect(() => {
		if (userContext.user) {
			registerForPushNotificationsAsync().then(async token => {
				if (!token) return;
				try {
					expoPushTokensApi.register(token);
				} catch (error) {
					logError(error, "Error getting a push token");
				}
			});
			const notificationListener =
				Notifications.addNotificationResponseReceivedListener(() => {
					navigation.navigate("AccountNavigator", {
						screen: "Account",
					});
				});

			return () => {
				notificationListener.remove();
			};
		}
	}, [userContext.user, navigation]);
};

export default useNotifications;

Notifications.setNotificationHandler({
	handleNotification: async () => ({
		shouldShowAlert: true,
		shouldPlaySound: true,
		shouldSetBadge: false,
	}),
});

async function registerForPushNotificationsAsync() {
	if (!Device.isDevice) {
		alert("Must use physical device for Push Notifications");
		return;
	}
	const { status: existingStatus } = await Notifications.getPermissionsAsync();

	let finalStatus = existingStatus;
	if (existingStatus !== "granted") {
		const { status } = await Notifications.requestPermissionsAsync();
		finalStatus = status;
	}

	if (finalStatus !== "granted") {
		alert("Failed to get push token for push notification!");
		return;
	}

	const token = (await Notifications.getExpoPushTokenAsync()).data;

	if (Platform.OS === "android") {
		Notifications.setNotificationChannelAsync("default", {
			name: "default",
			importance: Notifications.AndroidImportance.MAX,
			vibrationPattern: [0, 250, 250, 250],
			lightColor: "#FF231F7C",
		});
	}

	return token;
}
