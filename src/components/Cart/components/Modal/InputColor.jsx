import { Flex } from "@chakra-ui/layout";
import { Controller } from "react-hook-form";

export function InputColor({ control, infoColor, defaultChecked }) {
  return (
    <Controller
      name="cor_produto"
      control={control}
      render={({ field }) => (
        <Flex
          bg={infoColor.rgb_cores}
          w="1rem"
          h="1rem"
          borderRadius="50%"
          cursor="pointer"
          {...field}
          onClick={() => field.onChange(infoColor)}
        />
      )}
    />
  );
}
