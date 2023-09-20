import React, { useEffect } from "react"

import {
  buscaProduto,
  BuscaTodosProdutos,
  dadosProdutosSubcategoria,
  ListaPrazoDeProducao,
} from "../../../services/api"
import { getSegmentos, getCategorias } from "../../../utils/getLinksHeader"
import Header from "../../../components/Header"
import { Product } from "../../../components/Product"
import Head from "next/head"
import axios from "axios"

export async function getStaticProps(context) {
  var arraycod = String(context.params.idproduto).split("-")
  var cod_prod = arraycod[arraycod.length - 1].substr(-4)
  var referencia = arraycod[arraycod.length - 1]
  var dados_produto = await getCorProduto(cod_prod)
  var dados_gravacao = await getTipoGravacao(cod_prod)

  const relatedProducts = await getRelatedProducts(cod_prod)

  const linksSubcategorias = await getCategorias()
  const linksSegmentos = await getSegmentos()

  var cores = []
  var produto = []
  var preco_home = []
  var prazo_producao = []
  var gravacao = []
  var texto_seo = ""

  try {
    cores = dados_produto.cores != undefined ? dados_produto.cores : []
    produto = dados_produto.produto != undefined ? dados_produto.produto.dados : []
    preco_home = dados_produto.produto != undefined ? dados_produto.produto.preco_home : []
    texto_seo = dados_produto.produto != undefined ? dados_produto.produto.texto_seo : ""
    prazo_producao = dados_produto.produto != undefined ? dados_produto.produto.prazo_producao : []
    gravacao = dados_gravacao.tipo_gravacao != undefined ? dados_gravacao.tipo_gravacao : []
  } catch (error) {
    cores = []
    produto = []
    preco_home = []
    prazo_producao = []
    gravacao = []
    texto_seo = ""
  }

  var nomeprod = context.params.idproduto.split("-")
  nomeprod.pop()

  const nome_produto = titleize(nomeprod.join(" "))

  return {
    props: {
      cod_prod,
      referencia,
      cores,
      produto,
      preco_home,
      prazo_producao,
      gravacao,
      nome_produto,
      texto_seo,
      linksSubcategorias: linksSubcategorias.subcategorias,
      linksSegmentos: linksSegmentos.segmentos,
      relatedProducts: relatedProducts,
    }, // will be passed to the page component as props
  }
}

async function getRelatedProducts(cod_prod) {
  try {
    const response = await buscaProduto.get(cod_prod)
    const dados = await response.data

    const relatedProductsResponse = await axios.get(
      `https://api.innovationbrindes.com.br/api/produto/lista-referencias-grupo/${dados.codigo_grupo_produto.toString()}`,
    )

    const relatedProducts = []

    for (const prod of relatedProductsResponse.data) {
      if (!prod.url_seo && parseInt(prod.estoque) === 0) return

      relatedProducts.push({
        nome: prod.nome_produto,
        codigo_produto: prod.codigo_produto,
        url_produto: prod.url_seo,
        // img_produto: prod.imagens_produto[0],
        referencia: prod.referencia,
        descricao: prod.descricao,
        caracteristicas: prod.caracteristicas,
        cores: prod.rgb_cores,
        selo: prod.ad_embalagem ? "S" : "N",
        imagens_produto: prod.imagens_produto,
        segmento: prod.segmento,
        ultrarapido: parseInt(prod.prazo_minimo_entrega) === 1 ? "S" : "N",
        selo_prod: prod.selo_prod,
        preco_home: prod.preco_home,
        list_cores: prod.cores,
        estoque: prod.estoque,
        imagem_home_store: prod.imagem_home_store ?? "",
      })
    }

    return relatedProducts
  } catch (error) {
    console.log(Object.keys(error), error.message)
  }
}

async function getCorProduto(cod_prod) {
  try {
    const response = await buscaProduto.get(cod_prod + "/cores-disponiveis")
    var dados = await response.data

    var cores_diponiveis = []
    for (var d of dados) {
      cores_diponiveis.push({
        tamanho_p: d.tamanho_p,
        tamanho_m: d.tamanho_m,
        tamanho_g: d.tamanho_g,
        tamanho_gg: d.tamanho_gg,
        tamanho_xgg: d.tamanho_xgg,
        text: d.descricao_cor.trim(),
        cod: d.codigo_cor,
        rgb_cores: d.rgb_cores,
        estoque: parseInt(d.estoque_disponivel),
        previsao: d.reposicao_estoque,
        quantidade_repo: d.quantidade_reposicao,
        data_reposicao_estoque: d.reposicao_estoque,
      })
    }
    cores_diponiveis.sort(function (a, b) {
      if (a.estoque == 0) {
        return 1
      } else {
        return -1
      }
    })

    var dados_produto = await getProduto(cod_prod)

    return { cores: cores_diponiveis, produto: dados_produto }
  } catch (error) {
    console.log(Object.keys(error), error.message)
  }
}

async function getProduto(cod_prod) {
  try {
    const response = await buscaProduto.get(cod_prod)
    var dados = await response.data

    const responsePrazo = await ListaPrazoDeProducao.get(dados.prazo_minimo_entrega.toString())
    var dadosPrazo = await responsePrazo.data

    var texto_seo = await getTextoSEO(dados.codigo_grupo_produto.toString())

    return {
      dados: dados,
      preco_home: dados.valor_home,
      prazo_producao: dadosPrazo,
      texto_seo: texto_seo,
    }
  } catch (error) {
    console.log(Object.keys(error), error.message)
  }
}

async function getTipoGravacao(cod_prod) {
  try {
    const response = await buscaProduto.get(cod_prod + "/tipo-gravacao")
    var dados = await response.data

    var tipo_gravacao = []
    for (var d of dados) {
      tipo_gravacao.push({
        nome: d.descricao_impressao.trim(),
        tooltip: d.texto_impressao.trim(),
        cod: d.codigo_impressao,
        img: d.nome_img,
        desc_site: d.descricao_site,
      })
    }

    return { tipo_gravacao: tipo_gravacao }
  } catch (error) {
    console.log(Object.keys(error), error.message)
  }
}

async function getTextoSEO(categoria) {
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

    var texto_seo = dados[0].texto_seo

    return texto_seo
  } catch (error) {
    console.log(Object.keys(error), error.message)
  }
}

export async function getStaticPaths() {
  var produtos = await getRotas()

  const topProducts = ["4636", "1916", "0040", "040", "40", "4411", "3687"]

  const uniqueProduct = produtos.filter((item) => {
    return topProducts.includes(item.codigo_produto)
  })

  const paths = uniqueProduct.map((item) => ({
    params: {
      idproduto: String(item.url_produto),
    },
  }))

  // const uniqueUrl = uniqueProduct.map((item) => {
  //   return item.url_produto
  // })

  // const paths = produtos.map((item) => ({
  //   params: {
  //     idproduto: String(item.url_produto),
  //   },
  // }))
  // const paths = [
  //   {
  //     params: {
  //       idproduto: String(uniqueUrl),
  //     },
  //   },
  // ]

  return {
    paths,
    fallback: false, // false or 'blocking'
  }
}

async function getRotas() {
  try {
    const response = await BuscaTodosProdutos.get()
    var dados = await response.data

    // var codprod = ["3424", "998", "1031"];
    var produtos = []
    dados.map((item) => {
      if (item.url_produto != "") {
        produtos.push(item)
      }
    })

    return produtos
  } catch (error) {
    console.log(Object.keys(error), error.message)
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

export default function ProdutoPage(props) {
  var cores = props.cores != undefined ? props.cores : []
  var produto = props.produto != undefined ? props.produto : []
  var preco_home = props.preco_home != undefined ? props.preco_home : []
  var gravacao = props.gravacao != undefined ? props.gravacao : []
  var prazo_producao = props.prazo_producao != undefined ? props.prazo_producao : []
  var texto_seo = props.texto_seo != undefined ? props.texto_seo : ""

  return (
    <>
      <Head>
        <title>{`${titleize(props.nome_produto)} - ${props.referencia} - Innovation Brindes`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content={texto_seo} />
        <meta name="keywords" content={texto_seo} />
        <meta
          property="og:title"
          content={`${titleize(props.nome_produto)} - ${props.referencia} - Innovation Brindes`}
        />
        <meta property="og:description" content={texto_seo} />
        <meta
          property="og:url"
          content={`https://www.innovationbrindes.com.br/${props.nome_produto.replace(/ /g, "-").toLowerCase()}-${
            props.referencia
          }`}
        />
        <meta property="og:image" content={`https://www.innovationbrindes.com.br/${props.imagem}`} />
        <meta property="og:image:secure_url" content={`https://www.innovationbrindes.com.br/${props.imagem}`} />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="315" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta
          property="og:image:alt"
          content={`${titleize(props.nome_produto)} - ${props.referencia} - Innovation Brindes`}
        />
      </Head>

      <Header subcategorias={props.linksSubcategorias} segmentos={props.linksSegmentos} />
      <Product
        cod_prod={props.cod_prod}
        referencia={props.referencia}
        nome_produto={props.nome_produto}
        linkproduto={`/${props.nome_produto.replace(/ /g, "-").toLowerCase()}-${props.referencia}`}
        cores={cores}
        dados={produto}
        texto_seo={texto_seo}
        preco_home={preco_home}
        gravacao={gravacao}
        prazo_producao={prazo_producao}
        selo_prod={props.selo_prod}
        relatedProducts={props.relatedProducts}
      />
    </>
  )
}
