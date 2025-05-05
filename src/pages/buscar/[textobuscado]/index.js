import React from "react"
import Buscar from "../../../components/Buscar"
import { dadosSubCategoriasUltraRapido } from "../../../services/api"
import { getCategorias, getSegmentos } from "../../../utils/getLinksHeader"
import Header from "../../../components/Header"

export async function getServerSideProps(context) {
  const textobuscado = context.params.textobuscado
  const subcategorias = await getSubcategoriaPorCategoria()

  const linksSubcategorias = await getCategorias()
  const linksSegmentos = await getSegmentos()

  return {
    props: {
      textobuscado,
      subcategorias,
      linksSubcategorias: linksSubcategorias.subcategorias,
      linksSegmentos: linksSegmentos.segmentos,
    }, // will be passed to the page component as props
  }
}

async function getSubcategoriaPorCategoria() {
  try {
    const response = await dadosSubCategoriasUltraRapido.get()
    var dados = response.data

    var subcategorias = []
    for (var subcat of dados) {
      subcategorias.push({
        name: subcat.descricao_grupo_produto,
        cod: subcat.codigo_grupo_produto,
      })
    }

    subcategorias.sort(function (a, b) {
      if (a.name > b.name) {
        return 1
      }
      if (a.name < b.name) {
        return -1
      }

      return 0
    })

    return subcategorias
  } catch (error) {
    console.log(Object.keys(error), error.message)
  }
}

export default function BuscarPage(props) {
  return (
    <>
      <Header subcategorias={props.linksSubcategorias} segmentos={props.linksSegmentos} />
      <Buscar textobuscado={props.textobuscado} subcategorias_ultra_rapido={props.subcategorias} />
      {/*<BuscaUltraRapido textobuscado={props.textobuscado} subcategorias={props.subcategorias} />*/}
    </>
  )
}
