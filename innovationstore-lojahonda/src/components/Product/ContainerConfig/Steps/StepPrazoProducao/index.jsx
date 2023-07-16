import { useEffect, useState } from "react"
import * as S from "./styles"
import { useProductProvider } from "../../../../../contexts/ProductProvider"
import { ColorInputComponent } from "../../ColorInput/styles"
import { ListaPrazoDeProducao } from "../../../../../services/api"

export function StepPrazoProducao({ product }) {
  const [selectedProducao, setSelectedProducao] = useState(null)
  const { handleSetEntrega } = useProductProvider()
  const [prazos, setPrazos] = useState([])

  async function prazoProducao(prazoMinimo) {
    const responsePrazo = await ListaPrazoDeProducao.get(prazoMinimo.toString())
    const dadosPrazo = await responsePrazo.data

    const newPrazos = dadosPrazo.map((prazo) => {
      return {
        ...prazo,
        mais_rapido: parseInt(prazo.prazo) === 5,
        mais_barato: parseInt(prazo.prazo) === 10,
      }
    })

    setPrazos(newPrazos)

    return dadosPrazo
  }

  function handleSelectedProducao(producao) {
    setSelectedProducao(producao)

    const prazo = parseInt(producao?.prazo)

    handleSetEntrega(producao)
  }

  function calculateInitialPersonalizacao() {
    if (product?.personalizacoes?.length <= 0) return

    const maxPrazo = product.prazos.at(-1)

    handleSelectedProducao(maxPrazo)
  }

  useEffect(() => {
    calculateInitialPersonalizacao()
    prazoProducao(product.prazo_minimo_entrega)
  }, [product])

  function backgroundColor(mais_rapido, mais_barato) {
    if (mais_rapido) return "#CC0000"
    if (mais_barato) return "#CC0000"
  }
  function textColor(mais_rapido, mais_barato) {
    if (mais_rapido) return "#fff"
    if (mais_barato) return "#fff"
  }

  return (
    <S.ContainerProducao>
      {prazos?.map((producao, index) => (
        <>
          <S.GroupProducao key={producao.prazo}>
            <S.Producao onClick={() => handleSelectedProducao(producao)}>
              <ColorInputComponent backgroundColor={selectedProducao?.prazo === producao.prazo ? "#CC0000" : "#fff"} />
              <S.ProducaoTextColor
                color={textColor(producao.mais_rapido, producao.mais_barato)}
                backgroundColor={backgroundColor(producao.mais_rapido, producao.mais_barato)}
              >
                {producao.data_producao} | {producao.nome_data}
                <strong>
                  {producao.mais_rapido ? " | MAIS RÁPIDO" : producao.mais_barato ? " | MAIS BARATO" : ""}
                </strong>
              </S.ProducaoTextColor>
            </S.Producao>
          </S.GroupProducao>
          {index !== prazos?.length - 1 && <S.Divider />}
        </>
      ))}
      <span>*Para pedido aprovados até as 14hrs, de segunda a sexta (exceto feriados). Retirada após as 08:30.</span>
    </S.ContainerProducao>
  )
}
