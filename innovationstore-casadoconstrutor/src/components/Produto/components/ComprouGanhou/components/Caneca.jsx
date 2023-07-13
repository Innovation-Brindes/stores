import { Flex, Text, keyframes } from "@chakra-ui/react"
import React from "react"

export function Caneca() {
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
            Caneca de <br /> metal 400ml
          </Text>
        </Flex>
      </Text>
      <Text m={0} animation={`${fadeIn} 1s ease-in-out`}>
        <Text as={"span"} color={"#017D9D"} fontWeight={"bold"}>
          Comprando acima de R$ 1.000,00.
        </Text>{" "}
        você <br />
        ganha uma caneca de metal perfeita <br />
        para qualquer ocasião, seja no escritório, <br />
        em casa ou em uma viagem.
      </Text>
    </>
  )
}
