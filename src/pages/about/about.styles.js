import styled from 'styled-components';

export const AboutWrapper = styled.div`
	font-size: 1.2rem;
	max-width: 980px;
	margin: 0 auto;
	padding: 2rem;

	& > section:last-child {
		margin-bottom: 0;
	}
`;
export const ChipHolder = styled.div`
	& button {
		margin-right: 10px;
		margin-bottom: 10px;
	}
`;

export const SectionWrapper = styled.section`
	margin-bottom: 2rem;
	& > h2 {
		padding-bottom: 1rem;
	}
`;
