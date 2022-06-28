import { useEffect } from "react";
import { StyleSheet, ViewStyle, View } from "react-native";

import * as Yup from "yup";
import { AuthStackScreenProps } from "navigation/types";
import useApi from "hooks/use-api-hook";
import { register } from "api/user";
import { login } from "api/auth";
import { useAuth } from "components/auth";

import Screen from "components/ui/Screen";
import { FormField, FormikForm } from "components/form";
import SubmitButton from "components/form/SubmitButton";
import { ErrorMessage } from "components/form";
import ActivityIndicator from "components/ui/ActivityIndicator";

export interface LoginFormValues {
	name: string;
	email: string;
	password: string;
}

const initialFormValues: LoginFormValues = {
	name: "",
	email: "",
	password: "",
};

const loginFormSchema = Yup.object().shape({
	name: Yup.string().required().label("Name"),
	email: Yup.string().email().required().label("Email"),
	password: Yup.string().required().min(5).label("Password"),
});

const RegisterScreen: React.FC<AuthStackScreenProps<"Login">> = () => {
	const {
		data: userData,
		hasError,
		loading,
		request: registerRequest,
	} = useApi(register);
	const loginApi = useApi(login);
	const { logIn } = useAuth();

	useEffect(() => {
		(async () => {
			if (userData && "email" in userData) {
				const { data: token, ok } = await loginApi.request(
					userData.email,
					userData.password
				);

				if (ok && token) {
					logIn(token);
				}
			}
		})();
	}, [userData, loginApi, logIn]);

	return (
		<>
			<ActivityIndicator visible={loading || loginApi.loading} />
			<Screen>
				<View style={styles.container}>
					<FormikForm
						initialValues={initialFormValues}
						validationSchema={loginFormSchema}
						onSubmit={values => registerRequest(values)}
					>
						<>
							{hasError && <ErrorMessage error={userData.error} />}
							<FormField
								icon="account"
								autoCapitalize="words"
								autoCorrect={false}
								placeholder="Name"
								name="name"
							/>
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
							<SubmitButton title="Register" />
						</>
					</FormikForm>
				</View>
			</Screen>
		</>
	);
};

export default RegisterScreen;

interface Styles {
	container: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
	container: {
		padding: 20,
	},
});
