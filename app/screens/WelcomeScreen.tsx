import {
	StyleSheet,
	View,
	ViewStyle,
	Text,
	Image,
	ImageStyle,
	ImageBackground,
	TextStyle,
} from "react-native";

import AppButton from "components/AppButton";

const WelcomeScreen: React.FC = () => {
	return (
		<ImageBackground
			source={require("assets/images/background.jpg")}
			style={styles.imageBackground}
			blurRadius={10}
		>
			<View style={styles.logoContainer}>
				<Image
					style={styles.logo}
					source={require("assets/images/logo-red.png")}
				/>
				<Text style={styles.tagLine}>Sell what you don't need</Text>
			</View>

			<View style={styles.buttonContainer}>
				<AppButton
					color={"primary"}
					title="Login"
					onPress={() => console.log("Login")}
				/>
				<AppButton
					color={"secondary"}
					title="Register"
					onPress={() => console.log("Register")}
				/>
			</View>
		</ImageBackground>
	);
};

export default WelcomeScreen;

interface Style {
	imageBackground: ImageStyle;
	logo: ImageStyle;
	logoContainer: ViewStyle;
	tagLine: TextStyle;
	buttonContainer: ViewStyle;
}

const styles = StyleSheet.create<Style>({
	imageBackground: {
		flex: 1,
		width: "100%",

		justifyContent: "space-between",
		alignItems: "center",
	},

	logo: {
		width: 100,
		height: 100,
	},

	logoContainer: {
		marginTop: 30,
		alignItems: "center",
	},

	tagLine: {
		fontSize: 25,
		fontWeight: "600",
		paddingVertical: 20,
	},

	buttonContainer: {
		width: "100%",
		padding: 20,
	},
});
