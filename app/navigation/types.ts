import {
	CompositeScreenProps,
	NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

import { Listing } from "types/listing.types";

export type RootTabParamList = {
	Feed: NavigatorScreenParams<FeedStackParamList>;
	ListingEdit: undefined;
	AccountNavigator: NavigatorScreenParams<AccountStackParamList>;
};

export type RootStackScreenProps<T extends keyof RootTabParamList> =
	BottomTabScreenProps<RootTabParamList, T>;

export type FeedStackParamList = {
	Listings: undefined;
	ListingDetails: Listing;
};

export type FeedStackScreenProps<T extends keyof FeedStackParamList> =
	CompositeScreenProps<
		NativeStackScreenProps<FeedStackParamList, T>,
		BottomTabScreenProps<RootTabParamList>
	>;

export type AuthStackParamList = {
	Welcome: undefined;
	Login: undefined;
	Register: undefined;
};

export type AuthStackScreenProps<T extends keyof AuthStackParamList> =
	NativeStackScreenProps<AuthStackParamList, T>;

export type AccountStackParamList = {
	Account: undefined;
	AccountDetails: undefined;
	MyListing: undefined;
	Messages: undefined;
};

export type AccountStackScreenProps<T extends keyof AccountStackParamList> =
	CompositeScreenProps<
		NativeStackScreenProps<AccountStackParamList, T>,
		BottomTabScreenProps<RootTabParamList>
	>;
