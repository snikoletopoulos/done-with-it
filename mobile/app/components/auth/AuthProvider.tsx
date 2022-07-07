import { createContext, useEffect, useState } from "react";

import * as SplashScreen from "expo-splash-screen";
import authStorage from "./AuthProvider.helpers";
import jwtDecode from "jwt-decode";
import { logError } from "../../helpers/error-handling.helpers";

export interface UserData {
	userId: number;
	name: string;
	email: string;
	iat: number;
}

export interface UserContext {
	user: UserData | null;
	logIn: (user: string) => void;
	logOut: () => void;
}

const AuthContext = createContext<UserContext>({
	user: null,
	logIn: () => null,
	logOut: () => null,
});

export const AuthProvider: React.FC = props => {
	const [user, setUser] = useState<UserData | null>(null);
	const [isAppReady, setIsAppReady] = useState(false);

	useEffect(() => {
		(async () => {
			try {
				await SplashScreen.preventAutoHideAsync();

				const userData = await authStorage.getUser();

				setUser(userData);
			} catch (error) {
				logError(error, "An error occured during startup");
			} finally {
				setIsAppReady(true);
				await SplashScreen.hideAsync();
			}
		})();
	}, []);

	if (!isAppReady) return null;

	const logIn = (token: string) => {
		const user = jwtDecode<UserData>(token);
		setUser(user);
		authStorage.storeToken(token);
	};

	const logOut = () => {
		setUser(null);
		authStorage.removeToken();
	};

	return (
		<AuthContext.Provider
			value={{
				user,
				logIn,
				logOut,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
