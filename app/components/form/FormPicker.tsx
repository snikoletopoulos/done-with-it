import { useFormikContext } from "formik";

import { Option } from "types/picker.types";

import Picker from "components/ui/Picker/Picker";
import ErrorMessage from "components/form/ErrorMessage";

interface Value {

}

interface Props<Value extends Option> {
	item: Option[];
	name: string extends keyof Value;
	placeholder: string;
}

const FormPicker = <V,>(props: Props<V>) => {
	const { errors, setFieldValue, touched, values } = useFormikContext<V>();

	return (
		<>
			<Picker
				options={props.item}
				onSelectItem={item => setFieldValue(props.name, item)}
				placeholder={props.placeholder}
				selectedItem={values[props.name]}
			/>
			<ErrorMessage error={errors[props.name]} />
		</>
	);
};

export default FormPicker;
