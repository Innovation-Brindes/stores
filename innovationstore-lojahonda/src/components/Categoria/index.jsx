import React, { Component } from "react"
import { GoAlert } from "react-icons/go"

import { Button, Center } from "@chakra-ui/react"
import {
  AlertContent,
  CategoriaContainerProducts,
  OrderbyComponent,
  OrderbyContainer,
  TextSeoContainer,
} from "./styles"
import Head from "next/head"
import { NextSeo } from "next-seo"

import { GridProductDefault } from "../GridProductsDefault"
import { Layout } from "./Layout"
import { Filtro } from "../Filtro"
import { baseURL } from "../../services/api"
import Link from "next/link"

class Categoria extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dados: [],
      productData: this.props.produtos.filter((item) => item.estoque !== "0"),
      productIndisponivel: this.props.produtos.filter((item) => item.estoque === "0"),
      showIndisponiveis: false,
      isFilter: false,
      valorMaximo: props.valorMaximo,
      valorMinimo: props.valorMinimo,
      loadingProd: "block",
      paginacao: 1,
      total_paginacao: [],
      texto_seo: this.props.texto_seo,
      url_site: null,
      display_init: 0,
      coresSelected: [],

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
      valor_ate_selecionado: null,
      valor_de_selecionado: null,

      viewMenu: false,
    }
    this.footerChatRef = React.createRef()
  }

  handleOrderBy = async (e) => {
    if (e.target.options.selectedIndex == 1) {
      this.state.productData.sort(function (a, b) {
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
      this.state.productData.sort(function (a, b) {
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
    const dados = this.state.productData
    await this.setState({ dados: dados })
  }

  handleFilterProducts = async () => {
    const { cor, prazo, valorDe, valorAte, quantidade, coresSelected } = this.state
    const { productData } = this.state
    const originalProductData = this.props.produtos
    let filteredProducts = [...originalProductData]

    if (cor) {
      filteredProducts = filteredProducts.filter((item) => {
        const cores = item.list_cores.map((cor) => cor.cod_cor)
        const coresSelecionadas = coresSelected.filter((cor) => cores.includes(cor.value))
        return coresSelecionadas.length > 0 && item.estoque > 0 // Adicionando a condição item.estoque > 0
      })

      if (filteredProducts.length === 0) {
        filteredProducts = [...originalProductData]
      }
    }

    if (prazo) {
      filteredProducts = filteredProducts.filter(
        (item) => parseInt(item.prazo_minimo_entrega) <= parseInt(prazo?.prazo),
      )

      filteredProducts = filteredProducts.map((item) => {
        const precoDias = item.preco_dias // < array de objetos
        const precoDiasFiltrado = precoDias.filter((item) => parseInt(item.prazo) === parseInt(prazo?.prazo))

        if (precoDiasFiltrado.length > 0) {
          item.valor_home = parseFloat(precoDiasFiltrado[0].preco).toFixed(2).replace(".", ",")
        }

        if (parseInt(item.estoque) < 1000) {
          item.valor_home = parseFloat(item.price_home).toFixed(2).replace(".", ",")
        }

        return item
      })
    }

    if (quantidade) {
      const prazoSelected = prazo ?? 10

      const response = await baseURL.get(
        `/categoria/filtrar-preco-categoria/${this.props.idcategoria}/${quantidade}/${prazoSelected}`,
      )

      const produtos = response.data

      filteredProducts = filteredProducts.filter((item) => {
        const produtosFiltrados = produtos.filter(
          (produto) => parseInt(produto.codigo_produto) === parseInt(item.codigo_produto),
        )
        return produtosFiltrados.length > 0
      })
    }

    if (valorDe && valorAte) {
      filteredProducts = filteredProducts.filter((item) => {
        const valor = parseFloat(item.price_home)
        return valor >= valorDe && valor <= valorAte
      })
    }

    if (quantidade || cor || prazo || (valorDe && valorAte)) {
      this.setState({ productData: filteredProducts, isFilter: true })
    } else {
      this.setState({ productData: originalProductData, isFilter: false })
    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target
    if (name === "cor") {
      const cores = this.state.coresSelected.filter((cor) => cor.value !== value)
      if (cores.length === this.state.coresSelected.length) {
        cores.push({ value: value, name: value })
      }
      this.setState({ coresSelected: cores })
    }

    this.setState({ [name]: value }, () => {
      this.handleFilterProducts()
    })
  }

  showProductsIndisponiveis = () => {
    this.setState({ showIndisponiveis: !this.state.showIndisponiveis })

    if (this.state.showIndisponiveis) {
      return this.backToTop()
    }
  }

  backToTop = () => {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <>
        <Head>
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
          title={this.props.titulo ? this.props.titulo : this.props.nomecategoria}
          description={
            this.props.description
              ? this.props.description
              : `Confira os melhores brindes personalizados e promocionais da categoria ${this.props.nomecategoria} na Innovation Brindes. A maior empresa de brindes personalizados do Brasil. Confira!`
          }
          canonical={`https://innovationbrindes.com.br/categoria${this.props.linkcategoria}`}
          openGraph={{
            url: `https://innovationbrindes.com.br/categoria${this.props.linkcategoria}`,
            title: this.props.titulo ? this.props.titulo : this.props.nomecategoria,
            description: this.props.description
              ? this.props.description
              : `Confira os melhores brindes personalizados e promocionais da categoria ${this.props.nomecategoria} na Innovation Brindes. A maior empresa de brindes personalizados do Brasil. Confira!`,
          }}
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

        <Layout>
          <Filtro
            handleInputChange={this.handleInputChange}
            cores={this.props.coresCategoria}
            valorMinimo={this.props.valorMinimo}
            valorMaximo={this.props.valorMaximo}
            quantityProducts={this.state.productData?.length}
            category={this.props.nomeCategoria}
            prazos={this.props.prazos}
          />
          <OrderbyContainer>
            {this.props.titulo && (
              <div className="flex flex-col gap-2 mb-5">
                <h1 className="text-[#414042] text-2xl font-sans font-bold text-center ">{this.props.titulo}</h1>
                <p className="text-[#414042] text-sm font-sans font-normal text-center">{this.props.description}</p>
              </div>
            )}

            <div className="flex gap-2  flex-col md:flex-row ">
              <AlertContent>
                <div className="flex items-center gap-2 max-w-[600px]">
                  <GoAlert size={40} />
                  <span className="text-xs leading-4">
                    * Valor gerado pela oferta para 1.000 unidades. Não temos quantidade mínima, produzimos a partir de
                    <br /> 1 unidade. Clique na foto do item para personalizar as configurações e a quantidade que você
                    deseja.
                  </span>
                </div>
              </AlertContent>
              <div className="flex flex-col self-end gap-2 w-[190px]">
                <label className="text-sm font-bold text-gray-700" htmlFor="orderby">
                  Ordenar por:
                </label>
                <OrderbyComponent onChange={(e) => this.handleOrderBy(e)} id="orderby" name="orderby">
                  <option value={0}>Ordenar produtos</option>
                  <option value={1}>Menor Valor</option>
                  <option value={2}>Maior Valor</option>
                </OrderbyComponent>
              </div>
            </div>
          </OrderbyContainer>

          <CategoriaContainerProducts>
            {this.state.productData?.map((data) => (
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
            ))}
            {this.state.showIndisponiveis &&
              this.state.productIndisponivel?.map((data) => (
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
              ))}
          </CategoriaContainerProducts>
        </Layout>

        <Center marginBlock="1.3rem">
          <Button
            onClick={() => this.showProductsIndisponiveis()}
            bgColor="#58bc03"
            _hover={{
              filter: "brightness(0.9)",
            }}
            color="#fff"
          >
            {!this.state.showIndisponiveis ? "Ver mais" : "Ver menos"}
          </Button>
        </Center>

        <TextSeoContainer>
          {this.state.texto_seo.length > 0 ? (
            <div className="px-5 md:px-0" dangerouslySetInnerHTML={{ __html: this.state.texto_seo }} />
          ) : null}
        </TextSeoContainer>

        {this.props.tags_categoria?.length > 0 && (
          <div className="flex gap-2 self-start max-w-[1280px] w-full mx-auto mt-10">
            <h2 className="text-[#414042] text-sm font-sans text-start self-start">Tags</h2>
            <div className="flex flex-wrap gap-2 justify-start">
              {this.props.tags_categoria.map((tag) => (
                <Link href={tag.link_tag} key={tag.tag} passHref>
                  <a
                    href={tag.link_tag}
                    className="text-[#414042] text-xs font-sans font-normal bg-[#F2F2F2] px-2 py-1 rounded-md lowercase"
                  >
                    {tag.tag}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        )}
      </>
    )
  }
}

export default Categoria
