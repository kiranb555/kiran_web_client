import styled from 'styled-components';

export const FooterWrapper = styled.footer`
	${({ theme }) => `
	width: 100%;
	margin-top: auto;
	padding: ${theme.sizing.size_10} ${theme.sizing.size_0};
	color: ${theme.color.scaffold.greyscale.dark_mid_grey};
	background-color: ${theme.color.background.ternary};
	font-size: ${theme.sizing.size_20} ;

	.footer-social {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: ${theme.sizing.size_10} ${theme.sizing.size_0};
		& a{
			& svg{
				cursor: pointer;
				margin-right: ${theme.sizing.size_20};
			}
			&:hover {
				color: rgb(255,255,255,.54);
			}
			&:last-child{
				& svg{
					margin-right: ${theme.sizing.size_0};
				}
			}
		}
	}
	.footer-copywrite{
		font-size: ${theme.sizing.size_14};
		padding: ${theme.sizing.size_15} ${theme.sizing.size_0};
		text-align:center;
	}
`}
`;
