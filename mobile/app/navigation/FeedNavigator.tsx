import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { FeedStackParamList } from "./types";

import ListingDetailsScreen from "screens/ListingDetailsScreen";
import ListingScreen from "screens/ListingScreen";

const FeedStack = createNativeStackNavigator<FeedStackParamList>();

const FeedNavigator: React.FC = () => {
	return (
		<FeedStack.Navigator
			initialRouteName="Listings"
			screenOptions={{
				presentation: "modal",
				headerShown: false,
			}}
		>
			<FeedStack.Screen name="Listings" component={ListingScreen} />
			<FeedStack.Screen
				name="ListingDetails"
				component={ListingDetailsScreen}
			/>
		</FeedStack.Navigator>
	);
};

export default FeedNavigator;
