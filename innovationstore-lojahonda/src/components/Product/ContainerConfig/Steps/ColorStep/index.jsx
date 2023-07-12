import { useEffect, useMemo, useState } from "react"
import { ColorInput } from "../../ColorInput"
import { ColorInputComponent } from "../../ColorInput/styles"
import * as S from "./styles"
import { format, parseISO } from "date-fns"
import { useProductProvider } from "../../../../../contexts/ProductProvider"

export function ColorStep({ product }) {
  const [selectedColor, setSelectedColor] = useState(null)
  const { handleSetCodColor, handleSetProductQuantity, quantityTypewritter } = useProductProvider()

  function handleSelectedColor(color) {
    const stockIsZero = parseInt(color?.estoque_disponivel) === 0
    if (stockIsZero) return
    const quantitySelected = parseInt(color?.estoque_disponivel) > 1000 ? 1000 : parseInt(color?.estoque_disponivel)

    handleSetProductQuantity(quantitySelected)
    setSelectedColor(color)
    handleSetCodColor(color)
  }

  const orderByStock = useMemo(() => {
    return product.cores.sort((a, b) => {
      if (a?.estoque_disponivel > b?.estoque_disponivel) {
        return -1
      }
      if (a?.estoque_disponivel < b?.estoque_disponivel) {
        return 1
      }
      return 0
    })
  }, [product.cores])

  const dateRepoStock = useMemo(() => {
    if (!selectedColor?.reposicao_estoque) return null

    try {
      const formattedDate = selectedColor.reposicao_estoque.split("-").reverse().join("-")
      const date = parseISO(formattedDate)
      return format(date, "dd/MM/yyyy")
    } catch (error) {
      console.error("Invalid date format:", selectedColor?.reposicao_estoque)
      return null
    }
  }, [selectedColor])

  const quantityRepoStock = useMemo(() => {
    if (!selectedColor?.quantidade_reposicao) return null

    return parseInt(selectedColor?.quantidade_reposicao)
  }, [selectedColor])

  function calculateInitialColors() {
    if (product?.cores?.length <= 0) return

    const productMaxStock = product.cores.reduce((acc, curr) => {
      if (parseInt(acc.estoque_disponivel) > parseInt(curr.estoque_disponivel)) {
        return acc
      }
      return curr
    })
    handleSelectedColor(productMaxStock)
  }

  useEffect(() => {
    calculateInitialColors()
  }, [])

  return (
    <>
      <S.AccordionHeaderColors>
        Cor do produto: {selectedColor?.descricao_cor}{" "}
        {selectedColor && <ColorInputComponent backgroundColor={selectedColor?.rgb_cores} />}
      </S.AccordionHeaderColors>
      <S.AccordionHeaderColors>
        <span className="stock">Disponível: {selectedColor?.estoque_disponivel}</span>
      </S.AccordionHeaderColors>
      <S.AccordionColorsRow>
        {orderByStock.map((value) => (
          <ColorInput
            key={value.codigo_cor}
            value={value}
            handleSelectedColor={handleSelectedColor}
            isSelected={selectedColor?.codigo_cor === value.codigo_cor}
          />
        ))}
      </S.AccordionColorsRow>
      {selectedColor?.reposicao_estoque !== "" && (
        <S.AccordionFooterPanelColors>
          Reposição de estoque: {dateRepoStock} | +{quantityRepoStock} un.
        </S.AccordionFooterPanelColors>
      )}
    </>
  )
}
