import React, { useRef, useState, useEffect } from "react"
import { buscaFaixaDePreco } from "../../../../services/api"
import { ChevronDownIcon } from "@chakra-ui/icons"
import {
  Popover,
  useMediaQuery,
  Flex,
  PopoverContent,
  useDisclosure,
  Button,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Spinner,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  Tooltip,
  RangeSliderThumb,
  Image,
  Text,
  Icon,
} from "@chakra-ui/react"
import {
  CategoriasModalMobile,
  colorBaseUltraRapido,
  UltraRapidoContentSlideTopoFilterBodyBrindes,
  UltraRapidoContentSlideTopoFilterBodyBrindesContent,
  UltraRapidoContentSlideTopoFilterBodyBrindesContentGrid,
  UltraRapidoContentSlideTopoFilterBodyBrindesContentGridColumn,
  UltraRapidoContentSlideTopoFilterBodyBrindesContentImgProd,
  UltraRapidoContentSlideTopoFilterBodyBrindesMobileContentGrid,
  UltraRapidoContentSlideTopoFilterBodyBrindesMobileContentGridColumn,
  UltraRapidoContentSlideTopoFilterControl,
  UltraRapidoContentSlideTopoFilterControlItem,
  UltraRapidoContentSlideTopoFilterControlItemArrow,
  UltraRapidoContentSlideTopoFilterControlItemText,
  UltraRapidoContentSlideTopoFilterControlSubmit,
  UltraRapidoContentSlideTopoFilterControlItemCenter,
  UltraRapidoContentSlideTopoFilterControlItemTextCenter,
  ContainerRangeSlider,
} from "./styles"
import { useRouter } from "next/router"
import { IoIosArrowForward } from "react-icons/io"
import Link from "next/link"

const Index = (props) => {
  var [viewBrindes, setViewBrindes] = useState(true)
  var [imageCategoria, setImageCategoria] = useState("1012055")
  const [sizeHeight768px] = useMediaQuery("(max-width: 768px)")
  const [sizeHeight1280px] = useMediaQuery("(max-width: 1281px)")
  const [sizeWidth1366px] = useMediaQuery("(max-width: 1367px)")
  var [selectCategoria, setSelectCategoria] = useState(null)
  var [valorDe, setValorDe] = useState(0)
  var [valorAte, setValorAte] = useState(100)
  var [quantidade, setQuantidade] = useState(null)
  var [faixaDePreco, setFaixaDePreco] = useState([0, 100])
  var [fixValue, setFixValue] = useState([0, 100])
  var [bghome, setBG] = useState("")
  var [loadingPreco, setLoadingPreco] = useState(false)
  var [enableButton, setButtonEnable] = useState(true)
  const [sliderValue, setSliderValue] = useState([0, 100])
  const [showTooltip, setShowTooltip] = useState(false)
  const [isTooltipEmptyOpen, setShowTooltipEmptyOpen] = useState(false)
  const [sliderDisable, setSliderDisable] = useState(false)
  const [clickSlider, setClickSlider] = useState(false)
  const [viewMenuMobile, setViewMenuMobile] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isOpenMenu, setIsOpen] = useState(false)
  const open = () => setIsOpen(!isOpenMenu)
  const close = () => setIsOpen(false)
  const router = useRouter()

  const initialFocusRef = useRef()
  const [isMobile, setMobile] = useState(false)

  const bgImg = {
    1: "/images/bghome/alvo-caixa-som.jpg",
    2: "/images/bghome/alvo-canetas.jpg",
    3: "/images/bghome/alvo-chrrasco.jpg",
    4: "/images/bghome/alvo-fone.jpg",
    5: "/images/bghome/alvo-mochila.jpg",
    6: "/images/bghome/alvo-squeeze.jpg",
  }

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
      router.push("/casadoconstrutor/buscar/ultra-rapido")
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
    <>
      <UltraRapidoContentSlideTopoFilterControl>
        <UltraRapidoContentSlideTopoFilterControlItem
          onClick={() => {
            setViewBrindes(true)
            open()
            if (isMobile) {
              onOpen()
            }
          }}
        >
          <UltraRapidoContentSlideTopoFilterControlItemText wid={100}>
            <h1>Brinde</h1>
            {selectCategoria != null ? (
              <h2>{selectCategoria.name}</h2>
            ) : (
              <p>
                <strong>escolha a categoria de brinde que procura</strong>
              </p>
            )}
          </UltraRapidoContentSlideTopoFilterControlItemText>

          <UltraRapidoContentSlideTopoFilterControlItemArrow
            wid={20}
            onClick={() => {
              setViewBrindes(true)
              open()
              if (isMobile) {
                onOpen()
              }
            }}
          >
            <ChevronDownIcon mt="20px" w={50} mr="30px" fontSize={22} color={colorBaseUltraRapido} />
          </UltraRapidoContentSlideTopoFilterControlItemArrow>

          <Popover
            initialFocusRef={initialFocusRef}
            isOpen={isOpenMenu}
            onOpen={open}
            onClose={close}
            styleConfig={{ outline: "none" }}
          >
            <PopoverContent style={{ outline: "none" }}>
              <UltraRapidoContentSlideTopoFilterBodyBrindes view={true}>
                <UltraRapidoContentSlideTopoFilterBodyBrindesContent view={true}>
                  <UltraRapidoContentSlideTopoFilterBodyBrindesContentGrid>
                    <UltraRapidoContentSlideTopoFilterBodyBrindesContentGridColumn noMargin>
                      <Flex flexDir={"column"} alignItems={"center"} mt={"21px"} gap={"2.3rem"}>
                        <Link href={"/buscar/todos/ultra-rapido"}>
                          <Button
                            textTransform="uppercase"
                            bgColor={"#FFE6DB"}
                            fontSize={"11px"}
                            fontWeight={"bold"}
                            textAlign={"start"}
                            borderRadius={"0px"}
                            gap={2}
                            paddingRight={1}
                          >
                            <Text as={"span"}>
                              Todos os Brindes <br />
                              produzidos em um dia
                            </Text>

                            <Icon
                              as={IoIosArrowForward}
                              color={"#FF4F00"}
                              border={"1px solid #FF4F00"}
                              borderRadius={"50%"}
                              fontSize={"25px"}
                              padding={"5px"}
                            />
                          </Button>
                        </Link>
                        <Flex alignItems={"center"} gap={2} borderBottom={"2px solid #00000029"} paddingBottom={"10px"}>
                          <Text fontSize={"11px"} color={"#414042"} m={0} fontWeight={"bold"}>
                            Ou escolha por categoria
                          </Text>
                          <Icon as={IoIosArrowForward} color={"#FF4F00"} fontSize={"15px"} />
                        </Flex>
                      </Flex>
                    </UltraRapidoContentSlideTopoFilterBodyBrindesContentGridColumn>
                    <UltraRapidoContentSlideTopoFilterBodyBrindesContentGridColumn>
                      {props.subcategorias != undefined ? (
                        props.subcategorias.map((item, idx) => {
                          return idx <= 4 ? (
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
                    </UltraRapidoContentSlideTopoFilterBodyBrindesContentGridColumn>

                    <UltraRapidoContentSlideTopoFilterBodyBrindesContentGridColumn>
                      {props.subcategorias != undefined ? (
                        props.subcategorias.map((item, idx) => {
                          return idx > 4 && idx <= 9 ? (
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
                    </UltraRapidoContentSlideTopoFilterBodyBrindesContentGridColumn>

                    <UltraRapidoContentSlideTopoFilterBodyBrindesContentGridColumn>
                      {props.subcategorias != undefined ? (
                        props.subcategorias.map((item, idx) => {
                          return idx > 9 && idx <= 14 ? (
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
                    </UltraRapidoContentSlideTopoFilterBodyBrindesContentGridColumn>

                    <UltraRapidoContentSlideTopoFilterBodyBrindesContentGridColumn>
                      {props.subcategorias != undefined ? (
                        props.subcategorias.map((item, idx) => {
                          return idx > 14 && idx <= 19 ? (
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
                    </UltraRapidoContentSlideTopoFilterBodyBrindesContentGridColumn>

                    <UltraRapidoContentSlideTopoFilterBodyBrindesContentGridColumn>
                      {props.subcategorias != undefined ? (
                        props.subcategorias.map((item, idx) => {
                          return idx > 19 && idx <= 24 ? (
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
                    </UltraRapidoContentSlideTopoFilterBodyBrindesContentGridColumn>
                  </UltraRapidoContentSlideTopoFilterBodyBrindesContentGrid>

                  <UltraRapidoContentSlideTopoFilterBodyBrindesContentImgProd>
                    <img alt="categoria-images" src={`/images/categoria-images/${imageCategoria}.jpg`} />
                  </UltraRapidoContentSlideTopoFilterBodyBrindesContentImgProd>
                </UltraRapidoContentSlideTopoFilterBodyBrindesContent>
              </UltraRapidoContentSlideTopoFilterBodyBrindes>
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
                <UltraRapidoContentSlideTopoFilterBodyBrindesMobileContentGrid>
                  <UltraRapidoContentSlideTopoFilterBodyBrindesMobileContentGridColumn>
                    <Flex flexDir={"column"} alignItems={"flex-start"} gap={"1.3rem"}>
                      <Link href={"/buscar/todos/ultra-rapido"}>
                        <Button
                          textTransform="uppercase"
                          bgColor={"#FFE6DB"}
                          fontSize={"11px"}
                          fontWeight={"bold"}
                          textAlign={"start"}
                          borderRadius={"0px"}
                          gap={2}
                          paddingRight={1}
                        >
                          <Text as={"span"}>
                            Todos os Brindes <br />
                            produzidos em um dia
                          </Text>

                          <Icon
                            as={IoIosArrowForward}
                            color={"#FF4F00"}
                            border={"1px solid #FF4F00"}
                            borderRadius={"50%"}
                            fontSize={"25px"}
                            padding={"5px"}
                          />
                        </Button>
                      </Link>
                      <Flex
                        alignItems={"center"}
                        gap={2}
                        borderBottom={"2px solid #00000029"}
                        paddingBottom={"10px"}
                        width={"100%"}
                        marginBottom={"1rem"}
                        marginLeft={"6px"}
                      >
                        <Text fontSize={"11px"} color={"#414042"} m={0} fontWeight={"bold"}>
                          Ou escolha por categoria
                        </Text>
                      </Flex>
                    </Flex>
                    {props.subcategorias != undefined ? (
                      props.subcategorias.map((item, idx) => {
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
                  </UltraRapidoContentSlideTopoFilterBodyBrindesMobileContentGridColumn>
                </UltraRapidoContentSlideTopoFilterBodyBrindesMobileContentGrid>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </ModalContent>
          </CategoriasModalMobile>
        </UltraRapidoContentSlideTopoFilterControlItem>

        <UltraRapidoContentSlideTopoFilterControlItemCenter>
          <UltraRapidoContentSlideTopoFilterControlItemTextCenter wid={90} wH={"100px"}>
            <h1>Quantidade</h1>
            <input
              id="quantidade"
              type="text"
              min="1"
              placeholder="digite a quantidade"
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
          </UltraRapidoContentSlideTopoFilterControlItemTextCenter>

          <UltraRapidoContentSlideTopoFilterControlItemArrow></UltraRapidoContentSlideTopoFilterControlItemArrow>
        </UltraRapidoContentSlideTopoFilterControlItemCenter>

        <UltraRapidoContentSlideTopoFilterControlItem>
          <UltraRapidoContentSlideTopoFilterControlItemText wid={90} value={true}>
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
                color={colorBaseUltraRapido}
                size="md"
                position={"relative"}
                marginLeft={"auto"}
                marginRight={"auto"}
              />
            ) : (
              <ContainerRangeSlider
                mt={sizeHeight768px ? "0" : sizeHeight1280px ? "-13px" : sizeWidth1366px ? "-10px" : "-5px"}
                ariaLabel={["min", "max"]}
                colorScheme={colorBaseUltraRapido}
                defaultValue={[0, faixaDePreco[1]]}
                min={faixaDePreco[0]}
                max={faixaDePreco[1]}
                value={[sliderValue[0], sliderValue[1]]}
                step={0.1}
                minStepsBetweenThumbs={1}
                // isDisabled={sliderDisable}
                onChange={(v) => {
                  if (v[0] != valorDe) {
                    setSliderValue([v[0], valorAte])
                    setValorDe(v[0])
                  } else if (v[1] != valorAte) {
                    setSliderValue([valorDe, v[1]])
                    setValorAte(v[1])
                  }
                }}
                onMouseOver={(e) => {
                  setShowTooltip(true)
                }}
                onMouseLeave={(e) => {
                  setShowTooltip(false)
                }}
              >
                <RangeSliderTrack h={1.5} bg={"#d1d1d1"}>
                  <RangeSliderFilledTrack bg={colorBaseUltraRapido} />
                </RangeSliderTrack>
                <Tooltip
                  hasArrow
                  bg={colorBaseUltraRapido}
                  color="white"
                  placement="top"
                  isOpen={showTooltip}
                  label={`R$ ${parseFloat(valorDe).toFixed(2)}`}
                >
                  <RangeSliderThumb boxShadow="none !important" boxSize={8} index={0} _focus={{ transition: "0s" }}>
                    <div
                      id="index-0"
                      onClick={(e) => {
                        // setSliderValue([valorDe+0.2,valorAte]);
                        setValorDe(valorDe + 0.2)
                      }}
                      onMouseEnter={(e) => {
                        setSliderDisable(false)
                      }}
                      onMouseLeave={(e) => {
                        if (clickSlider) {
                          setSliderDisable(true)
                        }
                      }}
                      style={{ width: "100%", height: "100%", backgroundColor: "transparent" }}
                    >
                      <Image
                        position="relative"
                        top="-10px"
                        w={50}
                        h={50}
                        alt="seta-direita"
                        src="/images/seta-ultra-rapido-direita.svg"
                      />
                    </div>
                  </RangeSliderThumb>
                </Tooltip>

                <Tooltip
                  hasArrow
                  bg={colorBaseUltraRapido}
                  color="white"
                  placement="top"
                  isOpen={showTooltip}
                  label={`R$ ${parseFloat(valorAte).toFixed(2)}`}
                >
                  <RangeSliderThumb boxShadow="none !important" boxSize={8} index={1} _focus={{ transition: "0s" }}>
                    <div
                      id="index-1"
                      onClick={(e) => {
                        // setSliderValue([valorDe+0.2,valorAte]);
                        setValorAte(valorAte - 0.2)
                      }}
                      onMouseEnter={(e) => {
                        setSliderDisable(false)
                      }}
                      onMouseLeave={(e) => {
                        if (clickSlider) {
                          setSliderDisable(true)
                        }
                      }}
                      style={{ width: "100%", height: "100%", backgroundColor: "transparent" }}
                    >
                      <Image
                        position="relative"
                        top="-10px"
                        w={50}
                        h={50}
                        alt="seta-esquerda"
                        src="/images/seta-ultra-rapido-esquerda.svg"
                      />
                    </div>
                  </RangeSliderThumb>
                </Tooltip>
              </ContainerRangeSlider>
            )}
          </UltraRapidoContentSlideTopoFilterControlItemText>
        </UltraRapidoContentSlideTopoFilterControlItem>
      </UltraRapidoContentSlideTopoFilterControl>

      <UltraRapidoContentSlideTopoFilterControlSubmit>
        <Tooltip
          label="Selecione uma categoria para encontrarmos o seu brinde &#128515;"
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
            onClick={() => filtrar()}
            _hover={{}}
            _focus={{}}
            _disabled={{ backgroundColor: "rgb(0,0,0,0.2)" }}
            disabled={enableButton}
          >
            Buscar brinde
          </Button>
        </Tooltip>
      </UltraRapidoContentSlideTopoFilterControlSubmit>
    </>
  )
}
export default Index
