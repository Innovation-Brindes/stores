import Head from "next/head"
import Header from "../../../../components/Header"
import { Relatorios } from "../../../../components/Painel"
import { getCategorias, getSegmentos } from "../../../../utils/getLinksHeader"
import nookies from "nookies"
import axios from "axios"

export const getServerSideProps = async (context) => {
  const linksSubcategorias = await getCategorias()
  const linksSegmentos = await getSegmentos()

  const cookies = nookies.get(context)

  const { "@innovationstore-honda/user:0.0.1": user, "@innovationstore-honda/token:0.0.1": token } = cookies

  const relatorios = await axios.get("https://api.innovationbrindes.com.br/api/site/v2/markup/lista-relatorio-store/25")

  const { data } = relatorios

  if (!user || !token) {
    return {
      redirect: {
        destination: "/lojahonda/login",
        permanent: false,
      },
    }
  }

  return {
    props: {
      linksSubcategorias: linksSubcategorias.subcategorias,
      linksSegmentos: linksSegmentos.segmentos,
      relatorios: data,
    },
  }
}

export default function RelatoriosPage({ relatorios, ...props }) {
  return (
    <div>
      <Head>
        <title>Relatórios | Painel Administrativo</title>

        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Header subcategorias={props.linksSubcategorias} segmentos={props.linksSegmentos} />
      <Relatorios relatorios={relatorios} />
    </div>
  )
}
