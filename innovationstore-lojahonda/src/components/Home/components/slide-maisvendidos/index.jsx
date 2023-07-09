import React from "react"
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel"
import "pure-react-carousel/dist/react-carousel.es.css"
import {
  BoxCards,
  HomeContentBodyCategoriasGridItemTextSlideVendido,
  HomeContentBodyCategoriasGridItemImageSlideVendido,
} from "./styles"
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons"
import Link from "next/link"
import { Box } from "@chakra-ui/react"

const b1 = "http://innovationbrindes.com.br/teste-imagens/camisetas.jpg"
const b2 = "http://innovationbrindes.com.br/teste-imagens/ecologica.jpg"
const b3 = "http://innovationbrindes.com.br/teste-imagens/fim_de_ano.jpg"
const b4 = "http://innovationbrindes.com.br/teste-imagens/garrafas.jpg"
// const b1 = "/images/home/box-categoria/camisetas.jpg";
// const b2 = "/images/home/box-categoria/ecologica.jpg";
// const b3 = "/images/home/box-categoria/fim_de_ano.jpg";
// const b4 = "/images/home/box-categoria/garrafas.jpg";

export const SlideMaisVendidos = () => {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      isIntrinsicHeight={"230px"}
      naturalSlideHeight={"230px"}
      totalSlides={5}
      infinite={true}
    >
      <Slider style={{ width: "400px", height: "300px", margin: "0 auto 0 auto" }}>
        <Slide index={0}>
          <BoxCards>
            <Link href={"/copo-termico-500ml-com-abridor-brindes-10151373687"} passHref>
              <a target="_blank" style={{ textDecoration: "none" }}>
                <Box>
                  <HomeContentBodyCategoriasGridItemTextSlideVendido textAlign="center" color="black" as="h1" />
                  <HomeContentBodyCategoriasGridItemImageSlideVendido src={"/images/bghome/copo-termico.jpg"} />
                </Box>
              </a>
            </Link>
          </BoxCards>
        </Slide>
        <Slide index={1}>
          <BoxCards>
            <Link href={"/segmento/ecologico/13"} passHref>
              <a target="_blank" style={{ textDecoration: "none" }}>
                <Box>
                  <HomeContentBodyCategoriasGridItemTextSlideVendido textAlign="center" color="black" as="h1" />
                  <HomeContentBodyCategoriasGridItemImageSlideVendido src={b2} />
                </Box>
              </a>
            </Link>
          </BoxCards>
        </Slide>
        <Slide index={2}>
          <BoxCards>
            <Link href={"/segmento/final-de-ano/4"} passHref>
              <a target="_blank" style={{ textDecoration: "none" }}>
                <HomeContentBodyCategoriasGridItemTextSlideVendido textAlign="center" color="black" as="h1" />
                <HomeContentBodyCategoriasGridItemImageSlideVendido src={b3} />
              </a>
            </Link>
          </BoxCards>
        </Slide>
        <Slide index={3}>
          <BoxCards>
            <Link href={"/categoria/squeeze-personalizado-para-brindes/1015092"} passHref>
              <a target="_blank" style={{ textDecoration: "none" }}>
                <HomeContentBodyCategoriasGridItemTextSlideVendido textAlign="center" color="black" as="h1" />
                <HomeContentBodyCategoriasGridItemImageSlideVendido src={b4} />
              </a>
            </Link>
          </BoxCards>
        </Slide>
        <Slide index={4}>
          <BoxCards>
            <Link href={"/bloco-plastico-anotacoes-brindes-promocional-10160614610"}>
              <a target="_blank" style={{ textDecoration: "none" }}>
                <HomeContentBodyCategoriasGridItemTextSlideVendido textAlign="center" color="black" as="h1" />
                <HomeContentBodyCategoriasGridItemImageSlideVendido src={"/images/bghome/bloco-anotacoes.jpg"} />
              </a>
            </Link>
          </BoxCards>
        </Slide>
      </Slider>

      <ButtonBack
        style={{
          width: "50px",
          height: "50px",
          top: "45%",
          right: "85%",
          position: "absolute",
          borderRadius: "50%",
          backgroundColor: "transparent",
          boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
        }}
      >
        <ChevronLeftIcon fontSize={"50px"} color="black" marginRight="5px" zIndex={999} />
      </ButtonBack>
      <ButtonNext
        style={{
          width: "50px",
          height: "50px",
          top: "45%",
          left: "98%",
          position: "absolute",
          borderRadius: "50%",
          backgroundColor: "transparent",
          boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
        }}
      >
        <ChevronRightIcon fontSize={"50px"} color="black" marginLeft="3px" zIndex={999} />
      </ButtonNext>
    </CarouselProvider>
  )
}
