import { Box, Flex, Grid, Icon, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useCart } from "../../../../../../../contexts/useCart"
import { formatPrice } from "../../../../../../../utils/formatPrice"
import { setFirstLetterUpperCase } from "../../../../../../../utils/setFirstLetterUpperCase"
import { CardTransp } from "./CardTransp"
import { RiAlertFill } from "react-icons/ri"

export function Entrega({ dataKangu, setSeletedTransp, dataJamef, address, dataBuslog, dataFedex }) {
  const { handleStepCart, changeValueFrete, cart } = useCart()
  const [KanguNotRetira, setKanguNotRetira] = useState([])
  const [uniqueArrayTransp, setUniqueArrayTransp] = useState([])

  const totalItens = cart?.reduce((acc, item) => {
    const { valor_total } = item

    const valorTotal = parseFloat(valor_total)

    return acc + valorTotal
  }, 0)

  const nossoCarro = {
    transp_nome: "Nosso Carro",
    vlrFrete: totalItens >= 2000 ? 0 : 80,
    prazoEnt: 1,
  }

  function verifyNameLength(name) {
    if (name?.length > 20) {
      return name?.slice(0, 20) + "..."
    }

    return name
  }

  useEffect(() => {
    if (dataKangu) {
      const KanguNotRetira = dataKangu?.filter((item) => !item.pontosRetira)

      setKanguNotRetira(KanguNotRetira)
    }
  }, [dataKangu])

  function handleSelectTransp(value) {
    const valueEddited = {
      nome: value.transp_nome ?? value.Transportadora,
      prazo: value.prazoEnt ?? value["Previsão de entrega"],
      frete: value.vlrFrete ?? value.valor,
      pontosRetira: value.pontosRetira,
    }

    setSeletedTransp(valueEddited)
    changeValueFrete(valueEddited)
    handleStepCart(3)
  }

  useEffect(() => {
    const isSp = address[0]?.cidade === "São Paulo"

    if (isSp) {
      const arrayTransp = [...KanguNotRetira, dataJamef, nossoCarro, dataBuslog, dataFedex]

      arrayTransp.sort((a, b) => parseFloat(a.vlrFrete) - parseFloat(b.vlrFrete))

      setUniqueArrayTransp(arrayTransp)
    } else {
      const arrayTransp = [...KanguNotRetira, dataJamef, dataBuslog, dataFedex]
      arrayTransp.sort((a, b) => parseFloat(a.vlrFrete) - parseFloat(b.vlrFrete))
      setUniqueArrayTransp(arrayTransp)
    }
  }, [KanguNotRetira, dataJamef])

  return (
    <>
      <Flex mt="0.8125rem" flexDir="column">
        <Box
          as="header"
          w="100%"
          paddingBlock="1rem"
          fontSize="0.6875rem"
          textTransform="uppercase"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Flex flexDir="column" justifyContent="center" alignItems="center" w="100%" gap={2}>
            <Grid w="100%" templateColumns="3fr 1.5fr .2fr">
              <Text as="span">Transportadora</Text>
              <Text as="span" paddingRight={"2.8rem"}>
                Prazo
              </Text>
              <Text as="span" paddingRight="2rem">
                Preço
              </Text>
            </Grid>
          </Flex>
        </Box>
        <Flex flexDir="column" gap={2}>
          {uniqueArrayTransp
            ?.filter((item) => item?.vlrFrete !== undefined)
            .map((item, index) => (
              <CardTransp
                key={index}
                nome={verifyNameLength(setFirstLetterUpperCase(item.transp_nome))}
                prazo={item.transp_nome !== "Nosso Carro" ? parseInt(item.prazoEnt) + 1 : item.prazoEnt}
                frete={item.vlrFrete === 0 ? "Grátis" : formatPrice(parseFloat(item.vlrFrete))}
                onClick={() => handleSelectTransp(item)}
              />
            ))}
          <Flex gap={2} alignItems={"center"}>
            <Icon as={RiAlertFill} w={6} h={6} color={"#CFCFCF"} />
            <Text m={0} as={"span"} fontSize={"11px"} color={"#919191"}>
              *Nos comprometemos a produzir seus produtos <br /> no prazo solicitado em seu orçamento. <br />{" "}
              <span style={{ color: "#FF4F00" }}>
                Não nos responsabilizamos por eventuais atrasos <br /> na entrega de seus produtos quando realizadas{" "}
                <br /> por meio de transportadoras ou correios. *
              </span>
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
