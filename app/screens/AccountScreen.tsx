import { StyleSheet, FlatList, View, ViewStyle } from "react-native";

import colors from "constants/colors";

import Screen from "components/ui/Screen";
import ListItem from "components/list/ListItem";
import Icon from "components/ui/Icon";
import ListItemSeparator from "components/list/ListItemSeparator";

interface MenuItem {
	title: string;
	icon: {
		name: React.ComponentProps<typeof Icon>["name"];
		backgroundColor: typeof colors[keyof typeof colors];
	};
}

const menuItems: MenuItem[] = [
	{
		title: "My Listings",
		icon: {
			name: "format-list-bulleted",
			backgroundColor: colors.primary,
		},
	},
	{
		title: "My Messages",
		icon: {
			name: "email",
			backgroundColor: colors.secondary,
		},
	},
];

const MyAccountScreen: React.FC = () => {
	return (
		<Screen style={styles.screen}>
			<View style={styles.container}>
				<ListItem
					title="Mosh Hamefani"
					subTitle="programmingwithmosh@gmail.com"
					image={require("../assets/images/mosh.jpg")}
				/>
			</View>

			<View style={styles.container}>
				<FlatList
					data={menuItems}
					keyExtractor={menuItem => menuItem.title}
					renderItem={({ item }) => (
						<ListItem
							title={item.title}
							IconComponent={
								<Icon
									name={item.icon.name}
									backgroundColor={item.icon.backgroundColor}
								/>
							}
						/>
					)}
					ItemSeparatorComponent={ListItemSeparator}
				/>
			</View>

			<ListItem
				title="Log Out"
				IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
			/>
		</Screen>
	);
};

export default MyAccountScreen;

interface Styles {
	screen: ViewStyle;
	container: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
	screen: {
		backgroundColor: colors.light,
	},

	container: {
		marginVertical: 20,
	},
});
