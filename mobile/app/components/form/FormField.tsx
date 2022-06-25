import { FormikValues, useFormikContext } from "formik";

import TextInput from "components/ui/TextInput";
import ErrorMessage from "components/form/ErrorMessage";

interface Props extends React.ComponentProps<typeof TextInput> {
	name: keyof FormikValues;
	width?: number | string;
}

const FormField: React.FC<Props> = props => {
	const { name, width, ...rest } = props;
	const form = useFormikContext<FormikValues>();

	return (
		<>
			<TextInput
				value={form.values[name]}
				onChangeText={form.handleChange(name)}
				onBlur={form.handleBlur(name) ?? undefined}
				width={width}
				{...rest}
			/>
			{form.touched[name] && form.errors[name] && (
				<ErrorMessage error={form.errors[name]} />
			)}
		</>
	);
};

export default FormField;
