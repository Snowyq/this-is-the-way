import { useMap, useMapEvents } from 'react-leaflet';
import useUserLocalization from './useUserLocalization';
import { useEffect } from 'react';

interface MapControlProps {
	setMap: Function;
}

const MapControl = (props: MapControlProps) => {
	const { userPosition, isUserPosition } = useUserLocalization();
	const map = useMap();

	useEffect(() => {
		props.setMap(map);
	}, [map]);

	return null;
};

export default MapControl;
