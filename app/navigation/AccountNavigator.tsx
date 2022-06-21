import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AccountStackParamList } from "./types";

import AccountScreen from "screens/AccountScreen";
import MessagesScreen from "screens/MessagesScreen";

const AccountStack = createNativeStackNavigator<AccountStackParamList>();

const AccountNavigator: React.FC = () => {
	return (
		<AccountStack.Navigator initialRouteName="Account">
			<AccountStack.Screen name="Account" component={AccountScreen} />
			<AccountStack.Screen name="AccountDetails" component={AccountScreen} />
			<AccountStack.Screen name="MyListing" component={AccountScreen} />
			<AccountStack.Screen name="Messages" component={MessagesScreen} />
		</AccountStack.Navigator>
	);
};

export default AccountNavigator;
