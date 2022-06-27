import { useState } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import * as Yup from "yup";

import useLocation from "hooks/use-location.hook";
import { categories } from "../../DUMMY_DATA";
import { addListing } from "../api/listings";

import {
	FormikForm,
	FormField,
	FormPicker,
	SubmitButton,
} from "components/form";
import FormImagePicker from "components/form/FormImagePicker";
import Screen from "components/ui/Screen";
import { Option } from "types/picker.types";
import UploadScreen from "./UploadScreen";
import CategoryPickerItem from "components/ui/Picker/CategoryPickerItem";

const validationSchema = Yup.object().shape({
	title: Yup.string().required().min(1).label("Title"),
	price: Yup.number().required().min(1).max(10000).label("Price"),
	decription: Yup.string().label("Description"),
	category: Yup.object()
		.shape({
			label: Yup.string().required().label("Label"),
			value: Yup.number().required().label("Value"),
			icon: Yup.string().required().label("Icon"),
			color: Yup.string().required().label("Color"),
		})
		.required()
		.nullable()
		.label("Category"),
	images: Yup.array().min(1, "Please select at least one image"),
});

const initialValues: {
	title: string;
	price: string;
	description: string;
	category: Option | null;
	images: string[];
} = {
	title: "test",
	price: "10",
	description: "asdfas",
	category: null,
	images: [],
};

const ListingEditScreen = () => {
	const location = useLocation();
	const [uploadProgress, setUploadProgress] = useState(0.5);
	const [uploadVisible, setUploadVisible] = useState(false);

	return (
		<Screen>
			<UploadScreen
				visible={uploadVisible}
				progress={uploadProgress}
				onDone={() => setUploadVisible(false)}
			/>
			<View style={styles.container}>
				<FormikForm
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={async (values, { resetForm }) => {
						console.log(values);
						if (!values.category) return;

						setUploadVisible(true);
						const response = await addListing(
							{
								categoryId: +values.category?.value,
								description: values.description,
								images: values.images,
								price: +values.price,
								title: values.title,
								location,
							},
							setUploadProgress
						);
						console.log(response);

						if (!response.ok) {
							setUploadVisible(false);
							alert("Something went wrong");
							return;
						}

						resetForm();
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
						numberOfColumns={3}
						PickerItemComponent={CategoryPickerItem}
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
			</View>
		</Screen>
	);
};

export default ListingEditScreen;

interface Styles {
	container: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
	container: {
		padding: 20,
	},
});
