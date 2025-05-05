import { Badge, Box, Flex, Button, Image, Progress, Text, Heading, Link as LinkChakra, Icon } from "@chakra-ui/react"
import { set } from "nprogress"
import React, { useState, useEffect } from "react"
import { ContainerFlexStatusPedidoDesktop, TextTransportadora } from "../styles"
import Link from "next/link"
import { AiFillPhone } from "react-icons/ai"

const greenLoading = "/images/menu/loader.gif"

const ContainerStatus = (props) => {
  function capitalFirstLetter(string) {
    var firstLetter = string.charAt(0).toUpperCase() + string.toLowerCase().slice(1)
    return firstLetter
  }

  const [loading, setLoading] = useState(false)
  const [mobileView, setmobileView] = useState()

  useEffect(() => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      setmobileView(true)
    } else {
      setmobileView(false)
    }
    loadingResumoToggle()
  }, [])

  const loadingResumoToggle = async () => {
    try {
      if (props.state.itens_pedido.length == 0) {
        setLoading(true)
      }
      const timer = setTimeout(function () {
        setLoading(false)
        clearTimeout(timer)
      }, 1000)
    } catch (err) {
      setLoading(false)
    }
  }

  return (
    <>
      {loading ? (
        <img
          width={100}
          height={100}
          style={{ position: "relative", margin: "auto" }}
          alt="loading"
          src={greenLoading}
        />
      ) : (
        <ContainerFlexStatusPedidoDesktop itens_pedido={props.state.itens_pedido} mx="auto">
          {props.state.itens_pedido.length > 0 ? (
            <Flex align="center" h="40px" justify="center" pt="15px" mb="20px" w="1100px" bgColor="#f5f5f5" mx="auto">
              <Text textAlign="center" fontFamily="Gisha" textTransform="uppercase">
                Previsão de conclusão do seu pedido: <strong>{props.state.dados_parceiro.data_previsao_pedido}</strong>
              </Text>
            </Flex>
          ) : (
            <></>
          )}
          {props.state.itens_pedido.length > 0 ? (
            props.state.itens_pedido.map((item) => {
              return (
                <>
                  <Flex>
                    <Text w="270px">
                      {item.nome_produto} <strong>- {item.codigo_prod} -</strong>
                    </Text>
                    <Box mt="13.5px" mx="20px" h="10px" borderTop="1px solid #d1d1d1" w="550px" />
                    <Flex mr="10px" fontFamily="Gisha">
                      <Text fontSize="19px">
                        STATUS DO <strong>PEDIDO</strong>
                      </Text>
                      <Text fontSize="20px" fontFamily="Gisha bold" ml="5px" mt="-2px" color="#CC0000">
                        <strong>{item.porcentagem_producao}%</strong>
                      </Text>
                    </Flex>
                  </Flex>

                  <Flex mt="-10px" h="170px" align="center" justifyContent="space-between" w="1100px" mb="30px">
                    {item.image_url ? (
                      <Link href={`https://innovationbrindes.com.br/${item.link_produto}`}>
                        <a target="_blank">
                          <Image
                            _hover={{
                              transform: "scale(1.1,1.1)",
                              transition: "all ease 0.3s",
                            }}
                            transition="all ease 0.3s"
                            cursor="pointer"
                            border="1px solid #d1d1d1"
                            ml="25px"
                            src={item.image_url}
                            w="85px"
                            h="105px"
                          />
                        </a>
                      </Link>
                    ) : (
                      <Image border="1px solid #d1d1d1" src={greenLoading} w="120px" h="120px" />
                    )}

                    <Flex flexDir="column" pt="20px" w="950px">
                      <Flex mt="-25px" h="50px" align="center" textAlign="center" fontSize="16px" w="850px" mx="auto">
                        <Text ml="35px" color={item.data_recebido_status === "S" ? "black" : "#d1d1d1"}>
                          Pedido recebido
                        </Text>
                        <Text ml="55px" color={item.data_em_producao_status === "S" ? "black" : "#d1d1d1"}>
                          Em produção
                        </Text>
                        <Text ml="40px" color={item.data_controle_status === "S" ? "black" : "#d1d1d1"}>
                          Controle de qualidade
                        </Text>
                        <Text
                          ml="15px"
                          color={
                            item.data_nota_fiscal_status === "S" && item.data_controle_status === "S"
                              ? "black"
                              : "#d1d1d1"
                          }
                        >
                          Nota fiscal emitida
                        </Text>
                        <Text color={item.data_coletado_status === "S" ? "black" : "#d1d1d1"}>
                          {item.tipo_transporte}
                        </Text>
                      </Flex>

                      <Flex h="50px">
                        <Progress
                          w="124px"
                          mx="-0.8px"
                          mt="17px"
                          hasStripe
                          bgColor={"#CC0000"}
                          h="5px"
                          size="sm"
                          isIndeterminate={item.data_recebido_status === "S" ? true : false}
                          colorScheme="whiteAlpha"
                          value={item.data_recebido_status === "S" ? 20 : 0}
                        />

                        <Badge
                          overflow="hidden"
                          _hover={{
                            transform: "scale(1.1, 1.1)",
                            transition: "all ease 0.3s",
                          }}
                          zIndex={99999}
                          position="relative"
                          transition="all ease 0.3s"
                          float="left"
                          textAlign="center"
                          fontSize="25px"
                          bgColor="#CC0000"
                          w="40px"
                          variant="solid"
                          h="40px"
                          pt="5px"
                          pl="6px"
                          borderRadius="full"
                        >
                          <Image
                            src={
                              item.data_recebido_status === "S"
                                ? "https://imgproductioncrm.s3.us-east-2.amazonaws.com/check-acompanhe-seu-pedido-store.svg"
                                : "https://imgproductioncrm.s3.us-east-2.amazonaws.com/check-acompanhe-seu-pedido-cinza.svg"
                            }
                            size="30px"
                          />
                        </Badge>

                        <Progress
                          w="124px"
                          mx="-0.8px"
                          mt="17px"
                          hasStripe
                          bgColor={item.data_em_producao_status === "S" ? "#CC0000" : "#dbdbdb"}
                          h="5px"
                          size="sm"
                          isIndeterminate={item.data_em_producao_status === "S" ? true : false}
                          colorScheme="whiteAlpha"
                          value={item.data_em_producao_status === "S" ? 100 : 0}
                        />

                        <Badge
                          overflow="hidden"
                          _hover={{
                            transform: "scale(1.1, 1.1)",
                            transition: "all ease 0.3s",
                          }}
                          zIndex={99999}
                          position="relative"
                          float="left"
                          transition="all ease 0.3s"
                          textAlign="center"
                          fontSize="25px"
                          bgColor={item.data_em_producao_status === "S" ? "#CC0000" : "#dbdbdb"}
                          w="40px"
                          pt="4px"
                          pl="5px"
                          variant="solid"
                          h="40px"
                          borderRadius="full"
                        >
                          <Image
                            src={
                              item.data_em_producao_status === "S"
                                ? "https://imgproductioncrm.s3.us-east-2.amazonaws.com/check-acompanhe-seu-pedido-store.svg"
                                : "https://imgproductioncrm.s3.us-east-2.amazonaws.com/check-acompanhe-seu-pedido-cinza.svg"
                            }
                            size="30px"
                          />
                        </Badge>

                        <Progress
                          w="124px"
                          mx="-0.8px"
                          mt="17px"
                          hasStripe
                          bgColor={item.data_controle_status === "S" ? "#CC0000" : "#dbdbdb"}
                          h="5px"
                          size="sm"
                          isIndeterminate={item.data_controle_status === "S" ? true : false}
                          colorScheme="whiteAlpha"
                          value={item.data_controle_status === "S" ? 100 : 0}
                        />

                        <Badge
                          overflow="hidden"
                          _hover={{
                            transform: "scale(1.1, 1.1)",
                            transition: "all ease 0.3s",
                          }}
                          zIndex={99999}
                          position="relative"
                          float="left"
                          transition="all ease 0.3s"
                          textAlign="center"
                          fontSize="25px"
                          bgColor={item.data_controle_status === "S" ? "#CC0000" : "#dbdbdb"}
                          w="40px"
                          pt="4px"
                          pl="5px"
                          variant="solid"
                          h="40px"
                          borderRadius="full"
                        >
                          <Image
                            src={
                              item.data_controle_status === "S"
                                ? "https://imgproductioncrm.s3.us-east-2.amazonaws.com/check-acompanhe-seu-pedido-store.svg"
                                : "https://imgproductioncrm.s3.us-east-2.amazonaws.com/check-acompanhe-seu-pedido-cinza.svg"
                            }
                            size="30px"
                          />
                        </Badge>

                        <Progress
                          w="124px"
                          mx="-0.8px"
                          mt="17px"
                          hasStripe
                          bgColor={
                            item.data_nota_fiscal_status === "S" && item.data_controle_status === "S"
                              ? "#CC0000"
                              : "#dbdbdb"
                          }
                          h="5px"
                          size="sm"
                          isIndeterminate={
                            item.data_nota_fiscal_status === "S" && item.data_controle_status === "S" ? true : false
                          }
                          colorScheme="whiteAlpha"
                          value={item.data_nota_fiscal_status === "S" && item.data_controle_status === "S" ? 100 : 0}
                        />

                        <Badge
                          overflow="hidden"
                          _hover={{
                            transform: "scale(1.1, 1.1)",
                            transition: "all ease 0.3s",
                          }}
                          zIndex={99999}
                          position="relative"
                          float="left"
                          transition="all ease 0.3s"
                          textAlign="center"
                          fontSize="25px"
                          bgColor={
                            item.data_nota_fiscal_status === "S" && item.data_controle_status === "S"
                              ? "#CC0000"
                              : "#dbdbdb"
                          }
                          w="40px"
                          pt="4px"
                          pl="5px"
                          variant="solid"
                          h="40px"
                          borderRadius="full"
                        >
                          <Image
                            src={
                              item.data_nota_fiscal_status === "S" && item.data_controle_status === "S"
                                ? "https://imgproductioncrm.s3.us-east-2.amazonaws.com/check-acompanhe-seu-pedido-store.svg"
                                : "https://imgproductioncrm.s3.us-east-2.amazonaws.com/check-acompanhe-seu-pedido-cinza.svg"
                            }
                            size="30px"
                          />
                        </Badge>

                        <Progress
                          w="124px"
                          mx="-0.8px"
                          mt="17px"
                          hasStripe
                          bgColor={item.data_coletado_status === "S" ? "#CC0000" : "#dbdbdb"}
                          h="5px"
                          size="sm"
                          isIndeterminate={item.data_coletado_status === "S" ? true : false}
                          colorScheme="whiteAlpha"
                          value={item.data_coletado_status === "S" ? 100 : 0}
                        />

                        <Badge
                          overflow="hidden"
                          _hover={{
                            transform: "scale(1.1, 1.1)",
                            transition: "all ease 0.3s",
                          }}
                          zIndex={99999}
                          position="relative"
                          float="left"
                          transition="all ease 0.3s"
                          textAlign="center"
                          fontSize="25px"
                          bgColor={item.data_coletado_status === "S" ? "#CC0000" : "#dbdbdb"}
                          w="40px"
                          pt="4px"
                          pl="5px"
                          variant="solid"
                          h="40px"
                          borderRadius="full"
                        >
                          <Image
                            src={
                              item.data_coletado_status === "S"
                                ? "https://imgproductioncrm.s3.us-east-2.amazonaws.com/check-acompanhe-seu-pedido-store.svg"
                                : "https://imgproductioncrm.s3.us-east-2.amazonaws.com/check-acompanhe-seu-pedido-cinza.svg"
                            }
                            size="30px"
                          />
                        </Badge>

                        <Progress
                          w="124px"
                          mx="-0.8px"
                          mt="17px"
                          hasStripe
                          bgColor={item.data_coletado_status === "S" ? "#CC0000" : "#dbdbdb"}
                          h="5px"
                          size="sm"
                          isIndeterminate={item.data_coletado_status === "S" ? true : false}
                          colorScheme="whiteAlpha"
                          value={item.data_coletado_status === "S" ? 100 : 0}
                        />
                      </Flex>

                      <Flex h="20px" w="850px" pr="10px" mx="auto">
                        <Text fontSize="11px" ml="45px" lineHeight="120%" w="150px">
                          Pedido recebido dia <br />
                          {item.data_recebido_status === "S" ? item.data_recebido : ""}
                          <br />
                          Pelo ip: {" " + item.ip_data_recebido}
                        </Text>
                        <Text fontSize="11px" ml="10px" w="145px">
                          {item.data_em_producao_status === "S" ? item.data_em_producao : ""}
                        </Text>
                        <Text fontSize="11px" ml="17px" w="145px">
                          {item.data_controle_status === "S" ? item.data_controle : ""}
                        </Text>
                        <Text fontSize="11px" ml="20px" w="145px">
                          {item.data_nota_fiscal_status === "S" && item.data_controle_status === "S"
                            ? item.data_nota_fiscal
                            : ""}
                        </Text>
                        {item.data_coletado_status === "S" ? (
                          <Box w="145px" ml="5px" h="60px">
                            <Text textAlign="center" fontSize="11px" h="20px">
                              {item.data_coletado_status === "S" ? item.data_coletado : ""}
                            </Text>
                            <TextTransportadora
                              textAlign="center"
                              color="gray"
                              mt="-15px"
                              position="relative"
                              lineHeight="120%"
                              w="145px"
                              fontSize={"11px"}
                            >
                              {item.nome_transportadora}
                            </TextTransportadora>
                            <LinkChakra
                              style={{ textDecoration: "none" }}
                              href={
                                item.tipo_transporte !== "Coletado pela transportadora" ||
                                item.telefone_transportadora === ""
                                  ? "tel:551126496030"
                                  : `tel:${item.telefone_transportadora}`
                              }
                            >
                              <Flex mt="-13px">
                                <Icon color="#CC0000" as={AiFillPhone} h="15px" w="15px" />

                                <Text textAlign="center" left="5px" position="relative" color="gray" fontSize={"11px"}>
                                  {item.tipo_transporte === "Coletado pela transportadora"
                                    ? ` +${item.telefone_transportadora}`
                                    : "+55(11) 2649-6030"}
                                </Text>
                              </Flex>
                            </LinkChakra>
                          </Box>
                        ) : (
                          <Box w="145px" ml="5px" h="60px" />
                        )}
                      </Flex>
                    </Flex>
                  </Flex>
                </>
              )
            })
          ) : (
            <Flex flexDir="column" justify="center" pt="10px" align="center">
              <Heading as="h1" size="4xl" noOfLines={1}>
                Você ainda não tem pedido
              </Heading>
              <Button
                textTransform="uppercase"
                mt="30px"
                w="200px"
                bgColor="#CC0000"
                _hover={{ bgColor: "#CC0000", opacity: "0.9" }}
                _active={{ transform: "scale(0.95)", bgColor: "#CC0000" }}
                transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                color="white"
                boxShadow="none !important"
              >
                Voltar
              </Button>
            </Flex>
          )}
        </ContainerFlexStatusPedidoDesktop>
      )}
    </>
  )
}

export default ContainerStatus
