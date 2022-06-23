export interface Listing {
	id: number;
	title: string;
	description?: string;
	images: Image[];
	price: number;
	categoryId: number;
	userId: number;
	location: Location;
}

export interface Image {
	fileName: string;
}

export interface Location {
	latitude: number;
	longitude: number;
}
