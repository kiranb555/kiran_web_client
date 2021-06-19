import styled from 'styled-components';

export const ErrorWrapper = styled.div`
	display: flex;
	justify-content: center;

	& > div {
		width: 500px;
	}

	@media only screen and (max-width: 600px) {
		& > div {
			width: 300px;
		}
	}
`;
