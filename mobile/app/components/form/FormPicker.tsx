import { FormikValues, useFormikContext } from "formik";

import { Option } from "types/picker.types";
import type { PickerItemProps } from "types/picker.types";

import Picker from "components/ui/Picker/Picker";
import ErrorMessage from "components/form/ErrorMessage";

interface Props {
	item: Option[];
	name: keyof FormikValues;
	placeholder: string;
	width?: number | string;
	PickerItemComponent?: React.FC<PickerItemProps>;
	numberOfColumns?: number;
}

const FormPicker: React.FC<Props> = props => {
	const { errors, setFieldValue, values } = useFormikContext<FormikValues>();

	return (
		<>
			<Picker
				options={props.item}
				onSelectItem={item => setFieldValue(props.name.toString(), item)}
				placeholder={props.placeholder}
				selectedItem={values[props.name]}
				width={props.width}
				numberOfColumns={props.numberOfColumns ?? undefined}
				PickerItemComponent={props.PickerItemComponent ?? undefined}
			/>
			<ErrorMessage error={errors[props.name]} />
		</>
	);
};

export default FormPicker;
