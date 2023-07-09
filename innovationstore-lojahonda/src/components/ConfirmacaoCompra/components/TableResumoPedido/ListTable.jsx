import { Flex, Text, Th, Tr } from "@chakra-ui/react";

export function ListTable({ item, index }) {
  return (
    <Tr key={index}>
      <Th>
        <Flex alignItems="center" gap=".5rem">
          <Text fontSize="1rem">{item.NOME}</Text>

          <Text fontSize="0.8rem" fontWeight="600">
            {" | "}
            Cod {item.CODPROD}
          </Text>
          <Text fontSize=".8rem" fontWeight="500">
            <Text
              as="a"
              href={item.CATEGORIA}
              textDecoration={"none"}
              target="_blank"
              rel="noreferrer"
              mr="5px"
            >
              + Mais informações |
            </Text>
            <Text
              as="a"
              href={item.LINK_LAYOUT}
              textDecoration={"none"}
              target="_blank"
              rel="noreferrer"
            >
              Layout
            </Text>
          </Text>
        </Flex>
        <Flex alignItems="center" gap={3}>
          <Text as="span" fontSize="0.7rem" fontWeight="normal">
            {" "}
            Cor: {item.DS_COR}
          </Text>
          <Text as="span" fontSize="0.7rem" fontWeight="normal">
            {" "}
            Gravação: {item.DS_IMPR}
          </Text>
          <Text as="span" fontSize="0.7rem" fontWeight="normal">
            {" "}
            Impressões: {item.AD_QTDBATIDA}
          </Text>
        </Flex>
      </Th>
      <Th textAlign="center">{parseInt(item.QTDNEG)}</Th>
      <Th textAlign="center">
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(parseFloat(item.VALOR_UNIT))}
      </Th>
      <Th textAlign="center">
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(parseFloat(item.VALOR_TOTAL_ITEM))}
      </Th>
    </Tr>
  );
}
