import React, { Component } from "react"

import { dadosProdutosSegmento } from "../../services/api"

import Header from "../../components/Header"
import Footer from "../../components/Footer"

// import bgPrecoHome from '../../images/precohome.png';

import { Box, Flex, Select, Spinner } from "@chakra-ui/react"
import {
  FilterSelect,
  GridProdutosProdutos,
  Pagination,
  ProdutosLoading,
  ProdutosLoadingImage,
  SegmentoContainer,
  SegmentoContainerContent,
  SegmentoContainerGridProdutos,
  SegmentoContainerGridProdutosFilter,
  SegmentoContainerSlide,
} from "./styles"

import Head from "next/head"
import { NextSeo } from "next-seo"
import HeaderComponents from "../Header"
import { GridProductDefault } from "../GridProductsDefault"
import Link from "next/link"
import { NewFooter } from "../NewFooter"

const loading = "/images/loading.gif"

class Segmento extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dados: [],
      slide_img: `/images/banners/animados/segmentos/${this.props.prefix.replace(/ /g, "_").toLowerCase()}/index.html`,
      slide_img_mobile: `/images/banners/animados/segmentos_mobile/${this.props.prefix
        .replace(/ /g, "_")
        .toLowerCase()}/index.html`,
      bgSegmento: null,
      loadingProd: "block",
      segmento: this.props.idsegmento,
      paginacao: 1,
      total_paginacao: [],
      url_site: null,
      display_init: 0,
      isMobile: false,
    }
  }
  //   url_site:
  //     window.location.hostname.indexOf("127") != -1
  //       ? window.location.hostname + ":8001"
  //       : window.location.hostname,
  // };

  componentDidMount() {
    this.setState({
      url_site:
        window.location.hostname.indexOf("localhost") != -1
          ? window.location.hostname + ":3000"
          : window.location.hostname,
    })
    this.getImages()

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      this.setState({ isMobile: true })
    } else {
      this.setState({ isMobile: false })
    }

    this.getGridProduto(this.props.idsegmento)

    var self = this
    setTimeout(function () {
      self.setState({ display_init: 1 })
    }, 1000)
  }

  ifnull = (a, b) => {
    if (a === null || a === undefined || a === "") {
      return b
    } else {
      return a
    }
  }

  getGridProduto = async (segmento) => {
    this.setState({ dados: [] })
    try {
      if (segmento) {
        const response = await dadosProdutosSegmento.get("/" + segmento + "/" + this.state.paginacao)
        var dados = response.data
        var produtos = []
        var total_paginacao = dados[dados.length - 1]
        dados.pop()

        var paginas = []
        for (var i = 1; i <= total_paginacao.total; i++) {
          paginas.push(i)
        }

        this.setState({ total_paginacao: paginas })

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
            cores: this.ifnull(prod.rgb_cores, "").trim(),
            selo: prod.ad_embalagem ? "S" : "N",
            segmento: prod.segmento,
            ultrarapido: parseInt(prod.prazo_minimo_entrega) == 1 ? "S" : "N",
            estoque: prod.estoque,
            selo_prod: prod.selo_prod,
            imagem_home_store: prod.imagem_home_store,
          })
        }

        if (segmento != 6) {
          produtos.sort(function (a, b) {
            var valor_a = parseFloat(a.valor_home.replace(".", "").replace(",", "."))
            var valor_b = parseFloat(b.valor_home.replace(".", "").replace(",", "."))
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

        this.setState({
          dados: produtos,
          loadingProd: "none",
        })

        if (segmento != 6) {
          this.handleOrderBy({ target: { options: { selectedIndex: 2 } } })
          this.handleOrderBy({ target: { options: { selectedIndex: 1 } } })
        }
      } else {
        window.location.href = "/"
      }
    } catch (error) {
      console.log(Object.keys(error), error.message)
    }
  }

  handleOrderBy = async (e) => {
    if (e.target.options.selectedIndex == 1) {
      this.state.dados.sort(function (a, b) {
        var valor_a = parseFloat(a.valor_home.replace(".", "").replace(",", "."))
        var valor_b = parseFloat(b.valor_home.replace(".", "").replace(",", "."))
        if (a.estoque != 0) {
          if (valor_a < valor_b) {
            return -1
          } else if (valor_a > valor_b) {
            return 1
          }
        }
        return 0
      })
    } else {
      this.state.dados.sort(function (a, b) {
        var valor_a = parseFloat(a.valor_home.replace(".", "").replace(",", "."))
        var valor_b = parseFloat(b.valor_home.replace(".", "").replace(",", "."))

        if (a.estoque != 0) {
          if (valor_a < valor_b) {
            return 1
          } else if (valor_a > valor_b) {
            return -1
          }
        }

        return 0
      })
    }
    var dados = this.state.dados
    this.setState({ dados: dados })
  }

  getImages = async () => {
    var categoria = this.props.idsegmento

    if (categoria != "") {
      this.getGridProduto(categoria)
    }

    this.setState({
      slide_img: `/images/banners/animados/segmentos/${this.props.nomesegmento
        .replaceAll(" ", "_")
        .toLowerCase()}/index.html`,
      slide_img_mobile: `/images/banners/animados/segmentos_mobile/${this.props.nomesegmento
        .replaceAll(" ", "_")
        .toLowerCase()}/index.html`,
    })
  }

  // setPagination = async (e) => {

  //   await this.setState({ paginacao: parseInt(e.target.attributes.data.value), loadingProd: "block" });

  //   var segmento = this.props.idsegmento;
  //   if (!this.state.isMobile) {
  //     window.scrollTo(0, 400);
  //   }

  //   if (segmento != "") {
  //     this.getGridProduto(segmento);
  //   }

  // };

  render() {
    return (
      <>
        <Head>
          {/* <link rel="alternate" href={`https://innovationbrindes.com.br/segmento${this.props.linksegmento}`} hreflang="pt"/> */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PXQHD6F')`,
            }}
          ></script>
        </Head>
        <NextSeo
          title={`Segmento: ${this.props.nomesegmento}`}
          description={`${this.props.nomesegmento}, Brindes, Brindes Personalizados, Brindes Promocionais, Brindes Corporativos, Brindes Ecológicos, Personalizados, Innovation Brindes`}
          keywords={`${this.props.nomesegmento}, Brindes, Brindes Personalizados, Personalizados, Brindes Promocionais, Promocionais, Empresa de Brindes, Brindes Corporativos, Chaveiros Personalizados, Squeeze Personalizado, Canetas Personalizadas, Canetas Para Brindes, Caneta Personalizada, Canetas Promocionais, Produtos Promocionais, Brindes Para Eventos, Carregador Celular Personalizado, Power Bank Personalizado, Espelho Personalizado, Brindes Dia Das Mães, Brindes Dia Dos Pais, Brindes Dia Da Mulher, Brindes Para o Final Do Ano, Brindes Para Funcionários, Confecção Promocional`}
          canonical={`https://innovationbrindes.com.br/segmento${this.props.linksegmento}`}
          openGraph={{}}
          additionalMetaTags={[
            {
              property: "google-site-verification",
              content: "LbWjsXZYmAB2-2Pte2ynHh04tiGVdXXLsyOOGjHZQYs",
            },
            {
              name: "msvalidate.01",
              content: "7D236B682E6D1FAB048CBF1C65790B63",
            },
            {
              httpEquiv: "Content-Type",
              content: "text/html; charset=utf-8",
            },
            {
              name: "viewport",
              content: "width=device-width, initial-scale=1",
            },
            {
              name: "shareaholic:site_name",
              content: "Innovation Brindes",
            },
            {
              name: "shareaholic:language",
              content: "pt-BR",
            },
            {
              name: "Publisher",
              content: "Innovation Brindes a maior empresa de Brindes Personalizados Promocionais",
            },
            {
              name: "Designer",
              content: "Innovation Brindes a maior empresa de Brindes Personalizados Promocionais",
            },
            {
              name: "Abstract",
              content:
                "Brindes | Brinde | Brindes Baratos | Brindes Promocionais | Brindes Personalizados | Brinde Promocional | Empresa de Brindes | Comprar Brindes | Brindes Empresas",
            },
            {
              name: "robots",
              content: "Index, follow, all",
            },
            {
              name: "Googlebot",
              content: "Index, follow, all",
            },
            {
              name: "MSNBot",
              content: "Index, follow, all",
            },
            {
              name: "InktomiSlurp",
              content: "Index, follow, all",
            },
            {
              name: "Unknownrobot",
              content: "Index, follow, all",
            },
            {
              name: "Revisit-After",
              content: "1",
            },
          ]}
        />

        <Box style={{ opacity: this.state.display_init, transition: "0.3s" }}>
          {/* <Header /> */}
          <SegmentoContainer>
            <SegmentoContainerContent>
              <SegmentoContainerSlide>
                <SegmentoContainerSlide>
                  <img
                    className="mobile"
                    src="https://imgproductioncrm.s3.us-east-2.amazonaws.com/novidades%20mobile.png"
                  />
                  <img className="web" src="https://imgproductioncrm.s3.us-east-2.amazonaws.com/novidade.jpg" />
                </SegmentoContainerSlide>
              </SegmentoContainerSlide>
              <SegmentoContainerGridProdutos>
                <ProdutosLoading style={{ display: this.state.loadingProd, backgroundColor: "white", zIndex: 8 }}>
                  <ProdutosLoadingImage>
                    <Spinner color="#CC0000" size={"lg"} />
                  </ProdutosLoadingImage>
                </ProdutosLoading>
                <div className="flex justify-center mt-5 relative max-w-fit mx-auto ">
                  <GridProdutosProdutos>
                    {this.state.dados.map((data) => {
                      return (
                        <GridProductDefault
                          prod_nome={data.prod_nome}
                          codigo_prod={data.prod_cod}
                          url_prod={data.url_prod}
                          img_prod={data.imagem_home_store}
                          descricao={data.descricao}
                          caracteristicas={data.caracteristicas}
                          valor_home={data.valor_home}
                          ultrarapido={data.ultrarapido}
                          selo={data.selo}
                          segmento={data.segmento}
                          url_site={this.state.url_site}
                          cores={data.cores}
                          estoque={data.estoque}
                          state={this.state}
                          selo_prod={data.selo_prod}
                        />
                      )
                    })}
                  </GridProdutosProdutos>
                  <div className="absolute top-0 right-[-12rem]">
                    <Select placeholder="Ordenar produtos" onChange={(e) => this.handleOrderBy(e)} maxWidth="200px">
                      <option>Menor Valor</option>
                      <option>Maior Valor</option>
                    </Select>
                  </div>
                </div>
              </SegmentoContainerGridProdutos>
            </SegmentoContainerContent>
          </SegmentoContainer>
          <NewFooter />
        </Box>
      </>
    )
    // }
  }
}

export default Segmento
