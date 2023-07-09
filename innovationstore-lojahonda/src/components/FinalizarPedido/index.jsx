import {
  Badge,
  Box,
  Button,
  ChakraProvider,
  Flex,
  Image,
  Progress,
  Text,
  usePrefersReducedMotion,
  keyframes,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {
  AiFillCaretRight,
  AiFillCaretLeft,
  AiOutlineRight,
  AiOutlineCloudUpload,
} from "react-icons/ai";
import Faturamento from "./Faturamento";
import Finalizar from "./Finalizar";
import { ContainerBox } from "./styles";
import { AnimateSharedLayout } from "framer-motion";
import { CgFileDocument } from "react-icons/cg";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { NextSeo } from "next-seo";
import { FaGooglePay } from "react-icons/fa";
import SolicitacaoLayout from "./SolicitacaoLayout";
import { ButtonConfirmarSolicitacaoLayout } from "./SolicitacaoLayout/components/ContainerBodySolicitacaoLayout/styles";
import { useRouter } from "next/router";
import Link from "next/link";

const FinalizarPedido = ({ dados_layout, dados_cliente }) => {


  const [paginacao, setPaginacao] = useState(1);
  const [loading, setLoading] = useState(false);
  const [mobileView, setMobileView] = useState(false);

  const router = useRouter();

  const textEffect = keyframes`
 0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
`;

  const prefersReducedMotion = usePrefersReducedMotion();

  const animation = prefersReducedMotion
    ? undefined
    : `${textEffect} 0.7s ease-in both`;

  useEffect(() => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      setMobileView(true);
    } else {
      setMobileView(false);
    }
  }, []);

  const loadingConfirmar = async () => {
    try {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
        clearTimeout(timer);
      }, 1500);
    } catch (err) {
      setLoading(false);
    }
  };

  const renderSwitch = () => {
    switch (paginacao) {
      case 1:
        return <Faturamento dados_cliente={dados_cliente} mobileView={mobileView} />;
      case 2:
        return (
          <SolicitacaoLayout
            paginacao={paginacao}
            setPaginacao={setPaginacao}
            dados_layout={dados_layout}
            mobileView={mobileView}
          />
        );
      case 3:
        return (
          <Finalizar setPaginacao={setPaginacao} mobileView={mobileView} />
        );
      default:
        return <Faturamento dados_cliente={dados_cliente} />;
    }
  };

  return (
    <>
      <NextSeo
        title={`Faturamento`}
        description={`Sucesso Layout,Brindes, Brindes Personalizados, Brindes Promocionais, Brindes Corporativos, Brindes Ecológicos, Personalizados, Innovation Brindes`}
      />
      <ChakraProvider>
        <AnimateSharedLayout>
          <Box>
            <Flex w="100%" justifyContent="center" >
              <Image
                cursor='pointer'
                onClick={() => router.push('/')}
                display={mobileView ? "block" : "none"}
                alt="logo-finalizar"
                src={
                  mobileView
                    ? "images/logo-topo-finalizar-pedido-mobile.svg"
                    : "/images/logo-topo-finalizar-pedido.png"
                }
                ml={mobileView ? "10px" : "40px"}
                mt={mobileView ? "25px" : "20px"}
                h="60px"
                w="auto"
              />
            </Flex>

            <Flex
              justifyContent="space-around"
              bgColor="white"
              h="120px"
              w="100%"
            >
              <Link zIndex={99} href={'/'} passHref>
                <a>
                  <Image
                    position='relative'
                    zIndex={99}
                    cursor='pointer'
                    display={mobileView ? "none" : "block"}
                    alt="logo-finalizar"
                    src={
                      mobileView
                        ? "images/logo-topo-finalizar-pedido-mobile.svg"
                        : "/images/logo-topo-finalizar-pedido.png"
                    }
                    ml={mobileView ? "10px" : "35px"}
                    mt={mobileView ? "25px" : "35px"}
                    h="40px"
                    w="auto"
                  />
                </a>
              </Link>
              <Box ml={mobileView ? "0" : "-100px"} w="100%" h="100%">
                <Flex pl="15px" pt="20px" w="320px" h="50%" mx="auto">
                  <Badge
                    onClick={() => setPaginacao(1)}
                    textAlign="center"
                    fontSize="25px"
                    bgColor="#7fbc03"
                    w="40px"
                    variant="solid"
                    h="40px"
                    pt="5px"
                    pl="6px"
                    borderRadius="full"
                  >
                    <CgFileDocument color="white" size="28px" />
                  </Badge>
                  {/* <Box w='90px' mx='-0.8px' mt='17px' bgColor={paginacao > 1 ? '#7fbc03': '#dbdbdb'} h='5px'/> */}
                  <Progress
                    w="90px"
                    mx="-0.8px"
                    mt="17px"
                    hasStripe
                    bgColor={paginacao > 1 ? "#7fbc03" : "#dbdbdb"}
                    h="5px"
                    size="sm"
                    isIndeterminate={paginacao > 1 ? true : false}
                    colorScheme="whiteAlpha"
                    value={paginacao > 1 ? 100 : 0}
                  />

                  <Badge
                    onClick={() => setPaginacao(2)}
                    textAlign="center"
                    fontSize="25px"
                    bgColor={paginacao > 1 ? "#7fbc03" : "#dbdbdb"}
                    w="40px"
                    pt="4px"
                    pl="5px"
                    variant="solid"
                    h="40px"
                    borderRadius="full"
                  >
                    <AiOutlineCloudUpload color="white" size="30px" />
                  </Badge>
                  {/* <Box w='90px' mx='-0.8px' mt='17px' bgColor={paginacao === 3 ? '#7fbc03': '#dbdbdb'} h='5px'/> */}
                  <Progress
                    w="90px"
                    mx="-0.8px"
                    mt="17px"
                    hasStripe
                    bgColor={paginacao === 3 ? "#7fbc03" : "#dbdbdb"}
                    h="5px"
                    size="sm"
                    isIndeterminate={paginacao === 3 ? true : false}
                    colorScheme="whiteAlpha"
                    value={paginacao > 1 ? 100 : 0}
                  />

                  <Badge
                    textAlign="center"
                    fontSize="25px"
                    animate={{ delay: 2.5 }}
                    bgColor={paginacao === 3 ? "#7fbc03" : "#dbdbdb"}
                    w="40px"
                    pt="4px"
                    pl="5px"
                    variant="solid"
                    h="40px"
                    borderRadius="full"
                  >
                    <FaGooglePay color="white" size="30px" />
                  </Badge>
                </Flex>
                <Flex
                  layoutId="box-container"
                  justifyContent="space-around"
                  pt="10px"
                  w="380px"
                  h="50%"
                  mx="auto"
                >
                  <Flex
                    position="relative"
                    color="black"
                    left="-15px"
                    textAlign="center"
                    flexDir="column"
                  >
                    <Text>Faturamento</Text>
                    <Box w="100%" mt="-15px" borderBottom="1px solid black" />
                    <Text mt="-1px">Entrega</Text>
                  </Flex>
                  <Text
                    left="-13px"
                    position="relative"
                    color={paginacao > 1 ? "black" : "#dbdbdb"}
                  >
                    Upload
                  </Text>
                  <Text color={paginacao === 3 ? "black" : "#dbdbdb"}>
                    Finalizar
                  </Text>
                </Flex>
              </Box>
              <Box
                display={mobileView ? "none" : "block"}
                w={mobileView ? "0%" : "100px"}
                bgCoplor="red"
                h="100%"
              ></Box>
            </Flex>

            <ContainerBox
              layoutId="box-container"
              minH={mobileView ? "auto" : paginacao === 3 ? "50vh" : "91.8vh"}
              w={mobileView ? "400px" : "100%"}
              bgColor="#f5f5f5"
            >
              {mobileView && paginacao === 1 ? (
                <Flex
                  w="98%"
                  maxW="1250px"
                  mx="auto"
                  mt={mobileView && paginacao === 1 ? "-10px" : "-30px"}
                  mb={mobileView ? "10px" : "10px"}
                  h="5px"
                >
                  <Button
                    position="relative"
                    top="-25px"
                    onClick={() => router.push("/carrinho")}
                    leftIcon={
                      mobileView ? (
                        <AiOutlineArrowLeft
                          fontSize={mobileView ? "28px" : ""}
                        />
                      ) : (
                        <AiFillCaretLeft />
                      )
                    }
                    bgColor="#f5f5f5"
                    _hover={{ bgColor: "#f5f5f5" }}
                    _active={{ bgColor: "#f5f5f5", transform: "scale(0.90)" }}
                    boxShadow="none !important"
                  >
                    {mobileView ? "Carrinho" : "Voltar para o carrinho"}
                  </Button>
                </Flex>
              ) : mobileView ? (
                <Flex
                  w="98%"
                  maxW="1250px"
                  mx="auto"
                  mt={mobileView && paginacao >= 2 ? "-10px" : "-30px"}
                  mb="10px"
                  h="5px"
                >
                  <Button
                    position="relative"
                    top="-25px"
                    variant="ghost"
                    h="35px"
                    fontSize="28px"
                    onClick={() => {
                      setPaginacao(parseInt(paginacao) - 1);
                      loadingConfirmar();
                    }}
                    leftIcon={<AiOutlineArrowLeft />}
                    colorScheme="whiteAlpha"
                    color="black"
                    _active={{ transform: "scale(0.90)" }}
                    boxShadow="none !important"
                  />
                </Flex>
              ) : (
                <div></div>
              )}
              {!mobileView && paginacao === 3 ? (
                <Flex
                  w="98%"
                  maxW="1250px"
                  mx="auto"
                  mt="-20px"
                  mb="10px"
                  h="35px"
                >
                  <Button
                    variant="ghost"
                    h="35px"
                    onClick={() => {
                      setPaginacao(parseInt(paginacao) - 1);
                      loadingConfirmar();
                    }}
                    leftIcon={<AiFillCaretLeft />}
                    colorScheme="whiteAlpha"
                    color="black"
                    _active={{ transform: "scale(0.90)" }}
                    boxShadow="none !important"
                  >
                    Voltar
                  </Button>
                </Flex>
              ) : (
                <div></div>
              )}
              <Box
                w={mobileView ? "100%" : "98%"}
                maxW="1255px"
                minH={mobileView ? "auto" : paginacao === 3 ? "1200px" : ""}
                h={mobileView ? "auto" : paginacao === 3 ? "auto" : "auto"}
                bgColor={paginacao === 3 ? "" : "white"}
                mx="auto"
                mb={paginacao === 2 ? "30px" : "0"}
                boxShadow={
                  mobileView
                    ? "none"
                    : paginacao === 3
                      ? ""
                      : "2px 2px 3px 2px #dbdbdb"
                }
                borderRadius="15px"
              >
                <Flex
                  pt={mobileView ? "10px" : "70px"}
                  display={paginacao === 3 ? "none" : ""}
                  justifyContent="center"
                  align="center"
                  w="100%"
                  h="150px"
                >
                  {paginacao === 2 ? (
                    <>
                      <Text
                        mt={mobileView ? "45px" : ""}
                        fontFamily="Arial"
                        color="black"
                        fontSize="22px"
                        textAlign="center"
                        textTransform="uppercase"
                        animation={animation}
                      >
                        Envie sua arte final
                      </Text>
                      <Text
                        position="relative"
                        top="-5px"
                        fontFamily="Arial"
                        fontWeight="bold"
                        color="gray"
                        fontSize="12px"
                        textAlign="center"
                      >
                        Arquivos compatíveis:{" "}
                        <strong>AI, CDR, JPG, PNG e PDF</strong>
                      </Text>
                    </>
                  ) : (
                    <Text
                      fontFamily="Arial"
                      color="#414042"
                      fontSize="22px"
                      textAlign="center"
                      textTransform="uppercase"
                    >
                      Confirme ou altere os dados do faturamento
                    </Text>
                  )}
                </Flex>
                {renderSwitch()}
                <Flex
                  w="100%"
                  h="150px"
                  justifyContent="center"
                  align="center"
                  pt={mobileView ? "40px" : "60px"}
                >
                  {paginacao <= 1 ? (
                    <Flex
                      h="40px"
                      mt={mobileView ? "15px" : "10px"}
                      justify="center"
                      alignItems="center"
                      w="100%"
                    >
                      <ButtonConfirmarSolicitacaoLayout
                        rightIcon={
                          mobileView ? <AiOutlineRight /> : <AiFillCaretRight />
                        }
                        type="submit"
                        onClick={() => {
                          setPaginacao(parseInt(paginacao) + 1);
                          loadingConfirmar();
                        }}
                      // onKeyPress={(e) =>
                      //   e.key == "Enter" ?
                      //     resultado(form_descricao, idDescricao)
                      //     :
                      //     null}
                      >
                        <span>AVANÇAR</span>
                      </ButtonConfirmarSolicitacaoLayout>
                    </Flex>
                  ) : (
                    <div></div>
                  )}
                </Flex>
                <Flex w="100%">
                  {!mobileView && paginacao === 1 ? (
                    <Button
                      onClick={() => { router.push("/carrinho"); }}
                      leftIcon={
                        mobileView ? (
                          <AiOutlineArrowLeft
                            fontSize={mobileView ? "28px" : ""}
                          />
                        ) : (
                          <AiFillCaretLeft />
                        )
                      }
                      bgColor="white"
                      _hover={{ bgColor: "white" }}
                      _active={{ bgColor: "white", transform: "scale(0.90)" }}
                      boxShadow="none !important"
                    >
                      {mobileView ? "Carrinho" : "Voltar para o carrinho"}
                    </Button>
                  ) : !mobileView && paginacao === 2 ? (
                    <Button
                      onClick={() => {
                        setPaginacao(parseInt(paginacao) - 1);
                        loadingConfirmar();
                      }}
                      fontSize={mobileView ? "28px" : ""}
                      leftIcon={
                        mobileView ? (
                          <AiOutlineArrowLeft />
                        ) : (
                          <AiFillCaretLeft />
                        )
                      }
                      bgColor="white"
                      _hover={{ bgColor: "white" }}
                      _active={{ bgColor: "white", transform: "scale(0.90)" }}
                      boxShadow="none !important"
                    >
                      {mobileView ? "" : "Voltar"}
                    </Button>
                  ) : (
                    <div></div>
                  )}
                </Flex>
              </Box>
            </ContainerBox>
          </Box>
        </AnimateSharedLayout>
      </ChakraProvider>
    </>
  );
};

export default FinalizarPedido;
