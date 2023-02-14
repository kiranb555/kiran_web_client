import styled from "styled-components";

export const ContactWrapper = styled.section`
  max-width: 980px;
  width: 100%;
  margin: 0 auto;
  margin-top: 100px; 
  margin-bottom: 30px;
  @media only screen and (max-width: 600px) {
		margin-top: 75px;
	}

  & > div > h2 {
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    margin-bottom: 2rem;
  }
`;
