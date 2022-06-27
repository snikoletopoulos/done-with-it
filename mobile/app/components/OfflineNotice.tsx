import { StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";

import colors from "constants/colors";

const OfflineNotice: React.FC = () => {
	const { isInternetReachable, type } = useNetInfo();

	if (type !== "unknown" && isInternetReachable === false) {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>No internet connection</Text>
			</View>
		);
	}

	return null;
};

export default OfflineNotice;

interface Styles {
	container: ViewStyle;
	text: TextStyle;
}

const styles = StyleSheet.create<Styles>({
	container: {
		backgroundColor: colors.primary,
		height: 50,
		position: "absolute",
		top: Constants.statusBarHeight,
		zIndex: 1,
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
	},

	text: {
		color: colors.white,
	},
});
