import { Keyboard, Alert } from "react-native";
import * as Notifications from "expo-notifications";

import { logError } from "../helpers/error-handling.helpers";
import { Listing } from "../types/listing.types";
import messageApi from "../api/messages";
import * as Yup from "yup";
import { FormikConfig } from "formik";

import { FormikForm, FormField, SubmitButton } from "./form";

const initialValues = { message: "" };

const formSchema = Yup.object().shape({
	message: Yup.string().required().label("Message"),
});

interface Props {
	listing: Listing;
}

const ContactSellerForm: React.FC<Props> = props => {
	const { listing } = props;

	const handleSubmit: FormikConfig<typeof initialValues>["onSubmit"] = async (
		{ message },
		{ resetForm }
	) => {
		Keyboard.dismiss();

		const result = await messageApi.send(message, listing.id);

		if (!result?.ok) {
			logError(result, "An error occured while sending the message");
			Alert.alert("Error", "Could not send the message to the seller");
			return;
		}

		resetForm();

		Notifications.scheduleNotificationAsync({
			content: {
				title: "Awesome!",
				body: "Your message was sent to the seller!",
			},
			trigger: null,
		});
	};

	return (
		<FormikForm
			initialValues={initialValues}
			validationSchema={formSchema}
			onSubmit={handleSubmit}
		>
			<FormField name="message" placeholder="Message..." />
			<SubmitButton title="contact seller" />
		</FormikForm>
	);
};

export default ContactSellerForm;
