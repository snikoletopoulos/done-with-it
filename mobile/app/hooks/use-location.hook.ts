import { useState, useEffect } from "react";
import * as Location from "expo-location";

const useLocation = () => {
	const [location, setLocation] = useState<{
		latitude: number;
		longitude: number;
	}>();

	useEffect(() => {
		(async () => {
			const { granted } = await Location.requestPermissionsAsync();

			if (!granted) return;

			const {
				coords: { latitude, longitude },
			} = await Location.getCurrentPositionAsync();

			setLocation({ latitude, longitude });
		})();
	}, []);

	return location;
};

export default useLocation;
