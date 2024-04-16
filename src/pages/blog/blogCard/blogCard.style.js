import styled from 'styled-components';

export const BlogDetailsWrapper = styled.div`
	${({ theme }) => `
        display: flex;
        gap: 20px;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-bottom: 3.2rem;
        width: 800px;
        border: 1px solid #ccc;
        border-radius: 10px;
        box-shadow: 1px 4px #ccccccc7;
        padding: 20px;
    
        @media only screen and (max-width: 600px) {
            width: 320px;
            flex-direction: column-reverse;
        }

        .blogCard__content{
            display: flex;
            flex-direction: column;
            flex: 2;
            a{
                cursor: pointer;
            }
            &-footer{
                display: flex;
                justify-content: space-between;
                margin-top: auto;
                &-details{
                    font-size: 12px;
                    & > span{
                        padding-right: 10px;
                    }
                    .topic{
                        border: 1px solid #ccc;
                        border-radius: 20px;
                        padding: 8px;
                        color: #6B6B6B;
                        background-color: #f2f2f2;
                        font-size: 12px;
                        font-weight: bold;
                        text-transform: capitalizes;
                    }
                }
                &-likes{
                    cursor: pointer;
                }
            }
            @media only screen and (max-width: 600px) {
                font-size: .8rem;
                h2{
                    font-size: 1.2rem;
                }
            }
        }
        .blogCard__image{
            display: flex;
            align-items: center;
            & img{
                aspect-ratio: auto;
                cursor: pointer;
            }
            @media only screen and (max-width: 600px) {
                justify-content: center;
            }
        }
`}
`;