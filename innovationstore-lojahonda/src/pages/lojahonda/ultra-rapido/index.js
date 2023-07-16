import React from "react"
import Moment from "moment"
import UltraRapido from "../../../components/UltraRapido"
import Header from "../../../components/Header"
import {
  dadosProdutosSegmento,
  dadosProdutosUltraRapidoRandom,
  dadosSubCategorias,
  dadosSubCategoriasUltraRapido,
  formatarDataUltraRapido,
} from "../../../services/api"
import { getCategorias, getSegmentos } from "../../../utils/getLinksHeader"

export async function getStaticProps(context) {
  var subcategorias = await getSubcategoriaPorCategoria()
  var produtos = await getGridProduto()

  const linksSubcategorias = await getCategorias()
  const linksSegmentos = await getSegmentos()

  produtos = produtos.filter((prod) => prod.valor_home !== "0,00")

  return {
    props: {
      subcategorias,
      produtos,
      linksSubcategorias: linksSubcategorias.subcategorias,
      linksSegmentos: linksSegmentos.segmentos,
    }, // will be passed to the page component as props
    revalidate: 5,
  }
}

async function getGridProduto() {
  try {
    const response = await dadosProdutosUltraRapidoRandom.get("/")
    var dados = response.data
    dados.pop()
    var produtos = []

    for (var prod of dados) {
      var url_seo = prod.url_seo.split("-")
      var referencia = prod.referencia.toString()
      var link =
        "/" +
        referencia.substring(referencia.length - 4) +
        "/" +
        url_seo.slice(0, url_seo.length - 1).join("-") +
        "-1-1.jpg"
      var preco_home = Math.round(parseFloat(prod.preco_home) * 100) / 100

      if (isNaN(preco_home)) {
        preco_home = 0.0
      }

      produtos.push({
        prod_nome: prod.nome_produto.trim(),
        real_price: preco_home,
        prod_cod: prod.referencia,
        url_prod: prod.url_seo,
        img_prod: link,
        referencia: prod.referencia,
        descricao: prod.descricao,
        caracteristicas: prod.caracteristicas,
        valor_home: (Math.round(parseFloat(preco_home) * 100) / 100).toLocaleString("pt-br", {
          minimumFractionDigits: 2,
        }),
        cores: ifnull(prod.rgb_cores, "").trim(),
        ad_embalagem: prod.ad_embalagem ? "S" : "N",
        selo_prod: prod.selo_prod,
        segmento: prod.segmento,
        ultrarapido: 1,
        estoque: prod.estoque,
        data_ultra_rapido: prod.data_ultra_rapido,
        imagem_home_store: prod.imagem_home_store ?? "",
      })
    }

    //só retorna produtos com valor home maior que zero
    // produtos = produtos.filter((prod) => prod.preco_home > 0)

    produtos.filter((prod) => parseInt(prod.real_price) > 0)

    return produtos
  } catch (error) {
    console.log(Object.keys(error), error.message)
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

function ifnull(a, b) {
  if (a === null || a === undefined || a === "") {
    return b
  } else {
    return a
  }
}

export default function UltraRapidoPage(props) {
  return (
    <>
      <Header subcategorias={props.linksSubcategorias} segmentos={props.linksSegmentos} />
      <UltraRapido
        idsegmento={props.segmento}
        paginas={props.paginas}
        produtos={props.produtos}
        subcategorias={props.subcategorias}
      />
    </>
  )
}
