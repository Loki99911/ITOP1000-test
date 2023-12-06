import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  background-color: #42313a;
  box-shadow: 0px 10px 20px rgba(159, 70, 54, 0.2);
  padding: 20px 0;
`;
export const HeaderBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
export const HeaderLogo = styled.h1`
  font-family: "Nova Square", sans-serif;
  color: #f1dcc9;
`;
export const UAHWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
export const HeaderTitle = styled.h3`
  font-family: inherit;
  font-size: 24px;
  display: flex;
  align-items: center;
  gap: 12px;
`;
export const HeaderTitleAccent = styled.span`
  font-size: 16px;
  color: greenyellow;
`;
