import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  background: skyblue;
  border-radius: 3px;
  border: none;
  color: white;
  border-radius: 8px;
  width: 206px;
  height: 63px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;