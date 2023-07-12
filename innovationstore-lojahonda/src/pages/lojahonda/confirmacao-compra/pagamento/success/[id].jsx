import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";

import { Header } from "../../../../components/ConfirmacaoCompra/components/Header";
import { Success as Sucesso } from "../../../../components/success/Success";
import { baseURL } from "../../../../services/api";

export async function getServerSideProps(ctx) {
  const { id } = ctx.params;

  const response = await baseURL(`/pedido/busca-info-clientes-pagamento/${id}`);

  const response2 = await baseURL(`/pedido/busca-info-itens-pagamento/${id}`);

  const data = await response.data;
  const data2 = await response2.data;

  return {
    props: {
      data,
      data2,
    },
  };
}

const Success = ({ data, data2 }) => {
  const numUnico = data.map((item) => item.numero_unico);
  const nunota = data2.map((item) => item.NUNOTA);

  return (
    <>
      <Head>
        <title>{numUnico} - Confirmação de Compra - Innovation Brindes</title>
      </Head>

      <Flex
        minHeight="calc(100vh - 200px)"
        maxWidth="1366px"
        m="0 auto"
        flexDirection="column"
        justifyContent="space-around"
        padding="1rem"
      >
        <Header numUnico={numUnico} nunota={nunota} />
        <Sucesso message="O Seu pagamento foi aprovado!." />
      </Flex>
    </>
  );
};

export default Success;
