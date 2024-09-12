import React, { useEffect } from "react"
import { dadosMenu, dadosProdutosSubcategoria } from "../../../../services/api"
import Categoria from "../../../../components/Categoria"
import { getCategorias, getSegmentos } from "../../../../utils/getLinksHeader"
import Header from "../../../../components/Header"

export async function getStaticProps(context) {
  const categoria = context.params.idcategoria
  const prefix = titleize(context.params.prefix.replace(/-/g, " "))

  const linksSubcategorias = await getCategorias()
  const linksSegmentos = await getSegmentos()
  //teest

  try {
    const response = await dadosProdutosSubcategoria.post("", {
      codigo_grupo_produto: categoria,
      codigo_cor: null,
      quantidade: null,
      valor_inicial: null,
      valor_final: null,
      prazo_entrega: null,
    })

    var dados = response.data
    var produtos = []
    var texto_seo = null

    for (var prod of dados) {
      try {
        texto_seo = prod.texto_seo

        if (prod.url_seo) {
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
            selo: prod.ad_embalagem ? "S" : "N",
            segmento: prod.segmento,
            ultrarapido: parseInt(prod.prazo_minimo_entrega) == 1 ? "S" : "N",
            cores: ifnull(prod.rgb_cores, "").trim(),
            pdv: prod.ad_pdv,
            estoque: prod.estoque,
            selo_prod: prod.selo_prod,
            ad_embalagem: prod.ad_embalagem,
            imagem_home_store: prod.imagem_home_store ?? "",
          })
        }
      } catch (error) {
        console.log(error)
      }
    }
    // return { texto_seo: texto_seo, produtos: produtos }
  } catch (error) {
    console.log(error)
  }

  // produtos = result.produtos
  // texto_seo = result.texto_seo

  // var produtos = [];
  // var texto_seo = [];

  // try {
  //   produtos = result.produtos != undefined ? result.produtos : [];
  //   texto_seo = result.texto_seo != undefined ? result.texto_seo : [];
  // } catch (error) {
  //   produtos = [];
  //   texto_seo = [];
  // }

  return {
    props: {
      produtos,
      texto_seo,
      prefix,
      categoria,
      linksSubcategorias: linksSubcategorias.subcategorias,
      linksSegmentos: linksSegmentos.segmentos,
    }, // will be passed to the page component as props

    revalidate: 60,
  }
}

export async function getStaticPaths() {
  var subcategoria = await getRotas()
  const paths = subcategoria.map((item) => ({
    params: {
      prefix: item.url_site,
      idcategoria: String(item.cod_grupo),
    },
  }))
  return {
    paths,
    fallback: false, // false or 'blocking'
  }
}

async function getRotas() {
  const response = await dadosMenu.get()
  var dados = await response.data

  var categorias = []
  for (var cat of dados) {
    categorias.push(titleize(cat.descricao_grupo_produto_pai.trim()))
  }
  categorias = categorias
    .filter(function (e, i) {
      return categorias.indexOf(e) === i
    })
    .sort()

  var subcategoria = []
  var menu = []
  var qtd = 0
  for (var cat of categorias) {
    eval("menu.push({'" + qtd + "':[{'categoria':'" + titleize(cat) + "'}]})")

    for (var subcat of dados) {
      if (titleize(cat) === titleize(subcat.descricao_grupo_produto_pai.trim())) {
        menu[qtd][qtd].push({
          name: titleize(subcat.descricao_grupo_produto.trim()),
          cod_grupo: subcat.codigo_grupo_produto,
          url_site: subcat.url_site,
        })

        subcategoria.push({
          name: titleize(subcat.descricao_grupo_produto.trim()),
          cod_grupo: subcat.codigo_grupo_produto,
          url_site: subcat.url_site,
        })
      }
    }
    qtd++
  }

  subcategoria.sort(function (a, b) {
    if (a.name > b.name) {
      return 1
    }
    if (a.name < b.name) {
      return -1
    }

    return 0
  })

  return subcategoria
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

export default function CategoriaPage(props) {
  return (
    <>
      <Header subcategorias={props.linksSubcategorias} segmentos={props.linksSegmentos} />
      <Categoria
        idcategoria={props.categoria}
        nomecategoria={props.prefix}
        texto_seo={props.texto_seo}
        produtos={props.produtos}
        linkcategoria={`/${props.prefix.replace(/ /g, "-").toLowerCase()}/${props.categoria}`}
      />
    </>
  )
}
