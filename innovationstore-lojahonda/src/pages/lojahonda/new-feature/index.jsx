import { Product } from "../../components/Product"
import Header from "../../components/Header"
import { getCategorias, getSegmentos } from "../../utils/getLinksHeader"

export default function NewFeature(props) {
  return (
    <>
      <Header subcategorias={props.linksSubcategorias} segmentos={props.linksSegmentos} />
      {/* <Product /> */}
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
