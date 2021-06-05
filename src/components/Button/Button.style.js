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
			? '1rem'
			: '12px'};
	background-color: ${(props) =>
		props.variant === 'filled'
			? 'pink'
			: props.variant === 'contained'
			? 'green'
			: 'transparent'};
	color: #ffffff;
	cursor: pointer;
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
