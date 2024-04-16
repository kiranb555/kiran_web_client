import styled from 'styled-components';

export const BlogWrapper = styled.div`
	${({ theme }) => `
		font-size: ${theme.sizing.size_20};
		margin: ${theme.sizing.size_0} auto;
		margin-top: 100px;
		margin-bottom:30px;
        display: flex;
        justify-content: center;
        @media only screen and (max-width: 600px) {
            margin-top: 75px;
        }
        .heading{
            display: flex;
            align-items: center;
            h2{
                flex:1;
                font-weight: bold;
                text-align: center;
                margin-bottom: 1.5rem;
            }
            svg{
                cursor: pointer;
            }
        }
`}
`;

export const BlogDetailsWrapper = styled.div`
${({ theme }) => `
    margin: ${theme.sizing.size_0} auto;
    margin-top: 100px;
    margin-bottom:30px;
    display: flex;
    justify-content: center;
    @media only screen and (max-width: 600px) {
        margin-top: 75px;
    }
    .refresh{
        cursor: pointer;
        font-size: 20px;
    }
    .image{
        display: flex;
        justify-content: center;
    }
    .heading{
        display: flex;
        align-items: center;
        svg{
            margin-right: 20px;
        }
        h1{
            flex:2;
            text-align: center;
        }
    }
`}
`;