import { Flex, Text } from "@chakra-ui/react";
import React from "react";

export const HeaderForm = () => {
  return (
    <Flex
      width="100%"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap="1rem"
    >
      <Text
        fontSize="1.2rem"
        fontWeight="bold"
        py="1rem"
        display="block"
        width="100%"
        textAlign="center"
        m="0"
        bg="#cecece"
      >
        Falta pouco para finalizar seu pedido!{" "}
      </Text>
      <Text fontSize="1rem">
        Para que possamos finalizar seu pagamento, comece preenchendo os{" "}
        <Text as="span" fontWeight="bold">
          dados do titular do cartão de crédito.
        </Text>
      </Text>
    </Flex>
  );
};
