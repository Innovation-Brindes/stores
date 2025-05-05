import {
  Box,
  Button,
  Center,
  Collapse,
  Flex,
  Text,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import InputMask from "react-input-mask";
import {
  ContainerGridFreteContent,
  ContainerGridFreteContentTableBoxAlertLin3,
  ContainerGridFreteContentTableBoxAlertLin4,
  ContainerGridFreteContentTableBoxAlertLin2,
  ContainerGridFreteContentTable,
  ContainerGridFreteContentTableBoxAlert,
  ContainerGridFreteContentTableBoxAlertHeader,
  ContainerGridFreteContentTableBoxAlertLin1,
  MotionBox,
  ContainerComponentFrete,
  ContainerComponentFreteFlex,
  FlexBotaoConfirmar,
  FlexBotaoConfirmarMobile,
  BoxGridContainer,
} from "../styles";
import {
  GridFreteMobile,
  GridFreteTableColBlocoMobile,
  GridFreteTableColBlocoOptionMobile,
  GridFreteTableColBlocoOptionValueMobile,
  GridFreteTableColBlocoSeloClienteRetiraMobile,
  GridFreteTableColBlocoSeloNossoCarroMobile,
  GridFreteTableColMobile,
  GridFreteTableMobile,
} from "../stylesMobile";
import { AiFillCaretRight } from "react-icons/ai";
import { cor_base_1, cor_base_2 } from "../../../services/cores";
import { motion } from "framer-motion";

const greenLoading = "/images/menu/green-loader.gif";
const exclamacao = "/images/menu/box-alert.png";
const maisBarato = "/images/menu/table-mais-barato.png";
const td_style = { width: "142px" };
const maisRapido = "/images/menu/table-mais-rapido.png";
const clienteRetira = "/images/menu/cliente-retira.png";
const clienteRetiraBanner = "/images/menu/cliente-retira-banner.png";
const gratisVerde = "/images/menu/gratis.png";
const nossoCarro = "/images/menu/nosso-carro.png";
const nossoCarroBanner = "/images/menu/nosso-carro-banner.png";
const gratisLaranja = "/images/menu/gratis-laranja.png";

const ComponentFrete = (props) => {
  const { isOpen: atualizaModal, onToggle } = useDisclosure();
  const [botaoConfirma, setBotaoConfirma] = useState(false);
  const MotionCenter = motion(Center);

  return (
    <>
      <Center w="100%">
        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ContainerComponentFrete>
            <Text
              mt={["20px", "20px", "15px", "15px", "15px"]}
              lineHeight="100%"
              color="black"
              fontSize={["28px", "28px", "31.5px", "31.5px", "31.5px"]}
            >
              Falta pouco para concluir e receber o seu
            </Text>
            <Text
              mt="-25px"
              fontSize={["28px", "28px", "31.5px", "31.5px", "31.5px"]}
              color="#ff6b0e"
            >
              <strong>orçamento em segundos</strong>
            </Text>
            <ContainerComponentFreteFlex>
              <InputMask
                style={{
                  marginLeft: "10px",
                  marginRight: "10px",
                  height: "40px",
                  width: "225px",
                  border: "2px solid #c7c7c7",
                  borderRadius: "5px",
                  paddingLeft: "15px",
                }}
                placeholder="Digite aqui seu CEP"
                id="input-cep"
                mask={props.state.maskCep}
                onKeyDownCapture={(e) => {
                  props.pressEnter(e);
                  if (e.key == "Enter") {
                    if (!atualizaModal) {
                      onToggle();
                    }
                  }
                }}
                onChange={(e) => props.handleCEP(e)}
                maskChar=""
              />
              <Button
                _active={{ bgColor: "#ff6b0e" }}
                boxShadow="none !important"
                fontFamily="Akrobat"
                letterSpacing=" 0.1rem"
                h="40px"
                color="white"
                bgColor="#ff6b0e"
                _hover={{ bgColor: "#ff6b0e", opacity: "0.8" }}
                w="155px"
                onClick={() => {
                  props.getCotacaoCargoBR();
                  if (!atualizaModal) {
                    onToggle();
                  }
                }}
              >
                CONSULTAR
              </Button>
              <Box w="45px" h="45px">
                <img
                  alt="green-loading"
                  style={
                    props.state.carregando_frete
                      ? {
                          display: "block",
                          width: "45px",
                          height: "45px",
                          position: "relative",
                          marginLeft: "0px",
                        }
                      : { display: "none" }
                  }
                  src={greenLoading}
                />
              </Box>
            </ContainerComponentFreteFlex>

            <Collapse in={atualizaModal} animateOpacity>
              <BoxGridContainer rounded="md" shadow="md">
                {props.state.cotacao_frete_rapido != undefined &&
                props.state.cotacao_frete_rapido != undefined ? (
                  <GridFreteMobile>
                    <Flex
                      width="100%"
                      gap="1rem"
                      mt="1.6rem"
                      alignItems="center"
                    >
                      <Flex
                        alignItems="center"
                        justifyContent="center"
                        paddingBottom="1rem"
                        paddingBlock=".1rem"
                        bg="#ebebeb"
                        width="100%"
                        textAlign="center"
                      >
                        <Flex
                          width="100%"
                          alignItems="center"
                          justifyContent="center"
                          fontWeight="bold"
                        >
                          {props.state.rua +
                            " - " +
                            props.state.bairro +
                            " - " +
                            props.state.cidade_cep +
                            " - " +
                            props.state.estado_cep}
                        </Flex>
                      </Flex>
                    </Flex>
                    <GridFreteTableMobile>
                      {props.state.cidade_cep != "São Paulo" ? (
                        <GridFreteTableColMobile>
                          <GridFreteTableColBlocoMobile>
                            <img alt="mai-barato" src={maisBarato} />
                            <p>
                              {props.state.cotacao_frete_barato.name.length > 17
                                ? props.state.cotacao_frete_barato.name.substring(
                                    0,
                                    17
                                  ) + "..."
                                : props.state.cotacao_frete_barato.name}
                            </p>
                          </GridFreteTableColBlocoMobile>
                          <GridFreteTableColBlocoOptionMobile
                            style={{ backgroundColor: "#e3e3e3" }}
                          >
                            <Flex flexDirection="column">
                              <Text as="h1" m="0">
                                Prazo da transportadora
                              </Text>
                              <Text as="p" m="0">
                                De {props.state.cotacao_frete_barato.min} a{" "}
                                {props.state.cotacao_frete_barato.max} dias
                                úteis
                              </Text>
                            </Flex>
                          </GridFreteTableColBlocoOptionMobile>
                          <GridFreteTableColBlocoOptionMobile
                            style={{ backgroundColor: "#e3e3e3" }}
                          >
                            <Flex flexDirection="column">
                              <Text as="h1" m="0">
                                Prazo de produção
                              </Text>
                              <Text as="p" m="0">
                                {props.state.prazo_producao} dias úteis
                              </Text>
                            </Flex>
                          </GridFreteTableColBlocoOptionMobile>
                          <GridFreteTableColBlocoOptionMobile
                            style={{ backgroundColor: "#e3e3e3" }}
                          >
                            <Flex flexDirection="column">
                              <Text as="h1" m="0">
                                Previsão de entrega
                              </Text>
                              <Text as="p" m="0">
                                Até{" "}
                                {props.state.prazo_producao +
                                  props.state.cotacao_frete_barato.max}{" "}
                                dias úteis
                              </Text>
                            </Flex>
                          </GridFreteTableColBlocoOptionMobile>
                          <GridFreteTableColBlocoOptionValueMobile
                            style={{ backgroundColor: "#e3e3e3" }}
                          >
                            <h1>Valor do frete</h1>
                            <p>
                              <strong>
                                {props.state.cotacao_frete_barato.price.toLocaleString(
                                  "pt-BR",
                                  { style: "currency", currency: "BRL" }
                                )}
                              </strong>
                            </p>
                          </GridFreteTableColBlocoOptionValueMobile>
                          <GridFreteTableColBlocoOptionMobile
                            style={{ backgroundColor: "#e3e3e3" }}
                          >
                            <input
                              type="radio"
                              checked={
                                props.state.frete_selecionado == "mais-barato"
                                  ? true
                                  : false
                              }
                              value="mais-barato"
                              id="mais-barato"
                              data={JSON.stringify({
                                valor: props.state.cotacao_frete_barato.price,
                                prazo_entrega:
                                  props.state.prazo_producao +
                                  props.state.cotacao_frete_barato.max,
                                nome: props.state.cotacao_frete_barato.name,
                              })}
                              onClick={(e) => {
                                props.selectFrete(e);
                                setBotaoConfirma(true);
                              }}
                            />
                          </GridFreteTableColBlocoOptionMobile>
                        </GridFreteTableColMobile>
                      ) : (
                        <div></div>
                      )}

                      {props.state.cidade_cep != "São Paulo" ? (
                        <GridFreteTableColMobile>
                          <GridFreteTableColBlocoMobile>
                            <img alt="mais-rapido" src={maisRapido} />
                            <p>
                              {props.state.cotacao_frete_rapido.name.length > 27
                                ? props.state.cotacao_frete_rapido.name.substring(
                                    0,
                                    20
                                  ) + "..."
                                : props.state.cotacao_frete_rapido.name}
                            </p>
                          </GridFreteTableColBlocoMobile>
                          <GridFreteTableColBlocoOptionMobile
                            style={{ backgroundColor: "#f7f7f7" }}
                          >
                            <Flex flexDirection="column">
                              <Text as="h1" m="0">
                                Prazo da transportadora
                              </Text>
                              <Text as="p" m="0">
                                De {props.state.cotacao_frete_rapido.min} a{" "}
                                {props.state.cotacao_frete_rapido.max} dias
                                úteis
                              </Text>
                            </Flex>
                          </GridFreteTableColBlocoOptionMobile>
                          <GridFreteTableColBlocoOptionMobile
                            style={{ backgroundColor: "#f7f7f7" }}
                          >
                            <Flex flexDirection="column">
                              <Text as="h1" m="0">
                                Prazo de produção
                              </Text>
                              <Text as="p" m="0">
                                {props.state.prazo_producao} dias úteis
                              </Text>
                            </Flex>
                          </GridFreteTableColBlocoOptionMobile>
                          <GridFreteTableColBlocoOptionMobile
                            style={{ backgroundColor: "#f7f7f7" }}
                          >
                            <Flex flexDirection="column">
                              <Text as="h1" m="0">
                                Previsão de entrega
                              </Text>
                              <Text as="p" m="0">
                                Até{" "}
                                {props.state.prazo_producao +
                                  props.state.cotacao_frete_rapido.max}{" "}
                                dias úteis
                              </Text>
                            </Flex>
                          </GridFreteTableColBlocoOptionMobile>
                          <GridFreteTableColBlocoOptionValueMobile
                            style={{ backgroundColor: "#f7f7f7" }}
                          >
                            <h1>Valor do frete</h1>
                            <p>
                              <strong>
                                {props.state.cotacao_frete_rapido.price.toLocaleString(
                                  "pt-BR",
                                  { style: "currency", currency: "BRL" }
                                )}
                              </strong>
                            </p>
                          </GridFreteTableColBlocoOptionValueMobile>
                          <GridFreteTableColBlocoOptionMobile
                            style={{ backgroundColor: "#f7f7f7" }}
                          >
                            <input
                              type="radio"
                              checked={
                                props.state.frete_selecionado == "mais-rapido"
                                  ? true
                                  : false
                              }
                              value="mais-rapido"
                              id="mais-rapido"
                              data={JSON.stringify({
                                valor: props.state.cotacao_frete_rapido.price,
                                prazo_entrega:
                                  props.state.prazo_producao +
                                  props.state.cotacao_frete_rapido.max,
                                nome: props.state.cotacao_frete_rapido.name,
                              })}
                              onClick={(e) => {
                                props.selectFrete(e);
                                setBotaoConfirma(true);
                              }}
                            />
                          </GridFreteTableColBlocoOptionMobile>
                        </GridFreteTableColMobile>
                      ) : (
                        <div></div>
                      )}

                      <GridFreteTableColMobile>
                        <GridFreteTableColBlocoMobile>
                          <GridFreteTableColBlocoSeloClienteRetiraMobile
                            style={
                              props.state.cidade_cep == "São Paulo"
                                ? { height: "22px" }
                                : { height: "30px" }
                            }
                          >
                            CLIENTE RETIRA
                          </GridFreteTableColBlocoSeloClienteRetiraMobile>
                          <p style={{ fontSize: "80%" }}>São Paulo - Capital</p>
                        </GridFreteTableColBlocoMobile>
                        <GridFreteTableColBlocoOptionMobile
                          style={{ backgroundColor: "#e3e3e3" }}
                        >
                          <Flex flexDirection="column">
                            <Text as="h1" m="0">
                              Prazo da transportadora
                            </Text>
                            <Text as="p" m="0">
                              1 dia útil
                            </Text>
                          </Flex>
                        </GridFreteTableColBlocoOptionMobile>
                        <GridFreteTableColBlocoOptionMobile
                          style={{ backgroundColor: "#e3e3e3" }}
                        >
                          <Flex flexDirection="column">
                            <Text as="h1" m="0">
                              Prazo de produção
                            </Text>
                            <Text as="p" m="0">
                              {props.state.prazo_producao} dias úteis
                            </Text>
                          </Flex>
                        </GridFreteTableColBlocoOptionMobile>
                        <GridFreteTableColBlocoOptionMobile
                          style={{ backgroundColor: "#e3e3e3" }}
                        >
                          <Flex flexDirection="column">
                            <Text as="h1" m="0">
                              Previsão de entrega
                            </Text>
                            <Text as="p" m="0">
                              Até {props.state.prazo_producao + 1} dias úteis
                            </Text>
                          </Flex>
                        </GridFreteTableColBlocoOptionMobile>
                        <GridFreteTableColBlocoOptionValueMobile
                          style={{ backgroundColor: cor_base_1 }}
                        >
                          <p
                            style={{
                              color: "white",
                              textAlign: "center",
                              fontFamily: "Akrobat SemiBold",
                              left: "-5px",
                              top: "15px",
                            }}
                          >
                            GRÁTIS
                          </p>
                        </GridFreteTableColBlocoOptionValueMobile>
                        <GridFreteTableColBlocoOptionMobile
                          style={{ backgroundColor: "#e3e3e3" }}
                        >
                          <input
                            type="radio"
                            checked={
                              props.state.frete_selecionado == "cliente-retira"
                                ? true
                                : false
                            }
                            value="cliente-retira"
                            id="cliente-retira"
                            data={JSON.stringify({
                              valor: 0,
                              prazo_entrega: props.state.prazo_producao + 1,
                              nome: "Cliente Retira",
                            })}
                            onClick={(e) => {
                              props.selectFrete(e);
                              setBotaoConfirma(true);
                            }}
                          />
                        </GridFreteTableColBlocoOptionMobile>
                      </GridFreteTableColMobile>

                      {props.state.cidade_cep == "São Paulo" ? (
                        <GridFreteTableColMobile>
                          <GridFreteTableColBlocoMobile>
                            <GridFreteTableColBlocoSeloNossoCarroMobile>
                              NOSSO CARRO
                            </GridFreteTableColBlocoSeloNossoCarroMobile>
                            <p style={{ fontSize: "80%" }}>
                              São Paulo - Capital
                            </p>
                          </GridFreteTableColBlocoMobile>
                          <GridFreteTableColBlocoOptionMobile
                            style={{ backgroundColor: "#f7f7f7" }}
                          >
                            <Flex flexDirection="column">
                              <Text as="h1" m="0">
                                Prazo da transportadora
                              </Text>
                              <Text as="p" m="0">
                                1 dia útil
                              </Text>
                            </Flex>
                          </GridFreteTableColBlocoOptionMobile>
                          <GridFreteTableColBlocoOptionMobile
                            style={{ backgroundColor: "#f7f7f7" }}
                          >
                            <Flex flexDirection="column">
                              <Text as="h1" m="0">
                                Prazo de produção
                              </Text>
                              <Text as="p" m="0">
                                {props.state.prazo_producao} dias úteis
                              </Text>
                            </Flex>
                          </GridFreteTableColBlocoOptionMobile>
                          <GridFreteTableColBlocoOptionMobile
                            style={{ backgroundColor: "#f7f7f7" }}
                          >
                            <Flex flexDirection="column">
                              <Text as="h1" m="0">
                                Previsão de entrega
                              </Text>
                              <Text as="p" m="0">
                                Até {props.state.prazo_producao + 1} dias úteis
                              </Text>
                            </Flex>
                          </GridFreteTableColBlocoOptionMobile>
                          <GridFreteTableColBlocoOptionValueMobile
                            style={{ backgroundColor: cor_base_2 }}
                          >
                            <p
                              style={{
                                color: "white",
                                textAlign: "center",
                                fontFamily: "Akrobat SemiBold",
                                left: "-5px",
                                top: "15px",
                              }}
                            >
                              {props.state.valor_total_produtos > 2000
                                ? "GRÁTIS"
                                : "R$ 80,00"}
                            </p>
                          </GridFreteTableColBlocoOptionValueMobile>
                          <GridFreteTableColBlocoOptionMobile
                            style={{ backgroundColor: "#f7f7f7" }}
                          >
                            <input
                              type="radio"
                              checked={
                                props.state.frete_selecionado ==
                                "innova-entrega"
                                  ? true
                                  : false
                              }
                              value="innova-entrega"
                              id="innova-entrega"
                              data={JSON.stringify({
                                valor:
                                  props.state.valor_total_produtos > 2000
                                    ? 0
                                    : 80,
                                prazo_entrega: props.state.prazo_producao + 1,
                                nome: "Nosso Carro",
                              })}
                              onClick={(e) => {
                                props.selectFrete(e);
                                setBotaoConfirma(true);
                              }}
                            />
                          </GridFreteTableColBlocoOptionMobile>
                        </GridFreteTableColMobile>
                      ) : (
                        <div></div>
                      )}
                    </GridFreteTableMobile>
                    {atualizaModal === true ? (
                      <FlexBotaoConfirmarMobile>
                        {botaoConfirma ? (
                          <Button
                            rightIcon={<AiFillCaretRight />}
                            color="white"
                            boxShadow="none !important"
                            bgColor="#ff7200"
                            _active={{ bgColor: "#ff7200" }}
                            _hover={{ bgColor: "#ff7200", opacity: "0.8" }}
                            w={["130px", "130px", "350px", "350px", "350px"]}
                            h="40px"
                            onClick={() => props.setModal()}
                            mb="10px"
                          >
                            CONFIRMAR
                          </Button>
                        ) : (
                          <Tooltip
                            hasArrow
                            placement="auto-end"
                            label="Selecione um frete para prosseguir"
                            bg="gray"
                            color="white"
                            shouldWrapChildren
                          >
                            <Button
                              rightIcon={<AiFillCaretRight />}
                              color="white"
                              boxShadow="none !important"
                              isDisabled
                              bgColor="gray"
                              mb="10px"
                              _active={{ bgColor: "gray" }}
                              _hover={{ bgColor: "gray" }}
                              w={["130px", "130px", "350px", "350px", "350px"]}
                              h="40px"
                            >
                              CONFIRMAR
                            </Button>
                          </Tooltip>
                        )}
                      </FlexBotaoConfirmarMobile>
                    ) : (
                      <></>
                    )}
                  </GridFreteMobile>
                ) : (
                  <div></div>
                )}
                {props.state.cotacao_frete_rapido != undefined &&
                props.state.cotacao_frete_rapido != undefined ? (
                  <ContainerGridFreteContent>
                    <Flex
                      position="absolute"
                      left="-30px"
                      top="-3rem"
                      width="100%"
                      gap=".5rem"
                    >
                      <Flex
                        paddingBlock=".1rem"
                        paddingLeft=".8rem"
                        paddingRight=".4rem"
                        bg="#333"
                        gap="1.3rem"
                        alignItems="center"
                        height="26px"
                        borderRadius="5px 5px 5px 5px"
                      >
                        <MdOutlineLocationOn size="1.3rem" color="white" />
                        <Text
                          as="span"
                          fontSize=".8rem"
                          color="white"
                          m="0"
                          fontFamily="Akrobat"
                          letterSpacing=" 0.1rem"
                          fontWeight="bold"
                        >
                          ENDEREÇO
                        </Text>
                      </Flex>
                      <Flex
                        alignItems="center"
                        justifyContent="center"
                        paddingBottom="1rem"
                        paddingBlock=".1rem"
                        bg="#ebebeb"
                        width="100%"
                        textAlign="center"
                      >
                        <Flex
                          width="100%"
                          alignItems="center"
                          justifyContent="center"
                          fontWeight="bold"
                        >
                          {props.state.rua +
                            " - " +
                            props.state.bairro +
                            " - " +
                            props.state.cidade_cep +
                            " - " +
                            props.state.estado_cep}
                        </Flex>
                      </Flex>
                    </Flex>
                    <ContainerGridFreteContentTable>
                      <table>
                        <caption>
                          <ContainerGridFreteContentTableBoxAlert>
                            <img alt="exclamacao" src={exclamacao} />
                            <h6>
                              <strong>Atenção</strong>
                            </h6>
                            <p>
                              {" "}
                              *Sujeito a disponibilidade de estoque. Valores
                              sujeito a alteração sem aviso prévio. Cotação
                              preliminar, não reserva o estoque. <br />
                              *Nos comprometemos a produzir seus produtos no
                              prazo solicitado em seu orçamento. Não nos
                              responsabilizamos por eventuais atrasos na entrega
                              de seus produtos quando realizadas por meio de
                              transportadoras ou correios.
                            </p>
                          </ContainerGridFreteContentTableBoxAlert>
                        </caption>
                        <ContainerGridFreteContentTableBoxAlertHeader>
                          <th scope="col"></th>
                          <th scope="col">
                            <strong>Transportadora</strong>
                          </th>
                          <th scope="col">
                            <strong>Previsão da transportadora</strong>
                          </th>
                          <th scope="col">
                            <strong>Prazo da produção</strong>
                          </th>
                          <th scope="col">
                            <strong>Previsão de entrega</strong>
                          </th>
                          <th scope="col">
                            <strong>Valor do frete</strong>
                          </th>
                        </ContainerGridFreteContentTableBoxAlertHeader>

                        {props.state.cidade_cep != "São Paulo" ? (
                          <ContainerGridFreteContentTableBoxAlertLin1>
                            <th scope="row" style={{ width: "200px" }}>
                              <img
                                alt="mais-barato"
                                style={{
                                  position: "relative",
                                  float: "left",
                                  top: "2px",
                                  left: "-5px",
                                }}
                                src={maisBarato}
                              />
                            </th>
                            <td>
                              <p>
                                {props.state.cotacao_frete_barato.name.length >
                                17
                                  ? props.state.cotacao_frete_barato.name.substring(
                                      0,
                                      17
                                    ) + "..."
                                  : props.state.cotacao_frete_barato.name}
                              </p>
                            </td>
                            <td>
                              <p style={td_style}>
                                De {props.state.cotacao_frete_barato.min} a{" "}
                                {props.state.cotacao_frete_barato.max} dias
                                úteis
                              </p>
                            </td>
                            <td>
                              <p style={td_style}>
                                {props.state.prazo_producao} dias úteis
                              </p>
                            </td>
                            <td>
                              <p style={td_style}>
                                até{" "}
                                {props.state.prazo_producao +
                                  props.state.cotacao_frete_barato.max}{" "}
                                dias úteis
                              </p>
                            </td>
                            <td>
                              <p style={td_style}>
                                <input
                                  type="radio"
                                  checked={
                                    props.state.frete_selecionado ==
                                    "mais-barato"
                                      ? true
                                      : false
                                  }
                                  value="mais-barato"
                                  id="mais-barato"
                                  data={JSON.stringify({
                                    valor:
                                      props.state.cotacao_frete_barato.price,
                                    prazo_entrega:
                                      props.state.prazo_producao +
                                      props.state.cotacao_frete_barato.max,
                                    nome: props.state.cotacao_frete_barato.name,
                                  })}
                                  onClick={(e) => {
                                    props.selectFrete(e);
                                    setBotaoConfirma(true);
                                  }}
                                />
                                <strong>
                                  {props.state.cotacao_frete_barato.price.toLocaleString(
                                    "pt-BR",
                                    { style: "currency", currency: "BRL" }
                                  )}
                                </strong>
                              </p>
                            </td>
                          </ContainerGridFreteContentTableBoxAlertLin1>
                        ) : (
                          <div></div>
                        )}

                        {props.state.cidade_cep != "São Paulo" ? (
                          <ContainerGridFreteContentTableBoxAlertLin2>
                            <th scope="row" style={{ width: "200px" }}>
                              <img
                                alt="mais-rapido"
                                style={{
                                  position: "relative",
                                  float: "left",
                                  top: "2px",
                                  left: "-5px",
                                }}
                                src={maisRapido}
                              />
                            </th>
                            <td>
                              <p>
                                {props.state.cotacao_frete_rapido.name.length >
                                27
                                  ? props.state.cotacao_frete_rapido.name.substring(
                                      0,
                                      20
                                    ) + "..."
                                  : props.state.cotacao_frete_rapido.name}
                              </p>
                            </td>
                            <td>
                              <p style={td_style}>
                                De {props.state.cotacao_frete_rapido.min} a{" "}
                                {props.state.cotacao_frete_rapido.max} dias
                                úteis
                              </p>
                            </td>
                            <td>
                              <p style={td_style}>
                                {props.state.prazo_producao} dias úteis
                              </p>
                            </td>
                            <td>
                              <p style={td_style}>
                                até{" "}
                                {props.state.prazo_producao +
                                  props.state.cotacao_frete_rapido.max}{" "}
                                dias úteis
                              </p>
                            </td>
                            <td>
                              <p style={td_style}>
                                <input
                                  type="radio"
                                  checked={
                                    props.state.frete_selecionado ==
                                    "mais-rapido"
                                      ? true
                                      : false
                                  }
                                  value="mais-rapido"
                                  id="mais-rapido"
                                  data={JSON.stringify({
                                    valor:
                                      props.state.cotacao_frete_rapido.price,
                                    prazo_entrega:
                                      props.state.prazo_producao +
                                      props.state.cotacao_frete_rapido.max,
                                    nome: props.state.cotacao_frete_rapido.name,
                                  })}
                                  onClick={(e) => {
                                    props.selectFrete(e);
                                    setBotaoConfirma(true);
                                  }}
                                />
                                <strong>
                                  {props.state.cotacao_frete_rapido.price.toLocaleString(
                                    "pt-BR",
                                    { style: "currency", currency: "BRL" }
                                  )}
                                </strong>
                              </p>
                            </td>
                          </ContainerGridFreteContentTableBoxAlertLin2>
                        ) : (
                          <div></div>
                        )}

                        <ContainerGridFreteContentTableBoxAlertLin3>
                          <th scope="row">
                            <img
                              alt="cliente-retira-banner"
                              style={{
                                position: "relative",
                                float: "right",
                                top: "2px",
                                left: "-5px",
                              }}
                              src={clienteRetira}
                            />
                          </th>
                          <td>
                            <p>
                              <img
                                alt="cliente-retira-banner"
                                src={clienteRetiraBanner}
                              />
                            </p>
                          </td>
                          <td>
                            <p style={td_style}>1 dia útil</p>
                          </td>
                          <td>
                            <p style={td_style}>
                              {props.state.prazo_producao} dias úteis
                            </p>
                          </td>
                          <td>
                            <p style={td_style}>
                              {" "}
                              até {props.state.prazo_producao + 1} dias úteis
                            </p>
                          </td>
                          <td>
                            <p style={td_style}>
                              <input
                                type="radio"
                                checked={
                                  props.state.frete_selecionado ==
                                  "cliente-retira"
                                    ? true
                                    : false
                                }
                                value="cliente-retira"
                                id="cliente-retira"
                                data={JSON.stringify({
                                  valor: 0,
                                  prazo_entrega: props.state.prazo_producao + 1,
                                  nome: "Cliente Retira",
                                })}
                                onClick={(e) => {
                                  props.selectFrete(e);
                                  setBotaoConfirma(true);
                                }}
                              />
                              <img
                                style={{ width: "57px" }}
                                alt="gratis-verde"
                                src={gratisVerde}
                              />
                            </p>
                          </td>
                        </ContainerGridFreteContentTableBoxAlertLin3>
                        {props.state.cidade_cep == "São Paulo" ? (
                          <ContainerGridFreteContentTableBoxAlertLin4>
                            <th scope="row">
                              <img
                                alt="nosso-carro"
                                style={{
                                  position: "relative",
                                  float: "right",
                                  top: "2px",
                                  left: "-5px",
                                }}
                                src={nossoCarro}
                              />
                            </th>
                            <td>
                              <p>
                                <img
                                  alt="nosso-carro-banner"
                                  src={nossoCarroBanner}
                                />
                              </p>
                            </td>
                            <td>
                              <p style={td_style}>1 dia útil</p>
                            </td>
                            <td>
                              <p style={td_style}>
                                {props.state.prazo_producao} dias úteis
                              </p>
                            </td>
                            <td>
                              <p style={td_style}>
                                até {props.state.prazo_producao + 1} dias úteis
                              </p>
                            </td>
                            <td>
                              <p style={td_style}>
                                <input
                                  type="radio"
                                  checked={
                                    props.state.frete_selecionado ==
                                    "innova-entrega"
                                      ? true
                                      : false
                                  }
                                  value="innova-entrega"
                                  id="innova-entrega"
                                  data={JSON.stringify({
                                    valor:
                                      props.state.valor_total_produtos > 2000
                                        ? 0
                                        : 80,
                                    prazo_entrega:
                                      props.state.prazo_producao + 1,
                                    nome: "Nosso Carro",
                                  })}
                                  onClick={(e) => {
                                    props.selectFrete(e);
                                    setBotaoConfirma(true);
                                  }}
                                />
                                <strong>
                                  {props.state.valor_total_produtos > 2000 ? (
                                    <img
                                      style={{ width: "57px" }}
                                      alt="gratis-laranja"
                                      src={gratisLaranja}
                                    />
                                  ) : (
                                    (props.state.valor_total_produtos > 2000
                                      ? 0
                                      : 80
                                    ).toLocaleString("pt-BR", {
                                      style: "currency",
                                      currency: "BRL",
                                    })
                                  )}
                                </strong>
                              </p>
                            </td>
                          </ContainerGridFreteContentTableBoxAlertLin4>
                        ) : (
                          <div></div>
                        )}
                      </table>
                    </ContainerGridFreteContentTable>
                  </ContainerGridFreteContent>
                ) : (
                  <div></div>
                )}
              </BoxGridContainer>
            </Collapse>
          </ContainerComponentFrete>
          {atualizaModal === true ? (
            <FlexBotaoConfirmar>
              {botaoConfirma ? (
                <Button
                  fontFamily="akrobat"
                  rightIcon={<AiFillCaretRight />}
                  color="white"
                  boxShadow="none !important"
                  letterSpacing=" 0.1rem"
                  bgColor="#ff7200"
                  _active={{ bgColor: "#ff7200" }}
                  _hover={{ bgColor: "#ff7200", opacity: "0.8" }}
                  w={["130px", "130px", "350px", "350px", "350px"]}
                  h="40px"
                  onClick={() => props.setModal()}
                >
                  CONFIRMAR
                </Button>
              ) : (
                <Tooltip
                  hasArrow
                  placement="auto-end"
                  label="Selecione um frete para prosseguir"
                  bg="gray"
                  color="white"
                  shouldWrapChildren
                >
                  <Button
                    fontFamily="akrobat"
                    letterSpacing=" 0.1rem"
                    rightIcon={<AiFillCaretRight />}
                    color="white"
                    boxShadow="none !important"
                    isDisabled
                    bgColor="gray"
                    _active={{ bgColor: "gray" }}
                    _hover={{ bgColor: "gray" }}
                    w={["130px", "130px", "350px", "350px", "350px"]}
                    h="40px"
                  >
                    CONFIRMAR
                  </Button>
                </Tooltip>
              )}
            </FlexBotaoConfirmar>
          ) : (
            <></>
          )}
        </MotionBox>
      </Center>
    </>
  );
};

export default ComponentFrete;
