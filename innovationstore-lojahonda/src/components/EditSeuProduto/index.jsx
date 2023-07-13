import { Accordion } from "@chakra-ui/accordion"
import { Input } from "@chakra-ui/input"
import { Box, Flex, Text } from "@chakra-ui/layout"
import { ChakraProvider } from "@chakra-ui/provider"
import InputColor from "./InputColor"
import { RadioInputExample } from "./InputRadio"
import { Steps } from "./Steps"
import { IoIosRefreshCircle } from "react-icons/io"
import { useForm } from "react-hook-form"
import { useCart } from "../../contexts/useCart"
import { Button } from "@chakra-ui/button"
import {
  useMediaQuery,
  Alert,
  AlertIcon,
  AlertTitle,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react"

import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useEffect, useState } from "react"
import { useDebounce } from "../../hooks/useDebounce"
import { setFirstLetterUpperCase } from "../../utils/setFirstLetterUpperCase"
import { CloseIcon } from "@chakra-ui/icons"
import { RadioPersonalization } from "./InputRadio/RadioPersonalization"
import { formatPrice } from "../../utils/formatPrice"

const schema = yup.object().shape({
  personalizacao: yup.object().required("Selecione uma personalização"),
  quantidade: yup
    .number()
    .typeError("Insira uma quantidade válida")
    .required("Insira uma quantidade")
    .positive("Insira uma quantidade válida")
    .integer("Insira uma quantidade válida"),

  impressao: yup.string().required("Selecione uma impressão"),
  retirada: yup.string().required("Selecione uma opção"),
})

export function EditeSeuProduto({
  noButton = false,
  colors,
  impressao,
  prazo,
  handleEditItem,
  personalizacao,
  handleSubmitEdit,
}) {
  const { itemEdit, handleCloseModal } = useCart()

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const toast = useToast()

  const debouncedValue = useDebounce(watch("quantidade"), 200)

  const corProduto = watch("cor_produto")

  const [isLargerThan768] = useMediaQuery("(max-width: 768px)")
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (isLargerThan768) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }, [isLargerThan768])

  const optionPersonalizacao = [
    ...personalizacao.map((item, index) => {
      return {
        id: index,
        value: item.cod,
        text: item.nome,
      }
    }),
  ]

  const optionRetirada = [
    ...prazo.map((item, index) => {
      return {
        id: index,
        value: item.prazo,
        nome_data: item.nome_data,
        date_format: item.date_format,
        data_producao: item.data_producao,
      }
    }),
  ]

  const optionImpressao = [
    ...impressao.map((item, index) => {
      return {
        id: index,
        value: item,
        text: item.desc,
      }
    }),
  ]

  const defaultValueImpressao = itemEdit?.batidas.toString()
  const defaultValueRetirada = itemEdit?.prazo
  const defaultValueCorProduto = itemEdit?.allInfos?.cor_selecionada

  const [checked, setChecked] = useState(defaultValueCorProduto)

  function sendData(data) {
    if (data.quantidade > corProduto?.estoque) {
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
            <AlertIcon />
            <Flex flexDir="column">
              <AlertTitle mr={6}>A quantidade desejada não está disponível em estoque</AlertTitle>
              {/* mensagem no corpo do toast */}

              <Text m="0" fontSize="13px" fontWeight="normal" color="#686868">
                Disponível: {corProduto?.estoque}
              </Text>
            </Flex>
          </Alert>
        ),
      })

      return
    }

    handleEditItem(data)
  }

  const personalizacaoRadio = watch("personalizacao")
  const impressaoRadio = watch("impressao")
  const retiradaRadio = watch("retirada")
  const corProdutoRadio = watch("cor_produto")

  const parametros = {
    cor_produto: corProdutoRadio || itemEdit?.cor_produto?.cod,
    personalizacao: personalizacaoRadio || (itemEdit?.tipo_gravacao?.cod ?? itemEdit?.tipo_gravacao),
    impressao: impressaoRadio || defaultValueImpressao,
    retirada: retiradaRadio || itemEdit?.prazo,
    quantidade: debouncedValue || itemEdit?.quantidade,
  }

  useEffect(() => {
    setChecked(corProdutoRadio)
  }, [corProdutoRadio])

  function editProduct() {
    if (debouncedValue > corProduto?.estoque || debouncedValue > itemEdit?.allInfos?.cor_estoque) {
      toast({
        position: "top-right",
        render: () => (
          <Alert
            status="error"
            borderRadius="0"
            variant="top-accent"
            position="top-right"
            width="100%"
            maxWidth="500px"
            justifyContent="space-between"
            alignItems="center"
            padding="1rem"
            bg="#FFF5F1"
            color="#E2001B"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            borderBottomRadius="10px"
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
            <AlertIcon transform="translateY(-18px)" />
            <Flex flexDir="column">
              <AlertTitle mr={6}>Quantidade indisponível</AlertTitle>
              {/* mensagem no corpo do toast */}

              <Text m="0" fontSize="13px" fontWeight="normal" color="#686868">
                A quantidade desejada não está disponível em estoque
              </Text>

              <Text m="0" fontSize="13px" color="#686868" fontWeight="bold">
                Estoque disponível: {corProduto?.estoque ?? itemEdit?.allInfos?.cor_estoque}
              </Text>
            </Flex>
          </Alert>
        ),
      })

      return
    }
    handleEditItem(parametros)
  }

  useEffect(() => {
    handleEditItem({
      cor_produto: corProdutoRadio || itemEdit?.cor_produto?.cod,
      personalizacao: personalizacaoRadio || (itemEdit?.tipo_gravacao?.cod ?? itemEdit?.tipo_gravacao),
      impressao: impressaoRadio || defaultValueImpressao,
      retirada: retiradaRadio || itemEdit?.prazo,
      quantidade: itemEdit?.quantidade,
    })
  }, [corProdutoRadio, personalizacaoRadio, impressaoRadio, retiradaRadio])

  function finalizeEdit() {
    handleCloseModal()
    handleSubmitEdit()
  }

  // adicionar uma flag no valor que é o mais rapido, dentre os 6

  const objetoMaisRapido = optionRetirada.reduce((menorObjeto, objetoAtual) => {
    const menorValor = parseInt(menorObjeto.value)
    const valorAtual = parseInt(objetoAtual.value)
    return valorAtual < menorValor ? objetoAtual : menorObjeto
  })

  // Passo 2: Adicione a propriedade "maisRapido" ao objeto encontrado
  const dataListComFlag = optionRetirada.map((objeto) => {
    if (objeto === objetoMaisRapido) {
      return { ...objeto, maisRapido: true }
    }
    return { ...objeto, maisRapido: false }
  })

  return (
    <ChakraProvider>
      <Accordion
        allowToggle
        maxW="26.875rem"
        w="100%"
        fontFamily={"Open Sans, sans-serif"}
        as="form"
        onSubmit={handleSubmit(sendData)}
      >
        <Steps title="Selecione a cor do Brinde" error={errors.cor_produto?.message}>
          <Flex w="100%" flexDir="column" position="relative">
            <Text m="0" color="#414042">
              Selecione a cor do produto:{" "}
              {setFirstLetterUpperCase(corProduto?.text) || setFirstLetterUpperCase(itemEdit?.cor_produto?.desc)}
            </Text>
            <Text as="span" m="0" fontSize="0.6875rem" color="#414042">
              Disponivel: {corProduto?.estoque ?? itemEdit?.allInfos.cor_estoque}
            </Text>
            <Flex gap={2} mt=".3rem">
              {colors?.map((item) => {
                return (
                  <InputColor
                    key={item.id}
                    infoColor={item.rgb_cores}
                    value={item}
                    control={control}
                    disabled={item.estoque === 0}
                    {...register("cor_produto")}
                    defaultChecked={defaultValueCorProduto}
                    checked={checked?.cod === item.cod}
                  />
                )
              })}
            </Flex>

            {corProduto?.data_reposicao_estoque !== null && (
              <Text
                m="0"
                as="span"
                fontSize="0.625rem"
                textAlign="end"
                position="absolute"
                right="0"
                bottom="-1rem"
                color="#919191"
              >
                Reposição de estoque: 30/12/1995 | + {corProduto?.quantidade_repo} un.
              </Text>
            )}
          </Flex>
        </Steps>

        <Steps title="Tipo de personalização" error={errors.personalizacao?.message}>
          <Flex flexDir="column" w="100%" alignItems="flex-start">
            {optionPersonalizacao?.map((item, index) => (
              <Flex
                key={index}
                justifyContent={"space-between"}
                w="100%"
                alignItems="center"
                borderBottom={
                  // se for o ultimo item, não coloca a borda
                  index === optionPersonalizacao.length - 1 ? "none" : "1px dashed #CFCFCF"
                }
                gap={2}
              >
                <Flex paddingBlock=".7rem">
                  <RadioPersonalization
                    control={control}
                    option={item}
                    defaultValue={optionPersonalizacao[1]}
                    name="personalizacao"
                  />
                  <Text m="0" color="#414042">
                    {item.text}
                  </Text>
                </Flex>
                <Flex gap={2}>
                  {Array.from({ length: index + 1 }, (_, i) => (
                    <Flex position="relative" key={index}>
                      <Box
                        w="1.5rem"
                        h="1.5rem"
                        bg="transparent"
                        border="2px solid #CFCFCF"
                        transform="rotate(225deg)"
                        borderRadius="50% 50% 0 50%"
                      />
                      <Text
                        m="0"
                        position="absolute"
                        top="50%"
                        left="50%"
                        transform="translate(-50%, -50%)"
                        color="#CFCFCF"
                      >
                        {index + 1}
                      </Text>
                    </Flex>
                  ))}
                </Flex>
              </Flex>
            ))}
          </Flex>
        </Steps>
        <Steps title="Quantidade de impressão" error={errors.quantidade?.message}>
          <Flex flexDir="column" gap={2}>
            {optionImpressao?.map((tipo, index) => (
              <Flex key={index}>
                <RadioInputExample
                  control={control}
                  option={tipo}
                  name="impressao"
                  defaultValue={defaultValueImpressao}
                />
                <Text m="0" color="#414042">
                  {parseInt(tipo.value) > 1 ? tipo.value + " Impressões" : tipo.value + " Impressão"}
                </Text>
              </Flex>
            ))}
          </Flex>
        </Steps>
        <Steps title="Retirada | Prazo de produção">
          {dataListComFlag?.map((item, index) => (
            <Flex gap={3} alignItems="center" justifyContent="space-between" key={index}>
              <RadioInputExample control={control} option={item} name="retirada" defaultValue={defaultValueRetirada} />
              <Flex
                paddingBlock=".3rem"
                paddingInline=".7rem"
                borderBottom="1px dashed #cecece"
                w="100%"
                flex="1"
                bg={item.maisRapido ? "#E2001B" : item.value > 7 ? "#95C620" : "transparent"}
                color={item.maisRapido ? "#fff" : item.value > 7 ? "#fff" : "#414042"}
                marginBlock=".5rem"
              >
                <Text m="0" w="100%" fontSize="0.775rem">
                  {item.data_producao} | {item.nome_data}{" "}
                  {item.value < 6 ? "| MAIS RÁPIDO" : item.value > 7 ? "| MAIS ECONÔMICO" : ""}
                </Text>
              </Flex>
            </Flex>
          ))}
        </Steps>
        <Steps title="Quantidade" error={errors.quantidade?.message}>
          <Flex w="100%" alignItems="center" justifyContent="flex-start" flexDir="column">
            <Text as="h1" m="0" color="#E2001B" fontSize="1.25rem" fontWeight={"bold"}>
              Digite a quantidade desejada
            </Text>
            <Flex position="relative" mt=".3rem">
              <Input
                w="100%"
                maxW="9.375rem"
                mt=".3rem"
                _focus={{ borderColor: "#E2001B" }}
                padding={1}
                type="number"
                size="sm"
                textAlign="center"
                borderRadius="5px"
                {...register("quantidade")}
                defaultValue={itemEdit?.quantidade}
                max={corProduto?.estoque ?? itemEdit?.allInfos?.cor_estoque}
              />
              <Flex
                alignItems="center"
                justifyContent="center"
                position="absolute"
                right="-3rem"
                top="50%"
                transform="translate(50%, -50%)"
                cursor={"pointer"}
                as="button"
                type="submit"
                onClick={() => {
                  editProduct()
                }}
              >
                <IoIosRefreshCircle size="2rem" color="#E2001B" />
                <Text m="0" as="span" color="#414042" fontSize="0.85rem">
                  atualizar
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Steps>
        {isMobile && (
          <>
            <Flex flexDir="column" gap={1} mt="2rem">
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
            <Table variant="simple" mt="1rem" w="100%">
              <Thead>
                <Tr>
                  <Th textTransform="initial" textAlign="center" fontSize=".7rem">
                    Qtd.
                  </Th>
                  <Th textTransform="initial" textAlign="center" fontSize=".7rem">
                    Valor unitário
                  </Th>
                  <Th textTransform="initial" textAlign="center" fontSize=".7rem">
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
          </>
        )}
        {!noButton && (
          <Flex>
            <Button
              textTransform="uppercase"
              m="0 auto"
              mt={isMobile ? "1rem" : "4rem"}
              paddingInline="1.5rem"
              marginBottom="1rem"
              minW="18.5rem"
              minH="2.75rem"
              bgColor="#E2001B"
              color="#fff"
              borderRadius="23px"
              onClick={() => finalizeEdit()}
            >
              Confirmar e salvar
            </Button>
          </Flex>
        )}
      </Accordion>
    </ChakraProvider>
  )
}
