import Head from "next/head"
import Header from "../../../../components/Header"
import { Relatorios } from "../../../../components/Painel"
import { getCategorias, getSegmentos } from "../../../../utils/getLinksHeader"
import nookies from "nookies"

export const getServerSideProps = async (context) => {
  const linksSubcategorias = await getCategorias()
  const linksSegmentos = await getSegmentos()

  const cookies = nookies.get(context)

  const { "@innovationstore-honda/user:0.0.1": user, "@innovationstore-honda/token:0.0.1": token } = cookies

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
    },
  }
}

export default function RelatoriosPage({ ...props }) {
  return (
    <div>
      <Head>
        <title>Relatórios | Painel Administrativo</title>

        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Header subcategorias={props.linksSubcategorias} segmentos={props.linksSegmentos} />
      <Relatorios />
    </div>
  )
}
