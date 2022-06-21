import { FlatList, StyleSheet } from "react-native";

import Constants from "expo-constants";
import { FeedStackScreenProps } from "navigation/types";

import Screen from "components/ui/Screen";
import Card from "components/ui/Card";
import colors from "constants/colors";

const listing = [
	{
		id: 1,
		title: "Red jacket for sale",
		price: 100,
		image: require("../assets/images/jacket.jpg"),
	},
	{
		id: 2,
		title: "Couch in great condition",
		price: 100,
		image: require("../assets/images/couch.jpg"),
	},
];

const ListingScreen: React.FC<FeedStackScreenProps<"Listings">> = props => {
	return (
		<Screen style={styles.screen}>
			<FlatList
				data={listing}
				keyExtractor={listing => listing.id.toString()}
				renderItem={({ item }) => (
					<Card
						title={item.title}
						subTitle={`$${item.price}`}
						image={item.image}
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
