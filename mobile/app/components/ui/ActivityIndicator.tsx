import LottieView from "lottie-react-native";

interface Props {
	visible?: boolean;
}

const ActivityIndicator: React.FC<Props> = props => {
	const { visible = false } = props;

	if (!visible) return null;

	return (
		<LottieView
			autoPlay
			loop
			source={require("../../assets/animations/loader.json")}
		/>
	);
};

export default ActivityIndicator;
