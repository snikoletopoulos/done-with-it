import { FormikValues, useFormikContext } from "formik";

import TextInput from "components/ui/TextInput";
import ErrorMessage from "components/form/ErrorMessage";

interface Props extends React.ComponentProps<typeof TextInput> {
	name: keyof FormikValues;
}

const FormField: React.FC<Props> = props => {
	const { name, ...rest } = props;
	const loginForm = useFormikContext<FormikValues>();

	return (
		<>
			<TextInput
				value={loginForm.values[name]}
				onChangeText={loginForm.handleChange(name)}
				onBlur={loginForm.handleBlur(name)}
				{...rest}
			/>
			{loginForm.touched[name] && loginForm.errors[name] && (
				<ErrorMessage error={loginForm.errors[name]} />
			)}
		</>
	);
};

export default FormField;
