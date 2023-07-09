import { useEffect, useState } from "react"
import * as S from "./styles"
import { useProductProvider } from "../../../../../contexts/ProductProvider"
import { ColorInputComponent } from "../../ColorInput/styles"

export function StepPrazoProducao({ product }) {
  const [selectedProducao, setSelectedProducao] = useState(null)
  const { handleSetEntrega } = useProductProvider()

  function handleSelectedProducao(producao) {
    setSelectedProducao(producao)

    const prazo = parseInt(producao?.prazo)

    handleSetEntrega(producao)
  }

  function calculateInitialPersonalizacao() {
    if (product?.personalizacoes?.length <= 0) return

    const productMaxStock = product.prazos[2]

    handleSelectedProducao(productMaxStock)
  }

  useEffect(() => {
    calculateInitialPersonalizacao()
  }, [product])

  function backgroundColor(mais_rapido, mais_barato) {
    if (mais_rapido) return "#FF4F00"
    if (mais_barato) return "#95C620"
  }
  function textColor(mais_rapido, mais_barato) {
    if (mais_rapido) return "#fff"
    if (mais_barato) return "#fff"
  }

  return (
    <S.ContainerProducao>
      {product.prazos.map((producao, index) => (
        <>
          <S.GroupProducao key={producao.prazo}>
            <S.Producao onClick={() => handleSelectedProducao(producao)}>
              <ColorInputComponent backgroundColor={selectedProducao?.prazo === producao.prazo ? "#FF4F00" : "#fff"} />
              <S.ProducaoTextColor
                color={textColor(producao.mais_rapido, producao.mais_barato)}
                backgroundColor={backgroundColor(producao.mais_rapido, producao.mais_barato)}
              >
                {producao.data_producao} | {producao.nome_data}
                <span>{producao.mais_rapido ? " | MAIS RÁPIDO" : producao.mais_barato ? " | MAIS BARATO" : ""}</span>
              </S.ProducaoTextColor>
            </S.Producao>
          </S.GroupProducao>
          {index !== product.prazos.length - 1 && <S.Divider />}
        </>
      ))}
    </S.ContainerProducao>
  )
}
