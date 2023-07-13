import { Box, Text } from "@chakra-ui/react"
import { formatPrice } from "../../../../../../utils/formatPrice"
import React from "react"

export function Pix({ totalPedido }) {
  return (
    <Box width={"100%"}>
      <Box
        bgColor={"#F5F5F5"}
        paddingInline={"1rem"}
        paddingBlock={".5rem"}
        mt={".5rem"}
        display={"flex"}
        justifyContent={"flex-start"}
        gap={1}
        alignItems={"center"}
      >
        <Text as={"span"} color={"gray.700"} fontSize={"1rem"} fontWeight={"500"}>
          {formatPrice(totalPedido - totalPedido * 0.05)}
        </Text>
        <Text as={"span"} color={"gray.700"} fontSize={"1rem"}>
          no Pix.
        </Text>
      </Box>
      <Text as={"span"} color={"#919191"} fontSize={"12px"} fontWeight={"400"} m={0}>
        * O pagamento é instantâneo e só pode ser à vista. Na etapa de finalização da compra, a gente explica direitinho
        como pagar com Pix
      </Text>
    </Box>
  )
}
