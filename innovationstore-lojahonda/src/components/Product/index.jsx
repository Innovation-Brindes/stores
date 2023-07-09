import { Layout } from "./Layout"
import { ContainerImage } from "./ContainerImage"
import { ContainerConfig } from "./ContainerConfig"
import { ContainerResumo } from "./ContainerResumo"
import { RelatedProducts } from "./RelatedProducts"
import { RelatedBackground } from "./Layout/styles"
import { NewFooter } from "../NewFooter"
import { BackgroundFooter } from "./styles"

export function Product(props) {
  return (
    <RelatedBackground>
      <Layout>
        <ContainerImage product={props.dados} />
        <ContainerConfig product={props.dados} />
        <ContainerResumo product={props.dados} />
      </Layout>
      <RelatedProducts product={props} />

      <BackgroundFooter>
        <NewFooter />
      </BackgroundFooter>
    </RelatedBackground>
  )
}
