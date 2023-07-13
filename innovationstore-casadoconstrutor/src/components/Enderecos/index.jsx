import { Box } from "@chakra-ui/react"
import { NextSeo } from "next-seo"
import Head from "next/head"
import React, { useEffect, useState } from "react"
import FooterComponent from "../Footer/FooterComponent"
import FooterSocialMediaComponent from "../Footer/FooterSocialMedia"
import HeaderComponent from "../Header"
import {
  Content,
  ContentBody,
  ContentBodyAddress,
  ContentBodyAddressHeader,
  ContentHeader,
  ContentHeaderDescription,
  ContentHeaderMobile,
  ContentHeaderSubheader,
} from "./styles"

const titulo = "/images/enderecos/titulo.png"
const tituloMobile = "/images/enderecos/titulo-mobile.jpg"
const pin = "/images/enderecos/pin.png"

export default function Enderecos({}) {
  const [displayInit, setDisplayInit] = useState(0)

  const address = [
    {
      title: "brindes personalizados em são paulo",
      description: "R. maria amália lopes azevedo, 2755 - vila albertina, são paulo - sp, 02350-002",
      link: "https://goo.gl/maps/cW9YC9mt3eEAbZ8A9",
    },
    {
      title: "brindes personalizados em são paulo",
      description: "R. vila de arouca, 310 - sítio  barrocada, são paulo - sp, 02285-020",
      link: "https://goo.gl/maps/xj7a5dnRGZVVhYXF6",
    },
    {
      title: "brindes personalizados em belém",
      description: "avenida governador josé malcher, 168 - cjs 110/111/203/204",
      link: "https://g.page/innovationpr?share",
    },
    {
      title: "brindes personalizados em brasília",
      description: "bl c - quadra 4, b, brasília - df, 70714-900",
      link: "https://goo.gl/maps/vcU8NECMVjLHYVSE6",
    },
    {
      title: "brindes personalizados em florianópolis",
      description: "av. rio branco, 404 - centro, florianópolis - sc, 88015-204",
      link: "https://goo.gl/maps/QmCHvv5vizXCDdnT9",
    },
    {
      title: "brindes personalizados em porto alegre",
      description: "av. carlos gomes, 700 - boa vista, porto alegre",
      link: "https://goo.gl/maps/sQ1P2iaM77rGh53E9",
    },
    {
      title: "brindes personalizados em rio de janeiro",
      description: "rua visconde de inhama, 83 - centro, rio de janeiro - rj, 20091-007",
      link: "https://goo.gl/maps/grc3k6RkoYFLwGaSA",
    },
    {
      title: "brindes personalizados em belo horizonte",
      description: "av. do contorno, 6594 - savassi, belo horizonte - mg, 30110-044",
      link: "https://goo.gl/maps/NH9fgktHxZbQENBn7",
    },
    //   {'title':'brindes personalizados em belo horizonte',
    //    'description':'av. do contorno, 6594 - savassi, belo horizonte - mg, 30110-044',
    //    'link':'https://goo.gl/maps/NH9fgktHxZbQENBn7'
    //   },
    {
      title: "brindes personalizados em curitiba",
      description: "edf. jatobá - r. pasteur, 463 - batel, curitiba - pr, 80250-104",
      link: "https://goo.gl/maps/cJQzfoTsbymKA2RF8",
    },
    {
      title: "brindes personalizados em vitória",
      description: "r. josé alexandre buaiz, 300 - enseada do suá, vitória - es, 29055-221",
      link: "https://goo.gl/maps/dc97Rzoti61DrhuQ8",
    },
    {
      title: "brindes personalizados em salvador",
      description: "av. tancredo neves, 620 - caminho das árvores, salvador - ba, 40820-660",
      link: "https://goo.gl/maps/Dqf9DhM1bP4fzW436",
    },
  ]

  useEffect(() => {
    var time = setTimeout(function () {
      setDisplayInit(1)
      clearTimeout(time)
    }, 1000)
  })

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
        title={"Innovation Brindes pelo Brasil"}
        description={`Endereços, Brindes, Brindes Personalizados, Brindes Promocionais, Brindes Corporativos, Brindes Ecológicos, Personalizados, Innovation Brindes`}
        keywords={`Endereços, Brindes, Brindes Personalizados, Personalizados, Brindes Promocionais, Promocionais, Empresa de Brindes, Brindes Corporativos, Chaveiros Personalizados, Squeeze Personalizado, Canetas Personalizadas, Canetas Para Brindes, Caneta Personalizada, Canetas Promocionais, Produtos Promocionais, Brindes Para Eventos, Carregador Celular Personalizado, Power Bank Personalizado, Espelho Personalizado, Brindes Dia Das Mães, Brindes Dia Dos Pais, Brindes Dia Da Mulher, Brindes Para o Final Do Ano, Brindes Para Funcionários, Confecção Promocional`}
        canonical={`https://innovationbrindes.com.br/enderecos`}
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
      <Box style={{ opacity: displayInit, transition: "0.3s" }}>
        <Box>
          <Content>
            <ContentHeader>
              <img alt="header-titulo" src={titulo} />
            </ContentHeader>
            <ContentHeaderMobile>
              <img alt="header-titulo" src={tituloMobile} />
            </ContentHeaderMobile>

            <ContentHeaderDescription>
              <h1>
                a empresa que mais cresce no segmento promocional disponibiliza 11 pontos comerciais perto de você!
              </h1>
              <p>
                Com o intuito de ficarmos mais próximos de nossos clientes, dispomos de escritórios regionais nas
                grandes cidades do Brasil. Estamos presentes em: Belém, Belo Horizonte, Brasília, Curitiba,
                Florianópolis, Rio de Janeiro, Salvador, Porto Alegre e Vitória, além da nossa estrutura de São Paulo.
                Nas cidades escolhidas para os pontos regionais, nossos clientes poderão marcar reuniões com os
                consultores e ver amostras dos melhores produtos do mercado.
              </p>
            </ContentHeaderDescription>
            <ContentHeaderSubheader>
              <h1>Conheça nossos pontos comerciais</h1>
            </ContentHeaderSubheader>

            <ContentBody>
              {address.map((item) => {
                return (
                  <ContentBodyAddress>
                    <ContentBodyAddressHeader>
                      <div className="pin-img">
                        <img alt="icon-localizacao" src={pin} />
                      </div>
                      <div className="description">
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                      </div>
                    </ContentBodyAddressHeader>
                    <a href={item.link} target="_blank" rel="noreferrer">
                      Conheça
                    </a>
                  </ContentBodyAddress>
                )
              })}
            </ContentBody>
          </Content>
        </Box>

        <FooterComponent />
      </Box>
    </>
  )
}
