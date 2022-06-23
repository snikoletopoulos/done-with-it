import config from "config";

import { Listing, Image } from "../types/listing.types";

const mapper = (listing: Listing) => {
	const baseUrl = config.get("assetsBaseUrl");

	const mapImage = (image: Image) => ({
		url: `${baseUrl}${image.fileName}_full.jpg`,
		thumbnailUrl: `${baseUrl}${image.fileName}_thumb.jpg`,
	});

	return {
		...listing,
		images: listing.images.map(mapImage),
	};
};

export default mapper;
