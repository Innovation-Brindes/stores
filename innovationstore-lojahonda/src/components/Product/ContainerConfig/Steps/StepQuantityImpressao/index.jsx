import { useEffect, useState } from "react"
import { ColorInputComponent } from "../../ColorInput/styles"
import * as S from "./styles"
import { useProductProvider } from "../../../../../contexts/ProductProvider"
import { buscaProduto } from "../../../../../services/api"

export function StepQuantityImpressao({ product }) {
  const [selectedImpressao, setSelectedImpressao] = useState(null)
  const { handleSetBatidas } = useProductProvider()
  const [batidas, setBatidas] = useState([])

  function handleSelectedImpressao(impressao) {
    setSelectedImpressao(impressao)

    handleSetBatidas(impressao?.qtd_batida)
  }

  async function prazoProducao(codprod) {
    const response = await buscaProduto.get(codprod.toString())

    const dados = response.data

    if (dados.batidadas_maximas <= 0) return

    const batidas = []

    for (let i = 1; i <= dados.batidadas_maximas; i++) {
      batidas.push({
        qtd_batida: i,
      })
    }

    setBatidas(batidas)

    return batidas
  }

  async function calculateInitialPersonalizacao() {
    const batidasDisponiveis = await prazoProducao(product.codigo_produto)
    if (batidasDisponiveis?.length <= 0) return

    const productMaxStock = batidasDisponiveis[0]

    handleSelectedImpressao(productMaxStock)
  }

  useEffect(() => {
    calculateInitialPersonalizacao()
  }, [product])

  useEffect(() => {
    prazoProducao(product.codigo_produto)
  }, [product])

  return (
    <S.ContainerImpressao>
      {batidas?.map((impressao, index) => (
        <>
          <S.GroupImpressao key={impressao.qtd_batida}>
            <S.Impressao onClick={() => handleSelectedImpressao(impressao)}>
              <ColorInputComponent
                backgroundColor={selectedImpressao?.qtd_batida === impressao.qtd_batida ? "#CC0000" : "#fff"}
              />
              {impressao.qtd_batida} {impressao.qtd_batida === 1 ? "Impressão" : "Impressões"}
            </S.Impressao>
          </S.GroupImpressao>
          {index !== batidas?.length - 1 && <S.Divider />}
        </>
      ))}
    </S.ContainerImpressao>
  )
}
