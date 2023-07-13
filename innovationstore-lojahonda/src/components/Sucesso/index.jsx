import Footer from "../../components/Footer"

import Head from "next/head"
import { NextSeo } from "next-seo"
import { Flex, Text } from "@chakra-ui/react"
import { FaRegHandPeace } from "react-icons/fa"
import { useMediaQuery } from "@chakra-ui/react"
import { useEffect, useState } from "react"

export default function Sucesso() {
  const [isLargerThan768] = useMediaQuery("(max-width: 768px)")

  const [isMedia, setIsMedia] = useState(false)

  useEffect(() => {
    setIsMedia(isLargerThan768)
  }, [isLargerThan768])

  return (
    <>
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
        title={`Sucesso. Innovation Brindes a maior empresa de Brindes Personalizados Promocionais`}
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
      <Flex width="100%" minHeight="calc(100vh - 400px)" alignItems="center" justifyContent="center">
        <Flex
          width="100%"
          maxWidth="1200px"
          fontSize="20px"
          fontFamily={"Open Sans, sans-serif"}
          m="0"
          fontWeight="bold"
          paddingBlock="4rem"
          bgColor="#f5f5f5"
          w="100%"
          alignItems="center"
          justifyContent="center"
          gap="1rem"
          flexDir={isMedia ? "column" : "row"}
        >
          <Flex
            alignItems="center"
            justifyContent="center"
            borderRadius="50%"
            border="3px solid #E2001B"
            width="5rem"
            height="5rem"
            padding="1rem"
          >
            <FaRegHandPeace size="2.5rem" color="#E2001B" />
          </Flex>

          <Text textAlign="center" m="0">
            <Text m="0" as="span" color="#E2001B">
              PRONTO!
            </Text>{" "}
            Seu orçamento foi gerado com sucesso!
          </Text>
        </Flex>
      </Flex>
    </>
  )
  // }
}
