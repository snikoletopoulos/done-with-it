declare module Express {
	export interface Request {
		user?: { userId: number; name: string; email: string };
		images: any;
		files?: ImageFile[];
	}
}

interface ImageFile {
	fieldname: string;
	originalname: string;
	encoding: string;
	mimetype: string;
	destination: string;
	filename: string;
	path: string;
	size: number;
}
