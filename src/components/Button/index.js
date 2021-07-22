import React  from "react";
import { ButtonSubmit } from "./styles";
export const Button = ({ disabled = false, text='' }) => {
  return (
    <ButtonSubmit disabled={disabled} type="submit" value={text} />
  );
};
