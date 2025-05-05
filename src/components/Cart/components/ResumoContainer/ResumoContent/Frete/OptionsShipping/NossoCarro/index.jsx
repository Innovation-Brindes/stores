import { Flex, Grid, Icon, Text } from "@chakra-ui/react"
import { FaShippingFast } from "react-icons/fa"
import { useCart } from "../../../../../../../../contexts/useCart"
import Image from "next/image"
import { formatPrice } from "../../../../../../../../utils/formatPrice"

export function NossoCarro({ handleStepCartValue, valorFrete }) {
  const { cart } = useCart()

  const totalItens = cart?.reduce((acc, item) => {
    const { valor_total } = item

    const valorTotal = parseFloat(valor_total)

    return acc + valorTotal
  }, 0)

  const isFree = totalItens >= 2000

  return (
    <Grid
      fontSize="11px"
      w="100%"
      templateColumns="2fr 1.5fr 1fr"
      alignItems="center"
      justifyContent="flex-start"
      gap="6px"
      color="#cc0000"
      paddingInline="9px"
      mt=".5rem"
      cursor={"pointer"}
      border={"1px solid #cc0000"}
      borderRadius="6px"
      height="35px"
      onClick={() => handleStepCartValue("nossoCarro")}
    >
      <Flex textTransform="uppercase" flexDir="column">
        <Text m="0" fontWeight="bold" fontSize="11px">
          Express
        </Text>
        <Text m="0" fontWeight="bold" fontSize="9px" color="#919191">
          Nosso Carro
        </Text>
      </Flex>
      <Flex gap={2}>
        <Text m="0" textTransform="lowercase" color="#919191">
          2 dias úteis
        </Text>{" "}
      </Flex>
      {valorFrete === 0 && (
        <Text as="span" fontSize="11px" color="#919191" textTransform={"lowercase"}>
          sem custo
        </Text>
      )}
      {valorFrete !== 0 && (
        <Text
          m="0"
          ml="auto"
          marginRight="5px"
          fontSize="11px"
          color="#414042"
          fontWeight="bold"
          paddingBlock="4px"
          borderRadius="15px"
        >
          {formatPrice(valorFrete)}
        </Text>
      )}
    </Grid>
  )
}
