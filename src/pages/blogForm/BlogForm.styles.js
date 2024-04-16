import styled from 'styled-components';

export const BlogFormWrapper = styled.div`
	${({ theme }) => `
		font-size: ${theme.sizing.size_20};
		margin: ${theme.sizing.size_0} auto;
		margin-top: 100px;
		margin-bottom:30px;
        @media only screen and (max-width: 600px) {
            margin-top: 75px;
        }
        @media only screen and (min-width: 600px) {
            label{
                min-width: 200px;
            }
        }
`}
`;