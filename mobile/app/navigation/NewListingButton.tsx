import { Pressable, StyleSheet, ViewStyle } from "react-native";

import colors from "constants/colors";

import { MaterialCommunityIcons } from "@expo/vector-icons";

interface Props {
	onPress: () => void;
}

const NewListingButton: React.FC<Props> = props => {
	return (
		<Pressable style={styles.container} onPress={props.onPress}>
			<MaterialCommunityIcons
				name="plus-circle"
				color={colors.white}
				size={40}
			/>
		</Pressable>
	);
};

export default NewListingButton;

interface Styles {
	container: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
	container: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: colors.primary,
		bottom: 20,
		height: 80,
		width: 80,
		borderRadius: 40,
		borderColor: colors.white,
		borderWidth: 10,
	},
});
