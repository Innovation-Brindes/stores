import Document, { Html, Head, Main, NextScript } from "next/document"
import { getCssText } from "../styles"
import { ServerStyleSheet } from "styled-components"
import { FontStyles } from "../components/Home/styles"

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700;800&display=swap"
            rel="stylesheet"
          />
          <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;700&display=swap"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800&display=swap"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800&display=swap"
            rel="stylesheet"
          />
          <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          />
          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#58BC03" />
        </Head>
        <body>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PXQHD6F"height="0" width="0" styles={{display:"none",visibility:"hidden"}}></iframe>`,
            }}
          ></noscript>
          <FontStyles />

          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
