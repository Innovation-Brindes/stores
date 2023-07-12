import { Flex } from "@chakra-ui/react"
import React from "react"

import { Header } from "../../../../../components/ConfirmacaoCompra/components/Header"
import { Success as Sucesso } from "../../../../../components/success/Success"

const Success = () => {
  return (
    <>
      <Flex
        minHeight="calc(100vh - 200px)"
        maxWidth="1366px"
        m="0 auto"
        flexDirection="column"
        justifyContent="space-around"
        padding="1rem"
      >
        <Header />
        <Sucesso message="O Seu pagamento foi efetuado com sucesso." />
      </Flex>
    </>
  )
}

export default Success
