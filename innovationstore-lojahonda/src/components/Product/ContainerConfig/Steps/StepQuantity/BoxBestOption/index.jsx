import { useEffect, useState } from "react"
import { ColorInputComponent } from "../../../ColorInput/styles"
import * as S from "./styles"
import { useProductProvider } from "../../../../../../contexts/ProductProvider"
import { buscaValorProduto } from "../../../../../../services/api"
import { Skeleton } from "../../../../../SkeletonLoading"
import { formatPrice } from "../../../../../../utils/formatPrice"

export function BoxBestOption({ product }) {
  const [selectedBestOption, setSelectedBestOption] = useState(null)
  const [listQuantitys, setListQuantitys] = useState([])
  const { state, handleSetProductQuantity } = useProductProvider()
  const [loading, setLoading] = useState(false)

  async function listQuantityPerPrice() {
    setLoading(true)
    let initialQuantitys = [1, 10, 30, 50, 100, 300, 500, 1000]
    const result = []

    for await (const quantity of initialQuantitys) {
      let estoque = quantity

      if (parseInt(state.codColor.estoque_disponivel) < quantity) {
        estoque = state.codColor.estoque_disponivel
      }

      const param = {
        codigo_produto: state.codprod,
        codigo_impressao: state.codImp.codigo_impressao,
        quantidade: estoque,
        codigo_cor: state.codColor.codigo_cor,
        batidas: state.batidas,
        prazo_entrega: parseInt(state?.entrega?.prazo),
      }

      const response = await buscaValorProduto.post("", param)
      const value = parseFloat(response.data.valor_unitario)

      result.push({
        quantity: estoque,
        value,
      })
    }

    setListQuantitys(result)
    setLoading(false)
  }

  useEffect(() => {
    listQuantityPerPrice()
  }, [state.codColor, state.codprod, state.codImp, state.batidas])

  function handleSelectedBestOption(item) {
    setSelectedBestOption(item)
    handleSetProductQuantity(item?.quantity)
  }

  useEffect(() => {
    setSelectedBestOption(null)
  }, [state.codColor, state.codprod, state.codImp, state.batidas])

  const bestOptionNotDuplicate = listQuantitys.filter((item, index) => {
    return listQuantitys.findIndex((item2) => item2.value === item.value) === index
  })

  return (
    <S.BoxBestOption>
      {loading &&
        Array.from({ length: 8 }).map((_, index) => (
          <Skeleton.Root height={56.8}>
            <Skeleton.Box>
              <Skeleton.Checkbox />
              <Skeleton.Content>
                <Skeleton.Text />
                <Skeleton.Text />
              </Skeleton.Content>
            </Skeleton.Box>
          </Skeleton.Root>
        ))}
      {!loading &&
        bestOptionNotDuplicate.map((item, index) => (
          <S.BoxBestOptionItem
            key={index}
            isSelected={selectedBestOption?.quantity === item.quantity}
            onClick={() => handleSelectedBestOption(item)}
          >
            <ColorInputComponent
              backgroundColor={selectedBestOption?.quantity === item.quantity ? "#E2001B" : "#fff"}
            />
            <S.BoxBestOptionItemContent>
              <S.BoxBestOptionItemContentHeader>
                <h1>
                  {item.quantity} unidade{item.quantity > 1 ? "s" : ""}
                </h1>
              </S.BoxBestOptionItemContentHeader>
              <S.BoxBestOptionItemContentBody>
                <strong>{formatPrice(item.value)}</strong>
                <span>valor unitário</span>
              </S.BoxBestOptionItemContentBody>
            </S.BoxBestOptionItemContent>
          </S.BoxBestOptionItem>
        ))}
    </S.BoxBestOption>
  )
}
