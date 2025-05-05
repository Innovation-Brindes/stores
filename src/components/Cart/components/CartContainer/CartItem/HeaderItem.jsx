import { CloseIcon } from "@chakra-ui/icons"
import {
  Alert,
  AlertIcon,
  AlertTitle,
  Button,
  Flex,
  Text,
  useMediaQuery,
  useToast,
  Wrap,
  WrapItem,
} from "@chakra-ui/react"
import { set } from "nprogress"
import { useEffect, useState } from "react"
import { BiDuplicate } from "react-icons/bi"
import { BsTrash } from "react-icons/bs"
import { FiEdit } from "react-icons/fi"
import { useCart } from "../../../../../contexts/useCart"
import { formatPrice, formatPrice as formatTotal } from "../../../../../utils/formatPrice"

export function HeaderItem({ index, item, setAnimationDelete }) {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)")
  const [isLargerThan1040] = useMediaQuery("(max-width: 1040px)")
  const [isLargerThan1480] = useMediaQuery("(max-width: 1480px)")

  const toast = useToast()

  const [isMedia, setIsMedia] = useState(false)
  const [media1480, setMedia1480] = useState(false)

  useEffect(() => {
    setIsMedia(isLargerThan1040)
    setMedia1480(isLargerThan1480)
  }, [isLargerThan1040, isLargerThan768, isLargerThan1480])

  const { removeFromCart, duplicateItem, editItem, handleOpenModal, setGetIndex, infoEmb, cart, highlightedItemId } =
    useCart()

  const totalItemEmb = infoEmb?.reduce((acc, item) => {
    const { valor_total, price } = item

    const valorTotalItem = parseFloat(valor_total)
    const valorItem = parseFloat(price)

    const valorTotal = valorTotalItem + valorItem

    return valorTotal
  }, 0)

  function openModalEdit(value) {
    handleOpenModal(value)
  }

  function handleDuplicateItem(value) {
    duplicateItem(value)

    toast({
      position: "top-right",
      render: () => (
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
          <AlertIcon color="#95C620" />
          <Flex flexDir="column">
            <AlertTitle mr={6}>O item {index + 1} foi duplicado com sucesso!</AlertTitle>
            {/* mensagem no corpo do toast */}

            <Text m="0" fontSize="13px" fontWeight="normal" color="#686868">
              {item.nome_prod} {" - "} {item.codprod}
            </Text>
          </Flex>
        </Alert>
      ),
    })

    //move o scroll para o ultimo item do array

    const lastItem = cart[cart.length - 1]

    const lastItemElement = document.getElementById(`item-${lastItem.id_hash}`)

    lastItemElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    })

    //alem desse esooaço, mober mais um pouco para baixo
    setTimeout(() => {
      window.scrollBy(0, 900)
    }, 200)
  }

  function deleteItem(value) {
    setAnimationDelete(true)

    return new Promise((resolve) => {
      setTimeout(() => {
        removeFromCart(value)
        setAnimationDelete(false)
        resolve()
      }, 1000) // Tempo de atraso para aguardar a animação
    })
  }

  function handleItemEditContext(value) {
    openModalEdit(value)
    setGetIndex(index)
  }

  return (
    <Flex
      w="100%"
      alignItems="center"
      justifyContent="space-between"
      paddingBlock="1.125rem"
      paddingRight="1rem"
      {...(isMedia && { gap: "1rem" })}
      borderBottom={!isMedia && "2px solid #f5f5f5"}
      id={`item-${item.id_hash}`}
    >
      <Flex paddingLeft={!isMedia && "2.563rem"} width="300px" alignItems="center" justifyContent={"space-between"}>
        <Text m="0" color="#cc0000" fontWeight="bold" fontSize="15px">
          Item {index + 1}
        </Text>
        <Button
          background="transparent"
          _hover={{
            background: "transparent",
          }}
          border="1px solid #CFCFCF"
          color="#A4A3A3"
          fontSize="12px"
          fontWeight={"normal"}
          size="sm"
          onClick={() => handleItemEditContext(item, index)}
        >
          <FiEdit size=".9rem" />
          <Text m="0" ml=".3rem">
            Editar
          </Text>
        </Button>
        <Button
          background="transparent"
          _hover={{
            background: "transparent",
          }}
          border="1px solid #CFCFCF"
          color="#A4A3A3"
          fontSize="12px"
          fontWeight={"normal"}
          size="sm"
          onClick={() => handleDuplicateItem(item)}
        >
          <BiDuplicate size=".9rem" />
          <Text m="0" ml=".3rem">
            Duplicar
          </Text>
        </Button>
      </Flex>
      <Flex width={!media1480 && "450px"} justifyContent="space-between" alignItems="center">
        {!isMedia && (
          <Flex gap={"4.125rem"} position="relative" {...(media1480 && { marginRight: "1.125rem" })}>
            <Text m="0">Qtd.</Text>
            <Text m="0">Valor unitário</Text>
            <Text m="0">Valor Total</Text>

            <Flex
              position="absolute"
              top="4.8rem"
              left="0"
              width="100%"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text as="span" fontSize="15px" color="#616162">
                {item.quantidade}
              </Text>
              <Text as="span" fontSize="15px" color="#616162">
                {formatPrice(item.valor_unitario)}
              </Text>
              <Text as="span" fontSize="15px" color="#616162" fontWeight={"bold"}>
                {infoEmb.findIndex((emb) => emb.id_produto === item.id_hash) !== -1 ? (
                  <Text as="span" fontSize="15px" color="#616162">
                    {formatTotal(totalItemEmb)}
                  </Text>
                ) : (
                  <Text as="span" fontSize="15px" color="#616162">
                    {formatTotal(parseFloat(item.valor_total))}
                  </Text>
                )}
              </Text>
            </Flex>
          </Flex>
        )}
        <Button
          background="transparent"
          _hover={{
            background: "transparent",
          }}
          border="1px solid #CFCFCF"
          color="#A4A3A3"
          fontWeight={"normal"}
          size="sm"
          padding="0.525rem"
          onClick={() => deleteItem(item)}
        >
          <BsTrash size="1.1rem" />
        </Button>
      </Flex>
    </Flex>
  )
}
