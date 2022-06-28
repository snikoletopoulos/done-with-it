import { View, StyleSheet, ViewStyle } from "react-native";
import LottieView from "lottie-react-native";

import colors from "constants/colors";

interface Props {
	visible?: boolean;
}

const ActivityIndicator: React.FC<Props> = props => {
	const { visible = false } = props;

	if (!visible) return null;

	return (
		<View style={styles.overlay}>
			<LottieView
				autoPlay
				loop
				source={require("../../assets/animations/loader.json")}
			/>
		</View>
	);
};

export default ActivityIndicator;

interface Styles {
	overlay: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
	overlay: {
		position: "absolute",
		height: "100%",
		width: "100%",
		zIndex: 1,
		opacity: 0.5,
		backgroundColor: colors.white,
	},
});
