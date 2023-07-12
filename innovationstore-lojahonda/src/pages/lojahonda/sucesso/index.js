import React from "react"
import Sucesso from "../../components/Sucesso"
import Header from "../../components/Header"
import { getCategorias, getSegmentos } from "../../utils/getLinksHeader"

export default function SucessoPage(props) {
  return (
    <>
      <Header subcategorias={props.linksSubcategorias} segmentos={props.linksSegmentos} />
      <Sucesso />
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
