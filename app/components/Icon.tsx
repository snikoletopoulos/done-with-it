import { ColorValue, StyleSheet, View, ViewStyle } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

interface Props {
	name: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
	size?: number;
	backgroundColor?: ColorValue;
	iconColor?: string;
}

const Icon: React.FC<Props> = ({
	name,
	size = 40,
	backgroundColor = "#000",
	iconColor = "#fff",
}) => {
	return (
		<View
			style={[
				styles.container,
				{
					width: size,
					height: size,
					borderRadius: size / 2,
					backgroundColor,
				},
			]}
		>
			<MaterialCommunityIcons
				name={name}
				size={size / 2}
				color={iconColor}
				style={styles.icon}
			/>
		</View>
	);
};

export default Icon;

interface Styles {
	container: ViewStyle;
	icon: ViewStyle;
}

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
	},

	icon: {},
});
