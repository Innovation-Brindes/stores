import { Flex } from "@chakra-ui/layout";
import { useEffect } from "react";
import { Controller } from "react-hook-form";
import { forwardRef } from "@chakra-ui/react";
import { useState } from "react";

const InputColor = (
  {
    infoColor,
    onChange,
    control,
    value,
    defaultChecked,
    disabled,
    defaultValue,
    checked,
    ...rest
  },
  ref
) => {
  return (
    <Controller
      name="cor_produto"
      control={control}
      defaultValue={defaultChecked}
      defaultChecked={defaultChecked}
      ref={ref}
      render={({ field }) => (
        <Flex
          w="1.5rem"
          h="1.5rem"
          borderRadius="50%"
          border={checked ? "1px solid #8EC505" : "1px solid #E5E5E5"}
          alignItems="center"
          justifyContent="center"
          {...rest}
          cursor={disabled ? "not-allowed" : "pointer"}
          position="relative"
          defaultChecked={defaultChecked}
          onClick={() => {
            if (!disabled) {
              // onChange(value);
              field.onChange(value);
            }
          }}
        >
          {disabled && (
            <Flex
              w="4px"
              h="100%"
              bg="#FF4F00"
              position="absolute"
              top="0"
              left=".5rem"
              transform="rotate(45deg)"
              opacity="1"
            />
          )}
          <Flex
            bg={infoColor}
            w="1rem"
            h="1rem"
            borderRadius="50%"
            defaultChecked={defaultValue}
            onClick={() => {
              if (!disabled) {
                // onChange(value);
                field.onChange(value);
              }
            }}
            opacity={disabled ? 0.5 : 1}
            cursor={disabled ? "not-allowed" : "pointer"}
          />
        </Flex>
      )}
    />
  );
};

export default forwardRef(InputColor);
