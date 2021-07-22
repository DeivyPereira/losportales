import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
            box-sizing: border-box;
            font-family: 'Roboto', 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    *, *::before, *::after {
            box-sizing: inherit;
    }

    ul, li, h1, h2, h3, p, button {
            margin: 0px;
            padding: 0px
    }
    h1{
        text-align: center;
        font-size: 1.5rem;
    }
    p{
        text-align: center;
        font-size: 0.9rem;
        margin: 2px 0px;
    }
    body {
            background: #fefefe;
            width: 100vw;
            height: 100vh;
    }
`;

export const Wrapper = styled.div`
  min-width: 320px;
  max-width: 320px;
  height: auto;
  padding: 25px 7px;
  background-color: #d21db2;
  position: absolute;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 7px;
  color: white;
`;

export const FieldSet = styled.fieldset`
  border: none;
  margin-bottom: 0px;
  padding-bottom: 0px;
  legend {
    font-size: 0.9rem;
  }
`;

export const FieldSetValidate = styled.fieldset`
  text-align: center;
  border: none;
  margin-bottom: 0px;
  padding-bottom: 0px;
  legend {
    font-size: 0.9rem;
    color: #eca02d;
    padding-top: 1.5vh;
    margin-bottom: 1.5vh;
  }
`;

export const Form = styled.form`
  margin-top: 10px;
`;

export const TitleValidate = styled.h1`
  transform: translate(-50%, -50%);
  top: 31%;
  left: 50%;
  position: absolute;
  width: 100%;
  color: #00509f;
  font-size: 1rem;
`;

export const Back = styled.div`
  transform: translate(-50%, -50%);
  top: 70%;
  left: 50%;
  position: absolute;
  width: 100%;
  color: #00509f;
  font-size: 1rem;
  text-align: center;
`;
