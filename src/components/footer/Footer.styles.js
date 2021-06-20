import styled from 'styled-components';

export const FooterWrapper = styled.footer`
	${({ theme }) => `
	width: 100%;
	margin-top: auto;
	padding: ${theme.sizing.size_10} ${theme.sizing.size_0};
	color: ${theme.color.scaffold.greyscale.dark_mid_grey};
	background-color: ${theme.color.background.ternary};
	font-size: ${theme.sizing.size_20} ;

	& > div {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: ${theme.sizing.size_10} ${theme.sizing.size_0};
		& > svg {
			margin-right: ${theme.sizing.size_20};
			cursor: pointer;

			& :hover {
				color: ${theme.color.icon.interactive};
			}
		}
	}
`}
`;
