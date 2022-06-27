import { createContext, useState } from "react";

export interface UserData {
	userId: number;
	name: string;
	email: string;
	iat: number;
}

export interface UserContext {
	user: UserData | null;
	setUser: React.Dispatch<React.SetStateAction<UserData | null>>;
}

const AuthContext = createContext<UserContext>({
	user: null,
	setUser: () => null,
});

export const AuthProvider: React.FC = props => {
	const [user, setUser] = useState<UserData | null>(null);

	return (
		<AuthContext.Provider
			value={{
				user,
				setUser,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
