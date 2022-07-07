import { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Notifications from "expo-notifications";

import { RootTabParamList } from "./types";
import { useAuth } from "components/auth";
import expoPushTokensApi from "api/expoPushTokens";

import AccountNavigator from "./AccountNavigator";
import ListingEditScreen from "screens/ListingEditScreen";
import FeedNavigator from "./FeedNavigator";
import NewListingButton from "./NewListingButton";
import AuthNavigator from "./AuthNavigator";
import { logError } from "../helpers/error-handling.helpers";

const MainTab = createBottomTabNavigator<RootTabParamList>();

const MainApp: React.FC = () => {
	const userContext = useAuth();

	useEffect(() => {
		if (userContext.user) {
			registerForPushNotifications();
		}
	}, [userContext.user]);

	if (!userContext.user) {
		return <AuthNavigator />;
	}

	const registerForPushNotifications = async () => {
		const permission = await Notifications.requestPermissionsAsync();
		if (!permission.granted) return;

		try {
			const token = await Notifications.getExpoPushTokenAsync();
			expoPushTokensApi.register(token.data);
		} catch (error) {
			logError(error, "Error getting a push token");
		}
	};

	return (
		<MainTab.Navigator
			initialRouteName="Feed"
			screenOptions={{
				headerShown: false,
			}}
		>
			<MainTab.Screen
				name="Feed"
				component={FeedNavigator}
				options={{
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="home" color={color} size={size} />
					),
				}}
			/>
			<MainTab.Screen
				name="ListingEdit"
				component={ListingEditScreen}
				options={navigationData => ({
					tabBarButton: () => (
						<NewListingButton
							onPress={() => navigationData.navigation.navigate("ListingEdit")}
						/>
					),
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons
							name="plus-circle"
							color={color}
							size={size}
						/>
					),
				})}
			/>
			<MainTab.Screen
				name="AccountNavigator"
				component={AccountNavigator}
				options={{
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="account" color={color} size={size} />
					),
				}}
			/>
		</MainTab.Navigator>
	);
};

export default MainApp;
