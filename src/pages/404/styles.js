import styled from 'styled-components';

export const ErrorWrapper = styled.div`
	${({ theme }) => `
	display: flex;
	justify-content: center;

	& > div {
		width: ${theme.sizing.size_500};
	}

	@media only screen and (max-width: ${theme.layout.media_query.sm_max}) {
		& > div {
			width: ${theme.layout.media_query.sm_min}
		}
	}
	`}
`;
