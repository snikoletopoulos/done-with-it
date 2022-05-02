import { StyleSheet, Pressable } from "react-native";

import type { PickerItemProps } from "types/picker.types";

import Icon from "../Icon";
import Text from "../Text";

const CategoryPickerItem: React.FC<PickerItemProps> = props => {
	return (
		<Pressable style={styles.container}>
			{props.item.icon && (
				<Icon
					backgroundColor={props.item.color}
					name={props.item.icon}
					size={80}
				/>
			)}
			<Text style={styles.label}>{props.item.label}</Text>
		</Pressable>
	);
};

export default CategoryPickerItem;

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 30,
		paddingVertical: 15,
		alignItems: "center",
		width: "100%",
	},

	label: {
		marginTop: 5,
		textAlign: "center",
	},
});
