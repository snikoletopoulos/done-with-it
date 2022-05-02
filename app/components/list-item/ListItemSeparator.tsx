import colors from "constants/colors";
import { StyleSheet, View } from "react-native";

const ListItemSeparator: React.FC = () => {
	return <View style={styles.separator} />;
};

export default ListItemSeparator;

const styles = StyleSheet.create({
	separator: {
		backgroundColor: colors.light,
		width: "100%",
		height: 1,
	},
});
