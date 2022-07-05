import client from "./client";
import { ApiError } from "./types";

const endpoint = "/users";

interface RegisterData {
	name: string;
	email: string;
	password: string;
}

export interface RegisterResponse {
	id: number;
	name: string;
	email: string;
	password: string;
}

export const register = async (userInfo: RegisterData) =>
	client.post<RegisterResponse, ApiError>(endpoint, userInfo);
