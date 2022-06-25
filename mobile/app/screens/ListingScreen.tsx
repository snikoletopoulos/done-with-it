import { useEffect, useState } from "react";
import { FlatList, StyleSheet, View, ViewStyle } from "react-native";

import { FeedStackScreenProps } from "navigation/types";
import listingsApi from "../api/listings";
import { Listing } from "types/listing.types";
import colors from "constants/colors";

import Screen from "components/ui/Screen";
import Card from "components/ui/Card";
import Text from "components/ui/Text";
import Button from "components/ui/Button";
import ActivityIndicator from "components/ui/ActivityIndicator";

const ListingScreen: React.FC<FeedStackScreenProps<"Listings">> = props => {
	const [listings, setListings] = useState<Listing[]>([]);
	const [hasError, setHasError] = useState(false);
	const [loading, setLoading] = useState(false);

	const loadListings = async () => {
		setLoading(true);
		const response = await listingsApi.getListings();
		setLoading(false);

		if (!response.ok) return setHasError(true);

		if (response.data) {
			setListings(response.data);
			setHasError(false);
		}
	};

	useEffect(() => {
		loadListings();
	}, []);

	return (
		<Screen style={styles.screen}>
			<View style={styles.container}>
				{hasError && (
					<>
						<Text>Couldn't retrive the listings.</Text>
						<Button title="Retry" onPress={loadListings} />
					</>
				)}
				<ActivityIndicator visible={loading} />
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
