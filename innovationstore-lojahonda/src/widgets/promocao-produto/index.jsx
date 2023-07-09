import Link from "next/link"
import React from "react"
import {
  CardBox,
  CardBoxFooter,
  CardBoxFooterButton,
  CardBoxFooterDesc,
  CardBoxFooterDescValue,
  CardBoxHeader,
  CardBoxHeaderCount,
  CardBoxHeaderCountClock,
  CardBoxHeaderCountTitle,
  CardBoxProduto,
} from "./styles"
import { useRouter } from "next/router"
import { Image } from "@chakra-ui/react"

const produtoExemplo = "/images/home/box-categoria/produto-promo-exemplo.jpg"
// const novidades = "/images/home/box-categoria/pronto-em-1-dia-home-gif.gif";
// const novidadesM = "/images/home/box-categoria/pronto-em-1-dia-home-gif-mobile.gif";
const novidades = "/images/home/box-categoria/novidade.jpg"
const novidadesM = "/images/home/box-categoria/novidade-mobile.jpg"

export default function ItemPromocao({}) {
  const router = useRouter()

  return (
    <CardBox>
      <Link href="/copo-termico-500ml-com-abridor-brindes-10151373687" passHref>
        <a className="desktop">
          <img alt="novidades" src={novidades} />
        </a>
      </Link>
      <Link href="/ultra-rapido" passHref>
        <a className="mobile">
          <Image alt="novidades-mobile" src={"/images/home/umdiamobile.jpg"} paddingInline={"2rem"} />
        </a>
      </Link>
      {/* <CardBoxHeader>
                <CardBoxHeaderCount>
                    <CardBoxHeaderCountTitle>
                        <h1>NOVIDADE!</h1>
                        <h2>COPO TÉRMICO 500ML COM ABRIDOR</h2>
                    </CardBoxHeaderCountTitle>
                    <CardBoxHeaderCountClock>
                        <div>
                            <h1>6</h1>{""}<p>|</p>
                            <h1>12</h1>{""}<p>|</p>
                            <h1>03</h1>
                        </div>
                        <div>
                            <h2>dias</h2>
                            <h2>hrs</h2>
                            <h2>min</h2>
                        </div>
                            
                    </CardBoxHeaderCountClock>
                </CardBoxHeaderCount>
                <h2>Rápido! é por tempo limitado</h2>
            </CardBoxHeader>
            <CardBoxProduto>
                <img src={produtoExemplo}/>
            </CardBoxProduto>
            <CardBoxFooter>
                <CardBoxFooterDesc>
                    <h1>COPO TÉRMICO 500ML COM ABRIDOR</h1>
                    <CardBoxFooterDescValue>
                        <span>R$ 823,00</span>
                        <h1>R$ 624,00</h1>
                    </CardBoxFooterDescValue>
                </CardBoxFooterDesc>
                <CardBoxFooterButton>
                    <button>APROVEITE!</button>
                </CardBoxFooterButton>
                <CardBoxFooterDesc>
                    <h1>DIVERSAS CORES DISPONÍVEIS</h1>
                </CardBoxFooterDesc>
            </CardBoxFooter> */}
    </CardBox>
  )
}
