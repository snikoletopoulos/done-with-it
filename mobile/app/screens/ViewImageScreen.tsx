import { Image, ImageStyle, StyleSheet, View, ViewStyle } from "react-native";

import colors from "../constants/colors";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const ViewImageScreen: React.FC = () => {
	return (
		<View style={styles.container}>
			<Image
				source={require("assets/images/chair.jpg")}
				style={styles.image}
				resizeMode="contain"
			/>
			<MaterialCommunityIcons
				style={styles.closeIcon}
				name="close"
				color="white"
				size={35}
			/>
			<MaterialCommunityIcons
				style={styles.deleteIcon}
				name="trash-can-outline"
				color="white"
				size={35}
			/>
		</View>
	);
};

export default ViewImageScreen;

interface Style {
	container: ViewStyle;
	closeIcon: ViewStyle;
	deleteIcon: ViewStyle;
	image: ImageStyle;
}

const styles = StyleSheet.create<Style>({
	container: {
		flex: 1,
		backgroundColor: colors.black,
	},

	closeIcon: {
		position: "absolute",
		top: 30,
		left: 30,
	},

	deleteIcon: {
		position: "absolute",
		top: 30,
		right: 30,
	},

	image: {
		height: "100%",
		width: "100%",
	},
});
