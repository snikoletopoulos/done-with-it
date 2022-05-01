import { StyleSheet, View, Image } from "react-native";

import colors from "constants/colors";

import AppText from "components/AppText";

interface Props {
	title: string;
	subTitle: string;
	image: string;
}

const Card: React.FC<Props> = props => {
	return (
		<View style={styles.card}>
			<Image source={require(props.image)} />
			<AppText>Card</AppText>
			<AppText>Card</AppText>
		</View>
	);
};

export default Card;

const styles = StyleSheet.create({
	card: {
		borderRadius: 15,
		backgroundColor: colors.white,
		marginBottom: 20,
	},
});
