import React, { Component } from "react"
import { Button, ChakraProvider, Flex, Heading } from "@chakra-ui/react"
import Head from "next/head"
import { NextSeo } from "next-seo"
import { ContainerBox, FlexContainerDesktopStatus, FlexContainerMobileStatus } from "./styles"
import ContainerTitle from "./components/ContainerTitle"
import ContainerDados from "./components/ContainerDados"
import ContainerStatus from "./components/ContainerStatus"
import ContainerSearchHash from "./components/ContainerSearchHash"
import ContainerStatusMobile from "./components/ContainerStatusMobile"
import FooterSocialMediaComponent from "../Footer/FooterSocialMedia"
import { AiFillCaretLeft, AiOutlineArrowLeft } from "react-icons/ai"
import MobileButton from "./components/MobileButton"
import { AcompanharPedido } from "./../../services/api/index"
import FooterComponent from "../Footer/FooterComponent"

const loadingGif = "/images/loading.gif"

class AcompanheSeuPedido extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: [],
      mobileView: false,
      dados_parceiro: [],
      itens_pedido: [],
      loading: false,
    }
  }

  getDadosAcompanharPedido = async () => {
    try {
      this.setState({ loading: true })

      const response = await AcompanharPedido.get(this.props.hash_pedido)

      const dados = response.data

      var dados_parceiro = dados.dados_parceiro

      var itens_pedido = dados.itens_pedido

      this.setState({
        dados_parceiro: dados_parceiro,
        itens_pedido: itens_pedido,
      })

      this.setState({ loading: false })

      if (itens_pedido.length === 0) {
        alert("código de rastreio invalido!")
        window.location.href = "/acompanhe-seu-pedido"
      }
    } catch (error) {
      console.log(Object.keys(error), error.message)
      this.setState({ loading: false })
    }
  }

  componentDidMount() {
    this.getDadosAcompanharPedido()

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      this.setState({ mobileView: true })
    } else {
      this.setState({ mobileView: false })
    }
  }

  ifnull = (a, b) => {
    if (a === null || a === undefined || a === "") {
      return b
    } else {
      return a
    }
  }

  render() {
    return (
      <ChakraProvider>
        <Head>
          {/* <link rel="alternate" href={`https://innovationbrindes.com.br/sucesso`} hreflang="pt"/> */}
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
          title={`${
            this.state.items.length > 0 ? `${this.state.items.length} Itens em seu carrinho. ` : ``
          }Innovation Brindes a maior empresa de Brindes Personalizados Promocionais`}
          description={`Sucesso, Brindes, Brindes Personalizados, Brindes Promocionais, Brindes Corporativos, Brindes Ecológicos, Personalizados, Innovation Brindes`}
          keywords={`Sucesso, Brindes, Brindes Personalizados, Personalizados, Brindes Promocionais, Promocionais, Empresa de Brindes, Brindes Corporativos, Chaveiros Personalizados, Squeeze Personalizado, Canetas Personalizadas, Canetas Para Brindes, Caneta Personalizada, Canetas Promocionais, Produtos Promocionais, Brindes Para Eventos, Carregador Celular Personalizado, Power Bank Personalizado, Espelho Personalizado, Brindes Dia Das Mães, Brindes Dia Dos Pais, Brindes Dia Da Mulher, Brindes Para o Final Do Ano, Brindes Para Funcionários, Confecção Promocional`}
          canonical={`https://innovationbrindes.com.br/sucesso`}
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
        {this.state.loading ? (
          <Flex w="100%" h="100vh" justify="center" align="center">
            <img
              width={100}
              height={100}
              style={{ position: "relative", margin: "auto" }}
              alt="green-loading"
              src={loadingGif}
            />
          </Flex>
        ) : (
          <>
            <ContainerBox>
              {this.ifnull(this.props.hash_pedido, "") !== "" ? (
                this.state.itens_pedido?.length > 0 ? (
                  <>
                    {this.state.mobileView ? <MobileButton /> : <></>}
                    <ContainerTitle state={this.state} />
                    <ContainerDados state={this.state} />

                    <FlexContainerDesktopStatus mx="auto">
                      <ContainerStatus state={this.state} />
                    </FlexContainerDesktopStatus>

                    <FlexContainerMobileStatus>
                      <ContainerStatusMobile state={this.state} />
                    </FlexContainerMobileStatus>
                  </>
                ) : (
                  <ContainerSearchHash
                    cod_hash={this.state.hash_pedido}
                    getDadosAcompanharPedido={this.getDadosAcompanharPedido}
                  />
                )
              ) : (
                <ContainerSearchHash />
              )}
            </ContainerBox>
            <FooterComponent />
          </>
        )}
      </ChakraProvider>
    )
  }
}

export default AcompanheSeuPedido
