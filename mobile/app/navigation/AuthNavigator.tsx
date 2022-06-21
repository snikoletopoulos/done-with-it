import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AuthStackParamList } from "./types";

import WelcomeScreen from "screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator: React.FC = () => {
	return (
		<AuthStack.Navigator initialRouteName="Welcome">
			<AuthStack.Screen
				name="Welcome"
				component={WelcomeScreen}
				options={{ headerShown: false }}
			/>
			<AuthStack.Screen name="Login" component={LoginScreen} />
			<AuthStack.Screen name="Register" component={RegisterScreen} />
		</AuthStack.Navigator>
	);
};

export default AuthNavigator;
