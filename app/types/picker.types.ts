import type { Pressable } from "react-native";
import type { MaterialCommunityIcons } from "@expo/vector-icons";

export interface Option {
	label: string;
	value: number | string;
	icon?: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
	color?: string;
}

export interface PickerItemProps {
	item: Option;
	onPress: React.ComponentProps<typeof Pressable>["onPress"];
}
