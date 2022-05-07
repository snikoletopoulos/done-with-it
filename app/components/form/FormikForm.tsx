import { PropsWithChildren } from "react";
import { Formik } from "formik";

const FormikForm: React.FC<
	PropsWithChildren<React.ComponentProps<typeof Formik>>
> = props => {
	return (
		<Formik
			{...props}
			initialValues={props.initialValues}
			onSubmit={props.onSubmit}
		>
			{() => props.children}
		</Formik>
	);
};

export default FormikForm;
