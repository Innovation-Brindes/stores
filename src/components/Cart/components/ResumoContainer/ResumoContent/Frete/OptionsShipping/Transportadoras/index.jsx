import { Box, Flex, Grid, Icon, Skeleton, Stack, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useCart } from "../../../../../../../../contexts/useCart"
import { formatPrice } from "../../../../../../../../utils/formatPrice"
import { setFirstLetterUpperCase } from "../../../../../../../../utils/setFirstLetterUpperCase"
import { CardTransp } from "./CardTransp"
import { RiAlertFill } from "react-icons/ri"
import { useCookiesSession } from "../../../../../../../../contexts/cookiesSessionProvider"

export function Transportadoras({
  dataKangu,
  setSeletedTransp,
  dataJamef,
  address,
  dataBuslog,
  dataFedex,
  prazoMaisBarato,
  loading,
  handleKangu,
  itemMaisProx,
}) {
  const { handleStepCart, changeValueFrete, cart } = useCart()
  const [KanguNotRetira, setKanguNotRetira] = useState([])
  const [uniqueArrayTransp, setUniqueArrayTransp] = useState([])
  const { addressClient } = useCookiesSession()
  const [verifyIsFreeSP, setVerifyIsFreeSP] = useState(false)

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
      originalName: value.transp_nome ?? value.Transportadora,
    }

    setSeletedTransp(valueEddited)
    changeValueFrete(valueEddited)
    handleStepCart(3)
  }

  useEffect(() => {
    const isSp = address[0]?.cidade === "São Paulo"

    if (isSp) {
      let transportadoras = []

      if (itemMaisProx) {
        transportadoras = [...KanguNotRetira, dataJamef, dataBuslog, dataFedex]
      } else {
        transportadoras = [...dataJamef, dataBuslog, dataFedex]
      }

      const arrayTransp = [...KanguNotRetira, dataJamef, dataBuslog, dataFedex]

      transportadoras.sort((a, b) => parseFloat(a.vlrFrete) - parseFloat(b.vlrFrete))

      setUniqueArrayTransp(transportadoras)
    } else {
      let transportadoras = []

      if (itemMaisProx) {
        transportadoras = [KanguNotRetira, ...KanguNotRetira, dataJamef, dataBuslog, dataFedex]
      } else {
        transportadoras = [...dataJamef, dataBuslog, dataFedex]
      }

      const arrayTransp = [...KanguNotRetira, dataJamef, dataBuslog, dataFedex]
      transportadoras.sort((a, b) => parseFloat(a.vlrFrete) - parseFloat(b.vlrFrete))
      setUniqueArrayTransp(transportadoras)
    }
  }, [KanguNotRetira, dataJamef, dataBuslog, dataFedex, address, itemMaisProx])

  useEffect(() => {
    const isKangu = handleKangu()

    const verifyFreteGratisGSP = addressClient?.frete_gratis === "S" && isKangu

    setVerifyIsFreeSP(verifyFreteGratisGSP)
  }, [addressClient])

  return (
    <>
      <Flex flexDir="column">
        <Flex alignItems="center" justifyContent="center" overflow="hidden" gap={2} marginBlock="12px">
          <Text color="#6A6A6A" fontSize="11px" textTransform="uppercase" m={0} fontWeight="bold">
            Transportadora
          </Text>
          {Array.from({ length: 12 }).map((_, index) => (
            <Box key={index} w="100%" h="1px" bg="#cecece" />
          ))}
        </Flex>
        <Flex flexDir="column" gap={2}>
          {!loading &&
            uniqueArrayTransp
              ?.filter((item) => item?.vlrFrete !== undefined)
              .filter((item) => item.prazoEnt < prazoMaisBarato)
              ?.map((item, index) => (
                <CardTransp
                  key={index}
                  nome={verifyNameLength(setFirstLetterUpperCase(item.transp_nome))}
                  prazo={item.prazoEnt}
                  frete={item.vlrFrete === 0 ? "Grátis" : formatPrice(parseFloat(item.vlrFrete))}
                  onClick={() => handleSelectTransp(item)}
                />
              ))}

          {loading && (
            <Stack>
              {Array.from({ length: 1 }).map((_, index) => (
                <Skeleton height="32px" borderRadius="6px" />
              ))}
            </Stack>
          )}
        </Flex>
      </Flex>
    </>
  )
}
