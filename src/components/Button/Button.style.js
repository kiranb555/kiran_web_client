import styled, { css } from 'styled-components';

const baseStyle = css`
	${({ theme, variant, size }) => `
	padding: ${
		size === 'large'
			? `${theme.sizing.size_16} ${theme.sizing.size_24}`
			: size === 'medium'
			? `${theme.sizing.size_8} ${theme.sizing.size_14}`
			: `${theme.sizing.size_5} ${theme.sizing.size_12}`
	};
	border: ${variant === 'outlined' ? '1px solid red' : '0px'};
	border-radius: ${
		variant === 'outlined' && (size === 'large' || size === 'medium')
			? theme.sizing.size_20
			: theme.sizing.size_24
	};
	background-color: ${
		variant === 'filled'
			? 'pink'
			: variant === 'contained'
			? theme.color.background.secondary
			: 'transparent'
	};
	color: ${theme.color.scaffold.greyscale.black};
	cursor: pointer;
	box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
		0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
	&:hover {
		opacity: 0.9;
	}
	`}
`;
export const StyledButton = styled.button`
	${baseStyle}
`;

export const StyledLink = styled.a`
	${baseStyle}
`;
