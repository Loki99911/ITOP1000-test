import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 36px;
  width: 100%;
  @media screen and (min-width: 1280px) {
    top: 24px;
  }
`;
export const HeaderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const HeaderButtonWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

export const MenuButton = styled.button`
  display: inline-flex;
  height: 39px;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  border-radius: 500px;
  background-color: #dcefd8;
  transition: background-color 250ms linear;
  &:hover {
    background-color: #97d28b;
  }
`;


