import { IoIosRefreshCircle } from "react-icons/io"
import * as S from "./styles"
import { useProductProvider } from "../../../../../contexts/ProductProvider"
import { useMemo, useRef } from "react"
import { BoxBestOption } from "./BoxBestOption"
import * as Toast from "@radix-ui/react-toast"
import { useState } from "react"
import { IoIosAlert } from "react-icons/io"
import { AlertDialogComponent } from "../../../components/AlertDialog"

export function StepQuantity({ product }) {
  const { state, price, handleSetProductQuantity } = useProductProvider()
  const [open, setOpen] = useState(false)
  const [quantityMultiple, setQuantityMultiple] = useState(false)
  const [exampleMultiple, setExampleMultiple] = useState([])
  const [errorMultipleQuantity, setErrorMultipleQuantity] = useState(false)
  const [errorQuantity, setErrorQuantity] = useState(false)

  const refQuantity = useRef()

  const flag = Number(product.ad_multiplo)

  function handleSetQuantity(quantity) {
    const quantityStockColor = parseInt(state.codColor.estoque_disponivel)

    const quantidadeMinima = parseInt(product.quantidade_minima)

    if (quantity < quantidadeMinima) {
      setErrorQuantity(true)
      return
    }

    setErrorQuantity(false)

    if (quantity > quantityStockColor) {
      setOpen(true)
      return
    }

    if (!!flag) {
      setExampleMultiple([])
      const intQuantity = parseInt(quantity)

      if (intQuantity % flag !== 0) {
        setQuantityMultiple(true)
        console.log("entrou aqui")

        for (let i = 1; i <= 4; i++) {
          const examples = intQuantity + flag * i - (intQuantity % flag)
          setExampleMultiple((old) => [...old, examples])
        }

        return
      }

      handleSetProductQuantity(intQuantity)
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

  function orcarMultiploFlag(quantityFlag) {
    const intQuantity = parseInt(quantityFlag)

    if (intQuantity % flag !== 0) return setErrorMultipleQuantity(true)

    handleSetProductQuantity(intQuantity)
    refQuantity.current.value = intQuantity

    if (intQuantity % flag !== 0) {
      const quantity = intQuantity + (flag - (intQuantity % flag))

      handleSetProductQuantity(quantity)
      refQuantity.current.value = quantity
      return
    }

    setQuantityMultiple(false)
    return intQuantity
  }

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
            {errorQuantity && (
              <span className="text-sm text-red-600">
                Quantidade mínima: <span className="font-bold">{product.quantidade_minima}</span>
              </span>
            )}
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

      <AlertDialogComponent
        title="Quantidade inválida"
        description={`A quantidade desse produto deve ser múltipla de ${flag}.`}
        // example={`Exemplo de quantidade válida: ${flag}, ${flag * 2}, ${flag * 3}, ${flag * 4}`}
        exampleMultiple={exampleMultiple}
        open={quantityMultiple}
        setOpen={setQuantityMultiple}
        // multiple={() => orcarMultiploFlag(refQuantity.current?.value)}
        multiple={orcarMultiploFlag}
        error={errorMultipleQuantity}
        flag={flag}
      />
    </>
  )
}
