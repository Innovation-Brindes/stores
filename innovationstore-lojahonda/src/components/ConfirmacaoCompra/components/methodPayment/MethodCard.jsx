import { ChakraProvider, Flex } from "@chakra-ui/react";
import FormMethodCard from "./FormMethodCard";

export const MethodCard = ({
  valorProduto,
  descricaoProduto,
  quantidadeProduto,
  dataBack,
  chaveEmp,
  getDataInfoClientes,
  valores,
  valorFreteAmostra,
}) => {
  return (
    <ChakraProvider>
      <Flex width="100%">
        <FormMethodCard
          valorProduto={valorProduto}
          descricaoProduto={descricaoProduto}
          quantidadeProduto={quantidadeProduto}
          dataBack={dataBack}
          chaveEmp={chaveEmp}
          valores={valores}
          valorFreteAmostra={valorFreteAmostra}
        />
      </Flex>
    </ChakraProvider>
  );
};
