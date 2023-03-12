import styled from "styled-components";

export const AboutContainer = styled.div``;
export const PrivacyContainer = styled.div``;
export const RefundContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem 0;

  h1 {
    color: ${process.env.REACT_APP_THEME_COLOR};
    font-size: 2rem;
    font-weight: bold;
    margin: 1.5rem 0;
  }

  p {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    text-align: justify;

    a {
      color: ${process.env.REACT_APP_THEME_COLOR};
    }
  }
`;
export const TermsContainer = styled.div``;
