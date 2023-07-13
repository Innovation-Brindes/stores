import { Flex, Text, keyframes } from "@chakra-ui/react"
import React from "react"

export function CaixaDeSom() {
  const fadeIn = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `

  return (
    <>
      <Text
        as={"h2"}
        fontSize={"1.6rem"}
        fontWeight={"bold"}
        color={"#017D9D"}
        textTransform={"uppercase"}
        letterSpacing={".-2rem"}
        animation={`${fadeIn} 1s ease-in-out`}
      >
        <Flex flexDir={"column"} gap={1} animation={`${fadeIn} 1s ease-in-out`}>
          <Text m={0}>
            Caixa de som <br /> portátil
          </Text>
        </Flex>
      </Text>
      <Text m={0} animation={`${fadeIn} 1s ease-in-out`}>
        <Text as={"span"} color={"#017D9D"} fontWeight={"bold"}>
          Comprando acima de R$ 30.000,00. <br />
        </Text>{" "}
        genhe uma caixa de som para aproveitar
        <br />
        sua música favorita com qualidade, <br />
        enquanto carrega seus dispositivos <br />
        compatíveis com tecnologia wireless, sem <br />
        precisar usar cabos.
      </Text>
    </>
  )
}
