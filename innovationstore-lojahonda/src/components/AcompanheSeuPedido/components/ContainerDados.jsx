import React, { useEffect, useState } from "react";
import { Avatar, Box, Flex, Image, Text, VStack, Link } from "@chakra-ui/react";
import {
  FlexContato,
  FlexIcon,
  FlexContainerDados,
  ContainerFlexImages,
} from "../styles";

const ContainerDados = (props) => {
  const [mobileView, setmobileView] = useState(false);

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

  function formataCPF(cpf_cnpj) {
    if (cpf_cnpj.lengh <= 11) {
      cpf_cnpj = cpf_cnpj.replace(/[^\d]/g, "");
      return cpf_cnpj.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    } else {
      cpf_cnpj = cpf_cnpj.replace(/(\.|\/|\-)/g, "");
      return cpf_cnpj.replace(
        /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,
        "$1.$2.$3/$4-$5"
      );
    }
  }

  function formatarCEP(str) {
    var re = /^([\d]{2})\.*([\d]{3})-*([\d]{3})/;

    if (re.test(str)) {
      return str.replace(re, "$1$2-$3");
    } else {
      alert("CEP inválido!");
    }

    return "";
  }

  return (
    <Flex maxW="1250px" m="auto" bgColor="white" mt="1.3rem">
      <VStack
        pt="30px"
        pl="40px"
        align="strench"
        fontFamily="Gisha"
        w={mobileView ? "90vw" : "60%"}
      >
        <Text
          textAlign={mobileView ? "center" : "strench"}
          pr="5px"
          fontSize={mobileView ? "18px" : "16px"}
        >
          Dados <strong>do cliente</strong>
        </Text>
        <Text fontSize="14px">
          <strong>Razão social: </strong>
          {props.state.dados_parceiro.razao_social}
        </Text>
        <Text fontSize="14px">
          <strong>CPF | CNPJ: </strong>
          {formataCPF(props.state.dados_parceiro.cpf_cnpj)}
        </Text>
        <Text fontSize="14px">
          <strong>Nome: </strong>
          {props.state.dados_parceiro.nome_parc}
        </Text>
        <Text fontSize="14px">
          <strong>Endereço: </strong>
          {props.state.dados_parceiro.endereco}
        </Text>
        <Flex fontSize="14px">
          <Text>
            <strong>CEP:</strong> {formatarCEP(props.state.dados_parceiro.cep)}
          </Text>
          <Text ml="15px">
            <strong>Cidade | UF: </strong>
            {props.state.dados_parceiro.estado} |{" "}
            {props.state.dados_parceiro.uf}
          </Text>
        </Flex>
      </VStack>

      <Flex w={mobileView ? "100vw" : "35%"}>
        <ContainerFlexImages>
          <Avatar
            size="2xl"
            name={props.state.dados_parceiro.nome_vendedor}
            src={props.state.dados_parceiro.foto_parceiro}
          />
        </ContainerFlexImages>

        <Flex
          flexDir="column"
          align="center"
          w={mobileView ? "60vw" : "65%"}
          pt="40px"
        >
          <Link
            style={{ textDecoration: "none" }}
            target="_blank"
            href={"https://api.whatsapp.com/send?phone=551126496030&text="}
          >
            <Text target="_blank">
              Dúvida? <strong>Fale com seu consultor</strong>
            </Text>
          </Link>
          <Text fontFamily="Gisha bold" fontSize="25px">
            {props.state.dados_parceiro.nome_vendedor}
          </Text>
          <Flex flexDir={"column"} align="center" justify="center">
            <Flex display={mobileView ? "none" : "block"}>
              <Link
                style={{ textDecoration: "none" }}
                href={`https://api.whatsapp.com/send?phone=551126496030&text=`}
              >
                <Image
                  _hover={{
                    transform: "scale(1.1,1.1)",
                    transition: "all ease 0.2s",
                  }}
                  transition="all ease 0.2s"
                  position="relative"
                  top="27px"
                  h="25px"
                  w="25px"
                  alt="icone-cellphone"
                  src={"/images/icone-cellphone.svg"}
                />
                <Text ml="35px">
                  <strong>11 2649-6030</strong>
                </Text>
              </Link>
            </Flex>
            <Flex display={mobileView ? "none" : "block"}>
              <Link
                style={{ textDecoration: "none" }}
                href={
                  props.state.dados_parceiro.telefone_parceiro === ""
                    ? `tel:+5511${props.state.dados_parceiro.tel_vendedor}`
                    : `tel:+5511${props.state.dados_parceiro.tel_vendedor}`
                }
              >
                <Image
                  _hover={{
                    transform: "scale(1.1,1.1)",
                    transition: "all ease 0.2s",
                  }}
                  transition="all ease 0.2s"
                  position="relative"
                  top="26px"
                  h="25px"
                  w="25px"
                  alt="icone-phone"
                  src={"/images/icone-phone.svg"}
                />
                <Text ml="35px">
                  <strong>
                    {props.state.dados_parceiro.tel_vendedor === "" || null
                      ? "(11)2649-6030"
                      : `11 ${props.state.dados_parceiro.tel_vendedor}`}
                  </strong>
                </Text>
              </Link>
            </Flex>
            <Flex>
              <Link
                style={{ textDecoration: "none" }}
                href={`mailto:${props.state.dados_parceiro.email_vendedor}?subject=Dúvida sobre o pedido&amp;body=Olá,%0D%0A%0D%0A[corpo do email]%0D%0A%0D%0AAtenciosamente,%0D%0A[${props.state.dados_parceiro.nome_vendedor}]`}
              >
                <Image
                  _hover={{
                    transform: "scale(1.1,1.1)",
                    transition: "all ease 0.2s",
                  }}
                  transition="all ease 0.2s"
                  position="relative"
                  top="25px"
                  h="25px"
                  w="25px"
                  alt="icone-email"
                  src={"/images/icone-email.svg"}
                />
                <Text ml="37px">
                  <strong>{props.state.dados_parceiro.email_vendedor}</strong>
                </Text>
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ContainerDados;
