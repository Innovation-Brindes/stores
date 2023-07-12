import React from "react"
import Enderecos from "../../../components/Enderecos"
import { getCategorias, getSegmentos } from "../../../utils/getLinksHeader"
import Header from "../../../components/Header"

export default function EnderecosPage(props) {
  return (
    <>
      <Header subcategorias={props.linksSubcategorias} segmentos={props.linksSegmentos} />
      <Enderecos />
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
