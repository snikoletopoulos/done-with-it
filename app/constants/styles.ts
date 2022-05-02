import { StyleSheet, Platform } from "react-native";

import colors from "./colors";

export default StyleSheet.create({
	text: {
		color: colors.dark,
		fontSize: 18,
		fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
	},
});
