import {
	MapContainer,
	TileLayer,
	Marker,
	Popup,
	useMapEvents,
	useMap,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef, useState } from 'react';
import useUserLocalization from './useUserLocalization';
import { map } from 'leaflet';
import MapControl from './MapControl';

interface MapViewProps {}

const MapView = (props: MapViewProps) => {
	const [map, setMap] = useState<L.Map | null>(null);
	const { userPosition, isUserPosition } = useUserLocalization();

	useEffect(() => {
		if (isUserPosition && map) {
			map.setView(userPosition, 15);
		}
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
		</MapContainer>
	);
};

export default MapView;
