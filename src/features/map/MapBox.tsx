import styled from 'styled-components';

const StyledMapBox = styled.div`
	background-color: yellow;
	width: 100%;
	height: 100%;
	z-index: 0;
`;

interface MapBoxProps {
	children: React.ReactNode;
}

const MapBox = (props: MapBoxProps) => {
	const { children } = props;

	return <StyledMapBox>{children}</StyledMapBox>;
};

export default MapBox;
