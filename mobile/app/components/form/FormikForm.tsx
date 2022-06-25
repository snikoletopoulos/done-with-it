import { PropsWithChildren } from "react";
import { Formik, FormikConfig, FormikValues } from "formik";

const FormikForm = <T extends FormikValues>(
	props: PropsWithChildren<FormikConfig<T>>
) => {
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
