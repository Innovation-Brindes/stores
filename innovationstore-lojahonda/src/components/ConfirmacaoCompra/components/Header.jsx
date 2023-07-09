import { Flex, Image, Img, Text, useMediaQuery } from "@chakra-ui/react";
import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
const logo = "/images/logo.png";

export const Header = ({
  pedCompra = false,
  nunota = false,
  numUnico = false,
}) => {
  const [isMaxWidth768] = useMediaQuery("(max-width: 768px)");
  const [isMinWidthMedium, setIsMinWidthMedium] = useState(false);

  useEffect(() => {
    if (isMaxWidth768 !== isMinWidthMedium) {
      setIsMinWidthMedium(isMaxWidth768);
    }
  }, [isMaxWidth768]);

  return (
    <Flex
      width="100%"
      alignItems="center"
      justifyContent="space-between"
      {...(isMinWidthMedium && { flexDirection: "column", gap: "1rem" })}
      marginBottom="1.6rem"
    >
      <Flex
        alignItems="center"
        flexDirection={isMinWidthMedium && "column"}
        gap={isMinWidthMedium && ".8rem"}
        width={isMinWidthMedium && "100%"}
      >
        <Image src={logo} alt="confirmacao" width="170px" />
        <Text
          fontSize={isMinWidthMedium ? "1.2rem" : "1.5rem"}
          paddingInline={isMinWidthMedium ? ".6rem" : "2rem"}
          paddingBlock={isMinWidthMedium ? "1rem" : "0"}
          color="white"
          {...(isMinWidthMedium && { textAlign: "center" })}
          bgColor="#7fbc03"
          margin="0"
          marginLeft={!isMinWidthMedium && "2rem"}
          width={!isMinWidthMedium ? "630px" : "100%"}
          textAlign={"center"}
        >
          {"São Paulo, " +
            new Date().toLocaleDateString("pt-BR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
        </Text>
      </Flex>
      <Text
        margin="0"
        fontSize={isMinWidthMedium ? "1.2rem" : "1.5rem"}
        fontWeight="bold"
      >
        {pedCompra ? (
          <Text
            margin="0"
            fontSize={isMinWidthMedium ? "1.2rem" : "1.4rem"}
            fontWeight="bold"
          >
            Pedido de compra:{" "}
            <strong>
              #{pedCompra}/{nunota[0]}
            </strong>
          </Text>
        ) : (
          <Text
            margin="0"
            fontSize={isMinWidthMedium ? "1.2rem" : "1.4rem"}
            fontWeight="bold"
          >
            Pedido de compra:{" "}
            <strong>
              #{numUnico}/{nunota[0]}
            </strong>
          </Text>
        )}
      </Text>
    </Flex>
  );
};
