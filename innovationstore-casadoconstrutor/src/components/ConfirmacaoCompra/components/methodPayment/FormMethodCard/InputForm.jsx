import { Flex, FormLabel, Input, Select, Text } from "@chakra-ui/react";
import { forwardRef } from "react";
import InputMask from "react-input-mask";

const InputForm = (
  {
    label,
    name,
    id,
    placeholder,
    value,
    isSelect,
    onChange,
    options,
    isCity,
    cidades,
    errors,
    ...rest
  },
  ref
) => {
  return !isSelect ? (
    <Flex flexDir="column" position="relative">
      {errors && (
        <Text
          as="span"
          color="red.300"
          position="absolute"
          top="0"
          right="0"
          fontSize=".9rem"
        >
          {errors}
        </Text>
      )}
      <FormLabel
        htmlFor={name}
        fontSize=".9rem"
        fontWeight="normal"
        mt=".5rem"
        mb="0"
      >
        {label}
      </FormLabel>
      {name !== "cep" && name !== "telefone" && name !== "celular" && (
        <Input
          placeholder={placeholder}
          id={id}
          name={name}
          {...rest}
          ref={ref}
          isInvalid={errors}
          errorBorderColor="red.300"
          errors={errors}
          value={value}
        />
      )}
      {name === "celular" && (
        <InputMask
          mask="(99) 99999-9999"
          placeholder={placeholder}
          id={id}
          name={name}
          {...rest}
          ref={ref}
          value={value}
        >
          {(inputProps) => (
            <Input
              {...inputProps}
              borderColor={errors ? "red.300" : "gray.300"}
            />
          )}
        </InputMask>
      )}

      {name === "telefone" && (
        <InputMask
          mask="(99) 9999-9999"
          placeholder={placeholder}
          id={id}
          name={name}
          {...rest}
          ref={ref}
          value={value}
        >
          {(inputProps) => (
            <Input
              {...inputProps}
              borderColor={errors ? "red.300" : "gray.300"}
            />
          )}
        </InputMask>
      )}

      {name === "cep" && (
        <InputMask
          mask="99999-999"
          placeholder={placeholder}
          id={id}
          name={name}
          {...rest}
          ref={ref}
          onChange={onChange}
          value={value}
        >
          {(inputProps) => (
            <Input
              {...inputProps}
              borderColor={errors ? "red.300" : "gray.300"}
            />
          )}
        </InputMask>
      )}
    </Flex>
  ) : (
    <Flex flexDir="column">
      <FormLabel
        htmlFor={name}
        fontSize=".9rem"
        fontWeight="normal"
        mt=".5rem"
        mb="0"
      >
        {label}
      </FormLabel>
      {!isCity ? (
        <Select placeholder={placeholder} id={id} {...rest} onChange={onChange}>
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      ) : (
        <Select placeholder={placeholder} id={id} {...rest} onChange={onChange}>
          {cidades?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      )}
    </Flex>
  );
};

export default forwardRef(InputForm);
