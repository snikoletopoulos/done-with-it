import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { RootTabParamList } from "./types";
import { useAuth } from "components/auth";

import AccountNavigator from "./AccountNavigator";
import ListingEditScreen from "screens/ListingEditScreen";
import FeedNavigator from "./FeedNavigator";
import NewListingButton from "./NewListingButton";
import AuthNavigator from "./AuthNavigator";

const MainTab = createBottomTabNavigator<RootTabParamList>();

const MainApp: React.FC = () => {
	const userContext = useAuth();

	if (!userContext.user) {
		return <AuthNavigator />;
	}

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
