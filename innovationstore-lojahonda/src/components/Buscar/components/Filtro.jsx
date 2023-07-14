import { ChevronDownIcon, PhoneIcon, Search2Icon } from "@chakra-ui/icons"
import {
  Button,
  ChakraProvider,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Popover,
  PopoverContent,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Skeleton,
  Spinner,
  Stack,
  Tooltip,
  useDisclosure,
  useWhyDidYouUpdate,
} from "@chakra-ui/react"
import React, { useEffect, useState } from "react"
import { cor_base_1, cor_base_2 } from "../../../services/cores"
import {
  BoxCor,
  BuscarContentFiltro,
  BuscarContentFiltroContent,
  BuscarContentFiltroContentControl,
  BuscarContentFiltroContentControlCustom,
  BuscarContentFiltroContentControlCustomItem,
  BuscarContentFiltroContentControlItem,
  BuscarContentFiltroContentControlItemBrindes,
  BuscarContentFiltroContentControlItemBrindesContent,
  BuscarContentFiltroContentControlItemBrindesContentGrid,
  BuscarContentFiltroContentControlItemBrindesContentGridColumn,
  BuscarContentFiltroContentControlItemBrindesContentImgProd,
  BuscarContentFiltroContentControlItemBrindesCores,
  BuscarContentFiltroContentControlItemBrindesCoresBody,
  BuscarContentFiltroContentControlItemBrindesCoresHeader,
  BuscarContentFiltroContentControlItemBrindesPrazo,
  BuscarContentFiltroContentControlItemBrindesPrazoBody,
  BuscarContentFiltroContentControlItemGridCores,
  BuscarContentFiltroContentControlItemSubmit,
  BuscarContentFiltroContentControlPrazo,
  BuscarContentFiltroContentControlPrazoGrid,
  BuscarContentFiltroContentHeader,
  BuscarContentFiltroContentHeaderMobile,
  BuscarContentFiltroContentHeaderMobileTitle,
  BuscarContentFiltroContentSubmit,
  BuscarContentSlideTopoFilterBodyBrindesMobile,
  BuscarContentSlideTopoFilterBodyBrindesMobileContent,
  BuscarContentSlideTopoFilterBodyBrindesMobileContentGrid,
  BuscarContentSlideTopoFilterBodyBrindesMobileContentGridColumn,
  BuscarContentSlideTopoFilterBodyBrindesMobileContentImgProd,
  BuscarContentSlideTopoFilterControlItem,
  BuscarContentSlideTopoFilterControlItemText,
  CategoriasModalMobile,
  PrazoItem,
} from "./styled"

import {
  buscaCoresDisponiveis,
  buscaFaixaDePreco,
  dadosSubCategorias,
  ListaPrazoDeProducao,
} from "../../../services/api"
import {
  HomeContentSlideTopoFilterControlItem,
  HomeContentSlideTopoFilterControlItemText,
} from "../../Home/components/styles"
import { BagCheck, Check, CheckAll, ChevronLeft, ChevronRight } from "react-bootstrap-icons"
import moment from "moment"
import { colorBaseUltraRapido } from "../../UltraRapido/component/FlexFiltroUltraRapido/styles"

export default function FiltroBusca({
  subcategorias,
  viewBrindes,
  isUltraRapido,
  cor_selecionadas,
  quantidade_selecionada,
  valor_de = 0,
  valor_ate = 500,
  atualizarBusca,
  count_produtos,
  texto_buscado,
  subcategoria_carregada,
  filtro_categoria = true,
  nome_categoria = null,
  styles = null,
  active_load = () => {},
  ocultar_whats = () => {},
}) {
  var [viewBrindes, setViewBrindes] = useState(true)
  var [viewCor, setViewCor] = useState(false)
  var [viewPrazo, setViewPrazo] = useState(false)
  var [imageCategoria, setImageCategoria] = useState("1012055")

  var [selectCategoria, setSelectCategoria] = useState(null)
  var [selectCor, setSelectCor] = useState([])
  var [selectPrazo, setSelectPrazo] = useState({
    data_producao: null,
    date_format: null,
    nome_data: null,
    prazo: "10",
  })
  var [listaCores, setListaCores] = useState([])

  var [corBuscada, setCorBuscada] = useState("")
  var [prazoDeProducao, setPrazoProducao] = useState([])

  var [quantidade, setQuantidade] = useState(null)
  var [valorDe, setValorDe] = useState(valor_de)
  var [valorAte, setValorAte] = useState(valor_ate)
  var [fixValue, setFixValue] = useState([0, 100])

  var [textoBuscado, setTextoBuscado] = useState(texto_buscado)
  var [subcategoriaCarregada, setSubcategoriaCarregada] = useState(subcategoria_carregada)

  var [faixaDePreco, setFaixaDePreco] = useState([0, 100])
  var [loadingPreco, setLoadingPreco] = useState(false)
  const [sliderValue, setSliderValue] = useState([0, 100])
  const [showTooltip, setShowTooltip] = useState(false)

  const [input1, setInput1] = useState(0)
  const [input2, setInput2] = useState(500)

  const [inputBlock1, setInput1Block] = useState(false)
  const [inputBlock2, setInput2Block] = useState(false)
  const [sliderDisable, setSliderDisable] = useState(false)
  const [clickSlider, setClickSlider] = useState(false)
  const [viewMenuMobile, setViewMenuMobile] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [isOpenMenu, setIsOpen] = useState(false)
  const open = () => setIsOpen(!isOpenMenu)
  const close = () => setIsOpen(false)
  const initialFocusRef = React.useRef()
  const [sortBanner, setSortBanner] = useState(0)
  const [isMobile, setMobile] = useState(false)

  var typingTimer
  var timerRange

  const meses = {
    January: "Jan",
    February: "Fev",
    March: "Mar",
    April: "Abr",
    May: "Mai",
    June: "Jun",
    July: "Jul",
    August: "Ago",
    September: "Set",
    October: "Out",
    November: "Nov",
    December: "Dez",
  }

  const selectMenuCores = async (item) => {
    if (selectCor.length == 0) {
      var cores = selectCor
      cores.push(item)
      setSelectCor(cores)
      setViewCor(!viewCor)
    } else {
      var pos = selectCor
        .map(function (e) {
          return e.cod
        })
        .indexOf(item.cod)

      if (pos >= 0) {
        var cores = selectCor
        cores.splice(pos, 1)
        setSelectCor(cores)
        setViewCor(!viewCor)
      } else {
        var cores = selectCor
        cores.push(item)
        setSelectCor(cores)
        setViewCor(!viewCor)
      }
    }
  }

  const selectMenuPrazo = (item) => {
    if (selectPrazo != null && selectPrazo.prazo == item.prazo) {
      setSelectPrazo(null)
    } else {
      setSelectPrazo(item)
      setViewPrazo(!viewPrazo)
    }
  }

  const buscaProdutoFiltro = async (item = null, type = null, btn_mobile = false) => {
    if (btn_mobile || !isMobile) {
      active_load()
      setSliderDisable(true)
      setClickSlider(false)
      var faixa_de_preco = []
      if (type == "prazo") {
        selectPrazo = item
      } else if (type == "subcat") {
        selectCategoria = item
        await buscaCores(selectCategoria)
        faixa_de_preco = await getFaixaDePreco(selectCategoria)
      }

      if (selectCategoria != null) {
        setTextoBuscado(null)
      }

      await atualizarBusca({
        subcategoria_selecionada: selectCategoria,
        cor_selecionada: selectCor
          .map(function (e) {
            return e.cod
          })
          .join(","),
        prazo_selecionado: selectPrazo,
        quantidade_selecionada: ifnull(quantidade, "") != "" ? parseInt(quantidade) : "",
        valor_de_selecionado: faixa_de_preco.length > 0 ? faixa_de_preco[0] : valorDe,
        valor_ate_selecionado: faixa_de_preco.length > 0 ? faixa_de_preco[1] : valorAte,
        texto_buscado: selectCategoria != null ? null : textoBuscado,
      })

      setSliderDisable(false)
    }
  }

  async function buscaCores(item) {
    if (item.cod != undefined) {
      try {
        setListaCores([])
        var param = {
          codigo_categoria: null,
          codigo_subcategoria: item.cod,
        }

        const responseCores = await buscaCoresDisponiveis.post("", param)
        var dadosCor = responseCores.data

        var cores = []
        for (var cor of dadosCor) {
          cores.push({
            name: cor.nome_cor.trim(),
            cod: cor.codigo_cor,
            rgb: cor.rgb_cores,
          })
        }

        cores.sort(function (a, b) {
          if (a.name > b.name) {
            return 1
          }
          if (a.name < b.name) {
            return -1
          }
          return 0
        })

        setListaCores(cores)
      } catch (error) {
        setListaCores([])
      }
    }
  }

  async function getFaixaDePreco(item) {
    try {
      setLoadingPreco(true)

      var param = {
        categoria: String(item.cod),
        id_cor: null,
        quantidade: quantidade == null ? 1000 : quantidade,
      }

      const response = await buscaFaixaDePreco.post("", param)
      var dados = response.data

      if (parseFloat(dados.valor_maximo) > 1000) {
        dados.valor_maximo = 800.0
      }

      setValorDe(Math.round(dados.valor_minimo * 100) / 100)
      setValorAte(Math.round(dados.valor_maximo * 100) / 100)
      setFixValue([Math.round(dados.valor_minimo * 100) / 100, Math.round(dados.valor_maximo * 100) / 100])
      setFaixaDePreco([parseFloat(dados.valor_minimo), parseFloat(dados.valor_maximo)])
      setSliderValue([parseFloat(dados.valor_minimo), parseFloat(dados.valor_maximo)])
      setLoadingPreco(false)

      return [Math.round(dados.valor_minimo * 100) / 100, Math.round(dados.valor_maximo * 100) / 100]
    } catch (error) {
      setLoadingPreco(false)
      console.log(Object.keys(error), error.message)
    }
  }

  function ifnull(a, b) {
    if (a == "" || a == undefined || a == null) {
      return b
    } else {
      return a
    }
  }

  useEffect(async () => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      setMobile(true)
    } else {
      setMobile(false)
    }

    setSortBanner(Math.floor(Math.random() * 3))

    const responsePrazo = await ListaPrazoDeProducao.get("1")
    var dadosPrazo = responsePrazo.data
    setPrazoProducao(dadosPrazo)

    const response = await dadosSubCategorias.post("", {})
    var dados = response.data

    var subcategorias = []
    for (var subcat of dados) {
      subcategorias.push({
        name: subcat.descricao_grupo_produto.trim(),
        cod: subcat.codigo_grupo_produto,
      })
    }

    subcategorias.sort(function (a, b) {
      if (a.name > b.name) {
        return 1
      }
      if (a.name < b.name) {
        return -1
      }

      return 0
    })

    if (textoBuscado == null && nome_categoria == null) {
      var filtros = JSON.parse(localStorage.getItem("filtro-rapido"))

      if (filtros.subcategoria != undefined && filtros.subcategoria != "") {
        var subcategoria = null
        if (filtros.subcategoria.indexOf(",") != -1) {
          subcategorias.map((item) => {
            if (item.cod == parseInt(filtros.subcategoria.split(","))) {
              subcategoria = item
            }
          })
        } else {
          subcategorias.map((item) => {
            if (item.cod == parseInt(filtros.subcategoria)) {
              subcategoria = item
            }
          })
        }
        setSelectCategoria(subcategoria)
        // buscaCores(subcategoria.cod)

        if (subcategoria.cod != undefined) {
          try {
            setListaCores([])
            var param = {
              codigo_categoria: null,
              codigo_subcategoria: subcategoria.cod,
            }

            const responseCores = await buscaCoresDisponiveis.post("", param)
            var dadosCor = responseCores.data

            var cores = []
            for (var cor of dadosCor) {
              cores.push({
                name: cor.nome_cor.trim(),
                cod: cor.codigo_cor,
                rgb: cor.rgb_cores,
              })
            }

            cores.sort(function (a, b) {
              if (a.name > b.name) {
                return 1
              }
              if (a.name < b.name) {
                return -1
              }
              return 0
            })

            setListaCores(cores)
          } catch (error) {
            setListaCores([])
          }
        }
      }

      if (filtros.quantidade != undefined && filtros.quantidade != "") {
        setQuantidade(filtros.quantidade)
      }

      if (filtros.valor_inicial != undefined && filtros.valor_inicial != "") {
        setValorDe(filtros.valor_inicial)
      }
      if (filtros.valor_final != undefined && filtros.valor_final != "") {
        setValorAte(filtros.valor_final)
      }

      setFixValue([valorDe, valorAte])
      setFaixaDePreco([parseFloat(valorDe), parseFloat(valorAte)])
      setSliderValue([parseFloat(valorDe), parseFloat(valorAte)])
    } else {
      setLoadingPreco(true)
      var subcategoria = null

      const res = subcategorias.map(async (item) => {
        if (item.cod == subcategoria_carregada[0]) {
          subcategoria = item
        }
      })

      setSelectCategoria(subcategoria)

      setListaCores([])
      var param = {
        codigo_categoria: null,
        codigo_subcategoria: subcategoria.cod,
      }

      const responseCores = await buscaCoresDisponiveis.post("", param)
      var dadosCor = responseCores.data

      var cores = []
      for (var cor of dadosCor) {
        cores.push({
          name: cor.nome_cor.trim(),
          cod: cor.codigo_cor,
          rgb: cor.rgb_cores,
        })
      }

      cores.sort(function (a, b) {
        if (a.name > b.name) {
          return 1
        }
        if (a.name < b.name) {
          return -1
        }
        return 0
      })

      setListaCores(cores)

      var param = {
        categoria: String(subcategoria.cod),
        id_cor: null,
        quantidade: null,
      }

      const response = await buscaFaixaDePreco.post("", param)
      var dados = response.data

      setValorDe(Math.round(dados.valor_minimo * 100) / 100)
      setValorAte(Math.round(dados.valor_maximo * 100) / 100)
      setFixValue([Math.round(dados.valor_minimo * 100) / 100, Math.round(dados.valor_maximo * 100) / 100])
      setFaixaDePreco([parseFloat(dados.valor_minimo), parseFloat(dados.valor_maximo)])
      setSliderValue([parseFloat(dados.valor_minimo), parseFloat(dados.valor_maximo)])
      setLoadingPreco(false)
    }

    window.addEventListener("scroll", function () {
      setScrollY(window.scrollY)
    })
  }, [])

  return (
    <ChakraProvider>
      <BuscarContentFiltro isUltraRapido={isUltraRapido} viewMenuMobile={viewMenuMobile} scrollY={scrollY}>
        <BuscarContentFiltroContent isUltraRapido={isUltraRapido} style={styles != null ? styles : {}}>
          <BuscarContentFiltroContentHeader
            isMobile={isMobile}
            isUltraRapido={isUltraRapido}
            viewMenuMobile={viewMenuMobile}
            scrollY={scrollY}
          >
            {isUltraRapido ? (
              <>
                <h1>
                  {isMobile
                    ? scrollY < 100
                      ? "Aqui é rapidinho!"
                      : ""
                    : scrollY < 100
                    ? "Aqui é rapidinho!"
                    : "Aqui é rapidinho!"}
                </h1>
                {isMobile ? (
                  scrollY < 100 ? (
                    <h2
                      style={
                        selectCategoria != null ? (selectCategoria.name.length > 15 ? { fontSize: "25px" } : {}) : {}
                      }
                    >
                      Encontramos{" "}
                      <span>
                        {count_produtos} {count_produtos == 1 ? "modelo" : "modelos"}
                      </span>{" "}
                      de{" "}
                      {nome_categoria == null
                        ? textoBuscado != null
                          ? textoBuscado
                          : selectCategoria != null
                          ? selectCategoria.name
                          : `pronto para retirada em`
                        : nome_categoria}{" "}
                      em <strong>1 DIA!*</strong>
                    </h2>
                  ) : (
                    <></>
                  )
                ) : (
                  <h2
                    style={
                      selectCategoria != null ? (selectCategoria.name.length > 15 ? { fontSize: "25px" } : {}) : {}
                    }
                  >
                    Encontramos{" "}
                    <span>
                      {count_produtos} {count_produtos == 1 ? "modelo" : "modelos"}
                    </span>{" "}
                    de{" "}
                    {nome_categoria == null
                      ? textoBuscado != null
                        ? textoBuscado
                        : selectCategoria != null
                        ? selectCategoria.name
                        : `pronto para retirada em`
                      : nome_categoria}{" "}
                    em <strong>1 DIA!*</strong>
                  </h2>
                )}
              </>
            ) : (
              <>
                <h1>{isMobile ? (scrollY < 100 ? "No alvo!" : "") : scrollY < 100 ? "No alvo!" : "No alvo!"}</h1>
                {isMobile ? (
                  scrollY < 100 ? (
                    <h2
                      style={
                        selectCategoria != null ? (selectCategoria.name.length > 15 ? { fontSize: "25px" } : {}) : {}
                      }
                    >
                      Encontramos{" "}
                      <span>
                        {count_produtos} {count_produtos == 1 ? "modelo" : "modelos"}
                      </span>{" "}
                      de{" "}
                      {nome_categoria == null
                        ? textoBuscado != null
                          ? textoBuscado
                          : selectCategoria != null
                          ? selectCategoria.name
                          : "..."
                        : nome_categoria}
                      !
                    </h2>
                  ) : (
                    <></>
                  )
                ) : (
                  <h2
                    style={
                      selectCategoria != null ? (selectCategoria.name.length > 15 ? { fontSize: "25px" } : {}) : {}
                    }
                  >
                    Encontramos{" "}
                    <span>
                      {count_produtos} {count_produtos == 1 ? "modelo" : "modelos"}
                    </span>{" "}
                    de{" "}
                    {nome_categoria == null
                      ? textoBuscado != null
                        ? textoBuscado
                        : selectCategoria != null
                        ? selectCategoria.name
                        : "..."
                      : nome_categoria}
                    !
                  </h2>
                )}
              </>
            )}

            <p>Filtrar resultado</p>

            <button
              onClick={() => {
                if (viewMenuMobile) {
                  window.scrollTo(0, 0)
                  document.getElementsByTagName("html")[0].style.overflow = "scroll"
                } else {
                  window.scrollTo(0, 0)
                  document.getElementsByTagName("html")[0].style.overflow = "hidden"
                }
                setViewMenuMobile(!viewMenuMobile)
                ocultar_whats(false)
              }}
            >
              {viewMenuMobile ? "X" : "Ver filtros"}
            </button>
          </BuscarContentFiltroContentHeader>

          <BuscarContentFiltroContentHeaderMobile isUltraRapido={isUltraRapido} viewMenuMobile={viewMenuMobile}>
            <BuscarContentFiltroContentHeaderMobileTitle isUltraRapido={isUltraRapido}>
              <h1>FILTROS</h1>
              <span
                onClick={() => {
                  window.scrollTo(0, 0)
                  setViewMenuMobile(false)
                  document.getElementsByTagName("html")[0].style.overflow = "scroll"
                  ocultar_whats(true)
                }}
              >
                X
              </span>
            </BuscarContentFiltroContentHeaderMobileTitle>
          </BuscarContentFiltroContentHeaderMobile>

          <BuscarContentFiltroContentControl viewMenuMobile={viewMenuMobile}>
            <BuscarContentFiltroContentControlItem
              style={!filtro_categoria ? { display: "none" } : {}}
              onClick={() => {
                setViewBrindes(!viewBrindes)
                open()
                if (isMobile) {
                  onOpen()
                }
              }}
            >
              <h1>Brinde</h1>
              {selectCategoria != null ? (
                <h2 style={selectCategoria.name.length > 15 ? { fontSize: "15px", whiteSpace: "nowrap" } : {}}>
                  {selectCategoria.name}
                </h2>
              ) : (
                <p>escolha a categoria de brinde que procura</p>
              )}
              <a>
                <ChevronDownIcon
                  mt="15px"
                  w={50}
                  fontSize={38}
                  color={isUltraRapido ? colorBaseUltraRapido : cor_base_1}
                />
              </a>

              <Popover
                initialFocusRef={initialFocusRef}
                isOpen={isOpenMenu}
                onOpen={open}
                onClose={close}
                styleConfig={{ outline: "none" }}
              >
                <PopoverContent>
                  <BuscarContentFiltroContentControlItemBrindes view={true}>
                    <BuscarContentFiltroContentControlItemBrindesContent view={true}>
                      <BuscarContentFiltroContentControlItemBrindesContentGrid>
                        <BuscarContentFiltroContentControlItemBrindesContentGridColumn isUltraRapido={isUltraRapido}>
                          {subcategorias != undefined ? (
                            subcategorias.map((item, idx) => {
                              return idx <= 10 ? (
                                <a
                                  onClick={() => {
                                    setSelectCategoria(item)
                                    setViewBrindes(false)
                                    buscaProdutoFiltro(item, "subcat")
                                    close()
                                  }}
                                  onMouseOver={() => setImageCategoria(item.cod)}
                                >
                                  {item.name}
                                </a>
                              ) : (
                                <></>
                              )
                            })
                          ) : (
                            <></>
                          )}
                        </BuscarContentFiltroContentControlItemBrindesContentGridColumn>

                        <BuscarContentFiltroContentControlItemBrindesContentGridColumn isUltraRapido={isUltraRapido}>
                          {subcategorias != undefined ? (
                            subcategorias.map((item, idx) => {
                              return idx > 10 && idx <= 21 ? (
                                <a
                                  onClick={() => {
                                    getFaixaDePreco(item)
                                    setSelectCategoria(item)
                                    setViewBrindes(false)
                                    buscaCores(item)
                                    buscaProdutoFiltro(item, "subcat")
                                    close()
                                  }}
                                  onMouseOver={() => setImageCategoria(item.cod)}
                                >
                                  {item.name}
                                </a>
                              ) : (
                                <></>
                              )
                            })
                          ) : (
                            <></>
                          )}
                        </BuscarContentFiltroContentControlItemBrindesContentGridColumn>

                        <BuscarContentFiltroContentControlItemBrindesContentGridColumn isUltraRapido={isUltraRapido}>
                          {subcategorias != undefined ? (
                            subcategorias.map((item, idx) => {
                              return idx > 21 && idx <= 32 ? (
                                <a
                                  onClick={() => {
                                    getFaixaDePreco(item)
                                    setSelectCategoria(item)
                                    setViewBrindes(false)
                                    buscaCores(item)
                                    buscaProdutoFiltro(item, "subcat")
                                    close()
                                  }}
                                  onMouseOver={() => setImageCategoria(item.cod)}
                                >
                                  {item.name}
                                </a>
                              ) : (
                                <></>
                              )
                            })
                          ) : (
                            <></>
                          )}
                        </BuscarContentFiltroContentControlItemBrindesContentGridColumn>

                        <BuscarContentFiltroContentControlItemBrindesContentGridColumn isUltraRapido={isUltraRapido}>
                          {subcategorias != undefined ? (
                            subcategorias.map((item, idx) => {
                              return idx > 32 && idx <= 43 ? (
                                <a
                                  onClick={() => {
                                    getFaixaDePreco(item)
                                    setSelectCategoria(item)
                                    setViewBrindes(false)
                                    buscaCores(item)
                                    buscaProdutoFiltro(item, "subcat")
                                    close()
                                  }}
                                  onMouseOver={() => setImageCategoria(item.cod)}
                                >
                                  {item.name}
                                </a>
                              ) : (
                                <></>
                              )
                            })
                          ) : (
                            <></>
                          )}
                        </BuscarContentFiltroContentControlItemBrindesContentGridColumn>

                        <BuscarContentFiltroContentControlItemBrindesContentGridColumn isUltraRapido={isUltraRapido}>
                          {subcategorias != undefined ? (
                            subcategorias.map((item, idx) => {
                              return idx > 43 && idx <= 54 ? (
                                <a
                                  onClick={() => {
                                    getFaixaDePreco(item)
                                    setSelectCategoria(item)
                                    setViewBrindes(false)
                                    buscaCores(item)
                                    buscaProdutoFiltro(item, "subcat")
                                    close()
                                  }}
                                  onMouseOver={() => setImageCategoria(item.cod)}
                                >
                                  {item.name}
                                </a>
                              ) : (
                                <></>
                              )
                            })
                          ) : (
                            <></>
                          )}
                        </BuscarContentFiltroContentControlItemBrindesContentGridColumn>

                        <BuscarContentFiltroContentControlItemBrindesContentGridColumn isUltraRapido={isUltraRapido}>
                          {subcategorias != undefined ? (
                            subcategorias.map((item, idx) => {
                              return idx > 54 ? (
                                <a
                                  onClick={() => {
                                    getFaixaDePreco(item)
                                    setSelectCategoria(item)
                                    setViewBrindes(false)
                                    buscaCores(item)
                                    buscaProdutoFiltro(item, "subcat")
                                    close()
                                  }}
                                  onMouseOver={() => setImageCategoria(item.cod)}
                                >
                                  {item.name}
                                </a>
                              ) : (
                                <></>
                              )
                            })
                          ) : (
                            <></>
                          )}
                        </BuscarContentFiltroContentControlItemBrindesContentGridColumn>
                      </BuscarContentFiltroContentControlItemBrindesContentGrid>

                      {/* <BuscarContentFiltroContentControlItemBrindesContentImgProd>
                                                <img src={`/images/categoria-images/${imageCategoria}.jpg`}/>
                                            </BuscarContentFiltroContentControlItemBrindesContentImgProd> */}
                    </BuscarContentFiltroContentControlItemBrindesContent>
                  </BuscarContentFiltroContentControlItemBrindes>
                </PopoverContent>
              </Popover>

              <Button mt={4} onClick={onOpen} display="none">
                Open Modal
              </Button>

              <CategoriasModalMobile isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Categorias</ModalHeader>
                  <ModalCloseButton outline={"none"} _focus={{ border: "none", backgroundColor: "transparent" }} />
                  <ModalBody overflowY={"scroll"}>
                    <BuscarContentSlideTopoFilterBodyBrindesMobileContentGrid>
                      <BuscarContentSlideTopoFilterBodyBrindesMobileContentGridColumn>
                        {subcategorias != undefined ? (
                          subcategorias.map((item, idx) => {
                            return (
                              <a
                                onClick={() => {
                                  getFaixaDePreco(item)
                                  setSelectCategoria(item)
                                  setViewBrindes(false)
                                  buscaCores(item)
                                  buscaProdutoFiltro(item, "subcat")
                                  onClose()
                                }}
                              >
                                {item.name}
                              </a>
                            )
                          })
                        ) : (
                          <></>
                        )}
                      </BuscarContentSlideTopoFilterBodyBrindesMobileContentGridColumn>
                    </BuscarContentSlideTopoFilterBodyBrindesMobileContentGrid>
                  </ModalBody>
                  <ModalFooter></ModalFooter>
                </ModalContent>
              </CategoriasModalMobile>
            </BuscarContentFiltroContentControlItem>

            <BuscarContentSlideTopoFilterControlItem>
              <BuscarContentSlideTopoFilterControlItemText wid={90} value={true}>
                <div className="title">
                  <p>
                    A partir de: <strong>R$</strong>
                    <input
                      type="text"
                      id="value-min"
                      value={parseFloat(valorDe) > 0 ? valorDe.toFixed(2) : valorDe}
                      onChange={(e) => {
                        // if(e.target.value < valorAte - 0.5){
                        setValorDe(e.target.value)
                        // }
                      }}
                      onKeyUp={() => {
                        clearTimeout(typingTimer)
                        typingTimer = setTimeout(function () {
                          if (parseFloat(valorDe) < parseFloat(valorAte) - 0.5) {
                            setSliderValue([valorDe, sliderValue[1]])
                            buscaProdutoFiltro(selectCategoria)
                          } else {
                            setValorDe(parseFloat(valorAte) - 1)
                            setSliderValue([parseFloat(valorAte) - 1, sliderValue[1]])
                            buscaProdutoFiltro(selectCategoria)
                          }
                        }, 1500)
                      }}
                      onKeyDown={() => {
                        clearTimeout(typingTimer)
                      }}
                    />
                  </p>
                  <p>
                    Valor Máximo: <strong>R$</strong>
                    <input
                      type="text"
                      id="value-max"
                      value={parseFloat(valorAte) > 0 ? valorAte.toFixed(2) : valorAte}
                      onChange={(e) => {
                        // if(e.target.value < valorAte - 0.5){
                        setValorAte(e.target.value)
                        // }
                      }}
                      onKeyUp={() => {
                        clearTimeout(typingTimer)
                        typingTimer = setTimeout(function () {
                          if (parseFloat(valorAte) > parseFloat(valorDe) + 0.5) {
                            setSliderValue([sliderValue[0], valorAte])
                            buscaProdutoFiltro(selectCategoria)
                          } else {
                            setValorAte(parseFloat(valorDe) + 1)
                            setSliderValue([sliderValue[0], parseFloat(valorDe) + 1])
                            buscaProdutoFiltro(selectCategoria)
                          }
                        }, 1500)
                      }}
                      onKeyDown={() => {
                        clearTimeout(typingTimer)
                      }}
                    />
                  </p>
                </div>

                {loadingPreco ? (
                  <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color={isUltraRapido ? "#fca62e" : "#cc0000"}
                    size="md"
                    position={"relative"}
                    marginLeft={"auto"}
                    marginRight={"auto"}
                  />
                ) : (
                  <RangeSlider
                    aria-label={["min", "max"]}
                    colorScheme={isUltraRapido ? "#fca62e" : "#cc0000"}
                    defaultValue={[0, faixaDePreco[1]]}
                    min={faixaDePreco[0]}
                    max={faixaDePreco[1]}
                    value={[sliderValue[0], sliderValue[1]]}
                    step={0.2}
                    onClick={() => {
                      buscaProdutoFiltro(selectCategoria)
                    }}
                    onTouchEnd={() => {
                      buscaProdutoFiltro(selectCategoria)
                    }}
                    isDisabled={sliderDisable}
                    onChange={(v) => {
                      setClickSlider(true)
                      if (v[0] != valorDe) {
                        setSliderValue([v[0], valorAte])
                        setValorDe(v[0])
                      } else if (v[1] != valorAte) {
                        setSliderValue([valorDe, v[1]])
                        setValorAte(v[1])
                      }
                    }}
                    onMouseEnter={() => {
                      setShowTooltip(true)
                      setSliderDisable(false)
                    }}
                    onMouseLeave={() => {
                      setShowTooltip(false)
                      // alert(clickSlider)
                      if (clickSlider) {
                        setSliderDisable(true)
                        buscaProdutoFiltro(selectCategoria)
                      }
                    }}
                  >
                    <RangeSliderTrack h={2} bg={isUltraRapido ? "#FAFAD2" : "#cc0000"}>
                      <RangeSliderFilledTrack bg={isUltraRapido ? "#fca62e" : "#cc0000"} />
                    </RangeSliderTrack>

                    <Tooltip
                      hasArrow
                      bg={cor_base_2}
                      color="white"
                      placement="top"
                      isOpen={showTooltip}
                      label={`R$ ${parseFloat(valorDe).toFixed(2)}`}
                    >
                      <RangeSliderThumb
                        boxSize={4}
                        index={0}
                        bg={cor_base_2}
                        transition={"0s"}
                        _focus={{ backgroundColor: cor_base_2, transition: "0s" }}
                      >
                        <div
                          id="index-1"
                          onClick={() => buscaProdutoFiltro(selectCategoria)}
                          style={{ width: "100%", height: "100%", backgroundColor: "transparent" }}
                        ></div>
                      </RangeSliderThumb>
                    </Tooltip>

                    <Tooltip
                      hasArrow
                      bg={cor_base_2}
                      color="white"
                      placement="top"
                      isOpen={showTooltip}
                      label={`R$ ${parseFloat(valorAte).toFixed(2)}`}
                    >
                      <RangeSliderThumb
                        boxSize={4}
                        index={1}
                        bg={cor_base_2}
                        transition={"0s"}
                        _focus={{ backgroundColor: cor_base_2, transition: "0s" }}
                      >
                        <div
                          id="index-2"
                          onClick={() => buscaProdutoFiltro(selectCategoria)}
                          style={{ width: "100%", height: "100%", backgroundColor: "transparent" }}
                        ></div>
                      </RangeSliderThumb>
                    </Tooltip>
                  </RangeSlider>
                )}
              </BuscarContentSlideTopoFilterControlItemText>
            </BuscarContentSlideTopoFilterControlItem>

            <BuscarContentFiltroContentControlItem>
              <h1>Cor</h1>
              <BuscarContentFiltroContentControlItemGridCores templateColumns="repeat(auto-fill, 25px)">
                {listaCores.length == 0 ? (
                  <Stack width={"270px"} display={"flex"} justifyContent={"center"}>
                    <Skeleton height="20px" />
                    <Skeleton height="20px" />
                    <Skeleton height="20px" />
                  </Stack>
                ) : (
                  listaCores.map((item) => {
                    if (item.rgb.indexOf("/") != -1) {
                      return (
                        <BoxCor hasArrow label={item.name} bg={"black"}>
                          <div
                            className="boxcor"
                            onClick={async () => {
                              await selectMenuCores(item)
                              buscaProdutoFiltro()
                            }}
                            style={{
                              border: "1px solid rgb(200,200,200,1)",
                              backgroundImage:
                                "linear-gradient(to right, " +
                                item.rgb.split("/")[0] +
                                "," +
                                item.rgb.split("/")[0] +
                                "," +
                                item.rgb.split("/")[0] +
                                "," +
                                item.rgb.split("/")[1] +
                                "," +
                                item.rgb.split("/")[1] +
                                "," +
                                item.rgb.split("/")[1],
                            }}
                          >
                            {selectCor
                              .map(function (e) {
                                return e.cod
                              })
                              .indexOf(item.cod) != -1 ? (
                              <Check width={17} height={17} color={"rgb(220,220,220,1)"} />
                            ) : (
                              <></>
                            )}
                          </div>
                        </BoxCor>
                      )
                    } else {
                      return (
                        <BoxCor hasArrow label={item.name} bg={"black"}>
                          <div
                            className="boxcor"
                            onClick={async () => {
                              await selectMenuCores(item)
                              buscaProdutoFiltro()
                            }}
                            style={{ border: "1px solid rgb(200,200,200,1)", backgroundColor: item.rgb }}
                          >
                            {selectCor
                              .map(function (e) {
                                return e.cod
                              })
                              .indexOf(item.cod) != -1 ? (
                              <Check width={17} height={17} color={"rgb(220,220,220,1)"} />
                            ) : (
                              <></>
                            )}
                          </div>
                        </BoxCor>
                      )
                    }
                  })
                )}
              </BuscarContentFiltroContentControlItemGridCores>
            </BuscarContentFiltroContentControlItem>

            {isUltraRapido ? (
              <></>
            ) : (
              <BuscarContentFiltroContentControlPrazo>
                <h1>Prazo de produção</h1>
                <BuscarContentFiltroContentControlPrazoGrid templateColumns="repeat(auto-fill, 77px)">
                  {prazoDeProducao.map((item) => {
                    return (
                      <PrazoItem
                        onClick={() => {
                          selectMenuPrazo(item)
                          buscaProdutoFiltro(item, "prazo")
                        }}
                      >
                        <h1
                          style={
                            selectPrazo != null
                              ? item.prazo == selectPrazo.prazo
                                ? {
                                    backgroundColor: isUltraRapido ? "#FFE87C" : "#ccebb3",
                                    color: isUltraRapido ? "#fca62e" : "#376213",
                                    fontWeight: "bold",
                                  }
                                : {}
                              : {}
                          }
                        >
                          {moment(item.date_format).format("DD")}/{meses[moment(item.date_format).format("MMMM")]}
                        </h1>
                        <p>{item.nome_data}</p>
                      </PrazoItem>
                    )
                  })}
                </BuscarContentFiltroContentControlPrazoGrid>
              </BuscarContentFiltroContentControlPrazo>
            )}
            <BuscarContentFiltroContentControlItem isUltraRapido={isUltraRapido} wH={"100px"}>
              <h1>Quantidade</h1>
              <input
                type="text"
                min={1}
                step={"any"}
                placeholder="digite a quantidade"
                value={ifnull(quantidade, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                onChange={(e) => {
                  var value = e.target.value
                  if (parseInt(value.toString().replace(".", "")) <= 999999) {
                    setQuantidade(value.toString().replace(".", ""))
                  }
                }}
                onKeyPress={(e) => {
                  if (e.code == "Enter" || e.code == "NumpadEnter") {
                    buscaProdutoFiltro(selectCategoria, "subcat")
                  }
                }}
                // onKeyUp={()=>{
                //     clearTimeout(typingTimer);
                //     typingTimer = setTimeout(function(){buscaProdutoFiltro(selectCategoria,'subcat')}, 1500);
                // }}
                // onKeyDown={()=>{
                //     clearTimeout(typingTimer);
                // }}
                // onBlur={()=>{
                //     clearTimeout(typingTimer);
                //     buscaProdutoFiltro(selectCategoria,'subcat');
                // }}
              />
              <button onClick={() => buscaProdutoFiltro(selectCategoria, "subcat")}>Atualizar</button>
            </BuscarContentFiltroContentControlItem>

            <BuscarContentFiltroContentControlItemSubmit viewMenuMobile={viewMenuMobile} isUltraRapido={isUltraRapido}>
              <button
                onClick={() => {
                  buscaProdutoFiltro(null, null, true)
                  setViewMenuMobile(false)
                  window.scrollTo(0, 0)
                  document.getElementsByTagName("html")[0].style.overflow = "scroll"
                }}
              >
                Aplicar
              </button>
            </BuscarContentFiltroContentControlItemSubmit>
          </BuscarContentFiltroContentControl>
        </BuscarContentFiltroContent>
      </BuscarContentFiltro>
    </ChakraProvider>
  )
}
