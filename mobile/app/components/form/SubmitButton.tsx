import { useFormikContext } from "formik";

import Button from "components/ui/Button";

interface Props {
	title: string;
}

const SubmitButton: React.FC<Props> = props => {
	const form = useFormikContext();

	return <Button title={props.title} onPress={() => form.handleSubmit()} />;
};

export default SubmitButton;
