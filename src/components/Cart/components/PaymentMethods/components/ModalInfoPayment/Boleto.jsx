import { Box, Text } from "@chakra-ui/react"
import React from "react"
import { formatPrice } from "../../../../../../utils/formatPrice"

export function Boleto({ totalPedido }) {
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
          {formatPrice(totalPedido)}
        </Text>
        <Text as={"span"} color={"gray.700"} fontSize={"1rem"}>
          no boleto bancário.
        </Text>
      </Box>
      <Text as={"span"} color={"#919191"} fontSize={"12px"} fontWeight={"400"} m={0}>
        * Boleto gerado apenas para pessoa jurídica para pedidos acima de R$ 1.000. Fale com um de nossos consultores.{" "}
        <br />
        * O boleto será gerado após a emissão da nota fiscal do seu pedido. Imprima e pague no banco ou pague pela
        internet utilizando o código de barras.
        <br />
        * Mediante aprovação da análise de crédito. <br />
      </Text>
    </Box>
  )
}
