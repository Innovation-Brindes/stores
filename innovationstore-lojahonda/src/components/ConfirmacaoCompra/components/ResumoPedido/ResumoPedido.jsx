import { Text, Flex, useMediaQuery } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import * as S from "./resumoStyles"

export const ResumoPedido = ({ isMobile = false, valores, valorTotalItens, valorFreteResumo }) => {
  const [isMaxWidth768] = useMediaQuery("(max-width: 768px)")
  const [isMinWidthMedium, setIsMinWidthMedium] = useState(false)

  useEffect(() => {
    if (isMaxWidth768 !== isMinWidthMedium) {
      setIsMinWidthMedium(isMaxWidth768)
    }
  }, [isMaxWidth768])

  const soma = Array.from(valorTotalItens).reduce((acc, curr) => {
    return acc + Number(curr)
  }, 0)

  return (
    <>
      <Flex width="100%" bg="#cc0000" alignItems="center" justifyContent="center">
        <Text
          width="100%"
          textAlign="center"
          margin="0"
          paddingBlock=".3rem"
          fontWeight="bold"
          color="white"
          {...(isMinWidthMedium && { fontSize: "1.2rem" })}
        >
          Resumo do pedido
        </Text>
      </Flex>
      {!isMobile && (
        <>
          <S.ResumoContainer>
            <Flex
              gap="2rem"
              border="1px solid #cecece"
              padding="1rem"
              minWidth={isMinWidthMedium ? "100%" : "900px"}
              justifyContent={!isMinWidthMedium && "center"}
              {...(isMinWidthMedium && {
                width: "100%",
                flexDirection: "column",
              })}
            >
              <Flex
                position="relative"
                _after={{
                  content: '""',
                  width: "2px",
                  height: "100%",
                  backgroundColor: "#333",
                  position: "absolute",
                  right: "-1.1rem",
                  top: "0",
                }}
                gap={8}
              >
                <Text margin="0">VALOR TOTAL DOS ITENS:</Text>
                <Text margin="0" marginLeft="auto" {...(isMinWidthMedium && { fontSize: ".3rem" })}>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(soma)}
                </Text>
              </Flex>
              <Flex
                position="relative"
                _after={{
                  content: '""',
                  width: "2px",
                  height: "100%",
                  backgroundColor: "#333",
                  position: "absolute",
                  right: "-1.1rem",
                  top: "0",
                }}
                gap={8}
              >
                <Text margin="0">SUBSTITUIÇÃO TRIBUTÁRIA:</Text>
                <Text margin="0" marginLeft="auto">
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(parseFloat(valores?.substituicaoTributaria[0]))}
                </Text>
              </Flex>
              <Flex gap={8}>
                <Text margin="0">VALOR DO FRETE: </Text>
                <Text margin="0" marginLeft="auto">
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(parseFloat(valorFreteResumo))}
                </Text>
              </Flex>
            </Flex>

            <Flex
              padding="1rem"
              bgColor="#2C2C3A"
              color="white"
              gap={8}
              flex="1"
              marginLeft={isMinWidthMedium ? "0" : "1rem"}
              {...(isMinWidthMedium && {
                flexDirection: "column",
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
              })}
            >
              <Text margin="0">VALOR TOTAL DO PEDIDO:</Text>
              <Text margin="0" marginLeft="auto" fontWeight="bold">
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(
                  parseFloat(
                    parseFloat(soma) + parseFloat(valores?.substituicaoTributaria[0]) + parseFloat(valorFreteResumo),
                  ),
                )}
              </Text>
            </Flex>
          </S.ResumoContainer>
        </>
      )}
      {!!isMobile && (
        <>
          <Flex flexDir="column" width="100%" alignItems="center" gap={12}>
            <Flex
              paddingBlock=".5rem"
              paddingInline="1rem"
              border="1px solid #cecece"
              width="100%"
              alignItems="center"
              justifyContent="center"
              gap={1}
            >
              <Text margin="0" fontSize="1rem" textTransform="uppercase" padding=".6rem">
                Valor total dos itens:
              </Text>{" "}
              <Text margin="0" fontSize="1rem" fontWeight="bold">
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(soma)}
              </Text>
            </Flex>
            <Flex
              paddingBlock=".5rem"
              paddingInline="1rem"
              border="1px solid #cecece"
              width="100%"
              alignItems="center"
              justifyContent="center"
              gap={1}
            >
              <Text margin="0" fontSize="1rem" textTransform="uppercase" padding=".6rem">
                Substituição tributária:
              </Text>{" "}
              <Text margin="0" fontSize="1rem" fontWeight="bold">
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(parseFloat(valores?.substituicaoTributaria[0]))}
              </Text>
            </Flex>
            <Flex
              paddingBlock=".5rem"
              paddingInline="1rem"
              border="1px solid #cecece"
              width="100%"
              alignItems="center"
              justifyContent="center"
              gap={1}
            >
              <Text margin="0" fontSize="1rem" textTransform="uppercase" padding=".6rem">
                Valor do frete:
              </Text>{" "}
              <Text margin="0" fontSize="1rem" fontWeight="bold">
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(valorFreteResumo)}
              </Text>
            </Flex>
            <Flex
              paddingBlock=".5rem"
              paddingInline="1rem"
              border="1px solid #cecece"
              width="100%"
              alignItems="center"
              justifyContent="center"
              gap={1}
              bgColor="#2C2C3A"
              color="white"
            >
              <Text margin="0" fontSize="1rem" textTransform="uppercase" padding=".6rem">
                VALOR TOTAL DO PEDIDO:
              </Text>{" "}
              <Text margin="0" fontSize="1rem" fontWeight="bold">
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(valores?.valorTotalPedido[0])}
              </Text>
            </Flex>
          </Flex>
        </>
      )}
    </>
  )
}
