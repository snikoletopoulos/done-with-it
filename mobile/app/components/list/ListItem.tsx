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

import Text from "../ui/Text";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface Props {
	title: string;
	subTitle?: string;
	image?: ImageSourcePropType;
	onPress?: React.ComponentProps<typeof Pressable>["onPress"];
	renderRightActions?: React.ComponentProps<
		typeof Swipeable
	>["renderRightActions"];
	IconComponent?: ReactNode;
	showChevrons?: boolean;
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
						<Text style={styles.title} numberOfLines={1}>
							{props.title}
						</Text>
						{props.subTitle && (
							<Text style={styles.subTitle} numberOfLines={1}>
								{props.subTitle}
							</Text>
						)}
					</View>
					<MaterialCommunityIcons
						name="chevron-right"
						size={25}
						color={colors.medium}
					/>
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
		backgroundColor: colors.white,
		alignItems: "center",
	},

	pressed: {
		backgroundColor: colors.light,
	},

	image: {
		width: 70,
		height: 70,
		borderRadius: 35,
	},

	infoContainer: {
		marginLeft: 10,
		flex: 1,
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
