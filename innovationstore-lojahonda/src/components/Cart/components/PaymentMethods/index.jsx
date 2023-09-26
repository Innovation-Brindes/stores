import { Flex, Text } from "@chakra-ui/react"
import { SiPix } from "react-icons/si"
import { BsFillCreditCardFill } from "react-icons/bs"
import { AiOutlineBarcode } from "react-icons/ai"
import { Method } from "./Method"
import { ModalInfoPayment } from "./components"
import { formatPrice } from "../../../../utils/formatPrice"
import { ComprouGanhou } from "../../../ComprouGanhou"
import { MdPix } from "react-icons/md"
import { Divider } from "../ResumoContainer/Divider"

export function PaymentMethods({ totalPedido }) {
  const taxas = {
    1: 0,
    2: 5.38,
    3: 6.59,
    4: 7.8,
    5: 9.01,
    6: 10.22,
    7: 11.43,
    8: 12.64,
    9: 13.85,
    10: 15.06,
    11: 16.27,
    12: 17.48,
  }

  function loopQtdParc() {
    const parcelas = []

    for (let i = 1; i <= 12; i++) {
      const juros = totalPedido * (taxas[i] / 100)
      const valorParcela = (totalPedido + juros) / i

      parcelas.push(valorParcela)
    }

    return parcelas
  }

  const pixMenos5 = totalPedido * 0.95

  const cartao = loopQtdParc()[0]
  const cartao12x = loopQtdParc()[11]

  return (
    <Flex flexDir={"column"} paddingBottom={".8rem"} gap={1} borderBottom={"1px dashed #E2E2E2"}>
      <Method icon={MdPix} color={"#5ECABF"} value={pixMenos5} offer={"5% OFF NO PIX"} />
      <Flex flexDir={"column"}>
        <Flex gap="12px" alignItems="center">
          <Method icon={BsFillCreditCardFill} color={"#FF4F00"} value={cartao} />{" "}
          <Flex flexDir="column" fontSize="11px">
            <Text m={0}>à vista ou em até</Text>
            <Text fontWeight={"normal"} m={0} lineHeight={".5rem"} mb={".3rem"}>
              12x {formatPrice(parseFloat(cartao12x))} no cartão
            </Text>{" "}
          </Flex>
        </Flex>

        <Text fontSize={"9px"} fontWeight={"normal"} m={0} color={"#919191"}>
          *juros de 1.5% a.m. e 17.48% a.a. Total: {formatPrice(parseFloat(cartao))} a prazo
        </Text>
      </Flex>
      <Flex flexDir={"column"}>
        <Flex gap="12px" alignItems="center">
          <Method icon={AiOutlineBarcode} color={"#000"} value={totalPedido} />
          <Text fontSize={"11px"} fontWeight={"normal"} m={0} lineHeight={".5rem"}>
            no boleto
          </Text>
        </Flex>
        <Text fontSize={"9px"} fontWeight={"normal"} m={0} color={"#919191"}>
          *Boleto gerado apenas para pessoa júridica para pedidos <br />
          acima de R$ 1.000. Fale com um de nossos consultores
        </Text>
        <ModalInfoPayment totalPedido={totalPedido} />
        <Divider />
        <ComprouGanhou price={totalPedido} />
      </Flex>
    </Flex>
  )
}
