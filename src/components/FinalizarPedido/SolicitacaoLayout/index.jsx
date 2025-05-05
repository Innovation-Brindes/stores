import React, { useEffect, useState } from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { ContainerSolicitacaoLayout } from "./styles";
import ContainerBodySolicitacaoLayout from "./components/ContainerBodySolicitacaoLayout";

const SolicitacaoLayout = ({
  dados_layout,
  setPaginacao,
  paginacao,
  isSolicitation = false,
}) => {

  const [mobileView, setMobileView] = useState(false);
  const [noteView, setNoteView] = useState(false);
  const [display_init, setDisplay_init] = useState(0);
  const [upload, setUpload] = useState(false);

  useEffect(() => {
    const timer = setTimeout(function () {
      setDisplay_init(1);
      clearTimeout(timer);
    }, 1000);

    if (window.matchMedia("(max-width: 1366px)").matches) {
      setNoteView(true);
    } else {
      setNoteView(false);
    }

    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      setMobileView(true);
    } else {
      setMobileView(false);
    }
  }, []);

  return (
    <>
      <ContainerSolicitacaoLayout
        style={{ opacity: display_init, transition: "0.3s" }}
      >
        <Head>
          {/* <link rel="alternate" href={`https://innovationbrindes.com.br/segmento${this.props.linksegmento}`} hreflang="pt"/> */}
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
        <NextSeo title={`Upload Layout`} />
        <ContainerBodySolicitacaoLayout
          dados_layout={dados_layout}
          mobileView={mobileView}
          noteView={noteView}
          upload={upload}
          setPaginacao={setPaginacao}
          paginacao={paginacao}
          isSolicitation={isSolicitation}
        />
      </ContainerSolicitacaoLayout>
    </>
  );
};

export default SolicitacaoLayout;
