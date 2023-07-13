import { Flex, Text } from "@chakra-ui/react";
import React from "react";

export const CardForm = ({ label, size, children, flex }) => {
  return (
    <Flex
      flexDir="column"
      maxW={size}
      minW={size}
      flex={flex}
      border="1px solid #cecece"
      paddingInline="1rem"
      paddingTop="1rem"
      paddingBottom="5rem"
    >
      <Text
        textAlign="center"
        textTransform="uppercase"
        bgColor="#cecece"
        fontWeight="bold"
      >
        {label}
      </Text>
      {children}
    </Flex>
  );
};
