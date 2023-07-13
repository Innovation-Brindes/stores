import { Box, Flex, Image, Spinner, Text } from "@chakra-ui/react"
import React, { useEffect, useState } from "react"
import Link from "next/link"
import { colorBaseUltraRapido } from "../UltraRapido/component/FlexFiltroUltraRapido/styles"
import {
  CardProdCores,
  CardProdCoresGridCores,
  CardProdCoresGridCoresContentCor,
  TextMenorValor,
  CardProdCoresTitle,
  FlexPreco,
  CardProdDesc,
  ButtonConfira,
  GridCoresContent,
  ImgProd,
  LinkBoxProductContainer,
  TextPreco,
  Title,
} from "./styles"

const embalagem_especial = "http://innovationstore.com.br/teste-imagens/EMBALAGEM-ESPECIAL.png"

function ifnull(a, b) {
  if (a === null || a === undefined || a === "") {
    return b
  } else {
    return a
  }
}

export function GridProductDefault(props) {
  const [display_init, setDisplay_init] = useState(0)

  const [mobileView, setmobileView] = useState()

  useEffect(() => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      setmobileView(true)
    } else {
      setmobileView(false)
    }

    setTimeout(function () {
      setDisplay_init(1)
    }, 1000)
  }, [])

  if (ifnull(props.cores, "") !== "") {
    var cores = props.cores.split(";")
  }

  return (
    <a
      href={props.gridTelaProduto ? "/lojahonda/" + props.url_prod : "/lojahonda/" + props.url_prod}
      style={{ textDecoration: "none" }}
    >
      <LinkBoxProductContainer
        textDedoration="none"
        color="black"
        cursor="pointer"
        fontFamily="Open sans"
        segmento={props.segmento}
        isUltraRapido={props.isUltraRapido}
        style={{ opacity: display_init, transition: "0.3s" }}
      >
        <Flex justify="start" position="absolute" zIndex={99} w="100%" h="25px">
          {props.estoque === "0" ? (
            <Image
              objectFit="cover"
              alt="selo"
              w="100px"
              borderRadius="2px"
              h="14px"
              src={"https://innovationbrindes.com.br/images/menu/selo-indisponivel.png"}
            />
          ) : props.segmento == "Ultra Rapido" ||
            props.ultrarapido == "S" ||
            props.segmento == "U" ||
            props.isUltraRapido ? (
            <Flex bg={"#fca62e"} align="center" justify="center" paddingInline="5px">
              <Text fontFamily={"Open Sans"} fontSize={"10pt"} fontWeight={"400"} color={"#ffffff"} m={"0"}>
                Pronto em 48 hrs!
              </Text>
            </Flex>
          ) : props.selo == "S" || props.segmento == "" || props.segmento == null ? (
            <></>
          ) : (
            <Image objectFit="cover" alt="selo" w="100px" borderRadius="2px" h="14px" src={props.selo_prod} />
          )}
        </Flex>
        {props.img_prod ? (
          <ImgProd objectFit="cover" alt="imagem-produto" src={props.img_prod} />
        ) : (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color={props.isUltraRapido ? "#fca62e" : "#58bc03"}
            size="md"
            position={"relative"}
            marginLeft={"auto"}
            marginRight={"auto"}
          />
        )}
        {props.selo == "S" ? (
          <Image position="absolute" top="165px" left="0px" src={"/images/embalagem/EMBALAGEM-ESPECIAL.png"} />
        ) : (
          <></>
        )}
        <Title>
          <strong>
            <Text as="h1" noOfLines={2}>
              <strong>{props.prod_nome}</strong>
            </Text>
          </strong>
          <p style={{ top: "14px", fontSize: "12px" }}>
            - {props.codigo_prod.toString().substring(props.codigo_prod.toString().length - 4, 100)} -
          </p>
        </Title>
        <CardProdDesc>
          <Text position="relative" noOfLines={2}>
            {ifnull(props.caracteristicas)}
          </Text>
        </CardProdDesc>
        {props.isUltraRapido ? (
          <Box w="100%" pl="10px">
            {props.state?.quantidade_filtrada != null && props.state?.quantidade_filtrada != "" ? (
              <Flex>
                <Text fontFamily="Open sans" fontSize="10px">
                  <strong>quant.</strong>{" "}
                </Text>
                <Text ml="5px" fontFamily="Open sans" fontSize="10px">
                  {props.state?.quantidade_filtrada == null ? 1000 : props.state?.quantidade_filtrada} unidades
                </Text>
              </Flex>
            ) : (
              <Box h="30px"></Box>
            )}
          </Box>
        ) : (
          <Box w="100%" pl="10px">
            {props.state?.quantidade_filtrada != null && props.state?.quantidade_filtrada != "" ? (
              <Flex>
                <Text fontSize="10px">
                  <strong>quant.</strong>{" "}
                </Text>
                <Text ml="5px" fontSize="10px">
                  {props.state?.quantidade_filtrada == null ? 1000 : props.state?.quantidade_filtrada} unidades
                </Text>
              </Flex>
            ) : (
              <Box h="30px"></Box>
            )}
            {props.state?.prazo_selecionadas === null ||
            props.state?.prazo_selecionadas === "" ||
            props.state?.prazo_selecionadas === 0 ||
            props.state?.prazo_selecionadas === undefined ? (
              <Box h="25px"></Box>
            ) : (
              <>
                <Flex>
                  <Text fontSize="10px" mt="-14px" fontWeight="bold">
                    quant | impressão:
                  </Text>
                  <Text fontSize="10px" ml="5px" mt="-14px">
                    1
                  </Text>
                </Flex>
                <Flex>
                  <Text fontSize="10px" mt="-14px" fontWeight="bold">
                    prazo | produção:
                  </Text>
                  <Text fontSize="10px" ml="5px" mt="-14px">
                    {props.state?.prazo_selecionadas.length > 0
                      ? " " + parseInt(props.state?.prazo_selecionadas[0]) > 1
                        ? " " + props.state?.prazo_selecionadas[0] + " dias uteis"
                        : " " + props.state?.prazo_selecionadas[0] + " dia util"
                      : " 10 dia util"}
                  </Text>
                </Flex>
              </>
            )}
          </Box>
        )}
        <CardProdCores>
          <CardProdCoresTitle>
            <p>
              <strong>cores:</strong>
            </p>
          </CardProdCoresTitle>
          <CardProdCoresGridCores>
            <GridCoresContent>
              <Flex flexDir="row">
                {typeof cores === "object" || cores != undefined
                  ? cores.map((data, idx) => {
                      if (idx < 4) {
                        if (idx == 0 || idx == 5 || idx == 10) {
                          if (data.trim() != "") {
                            if (data.split(":")[0].indexOf("/") != -1) {
                              if (
                                data.split(":")[1].split("/")[0] == "#ffffff" ||
                                data.split(":")[1].split("/")[1] == "#ffffff" ||
                                data.split(":")[1].split("/")[0] == "rgb(245, 245, 220)" ||
                                data.split(":")[1].split("/")[1] == "rgb(245, 245, 220)"
                              ) {
                                return (
                                  <CardProdCoresGridCoresContentCor
                                    style={{
                                      marginLeft: "0px",
                                      backgroundImage: `linear-gradient(90deg, ${
                                        data.split(":")[1].split("/")[0]
                                      } 50%, ${data.split(":")[1].split("/")[1]} 50%)`,
                                      border: "1px solid rgb(180,180,180)",
                                    }}
                                    title={data.split(":")[0]}
                                  ></CardProdCoresGridCoresContentCor>
                                )
                              } else {
                                return (
                                  <CardProdCoresGridCoresContentCor
                                    style={{
                                      marginLeft: "0px",
                                      backgroundImage: `linear-gradient(90deg, ${
                                        data.split(":")[1].split("/")[0]
                                      } 50%, ${data.split(":")[1].split("/")[1]} 50%)`,
                                    }}
                                    // data-bs-toggle="tooltip"
                                    // data-bs-placement="top"
                                    title={data.split(":")[0]}
                                  ></CardProdCoresGridCoresContentCor>
                                )
                              }
                            }

                            if (data.split(":")[1] == "#ffffff" || data.split(":")[1] == "rgb(245, 245, 220)") {
                              return (
                                <CardProdCoresGridCoresContentCor
                                  style={{
                                    marginLeft: "0px",
                                    backgroundColor: data.split(":")[1] + "",
                                    border: "1px solid rgb(180,180,180)",
                                  }}
                                  // data-bs-toggle="tooltip"
                                  // data-bs-placement="top"
                                  title={data.split(":")[0]}
                                ></CardProdCoresGridCoresContentCor>
                              )
                            } else {
                              return (
                                <CardProdCoresGridCoresContentCor
                                  style={{
                                    marginLeft: "0px",
                                    backgroundColor: data.split(":")[1] + "",
                                  }}
                                  // data-bs-toggle="tooltip"
                                  // data-bs-placement="top"
                                  title={data.split(":")[0]}
                                ></CardProdCoresGridCoresContentCor>
                              )
                            }
                          }
                        } else {
                          if (data.trim() != "") {
                            if (data.split(":")[0].indexOf("/") != -1) {
                              if (
                                data.split(":")[1].split("/")[0] == "#ffffff" ||
                                data.split(":")[1].split("/")[1] == "#ffffff" ||
                                data.split(":")[1].split("/")[0] == "rgb(245, 245, 220)" ||
                                data.split(":")[1].split("/")[1] == "rgb(245, 245, 220)"
                              ) {
                                return (
                                  <CardProdCoresGridCoresContentCor
                                    style={{
                                      backgroundImage: `linear-gradient(90deg, ${
                                        data.split(":")[1].split("/")[0]
                                      } 50%, ${data.split(":")[1].split("/")[1]} 50%)`,
                                      border: "1px solid rgb(180,180,180)",
                                    }}
                                    // data-bs-toggle="tooltip"
                                    // data-bs-placement="top"
                                    title={data.split(":")[0]}
                                  ></CardProdCoresGridCoresContentCor>
                                )
                              } else {
                                return (
                                  <CardProdCoresGridCoresContentCor
                                    style={{
                                      backgroundImage: `linear-gradient(90deg, ${
                                        data.split(":")[1].split("/")[0]
                                      } 50%, ${data.split(":")[1].split("/")[1]} 50%)`,
                                    }}
                                    // data-bs-toggle="tooltip"
                                    // data-bs-placement="top"
                                    title={data.split(":")[0]}
                                  ></CardProdCoresGridCoresContentCor>
                                )
                              }
                            }

                            if (data.split(":")[1] == "#ffffff" || data.split(":")[1] == "rgb(245, 245, 220)") {
                              return (
                                <CardProdCoresGridCoresContentCor
                                  style={{
                                    backgroundColor: data.split(":")[1] + "",
                                    border: "1px solid rgb(180,180,180)",
                                  }}
                                  // data-bs-toggle="tooltip"
                                  // data-bs-placement="top"
                                  title={data.split(":")[0]}
                                ></CardProdCoresGridCoresContentCor>
                              )
                            } else {
                              return (
                                <CardProdCoresGridCoresContentCor
                                  style={{
                                    backgroundColor: data.split(":")[1] + "",
                                  }}
                                  // data-bs-toggle="tooltip"
                                  // data-bs-placement="top"
                                  title={data.split(":")[0]}
                                ></CardProdCoresGridCoresContentCor>
                              )
                            }
                          }
                        }
                      }
                    })
                  : null}
                {props.isUltraRapido ? (
                  <></>
                ) : cores != undefined && cores.length > 4 ? (
                  <Text fontSize="14px" mt="3.5px" ml={mobileView ? "-2px" : "7px"}>
                    {cores.length - 6 == 0 || cores.length - 6 == -1 ? "" : "e"}
                    <strong>
                      {" "}
                      {cores.length - 6 == 0 || cores.length - 6 == -1 ? "" : "+"}
                      {mobileView
                        ? cores.length - 4
                        : cores.length - 6 == 0 || cores.length - 6 == -1
                        ? ""
                        : cores.length - 6}
                    </strong>
                  </Text>
                ) : (
                  <></>
                )}
              </Flex>
            </GridCoresContent>
          </CardProdCoresGridCores>
        </CardProdCores>
        {props.isUltraRapido ? (
          <Box h="35px" w="100%">
            <Text textAlign="center" fontSize="17px" color="black">
              Compre hoje,
            </Text>
            <Text textAlign="center" fontSize="17px" mt="-20px" color={colorBaseUltraRapido}>
              retire em <strong>{props.data_ultra_rapido}</strong>
            </Text>
          </Box>
        ) : (
          <></>
        )}
        <>
          {props.estoque == 0 ? (
            <></>
          ) : (
            <>
              <TextMenorValor pt="15px" textAlign="center" fontSize="10px">
                A partir de
              </TextMenorValor>
              <FlexPreco>
                <TextPreco>
                  <Text
                    as="span"
                    fontSize=".6rem"
                    display="inline-block"
                    verticalAlign="middle"
                    lineHeight="normal"
                    mb="5px"
                    fontWeight="bold"
                  >
                    *
                  </Text>
                  R$ {props.valor_home}
                </TextPreco>
                <Text ml="5px" mt="10px" fontSize="10px">
                  a unidade
                </Text>
              </FlexPreco>
            </>
          )}
        </>
      </LinkBoxProductContainer>
    </a>
  )
}
