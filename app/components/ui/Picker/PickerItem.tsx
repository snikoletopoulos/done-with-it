import { StyleSheet, Pressable, TextStyle } from "react-native";

import type { PickerItemProps } from "types/picker.types";

import Text from "../Text";

const PickerItem: React.FC<PickerItemProps> = props => {
	return (
		<Pressable onPress={props.onPress}>
			<Text style={styles.text}>{props.item.label}</Text>
		</Pressable>
	);
};

export default PickerItem;

interface Styles {
	text: TextStyle;
}

const styles = StyleSheet.create<Styles>({
	text: {
		padding: 20,
	},
});
