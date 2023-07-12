import React from "react"
import Buscar from "../../components/Buscar"
import Header from "../../components/Header"
import { getCategorias, getSegmentos } from "../../utils/getLinksHeader"

export default function BuscarPage(props) {
  return (
    <>
      <Header subcategorias={props.linksSubcategorias} segmentos={props.linksSegmentos} />
      <Buscar />
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
