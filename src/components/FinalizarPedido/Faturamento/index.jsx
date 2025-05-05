import React, { useEffect, useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import InfoEditar from './InfoEditar';
import { NextSeo } from 'next-seo';


const loadingGif = "/images/loading.gif";

const Index = ({ dados_cliente, mobileView }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(function () {
      setLoading(false);
      clearTimeout(timer);
    }, 1500);
  }, [])

  return (<>
    <NextSeo title={`Faturamento | Entrega`} />
    {loading ? (
      <Flex
        justify="center"
        w="98%"
        maxW="1200px"
        h="300px"
        align="center"
        mx="auto"
      >
        <img
          alt="loading"
          style={{
            position: "relative",
          }}
          src={loadingGif}
        />
      </Flex>
    ) : (
      <Flex
        flexDir={mobileView ? "column" : "row"}
        boxShadow={mobileView ? "none" : "1px 1px 3px 1px #dbdbdb"}
        borderTop="1px solid #dbdbdb"
        borderRadius="10px"
        mx="auto"
        h={mobileView ? "auto" : "320px"}
        mt={mobileView ? "-50px" : "0"}
        py={mobileView ? "20px" : ""}
        w="98%"
        maxW="1200px"
      >
        <InfoEditar setLoading={setLoading} dados_cliente={dados_cliente} title="faturamento" mobileView={mobileView} />
        <Box
          borderLeft="1px solid #dbdbdb"
          display={mobileView ? "none" : "block"}
          h="250px"
          my="auto"
        />

        <Flex
          borderTop={mobileView ? "1px solid #dbdbdb" : ""}
          mt={mobileView ? "30px" : ""}
          flexDir="column"
          w="400px"
          h="100%"
        >
          <InfoEditar setLoading={setLoading} dados_cliente={dados_cliente} title="entrega" mobileView={mobileView} />
        </Flex>

        <Box
          borderLeft="1px solid #dbdbdb"
          display={mobileView ? "none" : "block"}
          h="250px"
          my="auto"
        />

        <Flex
          borderTop={mobileView ? "1px solid #dbdbdb" : ""}
          mt={mobileView ? "30px" : ""}
          flexDir="column"
          w="400px"
          h="100%"
        >
          <InfoEditar setLoading={setLoading} dados_cliente={dados_cliente} title="contato" mobileView={mobileView} />
          {/* <EditarDadosDoContato/> */}
        </Flex>
      </Flex>
    )}
  </>
  );
};
export default Index;
