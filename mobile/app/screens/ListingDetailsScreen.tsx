import {
	StyleSheet,
	View,
	ImageStyle,
	TextStyle,
	ViewStyle,
	KeyboardAvoidingView,
	Platform,
} from "react-native";

import colors from "constants/colors";
import { FeedStackScreenProps } from "navigation/types";

import Text from "components/ui/Text";
import ListItem from "components/list/ListItem";
import { Image } from "react-native-expo-image-cache";
import ContactSellerForm from "components/ContactSellerForm";

const ListingDetailsScreen: React.FC<
	FeedStackScreenProps<"ListingDetails">
> = props => {
	const listing = props.route.params;

	return (
		<KeyboardAvoidingView
			behavior="position"
			keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
		>
			{!!listing?.images.length && (
				<Image
					style={styles.image}
					uri={listing.images[0].url}
					preview={{ uri: listing.images[0].thumbnailUrl }}
					tint="light"
				/>
			)}
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
				<ContactSellerForm listing={listing} />
			</View>
		</KeyboardAvoidingView>
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
