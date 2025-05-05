import { Flex, Text } from "@chakra-ui/react";
import React from "react";

export const FormFooter = () => {
  return (
    <Flex
      width="100%"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap="1rem"
      mt="1rem"
    >
      <Text
        fontSize="1.1rem"
        fontWeight="bold"
        py="1rem"
        display="block"
        width="100%"
        textAlign="center"
        m="0"
        bg="#cecece"
      >
        Certifique-se de que as informações acima preenchidas estão exatamente
        iguais da fatura do cartão.
      </Text>
      <Text fontSize="1rem">
        Agora é só clicar no botão abaixo e finalizar com os dados do cartão de
        crédito.
      </Text>
    </Flex>
  );
};
