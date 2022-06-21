import { FormikValues, useFormikContext } from "formik";

import ErrorMessage from "components/form/ErrorMessage";
import ImageInputList from "components/ImageInputList";

interface Props {
	name: string;
}

const FormImagePicker: React.FC<Props> = props => {
	const { name } = props;
	const { setFieldValue, values, touched, errors } =
		useFormikContext<FormikValues>();

	const imageUris = values[name] as string[];

	const handleAddImage = (uri: string) => {
		setFieldValue(name, [...imageUris, uri]);
	};

	const handleRemoveImage = (uri: string) => {
		setFieldValue(
			name,
			imageUris.filter(imageUri => imageUri !== uri)
		);
	};

	return (
		<>
			<ImageInputList
				imageUris={imageUris}
				onAddImage={handleAddImage}
				onRemoveImage={handleRemoveImage}
			/>
			{touched[name] && errors[name] && <ErrorMessage error={errors[name]} />}
		</>
	);
};

export default FormImagePicker;
