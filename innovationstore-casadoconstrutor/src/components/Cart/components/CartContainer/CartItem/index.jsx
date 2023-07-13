import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Flex,
  Image,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useMediaQuery,
  useToast,
} from "@chakra-ui/react"

import { HeaderItem } from "./HeaderItem"
import { EmbalagemEspec } from "./Embalagem/index"
import { useEffect, useState } from "react"
import { formatPrice as formatTotal } from "../../../../../utils/formatPrice"
import { useCart } from "../../../../../contexts/useCart"
import { CloseIcon } from "@chakra-ui/icons"

export function CartItem({ index, item }) {
  function firstLetterUpperCaseAndRestLowerCase(str) {
    return str?.charAt(0).toUpperCase() + str?.slice(1).toLowerCase()
  }

  const toast = useToast()

  const { highlightedItemId } = useCart()

  const [isLargerThan768] = useMediaQuery("(min-width: 768px)")
  const [isLargerThan1040] = useMediaQuery("(max-width: 1040px)")
  const [animationDelete, setAnimationDelete] = useState(false)

  const [isMedia, setIsMedia] = useState(false)

  useEffect(() => {
    setIsMedia(isLargerThan1040)
  }, [isLargerThan1040, isLargerThan768])

  function setFirstLetterUpperCaseAndRestLowerCase(str) {
    return str?.charAt(0).toUpperCase() + str?.slice(1).toLowerCase()
  }

  return (
    <>
      {animationDelete && (
        <Flex paddingBlock="65px" marginInline="auto" width="100%" alignItems="center" justifyContent="center">
          <Alert
            status="success"
            borderRadius="0"
            variant="top-accent"
            position="top-right"
            width="100%"
            maxWidth="500px"
            justifyContent="space-between"
            alignItems="center"
            padding="1rem"
            bg="#FAFFEF"
            color="#95C620"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            borderBottomRadius="10px"
            borderColor={"#95C620"}
          >
            <CloseIcon
              cursor="pointer"
              onClick={() => toast.closeAll()}
              position="absolute"
              right="1rem"
              top="1.5rem"
              color="#686868"
              width=".7rem"
              height=".7rem"
            />
            <Flex alignItems="center" justifyContent="center" width="100%" m="0 auto">
              <AlertIcon color="#95C620" />
              <AlertTitle mr={6}>Produto excluído do carrinho</AlertTitle>
            </Flex>
          </Alert>
        </Flex>
      )}
      <Flex
        bgColor={"#FFF"}
        {...(highlightedItemId === item.hash_duplicado && {
          //descola o box da tela com box-shadow
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        })}
        {...(highlightedItemId === item.hash_duplicado && {
          transition: "all 0.5s ease-in-out",
          transform: "scale(1.02)",
        })}
        marginTop="1.063rem"
        borderRadius="5px"
        justifyContent="flex-start"
        alignItems="flex-start"
        flexDirection="column"
        transition="all 0.5s ease-in-out"
        {...(isMedia && { paddingInline: "1rem" })}
        {...(animationDelete && {
          transition: "all 0.5s ease-in-out",
          transform: "translateY(2rem)",
        })}
      >
        {!animationDelete && (
          <>
            <HeaderItem index={index} item={item} setAnimationDelete={setAnimationDelete} />

            <Flex alignItems="flex-start" paddingLeft={!isMedia && "2.563rem"} flexDirection="column" width="100%">
              <Flex width="100%" flexDir="column">
                {isMedia && (
                  <Box overflowX="auto">
                    <Table size="sm">
                      <Thead>
                        <Tr>
                          <Th>Qtd.</Th>
                          <Th>Valor unitário</Th>
                          <Th>Valor Total</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        <Tr>
                          <Td borderBottom={0}>{item.quantidade}</Td>
                          <Td borderBottom={0}>{formatTotal(item.valor_unitario)}</Td>
                          <Td fontWeight="bold" borderBottom={0}>
                            {formatTotal(parseFloat(item.valor_total))}
                          </Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  </Box>
                )}
                <Flex gap={2} alignItems="center" width="100%">
                  <Image
                    src={item.imagem ? item.imagem : "https://fakeimg.pl/120x120/cecece/000"}
                    height="5.625rem"
                    width="4.375rem"
                    marginBlock="1.5rem"
                  />
                  <Flex width="100%">
                    <Flex flexDir="column" alignItems="flex-start" width={!isMedia && "310px"}>
                      <Text m="0">
                        <Text as="span" fontSize="15px" color="#616162">
                          {firstLetterUpperCaseAndRestLowerCase(item.nome_prod)}
                        </Text>{" "}
                        -{" "}
                        <Text as="span" fontWeight={"bold"} color="#616162">
                          {item.codprod}
                        </Text>
                      </Text>
                      <Text m="0" fontSize="12px" color="#616162">
                        {item.batidas}
                        {item.batidas > 1 ? " Impressões" : " Impressão"}
                      </Text>
                      <Text m="0" fontSize="12px" color="#616162">
                        {item?.tipo_gravacao?.nome}
                      </Text>
                      <Text m="0" fontSize="12px" color="#616162">
                        {setFirstLetterUpperCaseAndRestLowerCase(item.cor_produto?.desc)}
                      </Text>
                      <Text m="0" fontSize="12px" color="#616162">
                        Prazo de produção: {item.prazo} dias úteis
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            {item.ad_embalagem !== null && <EmbalagemEspec item={item} />}
          </>
        )}
      </Flex>
    </>
  )
}
