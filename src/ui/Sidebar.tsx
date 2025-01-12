import { Ref } from 'react';
import styled, { css } from 'styled-components';

const states = {
	opened: css`
		translate: 0;
	`,
	closed: css`
		translate: -350px;
		box-shadow: none;
	`,
	hovered: css`
		translate: -300px;
	`,
};

const StyledSidebar = styled.div<{ state: 'opened' | 'closed' }>`
	background-color: var(--color-brand-100);
	transition: all ease-out 0.3s;
	box-shadow: 0 0 115px 5px var(--color-brand-800-70);
	box-shadow: 0 0 115px 5px var(--color-brand-800-70);
	position: absolute;
	/* top: 3.2rem; */
	top: 5rem;
	bottom: 5rem;
	padding-top: 10rem;
	left: 2rem;
	/* height: calc(100% - 3.2rem); */
	border-radius: 15px;
	width: 300px;
	z-index: 10000;

	${props => states[props.state]}
`;

interface SidebarProps {
	sidebarControls: {
		isOpen: boolean;
		close: () => void;
	};
	innerRef: Ref<HTMLDivElement>;
}

const Sidebar = (props: SidebarProps) => {
	const { isOpen, isBtnHovered } = props.sidebarControls;

	return (
		<StyledSidebar
			ref={props.innerRef}
			state={isOpen ? 'opened' : isBtnHovered ? 'hovered' : 'closed'}
		>
			{/* <p>Sidebar</p> */}
		</StyledSidebar>
	);
};

export default Sidebar;
