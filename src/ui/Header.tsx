import styled from 'styled-components';

const StyledHeader = styled.div`
	background-color: var(--color-gray-100);
	/* grid-column: 1 / -1; */
	/* border-bottom: 2px solid inset var(--color-gray-200); */
	box-shadow: inset 0px -4px 5px -2px var(--color-gray-200);
`;

interface HeaderProps {}

const Header = (props: HeaderProps) => {
	return <StyledHeader></StyledHeader>;
};

export default Header;
