import { Box, Center, Image, Text, useMediaQuery } from "@chakra-ui/react"
import { NextSeo } from "next-seo"
import Head from "next/head"
import React from "react"
import Footer from "../Footer"
import FooterComponent from "../Footer/FooterComponent"
import FooterSocialMediaComponent from "../Footer/FooterSocialMedia"

export default function RegulamentoCompreGanhe(props) {
  const [mobileView] = useMediaQuery("(max-width:768px)")

  return (
    <>
      <Head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="viewport" content="width = device-width, initial-scale = 2.3, user-scalable = no" />
        <meta
          name="viewport"
          content="width = device-width, initial-scale = 2.3, minimum-scale = 1, maximum-scale = 5"
        />
        {/* <link rel="alternate" href={`https://innovationbrindes.com.br${this.props.linkproduto}`} hreflang="pt"/> */}

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
        title={`Innovation Brindes - Regulamento de compre ganhe`}
        description={`Compre e ganhe, Brindes, Brindes Personalizados, Brindes Promocionais, Brindes Corporativos, Brindes Ecológicos, Personalizados, Innovation Brindes`}
        keywords={`Compre e ganhe, Compre, Ganhe Brindes, Brindes Personalizados, Personalizados, Brindes Promocionais, Promocionais, Empresa de Brindes, Brindes Corporativos, Chaveiros Personalizados, Squeeze Personalizado, Canetas Personalizadas, Canetas Para Brindes, Caneta Personalizada, Canetas Promocionais, Produtos Promocionais, Brindes Para Eventos, Carregador Celular Personalizado, Power Bank Personalizado, Espelho Personalizado, Brindes Dia Das Mães, Brindes Dia Dos Pais, Brindes Dia Da Mulher, Brindes Para o Final Do Ano, Brindes Para Funcionários, Confecção Promocional`}
        canonical={`https://innovationbrindes.com.br/regulamento-compre-ganhe`}
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
            httpsEquiv: "Content-Type",
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
      <Box w={"100%"} minH={"85vh"}>
        <Image
          w={mobileView ? "80%" : "auto"}
          position={"relative"}
          margin={"auto"}
          src="/images/menu/banner-compre-ganhe.png"
        />
        <Box
          position={"relative"}
          margin={"auto"}
          mt={40}
          w={"70%"}
          h={"auto"}
          fontSize={14}
          fontFamily="Gisha"
          textAlign={"justify"}
        >
          <p>
            <strong>1. A Promoção</strong>
          </p>

          <p>
            <strong>1.1.</strong> A promoção “COMPRE E GANHE” presenteará com 01 (hum) brinde personalizado todos os
            clientes que finalizarem um pedido.
          </p>

          <p>
            <strong>1.2.</strong> A promoção será realizada pela INNOVATION COMÉRCIO DE PRESENTES CORPORATIVOS EIRELI -
            ME, pessoa jurídica de direito privado, inscrita no CNPJ/MF sob o nº 19.064.525/0001-19, situada na rua vila
            de arouca, 310 – CEP 02285-020 – São Paulo/SP, valendo para todo o território nacional. Podendo seu término
            ocorrer caso haja esgotamento dos brindes disponibilizados.
          </p>

          <p>
            <strong>2.</strong> Qualquer pessoa natural (física) interessada poderá participar da promoção, desde que
            cumpra as condições estabelecidas neste regulamento.
          </p>

          <p>
            <strong>3.</strong> Todos os clientes com pedidos acima de R$ 1.000 ( hum mil reais ) gastos com qualquer
            produto da innovation brindes, são paulo, sp participantes da promoção, durante o período desta, mediante
            validação do pedido pelo setor comercial, receberá 01 (hum) “Brinde Personalizado” exclusivo, desde que
            observadas as condições previstas.
          </p>

          <p>
            <strong>4.</strong> Na presente promoção serão distribuídos 5.000 (cinco mil) “Brindes”.
          </p>

          <p>
            <strong>4.1.</strong> Em caso do término do estoque total descrito no item anterior, a presente promoção
            será automaticamente encerrada, independente de prévio aviso.
          </p>

          <p>
            <strong>4.2.</strong> Os “Brindes” não poderão, em hipótese alguma, serem convertidos em dinheiro, trocados
            e/ou substituídos por quaisquer outros produtos, bem como, comercializados.
          </p>

          <p>
            <strong>5.</strong> Na presente promoção, cada participante poderá receber apenas 01 (hum) “Brinde”
            exclusivo. Dessa forma, caso o participante atinja um valor superior em compras, irá receber apenas 01 (hum)
            “Brinde”.
          </p>

          <p>
            <strong>6.</strong> Considerando que o cadastro na promoção será informatizado, no caso de uma eventual
            falha do sistema, o procedimento de cadastro será feito manualmente, até que se regularize o sistema,
            mantendo-se inalteradas todas as regras e condições de validade de participação na promoção.
          </p>

          <p>
            <strong>7.</strong> Não será permitido que terceiros efetuem o cadastro em nome do participante da promoção,
            mesmo que este representante apresente os documentos originais do titular da nota e/ou cupom fiscal.
          </p>

          <p>
            <strong>8.</strong> Para efeitos da aplicação do item 4 acima, os pedidos efetuados não poderão ser somados,
            visto que se forem feitos mais pedidos com valores acima de R$ 1.000 ( hum mil reais ) o participante
            receberá apenas 01 (hum) “Brinde”.
          </p>
        </Box>
      </Box>
      <Footer chat_only={true} />
      <FooterComponent />
    </>
  )
}
