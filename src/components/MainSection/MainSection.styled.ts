import styled from "styled-components";

export const MainSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 200px;
`;
export const MainSectionBlock = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #6c2d2c;
  border-radius: 20px;
  padding: 30px;
  margin: 0 auto;
  gap: 30px;
  box-shadow: 10px 10px 20px rgba(159, 70, 54, 0.3);
`;

export const MainInputLabel = styled.label`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 10px;
  width: 300px;
`;

export const MainInput = styled.input`
  background-color: #f1dcc9;
  border-radius: 5px;
  overflow: hidden;
  height: 50px;
  padding-left: 15px;
  padding-right: 55px;
  border: none;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0; 
  }
`;
