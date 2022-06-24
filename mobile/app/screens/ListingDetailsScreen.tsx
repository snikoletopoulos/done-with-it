import {
	StyleSheet,
	View,
	Image,
	ImageStyle,
	TextStyle,
	ViewStyle,
} from "react-native";

import colors from "constants/colors";
import { FeedStackScreenProps } from "navigation/types";

import Text from "components/ui/Text";
import ListItem from "components/list/ListItem";

const ListingDetailsScreen: React.FC<
	FeedStackScreenProps<"ListingDetails">
> = props => {
	const listing = props.route.params;

	return (
		<View>
			<Image style={styles.image} source={{ uri: listing.images[0].url }} />
			<View style={styles.detailsContainer}>
				<Text style={styles.title}>{listing.title}</Text>
				<Text style={styles.price}>{listing.price}</Text>
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
