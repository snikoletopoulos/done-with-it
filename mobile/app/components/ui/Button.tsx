import {
	Platform,
	Pressable,
	PressableProps,
	StyleSheet,
	Text,
	TextStyle,
	ViewStyle,
} from "react-native";

import colors from "constants/colors";

interface Props extends PressableProps {
	color?: keyof typeof colors;
	title: string;
}

const Button: React.FC<Props> = ({ color = "primary", title, ...rest }) => {
	return (
		<Pressable
			android_ripple={{ color: "#ccc" }}
			style={({ pressed }) => [
				styles.container,
				Platform.OS !== "android" && pressed && styles.pressed,
				{ backgroundColor: colors[color] },
			]}
			{...rest}
		>
			<Text style={styles.text}>{title}</Text>
		</Pressable>
	);
};

export default Button;

interface Style {
	container: ViewStyle;
	pressed: ViewStyle;
	text: TextStyle;
}

const styles = StyleSheet.create<Style>({
	container: {
		backgroundColor: colors.primary,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 200,
		paddingHorizontal: 20,
		paddingVertical: 10,
		marginVertical: 10,
	},

	pressed: {
		opacity: 0.8,
	},

	text: {
		color: colors.white,
		textTransform: "uppercase",
		fontSize: 18,
		fontWeight: "bold",
	},
});
