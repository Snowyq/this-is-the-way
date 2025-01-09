import { useMap } from 'react-leaflet';
import { useEffect } from 'react';

interface MapControlProps {
	setMap: Function;
}

const MapControl = (props: MapControlProps) => {
	const map = useMap();

	useEffect(() => {
		props.setMap(map);
	}, [map]);

	return null;
};

export default MapControl;
