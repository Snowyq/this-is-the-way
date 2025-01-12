import { PiSidebarDuotone } from 'react-icons/pi';
import styled, { css } from 'styled-components';
import Button from './Button';
import { Ref } from 'react';

const StyledTopBar = styled.div`
	z-index: 2000;
	background-color: var(--color-brand-50);
	background-color: transparent;
	/* box-shadow: 0 0 25px 10px var(--color-brand-800-70); */
	/* box-shadow: 0 0 0px 10px rgba(0, 0, 0, 0.1); */
	width: 100%;
	/* height: 5rem; */
	position: absolute;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: start;
	padding: var(--spacing-4);
`;

const states = {
	opened: css`
		box-shadow: 1px 1px 5px 1px var(--color-neutral-500);
	`,
	closed: css`
		box-shadow: 3px 3px 10px 2px var(--color-neutral-500);
	`,
};

const Shadow = styled.div`
	border-radius: 10px;
	transition: all ease-out 0.2s 0.1s;

	${props => states[props.state]}
`;

interface TopBarProps {
	sidebarControls: {
		toggle: () => void;
		isOpen: boolean;
	};
	sidebarExcept: Ref<HTMLButtonElement>;
}

const TopBar = (props: TopBarProps) => {
	const { toggle, isOpen, setIsBtnHovered } = props.sidebarControls;

	return (
		<StyledTopBar>
			<Shadow state={isOpen ? 'opened' : 'closed'}>
				<Button
					iconSize='xl'
					size='small'
					ref={props.sidebarExcept}
					onClick={toggle}
					onMouseEnter={() => setIsBtnHovered(true)}
					onMouseLeave={() => setIsBtnHovered(false)}
				>
					<PiSidebarDuotone />
				</Button>
			</Shadow>
		</StyledTopBar>
	);
};

export default TopBar;
