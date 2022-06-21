import { StyleSheet, ViewStyle } from "react-native";
import "react-native-gesture-handler";

import navigationTheme from "navigation/navigationTheme";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "navigation/AuthNavigator";
import AppNavigator from "navigation/AppNavigator";

const App: React.FC = () => {
	return (
		<GestureHandlerRootView style={styles.wrapperContainer}>
			<NavigationContainer theme={navigationTheme}>
				{/* <AuthNavigator /> */}
				<AppNavigator />
			</NavigationContainer>
		</GestureHandlerRootView>
	);
};

export default App;

interface Styles {
	wrapperContainer: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
	wrapperContainer: {
		flex: 1,
	},
});
