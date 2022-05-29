import styled from 'styled-components';

export const HomePageWrapper = styled.div`
	padding-bottom: ${({ theme }) => theme.sizing.size_32};
`;

export const BannerWrapper = styled.div`
	${({ theme }) => `
	min-height: ${theme.sizing.size_300};
	height: ${theme.sizing.size_35vh};
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
`}
`;

export const BannerTitle = styled.h1`
	font-size: ${({ theme }) => theme.sizing.size_40};
`;

export const BannerSubtitle = styled.h2`
	font-size: ${({ theme }) => theme.sizing.size_16};
	margin-top: ${({ theme }) => theme.sizing.size_10};
`;

export const BannerButtonWrapper = styled.div`
	margin-top: ${({ theme }) => theme.sizing.size_24};
`;
