import React, { useState } from "react"
import * as S from "./styles"
import { RiFileListFill } from "react-icons/ri"
import * as Dialog from "@radix-ui/react-dialog"
import { IoClose } from "react-icons/io5"
import { ColorInputComponent } from "../ColorInput/styles"
import { format } from "date-fns"
import axios from "axios"
import { useEffect } from "react"
import { useCallback } from "react"
import { useMemo } from "react"
import { setFirstLetterUpperCase } from "../../../../utils/setFirstLetterUpperCase"
import { AiFillCloseCircle } from "react-icons/ai"

export function ModalDisponibilidadeFutura({ codprod }) {
  const [colorSelected, setColorSelected] = useState(null)
  const [colors, setColors] = useState([])

  const getColorsData = useCallback(async () => {
    const response = await axios.get(
      `https://api.innovationbrindes.com.br/api/site/v2/produto/listar-disponibilidade-futura/${codprod}`,
    )

    const colorsNotEmpty = response.data.filter((data) => {
      //todas as prox_qtd tem q ser diferente de 0
      if (
        data?.prox_qtd1 !== "0" ||
        data?.prox_qtd2 !== "0" ||
        data?.prox_qtd3 !== "0" ||
        data?.prox_qtd4 !== "0" ||
        data?.prox_qtd5 !== "0" ||
        data?.prox_qtd6 !== "0"
      ) {
        return true
      }
      return false
    })

    setColors(colorsNotEmpty)
  }, [codprod])

  function formatNumber(number) {
    return new Intl.NumberFormat("pt-BR", number).format(number)
  }

  const handleSelectedColor = useCallback(
    async (idcor) => {
      const defaultColor = idcor || (colors.length > 0 ? colors[0].id_cor : null)

      if (!defaultColor) {
        return
      }

      const response = await axios.get(
        `https://api.innovationbrindes.com.br/api/site/v2/produto/listar-disponibilidade-futura/${codprod}/${defaultColor}`,
      )

      setColorSelected(response.data)
    },
    [codprod, colors],
  )

  const summary = colorSelected?.reduce((acc, item) => {
    for (const key in item) {
      if (key.includes("prox_qtd")) {
        acc += parseInt(item[key])
      }
    }

    return acc
  }, 0)

  const orderByStock = useMemo(() => {
    return colors?.sort((a, b) => {
      if (a?.quantidade_disponivel > b?.quantidade_disponivel) {
        return -1
      }
      if (a?.quantidade_disponivel < b?.quantidade_disponivel) {
        return 1
      }
      return 0
    })
  }, [colors])

  useEffect(() => {
    getColorsData()
  }, [codprod, getColorsData])

  useEffect(() => {
    handleSelectedColor()
  }, [handleSelectedColor])

  const positionKeys = ["prox_qtd1", "prox_qtd2", "prox_qtd3", "prox_qtd4", "prox_qtd5", "prox_qtd6"]
  const positionKeysWithValues =
    colorSelected && colorSelected.length > 0 ? positionKeys.filter((key) => colorSelected[0]?.[key] !== "0") : []

  const dateKeys = ["dt_repo1", "dt_repo2", "dt_repo3", "dt_repo4", "dt_repo5", "dt_repo6"]
  const dateKeysWithValues =
    colorSelected && colorSelected.length > 0 ? dateKeys.filter((key) => colorSelected[0]?.[key] !== "") : []

  const verifyDisabled = (data) => {
    if (
      data?.dt_repo1 === "" &&
      data?.dt_repo2 === "" &&
      data?.dt_repo3 === "" &&
      data?.dt_repo4 === "" &&
      data?.dt_repo5 === "" &&
      data?.dt_repo6 === ""
    ) {
      return true
    }
    return false
  }

  //filtrar o orderByStock para mostrar apenas as cores que tem disponibilidade futura
  const orderByStockWithFutureAvailability = orderByStock?.filter((data) => {
    if (
      data?.dt_repo1 !== "" ||
      data?.dt_repo2 !== "" ||
      data?.dt_repo3 !== "" ||
      data?.dt_repo4 !== "" ||
      data?.dt_repo5 !== "" ||
      data?.dt_repo6 !== ""
    ) {
      return true
    }
    return false
  })

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <S.ModalButton>
          <span className="text-button">
            Consultar disponibilidade futura <RiFileListFill />
          </span>
        </S.ModalButton>
      </Dialog.Trigger>
      <Dialog.Portal>
        <S.ModalOverlay>
          <S.ModalContent>
            <S.ModalCloseButton asChild>
              <button>
                <AiFillCloseCircle />
              </button>
            </S.ModalCloseButton>
            <S.ModalTitle>Disponibilidade futura</S.ModalTitle>
            <S.ColorInputContent>
              {orderByStockWithFutureAvailability?.map((data, index) => (
                <ColorInputComponent
                  key={index}
                  backgroundColor={data.rgb_cor}
                  onClick={() => handleSelectedColor(data.id_cor)}
                  selectedColor={colorSelected && colorSelected.length > 0 && colorSelected[0]?.id_cor === data.id_cor}
                  disabled={verifyDisabled(data)}
                />
              ))}
            </S.ColorInputContent>
            <S.ColorSelected>
              <span>Cor do produto:</span>{" "}
              <span>{colorSelected && setFirstLetterUpperCase(colorSelected[0]?.nome_cor)}</span>{" "}
              {colorSelected && colorSelected[0]?.rgb_cor && (
                <ColorInputComponent backgroundColor={colorSelected[0]?.rgb_cor} />
              )}
              {colorSelected && verifyDisabled(colorSelected[0]) && <span className="noStock">(sem estoque)</span>}
            </S.ColorSelected>
            {dateKeysWithValues.length > 0 && (
              <>
                <S.Wrapper>
                  <S.ColorTableInfo>
                    <S.ColorTableHeader>
                      <span>Data prevista</span>
                    </S.ColorTableHeader>

                    {colorSelected &&
                      dateKeysWithValues.map((key, index) => (
                        <React.Fragment key={key}>
                          <S.ColorTableRow>
                            <span>
                              {colorSelected[0]?.[key] === ""
                                ? "Sem previsão"
                                : format(new Date(colorSelected[0]?.[key]), "dd/MM/yyyy")}
                            </span>
                          </S.ColorTableRow>
                          {index < dateKeysWithValues.length - 1 && <S.RowDivider />}{" "}
                        </React.Fragment>
                      ))}
                  </S.ColorTableInfo>
                  {positionKeysWithValues.length > 0 && (
                    <S.ColorTableInfo>
                      <S.ColorTableHeader>
                        <span>Quantidade</span>
                      </S.ColorTableHeader>
                      {colorSelected &&
                        positionKeysWithValues.map((key, index) => (
                          <React.Fragment key={key}>
                            <S.ColorTableRow>
                              <span>{formatNumber(colorSelected[0][key])}</span>
                            </S.ColorTableRow>
                            {index < positionKeysWithValues.length - 1 && <S.RowDivider />}{" "}
                          </React.Fragment>
                        ))}
                    </S.ColorTableInfo>
                  )}
                </S.Wrapper>
                <S.Wrapper>
                  {positionKeysWithValues.length > 0 && (
                    <>
                      <S.ColorTableInfo>
                        <S.ColorTableFooter>
                          <span>Total</span>
                        </S.ColorTableFooter>
                      </S.ColorTableInfo>
                      <S.ColorTableInfo>
                        <S.ColorTableFooter>
                          <span>{isNaN(summary) ? 0 : formatNumber(summary)}</span>
                        </S.ColorTableFooter>
                      </S.ColorTableInfo>
                    </>
                  )}
                </S.Wrapper>
              </>
            )}

            {dateKeysWithValues.length === 0 && (
              <S.ColorTableInfo>
                <S.ColorTableHeader>
                  <span>Sem previsão de reposição</span>
                </S.ColorTableHeader>
              </S.ColorTableInfo>
            )}
          </S.ModalContent>
        </S.ModalOverlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
