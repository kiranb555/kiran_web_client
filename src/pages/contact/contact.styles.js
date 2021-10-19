import styled from "styled-components";

export const ContactWrapper = styled.section`
  max-width: 980px;
  width: 100%;
  padding: 2rem;
  margin: 0 auto;

  & > div > h2 {
    font-size: 30px;
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 375px) {
    max-width: calc(350px - 5rem);
    padding: 2rem 0rem;
  }
  @media screen and (min-width: 376px) and (max-width: 559px) {
    max-width: 350px;
  }
  @media screen and (min-width: 600px) and (max-width: 768px) {
    max-width: 500px;
  }
  @media screen and (min-width: 1024px) and (max-width: 1440px) {
    max-width: 800px;
  }
`;
