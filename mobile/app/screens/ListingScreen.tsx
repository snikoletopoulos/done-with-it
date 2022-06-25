import { useEffect, useState } from "react";
import { FlatList, StyleSheet, View, ViewStyle } from "react-native";

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
			if (response.ok && response.data) {
				setListings(response.data);
			}
		})();
	}, []);

	return (
		<Screen style={styles.screen}>
			<View style={styles.container}>
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
			</View>
		</Screen>
	);
};

export default ListingScreen;

interface Styles {
	screen: ViewStyle;
	container: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
	screen: {
		backgroundColor: colors.light,
	},

	container: {
		padding: 20,
	},
});
