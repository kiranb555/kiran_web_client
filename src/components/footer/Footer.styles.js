import Styled from 'styled-components';

export const FooterWrapper = Styled.footer`
    width: 100%;
    margin-top: auto;
    padding: .6rem 0;
    color: #ffffffb3;
    background-color: #231c42;
    font-size : 1.2rem;

    & > div{
      display : flex;
      justify-content : center;
      align-items : center;
      margin: .6rem 0;
      & > svg{
        margin-right : 1.2rem;
        cursor : pointer;

        & :hover{
          color : #ffffff;
        }
      }
    }
`;
