import { Button } from "@chakra-ui/button"
import { FormControl, FormLabel } from "@chakra-ui/form-control"
import { Input } from "@chakra-ui/input"
import { Box, Flex, Text } from "@chakra-ui/layout"
import { useState } from "react"
import InputMask from "react-input-mask"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { setCookie } from "nookies"
import { useCookiesSession } from "../../../contexts/cookiesSessionProvider"
import { baseURL } from "../../../services/api"
import { extendTheme, useBreakpointValue } from "@chakra-ui/react"

const schema = yup.object().shape({
  cep: yup
    .string()
    .required("Por favor, digite seu CEP")
    .matches(/^\d{5}-\d{3}$/, "CEP inválido"),
})

export function Popover({ isOpen, onClose }) {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, is },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  const breakpoints = {
    sm: "320px",
    md: "768px",
    lg: "1280px",
    xl: "1366px",
    "2xl": "1920px",
  }

  const theme = extendTheme({ breakpoints })

  const { setAddressClient, addressClient } = useCookiesSession()

  async function getAddressClient(data) {
    try {
      const response = await baseURL.get(`/pedido/busca-endereco-cliente/${data.cep}`)

      if (response.data.length === 0) {
        setError("cep", {
          type: "manual",
          message: "CEP não encontrado",
        })

        return setAddressClient(null)
      }

      const { cep, rua, bairro, cidade, uf, frete_gratis, valida_frete } = response.data[0]

      const cookies = {
        cep,
        rua,
        bairro,
        cidade,
        uf,
        frete_gratis,
        valida_frete,
      }

      setCookie(null, "@innovationbrindes/addressClient:0.0.1", JSON.stringify(cookies), {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: "/",
      })

      setAddressClient({
        cep,
        rua,
        bairro,
        cidade,
        uf,
        frete_gratis,
        valida_frete,
      })

      onClose()
    } catch (error) {
      setError("cep", {
        type: "manual",
        message: "CEP não encontrado!",
      })

      setAddressClient(null)
    }
  }

  return (
    <Flex
      bgColor="rgba(0, 0, 0, 0.5)"
      position="fixed"
      display={isOpen ? "flex" : "none"}
      top="0"
      left="0"
      width="100%"
      height="100vh"
      zIndex="9"
      alignItems="center"
      justifyContent="center"
      fontFamily="Open Sans"
      onMouseDown={(e) => {
        if (e.target.id === "modal") onClose()
      }}
      id="modal"
    >
      <Flex
        bgColor="#fff"
        width="100%"
        maxWidth="298px"
        height="100%"
        maxHeight="281px"
        borderRadius="19px"
        alignItems="center"
        justifyContent="center"
        zIndex="9999"
        position="absolute"
        top="11rem"
        left={{
          lg: addressClient ? "1.3rem" : "6.7rem",
          xl: addressClient ? "1.5rem" : "6.7rem",
          "2xl": addressClient ? "7rem" : "12.5rem",
        }}
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        onClick={(e) => e.stopPropagation()}
      >
        <Box
          position="absolute"
          top="-20px"
          left="1.5rem"
          width="0"
          height="0"
          borderLeft="10px solid transparent"
          borderRight="10px solid transparent"
          borderBottom="20px solid #fff"
        />
        <Flex
          flex={1}
          paddingInline="37px"
          paddingBlock="10px"
          textAlign="start"
          flexDir="column"
          justifyContent={"space-between"}
          height="100%"
          as="form"
          onSubmit={handleSubmit(getAddressClient)}
        >
          <Text
            as="span"
            m={0}
            fontSize="15px"
            fontWeight="normal"
            color="#414042"
            lineHeight="20px"
            letterSpacing="0.25px"
            paddingTop="4px"
          >
            {" "}
            E verifique agora mesmo se o <strong style={{ color: "#E2001B" }}>FRETE GRÁTIS</strong> está disponível para
            a sua região!
          </Text>

          <FormControl id="cep" position="relative">
            <FormLabel htmlFor="cep" mt={4} mb={0} fontSize="14px" color="#414042" fontWeight="normal">
              Digite seu CEP
            </FormLabel>
            <InputMask mask="99999-999" maskChar="_" {...register("cep")}>
              {({ inputRef, ...rest }) => (
                <Input
                  id="cepMask"
                  type="text"
                  placeholder="00000-000"
                  borderRadius="0"
                  mt="8px"
                  ref={inputRef}
                  {...rest}
                />
              )}
            </InputMask>
            {(errors.cep && (
              <Box position="absolute" bottom="-2.5rem">
                <Text color="red.400" fontSize="14px">
                  {errors.cep.message}
                </Text>
              </Box>
            )) ||
              null}
          </FormControl>

          <Button
            bgColor="#E2001B"
            color="#fff"
            fontSize="20px"
            textTransform="uppercase"
            borderRadius="23px"
            mt={4}
            mb={4}
            fontWeight="normal"
            _hover={{
              filter: "brightness(0.9)",
            }}
            type="submit"
            isLoading={isSubmitting}
            loadingText="Buscando..."
          >
            Confirmar
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}
