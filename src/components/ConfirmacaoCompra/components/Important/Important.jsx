import { Flex, Text, useMediaQuery } from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import { AiOutlineWarning } from "react-icons/ai";

export function Important({ method, prazoEntrega }) {
  const [isMinWidthMedium, setIsMinWidthMedium] = useState(false);
  const [isMaxWidth768] = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    setIsMinWidthMedium(isMaxWidth768);
  }, [isMaxWidth768]);

  function formattedDate(date) {
    return date.toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    });
  }

  return (
    <Flex
      paddingBlock=".4rem"
      paddingInline="1rem"
      bgColor="#2C2C3A"
      marginTop="1.4rem"
      width="100%"
    >
      <Flex
        width="100%"
        color="white"
        alignItems="center"
        justifyContent="space-around"
        flexDirection={isMinWidthMedium ? "column" : "row"}
        gap={isMinWidthMedium ? "1rem" : "0"}
      >
        <Flex alignItems="center">
          {" "}
          <AiOutlineWarning size={26} />
          <Text as="span" fontSize="1.2rem" marginLeft="0.5rem">
            Importante
          </Text>
        </Flex>

        <Text fontSize=".9rem" m="0">
          Caso o{" "}
          <Text as="span" fontWeight={"bold"}>
            {method
              ? "pagamento não seja realizado dentro desse período"
              : "pedido não seja aprovado dentro desse periodo"}
          </Text>
          , o seu prazo de produção{" "}
          <Text as="span" fontWeight={"bold"}>
            {" "}
            será prorrogado para o dia {prazoEntrega}
          </Text>{" "}
          automaticamente.
        </Text>
      </Flex>
    </Flex>
  );
}
