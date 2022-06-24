import { Listing } from "types/listing.types";
import client from "./client";

const endpoint = "/listings";

const getListings = () => client.get<Listing[]>(endpoint);

export default {
	getListings,
};
