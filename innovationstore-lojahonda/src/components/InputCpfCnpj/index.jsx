import { Controller } from "react-hook-form";

import { forwardRef } from "react";
// import { CustomInputCnpjCPF } from "./styles";
import CpfCnpj from "@react-br-forms/cpf-cnpj-mask";
import { CustomInputCnpjCPF, CustomizableInputCnpj } from "./styles";

const InputCpfCnpj = ({
  value,
  onChange,
  control,
  backgroundColor = false,
  borderColor = false,
  ...props
}) => {
  return (
    <Controller
      name="cpf_cnpj_parceiro"
      control={control}
      onChange={(e) => e[0].target.value}
      render={({ field }) => (
        <CustomizableInputCnpj
          className="custom-input"
          placeholder="* CPF | CNPJ"
          background={backgroundColor}
          borderColor={borderColor}
          {...field}
          onChange={(e, type) => {
            field.onChange(e.target.value);
          }}
        />
      )}
    />
  );
};

export default forwardRef(InputCpfCnpj);

//usage
