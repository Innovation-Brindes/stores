import { Flex, Text } from "@chakra-ui/react";
import { useCart } from "../../../../../contexts/useCart";

export function InfoValores() {
  const { frete, cart, totalEmbValue, infoEmb } = useCart();


  const totalItens = cart?.reduce((acc, item) => {
    const { valor_total } = item;

    const valorTotal = parseFloat(valor_total);

    return acc + valorTotal;
  }, 0);

  function formatPrice(price) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  }

  const total =
    parseFloat(totalItens) + totalEmbValue + parseFloat(frete?.frete);

  return (
    <>
      <Flex justifyContent="space-between">
        <Text as="span" fontSize="15px" fontWeight="bold" m="0">
          Itens ({cart?.length + infoEmb?.length})
        </Text>
        <Text m="0">{totalEmbValue ? formatPrice(totalItens + totalEmbValue) : formatPrice(totalItens)}</Text>
      </Flex>
      <Flex justifyContent="space-between">
        <Text as="span" fontSize="15px" fontWeight="bold">
          Frete
        </Text>
        <Text>
          {frete?.frete === 0
            ? "Grátis"
            : isNaN(frete?.frete)
            ? "Selecione um frete"
            : formatPrice(frete?.frete)}
        </Text>
      </Flex>
      <Flex justifyContent="space-between" alignItems="center">
        <Text
          as="h1"
          color="#ff4f00"
          fontSize="20px"
          fontWeight="bold"
          letterSpacing="0rem"
          textAlign="center"
          m="0"
        >
          Total
        </Text>
        <Text
          m="0"
          as="h1"
          color="#000"
          fontSize="20px"
          fontWeight="bold"
          letterSpacing="0rem"
          textAlign="center"
        >
          {formatPrice(total ? total : totalItens + totalEmbValue)}
        </Text>
      </Flex>
    </>
  );
}
