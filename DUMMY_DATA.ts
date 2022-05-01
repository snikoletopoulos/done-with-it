import type { ImageSourcePropType } from "react-native";

export interface Message {
	id: number;
	title: string;
	description: string;
	image: ImageSourcePropType;
}

export const messages: Message[] = [
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
