import React from "react"
import Segmento from "../../../components/Segmentos"
import { dadosProdutosSegmento, dadosSegmentos } from "../../../services/api"
import { getCategorias, getSegmentos } from "../../../utils/getLinksHeader"
// import Segmentos from '../../../components/Segmentos';
import Header from "../../../components/Header"

export async function getStaticProps(context) {
  const segmento = context.params.idsegmento
  const prefix = context.params.prefix.replace(/-/g, "_")

  var result = await getGridProduto(segmento)
  const linksSubcategorias = await getCategorias()
  const linksSegmentos = await getSegmentos()

  var produtos = []
  var paginas = []

  try {
    produtos = result.produtos != undefined ? result.produtos : []
    paginas = result.paginas != undefined ? result.paginas : []
  } catch (error) {
    produtos = []
    paginas = []
  }

  // try {
  //   produto = result.produtos;
  //   paginas = result.paginas;
  // } catch (error) {
  //   produto = [];
  //   paginas = [];
  // }

  return {
    props: {
      produtos,
      paginas,
      prefix,
      segmento,
      linksSubcategorias: linksSubcategorias.subcategorias,
      linksSegmentos: linksSegmentos.segmentos,
    }, // will be passed to the page component as props
    revalidate: 60,
  }
}

export async function getStaticPaths() {
  var segmentos = await getRotas()
  const paths = segmentos.map((item) => ({
    params: {
      prefix: item.descricao.replace(/ /g, "-").toLowerCase(),
      idsegmento: String(item.codigo_segmento),
    },
  }))
  return {
    paths,
    fallback: false, // false or 'blocking'
  }
}

async function getRotas() {
  try {
    const response = await dadosSegmentos.get("")
    var dados = response.data

    dados.sort(function (a, b) {
      if (a.descricao > b.descricao) {
        return 1
      }
      if (a.descricao < b.descricao) {
        return -1
      }

      return 0
    })

    return dados
  } catch (error) {
    console.log(Object.keys(error), error.message)
  }
}

async function getGridProduto(categoria) {
  try {
    const response = await dadosProdutosSegmento.get("/" + categoria + "/1")
    var dados = response.data
    var produtos = []
    var total_paginacao = dados[dados.length - 1]
    dados.pop()
    var paginas = []

    try {
      for (var i = 1; i <= total_paginacao.total; i++) {
        paginas.push(i)
      }

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
          preco_home = 0
        }

        produtos.push({
          prod_nome: prod.nome_produto.trim(),
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
          selo: prod.ad_embalagem ? "S" : "N",
          segmento: prod.segmento,
          ultrarapido: parseInt(prod.prazo_minimo_entrega) == 1 ? "S" : "N",
          estoque: prod.estoque,
          imagem_home_store: prod.imagem_home_store ?? "",
        })
      }

      if (categoria != 6) {
        produtos.sort(function (a, b) {
          var valor_a = parseFloat(a.valor_home)
          var valor_b = parseFloat(b.valor_home)
          if (a.estoque != 0) {
            if (valor_a < valor_b) {
              return -1
            } else if (valor_a > valor_b) {
              return 1
            }
          }
          return 0
        })
      }
    } catch (error) {
      console.log(error)
    }

    return { produtos: produtos, paginas: paginas }
  } catch (error) {
    console.log(error)
  }
}

function titleize(text) {
  var words = text.toLowerCase().split(" ")
  for (var a = 0; a < words.length; a++) {
    var w = words[a]
    words[a] = w[0].toUpperCase() + w.slice(1)
  }
  return words.join(" ")
}

function ifnull(a, b) {
  if (a === null || a === undefined || a === "") {
    return b
  } else {
    return a
  }
}

export default function SegmentoPage(props) {
  return (
    <>
      <Header subcategorias={props.linksSubcategorias} segmentos={props.linksSegmentos} />
      <Segmento
        idsegmento={props.segmento}
        nomesegmento={titleize(props.prefix.replace(/_/g, " "))}
        produtos={props.produtos}
        prefix={props.prefix}
        paginas={props.paginas}
        linksegmento={`/${props.prefix.replace(/_/g, "-").toLowerCase()}/${props.segmento}`}
      />
    </>
  )
}
