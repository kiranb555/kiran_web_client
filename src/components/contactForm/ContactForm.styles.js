import styled from 'styled-components';

export const ContactWrapper = styled.div`
	box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
		0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
	padding: 40px 20px;
	border-radius: 4px;
`;

export const Row = styled.div`
	display: flex;
	flex-wrap: wrap;
	& > div {
		flex: 1;
	}
`;

export const InputField = styled.input`
	width: 100%;
	padding: 0.75rem;
	border-radius: 4px;
`;
