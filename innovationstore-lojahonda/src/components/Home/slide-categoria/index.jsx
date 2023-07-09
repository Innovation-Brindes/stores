import React from "react"
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel"
import "pure-react-carousel/dist/react-carousel.es.css"
import { BoxCardItem, BoxCards } from "./styles"
import { height } from "@mui/system"
import { ArrowLeftIcon, ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons"
import Link from "next/link"

const box1 = "https://imgproductioncrm.s3.us-east-2.amazonaws.com/box-1.png"
const box2 = "https://imgproductioncrm.s3.us-east-2.amazonaws.com/box-2.png"
const box3 = "https://imgproductioncrm.s3.us-east-2.amazonaws.com/box-3.png"
const box4 = "https://imgproductioncrm.s3.us-east-2.amazonaws.com/box-4.png"
const box5 = "https://imgproductioncrm.s3.us-east-2.amazonaws.com/box-5.png"
const box6 = "https://imgproductioncrm.s3.us-east-2.amazonaws.com/box-6.png"
const box7 = "https://imgproductioncrm.s3.us-east-2.amazonaws.com/box-7.png"
const box8 = "https://imgproductioncrm.s3.us-east-2.amazonaws.com/box-8.png"
const box9 = "https://imgproductioncrm.s3.us-east-2.amazonaws.com/box-9.png"
const box10 = "https://imgproductioncrm.s3.us-east-2.amazonaws.com/box-10.png"
const box11 = "https://imgproductioncrm.s3.us-east-2.amazonaws.com/box-11.png"
const box12 = "https://imgproductioncrm.s3.us-east-2.amazonaws.com/box-12.png"
const box13 = "https://imgproductioncrm.s3.us-east-2.amazonaws.com/box-13.png"
const box14 = "https://imgproductioncrm.s3.us-east-2.amazonaws.com/box-14.png"
const box15 = "https://imgproductioncrm.s3.us-east-2.amazonaws.com/box-15.png"
const box16 = "https://imgproductioncrm.s3.us-east-2.amazonaws.com/box-16.png"
const box17 = "https://imgproductioncrm.s3.us-east-2.amazonaws.com/box-17.png"
const box18 = "https://imgproductioncrm.s3.us-east-2.amazonaws.com/box-18.png"
const box19 = "https://imgproductioncrm.s3.us-east-2.amazonaws.com/box-19.png"
const box20 = "https://imgproductioncrm.s3.us-east-2.amazonaws.com/box-20.png"
const box21 = "https://imgproductioncrm.s3.us-east-2.amazonaws.com/box-21.png"

export default function SlideCategoria({ isMobile = false }) {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      isIntrinsicHeight={"230px"}
      naturalSlideHeight={"230px"}
      totalSlides={!isMobile ? 3 : 7}
      infinite={true}
    >
      {!isMobile ? (
        <Slider>
          <Slide index={0}>
            <BoxCards>
              <Link target href="/categoria/kit-churrasco-personalizado-para-brindes/1020073" passHref>
                <BoxCardItem target="_blank" bgimg={box1} />
              </Link>
              <Link href="/categoria/squeeze-personalizado-para-brindes/1015092" passHref>
                <BoxCardItem target="_blank" bgimg={box2} />
              </Link>
              <Link href="/categoria/mochilas-personalizadas-para-brindes/1032146" passHref>
                <BoxCardItem target="_blank" bgimg={box3} />
              </Link>
              <Link href="/categoria/mala-de-viagem-personalizada-para-brindes/1032144" passHref>
                <BoxCardItem target="_blank" bgimg={box4} />
              </Link>
              <Link href="/categoria/chaveiro-personalizado-para-brindes/1018109" passHref>
                <BoxCardItem target="_blank" bgimg={box5} />
              </Link>
              <Link href="/categoria/caneta-de-metal-personalizada-para-brindes/1023104" passHref>
                <BoxCardItem target="_blank" bgimg={box6} />
              </Link>
              <Link href="/categoria/caixa-de-som-personalizada-para-brindes/1012054" passHref>
                <BoxCardItem target="_blank" bgimg={box7} />
              </Link>
            </BoxCards>
          </Slide>
          <Slide index={1}>
            <BoxCards>
              <Link href="/categoria/necessaire-personalizada-para-brindes/1017130" passHref>
                <BoxCardItem target="_blank" bgimg={box8} />
              </Link>
              <Link href="/categoria/garrafas-termicas-personalizadas-para-brindes/1015059" passHref>
                <BoxCardItem target="_blank" bgimg={box9} />
              </Link>
              <Link href="/categoria/guarda-chuva-personalizado-para-brindes/1034147" passHref>
                <BoxCardItem target="_blank" bgimg={box10} />
              </Link>
              <Link href="/categoria/cozinha-diversos-personalizados-para-brindes/1014058" passHref>
                <BoxCardItem target="_blank" bgimg={box11} />
              </Link>
              <Link href="/categoria/kit-queijo-personalizado-para-brindes/1020072" passHref>
                <BoxCardItem target="_blank" bgimg={box12} />
              </Link>
              <Link href="/categoria/mouse-personalizado-para-brindes/1012130" passHref>
                <BoxCardItem target="_blank" bgimg={box13} />
              </Link>
              <Link href="/categoria/caneta-plastica-brindes-personalizados/1023103" passHref>
                <BoxCardItem target="_blank" bgimg={box14} />
              </Link>
            </BoxCards>
          </Slide>
          <Slide index={2}>
            <BoxCards>
              <BoxCardItem
                target="_blank"
                bgimg={box15}
                href="/categoria/caneta-ecologica-personalizada-para-brindes/1023110"
              />
              <BoxCardItem
                target="_blank"
                bgimg={box16}
                href="/categoria/kit-vinho-personalizado-para-brindes/1020070"
              />
              <BoxCardItem
                target="_blank"
                bgimg={box17}
                href="/categoria/pen-drive-personalizado-para-brindes/1012132"
              />
              <BoxCardItem
                target="_blank"
                bgimg={box18}
                href="/categoria/power-bank-personalizado-para-brindes/1012053"
              />
              <BoxCardItem
                target="_blank"
                bgimg={box19}
                href="/categoria/kit-ferramentas-personalizado-para-brindes/1019068"
              />
              <BoxCardItem
                target="_blank"
                bgimg={box20}
                href="/categoria/tabua-de-madeira-personalizada-para-brindes/1014121"
              />
              <BoxCardItem target="_blank" bgimg={box21} href="/categoria/bolsas-personalizadas-para-brindes/1017129" />
            </BoxCards>
          </Slide>
        </Slider>
      ) : (
        <Slider>
          <Slide index={0}>
            <BoxCards>
              <BoxCardItem
                target="_blank"
                bgimg={box1}
                href="/categoria/kit-churrasco-personalizado-para-brindes/1020073"
              />
              <BoxCardItem target="_blank" bgimg={box2} href="/categoria/squeeze-personalizado-para-brindes/1015092" />
              <BoxCardItem
                target="_blank"
                bgimg={box3}
                href="/categoria/mochilas-personalizadas-para-brindes/1032146"
              />
            </BoxCards>
          </Slide>
          <Slide index={1}>
            <BoxCards>
              <BoxCardItem
                target="_blank"
                bgimg={box4}
                href="/categoria/mala-de-viagem-personalizada-para-brindes/1032144"
              />
              <BoxCardItem target="_blank" bgimg={box5} href="/categoria/chaveiro-personalizado-para-brindes/1018109" />
              <BoxCardItem
                target="_blank"
                bgimg={box6}
                href="/categoria/caneta-de-metal-personalizada-para-brindes/1023104"
              />
            </BoxCards>
          </Slide>
          <Slide index={2}>
            <BoxCards>
              <BoxCardItem
                target="_blank"
                bgimg={box7}
                href="/categoria/caixa-de-som-personalizada-para-brindes/1012054"
              />
              <BoxCardItem
                target="_blank"
                bgimg={box8}
                href="/categoria/necessaire-personalizada-para-brindes/1017130"
              />
              <BoxCardItem
                target="_blank"
                bgimg={box9}
                href="/categoria/garrafas-termicas-personalizadas-para-brindes/1015059"
              />
            </BoxCards>
          </Slide>
          <Slide index={3}>
            <BoxCards>
              <BoxCardItem
                target="_blank"
                bgimg={box10}
                href="/categoria/guarda-chuva-personalizado-para-brindes/1034147"
              />
              <BoxCardItem
                target="_blank"
                bgimg={box11}
                href="/categoria/cozinha-diversos-personalizados-para-brindes/1014058"
              />
              <BoxCardItem
                target="_blank"
                bgimg={box12}
                href="/categoria/kit-queijo-personalizado-para-brindes/1020072"
              />
            </BoxCards>
          </Slide>
          <Slide index={4}>
            <BoxCards>
              <BoxCardItem target="_blank" bgimg={box13} href="/categoria/mouse-personalizado-para-brindes/1012130" />
              <BoxCardItem
                target="_blank"
                bgimg={box14}
                href="/categoria/caneta-plastica-brindes-personalizados/1023103"
              />
              <BoxCardItem
                target="_blank"
                bgimg={box15}
                href="/categoria/caneta-ecologica-personalizada-para-brindes/1023110"
              />
            </BoxCards>
          </Slide>
          <Slide index={5}>
            <BoxCards>
              <BoxCardItem
                target="_blank"
                bgimg={box16}
                href="/categoria/kit-vinho-personalizado-para-brindes/1020070"
              />
              <BoxCardItem
                target="_blank"
                bgimg={box17}
                href="/categoria/pen-drive-personalizado-para-brindes/1012132"
              />
              <BoxCardItem
                target="_blank"
                bgimg={box18}
                href="/categoria/power-bank-personalizado-para-brindes/1012053"
              />
            </BoxCards>
          </Slide>
          <Slide index={6}>
            <BoxCards>
              <BoxCardItem
                target="_blank"
                bgimg={box19}
                href="/categoria/kit-ferramentas-personalizado-para-brindes/1019068"
              />
              <BoxCardItem
                target="_blank"
                bgimg={box20}
                href="/categoria/tabua-de-madeira-personalizada-para-brindes/1014121"
              />
              <BoxCardItem target="_blank" bgimg={box21} href="/categoria/bolsas-personalizadas-para-brindes/1017129" />
            </BoxCards>
          </Slide>
        </Slider>
      )}

      {!isMobile ? (
        <>
          <ButtonBack style={{ width: "40px", height: "100%", top: "-10px", right: "96%", position: "absolute" }}>
            <ChevronLeftIcon fontSize={!isMobile ? "50px" : 20} fontWeight={100} />
          </ButtonBack>
          <ButtonNext style={{ width: "40px", height: "100%", top: "-10px", left: "96%", position: "absolute" }}>
            <ChevronRightIcon fontSize={!isMobile ? "50px" : 20} fontWeight={100} />
          </ButtonNext>
        </>
      ) : (
        <></>
      )}
    </CarouselProvider>
  )
}
