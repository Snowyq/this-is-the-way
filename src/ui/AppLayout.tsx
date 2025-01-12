import styled from 'styled-components';
import Header from './Header';
import { Outlet } from 'react-router';

const StyledAppLayout = styled.div`
	/* display: grid;
	grid-template-rows: 3.2rem calc(100svh - 3.2rem); */
	width: 100svw;
	height: 100svh;
`;
const Container = styled.div``;
const Main = styled.main`
	background-color: var(--color-brand-500);
	width: 100%;
	height: 100%;
	z-index: 0;
`;

// interface AppLayoutProps {}

const AppLayout = () => {
	return (
		<StyledAppLayout>
			<Header />
			<Main>
				<Container>
					<Outlet />
				</Container>
			</Main>
		</StyledAppLayout>
	);
};

export default AppLayout;
