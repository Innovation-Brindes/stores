import { IoIosRefreshCircle } from "react-icons/io"
import * as S from "./styles"
import { useProductProvider } from "../../../../../contexts/ProductProvider"
import { useMemo, useRef } from "react"
import { BoxBestOption } from "./BoxBestOption"
import * as Toast from "@radix-ui/react-toast"
import { useState } from "react"
import { IoIosAlert } from "react-icons/io"

export function StepQuantity({ product }) {
  const { state, price, handleSetProductQuantity } = useProductProvider()
  const [open, setOpen] = useState(false)

  const refQuantity = useRef()

  function handleSetQuantity(quantity) {
    const quantityStockColor = parseInt(state.codColor.estoque_disponivel)

    if (quantity > quantityStockColor) {
      setOpen(true)
      return
    }
    if (!quantity) return
    if (quantity > parseInt(product.estoque)) return

    const intQuantity = parseInt(quantity)

    handleSetProductQuantity(intQuantity)
  }

  const formattedPrice = useMemo(() => {
    if (!price) return

    const { valor_unitario } = price

    const formattedPrice = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(valor_unitario)

    return formattedPrice
  }, [price])

  const containsQuantity = refQuantity.current?.value

  return (
    <>
      <S.ContainerQuantity>
        <S.ContentQuantity>
          <S.BoxQuantity>
            <h1>Digite a quantidade desejada</h1>
            <S.BoxInputQuantity>
              <input type="number" ref={refQuantity} />

              <S.IconInputQuantity onClick={() => handleSetQuantity(refQuantity.current?.value)}>
                <IoIosRefreshCircle /> <span>atualizar</span>
              </S.IconInputQuantity>
            </S.BoxInputQuantity>

            <span className={`value ${containsQuantity ? "show" : ""}`}>
              {formattedPrice}
              <span>valor unitário</span>
            </span>
          </S.BoxQuantity>
        </S.ContentQuantity>
        <S.SelectBestOption>
          <h1>Ou selecione nossas melhores ofertas</h1>

          <BoxBestOption product={product} />
        </S.SelectBestOption>
      </S.ContainerQuantity>

      <Toast.Provider swipeDirection="right">
        <S.ToastContainer open={open} onOpenChange={setOpen} show={open}>
          <IoIosAlert size={20} />

          <Toast.Title>Quantidade indisponível, estoque disponível: {state.codColor.estoque_disponivel}</Toast.Title>
        </S.ToastContainer>
        <Toast.Viewport />
      </Toast.Provider>
    </>
  )
}
