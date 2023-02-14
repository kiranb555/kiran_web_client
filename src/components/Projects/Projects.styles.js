import styled from 'styled-components';

export const ProjectWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	/* max-width: 1440px; */
	margin: auto;
	margin-top: 100px;

	@media only screen and (max-width: 600px) {
		margin-top: 75px;
	}
`;

export const ProjectHeading = styled.h2`
	${({ theme }) => `
		font-weight: bold;
		text-transform: capitalize;
		text-align: center;
		color: ${theme.color.scaffold.text.secondary}
	`}
`;

export const ProjectCardWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 1.5rem;
	justify-content: center;
`;
