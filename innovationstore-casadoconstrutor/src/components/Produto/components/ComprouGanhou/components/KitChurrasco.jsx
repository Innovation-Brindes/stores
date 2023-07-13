import { Flex, Text, keyframes } from "@chakra-ui/react"
import React from "react"

export function KitChurrasco() {
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
            Kit Churrasco <br /> com 2 peças
          </Text>
        </Flex>
      </Text>
      <Text m={0} animation={`${fadeIn} 1s ease-in-out`}>
        <Text as={"span"} color={"#017D9D"} fontWeight={"bold"}>
          Comprando acima de R$ 3.000,00.
        </Text>{" "}
        você <br />
        ganha um kit churrasco com 2 peças para <br />
        fazer seu churrasco com muito mais estilo, <br />e práticidade!
      </Text>
    </>
  )
}
