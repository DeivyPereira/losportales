import React, { Fragment } from "react";
import { TextField, CountSmall } from "./styles";
export const Input = ({ inputValue = [], charactes }) => {
  const charactesCount = inputValue.value;
  return (
    <>
        <TextField {...inputValue} maxLength={charactes} />
        <CountSmall>
          {charactesCount.length}/{charactes}
        </CountSmall>
    </>
  );
};
