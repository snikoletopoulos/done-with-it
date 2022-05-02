import { useState } from "react";
import { FlatList } from "react-native";

import ListItem from "components/ListItem";
import Screen from "components/Screen";
import ListItemSeparator from "components/ListItemSeparator";
import ListItemDeleteAction from "components/ListItemDeleteAction";

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