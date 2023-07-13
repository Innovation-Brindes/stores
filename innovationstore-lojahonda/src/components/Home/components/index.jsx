import { ChevronDownIcon } from "@chakra-ui/icons"
import {
  Button,
  Center,
  ChakraProvider,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Spinner,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react"

import React, { useEffect, useLayoutEffect, useState } from "react"
import {
  ArrowBarLeft,
  ArrowLeft,
  BlockquoteLeft,
  Box,
  BoxArrowInLeft,
  CaretLeft,
  Cash,
  CashCoin,
  ChevronBarLeft,
  ChevronLeft,
  ChevronRight,
  JournalArrowDown,
} from "react-bootstrap-icons"
import { buscaFaixaDePreco } from "../../../services/api"
import { cor_base_1, cor_base_2 } from "../../../services/cores"
import { useRouter } from "next/router"
import {
  CategoriasModalMobile,
  HomeContentSlide,
  HomeContentSlideTopo,
  HomeContentSlideTopoBanner,
  HomeContentSlideTopoFilter,
  HomeContentSlideTopoFilterBodyBrindes,
  HomeContentSlideTopoFilterBodyBrindesContent,
  HomeContentSlideTopoFilterBodyBrindesContentGrid,
  HomeContentSlideTopoFilterBodyBrindesContentGridColumn,
  HomeContentSlideTopoFilterBodyBrindesContentImgProd,
  HomeContentSlideTopoFilterBodyBrindesMobile,
  HomeContentSlideTopoFilterBodyBrindesMobileContent,
  HomeContentSlideTopoFilterBodyBrindesMobileContentGrid,
  HomeContentSlideTopoFilterBodyBrindesMobileContentGridColumn,
  HomeContentSlideTopoFilterBodyBrindesMobileContentImgProd,
  HomeContentSlideTopoFilterControl,
  HomeContentSlideTopoFilterControlCustom,
  HomeContentSlideTopoFilterControlItem,
  HomeContentSlideTopoFilterControlItemArrow,
  HomeContentSlideTopoFilterControlItemText,
  HomeContentSlideTopoFilterControlSubmit,
  HomeContentSlideTopoFilterHeaderMobile,
  HomeContentSlideTopoFilterHeaderMobileInfo,
} from "./styles"

import { HomeContentSlideTopoFilterHeader } from "./styled"
import Image from "next/image"

const bg = "/images/bghome/bg-1.png"

const bgImg = {
  1: "https://imgproductioncrm.s3.us-east-2.amazonaws.com/alvo-caixa-som.jpg",
  2: "https://imgproductioncrm.s3.us-east-2.amazonaws.com/alvo-canetas.jpg",
  3: "https://imgproductioncrm.s3.us-east-2.amazonaws.com/alvo-chrrasco.jpg",
  4: "https://imgproductioncrm.s3.us-east-2.amazonaws.com/alvo-fone.jpg",
  5: "https://imgproductioncrm.s3.us-east-2.amazonaws.com/alvo-mochila.jpg",
  6: "https://imgproductioncrm.s3.us-east-2.amazonaws.com/alvo-squeeze.jpg",
}

export default function HomeFilter({ subcategorias, bannerRecesso }) {
  var [viewBrindes, setViewBrindes] = useState(true)
  var [imageCategoria, setImageCategoria] = useState("1012055")

  var [selectCategoria, setSelectCategoria] = useState(null)
  var [valorDe, setValorDe] = useState(0)
  var [valorAte, setValorAte] = useState(100)
  var [quantidade, setQuantidade] = useState(null)
  var [faixaDePreco, setFaixaDePreco] = useState([0, 100])
  var [fixValue, setFixValue] = useState([0, 100])
  var [bghome, setBG] = useState("https://imgproductioncrm.s3.us-east-2.amazonaws.com/alvo-caixa-som.jpg")
  var [loadingPreco, setLoadingPreco] = useState(false)
  var [enableButton, setButtonEnable] = useState(true)
  const [sliderValue, setSliderValue] = useState([0, 100])
  const [showTooltip, setShowTooltip] = useState(false)
  const [isTooltipEmptyOpen, setShowTooltipEmptyOpen] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isOpenMenu, setIsOpen] = useState(false)
  const open = () => setIsOpen(!isOpenMenu)
  const close = () => setIsOpen(false)
  const router = useRouter()

  const initialFocusRef = React.useRef()
  const [isMobile, setMobile] = useState(false)

  var typingTimer

  function filtrar() {
    if (selectCategoria == null) {
      setShowTooltipEmptyOpen(true)
      var timer = setTimeout(() => {
        setViewBrindes(true)
        setShowTooltipEmptyOpen(false)
        clearTimeout(timer)
      }, 5000)
    } else {
      localStorage.setItem(
        "filtro-rapido",
        JSON.stringify({
          categoria: null,
          subcategoria: String(selectCategoria.cod),
          quantidade: quantidade,
          valor_inicial: valorDe,
          valor_final: valorAte,
          cor: null,
        }),
      )
      router.push("/lojahonda/buscar")
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
      setButtonEnable(false)
    } catch (error) {
      setLoadingPreco(false)
      setButtonEnable(false)
      console.log(Object.keys(error), error.message)
    }
  }

  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  function ifnull(a, b) {
    if (a == null || a == undefined || a == "") {
      return b
    } else {
      return a
    }
  }

  useEffect(() => {
    setBG(bgImg[randomIntFromInterval(1, 6)])

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      setMobile(true)
    } else {
      setMobile(false)
    }
  }, [])

  return (
    <ChakraProvider>
      <HomeContentSlide bannerRecesso={bannerRecesso}>
        <HomeContentSlideTopo>
          <HomeContentSlideTopoFilter>
            <HomeContentSlideTopoFilterHeader>
              <h1>
                Acerte <br /> no alvo!
              </h1>
              <h2>
                Mire no brinde certo
                <br />
                <span>em poucos cliques.</span>
              </h2>
              <p>
                A gente personaliza e descomplica, ajudando você a <br />
                <strong>localizar com mais facilidade</strong> o brinde que você procura.
              </p>
            </HomeContentSlideTopoFilterHeader>

            <HomeContentSlideTopoFilterHeaderMobile>
              <HomeContentSlideTopoFilterHeaderMobileInfo>
                <img src={"https://imgproductioncrm.s3.us-east-2.amazonaws.com/no%20alvo.png"} alt="bg-home" />
                <div>
                  <h1>Acerte no alvo!</h1>
                  <h2>
                    Mire no brinde certo
                    <br />
                    <span>em poucos cliques.</span>
                  </h2>
                </div>
              </HomeContentSlideTopoFilterHeaderMobileInfo>

              <p>
                A gente personaliza e descomplica, ajudando você a <strong>localizar com mais facilidade</strong> o
                brinde que você procura.
              </p>
            </HomeContentSlideTopoFilterHeaderMobile>

            <HomeContentSlideTopoFilterControl>
              <HomeContentSlideTopoFilterControlItem
                onClick={() => {
                  setViewBrindes(true)
                  open()
                  if (isMobile) {
                    onOpen()
                  }
                }}
              >
                <HomeContentSlideTopoFilterControlItemText wid={100}>
                  <h1>Brinde</h1>
                  {selectCategoria != null ? (
                    <h2>{selectCategoria.name}</h2>
                  ) : (
                    <p className="placeholder-text">escolha a categoria de brinde que procura</p>
                  )}
                </HomeContentSlideTopoFilterControlItemText>

                <HomeContentSlideTopoFilterControlItemArrow
                  wid={20}
                  onClick={() => {
                    setViewBrindes(true)
                    open()
                    if (isMobile) {
                      onOpen()
                    }
                  }}
                >
                  <ChevronDownIcon mt="12px" w={50} fontSize={38} color={"#e2001b"} />
                </HomeContentSlideTopoFilterControlItemArrow>

                <Popover
                  initialFocusRef={initialFocusRef}
                  isOpen={isOpenMenu}
                  onOpen={open}
                  onClose={close}
                  styleConfig={{ outline: "none" }}
                >
                  <PopoverContent style={{ outline: "none" }}>
                    <HomeContentSlideTopoFilterBodyBrindes view={true}>
                      <HomeContentSlideTopoFilterBodyBrindesContent view={true}>
                        <HomeContentSlideTopoFilterBodyBrindesContentGrid>
                          <HomeContentSlideTopoFilterBodyBrindesContentGridColumn>
                            {subcategorias != undefined ? (
                              subcategorias.map((item, idx) => {
                                return idx <= 10 ? (
                                  <a
                                    onClick={() => {
                                      setSelectCategoria(item)
                                      getFaixaDePreco(item)
                                      setButtonEnable(false)
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
                          </HomeContentSlideTopoFilterBodyBrindesContentGridColumn>

                          <HomeContentSlideTopoFilterBodyBrindesContentGridColumn>
                            {subcategorias != undefined ? (
                              subcategorias.map((item, idx) => {
                                return idx > 10 && idx <= 21 ? (
                                  <a
                                    onClick={() => {
                                      setSelectCategoria(item)
                                      getFaixaDePreco(item)
                                      setButtonEnable(false)
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
                          </HomeContentSlideTopoFilterBodyBrindesContentGridColumn>

                          <HomeContentSlideTopoFilterBodyBrindesContentGridColumn>
                            {subcategorias != undefined ? (
                              subcategorias.map((item, idx) => {
                                return idx > 21 && idx <= 32 ? (
                                  <a
                                    onClick={() => {
                                      setSelectCategoria(item)
                                      getFaixaDePreco(item)
                                      setButtonEnable(false)
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
                          </HomeContentSlideTopoFilterBodyBrindesContentGridColumn>

                          <HomeContentSlideTopoFilterBodyBrindesContentGridColumn>
                            {subcategorias != undefined ? (
                              subcategorias.map((item, idx) => {
                                return idx > 32 && idx <= 43 ? (
                                  <a
                                    onClick={() => {
                                      setSelectCategoria(item)
                                      getFaixaDePreco(item)
                                      setButtonEnable(false)
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
                          </HomeContentSlideTopoFilterBodyBrindesContentGridColumn>

                          <HomeContentSlideTopoFilterBodyBrindesContentGridColumn>
                            {subcategorias != undefined ? (
                              subcategorias.map((item, idx) => {
                                return idx > 43 && idx <= 54 ? (
                                  <a
                                    onClick={() => {
                                      setSelectCategoria(item)
                                      getFaixaDePreco(item)
                                      setButtonEnable(false)
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
                          </HomeContentSlideTopoFilterBodyBrindesContentGridColumn>

                          <HomeContentSlideTopoFilterBodyBrindesContentGridColumn>
                            {subcategorias != undefined ? (
                              subcategorias.map((item, idx) => {
                                return idx > 54 ? (
                                  <a
                                    onClick={() => {
                                      setSelectCategoria(item)
                                      getFaixaDePreco(item)
                                      setButtonEnable(false)
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
                          </HomeContentSlideTopoFilterBodyBrindesContentGridColumn>
                        </HomeContentSlideTopoFilterBodyBrindesContentGrid>

                        <HomeContentSlideTopoFilterBodyBrindesContentImgProd>
                          <img alt="categoria-images" src={`/images/categoria-images/${imageCategoria}.jpg`} />
                        </HomeContentSlideTopoFilterBodyBrindesContentImgProd>
                      </HomeContentSlideTopoFilterBodyBrindesContent>
                    </HomeContentSlideTopoFilterBodyBrindes>
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
                      <HomeContentSlideTopoFilterBodyBrindesMobileContentGrid>
                        <HomeContentSlideTopoFilterBodyBrindesMobileContentGridColumn>
                          {subcategorias != undefined ? (
                            subcategorias.map((item, idx) => {
                              return (
                                <a
                                  onClick={() => {
                                    setSelectCategoria(item)
                                    setViewBrindes(true)
                                    getFaixaDePreco(item)
                                    onClose()
                                  }}
                                  onMouseOver={() => setImageCategoria(item.cod)}
                                >
                                  {item.name}
                                </a>
                              )
                            })
                          ) : (
                            <></>
                          )}
                        </HomeContentSlideTopoFilterBodyBrindesMobileContentGridColumn>
                      </HomeContentSlideTopoFilterBodyBrindesMobileContentGrid>
                    </ModalBody>
                    <ModalFooter></ModalFooter>
                  </ModalContent>
                </CategoriasModalMobile>
              </HomeContentSlideTopoFilterControlItem>

              <HomeContentSlideTopoFilterControlItem>
                <HomeContentSlideTopoFilterControlItemText wid={90} wH={"100px"}>
                  <h1>Quantidade</h1>
                  <input
                    id="quantidade"
                    type="text"
                    min="1"
                    placeholder="Digite a quantidade"
                    value={ifnull(quantidade, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                    onChange={(e) => {
                      var value = e.target.value
                      if (parseInt(value.toString().replace(".", "")) <= 999999) {
                        setQuantidade(value.toString().replace(".", ""))
                        setButtonEnable(true)
                      }
                    }}
                    onKeyUp={() => {
                      clearTimeout(typingTimer)
                      typingTimer = setTimeout(function () {
                        getFaixaDePreco(selectCategoria)
                      }, 1500)
                    }}
                    onKeyDown={() => {
                      clearTimeout(typingTimer)
                    }}
                  />
                </HomeContentSlideTopoFilterControlItemText>

                <HomeContentSlideTopoFilterControlItemArrow></HomeContentSlideTopoFilterControlItemArrow>
              </HomeContentSlideTopoFilterControlItem>

              <HomeContentSlideTopoFilterControlItem>
                <HomeContentSlideTopoFilterControlItemText wid={90} value={true}>
                  <div className="title">
                    <p>
                      A partir de: <strong>R$</strong>
                      <input
                        type="text"
                        value={valorDe >= 0 ? valorDe.toFixed(2) : valorDe}
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
                            } else {
                              setValorDe(parseFloat(valorAte) - 1)
                              setSliderValue([parseFloat(valorAte) - 1, sliderValue[1]])
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
                        value={valorAte >= 0 ? valorAte.toFixed(2) : valorAte}
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
                            } else {
                              setValorAte(parseFloat(valorDe) + 1)
                              setSliderValue([sliderValue[0], parseFloat(valorDe) + 1])
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
                      color={"#e2001b"}
                      size="md"
                      position={"relative"}
                      marginLeft={"auto"}
                      marginRight={"auto"}
                    />
                  ) : (
                    <RangeSlider
                      aria-label={["min", "max"]}
                      colorScheme={"#e2001b"}
                      defaultValue={[0, faixaDePreco[1]]}
                      min={faixaDePreco[0]}
                      max={faixaDePreco[1]}
                      value={[sliderValue[0], sliderValue[1]]}
                      step={0.1}
                      minStepsBetweenThumbs={1}
                      onChange={(v) => {
                        if (v[0] != valorDe) {
                          setSliderValue([v[0], valorAte])
                          setValorDe(v[0])
                        } else if (v[1] != valorAte) {
                          setSliderValue([valorDe, v[1]])
                          setValorAte(v[1])
                        }
                      }}
                      onMouseEnter={(e) => {
                        setShowTooltip(true)
                      }}
                      onMouseLeave={(e) => {
                        setShowTooltip(false)
                      }}
                    >
                      <RangeSliderTrack h={2} bg={"#e2001b"}>
                        <RangeSliderFilledTrack bg={"#e2001b"} />
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
                          boxSize={5}
                          onClick={(e) => {
                            // setSliderValue([valorDe+0.2,valorAte]);
                            setValorDe(valorDe + 0.2)
                          }}
                          index={0}
                          backgroundColor={"#e2001b"}
                        ></RangeSliderThumb>
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
                          boxSize={5}
                          onClick={(e) => {
                            // setSliderValue([valorDe+0.2,valorAte]);
                            setValorAte(valorAte - 0.2)
                          }}
                          index={1}
                          backgroundColor={"#e2001b"}
                        ></RangeSliderThumb>
                      </Tooltip>
                    </RangeSlider>
                  )}
                </HomeContentSlideTopoFilterControlItemText>
              </HomeContentSlideTopoFilterControlItem>

              <HomeContentSlideTopoFilterControlSubmit>
                <Tooltip
                  label="Selecione uma categoria para encontrarmos o seu brinde &#e2001b;"
                  paddingTop={15}
                  paddingLeft={4}
                  minWidth={"415px"}
                  minHeight={50}
                  borderRadius={5}
                  boxShadow="2px 2px 2px 2px rgb(0,0,0,0.2)"
                  placement="top-start"
                  isOpen={isTooltipEmptyOpen}
                >
                  <Button
                    width="295px"
                    borderRadius="23px"
                    onClick={() => filtrar()}
                    _hover={{}}
                    _focus={{}}
                    _disabled={{ backgroundColor: "rgb(0,0,0,0.2)" }}
                    disabled={enableButton}
                  >
                    Buscar brinde
                  </Button>
                </Tooltip>
              </HomeContentSlideTopoFilterControlSubmit>
            </HomeContentSlideTopoFilterControl>
          </HomeContentSlideTopoFilter>

          <HomeContentSlideTopoBanner>
            <Image
              width={1200}
              height={300}
              objectFit="cover"
              priority
              src={"https://imgproductioncrm.s3.us-east-2.amazonaws.com/no%20alvo%20honda.png"}
              alt="bg-home"
            />
            {/* <img src={bghome} alt="bg-home-mobile" className="mobile" /> */}
          </HomeContentSlideTopoBanner>
        </HomeContentSlideTopo>
      </HomeContentSlide>
    </ChakraProvider>
  )
}
