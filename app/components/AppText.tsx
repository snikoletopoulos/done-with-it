import { StyleSheet, Text, TextStyle, Platform, TextProps } from "react-native";

const AppText: React.FC<TextProps> = props => {
	return (
		<Text style={[styles.text, props.style]} {...props}>
			{props.children}
		</Text>
	);
};

export default AppText;

interface Styles {
	text: TextStyle;
}

const styles = StyleSheet.create<Styles>({
	text: {
		fontSize: 18,
		fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
	},
});
