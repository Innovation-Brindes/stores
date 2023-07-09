import { Flex, Text } from "@chakra-ui/react"
import React from "react"

export function Dots({ children }) {
  return (
    <Flex alignItems={"center"} gap={3} position={"relative"}>
      <Flex gap={1} mb={".1rem"}>
        {[...Array(6)].map((_, index) => (
          <Flex key={index} w={"5px"} h={"1px"} bgColor={"#cecece"} />
        ))}
      </Flex>
      {children}
      <Flex gap={1} mb={".1rem"}>
        {[...Array(6)].map((_, index) => (
          <Flex key={index} w={"5px"} h={"1px"} bgColor={"#cecece"} />
        ))}
      </Flex>
    </Flex>
  )
}
