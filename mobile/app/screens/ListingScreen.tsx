import { useEffect, useState } from "react";
import { FlatList, StyleSheet, View, ViewStyle } from "react-native";

import { FeedStackScreenProps } from "navigation/types";
import { getListings } from "../api/listings";
import colors from "constants/colors";
import useApi from "hooks/use-api-hook";

import Screen from "components/ui/Screen";
import Card from "components/ui/Card";
import Text from "components/ui/Text";
import Button from "components/ui/Button";
import ActivityIndicator from "components/ui/ActivityIndicator";

const ListingScreen: React.FC<FeedStackScreenProps<"Listings">> = props => {
	const {
		request: loadListings,
		data: listings,
		hasError,
		loading,
	} = useApi(getListings);

	useEffect(() => {
		loadListings();
	}, [loadListings]);

	return (
		<Screen style={styles.screen}>
			<View style={styles.container}>
				{hasError && (
					<>
						<Text>Couldn't retrive the listings.</Text>
						<Button title="Retry" onPress={() => loadListings()} />
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
							thumbnailUrl={item.images[0].thumbnailUrl}
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
