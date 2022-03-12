import styled from 'styled-components';

export const ContactWrapper = styled.div`
	${({ theme }) => `
		box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
			0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
		padding: 40px 20px;
		border-radius: 4px;

		& > form {
			display: block;
			box-sizing: border-box;

			& > div {
				margin-bottom: 1rem;

				&:last-child {
					display: flex;
					justify-content: center;
					align-items: center;
					padding-top: 1rem;
				}
			}
			button{
				width: 200px;
				@media screen and (max-width: 375px) {
					width: 150px;
				}
			}
		}
	`};
`;

export const Row = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
	& > div {
		flex: 1 1 300px;

		& label {
			font-weight: 400;
			text-transform: capitalize;
			display: inline-block;
			margin-bottom: 0.75rem;
		}
	}
`;

export const InputField = styled.input`
${({ theme }) => `
	padding: 0.75rem;
	border-radius: 4px;
	display: block;
	width: 100%;
	box-sizing: border-box;
	border: none;
	background-color: ${theme.color.background.bgLight};
	transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`}
`;
