import RegulamentoCompreGanhe from "../../components/RegulamentoCompreGanhe"
import Header from "../../components/Header"
import { getCategorias, getSegmentos } from "../../utils/getLinksHeader"

export default function Index(props) {
  return (
    <>
      <Header subcategorias={props.linksSubcategorias} segmentos={props.linksSegmentos} />
      <RegulamentoCompreGanhe />
    </>
  )
}

export const getStaticProps = async () => {
  const linksSubcategorias = await getCategorias()
  const linksSegmentos = await getSegmentos()

  return {
    props: {
      linksSubcategorias: linksSubcategorias.subcategorias,
      linksSegmentos: linksSegmentos.segmentos,
    },
  }
}
