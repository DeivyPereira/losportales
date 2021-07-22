import React from "react";
import { Selects } from "./styles";
export const Select = ({ onChange, options, value }) => {
  return (
    <Selects onChange={onChange} value={value}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>{option.name}</option>
      ))}
    </Selects>
  );
};
