import { AxiosRequestConfig } from "axios";

import { Listing } from "types/listing.types";
import client from "./client";
import { Location } from "types/listing.types";
import { ApiError } from "./types";

const endpoint = "/listings";

export const getListings = () => client.get<Listing[]>(endpoint);

export const addListing = (
	listing: Pick<Listing, "title" | "description" | "categoryId" | "price"> & {
		location?: Location;
		images: string[];
	},
	onUploadProgress?: AxiosRequestConfig["onUploadProgress"]
) => {
	const formData = new FormData();

	formData.append("title", listing.title);
	formData.append("price", listing.price.toString());
	formData.append("categoryId", listing.categoryId.toString());
	formData.append("description", listing.description);

	if (listing.location)
		formData.append("location", JSON.stringify(listing.location));

	listing.images.forEach((image, index) => {
		formData.append("images", {
			name: "name" + index.toString(),
			uri: image,
			type: "image/jpeg",
		});
	});

	const handleUploadProgress = (
		progress: AxiosRequestConfig["onUploadProgress"]
	) => {
		if (onUploadProgress) {
			onUploadProgress(progress);
		}
	};

	return client.post<Listing, ApiError>(endpoint, formData, {
		onUploadProgress: handleUploadProgress,
	});
};
