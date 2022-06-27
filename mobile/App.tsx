import { useEffect, useState } from "react";
import { StyleSheet, ViewStyle } from "react-native";
import "react-native-gesture-handler";

import navigationTheme from "navigation/navigationTheme";
import * as SplashScreen from "expo-splash-screen";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "navigation/AppNavigator";
import OfflineNotice from "components/OfflineNotice";
import { AuthProvider } from "components/auth/AuthProvider";
import { authStorage } from "components/auth";

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
