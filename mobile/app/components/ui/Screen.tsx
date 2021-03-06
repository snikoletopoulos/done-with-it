import { StyleSheet, SafeAreaView, ViewProps, ViewStyle } from "react-native";

import Constants from "expo-constants";

const Screen: React.FC<ViewProps> = props => {
	return (
		<SafeAreaView {...props} style={[styles.screen, props.style]}>
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
		flex: 1,
		paddingTop: Constants.statusBarHeight,
	},
});
