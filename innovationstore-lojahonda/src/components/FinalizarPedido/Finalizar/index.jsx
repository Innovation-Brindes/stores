import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { ContainerTextTitleTable, FlexDesktop } from "../../Carrinho/styles";
import {
  BoxMobile,
  ContainerFlexTitleTableMobile,
} from "../../Carrinho/stylesMobile";
import { BoxBorder } from "../styles";
import { ComponentCarrinhoFinalizarPedido } from "./components/ComponentCarrinhoFinalizarPedido";
import { ComponentCarrinhoFinalizarPedidoMobile } from "./components/ComponentCarrinhoFinalizarPedidoMobile";
import { ComponentDadosFinalizarPedido } from "./components/ComponentDadosFinalizarPedido";
import { ComponentEntreguePorFinalizarPedido } from "./components/ComponentEntreguePorFinalizarPedido";
import { ObservacoesGeraisFinalizarPedido } from "./components/ObservacoesGeraisFinalizarPedido";
import { NextSeo } from 'next-seo';


const loadingGif = "/images/loading.gif";

const btnRemoveMobile = "/images/btn_remove_mobile.svg";

const Index = ({ setPaginacao, mobileView }) => {
  const [loading, setLoading] = useState(false);
  const [loadingConfirmar, setLoadingConfirmar] = useState(false);
  const FlexDelayContainer = motion(Flex);

  useEffect(() => {
    loadingConfirmarPedido();
    try {
      setLoading(true);
      const timer = setTimeout(function () {
        setLoading(false);
        clearTimeout(timer);
      }, 1500);
    } catch (err) {
      setLoading(false);
    }
  }, []);

  const loadingConfirmarPedido = async () => {
    try {
      setLoadingConfirmar(true);
      const timer = setTimeout(function () {
        setLoadingConfirmar(false);
        clearTimeout(timer);
      }, 1000);
    } catch (err) {
      setLoadingConfirmar(false);
    }
  };

  return (
    <>
      <NextSeo title={`Pagamento`} />
      {loading ? (
        <Flex
          bgColor="white"
          w="98%"
          maxW="1200px"
          justify="center"
          h="380px"
          align="center"
        >
          <img
            alt="loading"
            style={{
              position: "relative",
            }}
            src={loadingGif}
          />
        </Flex>
      ) : (
        <>
          <Box w="100%" minH={mobileView ? "auto" : "1150px"}>
            <Flex
              h={mobileView ? "auto" : "380px"}
              borderRadius="3px"
              flexDir="column"
              bgColor="white"
              pt="30px"
              border={mobileView ? "none" : "1px solid rgb(204, 204, 204)"}
              color="#717171"
              w={mobileView ? "400px" : "100%"}
            >
              <Flex
                flexDir={mobileView ? "column" : "row"}
                borderBottom={
                  mobileView ? "1px solid rgb(204, 204, 204)" : "none"
                }
                fontSize="14px"
                w="94%"
                mx="auto"
              >
                <Flex>
                  <Text textTransform="uppercase">
                    <strong>Número do pedido:</strong>
                  </Text>
                  <Text Text ml="5px">
                    31.632.728/0001-60
                  </Text>
                </Flex>
                <BoxBorder
                  display={mobileView ? "none" : "block"}
                  mx="10px"
                  mt="12px"
                  borderTop="1px solid rgb(204, 204, 204)"
                />
                <Flex>
                  <Text textTransform="uppercase">
                    <strong>Consultor:</strong>
                  </Text>
                  <Text ml="5px" textTransform="uppercase">
                    Fernanda
                  </Text>
                </Flex>
              </Flex>
              <ComponentDadosFinalizarPedido />
            </Flex>

            <FlexDelayContainer
              flexDir="column"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
              bgColor="white"
              mt="20px"
              border="1px solid rgb(204, 204, 204)"
              borderRadius="3px"
              w={mobileView ? "400px" : "100%"}
              h="auto"
            >
              <ContainerFlexTitleTableMobile>
                <ContainerTextTitleTable
                  fontSize="24px"
                  color="#414042"
                  fontFamily="Gisha"
                >
                  <strong>Item</strong>
                </ContainerTextTitleTable>
              </ContainerFlexTitleTableMobile>

              <BoxMobile>
                <ComponentCarrinhoFinalizarPedidoMobile
                  btnRemoveMobile={btnRemoveMobile}
                />
              </BoxMobile>

              <FlexDesktop>
                <Box w="100%" minH="auto">
                  <Flex h="70px" w="100%">
                    <Flex
                      pt="15px"
                      justify="start"
                      pl="50px"
                      align="center"
                      w="45%"
                      h="100%"
                    >
                      <Text>
                        <strong>ITEM</strong>
                      </Text>
                    </Flex>
                    <Flex align="center" w="65%" h="100%">
                      <Box h="75%" w="15%">
                        <Text textAlign="center" mt="20px">
                          <strong>Qtd.</strong>
                        </Text>
                      </Box>
                      <Box h="75%" w="35%">
                        <Text textAlign="center" mt="20px">
                          <strong>Prazo de produção</strong>
                        </Text>
                      </Box>
                      <Box h="75%" w="20%">
                        <Text mt="20px" textAlign="center">
                          <strong>Valor unitário</strong>
                        </Text>
                      </Box>
                      <Box h="75%" w="30%">
                        <Text textAlign="center" mt="20px">
                          <strong>Valor total</strong>
                        </Text>
                      </Box>
                    </Flex>
                  </Flex>

                  <ComponentCarrinhoFinalizarPedido />
                </Box>
              </FlexDesktop>

              <ComponentEntreguePorFinalizarPedido />

              <ObservacoesGeraisFinalizarPedido />

              <Flex w="100%" h="140px" justify="center" align="center">
                <Button
                  onClick={() => loadingConfirmarPedido()}
                  isLoading={loadingConfirmar ? true : false}
                  fontFamily="Gisha"
                  w="385px"
                  borderRadius="10px"
                  fontSize={mobileView ? "25px" : "19px"}
                  color="white"
                  bgColor="#FF4F00"
                  boxShadow="none !important"
                  _hover={{ bgColor: "#FF4F00", opacity: "0.9" }}
                  _active={{ transform: "scale(0.95)", bgColor: "#FF4F00" }}
                  transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                  h="50px"
                >
                  Confirmar pedido
                </Button>
              </Flex>
            </FlexDelayContainer>
          </Box>
        </>
      )}
    </>
  );
};

export default Index;
