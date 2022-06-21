import { StyleSheet, Image, Pressable, Alert } from "react-native";
import Colors from "constants/colors";
import * as ImagePicker from "expo-image-picker";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "constants/colors";

interface Props {
	imageUri?: string;
	onChangeImage: (uri: string) => void;
}

const ImageInput: React.FC<Props> = props => {
	const { imageUri, onChangeImage } = props;

	const handleImageSelect = () => {
		if (imageUri) {
			Alert.alert("Delete", "Are you sure you want to delete this image?", [
				{ text: "Yes", onPress: () => onChangeImage(imageUri) },
				{ text: "No" },
			]);
			return;
		}

		(async () => {
			const { granted } = await ImagePicker.requestCameraPermissionsAsync();

			if (!granted) {
				Alert.alert(
					"Permission Denied",
					"You need to grant camera permissions to use this app."
				);
				return;
			}

			const pickerResult = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.Images,
				quality: 0.5,
			});

			if (!pickerResult.cancelled) {
				onChangeImage(pickerResult.uri);
			}
		})();
	};

	return (
		<Pressable style={styles.boxContainer} onPress={handleImageSelect}>
			{imageUri ? (
				<Image
					style={styles.image}
					source={{ uri: imageUri }}
					height={100}
					width={100}
				/>
			) : (
				<MaterialCommunityIcons color={colors.medium} name="camera" size={40} />
			)}
		</Pressable>
	);
};

export default ImageInput;

const styles = StyleSheet.create({
	boxContainer: {
		backgroundColor: Colors.light,
		height: 100,
		width: 100,
		borderRadius: 15,
		justifyContent: "center",
		alignItems: "center",
		overflow: "hidden",
	},

	image: {
		height: "100%",
		width: "100%",
	},
});
