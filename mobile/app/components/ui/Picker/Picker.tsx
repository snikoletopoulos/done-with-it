import { useState } from "react";
import {
	FlatList,
	Modal,
	Pressable,
	StyleSheet,
	TextStyle,
	ViewStyle,
} from "react-native";

import colors from "constants/colors";
import { Option, PickerItemProps } from "types/picker.types";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import Text from "../Text";
import Button from "../Button";
import PickerItem from "./PickerItem";
import Screen from "../Screen";

interface Props {
	icon?: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
	placeholder?: string;
	options?: Option[];
	selectedItem?: Option;
	onSelectItem: (item: Option) => void;
	PickerItemComponent?: React.FC<PickerItemProps>;
	numberOfColumns?: number;
	width?: number | string;
}

const Picker: React.FC<Props> = props => {
	const {
		icon,
		placeholder,
		options,
		PickerItemComponent = PickerItem,
		numberOfColumns = 1,
		width = "100%",
	} = props;
	const [modalIsVisible, setModalIsVisible] = useState(false);
console.log(icon)
	return (
		<>
			<Pressable
				style={[styles.container, { width }]}
				onPress={() => setModalIsVisible(true)}
			>
				{icon && (
					<MaterialCommunityIcons
						name={icon}
						size={20}
						color={colors.medium}
						style={styles.icon}
					/>
				)}
				{props.selectedItem ? (
					<Text style={styles.text}>{props.selectedItem.label}</Text>
				) : (
					<Text style={styles.placeholder}>{placeholder}</Text>
				)}
				<MaterialCommunityIcons
					name="chevron-down"
					size={20}
					color={colors.medium}
				/>
			</Pressable>

			<Modal visible={modalIsVisible} animationType="slide">
				<Screen>
					<Button title="Close" onPress={() => setModalIsVisible(false)} />
					<FlatList
						data={options}
						keyExtractor={option => option.value.toString()}
						numColumns={numberOfColumns}
						renderItem={({ item }) => (
							<PickerItemComponent
								item={item}
								onPress={() => {
									props.onSelectItem(item);
									setModalIsVisible(false);
								}}
							/>
						)}
					/>
				</Screen>
			</Modal>
		</>
	);
};

export default Picker;

interface Styles {
	container: ViewStyle;
	icon: ViewStyle;
	text: TextStyle;
	placeholder: TextStyle;
}

const styles = StyleSheet.create<Styles>({
	container: {
		backgroundColor: colors.light,
		borderRadius: 25,
		flexDirection: "row",
		padding: 15,
		marginVertical: 10,
		alignItems: "center",
	},

	icon: {
		marginRight: 10,
	},

	text: {
		flex: 1,
	},

	placeholder: {
		flex: 1,
		color: colors.medium,
	},
});
