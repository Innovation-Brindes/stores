import { Box, ChakraProvider, Flex, Text, useToast } from "@chakra-ui/react";
import { AiFillWarning } from "react-icons/ai";

export function ToastUsage({
  codProd,
  filteredCodProd,
  isLayout = false,
  description,
}) {
  return (
    <ChakraProvider>
      <Box
        color="white"
        p={3}
        bg="yellow.500"
        display="flex"
        alignItems="center"
        gap={4}
        borderRadius={4}
      >
        <Flex alignItems="center" gap={2}>
          <AiFillWarning size={30} />
          <Text as="span" fontSize="1.2rem">
            Atenção{" "}
          </Text>
        </Flex>
        {!!isLayout && (
          <Text m="0">
            {isLayout && codProd.length - filteredCodProd.length > 1
              ? "Faltam"
              : "Falta"}{" "}
            {isLayout && codProd.length - filteredCodProd.length}{" "}
            {isLayout && codProd.length - filteredCodProd.length > 1
              ? "layouts a serem aprovados."
              : "layout a ser aprovado."}
          </Text>
        )}
        {!isLayout && description}
      </Box>
    </ChakraProvider>
  );
}
