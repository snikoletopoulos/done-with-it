import * as Yup from "yup";
import { categories } from "../../DUMMY_DATA";

import {
	FormikForm,
	FormField,
	FormPicker,
	SubmitButton,
} from "components/form";

const validationSchema = Yup.object().shape({
	title: Yup.string().required().min(1).label("Title"),
	price: Yup.number().required().min(1).max(10000).label("Price"),
	decription: Yup.string().label("Description"),
	category: Yup.string().required().nullable().label("Category"),
});

const ListingEditScreen = () => {
	return (
		<FormikForm
			initialValues={{
				title: "",
				price: "",
				decription: "",
				category: null,
			}}
			validationSchema={validationSchema}
			onSubmit={values => {
				console.log(values);
			}}
		>
			<FormField maxLength={255} name="title" placeholder="Title" />
			<FormField
				keyboardType="numeric"
				maxLength={8}
				name="price"
				placeholder="Price"
				width={120}
			/>
			<FormPicker
				item={categories}
				name="category"
				placeholder="Category"
				width="50%"
			/>
			<FormField
				maxLength={255}
				multiline
				name="description"
				numberOfLines={3}
				placeholder="Description"
				width={120}
			/>
			<SubmitButton title="Post" />
		</FormikForm>
	);
};

export default ListingEditScreen;
