import Head from "next/head"
import React from "react"
import { FontStyles } from "../components/Home/styles"
import "bootstrap/dist/css/bootstrap.css"
import { CartProvider } from "../contexts/useCart"
import { WhatsAppProvider } from "../contexts/WhatsAppProvider"
import { WhatsAppChat } from "../components/WhatsAppChat"
import { CookiesSessionProvider } from "../contexts/cookiesSessionProvider"
import { globalStyles } from "../styles/global"
import "../globals.css"
import { ChakraProvider } from "@chakra-ui/react"

import { ProductProvider } from "../contexts/ProductProvider"

globalStyles()

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>Teste Innovation</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#58BC03" />
        {/* <title>Innovation Brindes</title> */}
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />

        <link rel="shortcut icon" href="../../images/logo-icon.png" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/icon-192x192.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
      </Head>

      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
      />

      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"
      ></script>

      <ChakraProvider>
        <ProductProvider>
          <CartProvider>
            <CookiesSessionProvider>
              <WhatsAppProvider>
                <Component {...pageProps} />
                <WhatsAppChat />
              </WhatsAppProvider>
            </CookiesSessionProvider>
          </CartProvider>
        </ProductProvider>
      </ChakraProvider>
    </React.Fragment>
  )
}
export default MyApp
