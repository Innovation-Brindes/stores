import { Flex, Text } from "@chakra-ui/react"
import React from "react"

export function HeaderFiltro({ textobuscado }) {
  return (
    <>
      <Text as={"h1"} fontSize={"2.5rem"} color={"#FF953A"} fontWeight={"bold"}>
        Aqui é rapidinho!
      </Text>
      <Text as={"h3"} fontSize={"1.8rem"} color={"#4A4A4A"} fontWeight={"bold"}>
        Encontramos 3 modelos de {textobuscado} em{" "}
        <Text as={"span"} color={"#FF953A"}>
          1 DIA!{" "}
        </Text>
      </Text>
    </>
  )
}
