import { Flex, Text, keyframes } from "@chakra-ui/react"
import React from "react"

export function Fone() {
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
            Ganhe um fone de <br /> ouvido wireless
          </Text>
        </Flex>
      </Text>
      <Text m={0} animation={`${fadeIn} 1s ease-in-out`}>
        <Text as={"span"} color={"#017D9D"} fontWeight={"bold"}>
          Comprando acima de R$ 10.000,00.
        </Text>{" "}
        você <br />
        ganhará um fone de ouvido wireless, Perfeito <br />
        para ouvir suas músicas e podcasts favoritos <br />
        com liberdade de movimento.
      </Text>
    </>
  )
}
