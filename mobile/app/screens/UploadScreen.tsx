import colors from "constants/colors";
import { Modal, StyleSheet, View, ViewStyle } from "react-native";

import { Bar } from "react-native-progress";
import LottieView from "lottie-react-native";

interface Props {
	visible: boolean;
	progress: number;
	onDone?: React.ComponentProps<typeof LottieView>["onAnimationFinish"];
}

const UploadScreen: React.FC<Props> = props => {
	const { visible } = props;

	return (
		<Modal visible={visible} animationType="fade">
			<View style={styles.container}>
				{props.progress === 1 ? (
					<LottieView
						autoPlay
						loop={false}
						style={styles.animation}
						source={require("../assets/animations/done.json")}
						onAnimationFinish={props.onDone}
					/>
				) : (
					<Bar progress={props.progress} color={colors.primary} width={200} />
				)}
			</View>
		</Modal>
	);
};

export default UploadScreen;

interface Styles {
	container: ViewStyle;
	animation: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},

	animation: {
		width: 150,
	},
});
