import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input,
  Spinner,
  Text,
  Tooltip,
  WrapItem,
} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { IoIosArrowDropdown } from "react-icons/io"

import InputMask from "react-input-mask"
import { GoAlert } from "react-icons/go"
import { useCart } from "../../../../../../contexts/useCart"
import { Form } from "./Form"
import { OptionsShipping } from "./OptionsShipping"

import { PaymentMethods } from "../../../PaymentMethods"
import { kanguCotation } from "./functions/kangu"
import { valoresKangu } from "./helpers/valoresKangu"
import { Transportadoras } from "./OptionsShipping/Transportadoras"
import { Divider } from "../../Divider"
import Image from "next/image"
import { useCookiesSession } from "../../../../../../contexts/cookiesSessionProvider"
import { baseURL } from "../../../../../../services/api"
import { getShippingFedex } from "./functions/fedex"
import { buslogCotation } from "./functions/buslog"
import { jamefCotation } from "./functions/jamef"
import { RiAlertFill } from "react-icons/ri"
import { obterValorMaisProximo } from "./functions/obterValorMaisProximo"
import { set } from "nprogress"

export function Frete() {
  const [isOpen, setIsOpen] = useState(false)
  const [error, setError] = useState(false)
  const { cart, infoEmb, totalEmbValue, stepCart, handleStepCart, total } = useCart()
  const [address, setAddress] = useState({})
  const [loading, setLoading] = useState(false)
  const [prazoProducao, setPrazoProducao] = useState(1)
  const [seletedTransp, setSeletedTransp] = useState({})
  const [dataKangu, setDataKangu] = useState([])
  const [dataJamef, setDataJamef] = useState([])
  const [dataBuslog, setDataBuslog] = useState([])
  const [dataFedex, setDataFedex] = useState([])
  const [cubagemProximaCaixa, setCubagemProximaCaixa] = useState(null)
  const [isAgrupped, setIsAgrupped] = useState(false)
  const { addressClient, setAddressClient } = useCookiesSession()
  const [cep, setCep] = useState(addressClient?.cep)
  const [transportadoraMaisBarata, setTransportadoraMaisBarata] = useState(null)

  const prazoMaisBaratoTransp = transportadoraMaisBarata?.prazoEnt + 2

  const totalItens = cart?.reduce((acc, item) => {
    const { valor_total } = item

    const valorTotal = parseFloat(valor_total)

    return acc + valorTotal
  }, 0)

  const totalPed = total || totalItens + totalEmbValue

  function getHandleStepCart(value) {
    handleStepCart(value)
  }

  const qtdCaixa = cart?.reduce((acc, item) => {
    const { cubagem } = item

    const quantidade_caixa = parseInt(cubagem?.qtdcaixa.valor)

    return acc + quantidade_caixa
  }, 0)

  const kanguValue = cart?.reduce((acc, curr) => {
    const { cubagem } = curr
    const calcKanguReplace = parseFloat(cubagem.calc_kangu.replace(",", ".")) || 0
    const quantidadeCaixa = parseInt(cubagem.qtdcaixa.valor) || 0

    return acc + calcKanguReplace * quantidadeCaixa
  }, 0)

  const itemMaisProx = obterValorMaisProximo(valoresKangu, kanguValue)

  const isGrandeSp = addressClient?.valida_frete === "S"

  function handleKangu() {
    const cubagens = cart?.map((item) => {
      return item.cubagem
    })

    const qtdCaixas = cart?.reduce((acc, item) => {
      const { cubagem } = item

      const quantidade_caixa = parseInt(cubagem?.qtdcaixa.valor)

      return acc + quantidade_caixa
    }, 0)

    const pesoProxCaixa = cubagens?.reduce((acc, item) => {
      const { cubagemTotal } = item

      const pesoTotal = parseFloat(cubagemTotal?.valor)

      return acc + pesoTotal
    }, 0)

    if (itemMaisProx) {
      const caixaProx = {
        ...itemMaisProx,
        peso: pesoProxCaixa,
      }

      setCubagemProximaCaixa(caixaProx)
    }

    const isKangu = cubagens?.reduce((acc, item) => {
      const { calc_kangu } = item

      const kanguFormatted = calc_kangu?.replace(",", ".")

      const parseKangu = parseFloat(kanguFormatted)

      return acc + parseKangu
    }, 0)

    const verificacao = isKangu * qtdCaixa <= 11 ? true : false //menor que 20 quando chegar a caixa 60

    if (verificacao && qtdCaixas > 1) {
      setIsAgrupped(true)
    } else {
      setIsAgrupped(false)
    }

    return verificacao
  }

  useEffect(() => [handleKangu()], [cart, addressClient, cep])

  useEffect(() => {
    cart?.map((item) => {
      if (parseInt(item.prazo) > prazoProducao) {
        setPrazoProducao(parseInt(item.prazo))
      }
    })
  }, [cart, prazoProducao])

  function handleCepChange(e) {
    setCep(e.target.value)
  }

  useEffect(() => {
    setCep(addressClient?.cep)
    // handleStepCart(1)
  }, [addressClient?.cep, addressClient])

  useEffect(() => {
    if (cep?.length === 8) {
      handleCalculateShipping()
    }
  }, [cep])

  const handleCalculateShipping = async () => {
    setError(false)

    setLoading(true)

    const responceCep = await baseURL.get(`/pedido/busca-endereco-cliente/${cep}`)

    const dataCep = responceCep.data

    setAddress(dataCep)
    setAddressClient({
      cep: dataCep[0].cep,
      rua: dataCep[0].rua,
      bairro: dataCep[0].bairro,
      cidade: dataCep[0].cidade,
      uf: dataCep[0].uf,
      frete_gratis: dataCep[0].frete_gratis,
      valida_frete: dataCep[0].valida_frete,
    })

    const volumesForKangu = []

    cart.map((item) => {
      volumesForKangu.push({
        embalagem: false,
        id_hash: item.id_hash,
        width: parseInt(item.cubagem.largura.valor),
        height: parseInt(item.cubagem.altura.valor),
        length: parseInt(item.cubagem.comprimento.valor),
        weight: parseFloat(item.cubagem.peso.valor) === 0 ? 1 : parseFloat(item.cubagem.peso.valor),
        value: item.valor_total,
        amount: parseInt(item.cubagem.qtdcaixa.valor),
        object_types: ["sobconsulta"],
      })
    })

    const volumesKanguEmbalagem = []
    infoEmb.map((item) => {
      volumesKanguEmbalagem.push({
        embalagem: true,
        id_hash: item.id_hash,
        width: parseInt(item.largura),
        height: parseInt(item.altura),
        length: parseInt(item.comprimento),
        weight: parseFloat(item.peso) === 0 ? 1 : parseFloat(item.peso),
        value: item.valor,
        amount: parseInt(item.quantidade),
        object_types: ["sobconsulta"],
      })
    })

    const volumes = []
    cart.map((item) => {
      volumes.push({
        embalagem: false,
        id_hash: item.id_hash,
        width: parseInt(item.cubagem.largura.valor) / 100,
        height: parseInt(item.cubagem.altura.valor) / 100,
        length: parseInt(item.cubagem.comprimento.valor) / 100,
        weight: parseFloat(item.cubagem.peso.valor) === 0 ? 1 : parseFloat(item.cubagem.peso.valor),
        value: item.valor_total,
        amount: parseInt(item.cubagem.qtdcaixa.valor),
        object_types: ["sobconsulta"],
      })
    })

    const volumesEmbalagem = []
    infoEmb.map((item) => {
      volumesEmbalagem.push({
        embalagem: true,
        id_hash: item.id_hash,
        width: parseInt(item.cubagem_embalagem.Largura) / 100,
        height: parseInt(item.cubagem_embalagem.Altura) / 100,
        length: parseInt(item.cubagem_embalagem.Comprimento) / 100,
        weight: parseFloat(item.cubagem_embalagem.PesoCaixa) === 0 ? 1 : parseFloat(item.cubagem_embalagem.PesoCaixa),
        value: Math.round((parseFloat(item.valor_total) / parseInt(item.cubagem_embalagem.QtdCaixa)) * 100) / 100,
        amount: parseInt(item.cubagem_embalagem.QtdCaixa),
        object_types: ["sobconsulta"],
      })
    })

    const filteredVolums = volumes.filter((item) => {
      return !volumesEmbalagem.some((emb) => emb.id_hash === item.id_hash)
    })

    const filteredVolumnsKangu = volumesForKangu.filter((item) => {
      return !volumesKanguEmbalagem.some((emb) => emb.id_hash === item.id_hash)
    })

    const volumsnCartKangu = filteredVolumnsKangu.concat(volumesKanguEmbalagem)

    const volumnsCart = filteredVolums.concat(volumesEmbalagem)

    // try {
    //   // const responseJamef = await jamefCotation(volumnsCart, cep)
    //   // setDataJamef(responseJamef)
    // } catch (error) {
    //   console.log(error)
    //   setLoading(false)
    // }

    const responseFedex = await getShippingFedex(volumnsCart, cep)

    setDataFedex(responseFedex)

    // setPrazoMaisBarato(responseFedex.prazoEnt)

    // const responseBuslog = await buslogCotation(volumnsCart, cep)

    // const buslogTransp = {
    //   id: 2,
    //   transp_nome: "Buslog",
    //   previsao: responseBuslog?.Prazo,
    //   prazoEnt: responseBuslog?.Prazo,
    //   vlrFrete: responseBuslog?.ValorFrete,
    // }

    // setDataBuslog(buslogTransp)

    try {
      const isKangu = handleKangu()

      if (isKangu) {
        const responseKangu = await kanguCotation(volumsnCartKangu, cubagemProximaCaixa, isAgrupped, cep)

        setDataKangu(responseKangu)
      } else {
        setDataKangu(null)
      }

      setIsOpen(true)
      setLoading(false)
      getHandleStepCart("entrega")
    } catch (error) {
      console.log(error)
      setLoading(false)
      setError(true)
    }
  }

  useEffect(() => {
    const arrayTransp = []

    if (dataFedex) {
      arrayTransp.push(dataFedex)
    }

    if (dataKangu) {
      dataKangu.map((item) => {
        arrayTransp.push(item)
      })
    }

    const motoEntrega = {
      id: 3,
      motoEntrega: true,
      nome: "Frete grátis",
      transp_nome: "Frete grátis - Motoboy",
      prazoEnt: 2,
      previsao: "1",
      vlrFrete: 0,
      originalName: "Frete grátis - Motoboy",
      type: "moto",
      preco: 0,
    }

    //se o original value de cada transportadora for menor ou igual 25, define a motoEntre como a mais barata
    const motoEntregaMaisBarata = arrayTransp.reduce((prev, current) => {
      return prev.originalValue <= 25 ? prev : current
    })

    if (itemMaisProx && isGrandeSp) {
      setTransportadoraMaisBarata(motoEntrega)

      return
    }

    // if (
    //   // motoEntregaMaisBarata.original_value <= 25
    //   isGrandeSaoPaulo
    // ) {
    //   setTransportadoraMaisBarata(motoEntrega)
    //   return
    // }

    const transportadoraMaisBarata = arrayTransp.reduce((prev, current) => {
      return prev.vlrFrete < current.vlrFrete ? prev : current
    })

    setTransportadoraMaisBarata(transportadoraMaisBarata)
  }, [dataFedex, dataKangu])

  useEffect(() => {
    if (cep?.length === 8) {
      handleCalculateShipping()
    }
  }, [cart, infoEmb])

  const endEddited = `${address[0]?.rua} - ${address[0]?.cidade} - ${address[0]?.estado} - ${address[0]?.uf}`

  const isFreeSp = address[0]?.cidade === "São Paulo" && totalItens >= 2000 ? true : false

  useEffect(() => {
    setTransportadoraMaisBarata(null)
  }, [cep, cart, infoEmb, addressClient])

  //transforma dataKangu em array e filtra apenas as transportadoras que tem prazo menor que a mais barata
  const allTransp = []

  if (dataFedex) {
    allTransp.push(dataFedex)
  }

  if (dataKangu) {
    dataKangu.map((item) => {
      allTransp.push(item)
    })
  }

  return (
    <>
      <Flex
        mb="1rem"
        flexDirection="column"
        transition="height 0.2s ease-in-out"
        height={isOpen ? "auto" : "4rem"}
        minH={stepCart === 2 && "650px"}
      >
        {stepCart === 2 && <OptionsShipping endEddited={endEddited} />}
        {cart?.length > 0 &&
          stepCart !== 2 &&
          stepCart !== "entrega" &&
          stepCart !== "retirada" &&
          stepCart !== 3 &&
          stepCart !== "finalizacao" && (
            <FormControl mt={3}>
              <Flex flexDir="column" display={"flex"}>
                <FormLabel htmlFor="cep" fontWeight="bold">
                  Calcule frete e prazo
                </FormLabel>
                <Flex alignItems={"center"} gap={2} flexDir="column" position="relative">
                  <Flex alignItems="center" gap={`2`}>
                    <InputMask mask="99999-999" maskChar="_" value={cep} onChange={handleCepChange}>
                      {({ inputRef, ...rest }) => (
                        <Input
                          id="cep"
                          paddingBlock="1.5rem"
                          type="text"
                          border="1px solid #CFCFCF"
                          borderRadius="10px"
                          _focus={{
                            border: "1px solid #cc0000",
                          }}
                          ref={inputRef}
                          {...rest}
                          onKeyPress={(e) => {
                            if (e.key === "Enter") {
                              handleCalculateShipping()
                            }
                          }}
                        />
                      )}
                    </InputMask>

                    <Button
                      bgColor="#cc0000"
                      color="white"
                      paddingBlock="1.5rem"
                      paddingInline="1.7rem"
                      transition="filter 0.2s"
                      fontSize="1.25rem"
                      _hover={{
                        filter: "brightness(0.9)",
                      }}
                      onClick={handleCalculateShipping}
                      disabled={cart?.length === 0}
                    >
                      OK
                    </Button>
                  </Flex>
                </Flex>
              </Flex>
              {error && (
                <WrapItem transform="translate(2.5rem,.4rem)">
                  <Tooltip
                    label={"Cep inválido"}
                    aria-label="A tooltip"
                    placement="bottom"
                    isOpen={!!error}
                    hasArrow
                    arrowSize={10}
                    arrowShadowColor="rgba(0, 0, 0, 0.1)"
                    bg="red.500"
                    color="white"
                    fontSize="12px"
                    fontWeight="bold"
                    borderRadius="10px"
                  >
                    <Text as="span" ml="0.5rem" fontSize="12px" color="red" fontWeight="bold">
                      {error}
                    </Text>
                  </Tooltip>
                </WrapItem>
              )}
              <FormErrorMessage color="red.500">{error && <Text color="red">Cep inválido</Text>}</FormErrorMessage>
              {loading && (
                <Center mt="3rem">
                  <Spinner />
                </Center>
              )}
            </FormControl>
          )}
        {stepCart === "entrega" && (
          <>
            <Box position="relative">
              <OptionsShipping
                address={address}
                setSeletedTransp={setSeletedTransp}
                prazoMaisBarato={prazoMaisBaratoTransp}
                transportadoraMaisBarata={transportadoraMaisBarata}
                loading={loading}
                handleKangu={handleKangu}
                itemMaisProx={itemMaisProx}
              />
              {!transportadoraMaisBarata?.motoEntrega && !isFreeSp && (
                <Transportadoras
                  address={address}
                  dataKangu={dataKangu}
                  setSeletedTransp={setSeletedTransp}
                  dataJamef={dataJamef}
                  dataBuslog={dataBuslog}
                  dataFedex={dataFedex}
                  prazoMaisBarato={prazoMaisBaratoTransp}
                  loading={loading}
                  handleKangu={handleKangu}
                  itemMaisProx={itemMaisProx}
                />
              )}
            </Box>
            <Flex gap={2} alignItems={"center"} marginTop="22px">
              <Icon as={RiAlertFill} w={6} h={6} color={"#CFCFCF"} />
              <Text m={0} as={"span"} fontSize={"8.5px"} color={"#919191"} lineHeight="1rem">
                *Nos comprometemos a produzir seus produtos no prazo <br /> solicitado em seu orçamento.{" "}
                <span style={{ color: "#cc0000" }}>
                  Não nos responsabilizamos por <br /> eventuais atrasos na entrega de seus produtos quando <br />{" "}
                  realizadas por meio de transportadoras ou correios.
                </span>
              </Text>
            </Flex>
          </>
        )}

        {stepCart === 3 && (
          <Flex w="100%" flexDir="column">
            <Flex
              fontSize="0.6875rem"
              textTransform="uppercase"
              w="100%"
              flexDir="column"
              border={"1px solid #CFCFCF"}
              paddingBlock="4px"
              paddingInline="0.4375rem"
              borderRadius="6px"
              color={"#414042"}
              bgColor={"white"}
            >
              <Flex w="100%" justifyContent="space-between" alignItems="center">
                <Flex alignItems="center" gap="9px">
                  <Flex flexDir="column">
                    <Text as="span" textTransform="uppercase" minW="100px" color={"#414042"} fontWeight={"bold"}>
                      {seletedTransp?.nome}
                    </Text>
                    <Text as="span">
                      Previsão de entrega:{" "}
                      <Text as="span" fontWeight="bold">
                        {parseInt(seletedTransp?.prazo || seletedTransp?.prazoEnt) + 10}{" "}
                        {parseInt(seletedTransp?.prazo || seletedTransp?.prazoEnt) + 10 === 1
                          ? "dia útil"
                          : "dias úteis"}
                      </Text>
                    </Text>
                  </Flex>
                </Flex>
                <Icon
                  as={IoIosArrowDropdown}
                  fontSize="1.8rem"
                  color={"#cc0000"}
                  onClick={() => {
                    handleStepCart("entrega")
                    setSeletedTransp(null)
                  }}
                  cursor="pointer"
                />
              </Flex>
            </Flex>
            <Flex alignItems="center" justifyContent="flex-start" gap={2} marginTop="13px">
              <Icon as={GoAlert} fontSize="1.2rem" color="#cfcfcf" />
              <Flex flexDir="column">
                <Text as="span" fontSize="0.6875rem" color="#414042">
                  <strong>10 dias</strong> de produção + <strong>{seletedTransp?.prazo}</strong>{" "}
                  <strong>{parseInt(seletedTransp?.prazo) === 1 ? "dia" : "dias"}</strong> da transportadora
                </Text>
              </Flex>
            </Flex>
            <Divider />

            <PaymentMethods totalPedido={totalPed} />
            {stepCart === 3 && (
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
                width="100%"
                textTransform="uppercase"
                letterSpacing="0.1rem"
                fontWeight={"normal"}
                borderRadius="18px"
                onClick={() => handleStepCart("finalizacao")}
              >
                Finalizar Orçamento{" "}
              </Button>
            )}
          </Flex>
        )}
        <Form seletedTransp={seletedTransp} infoEmb={infoEmb} transportadoraMaisBarata={transportadoraMaisBarata} />
      </Flex>
    </>
  )
}
