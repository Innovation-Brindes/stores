import { useCallback, useEffect, useState } from "react"
import { ColorInputComponent } from "../../../ColorInput/styles"
import * as S from "./styles"
import { useProductProvider } from "../../../../../../contexts/ProductProvider"
import { baseURL, buscaValorProduto } from "../../../../../../services/api"
import { Skeleton } from "../../../../../SkeletonLoading"
import { formatPrice } from "../../../../../../utils/formatPrice"
import axios from "axios"

export function BoxBestOption({ product }) {
  const [selectedBestOption, setSelectedBestOption] = useState(null)
  const [listQuantitys, setListQuantitys] = useState([])
  const { state, handleSetProductQuantity } = useProductProvider()
  const [loading, setLoading] = useState(false)

  const getQuantitys = useCallback(async () => {
    try {
      setLoading(true)
      const response = await axios.get(
        `https://api.innovationbrindes.com.br/api/produto/buscar-valor-quantidades-produto/${state.codprod}/${state.codImp.codigo_impressao}/${state.codColor.codigo_cor}/${state.batidas}/${state?.entrega?.prazo}`,
      )

      setListQuantitys(response.data)
    } catch (error) {
      console.log(error)
    }

    setLoading(false)
  }, [state.codColor, state.codprod, state.codImp, state.batidas, state?.entrega])

  useEffect(() => {
    getQuantitys()
  }, [getQuantitys])

  const handleSelectedBestOption = useCallback(
    (item) => {
      setSelectedBestOption(item)
      handleSetProductQuantity(item?.quantity)
    },
    [handleSetProductQuantity],
  )

  useEffect(() => {
    setSelectedBestOption(null)
  }, [state.codColor, state.codprod, state.codImp, state.batidas, state?.entrega])

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
        listQuantitys.map((item, index) => (
          <S.BoxBestOptionItem
            key={index}
            isSelected={selectedBestOption?.quantity === item.quantity}
            onClick={() => handleSelectedBestOption(item)}
          >
            <ColorInputComponent
              backgroundColor={selectedBestOption?.quantity === item.quantity ? "#CC0000" : "#fff"}
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
