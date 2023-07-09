import Header from "../../components/Header";
import FooterSocialMedia from "../../components/Footer/FooterSocialMedia";
import { ButtonVoltarGerarPDF, ContainerBox, ContainerInput } from "./style";
import {
  Flex,
  Text,
  Box,
  VStack,
  Button,
  Image,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { cor_base_1 } from "./../../services/cores/index";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import FooterComponent from "../Footer/FooterComponent";

const download_pdf = "images/download-pdf.svg";

const GerarWhatsappBrindice = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [mobileView, setmobileView] = useState();
  const [sizeWidth1366px, setSizeWidth1366px] = useState();
  const [maskCPFCNPJ, setMaskCPFCNPJ] = useState("999.999.999-999");
  const [maskTelefone, setMaskTelefone] = useState("(99) 9999-9999");
  const [require_razao, setRequire_razao] = useState(false);
  const [nomeParceiro, setNomeParceiro] = useState(null);
  const [cpfcnpjParceiro, setCPFCNPJParceiro] = useState(null);
  const [razaoSocialParceiro, setRazaoSocialParceiro] = useState(null);
  const [telefoneParceiro, setTelefoneParceiro] = useState(null);
  const [emailParceiro, setEmailParceiro] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loading_orcamento_pdf, setLoading_orcamento_pdf] = useState(false);

  const toast = useToast();

  function ifnull(a, b) {
    if (a === undefined || a === null) {
      return b;
    } else {
      return a;
    }
  }

  useEffect(() => {
    if (window.matchMedia("(max-width: 1366px)").matches) {
      setSizeWidth1366px(true);
    } else {
      setSizeWidth1366px(false);
    }
  }, []);

  useEffect(() => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      setmobileView(true);
    } else {
      setmobileView(false);
    }
  }, []);

  const loadingPDF = async () => {
    try {
      setLoading(true);
      toast({
        title: "Dados Registrados.",
        description: ` nome: ${nomeParceiro} cpf: ${cpfcnpjParceiro} razao: ${razaoSocialParceiro} telefone: ${telefoneParceiro} email: ${emailParceiro}`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      const timer = setTimeout(function () {
        setLoading(false);
        clearTimeout(timer);
      }, 1000);
    } catch (err) {
      setLoading(false);
    }
  };

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
      setMaskTelefone("(99) 9 9999-9999");
    } else if (format_data.length <= 10) {
      setMaskTelefone("(99) 9999-99999");
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

  const loadingResumoToggle = async () => {
    try {
      setLoading(true);
      onToggle();
      const timer = setTimeout(function () {
        setLoading(false);
        clearTimeout(timer);
        if (isOpen == false && sizeWidth1366px) {
          window.scrollTo(0, 210);
        }
        if (isOpen == false && mobileView) {
          window.scrollTo(0, 1200);
        }
        if (isOpen && mobileView) {
          window.scrollTo(0, 800);
        }
      }, 500);
    } catch (err) {
      setLoading(false);
    }
  };

  return (
    <ContainerBox>
      <Header />
      <Flex
        flexDir="column"
        justify="center"
        mt="15px"
        minH={mobileView ? "68vh" : sizeWidth1366px ? "71.7vh" : "81.3vh"}
        w={"100%"}
      >
        <Flex
          mx="auto"
          transtition="all ease 0.2s"
          borderRadius="5px"
          border="1px solid #f5f5f5"
          transition="all ease 0.2s"
          w={mobileView ? "90%" : "800px"}
          h="auto"
          minH={mobileView ? "400px" : sizeWidth1366px ? "350px" : "450px"}
          bgColor="white"
          flexDir="column"
        >
          <Text
            textAlign="center"
            fontSize={mobileView ? "16px" : "18px"}
            pt="25px"
          >
            Preencha os dados abaixo e pronto,{mobileView ? <br /> : ""}{" "}
            <strong>baixe seu orçamento</strong>
          </Text>
          <VStack
            transtition="all ease 0.2s"
            spacing={3}
            align="stretch"
            mt={mobileView ? "0" : sizeWidth1366px ? "0px" : "25px"}
            w="90%"
            mx="auto"
          >
            <ContainerInput
              placeholder="* Nome"
              bgColor="#f5f5f5"
              value={nomeParceiro}
              onChange={(e) => setNomeParceiro(e.target.value)}
            />

            <ContainerInput
              placeholder="* CPF | CNPJ"
              bgColor="#f5f5f5"
              value={cpfcnpjParceiro}
              type="text"
              inputmode="numeric"
              onChange={(e) => {
                setCPFCNPJParceiro(e.target.value);
                handleChangeCPFCNPJ(e.target.value);
              }}
              mask={maskCPFCNPJ}
              maskChar=""
            />

            {require_razao ? (
              <ContainerInput
                placeholder="* Razão social"
                bgColor="#f5f5f5"
                value={razaoSocialParceiro}
                type="number"
                onChange={(e) => setRazaoSocialParceiro(e.target.value)}
              />
            ) : (
              <ContainerInput
                placeholder="* Razão social"
                bgColor="#f5f5f5"
                value={razaoSocialParceiro}
                onChange={(e) => setRazaoSocialParceiro(e.target.value)}
                style={{
                  marginTop: "0",
                  height: "0",
                  transition: "all ease 0.3s",
                  opacity: 0,
                }}
              />
            )}

            <ContainerInput
              placeholder="* Telefone"
              bgColor="#f5f5f5"
              type="tel"
              value={telefoneParceiro}
              onChange={(e) => {
                setTelefoneParceiro(e.target.value);
                handleTelefoneForm(e.target.value);
              }}
              mask={maskTelefone}
              maskChar=""
            />

            <ContainerInput
              type="email"
              placeholder="* E-mail"
              bgColor="#f5f5f5"
              value={emailParceiro}
              onChange={(e) => setEmailParceiro(e.target.value)}
            />
          </VStack>
          <Text
            pl="5px"
            fontSize={mobileView ? "10px" : "14px"}
            color="gray"
            w="90%"
            mt="10px"
            mx="auto"
          >
            Ao enviar esse formulário, eu declaro que aceito compartilhar minhas
            informacões pessoais e compreendo que esses dados estão sujeitos à
            Política de Privacidade do Google*
          </Text>
          <Button
            isLoading={loading ?? true}
            onClick={() => {
              loadingPDF();
            }}
            boxShadow={"none !important"}
            _hover={{ bgColor: `${cor_base_1}` }}
            _active={{ bgColor: `${cor_base_1}` }}
            fontFamily="Gisha"
            mx="auto"
            mt={sizeWidth1366px ? "0" : require_razao ? "10px" : "30px"}
            w="220px"
            color="white"
            borderRadius="5px"
            h="50px"
            bgColor={cor_base_1}
            mb="20px"
          >
            BAIXAR PDF AGORA{" "}
            <Image alt="download" src={download_pdf} h={35} w={35} ml="5px" />
          </Button>
        </Flex>
        <Flex
          pt="7px"
          mx="auto"
          justify="end"
          w="100%"
          maxW={mobileView ? "90%" : "800px"}
          h="40px"
        >
          <Link href="/" prefetch={true} passHref>
            <ButtonVoltarGerarPDF as="a">
              <span>Voltar</span>
            </ButtonVoltarGerarPDF>
          </Link>
        </Flex>
      </Flex>
      <FooterComponent />
    </ContainerBox>
  );
};

export default GerarWhatsappBrindice;
