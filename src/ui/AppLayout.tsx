import { Outlet } from 'react-router';

import styled from 'styled-components';
import Header from './Header';
import Sidebar from './Sidebar';

const StyledAppLayout = styled.div`
	display: grid;
	grid-template-columns: 3.2rem calc(100svw - 3.2rem);
	grid-template-rows: 3.2rem calc(100svh - 3.2rem);
	height: 100svh;
	width: 100svw;
	overflow: hidden;
`;

const Main = styled.div`
	background-color: var(--color-gray-50);
	height: 100%;
	/* overflow-y: scroll; */
`;

const Container = styled.div`
	max-width: 120rem;
	height: 100%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	gap: 3.2rem;
`;

function AppLayout() {
	return (
		<StyledAppLayout>
			<Header />
			<Sidebar />
			<Main>
				<Container>
					<Outlet />
				</Container>
			</Main>
		</StyledAppLayout>
	);
}

export default AppLayout;
