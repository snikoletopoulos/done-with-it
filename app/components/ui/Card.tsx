import {
	StyleSheet,
	View,
	Image,
	ImageSourcePropType,
	ViewStyle,
	ImageStyle,
	TextStyle,
	Pressable,
} from "react-native";

import colors from "constants/colors";

import Text from "components/ui/Text";

interface Props {
	title: string;
	subTitle: string;
	image: ImageSourcePropType;
	onPress: () => void;
}

const Card: React.FC<Props> = props => {
	const { title, subTitle, image } = props;

	return (
		<Pressable style={styles.card} onPress={props.onPress}>
			<Image source={image} style={styles.image} />
			<View style={styles.detailsContainer}>
				<Text style={styles.title} numberOfLines={1}>
					{title}
				</Text>
				<Text style={styles.subTitle} numberOfLines={1}>
					{subTitle}
				</Text>
			</View>
		</Pressable>
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
