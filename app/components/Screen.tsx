import { StyleSheet, SafeAreaView, ViewProps, ViewStyle } from "react-native";

import Constants from "expo-constants";

const Screen: React.FC<ViewProps> = props => {
	return (
		<SafeAreaView style={[styles.screen, props.style]} {...props}>
			{props.children}
		</SafeAreaView>
	);
};

export default Screen;

interface Styles {
	screen: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
	screen: {
		paddingTop: Constants.statusBarHeight,
	},
});
