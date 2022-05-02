import {
	StyleSheet,
	View,
	Image,
	ImageStyle,
	TextStyle,
	ViewStyle,
} from "react-native";

import colors from "constants/colors";

import AppText from "components/ui/AppText";
import ListItem from "components/list-item/ListItem";

const ListingDetailsScreen: React.FC = () => {
	return (
		<View>
			<Image
				style={styles.image}
				source={require("../assets/images/jacket.jpg")}
			/>
			<View style={styles.detailsContainer}>
				<AppText style={styles.title}>Red jacket for sale</AppText>
				<AppText style={styles.price}>$100</AppText>
				<View style={styles.userContainer}>
					<ListItem
						image={require("../assets/images/mosh.jpg")}
						title="Mosh Hamedani"
						subTitle="5 Listings"
					/>
				</View>
			</View>
		</View>
	);
};

export default ListingDetailsScreen;

interface Styles {
	image: ImageStyle;
	detailsContainer: ViewStyle;
	title: TextStyle;
	price: TextStyle;
	userContainer: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
	image: {
		width: "100%",
		height: 300,
	},

	detailsContainer: {
		padding: 20,
	},

	title: {
		fontSize: 24,
		fontWeight: "500",
	},

	price: {
		fontSize: 20,
		fontWeight: "bold",
		color: colors.secondary,
		marginVertical: 10,
	},

	userContainer: {
		marginVertical: 40,
	},
});
