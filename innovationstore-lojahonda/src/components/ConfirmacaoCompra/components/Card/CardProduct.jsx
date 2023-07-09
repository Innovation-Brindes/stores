import { Flex, Image, Td, Text, Tr } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { VscFilePdf } from "react-icons/vsc";
import { setFirstLetterUpperCase } from "../../../../utils/setFirstLetterUpperCase";

export function CardProduct({
  key,
  item,
  verifyLengthCodprod,
  setIsChecked,
  isChecked,
}) {
  const [check, setCheck] = useState(true);
  const [hover, setHover] = useState(false);

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
      return;
    }
  }

  return (
    <Tr border="1px solid #e2e8f0" marginBottom="1rem">
      <Td>
        <Flex gap="1rem" maxW="fit-content">
          <div>
            {" "}
            <Image
              src={`/images/produtos/${verifyLengthCodprod(item.CODPROD)}/${
                item.URL_IMG
              }-1-1.jpg`}
              alt="Imagem do produto"
              width={150}
              height={150}
              objectFit="cover"
              padding="1.6rem"
            />
          </div>
          <Flex flexDir="column">
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

            <span
              style={{
                fontSize: ".8rem",
              }}
            >
              Cor: {setFirstLetterUpperCase(item.DS_COR)}
            </span>
            <span
              style={{
                fontSize: ".8rem",
              }}
            >
              Gravação: <span>{item.DS_IMPR} </span>
            </span>
            <span
              style={{
                fontSize: ".8rem",
              }}
            >
              Impressões: <span>{item.AD_QTDBATIDA} cor</span>
            </span>
            <span
              style={{
                fontSize: ".8rem",
              }}
            >
              Prazo de produção:{" "}
              <span>
                {item.PRAZO_ENTREGA}{" "}
                {item.PRAZO_ENTREGA.length > 1 ? "dias úteis" : "dia util"}{" "}
              </span>
            </span>
          </Flex>
        </Flex>
      </Td>
      <Td textAlign="center">
        <p>{parseInt(item.QTDNEG)}</p>
      </Td>

      <Td textAlign="center">
        <p>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(item.VALOR_UNIT)}
        </p>
      </Td>
      <Td textAlign="center">
        <p>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(item.VALOR_TOTAL_ITEM)}
        </p>
      </Td>
      <Td>
        <Flex alignItems="center" justifyContent="center" gap="1rem">
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            cursor="pointer"
          >
            <Text fontSize=".9rem">Visualizar</Text>

            <a href={item.LINK_LAYOUT} target="_blank" rel="noreferrer">
              <VscFilePdf size="2rem" color="#7fbc03" />
            </a>
          </Flex>
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            cursor="pointer"
          >
            <Text fontSize=".9rem">Aprovar</Text>

            <Flex
              border={check ? "1px solid #cecece" : "1px solid #7fbc03"}
              borderRadius="50%"
              cursor="pointer"
              onClick={checkItem}
              transition="all .2s ease"
              _hover={{
                border: "1px solid #7fbc03",
              }}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              {check && hover ? (
                <AiFillCheckCircle size="2rem" color="#7fbc03" opacity=".3" />
              ) : null}
              {!check ? (
                <AiFillCheckCircle size="2rem" color="#7fbc03" />
              ) : (
                !hover && <Flex width="2rem" height="2rem" bg="transparent" />
              )}
            </Flex>
          </Flex>
        </Flex>
      </Td>
    </Tr>
  );
}
