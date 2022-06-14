import { useRef } from "react";
import { StyleSheet, ScrollView, View } from "react-native";

import ImageInput from "./ImageInput";

interface Props {
	imageUris?: string[];
	onRemoveImage: (uri: string) => void;
	onAddImage: (uri: string) => void;
}

const ImageInputList: React.FC<Props> = ({
	imageUris = [],
	onRemoveImage,
	onAddImage,
}) => {
	const scrollView = useRef<ScrollView>(null);

	return (
		<View>
			<ScrollView
				ref={scrollView}
				horizontal
				onContentSizeChange={() => scrollView.current?.scrollToEnd()}
			>
				<View style={styles.imageListContainer}>
					{imageUris.map(uri => (
						<View key={uri} style={styles.image}>
							<ImageInput onChangeImage={onRemoveImage} imageUri={uri} />
						</View>
					))}
					<ImageInput onChangeImage={onAddImage} />
				</View>
			</ScrollView>
		</View>
	);
};

export default ImageInputList;

const styles = StyleSheet.create({
	imageListContainer: {
		flexDirection: "row",
	},

	image: {
		marginRight: 10,
	},
});
