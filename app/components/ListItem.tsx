import colors from "constants/colors";
import {
	ImageSourcePropType,
	StyleSheet,
	Image,
	View,
	ViewStyle,
	ImageStyle,
	TextStyle,
} from "react-native";

import AppText from "./AppText";

interface Props {
	title: string;
	subTitle: string;
	image: ImageSourcePropType;
}

const ListItem: React.FC<Props> = props => {
	return (
		<View style={styles.container}>
			<Image style={styles.image} source={props.image} />
			<View style={styles.infoContainer}>
				<AppText style={styles.title}>{props.title}</AppText>
				<AppText style={styles.subTitle}>{props.subTitle}</AppText>
			</View>
		</View>
	);
};

export default ListItem;

interface Styles {
	container: ViewStyle;
	image: ImageStyle;
	infoContainer: ViewStyle;
	title: TextStyle;
	subTitle: TextStyle;
}

const styles = StyleSheet.create<Styles>({
	container: {
		flexDirection: "row",
	},

	image: {
		width: 70,
		height: 70,
		borderRadius: 35,
		marginRight: 10,
	},

	infoContainer: {
		justifyContent: "center",
	},

	title: {
		fontSize: 20,
		fontWeight: "500",
	},

	subTitle: {
		color: colors.medium,
		marginTop: 5,
	},
});
