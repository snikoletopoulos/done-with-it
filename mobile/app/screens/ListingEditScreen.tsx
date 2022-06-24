import * as Yup from "yup";
import { categories } from "../../DUMMY_DATA";

import useLocation from "hooks/use-location.hook";

import {
	FormikForm,
	FormField,
	FormPicker,
	SubmitButton,
} from "components/form";
import FormImagePicker from "components/form/FormImagePicker";
import Screen from "components/ui/Screen";

const validationSchema = Yup.object().shape({
	title: Yup.string().required().min(1).label("Title"),
	price: Yup.number().required().min(1).max(10000).label("Price"),
	decription: Yup.string().label("Description"),
	category: Yup.string().required().nullable().label("Category"),
	images: Yup.array().min(1, "Please select at least one image"),
});

const ListingEditScreen = () => {
	const location = useLocation();

	return (
		<Screen>
			<FormikForm
				initialValues={{
					title: "",
					price: "",
					decription: "",
					category: null,
					images: [],
				}}
				validationSchema={validationSchema}
				onSubmit={values => {
					console.log(values, location);
				}}
			>
				<FormImagePicker name="images" />
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
					width="100%"
				/>
				<SubmitButton title="Post" />
			</FormikForm>
		</Screen>
	);
};

export default ListingEditScreen;
