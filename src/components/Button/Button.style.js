import styled, { css } from 'styled-components';

const baseStyle = css`
	padding: ${(props) =>
		props.size === 'large'
			? '1rem 1.5rem'
			: props.size === 'medium'
			? '8px 14px'
			: '5px 12px'};
	border: ${(props) =>
		props.variant === 'outlined' ? '1px solid red' : '0px'};
	border-radius: ${(props) =>
		props.variant === 'outlined' &&
		(props.size === 'large' || props.size === 'medium')
			? '1.2rem'
			: '1.5rem'};
	background-color: ${(props) =>
		props.variant === 'filled'
			? 'pink'
			: props.variant === 'contained'
			? '#17a974'
			: 'transparent'};
	color: #ffffff;
	cursor: pointer;
	box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
		0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
	&:hover {
		opacity: 0.9;
	}
`;
export const StyledButton = styled.button`
	${baseStyle}
`;

export const StyledLink = styled.a`
	${baseStyle}
`;
