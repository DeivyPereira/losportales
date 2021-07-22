import React from "react";
import { Button } from "../../components/Button";
import {
  Wrapper,
  FieldSetValidate,
  Form,
  TitleValidate,
  Back
} from "../../styles/GlobalStyle";
import { MdMessage } from "react-icons/md";
import { useInputValue } from "../../hooks/useInputValue";
import { InputSmall } from "../../components/InputSmall";
import { useHistory } from "react-router-dom";
export const Validate = () => {
  
  let history = useHistory();
  const number1 = useInputValue("");
  const number2 = useInputValue("");
  const number3 = useInputValue("");
  const handleSubmit = (event) => {
    event.preventDefault();
    history.push("/thanks")
  };

  return (
    <div>
      <TitleValidate>Introduce el código de autenticación</TitleValidate>
      <Wrapper>
        <p>
          Introduce el código de verificación generado por su teléfono que acaba
          en <strong>+xx xxx xxx xxx</strong>
        </p>
        <Form onSubmit={handleSubmit}>
          <FieldSetValidate>
            <MdMessage size="2rem" color="#eca02d" />
            <InputSmall inputValue={number1} />
            <InputSmall inputValue={number2} />
            <InputSmall inputValue={number3} />
          </FieldSetValidate>
          <FieldSetValidate>
            <legend>Reenviar Codigo</legend>
          </FieldSetValidate>
          <Button type="submit" text="Verificar"  disabled={ number1.value !== '1' || number2.value !== '2' || number3.value !== '3' } />
        </Form>
      </Wrapper>
      <Back >Volver Atras</Back>
    </div>
  );
};
