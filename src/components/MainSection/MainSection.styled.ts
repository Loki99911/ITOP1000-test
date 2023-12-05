import styled from 'styled-components';

export const MainSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const MainTitle = styled.h1`
  color: #173d33;
  font-size: 36px;
  font-weight: 400;
  line-height: 1;
  min-width: 100%;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    min-width: 300px;
    font-size: 48px;
    margin-bottom: 0;
    margin-right: 65px;
  }
  @media screen and (min-width: 1280px) {
    min-width: 485px;
    font-size: 64px;
    margin-right: 295px;
  }
`;

export const MainText = styled.p`
  color: #173d33;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: -0.64px;
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    margin-bottom: 43px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 20px;
  }
`;


