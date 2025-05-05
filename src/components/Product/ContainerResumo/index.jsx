import { useProductProvider } from "../../../contexts/ProductProvider"
import { Container } from "../styles"
import * as S from "./styles"

import { Resumo } from "./Resumo"
import { Orcamento } from "./Orcamento"
import { IsNotAvailable } from "./IsNotAvailable"

export function ContainerResumo({ product }) {
  const { loading, resumo } = useProductProvider()

  const isResumoShow = resumo?.step === 1

  const isNotAvailable = parseInt(product.estoque) === 0

  console.log("product", isNotAvailable)

  if (isNotAvailable) {
    return (
      <Container>
        {" "}
        <S.ResumoContent border show={isResumoShow}>
          <IsNotAvailable product={product} />
        </S.ResumoContent>
      </Container>
    )
  }

  if (loading) {
    return (
      <Container>
        <S.ResumoContent justifyContent="center" show={true} flex border>
          <S.Loader />
        </S.ResumoContent>
      </Container>
    )
  }

  if (!isNotAvailable) {
    return (
      <Container>
        <S.ResumoContent border show={isResumoShow}>
          <Resumo product={product} />
        </S.ResumoContent>
        <Orcamento product={product} />
      </Container>
    )
  }
}
