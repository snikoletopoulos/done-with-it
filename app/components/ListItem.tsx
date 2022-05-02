import { ReactNode } from "react";
import {
	ImageSourcePropType,
	StyleSheet,
	Image,
	View,
	ViewStyle,
	ImageStyle,
	TextStyle,
	Pressable,
} from "react-native";

import colors from "constants/colors";

import AppText from "./AppText";
import Swipeable from "react-native-gesture-handler/Swipeable";

interface Props {
	title: string;
	subTitle?: string;
	image?: ImageSourcePropType;
	onPress?: React.ComponentProps<typeof Pressable>["onPress"];
	renderRightActions?: React.ComponentProps<
		typeof Swipeable
	>["renderRightActions"];
	IconComponent?: ReactNode;
}

const ListItem: React.FC<Props> = props => {
	return (
		<Swipeable renderRightActions={props.renderRightActions}>
			<Pressable
				style={({ pressed }) => [pressed && styles.pressed]}
				onPress={props.onPress}
			>
				<View style={styles.container}>
					{props.IconComponent}
					{props.image && <Image style={styles.image} source={props.image} />}
					<View style={styles.infoContainer}>
						<AppText style={styles.title}>{props.title}</AppText>
						{props.subTitle && (
							<AppText style={styles.subTitle}>{props.subTitle}</AppText>
						)}
					</View>
				</View>
			</Pressable>
		</Swipeable>
	);
};

export default ListItem;

interface Styles {
	container: ViewStyle;
	pressed: ViewStyle;
	image: ImageStyle;
	infoContainer: ViewStyle;
	title: TextStyle;
	subTitle: TextStyle;
}

const styles = StyleSheet.create<Styles>({
	container: {
		flexDirection: "row",
		padding: 15,
	},

	pressed: {
		backgroundColor: colors.light,
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
