import { StyleSheet, Image, ImageStyle, ViewStyle, View } from "react-native";

import * as Yup from "yup";
import { AuthStackScreenProps } from "navigation/types";
import { login } from "../api/auth";
import { FormikConfig } from "formik";
import { UserData, AuthContext, authStorage } from "components/auth";

import Screen from "components/ui/Screen";
import { FormField, FormikForm, ErrorMessage } from "components/form";
import SubmitButton from "components/form/SubmitButton";
import useApi from "hooks/use-api-hook";
import { useContext, useEffect } from "react";
import jwtDecode from "jwt-decode";

export interface LoginFormValues {
	email: string;
	password: string;
}

const initialFormValues: LoginFormValues = {
	email: "",
	password: "",
};

const loginFormSchema = Yup.object().shape({
	email: Yup.string().email().required().label("Email"),
	password: Yup.string().required().min(5).label("Password"),
});

const LoginScreen: React.FC<AuthStackScreenProps<"Login">> = () => {
	const userContext = useContext(AuthContext);
	const { request, data, hasError } = useApi<string>(login);

	useEffect(() => {
		if (!data) return;

		const user = jwtDecode<UserData>(data);
		userContext.setUser(user);
		authStorage.storeToken(data);
	}, [data, userContext]);

	const handleSubmit: FormikConfig<LoginFormValues>["onSubmit"] = ({
		email,
		password,
	}: typeof initialFormValues) => {
		request(email, password);
	};

	return (
		<Screen>
			<View style={styles.container}>
				<Image
					style={styles.logo}
					source={require("assets/images/logo-red.png")}
				/>
				<FormikForm
					initialValues={initialFormValues}
					validationSchema={loginFormSchema}
					onSubmit={handleSubmit}
				>
					{hasError && <ErrorMessage error="Invalid email and/or password" />}
					<FormField
						icon="email"
						autoCapitalize="none"
						autoCorrect={false}
						keyboardType="email-address"
						placeholder="Email"
						textContentType="emailAddress"
						name="email"
					/>
					<FormField
						autoCapitalize="none"
						autoCorrect={false}
						icon="lock"
						placeholder="Password"
						secureTextEntry
						textContentType="password"
						name="password"
					/>
					<SubmitButton title="Login" />
				</FormikForm>
			</View>
		</Screen>
	);
};

export default LoginScreen;

interface Styles {
	container: ViewStyle;
	logo: ImageStyle;
}

const styles = StyleSheet.create<Styles>({
	container: {
		padding: 20,
	},

	logo: {
		width: 80,
		height: 80,
		alignSelf: "center",
		marginTop: 50,
		marginBottom: 20,
	},
});
