import { ChakraProvider, Flex, Text } from "@chakra-ui/react";

export function ObservacaoPedido({
  textFrete,
  descricaoVendas,
  detalhesProposta,
}) {
  return (
    <ChakraProvider>
      <Flex flexDirection="column" gap=".3rem">
        <Text
          textTransform={"uppercase"}
          fontWeight="600"
          color={"#555"}
          bgColor="#ccc"
          w="100%"
          textAlign="center"
          m="0"
        >
          Observações do pedido
        </Text>
        <Flex flexDir="column">
          <Text
            textTransform={"uppercase"}
            fontWeight="bold"
            color={"#555"}
            m="0"
            fontSize=".8rem"
          >
            1. CONDIÇÕES DE PAGAMENTO:
          </Text>
          <Text m="0" fontSize=".8rem">
            {descricaoVendas}
          </Text>
        </Flex>

        <Flex flexDir="column">
          <Text
            textTransform={"uppercase"}
            fontWeight="bold"
            color={"#555"}
            m="0"
            fontSize=".8rem"
          >
            2. FRETE:
          </Text>
          <Text m="0" fontSize=".8rem">
            {textFrete} <br />
            Nos comprometemos a produzir seus produtos no prazo solicitado em
            seu orçamento. Não nos responsabilizamos por eventuais atrasos na
            entrega de seus produtos, quando realizadas por meio de
            transportadoras ou correios.
          </Text>
        </Flex>
        <Flex flexDir="column">
          <Text
            textTransform={"uppercase"}
            fontWeight="bold"
            color={"#555"}
            m="0"
            fontSize=".8rem"
          >
            3. SOBRE ICMS ST:
          </Text>
          <Text m="0" fontSize=".8rem">
            Empresa optante pelo Simples não dá direito ao Crédito de ICMS.{" "}
            <br />
            1º. Nas operações interestaduais realizadas com contribuintes, cujo
            Estado firmou Protocolos ou Convênios com o Estado de São Paulo, que
            estabelece o regime de substituição tributária, a ELE fica atribuída
            a responsabilidade pela retenção e recolhimento do imposto em favor
            do Estado destinatário. <br />O pedido acima, sofrerá alteração
            quanto ao ICMS-ST, pois cada Estado tem uma singularidade e alíquota
            diferenciada, cujo imposto será retido, recolhido, lançado na NF-E e
            no respectivo boleto. <br />
            2º. Os Estados que forem signatários do Protocolo ICMS no.21/2011
            cujo teor, estabelece a favor da unidade federada ao destino
            mercadoria, o ICMS devido na operação interestadual em que o
            consumidor final adquire mercadoria sob encomenda de forma não
            presencial. <br />
            Caso o cliente se encaixe nessa situação o imposto será, retido,
            recolhido, lançado na NF-E e no respectivo boleto. <br />
          </Text>
        </Flex>
        <Flex flexDir="column">
          <Text
            textTransform={"uppercase"}
            fontWeight="bold"
            color={"#555"}
            m="0"
            fontSize=".8rem"
          >
            4. TROCA:
          </Text>
          <Text fontSize=".8rem" m="0">
            Nos termos do art. 24 da Lei 8078/90, os produtos terão garantia
            para defeito de fabricação pelo prazo de 30 (trinta) dias quando não
            duráveis e 90 (noventa) dias quando duráveis, ambos contados da data
            de sua entrega.
          </Text>
        </Flex>
        <Flex flexDir="column">
          <Text
            textTransform={"uppercase"}
            fontWeight="bold"
            color={"#555"}
            m="0"
            fontSize=".8rem"
          >
            5. IMPORTANTE:
          </Text>
          <Text fontSize=".8rem">
            Caso o produto/cor escolhido esteja em falta ou tenha sofrido
            alteração de valores, daremos uma opção de produto similar ou de
            outro modelo.
          </Text>
        </Flex>
        <Flex flexDir="column">
          <Text
            textTransform={"uppercase"}
            fontWeight="bold"
            color={"#555"}
            m="0"
            fontSize=".8rem"
          >
            6 - PRODUÇÃO DE AMOSTRAS:
          </Text>
          <Text fontSize=".8rem">
            Fica estabelecido que a produção de amostras somente será realizada
            para pedidos com valor superior a R$ 2.000,00 (dois mil reais), a
            qual se dará após a aprovação do layout pelo cliente, sendo que caso
            a amostra produzida seja reprovada, mas esteja de acordo com o
            layout previamente aprovado, será cobrado uma taxa de R$ 150,00 para
            a produção de nova amostra e este valor será acrescido ao valor do
            pedido já aprovado.
          </Text>
        </Flex>
        <Flex flexDir="column">
          <Text
            textTransform={"uppercase"}
            fontWeight="bold"
            color={"#555"}
            m="0"
            fontSize=".8rem"
          >
            7 - POLÍTICA DE CANCELAMENTO:
          </Text>
          <Text fontSize=".8rem">
            O contratante declara que está ciente de que em caso de cancelamento
            de pedidos, após a aprovação da proposta, haverá incidência de multa
            equivalente a 30% (trinta por cento) sobre o valor total do pedido,
            ficando a Innovation desde já autorizada a emitir boleto bancário
            para pagamento no prazo máximo de cinco dias a contar da data do
            cancelamento.
          </Text>
        </Flex>
        <Flex flexDir="column">
          <Text
            textTransform={"uppercase"}
            fontWeight="bold"
            color={"#555"}
            m="0"
            fontSize=".8rem"
          >
            8 - DETALHES DA PROPOSTA:
          </Text>
          <Text fontSize=".8rem">{detalhesProposta}</Text>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}
