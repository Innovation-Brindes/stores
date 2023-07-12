import { useEffect, useState } from "react"
import { ColorInputComponent } from "../../ColorInput/styles"
import * as S from "./styles"
import { useProductProvider } from "../../../../../contexts/ProductProvider"

export function StepPersonalizacao({ product }) {
  const [selectedPersonalizacao, setSelectedPersonalizacao] = useState(null)
  const { handleSetCodImp } = useProductProvider()

  function handleSelectedPersonalizacao(personalizacao) {
    setSelectedPersonalizacao(personalizacao)

    handleSetCodImp(personalizacao)
  }

  function calculateInitialPersonalizacao() {
    if (product?.personalizacoes?.length <= 0) return

    //sempre a posição 0 do array'

    const productMaxStock = product.personalizacoes[0]

    handleSelectedPersonalizacao(productMaxStock)
  }

  useEffect(() => {
    calculateInitialPersonalizacao()
  }, [product])

  return (
    <S.ContainerPersonalizacao>
      {product.personalizacoes.map((personalizacao, index) => (
        <>
          <S.GroupPersonalizacao key={personalizacao.codigo_impressao}>
            <S.Personalizacao onClick={() => handleSelectedPersonalizacao(personalizacao)}>
              <ColorInputComponent
                backgroundColor={
                  selectedPersonalizacao?.codigo_impressao === personalizacao.codigo_impressao ? "#FF4F00" : "#fff"
                }
              />

              {personalizacao.descricao_impressao}
            </S.Personalizacao>
          </S.GroupPersonalizacao>
          {index !== product.personalizacoes.length - 1 && <S.Divider />}
        </>
      ))}
    </S.ContainerPersonalizacao>
  )
}
