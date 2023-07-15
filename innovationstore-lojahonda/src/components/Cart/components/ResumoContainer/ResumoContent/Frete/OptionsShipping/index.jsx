import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  Grid,
  useBreakpointValue,
  Center,
  Spinner,
  Stack,
  Skeleton,
} from "@chakra-ui/react"
import { useCart } from "../../../../../../../contexts/useCart"
import { useEffect, useState } from "react"
import { NossoCarro } from "./NossoCarro"
import { ClienteRetira } from "./ClienteRetira"
import { Divider } from "../../../Divider"
import { useCookiesSession } from "../../../../../../../contexts/cookiesSessionProvider"
import { TfiLocationPin } from "react-icons/tfi"

export function OptionsShipping({
  address,
  setSeletedTransp,
  prazoMaisBarato,
  transportadoraMaisBarata,
  loading,
  handleKangu,
  itemMaisProx,
}) {
  const { handleStepCart, changeValueFrete, cart } = useCart()
  const [addressEddited, setAddressEddited] = useState("")
  const [verifyIsFreeSP, setVerifyIsFreeSP] = useState(false)
  const { addressClient } = useCookiesSession()

  const isMobile = useBreakpointValue({
    base: true,
    lg: false,
  })

  const totalItens = cart?.reduce((acc, item) => {
    const { valor_total } = item

    const valorTotal = parseFloat(valor_total)

    return acc + valorTotal
  }, 0)

  useEffect(() => {
    if (address) {
      const addressEddited = `${address[0]?.rua} - ${address[0]?.bairro}, ${address[0]?.cidade} - ${address[0]?.estado} - ${address[0]?.uf}`
      setAddressEddited(addressEddited)
    }
  }, [address])

  const isSp = addressClient?.frete_gratis === "S"
  const isCapital = addressClient?.cidade === "São Paulo"
  const isGdSp = addressClient?.valida_frete === "S"

  const isFree = isCapital && totalItens >= 2000 ? true : false

  function handleStepCartValue(value) {
    const clienteRetira = {
      nome: "RETIRE EM NOSSA FÁBRICA",
      originalName: "Cliente Retira",
      prazo: 1,
      isClienteRetira: true,
      frete: 0,
    }

    const nossoCarro = {
      nome: "Express",
      originalName: "Nosso Carro",
      prazo: 2,
      isNossoCarro: true,
      frete: isCapital && isFree ? 0 : isCapital ? 80 : 140,
    }

    const freteGratis = {
      nome: "Frete Grátis",
      originalName: transportadoraMaisBarata?.transp_nome,
      prazo: parseInt(prazoMaisBarato) + 2,
      isFreteGratis: true,
      frete: 0,
    }

    const motoEntrega = {
      nome: "Moto Entrega",
      prazo: 2,
      prazoEnt: 2,
      isMotoEntrega: true,
      frete: transportadoraMaisBarata?.vlrFrete,
      id: 3,
      motoEntrega: true,
      transp_nome: "Frete grátis - Motoboy",
      previsao: "1",
      vlrFrete: 0,
      originalName: "Frete grátis - Motoboy",
      type: "moto",
      preco: 0,
    }

    const pierServ = {
      nome: "Pier Serv",
      originalName: "Pier Serv",
      prazo: 2,
      isPierServ: true,
      frete: 0,
    }

    const profileLog = {
      nome: "Profile Log",
      originalName: "Profile Log",
      prazo: 2,
      isProfileLog: true,
      frete: 0,
    }

    const autlog = {
      nome: "Autlog",
      originalName: "Autlog",
      prazo: 2,
      isAutlog: true,
      frete: 0,
    }

    const changeOptions = {
      clienteRetira: clienteRetira,
      nossoCarro: nossoCarro,
      freteGratis: freteGratis,
      motoEntrega: motoEntrega,
      pierServ: pierServ,
      profileLog: profileLog,
      autlog: autlog,
    }

    // if (transportadoraMaisBarata?.motoEntrega) {
    //   setSeletedTransp(transportadoraMaisBarata)
    //   changeValueFrete(transportadoraMaisBarata?.vlrFrete)
    //   return handleStepCart(3)
    // }

    setSeletedTransp(changeOptions[value])
    changeValueFrete(changeOptions[value])

    handleStepCart(3)
  }

  const valorFreteNossoCarro = isFree ? 0 : isCapital ? 80 : 140

  const enderecoCompleto = `${address[0]?.rua} - ${address[0]?.bairro}, ${address[0]?.cidade} - ${address[0]?.estado} - ${address[0]?.uf}`

  const motoEntregaOrFreteGratis = transportadoraMaisBarata?.motoEntrega ? "motoEntrega" : "freteGratis"

  useEffect(() => {
    const isKangu = handleKangu()

    const verifyFreteGratisGSP = addressClient?.frete_gratis === "S"

    setVerifyIsFreeSP(verifyFreteGratisGSP)
  }, [addressClient])

  return (
    <>
      <Flex w="100%" justifyContent={"space-between"} mt="1rem" flexDir="column">
        <Button
          w="165px"
          mx="auto"
          borderRadius="23px"
          fontSize="15px"
          color="#cc0000"
          bg="transparent"
          border="1px solid #cc0000"
          _hover={{
            bg: "#cc0000",
            color: "#fff",
          }}
          onClick={() => {
            handleStepCart(1)
            changeValueFrete(null)
          }}
        >
          Trocar endereço
        </Button>
        <Text m="0" fontSize="13px" mt="1rem">
          {addressEddited}
        </Text>
        <Divider />

        <Box
          as="header"
          w="100%"
          paddingBottom="1rem"
          fontSize="11px"
          textTransform="uppercase"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Flex flexDir="column" justifyContent="center" alignItems="center" w="100%" position="relative" gap={2}>
            <Grid w="100%" templateColumns={!isMobile ? "3fr 2.3fr .2fr" : "1fr 1fr 1fr"} fontWeight={"bold"}>
              <Text as="span"></Text>
              <Flex flexDir="column" alignItems="center" paddingLeft={isMobile && "5.3rem"}>
                <Text as="span" paddingRight={"3.4rem"}>
                  Prazo
                </Text>
                <Text
                  color="#919191"
                  textTransform="lowercase"
                  fontSize="9px"
                  position="absolute"
                  bottom="-1.8rem"
                  right={!isMobile ? "5.5rem" : "6.6rem"}
                  fontWeight="normal"
                >
                  (não inclui produção)
                </Text>
              </Flex>
              <Text as="span" paddingRight={!isMobile && "1rem"} paddingLeft={isMobile && "1rem"}>
                Preço
              </Text>
            </Grid>
          </Flex>
        </Box>
        {
          // isGdSp &&
          addressClient?.frete_gratis === "S" && (
            <Grid
              bgColor="#414042"
              alignItems="center"
              w="100%"
              templateColumns={!loading ? "2fr 1.5fr 1fr" : "1fr"}
              color="#fff"
              gap="9px"
              lineHeight=".8rem"
              borderRadius="6px"
              paddingBlock="5px"
              paddingInline="10px"
              border="1px solid #414042"
              onClick={() => handleStepCartValue(motoEntregaOrFreteGratis)}
              cursor="pointer"
              mb=".5rem"
              height="35px"
            >
              {!loading && (
                <>
                  <Image src="/gifs/frete-gratis/frete-gratis.png" width="90px" />
                  <Text fontSize="11px" textTransform="lowercase" m={0} fontWeight="bold">
                    {transportadoraMaisBarata?.motoEntrega ? "2 dias úteis" : `${parseInt(prazoMaisBarato)} dias úteis`}
                  </Text>
                  <Text fontSize="11px" textTransform="lowercase" m={0} fontWeight="bold">
                    sem custo
                  </Text>
                </>
              )}
              {loading && (
                <Center>
                  <Spinner size="sm" />
                </Center>
              )}
            </Grid>
          )
        }
        {!loading && (
          <>
            <Flex flexDir="column" gap={2}>
              {
                <ClienteRetira
                  name="Retire / Fábrica"
                  handleStepCartValue={() => handleStepCartValue("clienteRetira")}
                />
              }
              {<ClienteRetira name="Pier Serv" handleStepCartValue={() => handleStepCartValue("pierServ")} />}
              {<ClienteRetira handleStepCartValue={() => handleStepCartValue("autlog")} name="Autlog" />}
              {<ClienteRetira handleStepCartValue={() => handleStepCartValue("profileLog")} name="ProfileLog" />}
            </Flex>
            {isGdSp && !verifyIsFreeSP && (
              <NossoCarro handleStepCartValue={handleStepCartValue} valorFrete={valorFreteNossoCarro} />
            )}
          </>
        )}
        {loading && (
          <Stack>
            <Skeleton height="32px" borderRadius="6px" />
            <Skeleton height="32px" borderRadius="6px" />
          </Stack>
        )}
      </Flex>
    </>
  )
}
