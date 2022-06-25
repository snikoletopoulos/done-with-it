export interface Listing {
	id: number;
	title: string;
	images: Image[];
	price: number;
	userId: number;
	location: Location;
	description: string;
	categoryId: number;
}

export interface Location {
	latitude: number;
	longitude: number;
}

export interface Image {
	url: string;
	thumbnailUrl: string;
}
