import React, { useState, useEffect } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { useInputValue } from "../../hooks/useInputValue";
import { Wrapper, FieldSet, Form } from "../../styles/GlobalStyle";
import { useHistory } from "react-router-dom";
function ListCityAll() {
  const [citys, setCity] = useState([]);
  useEffect(function () {
    window
      .fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => response.json())
      .then((response) => {
        const cityFormart = response.map((city) => {
          const { callingCodes, alpha3Code } = city;
          const returnsCity = {
            name: `+${callingCodes} (${alpha3Code} )`,
            value: alpha3Code,
          };
          return returnsCity;
        });
        setCity(cityFormart);
      });
  }, []);
  return { citys };
}

export const Register = () => {
  let history = useHistory();
  const { citys } = ListCityAll();
  const document = useInputValue("");
  const phone = useInputValue("");
  const [charactesDocument, setCharactesDocument] = useState(9);
  const documentsList = [
    { name: "C.E - Carnet de Extranjería", value: 9 },
    { name: "DNI - Documento Nacional de Identidad", value: 9 },
    { name: "P.S - Pasaporte", value: 12 },
    { name: "PTP - Permiso Temporal de Permanencia", value: 6 },
  ];
  const handleChangeDocument = (e) => {
    setCharactesDocument(e.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setInterval(() => {
      history.push("/validate")
    }, 300);
  };

  return (
    <Wrapper>
      <h1>¡Bienvenido!</h1>
      <p>
        ¿Aún no tienes una cuenta? <strong>Registrate</strong>
      </p>
      <Form onSubmit={handleSubmit}>
        <FieldSet>
          <legend>Documento de Identidad</legend>
          <Select options={documentsList} onChange={handleChangeDocument} />
          <Input inputValue={document} charactes={charactesDocument} />
        </FieldSet>
        <FieldSet>
          <legend>Celular</legend>
          <Select options={citys} />
          <Input inputValue={phone} charactes="9" />
        </FieldSet>
        <Button
          type="submit"
          text="Continuar"
          disabled={
            phone.value.length !== 9 ||
            document.value.length !== charactesDocument
          }
        />
      </Form>
    </Wrapper>
  );
};
