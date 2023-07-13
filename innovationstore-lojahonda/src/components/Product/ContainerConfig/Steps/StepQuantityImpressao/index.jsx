import { useEffect, useState } from "react"
import { ColorInputComponent } from "../../ColorInput/styles"
import * as S from "./styles"
import { useProductProvider } from "../../../../../contexts/ProductProvider"

export function StepQuantityImpressao({ product }) {
  const [selectedImpressao, setSelectedImpressao] = useState(null)
  const { handleSetBatidas } = useProductProvider()

  function handleSelectedImpressao(impressao) {
    setSelectedImpressao(impressao)

    handleSetBatidas(impressao?.qtd_batida)
  }

  function calculateInitialPersonalizacao() {
    if (product?.batidas?.length <= 0) return

    //sempre a posição 0 do array'

    const productMaxStock = product.batidas[0]

    handleSelectedImpressao(productMaxStock)
  }

  useEffect(() => {
    calculateInitialPersonalizacao()
  }, [product])

  return (
    <S.ContainerImpressao>
      {product.batidas.map((impressao, index) => (
        <>
          <S.GroupImpressao key={impressao.qtd_batida}>
            <S.Impressao onClick={() => handleSelectedImpressao(impressao)}>
              <ColorInputComponent
                backgroundColor={selectedImpressao?.qtd_batida === impressao.qtd_batida ? "#E2001B" : "#fff"}
              />
              {impressao.qtd_batida} {impressao.qtd_batida === 1 ? "Impressão" : "Impressões"}
            </S.Impressao>
          </S.GroupImpressao>
          {index !== product.batidas.length - 1 && <S.Divider />}
        </>
      ))}
    </S.ContainerImpressao>
  )
}
