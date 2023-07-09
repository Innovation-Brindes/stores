import React, { useEffect, useState } from "react";
import { Flex, Input, Text, Button } from "@chakra-ui/react";
import { AiFillCaretLeft } from "react-icons/ai";
import { useRouter } from "next/router";
import Link from "next/link";
import { ButtonVoltar } from "../styles";
import { AcompanharPedido } from "../../../services/api";

const ContainerSearchHash = ({ cod_hash, getDadosAcompanharPedido }) => {
  const [mobileView, setmobileView] = useState(false);
  const [hash, setHash] = useState("");
  const router = useRouter();

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
  // EAC0D3DD-7F76-45C3-B6AA-240040978317
  const onClickPageHash = async () => {
    router.push(`/acompanhe-seu-pedido/${hash}`);

    // const response = await AcompanharPedido.get(hash);

    // getDadosAcompanharPedido();
  };

  return (
    <Flex
      flexDir="column"
      justify="center"
      align="center"
      h="79vh"
      w={mobileView ? "100vw" : "100%"}
      mx="auto"
    >
      <Text
        w={mobileView ? "100vw" : "450px"}
        fontSize={mobileView ? "30px" : "35px"}
        mb="20px"
        fontFamily="Gisha bold"
        textAlign="center"
        as="h1"
      >
        Acompanhe seu pedido
      </Text>
      <Flex
        bgColor="white"
        flexDir="column"
        align="center"
        justify="center"
        borderRadius="10px"
        border="1px solid #d1d1d1"
        h="300px"
        w={mobileView ? "90vw" : "800px"}
      >
        <Text
          fontSize="19px"
          fontFamily="Gisha"
          textAlign="center"
          w={mobileView ? "95%" : "100%"}
          mb="50px"
        >
          Para acompanhar o seu pedido digite seu{" "}
          <strong>código de acompanhamento</strong> abaixo.
        </Text>
        <Input
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              onClickPageHash();
            }
          }}
          value={hash}
          focusBorderColor="gray"
          textAlign="center"
          onChange={(e) => setHash(e.target.value, e.preventDefault())}
          fontSize="19px"
          fontFamily="Gisha"
          placeHolder="Código do pedido"
          _placeholder={{ textAlign: "center" }}
          w="90%"
        />
        <Button
          onClick={onClickPageHash}
          cursor="pointer"
          textDecoration="none"
          mx="auto"
          textTransform="uppercase"
          mt="30px"
          w="200px"
          bgColor="#7fbc03"
          _hover={{ bgColor: "#7fbc03", opacity: "0.9", color: "white" }}
          _active={{ transform: "scale(0.95)", bgColor: "#7fbc03" }}
          transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
          color="white"
          boxShadow="none !important"
        >
          Confirmar
        </Button>
      </Flex>
      <Flex
        align="center"
        h="70px"
        w={mobileView ? "90vw" : "800px"}
        justify="end"
      >
        <Link href="/" prefetch={true} passHref>
          <ButtonVoltar
            as="a"
            h="30px"
            pt="2px"
            color="black"
            fontFamily="Akrobat"
            letterSpacing="1px"
          >
            <span>Voltar</span>
          </ButtonVoltar>
        </Link>
      </Flex>
    </Flex>
  );
};

export default ContainerSearchHash;
