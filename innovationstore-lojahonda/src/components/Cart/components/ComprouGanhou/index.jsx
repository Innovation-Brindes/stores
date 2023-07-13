import { Flex, Icon, Text } from "@chakra-ui/react"
import { AiFillGift } from "react-icons/ai"
import { useEffect, useState } from "react"
import { formatPrice } from "../../../../utils/formatPrice"
import { ModalCompreGanhe } from "../../../ModalCompreGanhe"

export function ComprouGanhou({ valor }) {
  const [brinde, setBrinde] = useState("")
  const [value, setValue] = useState(0)
  const values = {
    1000: 1,
    3000: 2,
    5000: 3,
    10000: 4,
    30000: 5,
  }

  function getBrindes() {
    if (valor > 1000 && valor <= 3000) {
      setBrinde("Caneca de metal")
      return values[1000]
    }
    if (valor > 3000 && valor <= 5000) {
      setBrinde("Kit churrasco")
      return values[3000]
    }
    if (valor > 5000 && valor <= 10000) {
      setBrinde("Copo térmico 500 ml")
      return values[5000]
    }
    if (valor > 10000 && valor <= 30000) {
      setBrinde("Fone de ouvido")
      return values[10000]
    }
    if (valor > 30000) {
      setBrinde("Caixa de som")
      return values[30000]
    }

    return values[1000]
  }

  useEffect(() => {
    setValue(getBrindes())
  }, [valor])

  return (
    <Flex>
      <Flex gap={2}>
        <Icon as={AiFillGift} color={"#E2001B"} fontSize={"1.5rem"} />
        <Flex flexDir={"column"}>
          <Text m={0} color={"#E2001B"} fontWeight={"bold"} fontSize={".9rem"}>
            Comprou, Ganhou
          </Text>
          <Flex alignItems={"center"} gap={2}>
            <Text fontSize={".9rem"} m={0}>
              {valor > 1000 && brinde}
            </Text>
            <ModalCompreGanhe value={value} />
          </Flex>
          <Flex gap={4} alignItems={"center"}>
            {valor < 1000 && (
              <Text Text fontSize={".8rem"} m={0} fontWeight={"bold"}>
                Compre acima de R$ 1000,00 <br /> para receber um brinde!
              </Text>
            )}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
