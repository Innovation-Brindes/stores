import { Flex, forwardRef, Input, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import ReactInputMask from "react-input-mask";

const InputUsage = (
  { placeholder, name, type, error, value, isType, ...rest },
  ref
) => {
  return (
    <>
      <Flex flexDir="column" width="100%">
        <Input
          placeholder={placeholder}
          ref={ref}
          name={name}
          value={value}
          type={type}
          {...rest}
          _focus={{
            border: "1px solid #ff4f00",
          }}
        />
        {error && (
          <Text color="red" fontSize="12px" m="0" as="span">
            {error.message}
          </Text>
        )}
      </Flex>
    </>
  );
};

export default forwardRef(InputUsage);
