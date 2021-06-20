import styled from 'styled-components';

export const AboutWrapper = styled.div`
	${({ theme }) => `
		font-size: ${theme.sizing.size_20};
		max-width: ${theme.sizing.size_980};
		margin: ${theme.sizing.size_0} auto;
		padding: ${theme.sizing.size_32};

	& > section:last-child {
		margin-bottom: ${theme.sizing.size_0};
	}
`}
`;
export const ChipHolder = styled.div`
	& button {
		margin-right: ${({ theme }) => theme.sizing.size_10};
		margin-bottom: ${({ theme }) => theme.sizing.size_10};
	}
`;

export const SectionWrapper = styled.section`
	margin-bottom: ${({ theme }) => theme.sizing.size_32};
	& > h2 {
		padding-bottom: ${({ theme }) => theme.sizing.size_16};
	}
`;
