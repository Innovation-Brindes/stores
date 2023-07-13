import { Flex, Text, Icon } from "@chakra-ui/react"
import { SiPix } from "react-icons/si"
import { BsFillCreditCardFill } from "react-icons/bs"
import { AiOutlineBarcode } from "react-icons/ai"
import { Method } from "./Method"
import { formatPrice } from "../../../../utils/formatPrice"
import { ModalInfoPayment } from "./components/ModalInfoPayment"

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
  const total = totalPedido

  const cartao = loopQtdParc()[0]
  const cartao12x = loopQtdParc()[11]


  return (
    <Flex paddingInline={"15px"} flexDir={"column"} paddingBlock={".8rem"} gap={2} borderBottom={"1px dashed #E2E2E2"}>
      <Method icon={SiPix} color={"#5ECABF"} value={pixMenos5} offer={"5% OFF NO PIX"} />
      <Flex flexDir={"column"}>
        <Method icon={BsFillCreditCardFill} color={"#FF4F00"} value={cartao} />
        <Text pl={"2rem"} fontSize={".76rem"} fontWeight={"normal"} m={0} lineHeight={".5rem"} mb={".3rem"}>
          à vista ou em até 12x {formatPrice(parseFloat(cartao12x))} no cartão
        </Text>{" "}
        <Text pl={"2rem"} fontSize={"9px"} fontWeight={"normal"} m={0} color={"#919191"}>
          *juros de 1.5% a.m. e 17.48% a.a. Total: {formatPrice(parseFloat(cartao))} a prazo
        </Text>
      </Flex>
      <Flex flexDir={"column"}>
        <Method icon={AiOutlineBarcode} color={"#000"} value={totalPedido} />
        <Text pl={"2rem"} fontSize={".8rem"} fontWeight={"normal"} m={0} lineHeight={".5rem"} mb={".3rem"}>
          no boleto
        </Text>
        <Text pl={"2rem"} fontSize={"9px"} fontWeight={"normal"} m={0} color={"#919191"}>
          *Boleto gerado apenas para pessoa júridica para pedidos <br />
          acima de R$ 1.000. Fale com um de nossos consultores
        </Text>

        <ModalInfoPayment totalPedido={totalPedido} />
      </Flex>
    </Flex>
  )
}
