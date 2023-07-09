import FooterComponent from "../Footer/FooterComponent";
import { TableResumo } from "./components/TableResumoPedido/TableResumo";

import {
  Button,
  ChakraProvider,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
  useMediaQuery,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { baseURL } from "../../services/api";
import Card from "./components/Card";
import { ConfirmarPedido } from "./components/ConfirmarPedido";
import { DeclaracaoLeitura } from "./components/DeclaracaoLeitura";
import { Header } from "./components/Header";
import { MethodContainer } from "./components/methodPayment";
import { ModalConfirmarMobile } from "./components/ModalConfirmarMobile";
import { ObservacaoPedido } from "./components/ObsPedido";
import { PedidoAprovado } from "./components/PedidoAprovado";
import { ResumoPedido } from "./components/ResumoPedido/ResumoPedido";
import { TimerConfirmar } from "./components/TimerConfirmarPedido";
import { ToastUsage } from "./components/toast/ToastUsage";
import { Important } from "./components/Important/Important";
import { useRouter } from "next/router";
import { ModalUsage } from "./components/Modal/ModalError";
import { CardContainer } from "./components/CardContainer";

const loadingGif = "/images/loading.gif";

export const ConfirmarCompra = ({ id, dataInfoClientes, data, dadosPix }) => {
  const [isMaxWidth768] = useMediaQuery("(max-width: 768px)");
  const [isChecked, setIsChecked] = useState(false);
  const [aprovadorPor, setAprovadorPor] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [method, setMethod] = useState("");
  const [paymentType, setPaymentType] = useState("");
  const [valorProduto, setValorProduto] = useState([]);
  const [descricaoProduto, setDescricaoProduto] = useState([]);
  const [quantidadeProduto, setQuantidadeProduto] = useState([]);
  const [cidadePessoal, setCidadePessoal] = useState("");
  const [ufPessoal, setUfPessoal] = useState("");
  const [cepPessoal, setCepPessoal] = useState("");
  const [numeroEndPessoal, setNumeroEndPessoal] = useState("");
  const [ruaEndPessoal, setRuaEndPessoal] = useState("");
  const [bairroEndPessoal, setBairroEndPessoal] = useState("");
  const [cidadeEntrega, setCidadeEntrega] = useState("");
  const [ufEntrega, setUfEntrega] = useState("");
  const [cepEntrega, setCepEntrega] = useState("");
  const [numeroEndEntrega, setNumeroEndEntrega] = useState("");
  const [ruaEndEntrega, setRuaEndEntrega] = useState("");
  const [bairroEndEntrega, setBairroEndEntrega] = useState("");
  const [valorEntrega, setValorEntrega] = useState("");
  const [obsEntrega, setObsEntrega] = useState("");
  const [nunota, setNunota] = useState("");
  const [isMinWidthMedium, setIsMinWidthMedium] = useState(false);
  const [telCliente, setTelCliente] = useState("");
  const [cpfCliente, setCpfCliente] = useState("");
  const [emailCliente, setEmailCliente] = useState("");
  const [textFrete, setTextFrete] = useState("");
  const [descricaoVendas, setDescricaoVendas] = useState("");
  const [nomeCliente, setNomeCliente] = useState("");
  const [urlPix, setUrlPix] = useState("");
  const [codigoPix, setCodigoPix] = useState("");
  const [pedCompra, setPedCompra] = useState("");
  const [valores, setValores] = useState({
    valorTotalPedido: "",
    substituicaoTributaria: "",
    valorFrete: "",
    valorTotalItens: "",
  });
  const [valorTotalItens, setValorTotalItens] = useState("");
  const [isAproved, setIsAproved] = useState("");
  const [checkedRow, setCheckedRow] = useState([]);
  const [codProd, setCodProd] = useState([]);
  const [prazoEntrega, setPrazoEntrega] = useState("");
  const [infosPagar, setInfosPagar] = useState([]);
  const [openModalError, setOpenModalError] = useState(false);
  const [chaveEmp, setChaveEmp] = useState("");
  const [loading, setLoading] = useState(false);
  const [boleto, setBoleto] = useState(
    (typeof window !== "undefined" && localStorage.getItem("boleto")) || false
  );
  const [valorFreteResumo, setValorFreteResumo] = useState("");
  const [valorFreteAmostra, setValorFreteAmostra] = useState("");
  const [aprovador, setAprovador] = useState("");
  const [saidaMercadoria, setSaidaMercadoria] = useState("");
  const [transpPrazo, setTranspPrazo] = useState("");
  const [detalhesProposta, setDetalhesProposta] = useState("");

  const router = useRouter();

  const toast = useToast();

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("urlPix", urlPix);
      localStorage.setItem("codigoPix", codigoPix);
    }
  }, [urlPix, codigoPix]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("boleto", boleto);
    }
  }, [boleto]);

  useEffect(() => {
    if (isMaxWidth768 !== isMinWidthMedium) {
      setIsMinWidthMedium(isMaxWidth768);
    }
  }, [isMaxWidth768]);

  const dataBack = {
    cidadePessoal,
    ufPessoal,
    cepPessoal,
    numeroEndPessoal,
    ruaEndPessoal,
    bairroEndPessoal,
    cidadeEntrega,
    ufEntrega,
    cepEntrega,
    numeroEndEntrega,
    ruaEndEntrega,
    bairroEndEntrega,
    valorFreteResumo,
    obsEntrega,
    nunota,
    paymentType,
    substituicao_trubitaria: valores.substituicaoTributaria,
  };

  async function pixSubmit() {
    setLoading(true);
    const params = {
      tipo_pagamento: paymentType,
      valor_produto: valorProduto,
      descricao_produto: descricaoProduto,
      quantidade_de_pecas: quantidadeProduto,
      nunota: nunota,
      telefone_cliente: telCliente.toString(),
      cpf: cpfCliente,
      email: emailCliente,
      nome: nomeCliente,
      chave_emp: chaveEmp,
      substituicao_tributaria: parseFloat(valores.substituicaoTributaria)
        .toFixed(2)
        .toString()
        .replace(".", ""),
      valor_frete: parseFloat(valorFreteAmostra)
        .toFixed(2)
        .toString()
        .replace(".", ""),
    };

    const response = await baseURL.post(
      "/pedido/envia-dados-pagamento",
      params
    );

    getDataInfoClientes();

    if (response.status === 200) {
      setUrlPix(response.data.QR_CODE);
      setCodigoPix(response.data.PIX);
    }

    setLoading(false);
  }

  async function boletoSubmit() {
    setBoleto(true);

    const params = {
      nome: nomeCliente,
      email: emailCliente,
      cpf: cpfCliente,
      cep_entrega: cepEntrega,
      cidade_entrega: cidadeEntrega,
      uf_entrega: ufEntrega,
      telefone_cliente: telCliente.toString(),
      numero_end_entrega: numeroEndEntrega,
      rua_end_entrega: ruaEndEntrega,
      bairo_end_entrega: bairroEndEntrega,
      nunota: nunota,
      valor_produto: valorProduto,
      descricao_produto: descricaoProduto,
      quantidade_de_pecas: quantidadeProduto,
      chave_emp: chaveEmp,
      tipo_pagamento: paymentType,
      substituicao_tributaria: parseFloat(valores.substituicaoTributaria)
        .toFixed(2)
        .toString()
        .replace(".", ""),
      valor_entrega: parseFloat(valorFreteAmostra)
        .toFixed(2)
        .toString()
        .replace(".", ""),
    };

    const response = await baseURL.post(
      "/pedido/envia-dados-pagamento",
      params
    );
  }

  async function getIpUser() {
    const params = {
      nome_usuario: aprovadorPor,
      nunota: nunota[0].toString(),
      tipo_pagamento: paymentType.toString(),
    };

    const response = await baseURL.post(
      "/pedido/atualiza-usuario-aprovacao-pagamento",
      params
    );
  }

  async function getDataPagamentos() {
    try {
      const { data } = await baseURL.get(
        `/pedido/busca-info-itens-pagamento/${id}`
      );

      const PRAZO_ENTREGA = data.map((item) => item.PRAZO_ENTREGA);
      const QTD = data.map((item) => parseInt(item.QTDNEG));
      const VALORUNIT = data.map((item) =>
        Number(item.VALOR_UNIT).toFixed(2).replace(".", "")
      );
      const DESCRICAO = data.map((item) => item.DESCRICAO.substring(0, 10));
      const NUNOTA = data.map((item) => item.NUNOTA);
      const VALOR_FRETE = data.map((item) =>
        Number(item.VALOR_FRETE).toFixed(2).replace(".", "")
      );

      const NOME = data.map((item) => item.NOME);
      const VALOR_TOTAL = data.map((item) => item.VALOR_TOTAL_PEDIDO);
      const VALOR_TOTAL_ITENS = data.map((item) => item.VALOR_TOTAL_ITEM);
      const SUBSTITUICAO_TRIBUTARIA = data.map(
        (item) => item.VLR_SUB_TRIBUTARIA
      );

      const cod_prod = data.map((item) => item.CODPROD);

      setCodProd(cod_prod);

      setValorTotalItens(VALOR_TOTAL_ITENS);

      setValores({
        valorTotalPedido: VALOR_TOTAL,
        substituicaoTributaria: SUBSTITUICAO_TRIBUTARIA,
        valorTotalItens: VALOR_TOTAL_ITENS,
      });

      setPrazoEntrega(PRAZO_ENTREGA[0].toString());
      setNunota(NUNOTA);
      setDescricaoProduto(NOME);
      setQuantidadeProduto(QTD);
      setValorProduto(VALORUNIT);
      setValorEntrega(VALOR_FRETE);
    } catch (error) {
      console.log(error);
    }
  }

  async function getDataInfoClientes() {
    try {
      const { data } = await baseURL.get(
        `/pedido/busca-info-clientes-pagamento/${id}`
      );

      const nunUnit = data.map((item) => item.numero_unico);
      const detalhesProp = data.map((item) => item.detalhes_proposta);

      const textfrete = data.map((item) => item.texto_frete);
      const descricaovendas = data.map((item) => item.descricao_venda);
      const paymentType = data.map((item) => item.tipo_pagamento);
      const cidade_pessoal = data.map((item) => item.fat_cidade);
      const uf_pessoal = data.map((item) => item.fat_uf);
      const cep_pessoal = data.map((item) => item.fat_cep);
      const numero_end_pessoal = data.map((item) => item.fat_numero);
      const rua_end_pessoal = data.map((item) => item.fat_endereco);
      const bairo_end_pessoal = data.map((item) => item.fat_bairro);
      const nome_aprovador = data.map((item) => item.nome_aprovacao);

      setAprovador(nome_aprovador);

      const tel_cliente = data.map((item) => item.fat_telefone);

      const uf_entrega = data.map((item) => item.ent_uf);
      const cidade_entrega = data.map((item) => item.ent_cidade);
      const cep_entrega = data.map((item) => item.ent_cep);
      const numero_end_entrega = data.map((item) => item.ent_numero);
      const rua_end_entrega = data.map((item) => item.ent_endereco);
      const bairro_end_entrega = data.map((item) => item.ent_bairro);

      const obs_entrega = data.map((item) => item.obs_entrega);
      const cpfCliente = data.map((item) => item.fat_cpf_cnpj);
      const emailCliente = data.map((item) => item.fat_email);
      const aprovacao = data.map((item) => item.aprovacao);

      const url_pix = data.map((item) => item.codigo_pix);
      const qr_code = data.map((item) => item.qr_code);

      setUrlPix(qr_code);
      setCodigoPix(url_pix);

      const VLRFRETE = data.map((item) =>
        Number(item.VALOR_FRETE).toFixed(2).replace(".", "")
      );

      const VLRFRETEAMOSTRA = data.map((item) => item.VALOR_FRETE);
      const nomeCliente = data.map((item) => item.fat_nome);

      const chave_emp = data.map((item) => item.chave_emp);
      const saida_mercadoria = data.map((item) => item.transp_saida);
      const transp_prazo = data.map((item) => item.prazo_transp);

      const pedido_pago = data.map((item) => item.pedido_pago);
      setInfosPagar(pedido_pago);

      setValorFreteAmostra(VLRFRETEAMOSTRA);
      setDetalhesProposta(detalhesProp);

      setSaidaMercadoria(saida_mercadoria);
      setTranspPrazo(transp_prazo);

      setValorFreteResumo(VLRFRETE);
      setTextFrete(textfrete);
      setIsAproved(aprovacao);
      setDescricaoVendas(descricaovendas);

      setPedCompra(nunUnit);

      setNomeCliente(nomeCliente);
      setCpfCliente(cpfCliente);
      setEmailCliente(emailCliente);

      setTelCliente(tel_cliente);

      setCidadePessoal(cidade_pessoal);
      setUfPessoal(uf_pessoal);
      setCepPessoal(cep_pessoal);
      setNumeroEndPessoal(numero_end_pessoal);
      setRuaEndPessoal(rua_end_pessoal);

      setBairroEndPessoal(bairo_end_pessoal);

      setUfEntrega(uf_entrega);
      setCidadeEntrega(cidade_entrega);
      setCepEntrega(cep_entrega);
      setNumeroEndEntrega(numero_end_entrega);
      setRuaEndEntrega(rua_end_entrega);
      setBairroEndEntrega(bairro_end_entrega);

      setObsEntrega(obs_entrega);

      setPaymentType(paymentType);

      setChaveEmp(chave_emp);
    } catch (error) {
      console.log(error);
    }
  }

  const filteredCodProd = Array.from(checkedRow).map((item) => item.codprod);

  //verificar se o array de codProd tem

  function moveWindowClientToBottom() {
    const size = typeof window !== "undefined" && window.innerHeight - 100;
    typeof window !== "undefined" && window.scrollTo(0, size);
  }

  async function handleConfirmarPedido() {
    if (filteredCodProd.length !== codProd.length) {
      setOpenModalError(true);
      return;
    }

    if (paymentType.includes("PIX")) {
      setMethod("PIX");
      pixSubmit();
      getIpUser();

      moveWindowClientToBottom();
    } else if (paymentType.includes("CARTÃO CREDITO")) {
      setLoading(true);
      setTimeout(() => {
        getDataInfoClientes();
        setLoading(false);
      }, 3000);
      setMethod("CARTÃO CREDITO");
      getIpUser();
      // typeof window !== "undefined" && window.location.reload();
      // typeof window !== "undefined" && window.scrollTo(0, 0);
    } else if (paymentType.includes("BOLETO")) {
      boletoSubmit();
      setMethod("BOLETO");
      router.push(`/confirmacao-compra/boleto/success/${id}`);
      getIpUser();
      typeof window !== "undefined" && window.scrollTo(0, 0);
    }

    return;
  }

  useEffect(() => {
    getDataPagamentos();
    getDataInfoClientes();
  }, []);

  const [observerPed, setObserverPed] = useState(null);

  const pedidoPago = ["5", "6"].includes(infosPagar.toString());
  // const pedidoPago = false;

  const verifyIsAproved = isAproved.toString().length > 0 ? true : false;

  useEffect(() => {}, []);

  function handleOpenModal() {
    if (filteredCodProd.length !== codProd.length) {
      setOpenModalError(true);

      return;
    }

    setOpenModal(true);
  }

  return (
    <>
      {openModalError && (
        <ModalUsage
          title="Atenção"
          codProd={codProd}
          filteredCodProd={filteredCodProd}
          isOpen={openModalError}
          closeModal={setOpenModalError}
        />
      )}
      <Flex
        alignItems="center"
        justifyContent="space-between"
        flexDirection="column"
        padding="1rem"
        gap=".8rem"
        maxW="1300px"
        margin="0 auto"
        width="100%"
      >
        <Header
          isMinWidthMedium={isMinWidthMedium}
          pedCompra={pedCompra}
          nunota={nunota}
        />

        {/* {!verifyIsAproved && !pedidoPago && (
          <CardContainer dataInfoClientes={dataInfoClientes} />
        )}

        {!!pedidoPago && <CardContainer dataInfoClientes={dataInfoClientes} />} */}
        <CardContainer
          dataInfoClientes={dataInfoClientes}
          textFrete={textFrete}
        />

        <ChakraProvider>
          {!verifyIsAproved && !pedidoPago && !method && (
            <TableContainer
              w="100%"
              {...(isMinWidthMedium && { display: "none" })}
            >
              <Table
                variant="simple"
                colorScheme="blackAlpha"
                w="100%"
                maxW="1300px"
                margin="0 auto"
                sx={{
                  borderCollapse: "separate",
                  borderSpacing: "0 1rem",
                  //auemntar tamanho da borda
                  "th, td": {
                    borderBottom: "1px solid #cecece",
                    borderTop: "1px solid #cecece",
                  },
                  //last child borda
                  "th:last-child, td:last-child": {
                    borderRight: "1px solid #cecece",
                  },
                  //first child borda
                  "th:first-child, td:first-child": {
                    borderLeft: "1px solid #cecece",
                  },
                }}
              >
                <Thead bg="#7fbc03" color="white">
                  <Tr
                    sx={{
                      "th, td": {
                        color: "white",
                      },
                    }}
                  >
                    <Th>Item</Th>
                    <Th textAlign="center">Qtd.</Th>

                    <Th textAlign="center">Valor unitário</Th>
                    <Th textAlign="center">Valor total</Th>
                    <Th textAlign="center">Layout</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Card
                    cardProduct
                    data={data}
                    setIsChecked={setCheckedRow}
                    isChecked={checkedRow}
                  />
                </Tbody>
              </Table>
            </TableContainer>
          )}
        </ChakraProvider>
        {!!verifyIsAproved && pedidoPago && <TableResumo data={data} />}
        {!!verifyIsAproved && !pedidoPago && <TableResumo data={data} />}
        {!verifyIsAproved && !!isMinWidthMedium && !method && (
          <>
            <Flex flexDir="column" gap={8} width="100%">
              <Card
                isMobile
                data={data}
                setIsChecked={setCheckedRow}
                isChecked={checkedRow}
              />
            </Flex>
          </>
        )}
        {loading && <img src={loadingGif} />}
        {!loading && !!isMinWidthMedium && (
          <ResumoPedido
            isMobile
            valores={valores}
            valorTotalItens={valorTotalItens}
            valorFreteResumo={valorFreteAmostra}
          />
        )}
        {!loading && !isMinWidthMedium && (
          <ResumoPedido
            valores={valores}
            valorTotalItens={valorTotalItens}
            valorFreteResumo={valorFreteAmostra}
          />
        )}
        {!verifyIsAproved && !pedidoPago && !isMinWidthMedium && !method && (
          <>
            <ObservacaoPedido
              textFrete={textFrete}
              descricaoVendas={descricaoVendas}
              detalhesProposta={detalhesProposta}
            />
            <DeclaracaoLeitura setIsChecked={setIsChecked} />
          </>
        )}
        {!method && (
          <PedidoAprovado
            setAprovadorPor={setAprovadorPor}
            aprovadorPor={aprovador}
            isAproved={isAproved}
            verifyIsAproved={verifyIsAproved}
          />
        )}
        {!verifyIsAproved && !pedidoPago && !!isMinWidthMedium && !method && (
          <ConfirmarPedido
            aprovadorPor={aprovadorPor}
            isMobile
            setOpenModal={setOpenModal}
            method={paymentType.toString()}
            label="Confirmar Pedido"
            disabled={aprovadorPor?.length < 4 ? true : false}
            onClick={handleOpenModal}
            pixSubmit={pixSubmit}
          />
        )}
        {!verifyIsAproved && !pedidoPago && !isMinWidthMedium && !method && (
          <ConfirmarPedido
            label="Confirmar Pedido"
            aprovadorPor={aprovadorPor}
            setMethod={setMethod}
            paymentType={paymentType}
            pixSubmit={pixSubmit}
            disabled={isChecked && aprovadorPor?.length > 4 ? false : true}
            onClick={handleConfirmarPedido}
          />
        )}
        {!!isMinWidthMedium && !method && (
          <ChakraProvider>
            <ModalConfirmarMobile
              setAprovadorPor={setAprovadorPor}
              aprovadorPor={aprovadorPor}
              setIsChecked={setIsChecked}
              isChecked={isChecked}
              openModal={openModal}
              setOpenModal={setOpenModal}
              handleConfirmarPedido={handleConfirmarPedido}
              textFrete={textFrete}
              descricaoVendas={descricaoVendas}
            />
          </ChakraProvider>
        )}
        {!pedidoPago && (
          <MethodContainer
            method={method}
            descricaoProduto={descricaoProduto}
            quantidadeProduto={quantidadeProduto}
            valorProduto={valorProduto}
            dataBack={dataBack}
            urlPix={urlPix}
            codigoPix={codigoPix}
            isMinWidthMedium={isMinWidthMedium}
            dadosPix={dadosPix}
            paymentType={paymentType}
            aprovadorPor={verifyIsAproved}
            chaveEmp={chaveEmp}
            valores={valores}
            valorFreteAmostra={valorFreteAmostra}
          />
        )}
        {paymentType.includes("BOLETO") && boleto === "false" && (
          <>
            <TimerConfirmar
              label={
                !verifyIsAproved
                  ? "O tempo para você aprovar o pedido acaba em:"
                  : "O tempo para você pagar acaba em:"
              }
            />
            <Important method={verifyIsAproved} prazoEntrega={transpPrazo} />
          </>
        )}
        {!pedidoPago && !paymentType.includes("BOLETO") && (
          <>
            <TimerConfirmar
              label={
                !verifyIsAproved
                  ? "O tempo para você aprovar o pedido acaba em:"
                  : "O tempo para você pagar acaba em:"
              }
            />
            <Important method={verifyIsAproved} prazoEntrega={transpPrazo} />
          </>
        )}
      </Flex>
    </>
  );
};
