import { Flex, Input, Text } from "@chakra-ui/react";
import { useEffect } from "react";

export function PedidoAprovado({
  setAprovadorPor,
  aprovadorPor,
  isAproved,
  verifyIsAproved,
}) {
  function handleAprovadorPor(e) {
    setAprovadorPor(e.target.value);
    localStorage.setItem("aprovadorPor", e.target.value);
  }

  function getAprovadorPor() {
    const aprovadorPor = localStorage.getItem("aprovadorPor");
    setAprovadorPor(aprovadorPor);
  }

  useEffect(() => {
    getAprovadorPor();
  }, []);

  return (
    <>
      <Text fontWeight={"bold"} m="0 auto">
        Pedido aprovado por:
      </Text>
      <Input
        margin="0 auto"
        placeholder="Nome do aprovador"
        type="text"
        textAlign="center"
        onChange={handleAprovadorPor}
        defaultValue={verifyIsAproved ? aprovadorPor : ""}
        disabled={verifyIsAproved}
        cursor={verifyIsAproved ? "not-allowed" : "pointer"}
        fontWeight="bold"
        py={10}
        width="350px"
        border={
          aprovadorPor?.length > 0
            ? "2px solid transparent"
            : "2px solid #cecece"
        }
        outline={
          aprovadorPor?.length > 0 ? "2px solid #9FCD42" : "2px solid #cecece"
        }
        alignItems="center"
        justifyContent="center"
        borderRadius="5px"
        _focus={{
          outline: "2px solid #9FCD42",
          border: "2px solid transparent",
        }}
        transition="all 0.3s ease-in-out"
      />

      <Text fontSize={15}>{isAproved}</Text>
    </>
  );
}
