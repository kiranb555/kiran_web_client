import Styled from 'styled-components';

export const PaperTableWrapper = Styled.div`
    margin : 10px 0;
    padding : 1rem;
    border: 1px solid #eee;
    border-radius : 4px;
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);

    .paper__holder {
         display : flex;
    & > div {
        &:nth-child(1) {
            flex : 1;
            margin-right : 1rem;
            text-transform : capitalize;
        }
        &:nth-child(2) {
            flex : 2
        }
    }
}
`;

export const ChipWrapper = Styled.div`
    & > button {
        margin-right : 5px;
        margin-bottom : 5px;
    }
`;
