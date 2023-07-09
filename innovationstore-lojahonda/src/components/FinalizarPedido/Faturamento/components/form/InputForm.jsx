import React from "react";
import { InputFormEditar } from "./styles";

const InputForm = ({register, name, placeholder, type, autoFocus, setSelectOpen, razaoSocial}) => {
  return (
    <InputFormEditar
      onClick={() => setSelectOpen(false)}
      autoFocus={autoFocus}
      name={name}
      {...register(name)}
      placeholder={placeholder}
      type={type}
    />
  );
};

export default InputForm;
