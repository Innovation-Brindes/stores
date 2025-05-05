import {
  Box,
  ChakraProvider,
  Center,
  Checkbox,
  CloseButton,
  Collapse,
  Flex,
  Heading,
  Image,
  Spinner,
  Text,
  Tooltip,
  useDisclosure,
  useMediaQuery,
  useToast,
  VStack,
  Button,
  Alert,
  AlertIcon,
  AlertDescription,
  AlertTitle,
} from "@chakra-ui/react"
import { TfiLocationPin } from "react-icons/tfi"
import { useRouter } from "next/router"
import React, { forwardRef, useEffect, useImperativeHandle, useState } from "react"
import { VscFilePdf, VscFoldDown } from "react-icons/vsc"
import { MdOutlineAddShoppingCart } from "react-icons/md"
import {
  ContainerBoxOrcamentoRapido,
  ContainerPdfFlex,
  ButtonPDFPadrao,
  ReactInputMaskRazaoSocial,
  BoxFormularioOrcamento,
  BoxOrcamento,
} from "../styles"
import ReactInputMask from "react-input-mask"
import { AddIcon, InfoOutlineIcon } from "@chakra-ui/icons"
import axios from "axios"
import { setFirstLetterUpperCase } from "../../../utils/setFirstLetterUpperCase"
import { useCart } from "../../../contexts/useCart"
import { Link } from "next/link"
import { Dots } from "./Dots"
import { ComprouGanhou } from "./ComprouGanhou"
import { parseCookies, destroyCookie } from "nookies"
import { validaCpfCnpj } from "../../../utils/validaCep"
import { validaTelefone } from "../../../utils/validaTelefone"
import { useCookiesSession } from "../../../contexts/cookiesSessionProvider"
import { PopoverFrete } from "./PopoverFrete"
import { ContainerAddress, ContainerAddressClient } from "./styles"

const greenLoading = "/images/menu/green-loader.gif"
const loadingGif = "/images/minion.gif"
const loadingGifPDF = "/images/loading_pdf.gif"

export const ComponentPdf = forwardRef((props, ref) => {
  const { isOpen, onToggle, onClose } = useDisclosure()
  const [buttonPDF, setButtonPDF] = useState(false)
  const [loading, setLoading] = useState(false)
  const [maskCPFCNPJ, setMaskCPFCNPJ] = useState("999.999.999-999")
  const [maskTelefone, setMaskTelefone] = useState("(99) 9999-9999")
  const [require_razao, setRequire_razao] = useState(false)
  const [nomeParceiro, setNomeParceiro] = useState(null)
  const [cpfcnpjParceiro, setCPFCNPJParceiro] = useState(null)
  const [razaoSocialParceiro, setRazaoSocialParceiro] = useState(null)
  const [telefoneParceiro, setTelefoneParceiro] = useState(null)
  const [emailParceiro, setEmailParceiro] = useState(null)
  const [mobileIphoneView, setMobileIphoneView] = useState()
  const [mobileView, setmobileView] = useState()
  const [noteView, setnoteView] = useState()
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)
  const [loadingRefreshCep, setLoadingRefreshCep] = useState(false)

  function handleClosePopover() {
    setIsPopoverOpen(false)
  }

  function handleOpenPopover() {
    setIsPopoverOpen(!isPopoverOpen)
  }

  const { addressClient, haveClientAddresCookies } = useCookiesSession()

  const enderecoFormatado = `${addressClient?.rua}, ${addressClient?.bairro}, ${addressClient?.cidade}, ${addressClient?.uf}`

  useEffect(() => {
    if (addressClient) {
      setLoadingRefreshCep(true)
      setTimeout(() => {
        setLoadingRefreshCep(false)
      }, 1000)
    }
  }, [addressClient])

  const [acceptNotification, setAcceptNotification] = useState(true)
  const [widthScreen400] = useMediaQuery("(max-width:400px)")

  const [gravacao, setGravacao] = useState(null)

  const { addToCart } = useCart()

  useEffect(() => {
    if (window.matchMedia("(max-width: 1366px)").matches) {
      setnoteView(true)
    } else {
      setnoteView(false)
    }
  }, [])

  useEffect(() => {
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      setMobileIphoneView(true)
    } else {
      setMobileIphoneView(false)
    }
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      setmobileView(true)
    } else {
      setmobileView(false)
    }
    setAcceptNotification(true)
  }, [])

  const preco_home = props.state.preco_home
  const preco_home_string = preco_home.toLocaleString("pt-BR")

  useImperativeHandle(ref, (value) => ({
    closeForm: () => onClose(),
    maginTopDimensao: () => isOpen,
  }))

  const toast = useToast()

  const loadingResumoToggle = async () => {
    try {
      setLoading(true)
      onToggle()
      const timer = setTimeout(function () {
        setLoading(false)
        clearTimeout(timer)
        if (isOpen == false && noteView) {
          window.scrollTo(0, 210)
        }
        if (isOpen == false && mobileView) {
          window.scrollTo(0, 1200)
        }
        if (isOpen && mobileView) {
          window.scrollTo(0, 800)
        }
      }, 500)
    } catch (err) {
      setLoading(false)
    }
  }

  function handleChangeCPFCNPJ(value) {
    var format_data = value.replaceAll(".", "")
    var format_data = format_data.replaceAll("-", "")
    var format_data = format_data.replaceAll("/", "")

    if (format_data.length > 11) {
      setMaskCPFCNPJ("99.999.999/9999-99")
      setRequire_razao(true)
    } else if (format_data.length <= 11) {
      setMaskCPFCNPJ("999.999.999-999")
      setRequire_razao(false)
    }
  }

  function handleTelefoneForm(value) {
    var format_data = value.replaceAll("(", "")
    var format_data = format_data.replaceAll(")", "")
    var format_data = format_data.replaceAll("-", "")
    var format_data = format_data.replaceAll(" ", "")

    if (format_data.length > 10) {
      setMaskTelefone("(99) 9 9999-9999")
    } else if (format_data.length <= 10) {
      setMaskTelefone("(99) 9999-99999")
    }
  }

  function ifnull(a, b) {
    if (a === undefined || a === null) {
      return b
    } else {
      return a
    }
  }

  useEffect(() => {
    props.state.tipo_gravacao.map((data) => {
      if (data.cod == props.state.tipo_gravacao_selecionada?.cod) {
        setGravacao({
          cod: data.cod,
          desc: data.nome,
        })
      }
    })
  }, [props.state.tipo_gravacao_selecionada])

  function gerarOrcamento() {
    if (ifnull(nomeParceiro, "") == "") {
      toast({
        position: "top",
        duration: 4000,
        render: () => (
          <Box borderRadius="5px" boxShadow="2px 2px 20px 2px gray" p={1} bg="#EDEDED">
            <Flex justifyContent="space-between">
              <Flex justifyContent="center" alignItems="center">
                <InfoOutlineIcon ml="5px" fontSize="25px" />
              </Flex>
              <Text pr="5px" color="black" mt="15px" ml="5px">
                Preencha o campo "Nome" no formulário.
              </Text>
              <CloseButton onClick={toast.closeAll} boxShadow="none !important" />
            </Flex>
          </Box>
        ),
      })
    } else if (!validaCpfCnpj(ifnull(cpfcnpjParceiro, ""))) {
      toast({
        position: "top",
        duration: 4000,
        render: () => (
          <Box borderRadius="5px" boxShadow="2px 2px 20px 2px gray" p={1} bg="#EDEDED">
            <Flex justifyContent="space-between">
              <Flex justifyContent="center" alignItems="center">
                <InfoOutlineIcon ml="5px" fontSize="25px" />
              </Flex>
              <Text pr="5px" color="black" mt="15px" ml="5px">
                Campo "CPF/CNPJ" inválido {cpfcnpjParceiro}.
              </Text>
              <CloseButton onClick={toast.closeAll} boxShadow="none !important" />
            </Flex>
          </Box>
        ),
      })
    } else if (require_razao && ifnull(razaoSocialParceiro, "") == "") {
      toast({
        position: "top",
        duration: 4000,
        render: () => (
          <Box borderRadius="5px" boxShadow="2px 2px 20px 2px gray" p={1} bg="#EDEDED">
            <Flex justifyContent="space-between">
              <Flex justifyContent="center" alignItems="center">
                <InfoOutlineIcon ml="5px" fontSize="25px" />
              </Flex>
              <Text pr="5px" color="black" mt="15px" ml="5px">
                Preencha o campo "Razão Social" no formulário.
              </Text>
              <CloseButton onClick={toast.closeAll} boxShadow="none !important" />
            </Flex>
          </Box>
        ),
      })
    } else if (!validaTelefone(ifnull(telefoneParceiro, ""))) {
      toast({
        position: "top",
        duration: 4000,
        render: () => (
          <Box borderRadius="5px" boxShadow="2px 2px 20px 2px gray" p={1} bg="#EDEDED">
            <Flex justifyContent="space-between">
              <Flex justifyContent="center" alignItems="center">
                <InfoOutlineIcon ml="5px" fontSize="25px" />
              </Flex>
              <Text pr="5px" color="black" mt="15px" ml="5px">
                Campo de "Telefone" inválido.
              </Text>
              <CloseButton onClick={toast.closeAll} boxShadow="none !important" />
            </Flex>
          </Box>
        ),
      })
    } else if (ifnull(emailParceiro, "") == "") {
      toast({
        position: `${mobileView ? "top" : "bottom"}`,
        duration: 4000,
        render: () => (
          <Box borderRadius="5px" boxShadow="2px 2px 20px 2px gray" p={1} bg="#EDEDED">
            <Flex justifyContent="space-between">
              <Flex justifyContent="center" alignItems="center">
                <InfoOutlineIcon ml="5px" fontSize="25px" />
              </Flex>
              <Text pr="5px" color="black" mt="15px" ml="5px">
                Preencha o campo "Email" no formulário.
              </Text>
              <CloseButton onClick={toast.closeAll} boxShadow="none !important" />
            </Flex>
          </Box>
        ),
      })
    } else {
      props.gerarOrcamentoProduto({
        nome_parceiro: nomeParceiro,
        cpfcnpj_parceiro: cpfcnpjParceiro,
        razao_social_parceiro: razaoSocialParceiro,
        telefone_parceiro: telefoneParceiro,
        email_parceiro: emailParceiro,
      })
    }
  }
  function OpenFormOrcamento() {
    if (mobileView) {
      loadingResumoToggle()
      // window.scrollTo(0, 900)
    } else {
      loadingResumoToggle()
      if (noteView) {
        window.scrollTo(0, 900)
      }
    }
  }

  const [cpf, setCpf] = useState("")

  const handleValue = async (e) => {
    const cpfFormattedBeforeSend = e.replaceAll(".", "").replaceAll("-", "").replaceAll("/", "")

    try {
      const response = await axios.get(
        `https://api.innovationbrindes.com.br/api/site/v2/pedido/busca-dados-receita/${cpfFormattedBeforeSend}`,
      )

      setCpf(response.data.RAZAO_SOCIAL)
    } catch (error) {
      console.log("error", error.message)
    }
  }

  useEffect(() => {
    props.submitCustomQtd()
  }, [])

  useEffect(() => {
    setTimeout(() => {
      props.submitCustomQtd()
    }, 2000)

    setTimeout(() => {
      props.submitCustomQtd()
    }, 1000)
  }, [])

  async function handleAddToCart(item) {
    await props.submitCustomQtd()

    const cubagem = {
      altura: { valor: props.state.altura_caixa_brinde.valor },
      largura: { valor: props.state.largura_caixa_brinde.valor },
      comprimento: { valor: props.state.comprimento_caixa_brinde.valor },
      peso: { valor: props.state.peso_caixa_brinde.valor },
      qtdcaixa: { valor: props.state.qtd_caixa_brinde.valor },
      calc_kangu: props.state.calc_kangu,
      cubagemTotal: { valor: props.state.cubagem_total.valor },
    }

    var cor = null

    props.state.cores.map((data) => {
      if (data.cod == props.state.cor_selecionada.cod) {
        cor = {
          cod: data.cod,
          desc: data.text,
          tamanho_p: data.tamanho_p,
          tamanho_m: data.tamanho_m,
          tamanho_g: data.tamanho_g,
          tamanho_gg: data.tamanho_gg,
          tamanho_xgg: data.tamanho_xgg,
        }
      }
    })

    const TipoEmbalagem = ""
    const valorUnitarioEmbalagem = "0,00"
    const valorTotalEmbalagem = "0,00"
    const codigo_impressao = ""

    const hash =
      "produto_" +
      props.state.cod_prod +
      "_" +
      Math.floor(Date.now() * Math.random()).toString(36) +
      "_" +
      Math.random() * 10
    const produto = {
      id_hash: hash,
      codprod: props.state.cod_prod,
      imagem: props.state.dados.imagem_produto,
      nome_prod: props.state.dados.nome,
      referencia: props.state.dados.referencia,
      ad_embalagem: props.state.dados.ad_embalagem,
      cubagem_embalagem: [null, null, null, null],
      batidas: props.state.impressao_produto,
      cor_produto: cor,
      valor_unitario_embalagem: valorUnitarioEmbalagem,
      valor_total_embalagem: valorTotalEmbalagem,
      tipo_embalagem: "",
      cubagem: cubagem,
      quantidade: props.state.quantidade_selecionada,
      prazo: props.state.prazo_selecionado.prazo,
      valor_unitario: (Math.round(parseFloat(props.state.preco_home) * 100) / 100).toLocaleString("pt-br", {
        minimumFractionDigits: 2,
      }),
      valor_total: (
        (Math.round(parseFloat(props.state.preco_home) * 100) / 100) *
        parseInt(props.state.quantidade_selecionada)
      )
        .toString()
        .replaceAll(".", ","),
      prazo_entrega: props.state.prazo_selecionado.prazo,
      tipo_gravacao: gravacao,
      codigo_impressao_embalagem: "",
      url_img: props.state.list_img[0],
      url_prod: props.state.url_produto,
      genero: props.state.genero,
      allInfos: props.state,
      embalagem: false,
      codigo_impressao: props.state.gravacao_selecionadas[0],
    }

    await new Promise((resolve) => setTimeout(resolve, 1000))

    addToCart(produto)
    toast({
      position: "top-right",
      title: "Produto adicionado ao carrinho.",
      status: "success",
      duration: 5000,
      isClosable: true,
      render: () => (
        <Alert
          status="success"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          <AlertIcon boxSize="30px" color="green.500" />
          <AlertTitle mt={4} mb={1} fontSize="sm">
            Produto adicionado ao carrinho
          </AlertTitle>
        </Alert>
      ),
    })

    // router.push("/carrinho");
    window.location.href = "/carrinho"
  }

  const razaoFormatted =
    setFirstLetterUpperCase(cpf)?.length > 30
      ? setFirstLetterUpperCase(cpf).substring(0, 30) + "..."
      : setFirstLetterUpperCase(cpf)

  return (
    <ChakraProvider>
      <ContainerPdfFlex minH={mobileView && isOpen ? "920px" : "0"} fontFamily="Open Sans!important">
        {isOpen ? (
          <Box
            border={mobileView ? "1px solid #f5f5f5" : "none"}
            borderRadius="5px"
            boxShadow={mobileView ? "none" : "1px 1px 3px 1px #bebed1"}
            bgColor="white"
            mb="15px"
            w={mobileView ? (widthScreen400 ? "100vw" : "400px") : "320px"}
            h="350px"
          >
            <Collapse in={isOpen} animateOpacity>
              <Box pt="20px">
                <Text textAlign={"center"} color={"#FF4F00"} fontWeight={"bold"} fontSize={"20px"}>
                  Resumo
                </Text>
                <Flex
                  h={mobileView ? "70px" : ""}
                  pt={mobileView ? "15px" : ""}
                  mb={mobileView ? "5px" : ""}
                  w="100%"
                  mt={"1rem"}
                  fontFamily="Open Sans"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Text m={"0"} mt={"-.6rem"} fontSize={".8rem"}>
                    R$
                  </Text>
                  {props.state.loadingValor ? (
                    <img
                      width={50}
                      height={50}
                      style={{ position: "relative", top: "-10px" }}
                      alt="green-loading"
                      src={greenLoading}
                    />
                  ) : (
                    <Heading
                      m={"0"}
                      fontSize={mobileView ? "70px" : "40px"}
                      margin={1}
                      fontFamily="Open Sans"
                      mt="-17px"
                    >
                      {props.state.preco_home.toString().replace(".", ",")}
                    </Heading>
                  )}
                  <Text m={"0"} mt={"-.6rem"} fontSize={".8rem"}>
                    unidade
                  </Text>
                </Flex>
                <VStack mt="0px" mb="20px" spacing={mobileView ? 5 : 2}>
                  <Center paddingInline={"15px"}>
                    <Button
                      w={"295px"}
                      mt={"1rem"}
                      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                      bgColor="#FF4F00"
                      _hover={{ bgColor: "#FF4F00", opacity: "0.8" }}
                      _active={{ bgColor: "#FF4F00", transform: "scale(0.90)" }}
                      boxShadow="none !important"
                      paddingBlock={"1.4rem"}
                      color="white"
                      fontSize={"1.1rem"}
                      fontWeight="normal"
                      letterSpacing="1px"
                      borderRadius={"35px"}
                      onClick={() => handleAddToCart()}
                      // onClick={() => props.addProdutoCarrinho()}
                    >
                      ADICIONAR AO CARRINHO
                    </Button>
                  </Center>

                  <Center paddingInline={"15px"} w={"100%"}>
                    <Flex
                      mt={".5rem"}
                      as="button"
                      w={"295px"}
                      fontSize={mobileView ? "25px" : ""}
                      justifyContent="center"
                      textAlign="center"
                      align="center"
                      borderRadius="30px"
                      onClick={
                        mobileView
                          ? () => {
                              loadingResumoToggle()
                              window.scrollTo(0, 650)
                            }
                          : () => {
                              loadingResumoToggle()
                              window.scrollTo(0, 0)
                            }
                      }
                      color="#FF4F00"
                      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                      paddingBlock={"1.4rem"}
                      fontFamily="Akrobat"
                      bgColor="#FFEADC"
                      _hover={{ bgColor: "#FFEADC", opacity: "0.8" }}
                      _active={{ bgColor: "#FFEADC", transform: "scale(0.90)" }}
                      boxShadow="none !important"
                      h={mobileView ? "70px" : "40px"}
                      position="relative"
                    >
                      <Text mt="15px" align="center" fontSize={"20px"} color={"#FF4F00"} fontFamily="Open Sans">
                        VER RESUMO
                      </Text>{" "}
                      <Image
                        ml={mobileView ? "30px" : "30px"}
                        w={mobileView ? "40px" : "30px"}
                        h={mobileView ? "40px" : "30px"}
                        src="/images/resumo.svg"
                        position="absolute"
                        right={"1.5rem"}
                        top={"50%"}
                        transform={"translateY(-50%)"}
                      />
                    </Flex>
                  </Center>
                </VStack>
              </Box>
            </Collapse>
          </Box>
        ) : loading ? (
          <Center
            pt="15px"
            borderRadius="5px"
            boxShadow={mobileView ? "none" : "1px 1px 3px 1px #bebed1"}
            bgColor="white"
            mb="20px"
            w={mobileView ? "400px" : "320px"}
            h="250px"
          >
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color={"#58bc03"}
              size="md"
              position={"relative"}
              mx="auto"
            />
          </Center>
        ) : (
          <ContainerBoxOrcamentoRapido paddingBottom={15}>
            <Flex paddingBlock={"1rem"} mt={"10px"} mx="5px" alignItems="center" justify="center" w={"100%"}>
              <h1
                style={{
                  fontSize: `${mobileIphoneView ? "25px" : mobileView ? "25px" : "20px"}`,
                  letterSpacing: "0.03rem",
                  color: "#FF4F00",
                  textAlign: "center",
                }}
              >
                <strong>Resumo</strong>
              </h1>
            </Flex>
            {props.state.loadingValor ? (
              <Center borderRadius="5px" bgColor="white" mb="20px" w={mobileView ? "400px" : "320px"} h="243px">
                {/* <Spinner thickness='10px' speed='0.65s' emptyColor='gray.200' color={'#58bc03'} h='80px' w='80px' position={'relative'} marginLeft={'auto'} marginRight={'auto'} /> */}
                <Image alt="loading" h="100px" w="100px" src={loadingGifPDF} />
              </Center>
            ) : (
              <>
                <Box pl="15px" display="flex" flexDirection="column" gap={".2rem"}>
                  <Text m={"0"} fontSize={13} h={props.state.cor_selecionada != null ? "auto" : 0} transition="0.3s">
                    {props.state.cor_selecionada != null ? (
                      <Flex gap={1}>
                        <Text m={"0"}>Cor do produto:</Text>
                        {props.state.cor_selecionada.text ? (
                          <Text ml="5px" m={"0"}>
                            <strong>
                              {props.state.cor_selecionada.text.charAt(0).toUpperCase() +
                                props.state.cor_selecionada.text.toLowerCase().slice(1)}
                            </strong>
                          </Text>
                        ) : (
                          <></>
                        )}
                      </Flex>
                    ) : (
                      <></>
                    )}
                  </Text>
                  <Text
                    m={"0"}
                    fontSize={13}
                    h={props.state.tipo_gravacao_selecionada != null ? "auto" : 0}
                    transition="0.3s"
                  >
                    {props.state.tipo_gravacao_selecionada != null ? (
                      <>
                        Personalização: <strong>{props.state.tipo_gravacao_selecionada.nome}</strong>
                      </>
                    ) : (
                      <></>
                    )}
                  </Text>
                  <Text m={"0"} fontSize={13} h={props.state.impressao_produto != null ? "auto" : 0} transition="0.3s">
                    {props.state.impressao_produto != null ? (
                      <>
                        Número de impressão: <strong>{props.state.impressao_produto}</strong>
                      </>
                    ) : (
                      <></>
                    )}
                  </Text>
                  <Text m={"0"} fontSize={13} h={props.state.prazo_selecionado != null ? "auto" : 0} transition="0.3s">
                    {props.state.prazo_selecionado != null ? (
                      <>
                        Saída da mercadoria:{" "}
                        <strong>
                          {props.state.prazo_selecionado.data_producao} |{" "}
                          {setFirstLetterUpperCase(props.state.prazo_selecionado.nome_data)}
                        </strong>
                      </>
                    ) : (
                      <></>
                    )}
                  </Text>
                  <Text
                    m={"0"}
                    fontSize={13}
                    h={props.state.quantidade_selecionada != null ? "auto" : 0}
                    transition="0.3s"
                  >
                    {props.state.quantidade_selecionada != null ? (
                      <>
                        Quantidade:{" "}
                        <strong>
                          {parseInt(props.state.quantidade_selecionada).toLocaleString("pt-br", {
                            minimumFractionDigits: 0,
                          })}
                        </strong>{" "}
                      </>
                    ) : (
                      <></>
                    )}
                  </Text>
                </Box>

                {haveClientAddresCookies && (
                  <ContainerAddressClient
                    css={{
                      display: haveClientAddresCookies ? "flex" : "none",
                    }}
                  >
                    <PopoverFrete isOpen={isPopoverOpen} onClose={handleClosePopover} />
                    {!loadingRefreshCep ? (
                      <ContainerAddress>
                        <TfiLocationPin size={20} />
                        {enderecoFormatado.length > 22
                          ? enderecoFormatado.substring(0, 22).concat("...")
                          : enderecoFormatado}
                      </ContainerAddress>
                    ) : (
                      <Spinner size="sm" />
                    )}
                    {!loadingRefreshCep && addressClient.frete_gratis === "S" && (
                      <Image src="/gifs/frete-gratis/frete-gratis.png" alt="frete-gratis" width="80px" />
                    )}
                  </ContainerAddressClient>
                )}
                <Flex
                  h={mobileView ? "70px" : ""}
                  pt={mobileView ? "15px" : ""}
                  mb={mobileView ? "5px" : ""}
                  w="100%"
                  mt={"1.5rem"}
                  fontFamily="Open Sans"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Text m={"0"} mt={"-.6rem"} fontSize={".8rem"}>
                    R$
                  </Text>
                  {props.state.loadingValor ? (
                    <img
                      width={50}
                      height={50}
                      style={{ position: "relative", top: "-10px" }}
                      alt="green-loading"
                      src={greenLoading}
                    />
                  ) : (
                    <Heading
                      m={"0"}
                      fontSize={mobileView ? "70px" : "40px"}
                      margin={1}
                      fontFamily="Open Sans"
                      mt="-17px"
                    >
                      {props.state.preco_home.toString().replace(".", ",")}
                    </Heading>
                  )}
                  <Text m={"0"} mt={"-.6rem"} fontSize={".8rem"}>
                    unidade
                  </Text>
                </Flex>
                <Flex justify="space-around" paddingInline={"15px"}>
                  <Dots>
                    <Flex w={"full"} alignItems={"center"} justifyContent={"center"} gap={"1.5rem"}>
                      <Text fontFamily="Open Sans" color="#FF4F00" fontWeight={"bold"} fontSize={"1.2rem"} mb={0}>
                        Total
                      </Text>
                      <Text
                        ml="-10px"
                        fontFamily="Open Sans"
                        fontWeight={"bold"}
                        fontSize={"1.2rem"}
                        mb={0}
                        letterSpacing={"-1px"}
                      >
                        {parseFloat(preco_home_string * props.state.quantidade_selecionada).toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </Text>
                    </Flex>
                  </Dots>
                </Flex>

                {/* <PaymentMethods totalPedido={preco_home_string * props.state.quantidade_selecionada} /> */}

                <Center paddingInline={"15px"}>
                  <Flex
                    alignItems={"center"}
                    gap={3}
                    position={"relative"}
                    overflow={"hidden"}
                    justifyContent={"center"}
                  >
                    <Flex gap={1} mb={".8rem"}>
                      {[...Array(55)].map((_, index) => (
                        <Flex key={index} w={"5px"} h={"1px"} bgColor={"#cecece"} />
                      ))}
                    </Flex>
                  </Flex>
                </Center>

                <ComprouGanhou valor={preco_home_string * props.state.quantidade_selecionada} />

                <Center paddingInline={".8rem"}>
                  <ButtonPDFPadrao
                    mt={"1rem"}
                    transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                    bgColor="#FF4F00"
                    _hover={{ bgColor: "#FF4F00", opacity: "0.8" }}
                    _active={{ bgColor: "#FF4F00", transform: "scale(0.90)" }}
                    boxShadow="none !important"
                    color="white"
                    fontSize={"1.1rem"}
                    w={"100%"}
                    fontWeight="normal"
                    letterSpacing="1px"
                    borderRadius={"35px"}
                    onClick={() => handleAddToCart()}
                    // onClick={() => props.addProdutoCarrinho()}
                  >
                    ADICIONAR AO CARRINHO
                  </ButtonPDFPadrao>
                </Center>
                <Center paddingInline={".8rem"}>
                  <ButtonPDFPadrao
                    mt={"1rem"}
                    transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                    color="#FF4F00"
                    bgColor="#fff"
                    _hover={{ bgColor: "#fff", opacity: "0.8" }}
                    _active={{ bgColor: "#fff", transform: "scale(0.90)" }}
                    boxShadow="none !important"
                    fontSize={"1.1rem"}
                    w={"100%"}
                    border="1px solid #FF4F00"
                    fontWeight="normal"
                    letterSpacing="1px"
                    borderRadius={"35px"}
                    // onClick={() => handleAddToCart()}
                    onClick={() => OpenFormOrcamento()}
                    // onClick={() => props.addProdutoCarrinho()}
                  >
                    BAIXAR ORÇAMENTO
                  </ButtonPDFPadrao>
                </Center>
                {/* {props.state.quantidade_selecionada <= 1000 ? <Text position='relative' top='10px' textAlign='center' fontSize='9px'>valor sujeito a alteração mediante a quantidade de produtos.</Text> : <></>} */}
              </>
            )}
          </ContainerBoxOrcamentoRapido>
        )}
        <Collapse in={isOpen} animateOpacity>
          {loading ? (
            <Center
              pt="15px"
              borderRadius="5px"
              bgColor="white"
              mb="15px"
              w={mobileView ? "400px" : "320px"}
              h="400px"
              position="relative"
            >
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color={"#58bc03"}
                size="md"
                position={"relative"}
                mx="auto"
              />
            </Center>
          ) : (
            <BoxFormularioOrcamento rounded="md" shadow="md">
              <Box pl="15px" h="50px">
                <Text fontSize="18px" mt="5px">
                  Preencha os dados abaixo e pronto, <strong>baixe seu orçamento</strong>
                </Text>
              </Box>
              <VStack spacing={3} align="stretch" mt="25px" w="90%" mx="auto">
                <ReactInputMask
                  placeholder="* CPF | CNPJ"
                  value={cpfcnpjParceiro}
                  onChange={(e) => {
                    setCPFCNPJParceiro(e.target.value)
                    handleChangeCPFCNPJ(e.target.value)
                  }}
                  onBlur={(e) => {
                    handleValue(e.target.value)
                  }}
                  style={{
                    backgroundColor: "transparent",
                    color: "#000",
                    height: "40px",
                    border: "0.3px solid rgb(0,0,0,0.1)",
                    borderRadius: "5px",
                    paddingLeft: "15px",
                    outline: "none",
                  }}
                  mask={maskCPFCNPJ}
                  maskChar=""
                />

                <ReactInputMask
                  placeholder="* Nome"
                  value={nomeParceiro}
                  onChange={(e) => setNomeParceiro(e.target.value)}
                  style={{
                    backgroundColor: "transparent",
                    color: "#000",
                    height: "40px",
                    border: "0.3px solid rgb(0,0,0,0.1)",
                    borderRadius: "5px",
                    paddingLeft: "15px",
                    outline: "none",
                  }}
                />

                {require_razao ? (
                  <ReactInputMaskRazaoSocial
                    require_razao={require_razao}
                    placeholder="* Razão social"
                    onChange={(e) => setRazaoSocialParceiro(e.target.value)}
                    value={razaoFormatted}
                  />
                ) : (
                  <></>
                )}

                <ReactInputMask
                  placeholder="* Telefone"
                  value={telefoneParceiro}
                  onChange={(e) => {
                    setTelefoneParceiro(e.target.value)
                    handleTelefoneForm(e.target.value)
                  }}
                  style={{
                    backgroundColor: "transparent",
                    color: "#000",
                    height: "40px",
                    border: "0.3px solid rgb(0,0,0,0.1)",
                    borderRadius: "5px",
                    paddingLeft: "15px",
                    outline: "none",
                  }}
                  mask={maskTelefone}
                  maskChar=""
                />

                <ReactInputMask
                  placeholder="* E-mail"
                  value={emailParceiro}
                  onChange={(e) => setEmailParceiro(e.target.value)}
                  style={{
                    backgroundColor: "transparent",
                    color: "#000",
                    height: "40px",
                    border: "0.3px solid rgb(0,0,0,0.1)",
                    borderRadius: "5px",
                    paddingLeft: "15px",
                    outline: "none",
                  }}
                />
              </VStack>
              <Text fontFamily="Akrobat" pl="15px" w="300px" mt="30px" fontSize="11px" color="#919191">
                Ao enviar este formulário, eu declaro que aceito compartilhar minhas informações pessoais e compreendo
                que esses dados estão sujeitos à Política de Privacidade do Google.
              </Text>
              <Flex boxShadow="none !important" pl="15px" h="25px">
                <Checkbox
                  isChecked={!acceptNotification}
                  onChange={(e) => setAcceptNotification(!e.target.checked)}
                  boxShadow="none !important"
                  iconColor="#7fbc03"
                  borderColor="gray"
                  colorScheme="white"
                  iconSize="1rem"
                >
                  Aceito receber notificações.
                </Checkbox>
              </Flex>
              {isOpen ? (
                <Center
                  fontFamily="Akrobat"
                  borderRadius="5px"
                  mb={mobileView ? "15px" : "0"}
                  h={mobileView ? "auto" : "70px"}
                  bgColor="white"
                  paddingInline="15px"
                  mt={".5rem"}
                >
                  <Button
                    w={"100%"}
                    fontSize={"20px"}
                    letterSpacing={"0.1rem"}
                    fontWeight={"normal"}
                    paddingBlock={"1.5rem"}
                    bgColor="#7fbc03"
                    transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                    _hover={{
                      bgColor: "#95C620",
                      opacity: "0.8",
                    }}
                    _active={{ bgColor: "#95C620", transform: "scale(0.90)" }}
                    _disabled={{ bgColor: "#CFCFCF", color: "#9B9B9B", pointerEvents: "none" }} // adiciona pointerEvents: "none" quando o botão estiver desabilitado
                    borderRadius="25px"
                    color="white"
                    boxShadow="none !important"
                    onClick={() => gerarOrcamento()}
                    isDisabled={acceptNotification}
                    isLoading={props.state.loading_orcamento_pdf ? true : false}
                    pointerEvents={acceptNotification ? "none" : "auto"} // adiciona pointerEvents: "auto" quando o botão estiver habilitado
                  >
                    BAIXAR
                  </Button>
                </Center>
              ) : (
                <Center fontFamily="Akrobat" borderRadius="5px" mt="0px" h="90px" bgColor="white">
                  {buttonPDF ? (
                    <Tooltip
                      hasArrow
                      label="Finalize o passo a passo para baixar seu PDF"
                      bg="#FF4F00"
                      placement="bottom"
                      color="white"
                      shouldWrapChildren
                    >
                      <ButtonPDFPadrao
                        isDisabled
                        bgColor="#fbeee3"
                        color="#FF4F00"
                        _hover={{ bgColor: "#fbeee3", opacity: "0.8" }}
                        _active={{ bgColor: "#fbeee3" }}
                        rightIcon={<VscFilePdf size={mobileView ? "40px" : "30px"} bgColor="white" />}
                        boxShadow="none !important"
                        onClick={
                          mobileView
                            ? () => {
                                onToggle()
                                window.scrollTo(0, 1500)
                              }
                            : () => {
                                onToggle()
                                window.scrollTo(0, 900)
                              }
                        }
                      >
                        BAIXAR ORÇAMENTO EM
                      </ButtonPDFPadrao>
                    </Tooltip>
                  ) : (
                    <></>
                  )}
                </Center>
              )}
            </BoxFormularioOrcamento>
          )}
        </Collapse>
      </ContainerPdfFlex>
    </ChakraProvider>
  )
})
