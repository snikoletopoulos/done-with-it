import { StyleSheet, ViewStyle, View } from "react-native";

import * as Yup from "yup";
import { AuthStackScreenProps } from "navigation/types";

import Screen from "components/ui/Screen";
import { FormField, FormikForm } from "components/form";
import SubmitButton from "components/form/SubmitButton";

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
	password: Yup.string().required().min(6).label("Password"),
});

const LoginScreen: React.FC<AuthStackScreenProps<"Login">> = () => {
	return (
		<Screen>
			<View style={styles.container}>
				<FormikForm
					initialValues={initialFormValues}
					validationSchema={loginFormSchema}
					onSubmit={values => {
						console.log(values);
					}}
				>
					<>
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
	);
};

export default LoginScreen;

interface Styles {
	container: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
	container: {
		padding: 20,
	},
});
