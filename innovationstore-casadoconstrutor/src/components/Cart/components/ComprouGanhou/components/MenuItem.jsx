import { Flex, Icon, Text } from "@chakra-ui/react"
import React from "react"

export function MenuItem({ title, value, icon, color, bgColor, selected, onClick }) {
  return (
    <Flex
      gap={1}
      flexDir={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      onClick={onClick}
      cursor={"pointer"}
      color={selected ? "#017D9D" : "#cecece"}
      transition={"all .3s ease"}
    >
      <Text m={0} textTransform={"uppercase"}>
        {title}
      </Text>
      <Flex
        w={"4rem"}
        h={"4rem"}
        padding={".5rem"}
        borderRadius={"100%"}
        color={selected ? "#fff" : "#cecece"}
        bgColor={selected ? "#017D9D" : "transparent"}
        border={"2px solid"}
        borderColor={selected ? "#017D9D" : "#cecece"}
        alignItems={"center"}
        justifyContent={"center"}
        transition={"all .3s ease"}
      >
        <Icon as={icon} fontSize={"2.5rem"} />
      </Flex>
      <Text m={0}>Para pedido acima</Text>
      <Text m={0}>de R$ {value}</Text>
    </Flex>
  )
}
