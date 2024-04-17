import styled from 'styled-components';

export const HomePageWrapper = styled.div`
	padding-bottom: ${({ theme }) => theme.sizing.size_32};
	margin-top:56px;
	.home-social{
		a{
			cursor: pointer;
			margin-right: 20px;
			font-size:20px;
			&:hover{
				color: rgb(255,255,255,0.54);
			}
		}
	}
	.homepage_intro{
		font-size: 1.5rem;
		margin-top: 40px;
		@media (max-width: 600px){
			font-size: 1rem;
		}
	}
`;

export const BannerWrapper = styled.div`
	${({ theme }) => `
	min-height: ${theme.sizing.size_300};
	height: 350px;
	background: linear-gradient(-213deg, #5e31dc 0%, ${theme.color.background.primary} 100%);
	color: ${theme.color.scaffold.text.primary};
	border-right: none;
	border-left: none;
	border-top: none;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	img{
		width:200px;
		height:200px; 
		overflow:hidden;
		border-radius:50%;
		@media (max-width: 1440px) {
			width:150px;
			height:150px; 
		}
	}
`}
`;

export const BannerTitle = styled.h1`
	font-size: ${({ theme }) => theme.sizing.size_40};
	padding-top: ${({ theme }) => theme.sizing.size_10};
`;

export const BannerSubtitle = styled.h2`
	font-size: ${({ theme }) => theme.sizing.size_16};
	margin-top: ${({ theme }) => theme.sizing.size_10};
`;

export const BannerButtonWrapper = styled.div`
	margin-top: ${({ theme }) => theme.sizing.size_40};
	display: flex;
	flex-wrap: wrap;
	justify-content:center;
	gap: 15px
`;
