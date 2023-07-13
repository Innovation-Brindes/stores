import { Flex } from "@chakra-ui/react";
import Card from "../Card";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@chakra-ui/react";

export function CardContainer({ dataInfoClientes, textFrete }) {
  const [isMaxWidth768] = useMediaQuery("(max-width: 768px)");
  const [isMinWidthMedium, setIsMinWidthMedium] = useState(false);

  useEffect(() => {
    if (isMaxWidth768 !== isMinWidthMedium) {
      setIsMinWidthMedium(isMaxWidth768);
    }
  }, [isMaxWidth768]);

  return (
    <>
      <Flex
        gap="2rem"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        {...(isMinWidthMedium && { flexDirection: "column" })}
        flexDirection={isMinWidthMedium && "column"}
      >
        <Card headerCard dataInfoClientes={dataInfoClientes} />
        <Card
          isConsultor
          isMinWidthMedium={isMinWidthMedium}
          dataInfoClientes={dataInfoClientes}
        />
      </Flex>
      <Flex
        gap="2rem"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        {...(isMinWidthMedium && { flexDirection: "column" })}
        flexDirection={isMinWidthMedium && "column"}
      >
        <Card
          label="DADOS DO FATURAMENTO"
          cardEntregas
          isFat
          dataInfoClientes={dataInfoClientes}
          isMinWidthMedium={isMinWidthMedium}
        />
        <Card
          label="DADOS DA ENTREGA"
          cardEntregas
          isEnt
          dataInfoClientes={dataInfoClientes}
          isMinWidthMedium={isMinWidthMedium}
        />
        <Card
          label="DADOS DA TRANSPORTADORA"
          cardEntregas
          isTransp
          dataInfoClientes={dataInfoClientes}
          isMinWidthMedium={isMinWidthMedium}
          textFrete={textFrete}
        />
      </Flex>
    </>
  );
}
