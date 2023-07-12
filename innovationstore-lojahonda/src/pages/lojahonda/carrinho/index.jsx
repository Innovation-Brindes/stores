import React from "react"
import { Cart } from "../../components/Cart"
import { getCategorias, getSegmentos } from "../../utils/getLinksHeader"
import Header from "../../components/Header"

export default function CarrinhoPage(props) {
  return (
    <>
      <Header subcategorias={props.linksSubcategorias} segmentos={props.linksSegmentos} />
      <Cart />
    </>
  )
}

export const getStaticProps = async () => {
  const linksSubcategorias = await getCategorias()
  const linksSegmentos = await getSegmentos()

  return {
    props: {
      linksSubcategorias: linksSubcategorias.subcategorias,
      linksSegmentos: linksSegmentos.segmentos,
    },
  }
}
