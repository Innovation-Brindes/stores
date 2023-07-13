import {
  Box,
  Button,
  Flex,
  Icon,
  Modal as ChakraModal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useMediaQuery,
  useDisclosure,
} from "@chakra-ui/react"
import React, { useEffect } from "react"
import { SiPix } from "react-icons/si"
import { BsFillCreditCardFill } from "react-icons/bs"
import { AiOutlineBarcode } from "react-icons/ai"
import { Boleto } from "./Boleto"
import { Pix } from "./Pix"
import { Card } from "./Card"

export function ModalInfoPayment({ totalPedido }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [method, setMethod] = React.useState("card")
  const [isMobile, setIsMobile] = React.useState(false)
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)")

  useEffect(() => {
    setIsMobile(!isLargerThan768)
  }, [isLargerThan768])

  const taxas = {
    1: 0,
    2: 5.38,
    3: 6.59,
    4: 7.8,
    5: 9.01,
    6: 10.22,
    7: 11.43,
    8: 12.64,
    9: 13.85,
    10: 15.06,
    11: 16.27,
    12: 17.48,
  }

  function loopQtdParc() {
    const parcelas = []

    for (let i = 1; i <= 12; i++) {
      const juros = totalPedido * (taxas[i] / 100)
      const valorParcela = (totalPedido + juros) / i

      parcelas.push(valorParcela)
    }

    return parcelas
  }

  return (
    <>
      <Text
        as={"p"}
        mt={".3rem"}
        m={0}
        fontSize={".8rem"}
        fontWeight={"normal"}
        color={"gray.900"}
        onClick={onOpen}
        textDecoration={"underline"}
        _hover={{
          cursor: "pointer",
        }}
      >
        + formas de pagamento
      </Text>

      <ChakraModal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalOverlay />
        <ModalContent paddingInline={!isMobile && "2rem"}>
          <ModalHeader display={"flex"} alignItems={"center"} justifyContent={"space-evenly"} mt={"2rem"}>
            <Flex
              width={"100%"}
              alignItems={"center"}
              justifyContent={"space-evenly"}
              borderBottom={"2px solid #F5F5F5"}
            >
              <Flex
                alignItems={"center"}
                color={method === "card" ? "#FF4F00" : "gray.700"}
                flexDir={"column"}
                gap={2}
                cursor={"pointer"}
                position={"relative"}
                onClick={() => setMethod("card")}
                _after={{
                  content: "''",
                  position: "absolute",
                  display: method === "card" ? "block" : "none",
                  width: "100px",
                  height: "2px",
                  backgroundColor: "#FF4F00",
                  bottom: "-2px",
                }}
              >
                <Icon as={BsFillCreditCardFill} fontSize={"1.5rem"} />
                <Text m={0} fontWeight={"bold"} fontSize={"1rem"}>
                  Cartão
                </Text>
              </Flex>
              <Flex
                alignItems={"center"}
                color={method === "pix" ? "#FF4F00" : "gray.700"}
                flexDir={"column"}
                gap={2}
                cursor={"pointer"}
                position={"relative"}
                onClick={() => setMethod("pix")}
                _after={{
                  content: "''",
                  position: "absolute",
                  display: method === "pix" ? "block" : "none",
                  width: "100px",
                  height: "2px",
                  backgroundColor: "#FF4F00",
                  bottom: "-2px",
                }}
              >
                <Icon as={SiPix} fontSize={"1.5rem"} />
                <Text m={0} fontWeight={"bold"} fontSize={"1rem"}>
                  Pix
                </Text>
              </Flex>
              <Flex
                alignItems={"center"}
                color={method === "boleto" ? "#FF4F00" : "gray.700"}
                flexDir={"column"}
                gap={2}
                cursor={"pointer"}
                position={"relative"}
                onClick={() => setMethod("boleto")}
                _after={{
                  content: "''",
                  position: "absolute",
                  display: method === "boleto" ? "block" : "none",
                  width: "100px",
                  height: "2px",
                  backgroundColor: "#FF4F00",
                  bottom: "-2px",
                }}
              >
                <Icon as={AiOutlineBarcode} fontSize={"1.5rem"} />
                <Text m={0} fontWeight={"bold"} fontSize={"1rem"}>
                  Boleto
                </Text>
              </Flex>
            </Flex>
          </ModalHeader>
          <ModalCloseButton
            sx={{
              bgColor: "#FF4F00",
              color: "#fff",
              fontSize: "1rem",
              fontWeight: "bold",
              borderRadius: "100%",
            }}
            _focus={{
              outline: "none",
            }}
            _hover={{
              filter: "brightness(1.2)",
            }}
          />
          <ModalBody pb={6}>
            {method === "card" && (
              <Box width={"100%"}>
                {loopQtdParc().map((parcela, index) => {
                  return <Card key={index} parcela={parcela} index={index} taxas={taxas} totalPedido={totalPedido} />
                })}
              </Box>
            )}
            {method === "pix" && <Pix totalPedido={totalPedido} />}
            {method === "boleto" && <Boleto totalPedido={totalPedido} />}
          </ModalBody>
        </ModalContent>
      </ChakraModal>
    </>
  )
}
