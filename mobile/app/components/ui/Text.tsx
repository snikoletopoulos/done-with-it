import { Text, TextProps } from "react-native";

import defaultStyles from "constants/styles";

const AppText: React.FC<TextProps> = props => {
	return (
		<Text {...props} style={[defaultStyles.text, props.style]}>
			{props.children}
		</Text>
	);
};

export default AppText;
