import { Divider, Flex, Text } from "@chakra-ui/react"
import Image from "next/image"
import { PaymentMethodContainer, PaymentMethodContent } from "./styles"

export function PaymentMethods() {
  return (
    <>
      <PaymentMethodContainer>
        <Divider className="divider" orientation="horizontal" />
        <Flex width="300px" alignItems="center" justifyContent="center">
          <Text m={0} as="h1" color="#414042" fontSize="12px">
            Formas de pagamento
          </Text>
        </Flex>
        <Divider className="divider" orientation="horizontal" />
      </PaymentMethodContainer>
      <PaymentMethodContent>
        <Image
          width={"48px"}
          height="26px"
          src="https://imgproductioncrm.s3.us-east-2.amazonaws.com/visa_4x.png"
          alt="visa"
        />
        <Image
          width={"48px"}
          height="26px"
          src="https://imgproductioncrm.s3.us-east-2.amazonaws.com/mastercard_4x.png"
          alt="mastercard"
        />
        <Image
          width={"48px"}
          height="26px"
          src="https://imgproductioncrm.s3.us-east-2.amazonaws.com/american_4x.png"
          alt="american"
        />
        <Image
          width={"48px"}
          height="26px"
          src="https://imgproductioncrm.s3.us-east-2.amazonaws.com/discover_4x.png"
          alt="discover"
        />
        <Image
          width={"48px"}
          height="26px"
          src="https://imgproductioncrm.s3.us-east-2.amazonaws.com/dinners_4x.png"
          alt="diners"
        />
        <Image
          width={"48px"}
          height="26px"
          src="https://imgproductioncrm.s3.us-east-2.amazonaws.com/elo_4x.png"
          alt="elo"
        />
        <Image
          width={"48px"}
          height="26px"
          src="https://imgproductioncrm.s3.us-east-2.amazonaws.com/aura_4x.png"
          alt="aura"
        />
        <Image
          width={"48px"}
          height="26px"
          src="https://imgproductioncrm.s3.us-east-2.amazonaws.com/hipercard_4x.png"
          alt="hipercard_4x"
        />
        <Image
          width={"48px"}
          height="26px"
          src="https://imgproductioncrm.s3.us-east-2.amazonaws.com/jcb_4x.png"
          alt="jcb"
        />
        <Image
          width={"48px"}
          height="26px"
          src="https://imgproductioncrm.s3.us-east-2.amazonaws.com/pix_4x.png"
          alt="pix"
        />
        <Image
          width={"48px"}
          height="26px"
          src="https://imgproductioncrm.s3.us-east-2.amazonaws.com/boleto_4x.png"
          alt="boleto"
        />
      </PaymentMethodContent>
    </>
  )
}
