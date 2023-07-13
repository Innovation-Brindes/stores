import { Flex, Text } from "@chakra-ui/layout"
import { Image } from "@chakra-ui/image"
import { useCart } from "../../../../../contexts/useCart"
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/table"
import { formatPrice } from "../../../../../utils/formatPrice"
import { useEffect } from "react"
import { useMediaQuery } from "@chakra-ui/react"
import { useState } from "react"
import { setFirstLetterUpperCase } from "../../../../../utils/setFirstLetterUpperCase"

export function ProductInfo({ itemEdit }) {
  useEffect(() => {}, [itemEdit])
  const { valores } = useCart()

  const [isLargerThan768] = useMediaQuery("(max-width: 768px)")
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (isLargerThan768) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }, [isLargerThan768])

  return (
    <>
      <Flex flexDir="column" {...(isMobile && { alignItems: "center", width: "100%" })}>
        <Flex
          alignItems="center"
          justifyContent="flex-start"
          gap={2}
          minW={!isMobile && "26.6875rem"}
          flexDir="column"
          border="1px solid #CFCFCF"
          borderRadius="13px"
          {...(isMobile && { width: "100%" })}
        >
          <Text as="h1" m="0" fontSize="1rem" fontWeight="bold" paddingTop="2rem" paddingBottom="2rem">
            <Text as="span" color="#E2001B">
              Item 1{" "}
            </Text>{" "}
            {setFirstLetterUpperCase(itemEdit?.nome_prod) + " - " + itemEdit.codprod + " - "}
          </Text>
          <Flex
            alignItems="flex-start"
            justifyContent="center"
            gap={8}
            paddingBottom="5rem"
            color="#616162"
            {...(isMobile && { flexDir: "column" })}
          >
            <Image src={itemEdit?.imagem} w="7.5rem" h="9.3125rem" />
            <Flex flexDir="column" gap={2}>
              <Text as="h2" m="0" fontSize="0.875rem" fontWeight="400">
                {setFirstLetterUpperCase(itemEdit?.cor_produto?.desc)}
              </Text>
              <Text as="h2" m="0" fontSize="0.875rem" fontWeight="400">
                {typeof itemEdit?.tipo_gravacao === "string" ? itemEdit?.tipo_gravacao : itemEdit?.tipo_gravacao?.desc}
              </Text>
              <Text as="h2" m="0" fontSize="0.875rem" fontWeight="400">
                {itemEdit?.batidas} Impressões
              </Text>
              <Text as="h2" m="0" fontSize="0.875rem" fontWeight="400">
                Prazo de produção: {itemEdit?.prazo} dias úteis
              </Text>
              <Text as="h2" m="0" fontSize="0.875rem" fontWeight="400">
                Quantidade: {itemEdit?.quantidade}
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Table variant="simple" mt="1rem">
          <Thead>
            <Tr>
              <Th textTransform="initial" textAlign="center">
                Quantidade
              </Th>
              <Th textTransform="initial" textAlign="center">
                Valor unitário
              </Th>
              <Th textTransform="initial" textAlign="center">
                Valor Total
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td textAlign="center" border={0}>
                {itemEdit?.quantidade}
              </Td>
              <Td textAlign="center" border={0}>
                {formatPrice(parseFloat(itemEdit?.valor_unitario))}
              </Td>
              <Td fontWeight={"bold"} textAlign="center" border={0}>
                {formatPrice(parseFloat(itemEdit?.valor_total))}
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Flex>
    </>
  )
}
