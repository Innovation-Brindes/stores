import React, { Component } from "react"
import { GoAlert, GoTriangleDown } from "react-icons/go"

import { buscaCoresDisponiveis, dadosProdutosSubcategoria } from "../../services/api"
import $ from "jquery"

import Footer from "../../components/Footer"

// import bgPrecoHome from '../../images/precohome.png';
// import loading from "../../resources/images/loading.gif";
import { Box, Center, Flex, Grid, Icon, Select, Spinner, Text } from "@chakra-ui/react"
import {
  CardProdCores,
  CardProdCoresGridCores,
  CardProdCoresGridCoresContent,
  CardProdCoresGridCoresContentCor,
  CardProdCoresTitle,
  CardProdDesc,
  CardProdValor,
  CardProdValorContent,
  CategoriaContainer,
  CategoriaContainerContent,
  CategoriaContainerContentFilter,
  CategoriaContainerContentFilterSelect,
  CategoriaContainerContentGridProdutos,
  CategoriaContainerContentGridProdutosLoading,
  CategoriaContainerContentGridProdutosProduto,
  CategoriaContainerContentGridProdutosProdutoCardProd,
  CategoriaContainerContentGridProdutosProdutoCardProdImgProd,
  CategoriaContainerContentGridProdutosProdutoTitle,
  CategoriaContainerContentTextoSEO,
  GridContainerFilterAviso,
  GridProdutosProdutoBTNConferir,
  GridProdutosProdutoBTNConferirIndisponivel,
  Selo,
  SeloEmbalagem,
} from "./styles"
import Head from "next/head"
import { NextSeo } from "next-seo"
import FooterSocialMediaComponent from "../Footer/FooterSocialMedia"
import FiltroBusca from "../Buscar/components/Filtro"
import { GridProductDefault } from "../GridProductsDefault"
import FooterComponent from "../Footer/FooterComponent"
import { ChakraProvider } from "@chakra-ui/provider"
import { NewFooter } from "../NewFooter"

const bgPrecoHome = "/images/precohome.png"
const loading = "/images/loading.gif"
class Categoria extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dados: this.props.produtos,
      loadingProd: "block",
      paginacao: 1,
      total_paginacao: [],
      texto_seo: this.props.texto_seo,
      url_site: null,
      display_init: 0,

      texto_buscado: null,
      subcategorias_selecionadas: [],
      subcategorias: [],
      cores: [],
      cor_selecionadas: [],
      quantidade_selecionada: [],
      valor_de: [],
      valor_ate: [],
      nome_categoria: "",
      cor_selecionada: null,
      prazo_selecionado: null,
      quantidade_selecionada: null,
      valor_ate_selecionado: null,
      valor_de_selecionado: null,

      viewMenu: false,
    }
    this.footerChatRef = React.createRef()
  }

  ifnull = (a, b) => {
    if (a === null || a === undefined || a === "") {
      return b
    } else {
      return a
    }
  }

  componentDidMount() {
    this.setState({
      url_site:
        window.location.hostname.indexOf("localhost") != -1
          ? window.location.hostname + ":3000"
          : window.location.hostname,
    })

    window.scrollTo(0, 10)
    this.getGridProduto(this.props.idcategoria)

    this.handleOrderBy({ target: { options: { selectedIndex: 2 } } })
    this.handleOrderBy({ target: { options: { selectedIndex: 1 } } })
    this.handleOrderBy({ target: { options: { selectedIndex: 2 } } })
    this.handleOrderBy({ target: { options: { selectedIndex: 1 } } })

    var self = this
    setTimeout(function () {
      self.setState({ display_init: 1 })
    }, 1000)

    this.buscaCoresCategoria()
    this.props.nomecategoria.split(" ")
    var nome_categoria = this.props.nomecategoria.split(" ")
    nome_categoria.pop()
    nome_categoria.pop()
    nome_categoria.pop()
    this.setState({ nome_categoria: nome_categoria.join(" ") })
  }

  buscaCoresCategoria = async () => {
    try {
      var param = {
        codigo_categoria: null,
        codigo_subcategoria: this.props.idcategoria,
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

      cores.sort(function (a, b) {
        if (a.name > b.name) {
          return 1
        }
        if (a.name < b.name) {
          return -1
        }
        return 0
      })

      this.setState({ cores: cores })
    } catch (error) {
      console.log(Object.keys(error), error.message)
    }
  }

  getGridProduto = async (categoria) => {
    this.setState({ dados: [], loadingProd: "block" })
    try {
      if (categoria) {
        const response = await dadosProdutosSubcategoria.post("", {
          codigo_grupo_produto: categoria,
          codigo_cor: this.state.cor_selecionada,
          quantidade: this.state.quantidade_selecionada,
          valor_inicial: this.state.valor_de_selecionado,
          valor_final: this.state.valor_ate_selecionado,
          prazo_entrega: this.state.prazo_selecionado,
        })

        var dados = response.data

        var produtos = []

        var texto_seo = null
        for (var prod of dados) {
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
              preco_home = 0.0
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
              cores: this.ifnull(prod.rgb_cores, "").trim(),
              pdv: prod.ad_pdv,
              estoque: prod.estoque,
              selo_prod: prod.selo_prod,
              ad_embalagem: prod.ad_embalagem,
              imagem_home_store: prod.imagem_home_store,
            })
          }
        }

        this.setState({ texto_seo: texto_seo })
        this.setState({ loadingProd: "none" })

        await this.setState({ dados: produtos })

        await this.handleOrderBy({ target: { options: { selectedIndex: 2 } } })
        await this.handleOrderBy({ target: { options: { selectedIndex: 1 } } })
        await this.handleOrderBy({ target: { options: { selectedIndex: 2 } } })
        await this.handleOrderBy({ target: { options: { selectedIndex: 1 } } })
      } else {
        window.location.href = "/"
      }
    } catch (error) {
      console.log(Object.keys(error), error.message)
    }
  }

  ifnull = (a, b) => {
    if (a === null || a === undefined || a === "") {
      return b
    } else {
      return a
    }
  }

  handleOrderBy = async (e) => {
    if (e.target.options.selectedIndex == 1) {
      this.state.dados.sort(function (a, b) {
        var valor_a = parseFloat(a.valor_home.replace(".", "").replace(",", "."))
        var valor_b = parseFloat(b.valor_home.replace(".", "").replace(",", "."))

        if (a.estoque > "0" && b.estoque === "0") {
          return -1
        }

        if (a.estoque === "0") {
          return 1 // after
        }

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

        if (a.estoque > "0" && b.estoque === "0") {
          return -1
        }

        if (a.estoque === "0") {
          return 1 // after
        }

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
    await this.setState({ dados: dados })
  }

  atualizarBusca = async (data) => {
    await this.setState({
      cor_selecionada: data.cor_selecionada,
      prazo_selecionado: data.prazo_selecionado != null ? parseInt(data.prazo_selecionado.prazo) : null,
      quantidade_selecionada: data.quantidade_selecionada,
      valor_ate_selecionado: data.valor_ate_selecionado,
      valor_de_selecionado: data.valor_de_selecionado,
    })
    this.getGridProduto(this.props.idcategoria)
    $("#select-order").val(0)
  }

  render() {
    return (
      <>
        <Head>
          {/* <link rel="alternate" href={`https://innovationbrindes.com.br/categoria${this.props.linkcategoria}`} hreflang="pt"/> */}
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
          title={this.props.nomecategoria}
          description={`${this.props.nomecategoria}, Brindes, Brindes Personalizados, Brindes Promocionais, Brindes Corporativos, Brindes Ecológicos, Personalizados, Innovation Brindes`}
          keywords={`${this.props.nomecategoria}, Brindes, Brindes Personalizados, Personalizados, Brindes Promocionais, Promocionais, Empresa de Brindes, Brindes Corporativos, Chaveiros Personalizados, Squeeze Personalizado, Canetas Personalizadas, Canetas Para Brindes, Caneta Personalizada, Canetas Promocionais, Produtos Promocionais, Brindes Para Eventos, Carregador Celular Personalizado, Power Bank Personalizado, Espelho Personalizado, Brindes Dia Das Mães, Brindes Dia Dos Pais, Brindes Dia Da Mulher, Brindes Para o Final Do Ano, Brindes Para Funcionários, Confecção Promocional`}
          canonical={`https://innovationbrindes.com.br/categoria${this.props.linkcategoria}`}
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
          <CategoriaContainer>
            <CategoriaContainerContent viewMenu={this.state.viewMenu}>
              <FiltroBusca
                styles={{ marginTop: "0px" }}
                loadingProd={this.state.loadingProd}
                texto_buscado={this.state.texto_buscado}
                subcategoria_carregada={[this.props.idcategoria]}
                subcategorias={this.state.subcategorias}
                cores={this.props.cores}
                cor_selecionadas={[]}
                quantidade_selecionada={null}
                valor_de={null}
                valor_ate={null}
                atualizarBusca={this.atualizarBusca}
                count_produtos={this.state.dados.length}
                filtro_categoria={false}
                nome_categoria={this.state.nome_categoria}
                active_load={() => this.setState({ loadingProd: "block", dados: [] })}
                ocultar_whats={(value) => {
                  this.setState({ viewMenu: !value })
                  this.footerChatRef.current?.ocultWhatsApp(value)
                }}
                selo_prod={this.state.dados.selo_prod}
              />
              <Flex flexDirection="column" alignItems="center" gap={25}>
                <ChakraProvider>
                  <GridContainerFilterAviso
                    gridTemplateColumns={"1fr 200px"}
                    //alinhar o grid ao centro
                    justifyContent="center"
                    alignItems="center"
                    maxW="1100px"
                    width="813px"
                    gap={2}
                  >
                    <Flex
                      bg="#F5F5F5"
                      paddingInline=".5rem"
                      paddingBlock=".1rem"
                      borderRadius="10px"
                      flex="1"
                      gap={2}
                      alignItems="center"
                    >
                      <Icon as={GoAlert} color="#aaaaaa" fontSize="1.5rem" />
                      <Flex flexDir="row">
                        <Text as="span" fontSize="9px" color="#5a5a5a">
                          <span
                            style={{
                              fontWeight: "bold",
                            }}
                          >
                            * Valor gerado pela oferta para 1.000 unidades.
                          </span>{" "}
                          Não temos quantidade mínima, produzimos a partir de 1 unidade. Clique na foto do item para
                          personalizar as configurações e a quantidade que você deseja.
                        </Text>
                      </Flex>
                    </Flex>
                    <Select
                      icon={<Icon as={GoTriangleDown} />}
                      onChange={(e) => this.handleOrderBy(e)}
                      color="#5a5a5a"
                      fontSize=".9rem"
                      _hover={{ borderColor: "#58bc03" }}
                      _focus={{ borderColor: "#58bc03" }}
                    >
                      <option value={0}>Ordenar produtos</option>
                      <option value={1}>Menor Valor</option>
                      <option value={2}>Maior Valor</option>
                    </Select>
                  </GridContainerFilterAviso>
                </ChakraProvider>
                <CategoriaContainerContentGridProdutos length={this.state.dados.length} viewMenu={this.state.viewMenu}>
                  <CategoriaContainerContentGridProdutosLoading style={{ display: this.state.loadingProd }}>
                    <Center>
                      <Spinner color="#CC0000" size={"lg"} />
                    </Center>
                  </CategoriaContainerContentGridProdutosLoading>
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
                        selo={data.selo}
                        segmento={data.segmento}
                        ultrarapido={data.ultrarapido}
                        url_site={this.state.url_site}
                        ad_pdv={data.pdv}
                        cores={data.cores}
                        estoque={data.estoque}
                        state={this.state}
                        selo_prod={data.selo_prod}
                        ad_embalagem={data.embalagem}
                      />
                    )
                  })}
                </CategoriaContainerContentGridProdutos>
              </Flex>
            </CategoriaContainerContent>
          </CategoriaContainer>

          <NewFooter />
        </Box>
      </>
    )
  }
}

function ifnull(a, b) {
  if (a === null || a === undefined || a === "") {
    return b
  } else {
    return a
  }
}

export default Categoria
