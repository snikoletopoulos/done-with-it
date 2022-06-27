import { createContext, useEffect, useState } from "react";

import * as SplashScreen from "expo-splash-screen";
import authStorage from "./AuthProvider.helpers";
import jwtDecode from "jwt-decode";

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
	const [isAppReady, setIsAppReady] = useState(false);

	useEffect(() => {
		(async () => {
			try {
				await SplashScreen.preventAutoHideAsync();

				const token = await authStorage.getToken();
				if (!token) return;

				const userData = jwtDecode<UserData>(token);

				setUser(userData);
			} catch (error) {
				console.log(error);
			} finally {
				setIsAppReady(true);
				await SplashScreen.hideAsync();
			}
		})();
	}, []);

	if (!isAppReady) return null;

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
