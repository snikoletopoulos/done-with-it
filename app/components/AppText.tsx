import { StyleSheet, Text, TextStyle, Platform } from "react-native";

const AppText: React.FC = props => {
	return (
		<Text style={styles.text} {...props}>
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
