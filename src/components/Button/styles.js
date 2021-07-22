import styled from "styled-components";

export const ButtonSubmit = styled.input`
  margin: 10px 14px;
  border: none;
  width: 88%;
  height: 4vh;
  font-size: 0.9rem;
  border-radius: 2px;
  color: #fff;
  cursor: pointer;
  background-color: #eca02d;
  &:disabled {
    background-color: #d4d4d4;
    color: gray;
  }
  &:hover {
    &:not([disabled]) {
      background-color: #f39200;
    }
  }
`;
