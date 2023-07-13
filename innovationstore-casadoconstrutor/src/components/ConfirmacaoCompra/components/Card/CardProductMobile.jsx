import { Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { VscFilePdf } from "react-icons/vsc";
import { setFirstLetterUpperCase } from "../../../../utils/setFirstLetterUpperCase";

export function CardProductMobile({
  item,
  index,
  verifyLengthCodprod,
  isChecked,
  setIsChecked,
}) {
  const [check, setCheck] = useState(true);

  function checkItem() {
    setCheck(!check);
    setIsChecked([
      ...isChecked,
      { checked: !check, codprod: item.CODPROD, nome: item.NOME },
    ]);

    if (check === false) {
      //tirar o item do array
      const index = isChecked.findIndex(
        (item) => item.codprod === item.CODPROD
      );
      isChecked.splice(index, 1);

      setIsChecked([...isChecked]);
    }
  }

  return (
    <Flex
      flexDir="column"
      border="1px solid #cecece"
      padding=".8rem"
      marginTop="1rem"
      width="100%"
    >
      <Flex gap="1rem" alignItems="start">
        <Image
          src={`/images/produtos/${verifyLengthCodprod(item.CODPROD)}/${
            item.URL_IMG
          }-1-1.jpg`}
          alt="Imagem do produto"
          width={80}
          height={80}
        />
        <Flex flexDir="column" alignItems="start">
          <Flex flexDir="column">
            <Text
              fontSize="1rem"
              fontWeight="bold"
              marginTop="7px"
              marginBottom="0"
            >
              {item.NOME}
            </Text>
            <Text fontSize=".8rem" fontWeight="500">
              Cod {item.CODPROD}{" "}
              <Text
                as="a"
                href={item.CATEGORIA}
                textDecoration={"none"}
                target="_blank"
                rel="noreferrer"
              >
                + Mais informações
              </Text>
            </Text>
          </Flex>
          <Text marginLeft="0">
            Cor: {setFirstLetterUpperCase(item.DS_COR)}
            <br />
            Gravação: {item.DS_IMPR}
            <br />
            Impressões: {item.AD_QTDBATIDA} cor
            <br />
            Prazo de produção: {item.PRAZO_ENTREGA}{" "}
            {item.PRAZO_ENTREGA.length > 1 ? "dias úteis" : "dia util"}{" "}
          </Text>
        </Flex>
      </Flex>

      <Flex
        alignItems="center"
        justifyContent="center"
        gap="1rem"
        flexDirection={"column"}
      >
        {" "}
        <Flex
          width="100%"
          bgColor="#cecece"
          alignItems="center"
          justifyContent="center"
        >
          <Text m="0" fontWeight={"bold"}>
            Layout
          </Text>
        </Flex>
        <Flex width="100%" flexDirection={"row"} justifyContent="space-around">
          <Flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            cursor="pointer"
            gap={9}
          >
            <Text fontSize=".9rem" m="0" color="#7fbc03">
              Visualizar
            </Text>
            <a href={item.LINK_LAYOUT} target="_blank" rel="noreferrer">
              <VscFilePdf size="2rem" color="#7fbc03" />
            </a>
          </Flex>
          <Flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            cursor="pointer"
            gap={9}
          >
            <Text fontSize=".9rem" m="0" color="#7fbc03">
              Aprovar
            </Text>

            <Flex
              border="1px solid #cecece"
              borderRadius="50%"
              cursor="pointer"
              onClick={checkItem}
            >
              {!check ? (
                <AiFillCheckCircle size="2rem" color="#7fbc03" />
              ) : (
                <Flex width="2rem" height="2rem" bg="transparent" />
              )}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        justifyContent="space-around"
        alignItems="center"
        marginTop="1rem"
        width="100%"
      >
        <Flex
          flexDir="column"
          alignItems="center"
          position="relative"
          _after={{
            content: '""',
            width: "1px",
            height: "80px",
            right: "-2.4rem",
            top: "50%",
            backgroundColor: "#cecece",
            position: "absolute",

            transform: "translateY(-50%)",
          }}
        >
          <Text fontWeight="bold">Qtd.</Text>
          <Text>{parseInt(item.QTDNEG)}</Text>
        </Flex>
        <Flex
          flexDir="column"
          alignItems="center"
          position="relative"
          _after={{
            content: '""',
            width: "1px",
            height: "80px",
            right: "-2.4rem",
            top: "50%",
            backgroundColor: "#cecece",
            position: "absolute",

            transform: "translateY(-50%)",
          }}
        >
          <Text fontWeight="bold" textAlign="center">
            Valor
            <br />
            unitário
          </Text>
          <Text>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(item.VALOR_UNIT)}
          </Text>
        </Flex>
        <Flex flexDir="column" alignItems="center">
          <Text fontWeight="bold">
            Valor
            <br />
            total
          </Text>
          <Text>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(item.VALOR_TOTAL_ITEM)}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
