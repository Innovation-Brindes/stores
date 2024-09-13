import React from "react"
import {
  ListaPrazoDeProducao,
  api,
  buscaCoresDisponiveis,
  dadosMenu,
  dadosProdutosSubcategoria,
} from "../../../../services/api"
import Categoria from "../../../../components/Categoria"
import { getCategorias, getSegmentos } from "../../../../utils/getLinksHeader"
import Header from "../../../../components/Header"

export async function getStaticProps(context) {
  const categoria = context.params.idcategoria
  const coresCategoria = await buscarCoresCategoria(categoria)
  const prefix = titleize(context.params.prefix.replace(/-/g, " "))

  const prazos = await getPrazoProduction()
  const { title, description, tags_categoria } = await getTitleCategory(categoria)

  const linksSubcategorias = await getCategorias()
  const linksSegmentos = await getSegmentos()

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
            ...prod,
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
            price_home: prod.preco_home,
            selo: prod.ad_embalagem ? "S" : "N",
            segmento: prod.segmento,
            ultrarapido: parseInt(prod.prazo_minimo_entrega) == 1 ? "S" : "N",
            cores: ifnull(prod.rgb_cores, "").trim(),
            pdv: prod.ad_pdv,
            estoque: prod.estoque,
            selo_prod: prod.selo_prod,
            ad_embalagem: prod.ad_embalagem,
            imagem_produto: prod.imagem_produto,
            codigo_produto: prod.codigo_produto,
            codprod: prod.codprod,
            list_cores: prod.cores,
            prazo_minimo_entrega: prod.prazo_minimo_entrega,
            batidas: prod.batidas_maxima,
            reposicao_estoque: prod.reposicao_estoque,
            quantidade_estoque: prod.quantidade_estoque,
            preco_dias: prod.preco_dias,
            img_home_produto: prod.img_home_produto,
            preco_home: prod.preco_home,
          })
        }
      } catch (error) {
        console.log(error)
      }
    }
  } catch (error) {
    console.log(error)
  }

  produtos?.sort(function (a, b) {
    const valorA = parseFloat(a.price_home)
    const valorB = parseFloat(b.price_home)
    if (valorA > valorB) {
      return 1
    }
    if (valorA < valorB) {
      return -1
    }

    return 0
  })

  const valorMaximo = produtos.reduce((prev, current) => {
    const { price_home, estoque } = current
    const replaced = price_home
    const parsedStock = parseInt(estoque)

    if (parsedStock !== 0 && parseFloat(replaced) > prev) {
      return parseFloat(replaced)
    }
    return prev
  }, 0)

  const valorMinimo = produtos.reduce((prev, current) => {
    const { price_home } = current
    const replaced = price_home

    if (parseFloat(replaced) < prev) {
      return parseFloat(replaced)
    }
    return prev
  }, 9999999)

  var nome_categoria = prefix.split(" ")
  nome_categoria.pop()
  nome_categoria.pop()
  nome_categoria.pop()

  return {
    props: {
      produtos,
      texto_seo,
      prefix,
      categoria,
      linksSubcategorias: linksSubcategorias.subcategorias,
      linksSegmentos: linksSegmentos.segmentos,
      coresCategoria: coresCategoria,
      valorMaximo,
      valorMinimo,
      nome_categoria: nome_categoria.join(" "),
      prazos,
      title,
      description,
      tags_categoria,
    }, // will be passed to the page component as props

    revalidate: 30 * 60, // 30 minutes
  }
}

async function getTitleCategory(category) {
  try {
    const response = await api.get(`/site/v2/atualizacao-seo-categoria/listar-titulo-categoria/${category}`)

    return {
      title: response.data[0].titulo_categoria,
      description: response.data[0].descricao_categoria,
      tags_categoria: response.data[0].tags_categoria,
    }
  } catch (error) {
    console.log(Object.keys(error), error.message)
    return {
      title: "",
      description: "",
      tags_categoria: [],
    }
  }
}

export async function getPrazoProduction() {
  const responsePrazo = await ListaPrazoDeProducao.get("1")
  const dadosPrazo = responsePrazo.data

  return dadosPrazo
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
    ?.sort()

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

  subcategoria?.sort(function (a, b) {
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

async function buscarCoresCategoria(categoria) {
  try {
    var param = {
      codigo_categoria: null,
      codigo_subcategoria: categoria,
    }

    const responseCores = await buscaCoresDisponiveis.post("", param)
    var dadosCor = responseCores.data

    var cores = []
    for (var cor of dadosCor) {
      cores.push({
        name: cor.nome_cor.trim(),
        cod: cor.codigo_cor,
        rgb: cor.rgb_cores,
      })
    }

    cores?.sort(function (a, b) {
      if (a.name > b.name) {
        return 1
      }
      if (a.name < b.name) {
        return -1
      }
      return 0
    })

    return cores
  } catch (error) {
    console.log(Object.keys(error), error.message)
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
        coresCategoria={props.coresCategoria}
        valorMaximo={props.valorMaximo}
        valorMinimo={props.valorMinimo}
        nomeCategoria={props.nome_categoria}
        prazos={props.prazos}
        titulo={props.title}
        description={props.description}
        tags_categoria={props.tags_categoria}
      />
    </>
  )
}
