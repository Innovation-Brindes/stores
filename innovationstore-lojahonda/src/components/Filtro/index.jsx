import { RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack, Tooltip } from "@chakra-ui/react"
import { useState } from "react"
import { formatPrice } from "../../utils/formatPrice"
import * as S from "./styles"
import { useRef } from "react"
import { format } from "date-fns"
import { ColorInputComponent } from "./ColorInputComponent"
import ptBR from "date-fns/locale/pt-BR"

export function Filtro({ handleInputChange, cores, valorMinimo, valorMaximo, quantityProducts, category, prazos }) {
  const [valores, setValores] = useState({ valorDe: valorMinimo, valorAte: valorMaximo })
  const [selectedColors, setSelectedColors] = useState([])
  const [selectedPrazo, setSelectedPrazo] = useState("10")
  const [showFilter, setShowFilter] = useState(false)
  const [quantidadeValue, setQuantidadeValue] = useState("")

  const debounceTimeoutRef = useRef(null)

  const handleSelectedPrazo = (prazo) => {
    setSelectedPrazo(prazo?.prazo)

    handleInputChange({
      target: {
        name: "prazo",
        value: prazo,
      },
    })
  }

  const handleQuantity = (e) => {
    e.preventDefault()

    clearTimeout(debounceTimeoutRef.current)

    debounceTimeoutRef.current = setTimeout(() => {
      handleInputChange({
        target: {
          name: "quantidade",
          value: quantidadeValue,
        },
      })
    }, 300)
  }

  const handleChangeSlider = (newValues) => {
    clearTimeout(debounceTimeoutRef.current)

    debounceTimeoutRef.current = setTimeout(() => {
      handleSliderChangeComplete(newValues)
    }, 300)

    setValores({
      valorDe: newValues[0],
      valorAte: newValues[1],
    })
  }

  const handleSliderChangeComplete = (newValues) => {
    handleInputChange({
      target: {
        name: "valorDe",
        value: newValues[0],
      },
    })

    handleInputChange({
      target: {
        name: "valorAte",
        value: newValues[1],
      },
    })
  }

  const handleSelectedColors = (colors) => {
    if (selectedColors.includes(colors.name)) {
      setSelectedColors(selectedColors.filter((color) => color !== colors.name))
    } else {
      setSelectedColors([...selectedColors, colors.name])
    }

    handleInputChange({
      target: {
        name: "cor",
        value: colors.cod,
      },
    })
  }

  function handleShowFilter() {
    setShowFilter(!showFilter)
  }

  return (
    <S.Container>
      <S.FilterTitleContent>
        <div className="title">No alvo!</div>
        <h2>
          Encontramos <span>{quantityProducts} modelos</span> de {category}!
        </h2>
        {/* <span>
          {selectedColors.length > 1 ? "nas cores" : "na cor"} {setFirstLetterUpperCase(selectedColors.join(", "))}
        </span> */}
      </S.FilterTitleContent>
      <S.LabelFilter>Filtrar resultado</S.LabelFilter>
      <S.ButtonFilter onClick={handleShowFilter}>{showFilter ? "Ocultar" : "Mostrar"} filtros</S.ButtonFilter>
      <S.Content show={showFilter}>
        <div className="prices">
          <span>
            A partir de: <span className="font-bold">{formatPrice(valores.valorDe)}</span>
          </span>
          <span>
            {" "}
            Valor máximo: <span className="font-bold">{formatPrice(valores.valorAte)}</span>
          </span>
        </div>
        <RangeSlider
          min={valorMinimo}
          max={valorMaximo}
          step={0.2}
          defaultValue={[valorMinimo, valorMaximo]}
          value={[valores.valorDe, valores.valorAte]}
          onChange={handleChangeSlider}
          onAfterChange={handleSliderChangeComplete}
        >
          <RangeSliderTrack height="8px">
            <RangeSliderFilledTrack bgColor="#CC0000" />
          </RangeSliderTrack>
          <RangeSliderThumb index={0} bgColor="#fd7e14" />
          <RangeSliderThumb index={1} bgColor="#fd7e14" />
        </RangeSlider>
      </S.Content>
      <S.Content show={showFilter}>
        <S.ColorInputContent>
          <S.Wrapper>
            <S.LabelCores>Cores</S.LabelCores>
            <div className="colors">
              {cores?.map((cor) => (
                <Tooltip label={cor.name} aria-label="A tooltip" hasArrow>
                  <label key={cor}>
                    <ColorInputComponent
                      color={cor.rgb}
                      onClick={() => handleSelectedColors(cor)}
                      selected={selectedColors.includes(cor.name)}
                    />
                  </label>
                </Tooltip>
              ))}
            </div>
          </S.Wrapper>
        </S.ColorInputContent>
      </S.Content>
      <S.Content show={showFilter}>
        <S.Wrapper column>
          <label htmlFor="">Prazo de produção</label>
          <S.PrazoProducaoContent>
            {Array.isArray(prazos) &&
              prazos.length > 0 &&
              prazos.map((prazo, index) => (
                <div
                  className={`prazoItem ${index === prazos.length - 1 ? "last" : ""}`}
                  key={index}
                  onClick={() => handleSelectedPrazo(prazo)}
                >
                  <span className={`days ${selectedPrazo === prazo.prazo ? "selected" : ""}`}>
                    {format(new Date(prazo.date_format), "dd")}/
                    {format(new Date(prazo.date_format), "MMM", { locale: ptBR })}
                  </span>
                  <span className="name-data">{prazo.nome_data}</span>
                </div>
              ))}
          </S.PrazoProducaoContent>
        </S.Wrapper>
      </S.Content>
      {/* <S.Content show={showFilter}>
        <S.Wrapper>
          <S.QuantityContent>
            <S.LabelQuantity htmlFor="">
              <span>Quantidade</span>
            </S.LabelQuantity>
            <input
              type="number"
              name="quantidade"
              placeholder="digite a quantidade..."
              value={quantidadeValue}
              onChange={(e) => setQuantidadeValue(e.target.value.replace(/\D/g, ""))}
            />

            <S.ButtonAtualizar onClick={handleQuantity}>Atualizar</S.ButtonAtualizar>
          </S.QuantityContent>
        </S.Wrapper>
      </S.Content> */}
    </S.Container>
  )
}
