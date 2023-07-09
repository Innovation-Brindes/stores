import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import FooterSocialMedia from "../../components/Footer/FooterSocialMedia";
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
import Link from "next/link";
import { baseURL, SalvarContatoSite } from "../../services/api";
import {
  ButtonVoltarGerarWhatsapp,
  ContainerBox,
  ContainerInput,
} from "./styles";
import FooterComponent from "../Footer/FooterComponent";

const loading = "/images/loading.gif";
const whatsapp = "images/whatsapp-logo-button.svg";

export const GerarWhatsappBrindice = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [mobileView, setmobileView] = useState();
  const [sizeWidth1366px, setSizeWidth1366px] = useState();
  const [loading, setLoading] = useState(false);
  const [window_width, setwindow_width] = useState(0);
  const [view_cookies, setview_cookies] = useState(true);
  const [view_chat, setview_chat] = useState(false);
  const [height_chat, setheight_chat] = useState("550px");
  const [maskCPFCNPJ, setmaskCPFCNPJ] = useState("999.999.999-999");
  const [require_razao, setrequire_razao] = useState(false);
  const [loading_chat, setloading_chat] = useState(false);
  const [numero_nota, setnumero_nota] = useState(null);
  const [nome_parceiro_chat, setnome_parceiro_chat] = useState("");
  const [cpf_cnpj_parceiro_chat, setcpf_cnpj_parceiro_chat] = useState("");
  const [telefone_parceiro_chat, settelefone_parceiro_chat] = useState("");
  const [email_parceiro_chat, setemail_parceiro_chat] = useState("");
  const [razao_parceiro_chat, setrazao_parceiro_chat] = useState("");
  const [numero_nota_gerado, setnumero_nota_gerado] = useState("");
  const [mensagem_cliente, setmensagem_cliente] = useState("");
  const [view_chat_mobile, setViewChatMobile] = useState(true);

  const [time, setTime] = useState(
    new Date().toLocaleString("pt-BR", {
      hour: "numeric", // numeric, 2-digit
      minute: "numeric", // numeric, 2-digit
      second: "numeric", // numeric, 2-digit
    })
  );
  const [time_chat_open, settime_chat_open] = useState(
    new Date()
      .toLocaleString("pt-BR", {
        hour: "numeric", // numeric, 2-digit
        minute: "numeric", // numeric, 2-digit
        second: "numeric", // numeric, 2-digit
      })
      .slice(0, -3)
  );
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
        description: ` nome: ${nome_parceiro_chat} cpf: ${cpf_cnpj_parceiro_chat} razao: ${razao_parceiro_chat} telefone: ${telefone_parceiro_chat} email: ${email_parceiro_chat}`,
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
  useEffect(() => {
    setwindow_width(window.innerWidth - 290);
    // alert(window.innerWidth);
    window.addEventListener("resize", function () {
      setwindow_width(window.innerWidth - 290);
    });

    setInterval(function () {
      setTime(
        new Date().toLocaleString("pt-BR", {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
        })
      );
    }, 1000);

    if (
      !localStorage.getItem("hiddenCookie") ||
      localStorage.getItem("hiddenCookie") == "FALSE"
    ) {
      setview_cookies(true);
    } else {
      setview_cookies(false);
    }
  });

  async function handleChangeCPFCNPJ(value) {
    var format_data = value.replaceAll(".", "");
    var format_data = format_data.replaceAll("-", "");
    var format_data = format_data.replaceAll("/", "");

    if (format_data.length > 11) {
      setmaskCPFCNPJ("99.999.999/9999-99");
      setrequire_razao(true);
    } else if (format_data.length <= 11) {
      setmaskCPFCNPJ("999.999.999-999");
      setrequire_razao(false);
    }
  }

  async function changeInputChat(e, value) {
    if (value == "cpf_cnpj_parceiro_chat") {
      handleChangeCPFCNPJ(e.target.value);
    }
    eval("set" + value + "('" + e.target.value + "')");
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

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  async function salvarContatoWhats() {
    try {
      if (nome_parceiro_chat == "") {
        alert("Preencha o campo Nome.");
      } else if (!validaCpfCnpj(cpf_cnpj_parceiro_chat)) {
        alert("CPF/CNPJ inválido.");
      } else if (require_razao && razao_parceiro_chat == "") {
        alert("Preencha o campo Razão Social.");
      } else if (!validaTelefone(telefone_parceiro_chat)) {
        alert("Preencha o campo telefone.");
      } else if (!validateEmail(email_parceiro_chat)) {
        alert("Email inválido");
      } else {
        setloading_chat(true);
        const response = await SalvarContatoSite.post("", {
          nome_parceiro: nome_parceiro_chat,
          razao_social: razao_parceiro_chat,
          cpf_cnpj_parceiro: cpf_cnpj_parceiro_chat
            .replaceAll(".", "")
            .replaceAll("/", "")
            .replaceAll("-", "")
            .replaceAll("-", "")
            .trim(),
          telefone_parceiro: telefone_parceiro_chat
            .replaceAll("(", "")
            .replaceAll(")", "")
            .replaceAll(" ", "")
            .replaceAll("-", "")
            .trim(),
          email_parceiro: email_parceiro_chat,
        });

        var data = response.data;

        setloading_chat(false);
        window.open(
          "https://api.whatsapp.com/send?phone=551126496030",
          "_blank"
        );
      }
    } catch (error) {
      console.log(Object.keys(error), error.message);
    }
  }

  return (
    <ContainerBox>
      <Header />
      <Flex
        flexDir="column"
        justify="center"
        mt={"-10px"}
        minH={mobileView ? "68vh" : sizeWidth1366px ? "71.7vh" : "82.4vh"}
        w={"100%"}
      >
        <Flex
          borderRadius="5px 5px 5px 5px"
          mx="auto"
          transtition="all ease 0.2s"
          border="1px solid #f5f5f5"
          transition="all ease 0.2s"
          w={mobileView ? "90%" : "800px"}
          h="auto"
          minH={mobileView ? "400px" : sizeWidth1366px ? "450px" : "450px"}
          bgColor="white"
          flexDir="column"
        >
          <Flex
            borderRadius="5px 5px 0px 0px"
            w="100%"
            h="20px"
            bgColor="#074C44"
          >
            <Text
              w={mobileView ? "90%" : "600px"}
              mx="auto"
              textAlign={"end"}
              color="white"
            >
              {time}
            </Text>
          </Flex>
          <Flex
            pl={mobileView ? "5%" : "100px"}
            align="center"
            borderRadius="0px 0px 5px 5px"
            h="50px"
            bgColor="#0C5F56"
          >
            <Image h={10} w={10} src="/images/menu/chat/logo.png" />
            <Text color="white" ml="10px" mt="13px" fontSize="16px">
              <strong>Innovation Brindes</strong>
            </Text>
          </Flex>
          <Flex
            justify="space-between"
            mx="auto"
            mt="10px"
            borderRadius="5px"
            w={mobileView ? "90%" : "600px"}
            h="40px"
            bgColor="#E3EEC4"
          >
            <Text m="7px 0 0 30px">Olá, tudo bem?</Text>
            <Text mt="7px" mr="10px">
              {time_chat_open}
            </Text>
          </Flex>
          <Flex
            justify="space-between"
            mx="auto"
            mt="7px"
            borderRadius="5px"
            w={mobileView ? "90%" : "600px"}
            h={mobileView ? "155px" : "70px"}
            bgColor="#E3EEC4"
          >
            <Text m="7px 0 0 30px">
              Irei fazer seu atendimento agora. Tudo o que você precisa fazer é
              apenas preencher os dados abaixo e estarei a sua disposição para
              ajudá-lo(a)
            </Text>
            <Text alignSelf="center" mr="10px">
              {time_chat_open}
            </Text>
          </Flex>
          <VStack
            transtition="all ease 0.2s"
            spacing={2}
            align="stretch"
            mt={mobileView ? "10px" : sizeWidth1366px ? "10px" : "10px"}
            w={mobileView ? "90%" : "600px"}
            mx="auto"
          >
            <ContainerInput
              placeholder="* Nome"
              bgColor="#f5f5f5"
              className="nome"
              id={"nome_parceiro_chat"}
              type="text"
              onChange={(e) => changeInputChat(e, "nome_parceiro_chat")}
            />

            <ContainerInput
              placeholder="* CPF | CNPJ"
              bgColor="#f5f5f5"
              mask={maskCPFCNPJ}
              id={"cpf_cnpj_parceiro_chat"}
              value={cpf_cnpj_parceiro_chat}
              className="cpf-cnpj"
              onChange={(e) => changeInputChat(e, "cpf_cnpj_parceiro_chat")}
              maskChar=""
              type="tel"
            />

            {require_razao ? (
              <ContainerInput
                placeholder="* Razão social"
                bgColor="#f5f5f5"
                id={"razao_parceiro_chat"}
                className="razao-social"
                type="text"
                onChange={(e) => changeInputChat(e, "razao_parceiro_chat")}
              />
            ) : (
              <ContainerInput
                placeholder="* Razão social"
                bgColor="#f5f5f5"
                style={{
                  marginTop: "0",
                  height: "0",
                  transition: "all ease 0.3s",
                  opacity: 0,
                }}
                id={"razao_parceiro_chat"}
                className="razao-social"
                type="text"
                onChange={(e) => changeInputChat(e, "razao_parceiro_chat")}
              />
            )}

            <ContainerInput
              placeholder="* Telefone"
              bgColor="#f5f5f5"
              mask="(99) 9 9999-9999"
              id={"telefone_parceiro_chat"}
              value={telefone_parceiro_chat}
              className="telefone"
              onChange={(e) => {
                changeInputChat(e, "telefone_parceiro_chat");
              }}
              maskChar=""
              type="tel"
            />

            <ContainerInput
              type="email"
              placeholder="* E-mail"
              bgColor="#f5f5f5"
              id={"email_parceiro_chat"}
              className="email"
              onChange={(e) => changeInputChat(e, "email_parceiro_chat")}
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  loadingPDF();
                  salvarContatoWhats();
                }
              }}
            />
          </VStack>
          <Text
            pl="5px"
            fontSize={mobileView ? "10px" : "14px"}
            color="gray"
            w={mobileView ? "90%" : "600px"}
            mt="10px"
            mx="auto"
          >
            Ao enviar esse formulário, eu declaro que aceito compartilhar minhas
            informacões pessoais e compreendo que esses dados estão sujeitos à
            Política de Privacidade do Google*
          </Text>
          <Button
            btnSubmit={true}
            isLoading={loading ?? true}
            onClick={() => {
              loadingPDF();
              salvarContatoWhats();
            }}
            boxShadow={"none !important"}
            _hover={{ bgColor: `${cor_base_1}` }}
            _active={{ bgColor: `${cor_base_1}` }}
            fontFamily="Gisha"
            mx="auto"
            mt={sizeWidth1366px ? "0" : require_razao ? "10px" : "30px"}
            fontSize="15px"
            w="250px"
            color="white"
            borderRadius="5px"
            h="50px"
            bgColor={cor_base_1}
            mb="20px"
          >
            INICIAR ATENDIMENTO{" "}
            <Image alt="download" src={whatsapp} h={35} w={35} ml="5px" />
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
            <ButtonVoltarGerarWhatsapp as="a">
              <span>Voltar</span>
            </ButtonVoltarGerarWhatsapp>
          </Link>
        </Flex>
      </Flex>
      <FooterComponent />
    </ContainerBox>
  );
};
