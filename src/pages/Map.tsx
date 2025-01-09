import MapBox from '../features/map/MapBox';
import MapLayout from '../features/map/MapLayout';
import MapView from '../features/map/MapView';

interface MapProps {}

const Map = (props: MapProps) => {
	return (
		<MapLayout>
			<MapBox>
				<MapView />
			</MapBox>
		</MapLayout>
	);
};

export default Map;
