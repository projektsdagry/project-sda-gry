import styled from "@emotion/styled";

export const HomePageSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HomePageLogoContainer = styled.div`
  display: flex;
  @media (max-width: 700px) {
    display: none;
  }
  @media (max-width: 1516px) {
    margin: auto;
    width: 100%;
    object-fit: cover;
    align-items: center;
  }
  @media (max-width: 1200px) {
    width: 140%;
  }
`;

export const HeaderContainer = styled.div`
  font-size: 50px;
  font-weight: bold;
  text-align: left;
  @media (max-width: 1100px) {
    font-size: 60px;
    text-align: center;
    margin: auto;
  }
`;

export const SmallerHeaderContainer = styled.div`
  font-size: 20px;
  text-align: left;
  margin-top: 30px;
  @media (max-width: 1100px) {
    text-align: center;
    font-size: 30px;
    margin-top: 30px;
  }
`;
