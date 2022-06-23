import { Optional } from "utility-types";

import { User } from "../types/user.types";

const users: User[] = [
	{
		id: 1,
		name: "Mosh",
		email: "mosh@domain.com",
		password: "12345",
	},
	{
		id: 2,
		name: "John",
		email: "john@domain.com",
		password: "12345",
	},
];

export const getUsers = () => users;

export const getUserById = (id: number) => users.find(user => user.id === id);

export const getUserByEmail = (email: string) =>
	users.find(user => user.email === email);

export const addUser = (user: Optional<User, "id">) => {
	user.id = users.length + 1;
	users.push(user as User);
};
