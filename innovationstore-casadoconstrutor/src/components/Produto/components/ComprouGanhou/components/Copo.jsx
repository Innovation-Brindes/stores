import { Flex, Text, keyframes } from "@chakra-ui/react"
import React from "react"

export function Copo() {
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
            Copo térmico <br />
          </Text>
        </Flex>
      </Text>
      <Text m={0} animation={`${fadeIn} 1s ease-in-out`}>
        <Text as={"span"} color={"#017D9D"} fontWeight={"bold"}>
          Comprando acima de R$ 5.000,00.
        </Text>{" "}
        você <br />
        ganha um copo térmico para <br />
        levar sua bebida para onde quiser! <br />
        seja no escritório,
        <br /> em casa ou em uma viagem.
      </Text>
    </>
  )
}
