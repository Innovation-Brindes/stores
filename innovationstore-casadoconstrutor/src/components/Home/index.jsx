import React, { Component } from "react"
import { NextSeo } from "next-seo"
import Head from "next/head"
// import loading from "../resources/images/loading.gif";

import {
  HomeContainer,
  HomeContent,
  HomeContentBody,
  InnovationSiteHomeContentMobile,
  HomeContentBodyTitle,
  HomeContentBodyCategorias,
  HomeContentBodyCategoriasGrid,
  HomeContentBodyCategoriasPromocao,
  HomeContentBodyCategoriasGridItem,
  HomeContentBodySlideCategorias,
  HomeContentBodyBanner,
  HomeContentBodyInfo,
  HomeContentBodyInfoCard,
  HomeContentBodyInfoCardHeader,
  HomeContentBodyInfoCardBody,
  CarouselCategoriasMobile,
  CarouselInfoMobile,
  BotaoFecharRecesso,
  ImageFecharRecesso,
  ProductImageContent,
  ImageContent,
} from "./styles"

import Footer from "../Footer"
import HeaderComponents from "../Header"
import HomeFilter from "./components"
import ItemPromocao from "../../widgets/promocao-produto"
import SlideCategoria from "./slide-categoria"
import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider } from "pure-react-carousel"
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons"
import { Box, Button, Flex, Text } from "@chakra-ui/react"
import { SlideMaisVendidos } from "./components/slide-maisvendidos"
import Link from "next/link"
import BannerChaveiro from "./components/BannerChaveiro"
import { ProductImage } from "./ProductImage"
import Image from "next/image"

// const imgrecesso = "/images/banners/recesso.png";

const bannerdireito = "/images/setadireita.png"
const banneresquerdo = "/images/setaesquerda.png"
const banner_busca = "/images/banners/busca-detalhada.png"
const loading = "/images/loading.gif"

const osMaisVendidos = "https://imgproductioncrm.s3.us-east-2.amazonaws.com/tagsos-mais-vendidos.png"
const nossasCategorias = "https://imgproductioncrm.s3.us-east-2.amazonaws.com/tagsnossas-categorias.png"
const confiraTambem = "https://imgproductioncrm.s3.us-east-2.amazonaws.com/tagsconfira-tambem.png"
const ultraRapido = "https://imgproductioncrm.s3.us-east-2.amazonaws.com/tagsultra-rapido.png"
const precoOnline = "https://imgproductioncrm.s3.us-east-2.amazonaws.com/tagspre%C3%A7o-online.png"
const tamanhoNegocio = "https://imgproductioncrm.s3.us-east-2.amazonaws.com/tagsdo-tamanho.png"

const bannerInfo1 = "https://imgproductioncrm.s3.us-east-2.amazonaws.com/banner-info-1.png"
const bannerInfo2 = "https://imgproductioncrm.s3.us-east-2.amazonaws.com/banner-info-2.png"
const bannerInfo3 = "https://imgproductioncrm.s3.us-east-2.amazonaws.com/banner-info-3.png"

const bannerRecesso = "/images/home/banner-recesso.jpg"
// const banneranimado = "/images/home/banner-animado.png";

const b1 = "http://innovationbrindes.com.br/teste-imagens/camisetas.jpg"
const b2 = "http://innovationbrindes.com.br/teste-imagens/ecologica.jpg"
const b3 = "http://innovationbrindes.com.br/teste-imagens/fim_de_ano.jpg"
const b4 = "http://innovationbrindes.com.br/teste-imagens/garrafas.jpg"
const diaDasMaes = "https://innovationbrindes.com.br/images/banners/diadasmaes.jpg"
const blocoAnotacoes = "https://innovationbrindes.com.br/images/banners/blocoanotacoes.jpg"
const umdia = "https://innovationbrindes.com.br/images/banners/1dia.gif"

// const b1 = "/images/home/box-categoria/camisetas.jpg";
// const b2 = "/images/home/box-categoria/ecologica.jpg";
// const b3 = "/images/home/box-categoria/fim_de_ano.jpg";
// const b4 = "/images/home/box-categoria/garrafas.jpg";

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dados: this.props.produtos,
      categorias: this.props.categorias,
      subcategorias: this.props.subcategorias,
      faixadepreco: [],
      corcategoria: [],
      segmentos: [],
      menu_categorias: [],
      valor_de: null,
      valor_ate: null,

      categoria_selecionada: null,
      faixa_preco_selecionada: null,
      quantidade_selecionada: null,
      cor_selecionada: null,
      aviso_recesso: true,
      loadingProd: "block",
      display_init: 0,
      banner_recesso: true,
      effectClose: false,
      noteView: false,
      mobileView: false,
    }
  }

  //teste
  componentDidMount() {
    this.setState({ loadingProd: "none" })

    if (window.matchMedia("(max-width: 1366px)").matches) {
      this.setState({ noteView: true })
    } else {
      this.setState({ noteView: false })
    }

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      this.setState({ mobileView: true })
    } else {
      this.setState({ mobileView: false })
    }

    localStorage.removeItem("dados-carregados-busca")
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

  fecharBannerRecesso = () => {
    this.setState({ effectClose: true })
    setTimeout(() => {
      this.setState({ banner_recesso: false })
    }, 50)
  }

  handleOrderBy = async (e) => {
    if (e.target.options.selectedIndex == 1) {
      this.state.dados.sort(function (a, b) {
        var valor_a = parseFloat(a.valor_home)
        var valor_b = parseFloat(b.valor_home)
        if (valor_a < valor_b) {
          return -1
        } else if (valor_a > valor_b) {
          return 1
        }
        return 0
      })
    } else {
      this.state.dados.sort(function (a, b) {
        var valor_a = parseFloat(a.valor_home)
        var valor_b = parseFloat(b.valor_home)
        if (valor_a < valor_b) {
          return 1
        } else if (valor_a > valor_b) {
          return -1
        }
        return 0
      })
    }
    var dados = this.state.dados
    this.setState({ dados: dados })
  }

  titleize(text) {
    var words = text.toLowerCase().split(" ")
    for (var a = 0; a < words.length; a++) {
      var w = words[a]
      words[a] = w[0].toUpperCase() + w.slice(1)
    }
    return words.join(" ")
  }

  render() {
    return (
      <>
        <Head>
          {/* <link rel="alternate" href="https://innovationbrindes.com.br" hreflang="pt"/> */}

          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PXQHD6F')`,
            }}
          ></script>

          <script
            src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
            integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
            crossorigin="anonymous"
          ></script>

          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/css/bootstrap-select.min.css"
          />

          <script src="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/js/bootstrap-select.min.js"></script>
        </Head>
        <NextSeo
          title="Innovation Brindes a maior empresa de Brindes Personalizados Promocionais"
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

        <>
          <HomeContainer>
            <InnovationSiteHomeContentMobile>
              <HomeFilter subcategorias={this.props.subcategorias} />

              <ItemPromocao />
              <HomeContentBodyTitle>
                <img alt="o-mais-vendido" src={osMaisVendidos} />
              </HomeContentBodyTitle>

              <Box w="390px" h="370px" mx="auto">
                <SlideMaisVendidos />
              </Box>

              <HomeContentBodyTitle>
                <img alt="confira-tambem" src={confiraTambem} style={{ position: "relative", marginTop: "-60px" }} />
              </HomeContentBodyTitle>

              <CarouselCategoriasMobile>
                <SlideCategoria isMobile={true} />
              </CarouselCategoriasMobile>

              <CarouselInfoMobile>
                <CarouselProvider
                  naturalSlideWidth={80}
                  isIntrinsicHeight={"230px"}
                  naturalSlideHeight={"230px"}
                  totalSlides={3}
                >
                  <Slider>
                    <Slide index={0}>
                      <HomeContentBodyInfoCard>
                        <HomeContentBodyInfoCardHeader>
                          <img alt="ultra-rapido" src={ultraRapido} />
                        </HomeContentBodyInfoCardHeader>
                        <HomeContentBodyInfoCardBody>
                          <img alt="banner-info-1" src={bannerInfo1} />
                          <h1>Brindes ultra-rápidos!</h1>
                          <p>
                            Para quem precisa de <br />
                            agilidade: diversos itens prontos para <strong> retirada em até 48 horas.</strong>
                          </p>
                        </HomeContentBodyInfoCardBody>
                      </HomeContentBodyInfoCard>
                    </Slide>

                    <Slide index={1}>
                      <HomeContentBodyInfoCard>
                        <HomeContentBodyInfoCardHeader>
                          <img alt="preco-online" src={precoOnline} />
                        </HomeContentBodyInfoCardHeader>
                        <HomeContentBodyInfoCardBody>
                          <img alt="banner-info-2" src={bannerInfo2} />
                          <h1>
                            Preço e estoque
                            <br />
                            em tempo real
                          </h1>
                          <p>
                            Evite perder horas
                            <br />
                            aguardando cotações. Assim sobrando mais tempo para escolher melhor o seu brinde.
                          </p>
                        </HomeContentBodyInfoCardBody>
                      </HomeContentBodyInfoCard>
                    </Slide>

                    <Slide index={2}>
                      <HomeContentBodyInfoCard>
                        <HomeContentBodyInfoCardHeader>
                          <img alt="tamanho-negocio" src={tamanhoNegocio} />
                        </HomeContentBodyInfoCardHeader>
                        <HomeContentBodyInfoCardBody>
                          <img alt="banner-info-3" src={bannerInfo3} />
                          <h1 style={{ textAlign: "left", height: "80px" }}>
                            Não importa se a sua
                            <br />
                            empresa é muito
                            <br />
                            grande ou pequena,
                          </h1>
                          <p>Brindes disponíveis a partir de pequenas quantidades.</p>
                        </HomeContentBodyInfoCardBody>
                      </HomeContentBodyInfoCard>
                    </Slide>
                  </Slider>
                  <ButtonBack
                    style={{
                      width: "40px",
                      height: "100%",
                      top: "0px",
                      right: "90%",
                      position: "absolute",
                    }}
                  >
                    <ChevronLeftIcon fontSize={20} />
                  </ButtonBack>
                  <ButtonNext
                    style={{
                      width: "40px",
                      height: "100%",
                      top: "0px",
                      left: "88%",
                      position: "absolute",
                    }}
                  >
                    <ChevronRightIcon fontSize={20} />
                  </ButtonNext>
                </CarouselProvider>
              </CarouselInfoMobile>
            </InnovationSiteHomeContentMobile>

            <HomeContent>
              <HomeFilter subcategorias={this.props.subcategorias} />

              <HomeContentBody>
                {/* <BannerChaveiro /> */}
                <HomeContentBodyTitle>
                  <img alt="o-mais-vendido" src={osMaisVendidos} />
                </HomeContentBodyTitle>
                <HomeContentBodyCategorias>
                  <HomeContentBodyCategoriasGrid>
                    {/* https://innovationbrindes.com.br/copo-termico-500ml-com-abridor-brindes-10151373687 */}
                    <Link href={"/casadoconstrutor/mochila-saco-brindes-10321463723"} passHref>
                      <ImageContent>
                        <Image
                          src="https://imgproductioncrm.s3.us-east-2.amazonaws.com/banner-honda-1.png"
                          objectFit={"fill"}
                          alt="Copo térmico 500ml com abridor"
                          width={370}
                          height={300}
                        />
                      </ImageContent>
                    </Link>
                    <Link href={"/casadoconstrutor/bloco-de-anotacao-brindes-10160613761"} passHref>
                      <ImageContent>
                        <Image
                          src="https://imgproductioncrm.s3.us-east-2.amazonaws.com/banner-honda-4.png"
                          objectFit={"fill"}
                          alt="Copo térmico 500ml com abridor"
                          width={370}
                          height={300}
                        />
                      </ImageContent>
                    </Link>
                    <Link href={"/casadoconstrutor/garrafa-termica-metal-brindes-personalizados-10150592632"} passHref>
                      <ImageContent>
                        <Image
                          src="https://imgproductioncrm.s3.us-east-2.amazonaws.com/banner-honda-3.png"
                          objectFit={"fill"}
                          alt="Copo térmico 500ml com abridor"
                          width={370}
                          height={300}
                        />
                      </ImageContent>
                    </Link>
                    <Link href={"/casadoconstrutor/copo-termico-500ml-com-abridor-brindes-10151373687"} passHref>
                      <ImageContent>
                        <Image
                          src="https://imgproductioncrm.s3.us-east-2.amazonaws.com/banner-honda-2.png"
                          objectFit={"fill"}
                          alt="Copo térmico 500ml com abridor"
                          width={370}
                          height={300}
                        />
                      </ImageContent>
                    </Link>
                  </HomeContentBodyCategoriasGrid>

                  {/*<ItemPromocao />*/}
                  <Link href={"/casadoconstrutor/ultra-rapido"}>
                    <ImageContent>
                      <Image
                        src="https://imgproductioncrm.s3.us-east-2.amazonaws.com/48%20hrs.png"
                        alt="1dia"
                        objectFit={"cover"}
                        width={388}
                        height={668}
                      />
                    </ImageContent>
                  </Link>
                </HomeContentBodyCategorias>
                <HomeContentBodyTitle>
                  <Image
                    alt="nossas-categorias"
                    src={nossasCategorias}
                    style={{ position: "relative", top: "45px" }}
                    width={300}
                    height={50}
                  />
                </HomeContentBodyTitle>
                <HomeContentBodySlideCategorias>
                  <SlideCategoria />
                </HomeContentBodySlideCategorias>
                <HomeContentBodyTitle style={{ marginTop: "25px" }}>
                  <Image alt="confira-tambem" src={confiraTambem} width={300} height={50} />
                </HomeContentBodyTitle>
                <HomeContentBodyBanner>
                  <ImageContent>
                    <Image
                      src="https://imgproductioncrm.s3.us-east-2.amazonaws.com/banner-rodape.jpg"
                      width={1044}
                      height={300}
                    />
                  </ImageContent>
                </HomeContentBodyBanner>
                <HomeContentBodyInfo>
                  <HomeContentBodyInfoCard>
                    <HomeContentBodyInfoCardHeader>
                      <Image alt="ultra-rapido" src={ultraRapido} width={300} height={50} />
                    </HomeContentBodyInfoCardHeader>
                    <HomeContentBodyInfoCardBody>
                      <img alt="banner-info-1" src={bannerInfo1} />
                      <h1>Brindes ultra-rápidos!</h1>
                      <p>
                        Para quem precisa de agilidade: <br /> diversos itens prontos para{" "}
                        <strong> retirada em até 48 horas.</strong>
                      </p>
                    </HomeContentBodyInfoCardBody>
                  </HomeContentBodyInfoCard>

                  <HomeContentBodyInfoCard>
                    <HomeContentBodyInfoCardHeader>
                      <img alt="preco-online" src={precoOnline} />
                    </HomeContentBodyInfoCardHeader>
                    <HomeContentBodyInfoCardBody>
                      <img alt="banner-info-2" src={bannerInfo2} />
                      <h1>
                        Preço e estoque
                        <br />
                        em tempo real
                      </h1>
                      <p>
                        Evite perder horas aguardando <br /> cotações. Assim sobrando mais <br /> tempo para escolher
                        melhor o seu brinde.
                      </p>
                    </HomeContentBodyInfoCardBody>
                  </HomeContentBodyInfoCard>

                  <HomeContentBodyInfoCard>
                    <HomeContentBodyInfoCardHeader>
                      <img alt="tamanho-negocio" src={tamanhoNegocio} />
                    </HomeContentBodyInfoCardHeader>
                    <HomeContentBodyInfoCardBody>
                      <img alt="banner-info-3" src={bannerInfo3} />
                      <h1>
                        Não importa se a sua
                        <br />
                        empresa é muito
                        <br />
                        grande ou pequena,
                      </h1>
                      <p>Brindes disponíveis a partir de pequenas quantidades.</p>
                    </HomeContentBodyInfoCardBody>
                  </HomeContentBodyInfoCard>
                </HomeContentBodyInfo>
              </HomeContentBody>
            </HomeContent>
            <Footer />
          </HomeContainer>
        </>
      </>
    )
    // }
  }
}

export default Home
