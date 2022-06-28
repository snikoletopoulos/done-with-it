import { UserData } from "components/auth";
import client from "./client";
import { ApiError } from "./types";

const endpoint = "/users";

interface RegisterData {
	name: string;
	email: string;
	password: string;
}

export const register = async (userInfo: RegisterData) =>
	client.post<string, ApiError>(endpoint, userInfo);
