import { useEffect, useState } from 'react';

interface useUserLocalizationParams {
	enableHighAccuracy?: boolean;
	timeout?: number;
	maximumAge?: number;
}

type Position = [number, number];

const useUserLocalization = (params?: useUserLocalizationParams) => {
	const [userPosition, setPosition] = useState<Position>([0, 0]);
	const [isUserPosition, setIsPosition] = useState<boolean>(false);
	console.log(userPosition, isUserPosition);

	useEffect(() => {
		if (!navigator.geolocation) {
			setIsPosition(false);
		}

		const onSuccess = (location: GeolocationPosition) => {
			const { latitude, longitude } = location.coords;
			setIsPosition(true);
			setPosition([latitude, longitude]);
		};

		const onError = () => {
			setIsPosition(false);
		};

		const watchId = navigator.geolocation.watchPosition(
			onSuccess,
			onError,
			params
		);

		return () => navigator.geolocation.clearWatch(watchId);
	}, [params]);

	return { isUserPosition, userPosition };
};

export default useUserLocalization;
