import { useEffect, useMemo, useState } from "react"
import { ColorInput } from "../../ColorInput"
import { ColorInputComponent } from "../../ColorInput/styles"
import * as S from "./styles"
import { format, parseISO } from "date-fns"
import { useProductProvider } from "../../../../../contexts/ProductProvider"
import { buscaProduto } from "../../../../../services/api"
import { setFirstLetterUpperCase } from "../../../../../utils/setFirstLetterUpperCase"

export function ColorStep({ product }) {
  const [selectedColor, setSelectedColor] = useState(null)
  const { handleSetCodColor, handleSetProductQuantity } = useProductProvider()
  const [cores, setCores] = useState([])

  function handleSelectedColor(color) {
    const stockIsZero = parseInt(color?.estoque_disponivel) === 0
    if (stockIsZero) return
    const quantitySelected = parseInt(color?.estoque_disponivel) > 1000 ? 1000 : parseInt(color?.estoque_disponivel)

    handleSetProductQuantity(quantitySelected)
    setSelectedColor(color)
    handleSetCodColor(color)
  }

  async function coresDisponiveis(codprod) {
    const response = await buscaProduto.get(`${codprod}/cores-disponiveis`)

    setCores(response.data)

    return response.data
  }

  const orderByStock = useMemo(() => {
    return cores?.sort((a, b) => {
      if (a?.estoque_disponivel > b?.estoque_disponivel) {
        return -1
      }
      if (a?.estoque_disponivel < b?.estoque_disponivel) {
        return 1
      }
      return 0
    })
  }, [cores])

  const dateRepoStock = useMemo(() => {
    if (!selectedColor?.reposicao_estoque) return null

    try {
      const formattedDate = selectedColor.reposicao_estoque.split("-").reverse().join("-")
      const date = parseISO(formattedDate)
      return format(date, "dd/MM/yyyy")
    } catch (error) {
      console.error("Invalid date format:", selectedColor?.reposicao_estoque)
      return null
    }
  }, [selectedColor])

  const quantityRepoStock = useMemo(() => {
    if (!selectedColor?.quantidade_reposicao) return null

    return parseInt(selectedColor?.quantidade_reposicao)
  }, [selectedColor])

  async function calculateInitialColors() {
    const coresDispo = await coresDisponiveis(product.codigo_produto)

    if (coresDispo?.length <= 0) return

    const productMaxStock = coresDispo?.reduce((acc, curr) => {
      if (parseInt(acc.estoque_disponivel) > parseInt(curr.estoque_disponivel)) {
        return acc
      }
      return curr
    }, [])
    handleSelectedColor(productMaxStock)
  }

  const tamanhos = useMemo(() => {
    const tamanhoMap = {
      tamanho_p: "P",
      tamanho_g: "G",
      tamanho_m: "M",
      tamanho_gg: "GG",
      tamanho_xgg: "XG",
    }

    return (
      <S.Sizes>
        <h1>Tamanhos disponíveis</h1>
        <S.SizeContainer
          columns={
            selectedColor &&
            Object.entries(selectedColor).filter(([key, value]) => key.includes("tamanho") && value !== "").length
          }
        >
          {selectedColor &&
            Object.entries(selectedColor)
              .filter(([key, value]) => key.includes("tamanho") && value !== "")
              .map(([key, value]) => {
                const novoNome = tamanhoMap[key] || key
                return (
                  <span>
                    {novoNome}: {parseInt(value).toLocaleString("pt-BR")}
                  </span>
                )
              })}
        </S.SizeContainer>
      </S.Sizes>
    )
  }, [selectedColor])

  useEffect(() => {
    calculateInitialColors()
  }, [])

  useEffect(() => {
    coresDisponiveis(product.codigo_produto)
  }, [product.codigo_produto])

  const placeholderColorInputComponent = Array.from({ length: 5 }).map((_, index) => (
    <ColorInputComponent key={index} backgroundColor={"#cecece"} loading />
  ))

  const stockDisponivelColor = parseInt(selectedColor?.estoque_disponivel).toLocaleString("pt-BR")

  return (
    <>
      <S.AccordionHeaderColors>
        Cor do produto: {selectedColor ? setFirstLetterUpperCase(selectedColor?.descricao_cor) : "Carregando..."}{" "}
        {selectedColor ? (
          <ColorInputComponent backgroundColor={selectedColor?.rgb_cores} />
        ) : (
          <ColorInputComponent loading backgroundColor={"#cecece"} />
        )}
      </S.AccordionHeaderColors>
      <S.AccordionHeaderColors>
        <span className="stock">
          Disponível: {!isNaN(stockDisponivelColor) ? stockDisponivelColor : "Carrengando.."}
        </span>
      </S.AccordionHeaderColors>
      <S.AccordionColorsRow>
        {orderByStock
          ? orderByStock.map((value) => (
              <ColorInput
                key={value.codigo_cor}
                value={value}
                handleSelectedColor={handleSelectedColor}
                isSelected={selectedColor?.codigo_cor === value.codigo_cor}
              />
            ))
          : placeholderColorInputComponent}
      </S.AccordionColorsRow>
      {product.prod_vestuario === "S" && tamanhos}

      {selectedColor?.reposicao_estoque && (
        <S.AccordionFooterPanelColors>
          Reposição de estoque: {dateRepoStock} {selectedColor?.quantidade_reposicao && `| + ${quantityRepoStock} un.`}
        </S.AccordionFooterPanelColors>
      )}
    </>
  )
}
