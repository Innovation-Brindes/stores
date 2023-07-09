import React, { useEffect, useState } from "react";
import {
  BoxContainerResumoCarrinho,
  CarrinhoFinalizacaoContentFormContentBody,
  CarrinhoFinalizacaoContentFormContentBodyBtn,
  CarrinhoFinalizacaoContentFormContentBodyLoading,
  CarrinhoFinalizacaoContentFormContentHeaderTextImg,
  ContainerFlexGerarOrcamentoVoltar,
  ContainerFlexGerarOrcamentoVoltarMobile,
  ContainerGridFreteContentResumoCarrinhoContentCarrinhoFinalizacao,
  ContainerGridFreteContentResumoCarrinhoContentCarrinhoFinalizacaoContent,
  ContainerGridFreteContentResumoCarrinhoContentCarrinhoFinalizacaoContentForm,
  ContainerGridFreteContentResumoCarrinhoContentCarrinhoFinalizacaoContentFormContent,
  ContentCarrinhoFinalizacaoContentFormContentHeader,
  ContentCarrinhoFinalizacaoContentFormContentHeaderText,
} from "../styles";
import {
  ContentHeaderImgMobile,
  ContentHeaderMobile,
  ContentHeaderTextMobile,
} from "../stylesMobile";
import InputMask from "react-input-mask";
import { Box, Button, CloseButton, Flex, Text } from "@chakra-ui/react";
import { cor_base_2 } from "../../../services/cores";
import { AiFillCaretLeft } from "react-icons/ai";
import { useToast } from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import axios from "axios";
import { setFirstLetterUpperCase } from "../../../utils/setFirstLetterUpperCase";

const loading = "/images/loading.gif";

const ComponentForm = (props) => {
  const [cpf_cnpj_parceiro, setCpf_cnpj_parceiro] = useState();
  const [nome_parceiro, setNome_parceiro] = useState();
  const [empresa_parceiro, setEmpresa_parceiro] = useState();
  const [telefone_parceiro, setTelefone_parceiro] = useState();
  const [email_parceiro, setEmail_parceiro] = useState();
  const [maskCPFCNPJ, setMaskCPFCNPJ] = useState("00-000-000-0000/00");
  const [maskPhone, setMaskPhone] = useState("(99) 9999-9999");
  const [require_razao, setRequire_razao] = useState(false);
  const [gerando_orcamento, setGerando_orcamento] = useState(false);

  function ifnull(a, b) {
    if (a === undefined || a === null) {
      return b;
    } else {
      return a;
    }
  }
  useEffect(() => {
    if (window.screen.width < 768) {
      window.scrollTo(0, 1000);
    }
  });

  const toast = useToast();

  function closeAll() {
    // you may optionally pass an object of positions to exclusively close
    // keeping other positions opened
    // e.g. `{ positions: ['bottom'] }`
    toast.closeAll();
  }

  function handleChangeCPFCNPJ(value) {
    var format_data = value.replaceAll(".", "");
    var format_data = format_data.replaceAll("-", "");
    var format_data = format_data.replaceAll("/", "");
    if (format_data.length > 11) {
      setMaskCPFCNPJ("99.999.999/9999-99");
      setRequire_razao(true);
    } else if (format_data.length <= 11) {
      setMaskCPFCNPJ("999.999.999-999");
      setRequire_razao(false);
    }
  }

  function handleTelefoneForm(value) {
    var format_data = value.replaceAll("(", "");
    var format_data = format_data.replaceAll(")", "");
    var format_data = format_data.replaceAll("-", "");
    var format_data = format_data.replaceAll(" ", "");

    if (format_data.length > 10) {
      setMaskPhone("(99) 9 9999-9999");
    } else if (format_data.length <= 10) {
      setMaskPhone("(99) 9999-99999");
    }
  }

  function submit() {
    if (ifnull(nome_parceiro, "") == "") {
      toast({
        position: "bottom",
        duration: 4000,
        render: () => (
          <Box
            borderRadius="15px"
            boxShadow="2px 2px 20px 2px gray"
            p={1}
            bg="#EDEDED"
          >
            <Flex justifyContent="space-between">
              <Flex justifyContent="center" alignItems="center">
                <InfoOutlineIcon ml="5px" fontSize="25px" />
              </Flex>
              <Text pr="5px" color="black" mt="15px" ml="5px">
                Preencha o campo "Nome" no formulário.
              </Text>
              <CloseButton onClick={closeAll} boxShadow="none !important" />
            </Flex>
          </Box>
        ),
      });
      setGerando_orcamento(false);
    } else if (!validaCpfCnpj(ifnull(cpf_cnpj_parceiro, ""))) {
      toast({
        position: "bottom",
        duration: 4000,
        render: () => (
          <Box
            borderRadius="15px"
            boxShadow="2px 2px 20px 2px gray"
            p={1}
            bg="#EDEDED"
          >
            <Flex justifyContent="space-between">
              <Flex justifyContent="center" alignItems="center">
                <InfoOutlineIcon ml="5px" fontSize="25px" />
              </Flex>
              <Text pr="5px" color="black" mt="15px" ml="5px">
                Campo "CPF/CNPJ" inválido {cpf_cnpj_parceiro}.
              </Text>
              <CloseButton onClick={closeAll} boxShadow="none !important" />
            </Flex>
          </Box>
        ),
      });
      setGerando_orcamento(false);
    }
    // else if (require_razao && ifnull(empresa_parceiro, "") == "") {
    //   toast({
    //     position: "bottom",
    //     duration: 4000,
    //     render: () => (
    //       <Box
    //         borderRadius="15px"
    //         boxShadow="2px 2px 20px 2px gray"
    //         p={1}
    //         bg="#EDEDED"
    //       >
    //         <Flex justifyContent="space-between">
    //           <Flex justifyContent="center" alignItems="center">
    //             <InfoOutlineIcon ml="5px" fontSize="25px" />
    //           </Flex>
    //           <Text pr="5px" color="black" mt="15px" ml="5px">
    //             Preencha o campo "Razão Social" no formulário.
    //           </Text>
    //           <CloseButton onClick={closeAll} boxShadow="none !important" />
    //         </Flex>
    //       </Box>
    //     ),
    //   });
    //   setGerando_orcamento(false);
    // }
    else if (!validaTelefone(ifnull(telefone_parceiro, ""))) {
      toast({
        position: "bottom",
        duration: 4000,
        render: () => (
          <Box
            borderRadius="15px"
            boxShadow="2px 2px 20px 2px gray"
            p={1}
            bg="#EDEDED"
          >
            <Flex justifyContent="space-between">
              <Flex justifyContent="center" alignItems="center">
                <InfoOutlineIcon ml="5px" fontSize="25px" />
              </Flex>
              <Text pr="5px" color="black" mt="15px" ml="5px">
                Campo de "Telefone" inválido.
              </Text>
              <CloseButton onClick={closeAll} boxShadow="none !important" />
            </Flex>
          </Box>
        ),
      });
      setGerando_orcamento(false);
    } else if (ifnull(email_parceiro, "") == "") {
      toast({
        position: "bottom",
        duration: 4000,
        render: () => (
          <Box
            borderRadius="15px"
            boxShadow="2px 2px 20px 2px gray"
            p={1}
            bg="#EDEDED"
          >
            <Flex justifyContent="space-between">
              <Flex justifyContent="center" alignItems="center">
                <InfoOutlineIcon ml="5px" fontSize="25px" />
              </Flex>
              <Text pr="5px" color="black" mt="15px" ml="5px">
                Preencha o campo "Email" no formulário.
              </Text>
              <CloseButton onClick={closeAll} boxShadow="none !important" />
            </Flex>
          </Box>
        ),
      });
      setGerando_orcamento(false);
    } else {
      try {
        props.gerarOrcamento(
          cpf_cnpj_parceiro,
          nome_parceiro,
          empresa_parceiro,
          telefone_parceiro,
          email_parceiro
        );
      } catch (error) {
        toast({
          position: "bottom",
          duration: 4000,
          render: () => (
            <Box
              borderRadius="15px"
              boxShadow="2px 2px 20px 2px gray"
              p={1}
              bg="#EDEDED"
            >
              <Flex justifyContent="space-between">
                <Flex justifyContent="center" alignItems="center">
                  <InfoOutlineIcon ml="5px" fontSize="25px" />
                </Flex>
                <Text pr="5px" color="black" mt="15px" ml="5px">
                  Erro no processamento.
                </Text>
                <CloseButton onClick={closeAll} boxShadow="none !important" />
              </Flex>
            </Box>
          ),
        });
        setGerando_orcamento(false);
      }
    }
  }

  function validaTelefone(val) {
    val = val
      .replaceAll("(", "")
      .replaceAll(")", "")
      .replaceAll(" ", "")
      .replaceAll("-", "")
      .trim();
    if (val.length == 11) {
      return true;
    } else if (val.length == 10) {
      return true;
    } else {
      return false;
    }
  }

  function validaCpfCnpj(val) {
    if (val.length == 14) {
      var cpf = val.trim();

      cpf = cpf.replace(/\./g, "");
      cpf = cpf.replace("-", "");
      cpf = cpf.split("");

      var v1 = 0;
      var v2 = 0;
      var aux = false;

      for (var i = 1; cpf.length > i; i++) {
        if (cpf[i - 1] != cpf[i]) {
          aux = true;
        }
      }

      if (aux == false) {
        return false;
      }

      for (var i = 0, p = 10; cpf.length - 2 > i; i++, p--) {
        v1 += cpf[i] * p;
      }

      v1 = (v1 * 10) % 11;

      if (v1 == 10) {
        v1 = 0;
      }

      if (v1 != cpf[9]) {
        return false;
      }

      for (var i = 0, p = 11; cpf.length - 1 > i; i++, p--) {
        v2 += cpf[i] * p;
      }

      v2 = (v2 * 10) % 11;

      if (v2 == 10) {
        v2 = 0;
      }

      if (v2 != cpf[10]) {
        return false;
      } else {
        return true;
      }
    } else if (val.length == 18) {
      var cnpj = val.trim();

      cnpj = cnpj.replace(/\./g, "");
      cnpj = cnpj.replace("-", "");
      cnpj = cnpj.replace("/", "");
      cnpj = cnpj.split("");

      var v1 = 0;
      var v2 = 0;
      var aux = false;

      for (var i = 1; cnpj.length > i; i++) {
        if (cnpj[i - 1] != cnpj[i]) {
          aux = true;
        }
      }

      if (aux == false) {
        return false;
      }

      for (var i = 0, p1 = 5, p2 = 13; cnpj.length - 2 > i; i++, p1--, p2--) {
        if (p1 >= 2) {
          v1 += cnpj[i] * p1;
        } else {
          v1 += cnpj[i] * p2;
        }
      }

      v1 = v1 % 11;

      if (v1 < 2) {
        v1 = 0;
      } else {
        v1 = 11 - v1;
      }

      if (v1 != cnpj[12]) {
        return false;
      }

      for (var i = 0, p1 = 6, p2 = 14; cnpj.length - 1 > i; i++, p1--, p2--) {
        if (p1 >= 2) {
          v2 += cnpj[i] * p1;
        } else {
          v2 += cnpj[i] * p2;
        }
      }

      v2 = v2 % 11;

      if (v2 < 2) {
        v2 = 0;
      } else {
        v2 = 11 - v2;
      }

      if (v2 != cnpj[13]) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }

  const [cpf, setCpf] = useState("");

  const debounce = (func, wait) => {
    let inDebounce;

    return function () {
      let args = arguments;

      clearTimeout(inDebounce);

      inDebounce = setTimeout(() => func.apply(this, args), wait);
    };
  };

  const handleValue = debounce(async (e) => {
    const cpfFormattedBeforeSend = e.target.value
      .replaceAll(".", "")
      .replaceAll("-", "")
      .replaceAll("/", "");

    try {
      const response = await axios.get(
        `https://api.innovationbrindes.com.br/api/site/v2/pedido/busca-dados-receita/${cpfFormattedBeforeSend}`
      );

      setCpf(response.data.RAZAO_SOCIAL);
    } catch (error) {
      console.log("error", error.message);
    }
  }, 1);
  const razaoFormatted =
    setFirstLetterUpperCase(cpf)?.length > 40
      ? setFirstLetterUpperCase(cpf).substring(0, 40) + "..."
      : setFirstLetterUpperCase(cpf);

  return (
    <ContainerGridFreteContentResumoCarrinhoContentCarrinhoFinalizacao
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1, duration: 1 }}
    >
      <ContainerGridFreteContentResumoCarrinhoContentCarrinhoFinalizacaoContent>
        {gerando_orcamento ? (
          <CarrinhoFinalizacaoContentFormContentBodyLoading>
            <p>
              <strong>Aguarde um instante,</strong> seu orçamento está sendo
              processado com segurança.
              <br />
              Por favor <strong>não saia da página.</strong>
            </p>
            <img alt="loading-orcamento" src={loading} />
          </CarrinhoFinalizacaoContentFormContentBodyLoading>
        ) : (
          <>
            <ContainerGridFreteContentResumoCarrinhoContentCarrinhoFinalizacaoContentForm
              style={window.screen.height < 800 ? { height: "430px" } : {}}
            >
              <ContainerGridFreteContentResumoCarrinhoContentCarrinhoFinalizacaoContentFormContent>
                {window.screen.width < 700 ? (
                  <ContentHeaderMobile style={{ height: "19%" }}>
                    <ContentHeaderTextMobile>
                      <h1>
                        <strong>Pronto!</strong>
                      </h1>
                      <p>
                        Preencha o formulário abaixo e{" "}
                        <strong>
                          receba em segundos um orçamento detalhado
                        </strong>{" "}
                        do seu brinde por email.
                      </p>
                    </ContentHeaderTextMobile>
                    <ContentHeaderImgMobile>
                      <img
                        alt="relogio-orcamento"
                        src={props.relogioOrcamento}
                      />
                    </ContentHeaderImgMobile>
                  </ContentHeaderMobile>
                ) : (
                  <ContentCarrinhoFinalizacaoContentFormContentHeader>
                    <ContentCarrinhoFinalizacaoContentFormContentHeaderText>
                      <h1>
                        <strong>Pronto!</strong>
                      </h1>
                      <p>
                        Preencha o formulário abaixo e{" "}
                        <strong>
                          receba em segundos um orçamento detalhado
                        </strong>{" "}
                        do seu brinde por email.
                      </p>
                    </ContentCarrinhoFinalizacaoContentFormContentHeaderText>
                    <CarrinhoFinalizacaoContentFormContentHeaderTextImg>
                      <img
                        alt="relogio-orcamento"
                        src={props.relogioOrcamento}
                      />
                    </CarrinhoFinalizacaoContentFormContentHeaderTextImg>
                  </ContentCarrinhoFinalizacaoContentFormContentHeader>
                )}

                <CarrinhoFinalizacaoContentFormContentBody>
                  <InputMask
                    placeholder="* CPF / CNPJ"
                    style={{ backgroundColor: "#F7F7F7" }}
                    mask={maskCPFCNPJ}
                    onChange={(e) => {
                      setCpf_cnpj_parceiro(e.target.value);
                      handleChangeCPFCNPJ(e.target.value);
                    }}
                    maskChar=""
                    onBlur={(e) => handleValue(e)}
                  />

                  <input
                    onChange={(e) => setNome_parceiro(e.target.value)}
                    style={{ backgroundColor: "#EDEDED" }}
                    type="text"
                    placeholder="* Nome"
                  />

                  <input
                    onChange={(e) => setEmpresa_parceiro(e.target.value)}
                    style={
                      require_razao
                        ? {
                            transition: "0.6s",
                            height: "57px",
                            opacity: 1,
                            backgroundColor: "#EDEDED",
                          }
                        : {
                            opacity: 0,
                            height: "0px",
                            backgroundColor: "#EDEDED",
                          }
                    }
                    type="text"
                    placeholder="* Razão Social"
                    value={razaoFormatted}
                  />

                  <InputMask
                    placeholder="* Telefone"
                    style={
                      require_razao
                        ? {
                            position: "relative",
                            top: "0px",
                            backgroundColor: "#F7F7F7",
                          }
                        : {
                            position: "relative",
                            top: "-25px",
                            backgroundColor: "#EDEDED",
                          }
                    }
                    mask={maskPhone}
                    onChange={(e) => {
                      setTelefone_parceiro(e.target.value);
                      handleTelefoneForm(e.target.value);
                    }}
                    maskChar=""
                  />

                  <input
                    onChange={(e) => setEmail_parceiro(e.target.value)}
                    style={
                      require_razao
                        ? {
                            position: "relative",
                            top: "0px",
                            backgroundColor: "#EDEDED",
                          }
                        : {
                            position: "relative",
                            top: "-25px",
                            backgroundColor: "#F7F7F7",
                          }
                    }
                    type="email"
                    placeholder="* E-mail"
                  />
                </CarrinhoFinalizacaoContentFormContentBody>

                <ContainerFlexGerarOrcamentoVoltar
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 1 }}
                >
                  <Button
                    w={["95px"]}
                    borderRadius="15px"
                    fontFamily="Akrobat"
                    letterSpacing="0.1rem"
                    bgColor="#EDEDED"
                    _hover={{ bgColor: "#EDEDED", opacity: 0.9 }}
                    _active={{ bgColor: "#EDEDED" }}
                    leftIcon={<AiFillCaretLeft />}
                    onClick={() => props.setModal()}
                  >
                    VOLTAR
                  </Button>
                  <CarrinhoFinalizacaoContentFormContentBodyBtn
                    onClick={() => {
                      setGerando_orcamento(true);
                      submit();
                    }}
                  >
                    GERAR ORÇAMENTO
                  </CarrinhoFinalizacaoContentFormContentBodyBtn>
                </ContainerFlexGerarOrcamentoVoltar>
              </ContainerGridFreteContentResumoCarrinhoContentCarrinhoFinalizacaoContentFormContent>

              {/* <p> * Ao gerar o orçamento, você não está efetuando uma compra.<br/>
               **Condição de pagamento sujeito a aprovação de crédito.</p> */}
              <ContainerFlexGerarOrcamentoVoltarMobile
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
              >
                <Button
                  ml="15px"
                  w={["95px"]}
                  borderRadius="15px"
                  fontFamily="Akrobat"
                  letterSpacing="0.1rem"
                  bgColor="#EDEDED"
                  _hover={{ bgColor: "#EDEDED", opacity: 0.9 }}
                  _active={{ bgColor: "#EDEDED" }}
                  leftIcon={<AiFillCaretLeft />}
                  onClick={() => props.setModal()}
                >
                  VOLTAR
                </Button>
                <Button
                  bgColor="#ff4f00"
                  _hover={{ bgColor: "#ff4f00", opacity: 0.9 }}
                  _active={{ bgColor: "#ff4f00" }}
                  fontFamily="Akrobat"
                  letterSpacing="0.1rem"
                  color="#fff"
                  onClick={() => {
                    setGerando_orcamento(true);
                    submit();
                  }}
                >
                  GERAR ORÇAMENTO
                </Button>
              </ContainerFlexGerarOrcamentoVoltarMobile>
            </ContainerGridFreteContentResumoCarrinhoContentCarrinhoFinalizacaoContentForm>
            <BoxContainerResumoCarrinho
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
            >
              <Text
                fontSize="29px"
                mt={["20px", "20px", "60px", "60px", "60px"]}
              >
                <strong>Resumo do carrinho</strong>
              </Text>
              <Flex mt={["30px", "30px", "80px", "80px", "80px"]} w="320px">
                <Box w="165px">
                  <Text fontSize="18px">Valor total dos produtos:</Text>
                  <Text
                    mt={["-10px", "-10px", "0px", "0px", "0px"]}
                    fontSize="18px"
                  >
                    Valor total do frete:
                  </Text>
                  <Text
                    mt={["-10px", "-10px", "0px", "0px", "0px"]}
                    fontSize="18px"
                  >
                    Prazo de entrega:
                  </Text>
                  <Text fontSize="18px" mt="50px">
                    VALOR TOTAL DO PEDIDO:
                  </Text>
                </Box>

                {props.state.items.length > 0 ? (
                  <Box pl="7px" w="155px">
                    <Text letterSpacing="0.03rem" fontSize="20px">
                      <strong>
                        {parseFloat(
                          props.state.valor_total_produtos
                        ).toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </strong>
                    </Text>
                    <Text
                      mt={["-13px", "-13px", "-5px", "-5px", "-5px"]}
                      letterSpacing="0.03rem"
                      fontSize="20px"
                    >
                      <strong>
                        {props.state.valor_frete != null
                          ? props.state.valor_frete
                          : "R$ 0,00"}
                      </strong>
                    </Text>
                    <Text
                      mt={["-12px", "-12px", "-2px", "-2px", "-2px"]}
                      letterSpacing="0.03rem"
                      fontSize="20px"
                    >
                      {props.state.prazo_frete != undefined &&
                      props.state.prazo_frete != null &&
                      props.state.prazo_frete != "" ? (
                        <p>
                          <strong>{props.state.prazo_frete} dias úteis</strong>
                        </p>
                      ) : (
                        <p>
                          <strong></strong>
                        </p>
                      )}
                    </Text>
                    <Text letterSpacing="0.03rem" fontSize="23px" mt="43px">
                      <strong
                        style={{
                          color: cor_base_2,
                          fontFamily: "Akrobat ExtraBold",
                        }}
                      >
                        {props.state.valor_frete != null
                          ? (
                              parseFloat(props.state.valor_total_produtos) +
                              parseFloat(
                                String(props.state.valor_frete)
                                  .replace("R$", "")
                                  .trim()
                                  .replace(".", "")
                                  .replace(",", ".")
                              )
                            ).toLocaleString("pt-BR", {
                              style: "currency",
                              currency: "BRL",
                            })
                          : parseFloat(
                              props.state.valor_total_produtos
                            ).toLocaleString("pt-BR", {
                              style: "currency",
                              currency: "BRL",
                            })}
                      </strong>
                    </Text>
                  </Box>
                ) : (
                  <div></div>
                )}
              </Flex>
            </BoxContainerResumoCarrinho>
          </>
        )}
      </ContainerGridFreteContentResumoCarrinhoContentCarrinhoFinalizacaoContent>
    </ContainerGridFreteContentResumoCarrinhoContentCarrinhoFinalizacao>
  );
};

export default ComponentForm;
