import {
	StyleSheet,
	TextInput,
	TextInputProps,
	TextStyle,
	View,
	ViewStyle,
} from "react-native";

import colors from "constants/colors";
import defaultStyles from "constants/styles";

import { MaterialCommunityIcons } from "@expo/vector-icons";

interface Props extends TextInputProps {
	icon?: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
	width?: number | string;
}

const AppTextInput: React.FC<Props> = props => {
	const { icon, width = "100%", ...restProps } = props;

	return (
		<View style={[styles.container, { width }]}>
			{icon && (
				<MaterialCommunityIcons
					name={icon}
					size={20}
					color={colors.medium}
					style={styles.icon}
				/>
			)}
			<TextInput
				style={styles.textInput}
				{...restProps}
				placeholderTextColor={restProps.placeholderTextColor ?? colors.medium}
			/>
		</View>
	);
};

export default AppTextInput;

interface Styles {
	container: ViewStyle;
	icon: ViewStyle;
	textInput: TextStyle;
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

	textInput: {
		...defaultStyles.text,
		width: "100%",
	},
});
