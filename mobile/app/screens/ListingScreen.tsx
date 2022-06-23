import { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import Constants from "expo-constants";
import { FeedStackScreenProps } from "navigation/types";
import listingsApi from "../api/listings";
import { Listing } from "types/listing.types";

import Screen from "components/ui/Screen";
import Card from "components/ui/Card";
import colors from "constants/colors";

const ListingScreen: React.FC<FeedStackScreenProps<"Listings">> = props => {
	const [listings, setListings] = useState<Listing[]>([]);

	useEffect(() => {
		(async () => {
			const response = await listingsApi.getListings();
			setListings(response.data);
		})();
	}, []);

	return (
		<Screen style={styles.screen}>
			<FlatList
				data={listings}
				keyExtractor={listing => listing.id.toString()}
				renderItem={({ item }) => (
					<Card
						title={item.title}
						subTitle={`$${item.price}`}
						imageUrl={item.images[0].url}
						onPress={() => props.navigation.navigate("ListingDetails", item)}
					/>
				)}
			/>
		</Screen>
	);
};

export default ListingScreen;

const styles = StyleSheet.create({
	screen: {
		padding: 20,
		paddingTop: Constants.statusBarHeight + 20,
		backgroundColor: colors.light,
	},
});
