import { Button, Flex, Text } from "@chakra-ui/react"
import { useCart } from "../../../../../../contexts/useCart"
import InputUsage from "../../../InputUsage"
import { useForm } from "react-hook-form"
import { AiOutlineArrowLeft } from "react-icons/ai"
import { schema } from "../../../../@schema"
import { yupResolver } from "@hookform/resolvers/yup"
import { baseURL, GerarOrcamento } from "../../../../../../services/api"
import { useEffect, useState } from "react"
import { useCallback } from "react"
import { useRouter } from "next/router"
import InputTelMask from "./InputTelMask"
import InputCpfCnpj from "../../../../../InputCpfCnpj"
import { setFirstLetterUpperCase } from "../../../../../../utils/setFirstLetterUpperCase"
import { useCookiesSession } from "../../../../../../contexts/cookiesSessionProvider"

export function Form({ infoEmb, transportadoraMaisBarata, seletedTransp }) {
  const { cart, frete, clearCart, handleStepCart, stepCart } = useCart()
  const [razaoSocial, setRazaoSocial] = useState("")
  const [items, setItems] = useState([])
  const { addressClient } = useCookiesSession()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
  })

  const router = useRouter()

  const text_frete =
    "Transportadora:" + seletedTransp?.originalName + ",prazo de entrega:" + frete?.prazo + ",preço:" + frete?.frete

  function addFreteSiteToCart(cart, text_frete) {
    return cart.map((item, index) => {
      return {
        ...item,
        frete_site: text_frete,
        sequencia: index + 1,
        codigo_produto: item.codprod,
        quantidade_produto: item.quantidade,
        cor_produto: item.cor_produto?.cod,
        prazo_entrega: item.prazo,
        token_embalagem: new Date().getTime().toString(),
        id_produto: item.id,
        numero_impressao: item.tipo_gravacao?.cod ?? item.tipo_gravacao,
      }
    })
  }

  function addFreteSiteToItems(items, text_frete) {
    return items.map((item) => {
      return {
        ...item,
        frete_site: text_frete,
        token_embalagem: new Date().getTime().toString(),
        numero_impressao: item.tipo_gravacao?.cod ?? item.tipo_gravacao,
      }
    })
  }

  const updatedEmb = addFreteSiteToItems(infoEmb, text_frete)

  useEffect(() => {
    const updatedCart = addFreteSiteToCart(cart, text_frete)

    setItems([...updatedEmb, ...updatedCart])
  }, [infoEmb, cart, text_frete])

  async function sendShippingSelected() {
    const params = {
      valida_frete: addressClient?.frete_gratis,
      nome_transportadora: transportadoraMaisBarata.transp_nome,
    }

    const response = await baseURL.post("/pedido/atualiza-peso-info-nota", params)
  }

  async function sendInfo(data) {
    const params = {
      ...data,
      cpf_cnpj_parceiro: cpf_cnpj_parceiro,
      telefone_parceiro: data.telefone_parceiro?.replace(/[^\d]+/g, ""),
      carrinho: items,
      valida_frete: transportadoraMaisBarata?.motoEntrega ? "MT" : "",
    }

    try {
      const response = await GerarOrcamento.post("", params)
      await sendShippingSelected()
      router.push("/lojahonda/sucesso")
      clearCart()
    } catch (error) {
      console.log(error)
    }
  }

  const cpf_cnpj_parceiro = watch("cpf_cnpj_parceiro")?.replace(/[^\d]+/g, "")

  const getInfoEnterprise = useCallback(async () => {
    if (cpf_cnpj_parceiro?.length === 14) {
      try {
        const response = await baseURL.get(`/pedido/busca-dados-receita/${cpf_cnpj_parceiro}`)

        setRazaoSocial(response.data.RAZAO_SOCIAL)
      } catch (error) {
        console.log(error)
      }
    }
  }, [cpf_cnpj_parceiro])

  useEffect(() => {
    getInfoEnterprise()
  }, [cpf_cnpj_parceiro, getInfoEnterprise])

  const razaoSocialReplace = razaoSocial?.replace(/[^a-zA-Z ]/g, "")

  return (
    stepCart === "finalizacao" && (
      <>
        <Text as="h3" color="#414042" fontSize="15px" m="0" mt={2}>
          Preencha os dados abaixo e pronto,
          <Text as="span" fontWeight="bold">
            {" "}
            baixe seu orçamento
          </Text>
        </Text>
        <Flex flexDir="column" gap=".68rem" width="100%" mt="1.5rem" as={"form"} onSubmit={handleSubmit(sendInfo)}>
          <InputCpfCnpj control={control} />

          <InputUsage
            placeholder="* Nome"
            {...register("nome_parceiro")}
            name="nome_parceiro"
            type="text"
            id="nome_parceiro"
            error={errors?.nome_parceiro}
          />
          {cpf_cnpj_parceiro?.length === 14 && (
            <InputUsage
              placeholder="* Razão Social"
              name="razao_social_parceiro"
              type="text"
              id="razao_social_parceiro"
              value={setFirstLetterUpperCase(razaoSocialReplace)}
            />
          )}

          <InputTelMask
            placeholder="* Telefone"
            {...register("telefone_parceiro")}
            name="telefone_parceiro"
            type="text"
            id="telefone_parceiro"
            error={errors?.telefone_parceiro}
          />

          <InputUsage
            placeholder="* E-mail"
            {...register("email_parceiro")}
            name="email_parceiro"
            type="text"
            id="email_parceiro"
            error={errors?.email_parceiro}
          />
          <Button
            bgColor="#cc0000"
            color="white"
            minH="2.4rem"
            mt="1rem"
            _hover={{
              filter: "brightness(0.9)",
            }}
            _focus={{
              border: "none",
            }}
            type="submit"
            width="100%"
            textTransform="uppercase"
            letterSpacing="0.1rem"
            fontWeight={"normal"}
            borderRadius="18px"
            isLoading={isSubmitting}
          >
            Finalizar Orçamento{" "}
          </Button>
          <Flex w="100%" justifyContent="flex-end" alignItems="center">
            {" "}
            <AiOutlineArrowLeft color="5A6148" size={20} />{" "}
            <Text
              color="#5A6148"
              fontSize="15px"
              fontWeight="bold"
              m="0"
              onClick={() => handleStepCart("entrega")}
              cursor="pointer"
            >
              Voltar
            </Text>
          </Flex>
        </Flex>
      </>
    )
  )
}
