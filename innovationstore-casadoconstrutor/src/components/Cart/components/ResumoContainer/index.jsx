import { Flex, Text, useBreakpointValue } from "@chakra-ui/react"
import { useCart } from "../../../../contexts/useCart"
import { ResumoContent } from "./ResumoContent"

export function ResumoContainer() {
  const { stepCart } = useCart()

  const isMobile = useBreakpointValue({
    base: true,
    lg: false,
  })

  return (
    <Flex
      marginTop={!isMobile && "2.063rem"}
      bgColor="#FFF"
      position="sticky"
      top="10px"
      minH="100px"
      h="fit-content"
      paddingInline=".938rem"
      paddingTop={!isMobile && "7px"}
      flexDir="column"
      borderRadius="5px"
      marginBottom="4rem"
      paddingBottom="2rem"
    >
      {stepCart !== 2 && stepCart !== "entrega" && stepCart !== "retirada" && (
        <Text as="h1" color="#ff4f00" fontSize="20px" fontWeight="bold" letterSpacing="0rem" textAlign="start">
          Resumo carrinho
        </Text>
      )}
      <ResumoContent />
    </Flex>
  )
}
