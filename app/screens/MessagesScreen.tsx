import { useState } from "react";
import { FlatList } from "react-native";

import ListItem from "components/list-item/ListItem";
import Screen from "components/ui/Screen";
import ListItemSeparator from "components/list-item/ListItemSeparator";
import ListItemDeleteAction from "components/list-item/ListItemDeleteAction";

import { initialMessages } from "../../DUMMY_DATA";
import { Message } from "../../DUMMY_DATA";

const MessagesScreen: React.FC = () => {
	const [messages, setMessages] = useState(initialMessages);
	const [isRefreshing, setIsRefreshing] = useState(false);

	const handleDelete = (message: Message) => {
		const newMessages = messages.filter(
			messageData => messageData.id !== message.id
		);
		setMessages(newMessages);
	};

	return (
		<Screen>
			<FlatList
				data={messages}
				keyExtractor={message => message.id.toString()}
				renderItem={({ item }) => (
					<ListItem
						title={item.title}
						subTitle={item.description}
						image={item.image}
						onPress={() => console.log("Message selected", item)}
						renderRightActions={() => (
							<ListItemDeleteAction onPress={() => handleDelete(item)} />
						)}
						showChevrons
					/>
				)}
				ItemSeparatorComponent={ListItemSeparator}
				refreshing={isRefreshing}
				onRefresh={() => {
					setIsRefreshing(true);
					setIsRefreshing(false);
				}}
			/>
		</Screen>
	);
};

export default MessagesScreen;
