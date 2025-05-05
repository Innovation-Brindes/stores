import React, { useEffect, useState } from "react"
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel"
import "pure-react-carousel/dist/react-carousel.es.css"
import { BoxCardItemZoom, BoxCardsZoom, ContainerGrid, ControlSlider } from "./styles"
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons"
import { Flex, Grid, useMediaQuery } from "@chakra-ui/react"
import GridProdutoUltraRapido from "../GridProdutoUltraRapido"
import { GridProductDefault } from "../../../GridProductsDefault"
import { colorBaseUltraRapido } from "../FlexFiltroUltraRapido/styles"
import { useRouter } from "next/router"

const Index = (props) => {
  const [mobileView, setmobileView] = useState()
  const [sizeWidth1366px] = useMediaQuery("(max-width: 1366px)")

  var styles = {
    slider: {
      width: mobileView ? "200px" : sizeWidth1366px ? "900px" : "auto",
      position: "relative",
      height: mobileView ? "auto" : sizeWidth1366px ? "500px" : "640px",
      marginLeft: "auto",
      marginRight: "auto",
      zIndex: 99,
      border: "none",
      borderRadius: "5px",
      left: sizeWidth1366px ? "0" : "0",
    },
    slide: {
      left: sizeWidth1366px ? "0" : "0",
      height: mobileView ? "auto" : "640px",
    },
  }

  const router = useRouter()

  useEffect(() => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      setmobileView(true)
    } else {
      setmobileView(false)
    }
  }, [])

  return (
    <CarouselProvider
      naturalSlideWidth={100}
      style={{
        position: "relative",
        zIndex: "999",
        height: "700px",
        width: mobileView ? "400px" : sizeWidth1366px ? "1200px" : "1200px",
        margin: "0 auto",
      }}
      naturalSlideHeight={90}
      totalSlides={
        mobileView
          ? parseInt(props.state.produtos.length) / 1
          : sizeWidth1366px
          ? parseInt(props.state.produtos.length) / 5
          : parseInt(props.state.produtos.length) / 5
      }
      isIntrinsicHeight={"230px"}
      infinite={true}
    >
      <Slider style={styles.slider}>
        {mobileView
          ? Array.from(Array(props.state.produtos.length / 1).keys()).map((pos, id) => {
              return (
                <Slide style={styles.slide} index={id}>
                  <ContainerGrid gap={0}>
                    {props.state.produtos.map((data, idx) => {
                      if (idx >= id * 1 && idx < id * 1 + 1) {
                        return (
                          <GridProductDefault
                            isUltraRapido={props.isUltraRapido}
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
                            url_site={props.state.url_site}
                            selo_prod={data.selo_prod}
                            ad_pdv={data.pdv}
                            cores={data.cores}
                            estoque={data.estoque}
                            data_ultra_rapido={data.data_ultra_rapido}
                            state={props.state}
                          />
                        )
                      }
                    })}
                  </ContainerGrid>
                </Slide>
              )
            })
          : //: Array.from(Array(Math.ceil(props.state.produtos.length / 5)).keys()).map((pos, id) => {

            Array.from(Array(Math.ceil(props.state.produtos.length / 5)).keys()).map((pos, id) => {
              return (
                <Slide style={styles.slide} index={id}>
                  <ContainerGrid gap={3}>
                    {props.state.produtos.map((data, idx) => {
                      if (sizeWidth1366px) {
                        if (idx >= id * 4 && idx < id * 4 + 4) {
                          return (
                            <GridProductDefault
                              isUltraRapido={props.isUltraRapido}
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
                              url_site={props.state.url_site}
                              ad_pdv={data.pdv}
                              cores={data.cores}
                              selo_prod={data.selo_prod}
                              estoque={data.estoque}
                              state={props.state}
                              data_ultra_rapido={data.data_ultra_rapido}
                            />
                          )
                        }
                      } else {
                        if (idx >= id * 5 && idx < id * 5 + 5) {
                          return (
                            <GridProductDefault
                              isUltraRapido={props.isUltraRapido}
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
                              url_site={props.state.url_site}
                              ad_pdv={data.pdv}
                              cores={data.cores}
                              selo_prod={data.selo_prod}
                              estoque={data.estoque}
                              state={props.state}
                              data_ultra_rapido={data.data_ultra_rapido}
                            />
                          )
                        }
                      }
                    })}
                  </ContainerGrid>
                </Slide>
              )
            })}
      </Slider>

      {/*<Slider style={styles.slider}>*/}
      {/*  <Flex gap={3}>*/}
      {/*    {props.state.produtos.map((data, idx) => {*/}
      {/*      return (*/}
      {/*        <GridProductDefault*/}
      {/*          isUltraRapido={props.isUltraRapido}*/}
      {/*          prod_nome={data.prod_nome}*/}
      {/*          codigo_prod={data.prod_cod}*/}
      {/*          url_prod={data.url_prod}*/}
      {/*           img_prod={data.imagem_home_store}*/}
      {/*          descricao={data.descricao}*/}
      {/*          caracteristicas={data.caracteristicas}*/}
      {/*          valor_home={data.valor_home}*/}
      {/*          selo={data.selo}*/}
      {/*          segmento={data.segmento}*/}
      {/*          ultrarapido={data.ultrarapido}*/}
      {/*          url_site={props.state.url_site}*/}
      {/*          ad_pdv={data.pdv}*/}
      {/*          cores={data.cores}*/}
      {/*          selo_prod={data.selo_prod}*/}
      {/*          estoque={data.estoque}*/}
      {/*          state={props.state}*/}
      {/*          data_ultra_rapido={data.data_ultra_rapido}*/}
      {/*        />*/}
      {/*      )*/}
      {/*    })}*/}
      {/*  </Flex>*/}
      {/*</Slider>*/}

      {/* <ControlSlider> */}
      <ButtonBack
        style={{
          top: sizeWidth1366px ? "30%" : "35%",
          left: mobileView ? "10%" : sizeWidth1366px ? "7%" : "0%",
          position: "absolute",
          zIndex: 999,
        }}
      >
        <ChevronLeftIcon
          color={colorBaseUltraRapido}
          _hover={{ transform: "scale(1.3,1.3)", transition: "all ease 0.2s" }}
          _active={{ transform: "scale(0.9,0.9)", transition: "all ease 0.2s" }}
          transition="all ease 0.2s"
          fontSize={"50px"}
          fontWeight={100}
        />
      </ButtonBack>
      <ButtonNext
        style={{
          top: sizeWidth1366px ? "30%" : "35%",
          left: mobileView ? "78%" : sizeWidth1366px ? "88.9%" : "96%",
          position: "absolute",
          zIndex: 999,
        }}
      >
        <ChevronRightIcon
          color={colorBaseUltraRapido}
          _hover={{ transform: "scale(1.3,1.3)", transition: "all ease 0.2s" }}
          _active={{ transform: "scale(0.9,0.9)", transition: "all ease 0.2s" }}
          transition="all ease 0.2s"
          fontSize={"50px"}
          fontWeight={100}
        />
      </ButtonNext>
      {/* </ControlSlider> */}
    </CarouselProvider>
  )
}

export default Index
