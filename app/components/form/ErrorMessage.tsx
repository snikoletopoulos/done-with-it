import { StyleSheet, TextStyle } from "react-native";

import { FormikErrors, FormikValues } from "formik";

import Text from "components/ui/Text";

interface Props {
	error:
		| string
		| string[]
		| FormikErrors<FormikValues>
		| FormikErrors<FormikValues>[]
		| undefined;
}

const ErrorMessage: React.FC<Props> = props => {
	const { error } = props;

	if (!error) {
		return null;
	}

	return <Text style={styles.error}>{error}</Text>;
};

export default ErrorMessage;

interface Styles {
	error: TextStyle;
}

const styles = StyleSheet.create<Styles>({
	error: {
		color: "red",
		fontSize: 18,
		marginBottom: 10,
	},
});
