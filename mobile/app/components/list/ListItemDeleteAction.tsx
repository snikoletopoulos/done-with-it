import { Pressable, StyleSheet, ViewStyle } from "react-native";

import colors from "constants/colors";

import { MaterialCommunityIcons } from "@expo/vector-icons";

interface Props {
	onPress?: React.ComponentProps<typeof Pressable>["onPress"];
}

const ListItemDeleteAction: React.FC<Props> = props => {
	return (
		<Pressable style={styles.container} onPress={props.onPress}>
			<MaterialCommunityIcons name="trash-can" color="white" size={35} />
		</Pressable>
	);
};

export default ListItemDeleteAction;

interface Styles {
	container: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
	container: {
		backgroundColor: colors.danger,
		width: 70,
		justifyContent: "center",
		alignItems: "center",
	},
});
