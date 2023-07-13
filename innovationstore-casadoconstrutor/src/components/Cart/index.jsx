import { ChakraProvider, Modal } from "@chakra-ui/react"
import { NextSeo } from "next-seo"
import { useCart } from "../../contexts/useCart"
import { CartContainer } from "./components/CartContainer"
import { EditModal } from "./components/Modal/EditModal"
import { ResumoContainer } from "./components/ResumoContainer"
import { Layout } from "./Layout"

export function Cart() {
  const { cart } = useCart()

  const title = cart?.length > 0 ? `${cart?.length} itens no carrinho` : "item no Carrinho"

  return (
    <ChakraProvider>
      <NextSeo title={title} />
      <Layout>
        <EditModal />
        <CartContainer />
        <ResumoContainer />
      </Layout>
    </ChakraProvider>
  )
}
