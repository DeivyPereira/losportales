import React, { Fragment } from "react";
import { TextFieldSmall } from "./style";

export const InputSmall = ({ inputValue = []}) => {
  return (
    <>
        <TextFieldSmall {...inputValue} maxLength="1" />
    </>
  );
};
