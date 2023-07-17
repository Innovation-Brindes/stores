import React, { useEffect, useState } from "react"
import { Flex, Text, useMediaQuery, Button } from "@chakra-ui/react"
import { ButtonVoltar, ContainerFlex } from "../styles"
import { useRouter } from "next/router"
import Link from "next/link"

const ContainerTitle = (props) => {
  const [is1366px] = useMediaQuery("(max-width: 1366px)")
  const [mobileView, setmobileView] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      setmobileView(true)
    } else {
      setmobileView(false)
    }
  }, [])

  return (
    <>
      {mobileView ? (
        <></>
      ) : (
        <Flex mt="40px" justify="end" w="1250px" mx="auto" h="50px">
          <Link href="/acompanhe-seu-pedido" prefetch={false} passHref>
            <ButtonVoltar as="a" h="30px" mt="15px" pt="2px" w="50px" color="black">
              <span>Voltar</span>
            </ButtonVoltar>
          </Link>
        </Flex>
      )}
      <ContainerFlex>
        <Text
          w={mobileView ? "100vw" : "450px"}
          fontSize={mobileView ? "30px" : "35px"}
          fontFamily="Gisha bold"
          textAlign="center"
          as="h1"
        >
          Acompanhe seu pedido
        </Text>
        <Flex
          h="25px"
          bgColor="#CC0000"
          color="white"
          justify={mobileView ? "center" : "end"}
          mt="5px"
          w={mobileView ? "100vw" : "800px"}
        >
          <Text mr={mobileView ? "0" : "5px"} fontFamily="Gisha" align="center" pt="2px" fontSize="14px">
            <strong>NÚMERO DO PEDIDO:</strong>
          </Text>
          <Text ml={mobileView ? "5px" : "0"} mr={mobileView ? "0" : "50px"}>
            {props.state.dados_parceiro.numero_pedido}
          </Text>
        </Flex>
      </ContainerFlex>
    </>
  )
}

export default ContainerTitle
