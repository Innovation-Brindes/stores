import React from "react"
import AcompanheSeuPedido from "../../../components/AcompanheSeuPedido"
import Header from "../../../components/Header"
import { getCategorias, getSegmentos } from "../../../utils/getLinksHeader"

export async function getServerSideProps(context) {
  const hash_pedido = context.params.hash_pedido

  const linksSubcategorias = await getCategorias()
  const linksSegmentos = await getSegmentos()

  return {
    props: {
      hash_pedido,
      linksSubcategorias: linksSubcategorias.subcategorias,
      linksSegmentos: linksSegmentos.segmentos,
    }, // will be passed to the page component as props
  }
}

export default function AcompanheSeuPedidoPage(props) {
  return (
    <>
      <Header subcategorias={props.linksSubcategorias} segmentos={props.linksSegmentos} />
      <AcompanheSeuPedido hash_pedido={props.hash_pedido} />
    </>
  )
}
