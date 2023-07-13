import { ChevronDownIcon, ChevronUpIcon, InfoOutlineIcon } from "@chakra-ui/icons"
import {
  Image,
  AccordionButton,
  Input,
  Box,
  Button,
  Flex,
  Text,
  Tooltip,
  useToast,
  useMediaQuery,
  Heading,
  CloseButton,
} from "@chakra-ui/react"
import React, { forwardRef, useEffect, useState } from "react"
import { cor_base_1 } from "../../../services/cores"
import {
  ContainerAccordion,
  ContainerAccordionBox,
  ContainerAccordionFlex,
  ContainerAccordionItem,
  ContainerAccordionPanel,
  DivComponentDesktop,
  DivComponentMobile,
  FlexCheckedPassos,
  FlexContainerComponentPassos,
  FlexTamanhoCamisaPassos,
  GridCoresCircleIn,
  GridCoresCircleInOff,
  GridCoresCircleOut,
  GridCoresCor,
  LiContainerCheckbox,
  LiContainerCheckboxGrid,
  TextPasso4,
} from "../styles"

const greenLoading = "/images/menu/green-loader.gif"
const gota1 = "/images/gota1.png"
const gota2 = "/images/gota2.png"
const gota3 = "/images/gota3.png"
const gota4 = "/images/gota4.png"
const gota5 = "/images/gota5.png"

export const ComponentPassos = forwardRef((props, ref) => {
  const [defaultIndexstate, setDefaultIndexstate] = useState([3])
  const [cor_selecionada, setCorSelecionada] = useState([])
  const [tipo_gravacao_selecionada, setGravacaoSelecionada] = useState([])
  const [impressao_produto, setImpressaoProduto] = useState(null)
  const [prazo_selecionado, setPrazoSelecionado] = useState([])
  const [quantidade_selecionada, setQuantidadeSelecionada] = useState(null)
  const [show, setShow] = useState(false)
  const [mobileView, setmobileView] = useState(false)
  const [mobileIphoneView, setMobileIphoneView] = useState(false)
  const [noteView, setnoteView] = useState()
  const [heigthScreen] = useMediaQuery("(max-height:768px)")

  const toast = useToast()

  const gotas = [gota1, gota2, gota3, gota4, gota5]

  useEffect(() => {
    if (window.matchMedia("(max-width: 1366px)").matches) {
      setnoteView(true)
    } else {
      setnoteView(false)
    }
  }, [])

  useEffect(() => {
    if (/Android|webOS|BlackBerry|iPhone|iPad|iPod|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      setmobileView(true)
    } else {
      setmobileView(false)
    }
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      setMobileIphoneView(true)
    } else {
      setMobileIphoneView(false)
    }
  }, [])

  useEffect(() => {
    if (props.state.cor_selecionada != null) {
      props.state.cores.map((item) => {
        if (parseInt(item.cod) == parseInt(props.state.cor_selecionada.cod)) {
          setCorSelecionada(item)
        }
      })
    }
  }, [props.state.cor_selecionada])

  function passParametersToClass(callFunction, state, value) {
    try {
      var next = true

      if (state == "quantidade_selecionada") {
        next = validaQtdEstoque(value)
      }
      if (state == "cor_selecionada") {
        next = value.estoque
      }

      if (next) {
        callFunction(value)
        props.handleInputsPassos([{ value: value, state: state }])

        if (state === "cor_selecionada") {
          const valueOrEstoque = value.estoque ? value.estoque : value
          props.handleInputsPassos([{ value: valueOrEstoque, state: "quantidade_selecionada" }])
        }

        props.resumoView()
        props.closeForm()
      } else {
        avisaQuantidadeIndisponivel(cor_selecionada.estoque)
      }

      if (state == "cor_selecionada") {
        props.handleInputsPassos([
          { value: value.estoque > 1000 ? 1000 : value.estoque, state: "quantidade_selecionada" },
        ])

        if (!validaQtdEstoque(quantidade_selecionada, value.estoque)) {
          callFunction(value.estoque)
          avisaQuantidadeIndisponivel(value.estoque)
          //atualiza a quantidade selecionada para o estoque disponivel
          mudaQuantidadeIndisponivel(value.estoque)
          props.resumoView()
          props.closeForm()
        }
      }

      document.querySelectorAll("input#input-qtd-prod")[1].value = ""
    } catch (err) {
      console.log(err)
    }
  }

  function validaQtdEstoque(quantidade = quantidade_selecionada, cor_estoque = cor_selecionada.estoque) {
    if (parseInt(quantidade) > parseInt(cor_estoque)) {
      return false
    } else {
      return true
    }
  }

  const handleInputQuantidade = (e) => {
    setQuantidadeSelecionada(e)
  }

  const ifnull = (a, b) => {
    if (a == undefined || a == null || a == "") {
      return b
    } else {
      return a
    }
  }

  function mudaQuantidadeIndisponivel(quantidade) {
    //atualiza a quantidade selecionada para o estoque disponivel
    if (quantidade_selecionada > quantidade) {
      setQuantidadeSelecionada(quantidade)
    }

    document.querySelectorAll("input#input-qtd-prod")[1].value = quantidade

    props.handleInputsPassos([{ value: quantidade, state: "quantidade_selecionada" }])
  }

  function avisaQuantidadeIndisponivel(quantidade) {
    toast({
      position: "top",
      duration: 2000,
      render: () => (
        <Box borderRadius="5px" boxShadow="2px 2px 20px 2px gray" p={1} bg="#EDEDED">
          <Flex justifyContent="space-between">
            <Flex justifyContent="center" alignItems="center">
              <InfoOutlineIcon ml="5px" fontSize="25px" />
            </Flex>
            <Text pr="5px" color="black" mt="15px" ml="5px">
              Quantidade indisponível. Estoque disponivel: {quantidade}
            </Text>
            <CloseButton onClick={toast.closeAll} boxShadow="none !important" />
          </Flex>
        </Box>
      ),
    })

    handleInputQuantidade(parseInt(quantidade))
    passParametersToClass(setQuantidadeSelecionada, "quantidade_selecionada", parseInt(quantidade))
  }

  function capitalFirstLetter(string) {
    var firstLetter = string.charAt(0).toUpperCase() + string.toLowerCase().slice(1)
    return firstLetter
  }

  return (
    <>
      <FlexContainerComponentPassos>
        <DivComponentDesktop>
          <Flex
            filter={props.state.dados.estoque == 0 ? "auto" : "none"}
            opacity={props.state.dados.estoque == 0 ? 0.5 : "none"}
            h="90px"
            alignItems="center"
            justify="center"
          >
            <Image h="40px" mt="-25px" w="auto" src="images/configure_personalizacao.png" />
            <Text mt="-20px" fontSize="20px" letterSpacing="1px" color="#FF4F00">
              <strong>{capitalFirstLetter("configure do seu jeito")}</strong>
            </Text>
          </Flex>
        </DivComponentDesktop>

        <DivComponentMobile>
          <Flex mb="25px" mt="120px" h="90px" alignItems="center" justify="center">
            <Image h="55px" mt="-17px" w="auto" src="images/configure_personalizacao.png" />
            <Heading
              mt="-20px"
              ml="10px"
              fontFamily="Open sans, sans-serif"
              color="#FF4F00"
              fontSize={mobileIphoneView ? "25px" : "25px"}
            >
              <strong>{capitalFirstLetter("configure do seu jeito")}</strong>
            </Heading>
          </Flex>
        </DivComponentMobile>
        <Box mt="-35px">
          <ContainerAccordion
            filter={props.state.dados.estoque == 0 ? "auto" : "none"}
            blur={props.state.dados.estoque == 0 ? "1px" : "none"}
            defaultIndex={props.state.dados.estoque == 0 ? [""] : [0]}
            allowToggle
          >
            <ContainerAccordionItem
              isDisabled={props.state.dados.estoque == 0 ? true : false}
              index={defaultIndexstate}
            >
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton
                      fontSize={mobileIphoneView ? "16px" : mobileView ? "16px" : "21px"}
                      h="45px"
                      borderRadius="15px"
                      bgColor="#f5f5f5"
                      boxShadow="none !important"
                      onClick={() => {
                        setDefaultIndexstate(isExpanded == false ? 0 : false)
                      }}
                    >
                      <Flex color="#414042" w="100%" justify="space-between">
                        <Text
                          fontSize={mobileIphoneView ? "16px" : "16px"}
                          h={mobileIphoneView ? "20px" : ""}
                          mt="12px"
                        >
                          Selecione a cor do seu brinde
                        </Text>
                        <Flex>
                          <Text fontSize={mobileIphoneView ? "16px" : "16px"} color="#FF4F00" mt="14px">
                            Editar
                          </Text>
                          {isExpanded ? (
                            <Box
                              boxSize="27px"
                              mt={mobileIphoneView ? "10px" : "10px"}
                              ml="5px"
                              borderRadius="full"
                              border="0.5px solid #FF4F00"
                            >
                              <ChevronUpIcon color="#FF4F00" fontSize="25px" />
                            </Box>
                          ) : (
                            <Box
                              mt={mobileIphoneView ? "10px" : "10px"}
                              boxSize="27px"
                              ml="5px"
                              borderRadius="full"
                              border="0.5px solid #FF4F00"
                            >
                              <ChevronDownIcon color="#FF4F00" fontSize="25px" />
                            </Box>
                          )}
                        </Flex>
                      </Flex>
                    </AccordionButton>
                  </h2>
                  <ContainerAccordionPanel ml={mobileView ? "-16px" : "-14px"} mt="-10px" pb={3}>
                    <ContainerAccordionFlex
                      pl="15px"
                      pt="10px"
                      flexDirection="column"
                      borderRadius="10px"
                      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                      h="auto"
                    >
                      <Flex>
                        <Text>
                          Cor do produto:{" "}
                          {props.state.cor_selecionada != null
                            ? props.state.cor_selecionada.text.charAt(0).toUpperCase() +
                              props.state.cor_selecionada.text.toLowerCase().slice(1)
                            : ""}
                          {/* {cor_selecionada.text.charAt(0).toUpperCase() + cor_selecionada.text.toLowerCase().slice(1)} */}
                        </Text>
                        {props.state.cor_selecionada != null ? (
                          <div
                            style={{
                              width: "20px",
                              height: "20px",
                              marginLeft: "5px",
                              marginTop: "2px",
                              borderRadius: "10px",
                              border:
                                props.state.cor_selecionada.rgb_cores == "#ffffff" ||
                                props.state.cor_selecionada.rgb_cores == "#fff"
                                  ? "1px solid rgb(180, 180, 180)"
                                  : "",
                              backgroundColor: `${
                                props.state.cor_selecionada != null ? props.state.cor_selecionada.rgb_cores : ""
                              }`,
                            }}
                          ></div>
                        ) : (
                          <div></div>
                        )}
                      </Flex>
                      <ContainerAccordionFlex
                        mt="-15px"
                        pr="25px"
                        fontFamily="Open sans, sans-serif"
                        fontSize="14px"
                        justifyContent="space-between"
                        flexDirection={"row"}
                      >
                        {props.state.dados.prod_vestuario === "S" ? (
                          <>
                            <Flex flexDir="column">
                              {cor_selecionada.estoque != null ? (
                                <p>
                                  {cor_selecionada.estoque == 0 ? "Indisponível" : "Disponível:"}{" "}
                                  {cor_selecionada.estoque == 0 ? (
                                    ""
                                  ) : (
                                    <strong>
                                      {parseInt(cor_selecionada.estoque).toLocaleString("pt-br", {
                                        minimumFractionDigits: 0,
                                      })}{" "}
                                      {cor_selecionada.estoque == 0
                                        ? ""
                                        : cor_selecionada.estoque == 0
                                        ? "unidade"
                                        : "unidades"}
                                    </strong>
                                  )}
                                </p>
                              ) : (
                                <></>
                              )}

                              {cor_selecionada.estoque != null ? (
                                <FlexTamanhoCamisaPassos>
                                  <p>
                                    P. <strong>{parseInt(cor_selecionada.tamanho_p)} un |</strong>
                                  </p>
                                  <p>
                                    M. <strong>{parseInt(cor_selecionada.tamanho_m)} un |</strong>
                                  </p>
                                  <p>
                                    G. <strong>{parseInt(cor_selecionada.tamanho_g)} un |</strong>
                                  </p>
                                  <p>
                                    GG.{" "}
                                    <strong>
                                      {parseInt(cor_selecionada.tamanho_gg)} un{" "}
                                      {props.state.dados.genero !== "F" ? "|" : ""}
                                    </strong>
                                  </p>
                                  {props.state.dados.genero !== "F" ? (
                                    <p>
                                      XGG. <strong>{parseInt(cor_selecionada.tamanho_xgg)} un</strong>
                                    </p>
                                  ) : (
                                    <></>
                                  )}
                                </FlexTamanhoCamisaPassos>
                              ) : (
                                <></>
                              )}
                            </Flex>

                            {cor_selecionada.previsao != null && (
                              <p>
                                Reposição de estoque: {cor_selecionada.previsao.replaceAll("-", "/")} -{" "}
                                {cor_selecionada.quantidade_repo !== ""
                                  ? cor_selecionada.quantidade_repo + "unidade(s)"
                                  : ""}
                              </p>
                            )}
                          </>
                        ) : (
                          <>
                            {cor_selecionada.estoque != null ? (
                              <p>
                                {cor_selecionada.estoque == 0 ? "Indisponível" : "Disponível:"}{" "}
                                {cor_selecionada.estoque == 0 ? (
                                  ""
                                ) : (
                                  <strong>
                                    {parseInt(cor_selecionada.estoque).toLocaleString("pt-br", {
                                      minimumFractionDigits: 0,
                                    })}{" "}
                                    {cor_selecionada.estoque == 0
                                      ? ""
                                      : cor_selecionada.estoque == 0
                                      ? "unidade"
                                      : "unidades"}
                                  </strong>
                                )}
                              </p>
                            ) : (
                              <></>
                            )}

                            {cor_selecionada.previsao != null && (
                              <p>
                                Reposição de estoque: {cor_selecionada.previsao.replaceAll("-", "/")} -{" "}
                                {cor_selecionada.quantidade_repo !== ""
                                  ? cor_selecionada.quantidade_repo + " unid."
                                  : ""}
                              </p>
                            )}
                          </>
                        )}
                      </ContainerAccordionFlex>

                      <Box mb="10px" mt="-5px" mx="auto" w="95%">
                        {props.state.cores.length > 0
                          ? props.state.cores.map((data, idx) => {
                              if (data.text.indexOf("/") != -1) {
                                return (
                                  <Tooltip label={data.text} aria-label="A tooltip">
                                    <GridCoresCor>
                                      <GridCoresCircleOut
                                        onClick={(e) => {
                                          if (data.estoque > 0) {
                                            passParametersToClass(setCorSelecionada, "cor_selecionada", data)
                                          }
                                        }}
                                        value={data.cod}
                                        style={
                                          (props.state.cor_selecionada != null
                                            ? props.state.cor_selecionada.cod
                                            : "") == data.cod
                                            ? {
                                                border: "2px solid " + cor_base_1,
                                              }
                                            : {}
                                        }
                                        // onMouseEnter={() => {setCorMouse(data.text); setRbgCorMouse(data.rgb_cores)}}
                                      >
                                        {data.estoque > 0 ? (
                                          <GridCoresCircleIn
                                            style={{
                                              border:
                                                data.rgb_cores == "#ffffff" || data.rgb_cores == "#fff"
                                                  ? "1px solid rgb(180, 180, 180)"
                                                  : "",
                                              backgroundImage: `linear-gradient(90deg, ${
                                                data.rgb_cores.split("/")[0]
                                              } 50%, ${data.rgb_cores.split("/")[1]} 50%)`,
                                            }}
                                            // onMouseEnter={() => {setCorMouse(data.text); setRbgCorMouse(data.rgb_cores)}}
                                            // onClick={() =>{
                                            //     passParametersToClass(setCorSelecionada, 'cor_selecionada', data);
                                            // }}
                                            value={data.cod}
                                          />
                                        ) : (
                                          <GridCoresCircleInOff
                                            style={{
                                              border:
                                                data.rgb_cores == "#ffffff" || data.rgb_cores == "#fff"
                                                  ? "1px solid rgb(180, 180, 180)"
                                                  : "",
                                              backgroundImage: `linear-gradient(90deg, ${
                                                data.rgb_cores.split("/")[0]
                                              } 50%, ${data.rgb_cores.split("/")[1]} 50%)`,
                                            }}
                                          >
                                            <div className="line-off" />
                                          </GridCoresCircleInOff>
                                        )}
                                      </GridCoresCircleOut>
                                    </GridCoresCor>
                                  </Tooltip>
                                )
                              }

                              return (
                                <Tooltip label={data.text} aria-label="A tooltip">
                                  <GridCoresCor>
                                    <GridCoresCircleOut
                                      onClick={() => {
                                        if (data.estoque > 0) {
                                          passParametersToClass(setCorSelecionada, "cor_selecionada", data)
                                        }
                                      }}
                                      style={
                                        (props.state.cor_selecionada != null ? props.state.cor_selecionada.cod : "") ==
                                        data.cod
                                          ? {
                                              border: "2px solid " + cor_base_1,
                                            }
                                          : {}
                                      }
                                      value={data.cod}
                                      // onMouseEnter={() => {setCorMouse(data.text); setRbgCorMouse(data.rgb_cores)}}
                                    >
                                      {data.estoque > 0 ? (
                                        <GridCoresCircleIn
                                          style={{
                                            border:
                                              data.rgb_cores == "#ffffff" || data.rgb_cores == "#fff"
                                                ? "1px solid rgb(180, 180, 180)"
                                                : "",
                                            backgroundColor: data.rgb_cores,
                                          }}
                                          value={data.cod}
                                        />
                                      ) : (
                                        <GridCoresCircleInOff
                                          style={{
                                            border:
                                              data.rgb_cores == "#ffffff" || data.rgb_cores == "#fff"
                                                ? "1px solid rgb(180, 180, 180)"
                                                : "",
                                            backgroundColor: data.rgb_cores,
                                          }}
                                          value={data.cod}
                                        >
                                          <div className="line-off" />
                                        </GridCoresCircleInOff>
                                      )}
                                    </GridCoresCircleOut>
                                  </GridCoresCor>
                                </Tooltip>
                              )
                            })
                          : null}
                      </Box>
                    </ContainerAccordionFlex>
                  </ContainerAccordionPanel>
                </>
              )}
            </ContainerAccordionItem>

            <ContainerAccordionItem
              isDisabled={props.state.dados.estoque == 0 ? true : false}
              mt="-5px"
              defaultIndex={defaultIndexstate}
            >
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton
                      fontSize={mobileIphoneView ? "16px" : mobileView ? "15px" : "16px"}
                      h="45px"
                      borderRadius="15px"
                      bgColor="#f5f5f5"
                      boxShadow="none !important"
                      onClick={() => {
                        setDefaultIndexstate(isExpanded == false ? 1 : false)
                      }}
                    >
                      <Flex color="#414042" w="100%" justify="space-between">
                        <Text
                          fontSize={mobileIphoneView ? "16px" : "16px"}
                          h={mobileIphoneView ? "20px" : ""}
                          mt="12px"
                        >
                          Tipo de Personalização
                        </Text>
                        <Flex>
                          <Text color="#FF4F00" mt="15px">
                            Editar
                          </Text>
                          {isExpanded ? (
                            <Box
                              boxSize="27px"
                              mt={mobileIphoneView ? "10px" : "10px"}
                              ml="5px"
                              borderRadius="full"
                              border="0.5px solid #FF4F00"
                            >
                              <ChevronUpIcon color="#FF4F00" fontSize="25px" />
                            </Box>
                          ) : (
                            <Box
                              mt={mobileIphoneView ? "10px" : "10px"}
                              boxSize="27px"
                              ml="5px"
                              borderRadius="full"
                              border="0.5px solid #FF4F00"
                            >
                              <ChevronDownIcon color="#FF4F00" fontSize="25px" />
                            </Box>
                          )}
                        </Flex>
                      </Flex>
                    </AccordionButton>
                  </h2>
                  <ContainerAccordionPanel mb="-20px" ml="-14px" mt="-10px" pb={3}>
                    <ContainerAccordionBox borderRadius="10px" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
                      <ul>
                        {props.state.tipo_gravacao.length > 0 ? (
                          props.state.tipo_gravacao.map((item, idx) => {
                            var id = idx + 1
                            return (
                              <LiContainerCheckbox>
                                <Flex w="100%" justify="space-between">
                                  <Flex align="center">
                                    <FlexCheckedPassos>
                                      <input
                                        type="radio"
                                        checked={
                                          item.cod ==
                                          (props.state.tipo_gravacao_selecionada != null
                                            ? props.state.tipo_gravacao_selecionada.cod
                                            : "")
                                            ? true
                                            : false
                                        }
                                        onClick={() => {
                                          setDefaultIndexstate(2)
                                          passParametersToClass(
                                            setGravacaoSelecionada,
                                            "tipo_gravacao_selecionada",
                                            item,
                                          )
                                        }}
                                      />
                                    </FlexCheckedPassos>
                                    <Text
                                      pl={mobileView ? "10px" : "10px"}
                                      fontSize={13}
                                      fontFamily="Open sans, sans-serif"
                                      pt={mobileView ? 4 : 3}
                                    >
                                      {item.nome}
                                    </Text>
                                  </Flex>
                                  {/* <Image mt='7px' alt='gota' height='33px' width='110px' src={gota1}/> */}
                                </Flex>
                              </LiContainerCheckbox>
                            )
                          })
                        ) : (
                          <></>
                        )}
                      </ul>
                    </ContainerAccordionBox>
                  </ContainerAccordionPanel>
                </>
              )}
            </ContainerAccordionItem>

            <ContainerAccordionItem
              isDisabled={props.state.dados.estoque == 0 ? true : false}
              mt="-5px"
              defaultIndex={defaultIndexstate}
            >
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton
                      fontSize={mobileView ? "16px" : "16px"}
                      h="45px"
                      borderRadius="15px"
                      bgColor="#f5f5f5"
                      boxShadow="none !important"
                      onClick={() => {
                        setDefaultIndexstate(isExpanded == false ? 2 : false)
                      }}
                    >
                      <Flex color="#414042" w="100%" justify="space-between">
                        <Text
                          fontSize={mobileIphoneView ? "16px" : "16px"}
                          h={mobileIphoneView ? "20px" : ""}
                          mt="12px"
                        >
                          Quantidade de impressão
                        </Text>
                        <Flex>
                          <Text fontSize={mobileIphoneView ? "16px" : "16px"} color="#FF4F00" mt="15px">
                            Editar
                          </Text>
                          {isExpanded ? (
                            <Box
                              boxSize="27px"
                              mt={mobileIphoneView ? "10px" : "10px"}
                              ml="5px"
                              borderRadius="full"
                              border="0.5px solid #FF4F00"
                            >
                              <ChevronUpIcon color="#FF4F00" fontSize="25px" />
                            </Box>
                          ) : (
                            <Box
                              boxSize="27px"
                              mt={mobileIphoneView ? "10px" : "10px"}
                              ml="5px"
                              borderRadius="full"
                              border="0.5px solid #FF4F00"
                            >
                              <ChevronDownIcon color="#FF4F00" fontSize="25px" />
                            </Box>
                          )}
                        </Flex>
                      </Flex>
                    </AccordionButton>
                  </h2>
                  <ContainerAccordionPanel ml="-14px" mt="-10px" mb="-20px" pb={3}>
                    <ContainerAccordionBox borderRadius="10px" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
                      <ul>
                        {props.state.numero_max_impressoes.length > 0 ? (
                          props.state.numero_max_impressoes.map((item) => {
                            return (
                              <LiContainerCheckbox>
                                <FlexCheckedPassos>
                                  <input
                                    type="radio"
                                    checked={item == props.state.impressao_produto ? true : false}
                                    onClick={(e) => {
                                      setDefaultIndexstate(3)
                                      passParametersToClass(setImpressaoProduto, "impressao_produto", item)
                                    }}
                                  />
                                </FlexCheckedPassos>
                                <Text ml="30px" mt="15px">
                                  {item}
                                </Text>
                              </LiContainerCheckbox>
                            )
                          })
                        ) : (
                          <></>
                        )}
                      </ul>
                    </ContainerAccordionBox>
                  </ContainerAccordionPanel>
                </>
              )}
            </ContainerAccordionItem>

            <ContainerAccordionItem
              isDisabled={props.state.dados.estoque == 0 ? true : false}
              mt="-5px"
              defaultIndex={defaultIndexstate}
            >
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton
                      fontSize={mobileView ? "16px" : "16px"}
                      h="45px"
                      borderRadius="15px"
                      bgColor="#f5f5f5"
                      boxShadow="none !important"
                      onClick={() => {
                        setDefaultIndexstate(isExpanded == false ? 3 : false)
                      }}
                    >
                      <Flex color="#414042" w="100%" justify="space-between">
                        <Text
                          fontSize={mobileIphoneView ? "16px" : "16px"}
                          h={mobileIphoneView ? "20px" : ""}
                          mt="12px"
                        >
                          Retirada | Prazo de produção
                        </Text>
                        <Flex>
                          <Text fontSize={mobileIphoneView ? "16px" : "16px"} color="#FF4F00" mt="15px">
                            Editar
                          </Text>
                          {isExpanded ? (
                            <Box
                              boxSize="27px"
                              mt={mobileIphoneView ? "10px" : "10px"}
                              ml="5px"
                              borderRadius="full"
                              border="0.5px solid #FF4F00"
                            >
                              <ChevronUpIcon color="#FF4F00" fontSize="25px" />
                            </Box>
                          ) : (
                            <Box
                              mt={mobileIphoneView ? "10px" : "10px"}
                              boxSize="27px"
                              ml="5px"
                              borderRadius="full"
                              border="0.5px solid #FF4F00"
                            >
                              <ChevronDownIcon color="#FF4F00" fontSize="25px" />
                            </Box>
                          )}
                        </Flex>
                      </Flex>
                    </AccordionButton>
                  </h2>

                  <ContainerAccordionPanel ml="-14px" mt="-10px" mb="-20px" pb={3}>
                    <ContainerAccordionBox borderRadius="10px" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
                      <ul style={{ paddingTop: "8px", paddingBottom: "8px" }}>
                        {props.state.prazo_producao.length > 0 ? (
                          props.state.prazo_producao.map((item) => {
                            return item.prazo == 1 ? (
                              <LiContainerCheckbox>
                                <FlexCheckedPassos>
                                  <input
                                    type="radio"
                                    value={item.prazo}
                                    checked={
                                      item.prazo ==
                                      (props.state.prazo_selecionado != null ? props.state.prazo_selecionado.prazo : "")
                                        ? true
                                        : false
                                    }
                                    data={JSON.stringify({})}
                                    onClick={(e) => {
                                      setDefaultIndexstate(4)
                                      passParametersToClass(setPrazoSelecionado, "prazo_selecionado", item)
                                    }}
                                  />
                                </FlexCheckedPassos>
                                <TextPasso4
                                  borderRadius="5px"
                                  pl={mobileView ? "2px" : "10px"}
                                  w={mobileView ? "380px" : "360px"}
                                  color="white"
                                  bgColor="#ff6b0e"
                                  mt="15px"
                                >
                                  {item.data_producao} | {capitalFirstLetter(item.nome_data)} |
                                  <strong>MAIS RÁPIDO *</strong>
                                </TextPasso4>
                              </LiContainerCheckbox>
                            ) : item.prazo == 10 ? (
                              <LiContainerCheckbox>
                                <FlexCheckedPassos>
                                  <input
                                    value={item.prazo}
                                    type="radio"
                                    checked={
                                      item.prazo ==
                                      (props.state.prazo_selecionado != null ? props.state.prazo_selecionado.prazo : "")
                                        ? true
                                        : false
                                    }
                                    onClick={(e) => {
                                      setDefaultIndexstate(4)
                                      passParametersToClass(setPrazoSelecionado, "prazo_selecionado", item)
                                    }}
                                  />
                                </FlexCheckedPassos>
                                <TextPasso4
                                  borderRadius="5px"
                                  pl={mobileView ? "2px" : "10px"}
                                  w={mobileView ? "380px" : "360px"}
                                  color="white"
                                  bgColor="#8ec505"
                                  mt="15px"
                                >
                                  {item.data_producao} | {capitalFirstLetter(item.nome_data)} |
                                  <strong>MAIS ECONÔMICO</strong>
                                </TextPasso4>
                              </LiContainerCheckbox>
                            ) : (
                              <LiContainerCheckbox>
                                <FlexCheckedPassos>
                                  <input
                                    type="radio"
                                    value={item.prazo}
                                    checked={
                                      item.prazo ==
                                      (props.state.prazo_selecionado != null ? props.state.prazo_selecionado.prazo : "")
                                        ? true
                                        : false
                                    }
                                    data={JSON.stringify({})}
                                    onClick={(e) => {
                                      setDefaultIndexstate(4)
                                      passParametersToClass(setPrazoSelecionado, "prazo_selecionado", item)
                                    }}
                                  />
                                </FlexCheckedPassos>
                                <TextPasso4
                                  borderRadius="5px"
                                  pl={mobileView ? "2px" : "10px"}
                                  w={mobileView ? "380px" : "360px"}
                                  mt="15px"
                                >
                                  {item.data_producao} | {capitalFirstLetter(item.nome_data)}
                                </TextPasso4>
                              </LiContainerCheckbox>
                            )
                          })
                        ) : (
                          <div></div>
                        )}
                      </ul>
                      <Text w="100%" pl="67px" mt="-25px" fontSize={"11px"} h={"40px"}>
                        *Para pedido aprovados até as 14hrs, de segunda a sexta (exceto feriados). Retirada após as
                        08:30.
                      </Text>
                    </ContainerAccordionBox>
                  </ContainerAccordionPanel>
                </>
              )}
            </ContainerAccordionItem>

            <ContainerAccordionItem
              isDisabled={props.state.dados.estoque == 0 ? true : false}
              mt="-5px"
              defaultIndex={defaultIndexstate}
            >
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton
                      position="relative"
                      fontSize={mobileView ? "16px" : "16px"}
                      h="45px"
                      borderRadius="15px"
                      bgColor="#f5f5f5"
                      boxShadow="none !important"
                      onClick={
                        mobileView
                          ? () => {
                              setDefaultIndexstate(isExpanded == false ? 4 : false)
                            }
                          : () => {
                              setDefaultIndexstate(isExpanded == false ? 4 : false)
                              noteView && isExpanded == false && heigthScreen
                                ? window.scrollTo(0, 120)
                                : window.scrollTo(0, 0)
                            }
                      }
                    >
                      <Flex w="100%" color="#414042" justify="space-between">
                        <Text
                          fontSize={mobileIphoneView ? "16px" : "16px"}
                          h={mobileIphoneView ? "20px" : ""}
                          mt="12px"
                        >
                          Defina a quantidade
                        </Text>
                        <Flex>
                          <Text fontSize={mobileIphoneView ? "16px" : "16px"} color="#FF4F00" mt="15px">
                            Editar
                          </Text>
                          {isExpanded ? (
                            <Box
                              boxSize="27px"
                              mt={mobileIphoneView ? "10px" : "10px"}
                              ml="5px"
                              borderRadius="full"
                              border="0.5px solid #FF4F00"
                            >
                              <ChevronUpIcon color="#FF4F00" fontSize="25px" />
                            </Box>
                          ) : (
                            <Box
                              mt={mobileIphoneView ? "10px" : "10px"}
                              boxSize="27px"
                              ml="5px"
                              borderRadius="full"
                              border="0.5px solid #FF4F00"
                            >
                              <ChevronDownIcon color="#FF4F00" fontSize="25px" />
                            </Box>
                          )}
                        </Flex>
                      </Flex>
                    </AccordionButton>
                  </h2>

                  <ContainerAccordionPanel ml="-14px" mt="-10px" pb={3}>
                    <ContainerAccordionBox
                      h={props.state.dados.estoque < 50 ? "150px" : "257px"}
                      transition="0.3s"
                      borderRadius="10px"
                      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                    >
                      <Flex
                        mb="25px"
                        pt="35px"
                        mr="auto"
                        ml="auto"
                        w={mobileView ? "99vw" : "400px"}
                        h="47px"
                        alignItems="center"
                        justifyContent={"space-around"}
                        flexDirection="column"
                      >
                        <Text h={10} mb={0.5} fontSize={16} fontFamily="Open sans">
                          <strong>Digite a quantidade desejada</strong>
                        </Text>
                        <Box
                          mx="auto"
                          mb="15px"
                          pl={mobileView ? "10px" : "40px"}
                          h={31}
                          display="flex"
                          justifyContent={"center"}
                          alignItems="center"
                          mt="0px"
                        >
                          <Text mt="15px" fontSize={16} mr={1}>
                            Quantidade:
                          </Text>
                          <Input
                            id={"input-qtd-prod"}
                            onChange={(e) => handleInputQuantidade(e.target.value)}
                            onKeyPressCapture={(e) => {
                              if (e.key == "Enter") {
                                setDefaultIndexstate(false)
                                passParametersToClass(
                                  setQuantidadeSelecionada,
                                  "quantidade_selecionada",
                                  quantidade_selecionada,
                                )
                              }
                            }}
                            borderColor="gray"
                            type="number"
                            w={"100px"}
                            h="30px"
                            borderRadius={0}
                            textAlign="center"
                          />
                          <Text
                            mt={"15px"}
                            pl={"8px"}
                            fontSize={mobileIphoneView ? "14px" : mobileView ? "14px" : "16px"}
                            mr={1}
                          >
                            unidades
                          </Text>
                          <Button
                            w={"50px"}
                            h="33px"
                            borderRadius="0px"
                            color="white"
                            bgColor="#76B100"
                            fontSize={14}
                            fontFamily="Open sans, sans-serif"
                            _hover={{ bgColor: "#76B100", opacity: 0.8 }}
                            _active={{ bgColor: "#76B100" }}
                            onClick={() => {
                              setDefaultIndexstate(false)
                              passParametersToClass(
                                setQuantidadeSelecionada,
                                "quantidade_selecionada",
                                quantidade_selecionada,
                              )
                            }}
                          >
                            OK
                          </Button>
                        </Box>
                      </Flex>
                      <Box borderTop="1px solid gray" w="400px" mx="auto" />
                      <Text
                        h={10}
                        mt="5px"
                        mb="10px"
                        fontSize={16}
                        fontFamily="Open sans, sans-serif"
                        textAlign="center"
                      >
                        {props.state.dados.estoque < 50 ? (
                          <strong>Ou selecione a quantidade máxima disponível</strong>
                        ) : (
                          <strong>Ou selecione uma de nossas sugestões abaixo</strong>
                        )}
                      </Text>
                      <ul style={{ marginTop: "-30px", zIndex: 999 }}>
                        {props.state.lists_quantidades.length == 0 ? (
                          <img
                            width={50}
                            height={50}
                            style={{ position: "relative", margin: "auto" }}
                            alt="green-loading"
                            src={greenLoading}
                          />
                        ) : (
                          props.state.lists_quantidades.map((item) => {
                            return (
                              <LiContainerCheckbox>
                                <FlexCheckedPassos>
                                  <input
                                    key={item.quantidade}
                                    type="radio"
                                    checked={item.quantidade == props.state.quantidade_selecionada ? true : false}
                                    onClick={() => {
                                      setDefaultIndexstate(false)
                                      passParametersToClass(
                                        setQuantidadeSelecionada,
                                        "quantidade_selecionada",
                                        item.quantidade,
                                      )
                                    }}
                                  />
                                </FlexCheckedPassos>
                                <LiContainerCheckboxGrid>
                                  <Text ml="5px">{Math.max(item.quantidade)} unidades</Text>
                                  <Text fontSize={mobileIphoneView ? "13px" : mobileView ? "13px" : "16px"}>
                                    R$ {item.valor.toString().replace(".", ",")} valor unitário
                                  </Text>
                                </LiContainerCheckboxGrid>
                              </LiContainerCheckbox>
                            )
                          })
                        )}
                      </ul>
                    </ContainerAccordionBox>
                  </ContainerAccordionPanel>
                </>
              )}
            </ContainerAccordionItem>
          </ContainerAccordion>
          <DivComponentDesktop
            position="relative"
            zIndex="99"
            filter={props.state.dados.estoque == 0 ? "none" : "none"}
            blur={props.state.dados.estoque == 0 ? "0" : "none"}
          >
            <Text mt={show ? "-35px" : "0px"} pt={props.state.dados.estoque < 50 ? "45px" : "45px"} pl="12px">
              Dimensões
            </Text>
            <Box mt="-10px" w="95%" mr="auto" ml="auto" borderBottom="1px solid black"></Box>
            <Flex flexDir="column" pt="10px" w="95%" justify="space-between">
              <Text fontSize="13px" pl="12px">
                <strong>{props.state.dados.dimensoes}</strong>
              </Text>
              <Text pl="12px" mt="-10px" w="100%" fontSize="9px">
                (Esse produto é produzido por diversos fabricantes, portanto as medidas e o peso apresentados podem
                sofrer pequenas alterações.)
              </Text>
            </Flex>
          </DivComponentDesktop>
        </Box>
      </FlexContainerComponentPassos>
    </>
  )
})
