// import React from "react"
// import Home from "../components/Home"
// import { dadosCategorias, dadosProdutos, dadosSubCategorias } from "../services/api"
// import { NewFooter } from "../components/NewFooter"
// import Header from "../components/Header"
// import { getCategorias, getSegmentos } from "../utils/getLinksHeader"
// import { AcceptCookies } from "../components/AcceptCookies"

// export async function getStaticProps(context) {
//   var produtos = await getGridProduto()
//   var categorias = await getFilter()
//   var subcategorias = await getSubcategoriaPorCategoria()

//   const linksSubcategorias = await getCategorias()
//   const linksSegmentos = await getSegmentos()

//   return {
//     props: {
//       produtos,
//       categorias,
//       subcategorias,
//       linksSubcategorias: linksSubcategorias.subcategorias,
//       linksSegmentos: linksSegmentos.segmentos,
//     }, // will be passed to the page component as props

//     revalidate: 60,
//   }
// }

// async function getGridProduto() {
//   try {
//     const response = await dadosProdutos.get()
//     var dados = response.data
//     var produtos = []
//     for (var prod of dados) {
//       if (prod.url_seo) {
//         var url_seo = prod.url_seo.split("-")

//         var referencia = prod.referencia.toString()
//         var link =
//           "https://innovationbrindes.com.br/images/produtos/" +
//           referencia.substring(referencia.length - 4) +
//           "/" +
//           url_seo.slice(0, url_seo.length - 1).join("-") +
//           "-1-1.jpg"

//         produtos.push({
//           prod_nome: prod.nome,
//           prod_cod: prod.referencia,
//           url_prod: prod.url_seo,
//           img_prod: link,
//           referencia: prod.referencia,
//           descricao: prod.descricao,
//           caracteristicas: prod.caracteristicas,
//           valor_home: (Math.round(parseFloat(prod.valor_home) * 100) / 100).toLocaleString("pt-br", {
//             minimumFractionDigits: 2,
//           }),
//           cores: ifnull(prod.rgb_cores, "").trim(),
//           selo: prod.ad_embalagem ? "S" : "N",
//           segmento: prod.segmento,
//           ultrarapido: parseInt(prod.prazo_minimo_entrega) == 1 ? "S" : "N",
//         })
//       }
//     }

//     return produtos
//   } catch (error) {
//     console.log(error)
//   }
// }

// async function getFilter() {
//   try {
//     const responseCategoria = await dadosCategorias.get("")
//     var dados = responseCategoria.data

//     var categorias = []
//     for (var cat of dados) {
//       if (cat.codigo_grupo_produto != 1026000) {
//         categorias.push({
//           cod: cat.codigo_grupo_produto,
//           descricao: cat.descricao_grupo_produto.trim(),
//         })
//       }
//     }

//     categorias.sort(function (a, b) {
//       if (a.descricao < b.descricao) {
//         return -1
//       } else if (a.descricao > b.descricao) {
//         return 1
//       }
//       return 0
//     })

//     return categorias
//   } catch (error) {
//     console.log(Object.keys(error), error.message)
//   }
// }

// async function getSubcategoriaPorCategoria() {
//   try {
//     const response = await dadosSubCategorias.get()
//     var dados = response.data

//     var subcategorias = []
//     for (var subcat of dados) {
//       subcategorias.push({
//         name: subcat.descricao_grupo_produto,
//         cod: subcat.codigo_grupo_produto,
//       })
//     }

//     subcategorias.sort(function (a, b) {
//       if (a.name > b.name) {
//         return 1
//       }
//       if (a.name < b.name) {
//         return -1
//       }

//       return 0
//     })

//     return subcategorias
//   } catch (error) {
//     console.log(Object.keys(error), error.message)
//   }
// }

// function ifnull(a, b) {
//   if (a === null || a === undefined || a === "") {
//     return b
//   } else {
//     return a
//   }
// }

// export default function Index(props) {
//   return (
//     <>
//       <Header subcategorias={props.linksSubcategorias} segmentos={props.linksSegmentos} />
//       <Home produtos={props.produtos} categorias={props.categorias} subcategorias={props.subcategorias} />
//       <AcceptCookies />
//     </>
//   )
// }

export default function Home() {
  return <h1>Redirecionando..</h1>
}

export async function getServerSideProps(context) {
  return {
    redirect: {
      destination: "/lojahonda",
      permanent: false,
    },
  }
}
