import { Container } from "../styles"
import * as S from "./styles"
import { useEffect } from "react"
import { useProductProvider } from "../../../contexts/ProductProvider"
import { ColorStep } from "./Steps/ColorStep"
import { StepPersonalizacao } from "./Steps/StepPersonalizacao"
import { TitleStep } from "./Steps/TitleStep"
import { StepQuantityImpressao } from "./Steps/StepQuantityImpressao"
import { StepPrazoProducao } from "./Steps/StepPrazoProducao"
import { StepQuantity } from "./Steps/StepQuantity"

export function ContainerConfig({ product }) {
  const isAccordionDisabled = parseInt(product.estoque === 0)

  const { handleSetCodprod } = useProductProvider()

  useEffect(() => {
    handleSetCodprod(product.codigo_produto)
  }, [product])

  const isNotAvailable = parseInt(product.estoque) === 0

  return (
    <Container disabled={isNotAvailable}>
      <S.Heading>Configure do seu jeito</S.Heading>
      <S.AccordionSection allowToggle {...(!isNotAvailable && { defaultIndex: [0] })}>
        <S.AccordionItemContent isDisabled={isAccordionDisabled}>
          <TitleStep title="Selecione a cor do seu brinde" />
          <S.AccordionPanelContent>
            <ColorStep product={product} />
          </S.AccordionPanelContent>
        </S.AccordionItemContent>
        <S.AccordionItemContent>
          <TitleStep title="Tipo de personalização" />
          <S.AccordionPanelContent>
            <StepPersonalizacao product={product} />
          </S.AccordionPanelContent>
        </S.AccordionItemContent>
        <S.AccordionItemContent>
          <TitleStep title="Quantidade de impressão" />
          <S.AccordionPanelContent>
            <StepQuantityImpressao product={product} />
          </S.AccordionPanelContent>
        </S.AccordionItemContent>
        <S.AccordionItemContent>
          <TitleStep title="Retirada | Prazo de produção" />
          <S.AccordionPanelContent>
            <StepPrazoProducao product={product} />
          </S.AccordionPanelContent>
        </S.AccordionItemContent>
        <S.AccordionItemContent>
          <TitleStep title="Defina a quantidade" />
          <S.AccordionPanelContent borderNone>
            <StepQuantity product={product} />
          </S.AccordionPanelContent>
        </S.AccordionItemContent>
      </S.AccordionSection>
    </Container>
  )
}
