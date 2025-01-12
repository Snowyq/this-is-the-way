import { PropsWithChildren, forwardRef } from 'react';
import styled, { css } from 'styled-components';

// Type definitions for props
interface ButtonProps {
	size?: keyof typeof sizes; // 'small' | 'medium' | 'large'
	variation?: keyof typeof variations; // 'primary' | 'secondary' | 'danger'
	type?: keyof typeof types; // 'default' | 'circle'
	ratio?: keyof typeof ratio; // 'default' | '1/1'
	iconSize?: keyof typeof iconSizes;
}

const types = {
	default: css``,
	circle: css`
		border-radius: 50%;
		aspect-ratio: 1/1;
		display: flex;
		align-items: center;
		justify-content: center;
	`,
};

const ratio = {
	default: css``,
	'1/1': css`
		aspect-ratio: 1/1;
	`,
};

const sizes = {
	small: css`
		font-size: 1.2rem;
		padding: 0.2rem 0.4rem;
		text-transform: uppercase;
		font-weight: 600;
		text-align: center;
	`,
	medium: css`
		font-size: 1.4rem;
		padding: 1.2rem 1.6rem;
		font-weight: 500;
	`,
	large: css`
		font-size: 1.6rem;
		padding: 1.2rem 2.4rem;
		font-weight: 500;
	`,
};

const iconSizes = {
	small: css`
		& svg {
			font-size: 1.4rem;
		}
	`,
	medium: css`
		& svg {
			font-size: 1.8rem;
		}
	`,
	large: css`
		& svg {
			font-size: 2rem;
		}
	`,

	xl: css`
		& svg {
			font-size: 2rem;
		}
	`,
};

const variations = {
	primary: css`
		color: var(--color-brand-900);
		background-color: var(--color-brand-200);

		& svg {
			color: var(--color-brand-900);
		}

		&:hover {
			background-color: var(--color-brand-300);
		}
	`,
	secondary: css`
		color: var(--color-grey-600);
		background: var(--color-grey-0);
		border: 1px solid var(--color-grey-200);

		&:hover {
			background-color: var(--color-grey-50);
		}
	`,
	danger: css`
		color: var(--color-red-100);
		background-color: var(--color-red-700);

		&:hover {
			background-color: var(--color-red-800);
		}
	`,
};

const StyledButton = styled.button<ButtonProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	border: none;
	background: none;

	border-radius: 10px;

	${props => sizes[props.size || 'small']}
	${props => variations[props.variation || 'primary']}
	${props => types[props.type || 'default']}
	${props => ratio[props.ratio || '1/1']}
	${props => iconSizes[props.iconSize || 'xl']};
`;

// const Button = (props: PropsWithChildren) => {
// 	return <StyledButton {...props}>{props.children}</StyledButton>;
// };

const Button = forwardRef<
	HTMLButtonElement,
	React.ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => {
	return <StyledButton ref={ref} {...props} />;
});

export default Button;
