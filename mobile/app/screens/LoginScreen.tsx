import { StyleSheet, Image, ImageStyle, ViewStyle, View } from "react-native";

import * as Yup from "yup";
import { AuthStackScreenProps } from "navigation/types";

import Screen from "components/ui/Screen";
import { FormField, FormikForm } from "components/form";
import SubmitButton from "components/form/SubmitButton";

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
	password: Yup.string().required().min(6).label("Password"),
});

const LoginScreen: React.FC<AuthStackScreenProps<"Login">> = () => {
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
				<>
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
