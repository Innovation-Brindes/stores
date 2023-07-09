import { Image } from "@chakra-ui/image"
import { Input } from "@chakra-ui/input"
import { Flex, Text } from "@chakra-ui/layout"
import { ChakraProvider } from "@chakra-ui/provider"
import { Header } from "./Header"
import { Message } from "./Message"
import InputCpfCnpj from "../InputCpfCnpj"
import { Controller, useForm } from "react-hook-form"
import { AiOutlineSend } from "react-icons/ai"
import { CustomizableInputCnpj } from "./styles"
import { baseURL, SalvarContatoSite } from "../../services/api"
import { useEffect } from "react"
import { useCallback } from "react"
import { useState } from "react"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useWhatsApp } from "../../contexts/WhatsAppProvider"
import { FaWhatsapp } from "react-icons/fa"
import { Button } from "@chakra-ui/button"
import { WhatsAppButton } from "./WhatsAppButton"
import { Spinner } from "@chakra-ui/spinner"
import InputMask from "react-input-mask"
import { useMediaQuery } from "@chakra-ui/media-query"

const schema = yup.object().shape({
  cpf_cnpj_parceiro: yup.string().required("Campo obrigatório"),
  nome: yup.string().required("Campo obrigatório"),
  email: yup.string().required("Campo obrigatório"),
  telefone: yup.string().required("Campo obrigatório"),
})

export function WhatsAppChat() {
  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const [infoPartner, setInfoPartner] = useState({})
  const [error, setError] = useState(false)
  const [isLargerThan768] = useMediaQuery("(max-width: 768px)")
  const [mobile, setMobile] = useState(false)
  const [indexMessage, setIndexMessage] = useState(0)

  useEffect(() => {
    if (isLargerThan768) {
      setMobile(true)
    }

    if (!isLargerThan768) {
      setMobile(false)
    }
  }, [isLargerThan768])

  const { openChat, setOpenChat, timeOpenChat } = useWhatsApp()
  const [isBlocked, setIsBlocked] = useState(false)

  const cpfCnpj = watch("cpf_cnpj_parceiro")?.replace(/\D/g, "")

  useEffect(() => {
    setTimeout(() => {
      setIndexMessage(1)
    }, 3000)
  }, [openChat])

  const timerRedirect = 3000

  function redirect(time = timerRedirect) {
    setTimeout(() => {
      window.location.href = "https://api.whatsapp.com/send?phone=551126496030"
    }, time)
  }

  useEffect(() => {
    if (isSubmitSuccessful && !error && !isBlocked) {
      setTimeout(() => {
        redirect()
      }, 3000)
    }
  }, [isSubmitSuccessful, error])

  const getInfoPartner = useCallback(async () => {
    const response = await baseURL.get(
      `https://api.innovationbrindes.com.br/api/site/v2/pedido/busca-dados-receita/${cpfCnpj}`,
    )

    setInfoPartner(response.data)
  }, [cpfCnpj])

  async function submitWhatsapp(data) {
    try {
      const response = await SalvarContatoSite.post("", {
        nome_parceiro: data.nome,
        // nome_parceiro: null,
        razao_social: data.razao_social,
        cpf_cnpj_parceiro: cpfCnpj,
        telefone_parceiro: data.telefone,
        email_parceiro: data.email,
      })

      if (response.data === "Block") {
        setIsBlocked(true)
      }
    } catch (error) {
      console.log(error)
      setError(true)
    }

    reset()
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      setTimeout(() => {
        setOpenChat(false)
      }, 6000)
    }
  }, [isSubmitSuccessful, setOpenChat])

  useEffect(() => {
    //reseta o isSubmitSuccessful
    if (isSubmitSuccessful) {
      setTimeout(() => {
        reset()
      }, 6000)
    }
  }, [openChat, reset, isSubmitSuccessful])

  useEffect(() => {
    if (cpfCnpj?.length === 14) {
      getInfoPartner()
    }
  }, [cpfCnpj, getInfoPartner])

  useEffect(() => {
    if (!openChat) {
      reset()
      setError(false)
      setIndexMessage(0)
    }
  }, [openChat, reset])

  //seta o indedxmessage para 0 quando o chat é fechado, quando o chat é aberto, e quando a tela é carregada
  useEffect(() => {
    if (!openChat) {
      setIndexMessage(0)
    }
  }, [openChat])

  useEffect(() => {
    if (openChat) {
      setIndexMessage(0)
    }
  }, [openChat])

  useEffect(() => {
    setIndexMessage(0)
  }, [])

  return (
    <ChakraProvider>
      <WhatsAppButton />
      <Flex
        maxWidth={!mobile ? "23rem" : "100%"}
        width="100%"
        height={mobile && "100%"}
        flexDirection={"column"}
        {...(!mobile && { justifyContent: "center", alignItems: "center" })}
        borderTopRadius={!mobile && ".5rem"}
        overflow="hidden"
        as="form"
        onSubmit={handleSubmit(submitWhatsapp)}
        transform={openChat ? "translateX(0)" : "translateX(100%)"}
        position="fixed"
        bottom="0"
        right="0"
        transition="all .5s ease"
        zIndex="999999"
      >
        <Header />
        {/* body */}
        <Flex
          background={`url("/images/whatsapp/bg-whatsapp.jpg")`}
          w="100%"
          h="100%"
          minHeight="35rem"
          backgroundSize="cover"
          flexDirection="column"
        >
          {/* messages */}
          <Flex flexDirection="column" w="100%" h={!mobile && "100%"} padding="1rem" gap={4}>
            <Message
              message={`
              Olá, tudo bem?
            `}
              time={timeOpenChat}
            />
            {indexMessage === 1 && (
              <Message
                message={`
                  Irei fazer seu atendimento agora. <br /> 
                  Tudo o que você precisa fazer é <br />
                  apenas preencher os dados <br />
                  abaixo e estarei à sua disposição <br />
                  para ajudá-lo.
                `}
                time={timeOpenChat}
              />
            )}
          </Flex>
          {/* forms */}
          <Flex flexDirection="column" w="100%" h="100%" padding="1rem">
            <Flex flexDirection="column" gap={2} mb="2rem">
              <Flex position="relative">
                {" "}
                <Controller
                  name="cpf_cnpj_parceiro"
                  control={control}
                  onChange={(e) => e[0].target.value}
                  render={({ field }) => (
                    <CustomizableInputCnpj
                      className="custom-input"
                      background="#ffffffbe"
                      placeholder="* CPF | CNPJ"
                      {...field}
                      onChange={(e, type) => {
                        field.onChange(e.target.value)
                      }}
                    />
                  )}
                />
                {errors?.cpf_cnpj_parceiro && (
                  <Text as="span" position="absolute" fontSize="1.4rem" color="#f00" m="0" top="0%" right="1rem">
                    *
                  </Text>
                )}
              </Flex>
              <Flex position="relative">
                <Input
                  {...register("nome")}
                  placeholder="* Nome"
                  background="#ffffffbe"
                  border="1px solid #25D366"
                  borderRadius=".5rem"
                  padding=".5rem"
                  _focus={{ outline: "none" }}
                />
                {errors?.nome && (
                  <Text as="span" position="absolute" fontSize="1.4rem" color="#f00" m="0" top="0%" right="1rem">
                    *
                  </Text>
                )}
              </Flex>
              {cpfCnpj?.length === 14 && (
                <Input
                  name="razao_social"
                  placeholder="* Razão Social"
                  value={infoPartner?.RAZAO_SOCIAL}
                  {...register("razao_social")}
                  background="#ffffffbe"
                />
              )}
              <Flex position="relative">
                <InputMask mask="(99) 99999-9999" maskChar="_" {...register("telefone")} placeholder="* Telefone">
                  {({ inputRef, ...rest }) => (
                    <Input
                      {...rest}
                      background="#ffffffbe"
                      border="1px solid #25D366"
                      ref={inputRef}
                      borderRadius=".5rem"
                      padding=".5rem"
                      _focus={{ outline: "none" }}
                    />
                  )}
                </InputMask>

                {errors?.telefone && (
                  <Text as="span" position="absolute" fontSize="1.4rem" color="#f00" m="0" top="0%" right="1rem">
                    *
                  </Text>
                )}
              </Flex>

              <Flex position="relative">
                <Input
                  {...register("email")}
                  placeholder="* E-mail"
                  background="#ffffffbe"
                  border="1px solid #25D366"
                  borderRadius=".5rem"
                  padding=".5rem"
                  _focus={{ outline: "none" }}
                />
                {errors?.email && (
                  <Text as="span" position="absolute" fontSize="1.4rem" color="#f00" m="0" top="0%" right="1rem">
                    *
                  </Text>
                )}
              </Flex>
            </Flex>
            {isSubmitting && <Message message="Aguarde um momento..." time={timeOpenChat} />}
            {isSubmitSuccessful && !error && (
              <Message
                message={`
                Mensagem enviada com sucesso! Logo entraremos em contato. Aguarde um momento que estou te redirecionando
                para o link do WhatsApp.`}
                time={timeOpenChat}
              />
            )}
            {error && (
              <Message
                message="Ocorreu um erro ao enviar a mensagem, tente novamente mais tarde."
                error
                time={timeOpenChat}
              />
            )}
          </Flex>
        </Flex>
        {/* button */}
        <Button
          w="100%"
          h="3rem"
          bgColor="#25D366"
          justifyContent="center"
          alignItems="center"
          cursor="pointer"
          as="button"
          type="submit"
          borderRadius="0"
          _hover={{ bgColor: "#25D366" }}
          zIndex="999"
          //isloading oapcity
          opacity={1}
          _outline={{ outline: "none" }}
        >
          {!isSubmitting && (
            <>
              <AiOutlineSend size="1.5rem" color="#fff" />
              <Text as="span" fontSize=".9rem" color="#fff" m="0" marginLeft=".5rem">
                Enviar
              </Text>
            </>
          )}
          {isSubmitting && <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="#fff" size="sm" />}
        </Button>
      </Flex>
    </ChakraProvider>
  )
}
