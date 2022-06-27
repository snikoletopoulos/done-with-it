import { StyleSheet, ViewStyle } from "react-native";
import "react-native-gesture-handler";

import navigationTheme from "navigation/navigationTheme";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "navigation/AppNavigator";
import OfflineNotice from "components/OfflineNotice";
import { AuthProvider } from "components/auth/AuthProvider";

const App: React.FC = () => {
	return (
		<AuthProvider>
			<OfflineNotice />
			<GestureHandlerRootView style={styles.wrapperContainer}>
				<NavigationContainer theme={navigationTheme}>
					<AppNavigator />
				</NavigationContainer>
			</GestureHandlerRootView>
		</AuthProvider>
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
