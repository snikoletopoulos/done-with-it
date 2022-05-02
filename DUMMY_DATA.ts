import type { ImageSourcePropType } from "react-native";
import { Option } from "./app/types/picker.types";

export interface Message {
	id: number;
	title: string;
	description: string;
	image: ImageSourcePropType;
}

export const initialMessages: Message[] = [
	{
		id: 1,
		title: "Hello",
		description: "How are you?",
		image: require("./app/assets/images/mosh.jpg"),
	},
	{
		id: 2,
		title: "Hello",
		description: "How are you?",
		image: require("./app/assets/images/mosh.jpg"),
	},
];

export const categories: Option[] = [
	{ label: "Furniture", value: 1, icon: "floor-lamp", color: "#fc5c65" },
	{ label: "Cars", value: 2, icon: "car", color: "#fd9644" },
	{ label: "Cameras", value: 3, icon: "camera", color: "#fed330" },
	{ label: "Games", value: 4, icon: "cards", color: "#26de81" },
	{ label: "Clothing", value: 5, icon: "shoe-heel", color: "#2bcbba" },
	{ label: "Sports", value: 6, icon: "basketball", color: "#45aaf2" },
	{ label: "Movies & Music", value: 7, icon: "headphones", color: "#4b7bec" },
];
