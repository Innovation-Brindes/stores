import { useEffect, useState } from "react"
import { ColorInputComponent } from "../../ColorInput/styles"
import * as S from "./styles"
import { useProductProvider } from "../../../../../contexts/ProductProvider"
import { buscaProduto } from "../../../../../services/api"

export function StepPersonalizacao({ product }) {
  const [selectedPersonalizacao, setSelectedPersonalizacao] = useState(null)
  const { handleSetCodImp } = useProductProvider()
  const [personalizacoes, setPersonalizacoes] = useState([])

  async function tipoPersonalizacao(codprod) {
    const response = await buscaProduto.get(`${codprod}/tipo-gravacao`)

    setPersonalizacoes(response.data)

    return response.data
  }

  function handleSelectedPersonalizacao(personalizacao) {
    setSelectedPersonalizacao(personalizacao)

    handleSetCodImp(personalizacao)
  }

  async function calculateInitialPersonalizacao() {
    const persona = await tipoPersonalizacao(product.codigo_produto)

    if (persona.length <= 0) return

    const productMaxStock = persona[0]

    handleSelectedPersonalizacao(productMaxStock)
  }

  useEffect(() => {
    calculateInitialPersonalizacao()
    tipoPersonalizacao(product.codigo_produto)
  }, [product])

  useEffect(() => {
    tipoPersonalizacao(product.codigo_produto)
  }, [])

  return (
    <S.ContainerPersonalizacao>
      {personalizacoes.map((personalizacao, index) => (
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
          {index !== personalizacoes.length - 1 && <S.Divider />}
        </>
      ))}
    </S.ContainerPersonalizacao>
  )
}
