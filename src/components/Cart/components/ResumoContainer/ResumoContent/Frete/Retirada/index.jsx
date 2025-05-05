import { Box, Button, Flex, Grid, Icon, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { FaMapMarkerAlt } from "react-icons/fa"
import { useCart } from "../../../../../../../contexts/useCart"
import { formatPrice } from "../../../../../../../utils/formatPrice"
import { setFirstLetterUpperCase } from "../../../../../../../utils/setFirstLetterUpperCase"
import { CardRetira } from "./CardRetira"
import { ModalMap } from "./ModalMap"

export function Retirada({ dataKangu, setSeletedTransp, address }) {
  const [retira, setRetira] = useState([])
  const [mapOpen, setMapOpen] = useState(false)
  const { changeValueFrete, handleStepCart, cart } = useCart()

  const totalItens = cart?.reduce((acc, item) => {
    const { valor_total } = item

    const valorTotal = parseFloat(valor_total)

    return acc + valorTotal
  }, 0)

  function verifyNameLength(name) {
    if (name.length > 20) {
      return name.slice(0, 20) + "..."
    }

    return name
  }

  // function handleOpenMap() {
  //   setMapOpen(true);
  // }

  function handleSelectTransp(value) {
    const valueRetirada = {
      nome: value.transp_nome ?? value.nome,
      prazo: value.prazoEnt ?? value.prazo,
      frete: value.vlrFrete ?? value.valor,
      pontosRetira: value.pontosRetira,
      retirada: true,
    }

    setSeletedTransp(valueRetirada)
    changeValueFrete(valueRetirada)
    handleStepCart(3)
  }

  function getRetira() {
    if (dataKangu) {
      const retira = dataKangu.filter((item) => item.pontosRetira)

      setRetira(retira)
    }

    return []
  }

  const innovationRetira = {
    nome: "Innovation Brindes",
    enderecoCompleto: "R. Vila de Arouca, 310 - Sítio Barrocada,",
    estado: "São Paulo - SP",
    estadoECep: ["São Paulo - SP", " - 04843-000"],
    valor: 0,
    prazo: "1",
  }

  const nossoCarro = {
    nome: "Nosso Carro",
    enderecoCompleto: "R. Vila de Arouca, 310 - Sítio Barrocada,",
    estado: "São Paulo - SP",
    estadoECep: ["São Paulo - SP", " - 04843-000"],
    valor: totalItens >= 2000 ? 0 : 80,
    prazo: "4",
  }

  useEffect(() => {
    getRetira()
  }, [dataKangu])

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
            <Grid w="100%" templateColumns="2fr 1.5fr .2fr">
              <Text as="span">RETIRADA EM</Text>
              <Text as="span">PRAZO</Text>
              <Text as="span" paddingRight="2.375rem">
                preço
              </Text>
            </Grid>
            <CardRetira
              nome={innovationRetira.nome}
              // enderecoCompleto={innovationRetira.enderecoCompleto}
              estado={innovationRetira.estado}
              estadoECep={innovationRetira.estadoECep}
              valor={innovationRetira.valor === 0 && "GRÁTIS"}
              prazo={innovationRetira.prazo}
              onClick={() => handleSelectTransp(innovationRetira)}
            />
            {/*{address[0]?.cidade === "São Paulo" && (*/}
            {/*  <CardRetira*/}
            {/*    nome={nossoCarro.nome}*/}
            {/*    // enderecoCompleto={nossoCarro.enderecoCompleto}*/}
            {/*    estado={nossoCarro.estado}*/}
            {/*    estadoECep={nossoCarro.estadoECep}*/}
            {/*    valor={nossoCarro.valor === 0 ? "GRÁTIS" : formatPrice(nossoCarro.valor)}*/}
            {/*    prazo={nossoCarro.prazo}*/}
            {/*    onClick={() => handleSelectTransp(nossoCarro)}*/}
            {/*  />*/}
            {/*)}*/}
            {retira.map((frete, index) =>
              frete.pontosRetira.map((item, index) => (
                <CardRetira
                  key={index}
                  nome={verifyNameLength(setFirstLetterUpperCase(item.nome))}
                  enderecoCompleto={setFirstLetterUpperCase(item.endereco.logradouro)}
                  estado={item.endereco.cidade}
                  estadoECep={item.endereco.uf + " - " + item.endereco.cep}
                  valor={formatPrice(frete.vlrFrete)}
                  prazo={frete.prazoEnt}
                  onClick={() => handleSelectTransp(frete)}
                />
              )),
            )}
          </Flex>
        </Box>
        <Flex flexDir="column" gap={2}></Flex>
      </Flex>
    </>
  )
}
