import {
	StyleSheet,
	View,
	Image,
	ImageSourcePropType,
	ViewStyle,
	ImageStyle,
	TextStyle,
} from "react-native";

import colors from "constants/colors";

import AppText from "components/AppText";

interface Props {
	title: string;
	subTitle: string;
	image: ImageSourcePropType;
}

const Card: React.FC<Props> = props => {
	const { title, subTitle, image } = props;

	return (
		<View style={styles.card}>
			<Image source={image} style={styles.image} />
			<View style={styles.detailsContainer}>
				<AppText style={styles.title}>{title}</AppText>
				<AppText style={styles.subTitle}>{subTitle}</AppText>
			</View>
		</View>
	);
};

export default Card;

interface Styles {
	card: ViewStyle;
	image: ImageStyle;
	detailsContainer: ViewStyle;
	title: TextStyle;
	subTitle: TextStyle;
}

const styles = StyleSheet.create<Styles>({
	card: {
		borderRadius: 15,
		backgroundColor: colors.white,
		marginBottom: 20,
		overflow: "hidden",
	},

	image: {
		width: "100%",
		height: 200,
	},

	detailsContainer: {
		padding: 20,
	},

	title: {
		marginBottom: 7,
	},

	subTitle: {
		color: colors.secondary,
		fontWeight: "bold",
	},
});
