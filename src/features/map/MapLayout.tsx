import styled from 'styled-components';

const StyledMapLayout = styled.div`
	width: 100%;
	height: 100%;
	overflow: hidden;
	z-index: 0;
`;

interface MapLayoutProps {
	children: React.ReactNode;
}

const MapLayout = (props: MapLayoutProps) => {
	const { children } = props;

	return <StyledMapLayout>{children}</StyledMapLayout>;
};

export default MapLayout;
