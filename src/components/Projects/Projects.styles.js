import styled from 'styled-components';

export const ProjectWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1440px;
	margin: auto;
	padding: 0 1.5rem;

	@media only screen and (max-width: 600px) {
		padding: 1rem;
	}
`;

export const ProjectHeading = styled.div`
	text-transform: capitalize;
	text-align: center;
	font-size: 1.5rem;
	font-weight: 600;
	padding: 2rem 0;
`;

export const ProjectCardWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
	justify-content: center;
`;
