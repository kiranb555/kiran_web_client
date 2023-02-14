import styled from 'styled-components';

export const AboutWrapper = styled.div`
	${({ theme }) => `
		font-size: ${theme.sizing.size_20};
		margin: ${theme.sizing.size_0} auto;
		margin-top: 100px;
		margin-bottom:30px;
	& > section:last-child {
		margin-bottom: ${theme.sizing.size_0};
	}
	@media only screen and (max-width: 600px) {
		margin-top: 75px;
	}
`}
`;
export const ChipHolder = styled.div`
	.badge{
		margin-right: ${({ theme }) => theme.sizing.size_5};
	}
`;

export const SectionWrapper = styled.section`
	margin-bottom: ${({ theme }) => theme.sizing.size_32};
	& > h2 {
		padding-bottom: ${({ theme }) => theme.sizing.size_16};
		font-weight:bold;
		/* text-shadow: 0 0.032em 0 #b0b0b0, 0px 0.15em 0.11em rgb(0 0 0 / 15%), 0px 0.25em 0.021em rgb(0 0 0 / 10%), 0px 0.32em 0.32em rgb(0 0 0 / 10%); */
	}
`;
