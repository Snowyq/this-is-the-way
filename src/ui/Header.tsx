import styled from 'styled-components';
import TopBar from './TopBar';
import useSidebar from '../hooks/useSidebar';
import Sidebar from './Sidebar';
import { useClickOutside } from '../hooks/useClickOutside';

const StyledHeader = styled.header`
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: transparent;
`;

const Header = () => {
	const sidebarControls = useSidebar();
	const { ref, exceptRef } = useClickOutside(sidebarControls.close);

	return (
		<StyledHeader>
			<Sidebar innerRef={ref} sidebarControls={sidebarControls} />
			<TopBar sidebarExcept={exceptRef} sidebarControls={sidebarControls} />
		</StyledHeader>
	);
};

export default Header;
