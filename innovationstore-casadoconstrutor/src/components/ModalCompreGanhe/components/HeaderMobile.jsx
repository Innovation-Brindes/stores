import { Flex, Text } from "@chakra-ui/react"
import { formatPrice } from "../../../utils/formatPrice"
import React from "react"

export function HeaderMobile({ data, isMobile }) {
  return (
    <Flex alignItems={"center"}>
      <Flex
        position={"absolute"}
        mt={"1rem"}
        left={"1.5rem"}
        w={"35px"}
        h={"34px"}
        borderRadius={"50%"}
        bg={"#017D9D"}
        justifyContent={"center"}
        alignItems={"center"}
        color={"#fff"}
      >
        {data?.index}
      </Flex>

      <Flex
        alignItems={"center"}
        w={"100%"}
        justifyContent={"flex-start"}
        height={"48px"}
        fontSize={"25px"}
        flexDir={"column"}
        pt={"1rem"}
      >
        <Text
          m={0}
          fontSize={"1.5rem"}
          color={"#017D9D"}
          lineHeight={isMobile && "1"}
          textTransform={"uppercase"}
          textAlign={"center"}
          dangerouslySetInnerHTML={{ __html: data?.labelMobile }}
        />
        <Text as={"span"} color={"#414042"} fontSize={"12px"} zIndex={12}>
          Para pedido acima de {formatPrice(data?.price)}
        </Text>
      </Flex>
    </Flex>
  )
}
