import styled from 'styled-components';

const StyledMapBox = styled.div`
	background-color: yellow;
	width: 100%;
	height: 100%;
`;

interface MapBoxProps {
	children: React.ReactNode;
}

const MapBox = (props: MapBoxProps) => {
	const { children } = props;

	return <StyledMapBox>{children}</StyledMapBox>;
};

export default MapBox;
