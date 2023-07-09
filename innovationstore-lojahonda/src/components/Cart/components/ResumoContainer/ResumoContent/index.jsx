import { Box, Button, Flex, Image, Text } from "@chakra-ui/react"
import { useCart } from "../../../../../contexts/useCart"
import { Frete } from "./Frete/Frete"
import { InfoValores } from "./InfoValores"
import { PaymentMethods } from "../../PaymentMethods"
import { Divider } from "../Divider"

export function ResumoContent() {
  const { stepCart, cart, total, totalEmbValue, handleStepCart } = useCart()

  const totalItens = cart?.reduce((acc, item) => {
    const { valor_total } = item

    const valorTotal = parseFloat(valor_total)

    return acc + valorTotal
  }, 0)

  const totalPed = total ? total : totalItens + totalEmbValue

  return (
    <>
      <Flex flexDir={"column"}>
        {stepCart !== 2 && stepCart !== "entrega" && stepCart !== "retirada" && (
          <>
            <InfoValores />
            <Flex w="100%" justifyContent="center" alignItems="center" />
            {stepCart !== "finalizacao" && <Divider />}
            {stepCart === "finalizacao" && (
              <Box position="relative" mt="1rem">
                <Button
                  bgColor="#FFE6DB"
                  color="#FF4F00"
                  minH="2.4rem"
                  _hover={{
                    filter: "brightness(0.9)",
                  }}
                  _focus={{
                    border: "none",
                  }}
                  width="100%"
                  textTransform="uppercase"
                  letterSpacing="0.1rem"
                  fontWeight={"regular"}
                  borderRadius="18px"
                  onClick={() => handleStepCart(3)}
                >
                  Ver resumo
                </Button>
                <Image
                  src="/images/resumo.svg"
                  alt="resumo"
                  width="25px"
                  height="100%"
                  position="absolute"
                  top="50%"
                  right="50px"
                  transform="translateY(-50%)"
                />
              </Box>
            )}
            {stepCart !== 3 && stepCart !== "finalizacao" && <PaymentMethods totalPedido={totalPed} />}
          </>
        )}
        <Frete />
      </Flex>
    </>
  )
}
