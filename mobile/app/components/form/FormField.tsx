import { FormikValues, useFormikContext } from "formik";

import TextInput from "components/ui/TextInput";
import ErrorMessage from "components/form/ErrorMessage";

interface Props extends React.ComponentProps<typeof TextInput> {
	name: keyof FormikValues;
	width?: number | string;
}

const FormField: React.FC<Props> = props => {
	const { name, width, ...rest } = props;
	const loginForm = useFormikContext<FormikValues>();

	return (
		<>
			<TextInput
				value={loginForm.values[name]}
				onChangeText={loginForm.handleChange(name)}
				onBlur={loginForm.handleBlur(name) ?? undefined}
				width={width}
				{...rest}
			/>
			{loginForm.touched[name] && loginForm.errors[name] && (
				<ErrorMessage error={loginForm.errors[name]} />
			)}
		</>
	);
};

export default FormField;
