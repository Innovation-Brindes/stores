import { Input } from "@chakra-ui/input";
import React from "react";
import InputMask from "react-input-mask";
import { forwardRef } from "react";

function InputTelMask({ placeholder, error, ...rest }, ref) {
  return (
    <>
      <InputMask mask="(99) 99999-9999" {...rest}>
        {() => (
          <Input
            placeholder={placeholder}
            id={rest.name}
            name={rest.name}
            type={rest.type}
            className={error ? "input-error" : "input"}
            ref={ref}
          />
        )}
      </InputMask>
      {error && <span className="error-message">{error.message}</span>}
    </>
  );
}

export default forwardRef(InputTelMask);
