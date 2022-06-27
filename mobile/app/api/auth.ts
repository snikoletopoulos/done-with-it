import client from "./client";

const endpoint = "/auth";

export const login = (email: string, password: string) =>
	client.post<string>(endpoint, { email, password });
