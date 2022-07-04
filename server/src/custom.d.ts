
declare module Express {
	export interface Request {
		user?: { userId: number; name: string; email: string };
		images: any;
	}
}
