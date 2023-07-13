import { Box, ChakraProvider, Text, Image, Flex } from "@chakra-ui/react"
import FlexFiltroUltraRapido from "./component/FlexFiltroUltraRapido"
import SlideProductUltraRapido from "./component/SlideProductUltraRapido"
import React, { Component } from "react"
import Footer from "../Footer"
import { dadosProdutosUltraRapidoRandom } from "../../services/api"
import { TextUltraRapido2, TextUltraRapido3, TextUltraRapido, FlexContainer, ContainerFlexUtilize } from "./styles"
import { colorBaseUltraRapido } from "./component/FlexFiltroUltraRapido/styles"
import { NextSeo } from "next-seo"

const loading = "/images/loading.gif"
const lupa = "/images/menu/lupa-busca.png"

class UltraRapido extends Component {
  constructor(props) {
    super(props)

    this.state = {
      subcategorias: this.props.subcategorias,
      produtos: this.props.produtos,
      cores: [],
      dados: [],
      texto_buscado: null,
      categorias_selecionadas: [],
      cor_selecionadas: [],
      quantidade_selecionada: null,
      loadingProd: "block",
      url_site: null,
      openChat: false,
      paginacao: 1,
      cont: 1,
      display_init: 0,
      firstLoading: false,
      sortBanner: 0,
      mobileView: false,
      scrollY: 0,
      bgSegmento: null,
      segmento: this.props.idsegmento,
      total_paginacao: [],
    }
    this.ifnull()
  }

  componentDidMount() {
    var self = this
    setTimeout(function () {
      self.setState({ display_init: 1 })
    }, 1000)

    window.addEventListener("scroll", function () {
      self.setState({ scrollY: window.scrollY })
    })

    this.setState({ sortBanner: Math.floor(Math.random() * 3) })

    window.scrollTo(0, 0)

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
      <>
        <NextSeo
          title="Pronto em 1 dia"
          description="Inicio, Brindes, Brindes Personalizados, Brindes Promocionais, Brindes Corporativos, Brindes Ecológicos, Personalizados, Innovation Brindes"
          keywords="Inicio, Brindes, Brindes Personalizados, Personalizados, Brindes Promocionais, Promocionais, Empresa de Brindes, Brindes Corporativos, Chaveiros Personalizados, Squeeze Personalizado, Canetas Personalizadas, Canetas Para Brindes, Caneta Personalizada, Canetas Promocionais, Produtos Promocionais, Brindes Para Eventos, Carregador Celular Personalizado, Power Bank Personalizado, Espelho Personalizado, Brindes Dia Das Mães, Brindes Dia Dos Pais, Brindes Dia Da Mulher, Brindes Para o Final Do Ano, Brindes Para Funcionários, Confecção Promocional"
          canonical="https://innovationbrindes.com.br/"
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
        <ChakraProvider>
          <Box style={{ opacity: this.state.display_init, transition: "0.3s" }} color="#494949" w="100%" h="100vh">
            <Image
              maxWidth="1900px"
              mx={this.state.mobileView ? "auto" : "auto"}
              h={this.state.mobileView ? "auto" : "auto"}
              w={this.state.mobileView ? "100vw" : "100%"}
              objectFit="cover"
              src={
                this.state.mobileView
                  ? `https://homolog.innovationbrindes.com.br/images/banners/banner-ultra-rapido/banner-ultra-rapido-mobile-${this.state.sortBanner}.png`
                  : `https://homolog.innovationbrindes.com.br/images/banners/banner-ultra-rapido/banner-ultra-rapido-${this.state.sortBanner}.png`
              }
              alt="banner-ultra-rapido"
            />
            <ContainerFlexUtilize>
              <Text color={colorBaseUltraRapido} fontSize="22px" fontFamily="Helvetica Neue LT Std bold">
                Utilize o filtro de pesquisa abaixo
              </Text>
              <Text color="#494949" ml="5px" fontSize="22px" fontFamily="Helvetica Neue LT Std bold">
                e encontre o brinde desejado com a agilidade que procura!
              </Text>
            </ContainerFlexUtilize>

            <FlexFiltroUltraRapido subcategorias={this.state.subcategorias} />

            <Text
              position="relative"
              mt="-20px"
              ml="15px"
              fontSize={this.state.mobileView ? "10px" : "12px"}
              color="gray"
              textAlign="center"
              fontFamily="Helvetica Neue LT Std"
            >
              *Para pedido aprovados até as 14hrs, de segunda a quinta (exceto feriados). Retirada após as 8h30.
            </Text>

            {/* <Image h='380px' w='1240px' mx='auto' mt='70px' alt='banner little fast' src='/images/banners/banner-ultra-rapido/banner-rapidinho.jpg' /> */}

            <Flex h="80px" mt="-10px" align="center" justify="center">
              <Box borderBottom="1px solid #d4d4d4" w="90%" />
              <Image
                position="absolute"
                float="center"
                h="60px"
                mt="20px"
                w="304px"
                mx="auto"
                alt="rapidinho"
                src="/images/banners/banner-ultra-rapido/rapidinho.png"
              />
            </Flex>

            <SlideProductUltraRapido isUltraRapido={true} state={this.state} />

            <Footer isUltraRapido={true} />
          </Box>
        </ChakraProvider>
      </>
    )
  }
}

export default UltraRapido
