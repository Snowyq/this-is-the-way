import 'leaflet/dist/leaflet.css';
import {
	MapContainer,
	TileLayer,
	Marker,
	Popup,
	useMapEvents,
	Polyline,
	useMap,
} from 'react-leaflet';

import { useEffect, useState } from 'react';

import useUserLocalization from './useUserLocalization';
import MapControl from './MapControl';
import data from './data';

interface MapViewProps {}

const MapView = (props: MapViewProps) => {
	const [map, setMap] = useState<L.Map | null>(null);
	const { userPosition, isUserPosition } = useUserLocalization();

	useEffect(() => {
		// if (isUserPosition && map) {
		console.log(data.coordinates[0]);

		map?.setView(data.coordinates[0], 15);
		// }
	}, [isUserPosition, map]);

	return (
		<MapContainer
			center={[0, 0]}
			zoom={16}
			scrollWheelZoom={true}
			style={{ height: 'calc(100svh - 3.2rem)', width: '100%' }}
		>
			<MapControl setMap={setMap} />
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
			/>
			<Polyline
				positions={data.coordinates}
				color='blue' // Kolor linii
				weight={3} // Grubość linii
			/>
		</MapContainer>
	);
};

export default MapView;
