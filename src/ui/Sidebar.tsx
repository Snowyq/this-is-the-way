import styled from 'styled-components';

const StyledSidebar = styled.div`
	background-color: var(--color-gray-200);
	grid-row: 1 / -1;
	/* border-right: 2px inset solid var(--color-gray-300); */
	box-shadow: inset -5px 0px 5px -2px var(--color-gray-300);
`;

interface SidebarProps {}

const Sidebar = (props: SidebarProps) => {
	return <StyledSidebar></StyledSidebar>;
};

export default Sidebar;
