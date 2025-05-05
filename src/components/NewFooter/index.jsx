import { PaymentMethods } from "./PaymentMethods"
import { BodyFooter } from "./BodyFooter"
import * as S from "./styles"
import { Divider } from "../Footer/Divider"
import { Flex, Text } from "@chakra-ui/react"

export function NewFooter() {
  return (
    <S.Container>
      <S.ImageContent>
        <img src="https://imgproductioncrm.s3.us-east-2.amazonaws.com/logo2.png" />
      </S.ImageContent>

      <S.SiteSeguroContainer>
        <Divider>
          <Flex width="100px" alignItems="center" justifyContent="center">
            <Text m={0} as="h1" color="#414042" fontSize="12px">
              Site seguro
            </Text>
          </Flex>
        </Divider>

        <S.SiteSeguroContent>
          <img src="https://imgproductioncrm.s3.us-east-2.amazonaws.com/googlesafety.png" alt="" />
          <img src="https://imgproductioncrm.s3.us-east-2.amazonaws.com/security.png" alt="" />
          <img src="https://imgproductioncrm.s3.us-east-2.amazonaws.com/google.png" alt="" />
        </S.SiteSeguroContent>
      </S.SiteSeguroContainer>
      <PaymentMethods />
    </S.Container>
  )
}
