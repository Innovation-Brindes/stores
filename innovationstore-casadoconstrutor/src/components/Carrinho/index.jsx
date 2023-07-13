import React, { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import InputMask from "react-input-mask";
import {
  dadosComoNosConheceu,
  dadosParceiro,
  GerarOrcamento,
} from "../../services/api";
import { cor_base_1, cor_base_2 } from "../../services/cores";
import {
  Box,
  Button,
  Center,
  ChakraProvider,
  Flex,
  FormControl,
  IconButton,
  Input,
  Text,
} from "@chakra-ui/react";
import { BsBagPlus, BsPlusSquareDotted } from "react-icons/bs";
import {
  CarrinhoContainer,
  CarrinhoContent,
  CarrinhoContentResumoPedido,
  CarrinhoContentResumoPedidoListaProdutos,
  CarrinhoContentResumoPedidoListaProdutosProduto,
  CarrinhoContentResumoPedidoListaProdutosProdutoContent,
  CarrinhoContentResumoPedidoListaProdutosProdutoContentItem,
  CarrinhoContentResumoPedidoListaProdutosProdutoContentItemCard,
  CarrinhoContentResumoPedidoListaProdutosProdutoContentItemDadosProduto,
  CarrinhoContentResumoPedidoListaProdutosProdutoTitleText,
  CarrinhoContentResumoPedidoListaProdutosProdutoTitleTextNomeProd,
  CarrinhoContentResumoPedidoMaisProdutos,
  CarrinhoContentResumoPedidoNenhumItem,
  CarrinhoContentResumoPedidoNenhumItemContent,
  CarrinhoContentResumoPedidoNenhumItemContentControl,
  CarrinhoContentResumoPedidoNenhumItemContentHeader,
  CarrinhoContentResumoPedidoNenhumItemContentSubtitle,
  CarrinhoContentResumoPedidoNenhumItemContentTitle,
  CarrinhoContentResumoPedidoTitle,
  CarrinhoFinalizacaoContentFormContentBody,
  CarrinhoFinalizacaoContentFormContentBodyBtn,
  CarrinhoFinalizacaoContentFormContentBodyLoading,
  CarrinhoFinalizacaoContentFormContentHeaderTextImg,
  ContainerGridFrete,
  ContainerGridFreteContent,
  ContainerGridFreteContentResumoCarrinho,
  ContainerGridFreteContentResumoCarrinhoContent,
  ContainerGridFreteContentResumoCarrinhoContentCarrinhoFinalizacao,
  ContainerGridFreteContentResumoCarrinhoContentCarrinhoFinalizacaoContent,
  ContainerGridFreteContentResumoCarrinhoContentCarrinhoFinalizacaoContentForm,
  ContainerGridFreteContentResumoCarrinhoContentCarrinhoFinalizacaoContentFormContent,
  ContainerGridFreteContentResumoCarrinhoContentResumo,
  ContainerGridFreteContentResumoCarrinhoValorTotal,
  ContainerGridFreteContentTable,
  ContainerGridFreteContentTableBoxAlert,
  ContainerGridFreteContentTableBoxAlertHeader,
  ContainerGridFreteContentTableBoxAlertLin1,
  ContainerGridFreteContentTableBoxAlertLin2,
  ContainerGridFreteContentTableBoxAlertLin3,
  ContainerGridFreteContentTableBoxAlertLin4,
  ContainerGridFreteHeader,
  ContainerGridFreteHeaderInput,
  ContentCarrinhoFinalizacaoContentFormContentHeader,
  ContentCarrinhoFinalizacaoContentFormContentHeaderText,
  ContentCarrinhoFinalizacaoContentFormContentHeaderTextImg,
  MaisProdutosLine,
  MaisProdutosOpcoes,
  MaisProdutosOpcoesAdd,
  ProdutoContentGridPassosPassoCalculaFrete,
  ProdutoContentGridPassosPassoCalculaFreteContent,
  ProdutoContentGridPassosPassoCalculaFreteContentGrid,
  ProdutoContentGridPassosPassoCalculaFreteContentGridHeader,
  ProdutoContentGridPassosPassoCalculaFreteContentGridHeaderCard,
  ProdutoContentGridPassosPassoCalculaFreteContentGridTransportadora,
  ProdutoContentGridPassosPassoCalculaFreteContentGridTransportadoraBoxAlert,
  ProdutoContentGridPassosPassoCalculaFreteContentHeader,
  ProdutoContentGridPassosPassoCalculaFreteContentHeaderInput,
  PromptLoading,
  TransportadoraLines,
  TransportadoraLinesCardI,
  TransportadoraLinesCardL,
  TransportadoraLinesCardT,
  TransportadoraLinesCardV,
} from "./styles";
import {
  ContentHeaderImgMobile,
  ContentHeaderMobile,
  ContentHeaderTextMobile,
  GridFreteMobile,
  GridFreteTableColBlocoMobile,
  GridFreteTableColBlocoOptionMobile,
  GridFreteTableColBlocoOptionValueMobile,
  GridFreteTableColBlocoSeloClienteRetiraMobile,
  GridFreteTableColBlocoSeloNossoCarroMobile,
  GridFreteTableColMobile,
  GridFreteTableMobile,
} from "./stylesMobile";

import Head from "next/head";
import { NextSeo } from "next-seo";
import FooterSocialMediaComponent from "../Footer/FooterSocialMedia";
import HeaderComponents from "../Header";
import ComponentFrete from "./components/ComponentFrete";
import ComponentForm from "./components/ComponentForm";
import axios from "axios";

// import btnRemove from "../../resources/images/btn_remove.png";
// import loading from "../../resources/images/loading.gif";

const btnRemove = "/images/btn_remove.png";
const loading = "/images/loading.gif";

const maisRapido = "/images/menu/table-mais-rapido.png";
const maisBarato = "/images/menu/table-mais-barato.png";
const clienteRetira = "/images/menu/cliente-retira.png";
const nossoCarro = "/images/menu/nosso-carro.png";
const nossoCarroBanner = "/images/menu/nosso-carro-banner.png";
const greenLoading = "/images/menu/green-loader.gif";
const carrinhoVazio = "/images/menu/carrinho-vazio.png";
const gratisVerde = "/images/menu/gratis.png";
const gratisLaranja = "/images/menu/gratis-laranja.png";
const clienteRetiraBanner = "/images/menu/cliente-retira-banner.png";

const imageForm1 = "/images/menu/image-form-1.png";
const imageForm2 = "/images/menu/image-form-2.png";
const imageForm3 = "/images/menu/image-form-3.png";
const imageForm4 = "/images/menu/image-form-4.png";

const relogioOrcamento = "/images/menu/relogio-carrinho.png";
const loadingOrcamento = "/images/menu/loading-orcamento.gif";

const Importante = "/images/importante.png";
const laranjaFisica = "/images/bg_laranjaFisica.png";
const verdeFisica = "/images/bg_verdeJuridica.png";
const exclamacao = "/images/menu/box-alert.png";
const btnExcluir = "/images/btnExcluir.png";
const ico_retira = "/images/ico_retira.png";

class Carrinho extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pessoa_fisica: true,
      pessoa_juridica: false,
      conheceuSelect: null,
      frete_selecionado: null,
      valor_total_produtos: 0,
      prazo_producao: 0,
      disabled_btn_orcamento: true,
      cotacao_frete: [],
      items: [],

      maskCPFCNPJ: "99.999.999/9999-99",
      maskPhone: "(99) 9999-9999",
      maskCep: "99999-999",

      empresa_parceiro: null,
      cnpj_parceiro: null,
      nome_parceiro: null,
      email_parceiro: null,
      cpf_parceiro: null,
      telefone_parceiro: null,
      celular_parceiro: null,
      observacao: null,
      cpf_cnpj_parceiro: null,

      require_razao: false,

      TelaResumoPedido: true,
      TelaFormaDePagamento: false,
      TelaPagamentoEfetuado: false,

      parceiro_registrado: false,
      carregando_frete: false,
      button_gerar_top: 0,
      clickCep: false,

      gerando_orcamento: false,
      adicionar_mais_produtos: false,
      display_init: 0,

      view_modal: false,
      view_frete: true,

      cep_origem_teste: "",
      cep_destino_teste: "",
      dados_fake: [],
    };
    this.handleScheens = this.handleScheens.bind(this);
    // this.initPagesPagamento = this.initPagesPagamento.bind(this);
  }

  componentDidMount() {
    var self = this;
    setTimeout(() => {
      self.setState({ display_init: 1 });
      window.scrollTo(0, parseInt(350 + 380 * this.state.items.length));
    }, 1000);

    this.getQuantidadeCarrinho();
    // this.getComoConheceu();
    this.setState({
      TelaResumoPedido: true,
      TelaFormaDePagamento: false,
      TelaPagamentoEfetuado: false,
    });

    if (localStorage.getItem("ultimo-frete-calculado")) {
      var dados = JSON.parse(localStorage.getItem("ultimo-frete-calculado"));
      if (dados.cep != "") {
        this.setState({ cep: dados.cep, clickCep: false });
      }
      if (dados.opcao != "") {
        this.setState({ frete_selecionado: dados.opcao });
      }
    }
    localStorage.removeItem("dados-carregados-busca");
  }

  handleScheens(screen, variavel) {
    if (
      screen == "TelaCadastroCliente" &&
      variavel.name == "parceiro-registrado"
    ) {
      this.setState({ parceiro_registrado: variavel.cpfcnpj });
    }

    this.setState({
      TelaConsultaCNPJ: false,
      TelaCadastroCliente: false,
      TelaResumoPedido: false,
      TelaFormaDePagamento: false,
      TelaPagamentoEfetuado: false,
    });

    this.setState({
      [screen]: true,
    });
  }

  handlePessoaF = () => {
    this.setState({
      pessoa_fisica: true,
      pessoa_juridica: false,
    });
  };

  handlePessoaJ = () => {
    this.setState({
      pessoa_fisica: false,
      pessoa_juridica: true,
    });
  };

  handleChangeSelect = (conheceuSelect) => {
    this.setState({ conheceuSelect });
  };

  handleFrom = async (e, field) => {
    this.setState({ [field]: e.target.value });

    if (
      this.state.items.length > 0 &&
      this.state.nome_parceiro != null &&
      this.state.cpf_parceiro != null &&
      this.state.celular_parceiro != null &&
      this.state.email_parceiro != null
    ) {
      this.setState({ disabled_btn_orcamento: false });
    }
  };

  handleCEP = async (e) => {
    this.setState({ cep: e.target.value });
  };

  clickFrete = async (cod, idx) => {
    var elem = document.querySelectorAll("#transportadora-input");
    for (var e of elem) {
      if (e.attributes.data.value == idx && e.attributes.value.value == cod) {
        e.click();
      }
    }
  };

  handleFrete = async (e) => {
    var id_selected = e.target.attributes.data.value;
    var elem = document.querySelectorAll("#transportadora-input");

    if (e.target.value == "GRÁTIS") {
      var value = "R$ 0,00";
    } else {
      var value = e.target.value;
    }

    await this.setState({ frete_selecionado: value });

    for (var e of elem) {
      if (id_selected !== e.attributes.data.value) {
        e.checked = false;
      } else {
        e.checked = true;
      }
    }
  };

  deleteItem = async (hash_prod) => {
    localStorage.removeItem(hash_prod);
    this.getQuantidadeCarrinho();
  };

  ifnull = (a, b) => {
    if (a === undefined || a === null) {
      return b;
    } else {
      return a;
    }
  };

  getCotacaoBackend = async (e) => {
    e.preventDefault();
    const params = [];
    const arrayParams = [];

    this.state.items.map((data) => {
      params.push({
        peso: parseFloat(data.cubagem.peso.valor.replace(",", ".")),
        altura: parseFloat(data.cubagem.altura.valor.replace(",", ".")),
        largura: parseFloat(data.cubagem.largura.valor.replace(",", ".")),
        comprimento: parseFloat(
          data.cubagem.comprimento.valor.replace(",", ".")
        ),
        tipo: "C",
        valor: parseFloat(data.valor_unitario.replace(",", ".")),
      });
    });

    // const arr = params.map(function (obj) {
    //   return [
    //     obj.peso,
    //     obj.altura,
    //     obj.largura,
    //     obj.comprimento,
    //     obj.tipo,
    //     obj.valor,
    //   ];
    // });

    //colocar cada objeto de dentro do params em um array

    for (let i = 0; i < params.length; i++) {
      arrayParams.push(params[i]);
    }

    const sendDataBackend = {
      cep_origem: this.state.cep_origem_teste,
      // cep_destino: this.state.cep.replaceAll("-", "").replaceAll(".", ""),
      cep_destino: this.state.cep_destino_teste,
      dados_produto: arrayParams,
    };

    const response = await axios.post(
      "https://api.innovationbrindes.com.br/api/site/v2/pedido/consulta-frete-api",
      sendDataBackend
    );

    this.setState({ dados_fake: response.data });
  };

  getCotacaoCargoBR = async () => {
    if (this.state.cep.replaceAll("-", "").replaceAll(".", "").length == 8) {
      await this.setState({ carregando_frete: true, clickCep: true });

      localStorage.setItem(
        "ultimo-frete-calculado",
        JSON.stringify({ cep: this.state.cep, opcao: null })
      );

      var cep = this.state.cep.replaceAll(".", "");
      cep = cep.replaceAll("-", "");
      cep = cep.replaceAll(" ", "");

      var produto = 1;
      this.state.items.map((data) => {
        if (parseInt(data.prazo) > produto) {
          produto = parseInt(data.prazo);
        }
      });
      this.setState({ prazo_producao: produto });

      var volumes = [];
      this.state.items.map((data) => {
        if (data.ad_embalagem == null) {
          volumes.push({
            width: parseInt(data.cubagem.largura.valor) / 100,
            height: parseInt(data.cubagem.altura.valor) / 100,
            length: parseInt(data.cubagem.comprimento.valor) / 100,
            weight:
              parseFloat(data.cubagem.peso.valor) == 0
                ? 1
                : parseFloat(data.cubagem.peso.valor),
            value:
              Math.round(
                (parseFloat(data.valor_total) /
                  parseInt(data.cubagem.qtdcaixa.valor)) *
                  100
              ) / 100,
            amount: parseInt(data.cubagem.qtdcaixa.valor),
            object_types: ["sobconsulta"],
          });
        } else {
          volumes.push({
            width: parseInt(data.cubagem_embalagem[1].valor) / 100,
            height: parseInt(data.cubagem_embalagem[0].valor) / 100,
            length: parseInt(data.cubagem_embalagem[2].valor) / 100,
            weight:
              parseFloat(data.cubagem_embalagem[3].valor) == 0
                ? 1
                : parseFloat(data.cubagem_embalagem[3].valor),
            value:
              Math.round(
                ((parseFloat(data.valor_total) +
                  parseFloat(data.valor_total_embalagem)) /
                  parseInt(data.cubagem_embalagem[4].valor)) *
                  100
              ) / 100,
            amount: parseInt(data.cubagem_embalagem[4].valor),
            object_types: ["sobconsulta"],
          });
        }
      });

      if (cep.length == 8) {
        // var CEP_API = await fetch(`https://ws.apicep.com/cep/`+cep+`.json`);
        try {
          var CEP_API = await fetch(
            `https://viacep.com.br/ws/${cep.trim()}/json/`
          );
          var CEP_API_REST = await CEP_API.json();

          this.setState({
            estado_cep: CEP_API_REST.uf,
            cidade_cep: CEP_API_REST.localidade,
            bairro: CEP_API_REST.bairro,
            rua: CEP_API_REST.logradouro,
          });
        } catch (error) {
          var CEP_API = await fetch(
            `https://ws.apicep.com/cep/${cep.trim()}.json`
          );
          var CEP_API_REST = await CEP_API.json();

          this.setState({
            estado_cep: CEP_API_REST.state,
            cidade_cep: CEP_API_REST.city,
          });
        }

        if (cep != "") {
          var myInit = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              username: "rodrigo@innovationbrindes.com.br",
              password: "123456",
            }),
            cors: "none",
            cache: "default",
          };

          var CARGO_API = await fetch(
            `https://api.cargobr.com/v1/auth/`,
            myInit
          );
          var CARGO_API_REST = await CARGO_API.json();

          if (CARGO_API_REST.access_token != "") {
            var myInit = {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + CARGO_API_REST.access_token,
              },
              body: JSON.stringify({
                origin_zipcode: "02285020",
                destination_zipcode: cep,
                volumes: volumes,
              }),
              cors: "none",
              cache: "default",
            };

            var CARGO_TRANS_API = await fetch(
              `https://api.cargobr.com/v1/freights/quotations/`,
              myInit
            );
            var CARGO_TRANS_API_REST = await CARGO_TRANS_API.json();

            if (
              CARGO_TRANS_API_REST.error != undefined &&
              CARGO_TRANS_API_REST.error == "validation_error"
            ) {
              alert("CEP inválido");
              await this.setState({
                carregando_frete: false,
                cotacao_frete_rapido: undefined,
                cotacao_frete_rapido: undefined,
                frete_texto: null,
                valor_frete: null,
              });
              return false;
            }
            var cotacao = [];
            for (var transportadora of CARGO_TRANS_API_REST.options) {
              cotacao.push({
                name: transportadora.company.name,
                max: transportadora.delivery_time.max + 1,
                min: transportadora.delivery_time.min + 1,
                price: parseFloat(transportadora.price) * 1.35,
              });
            }

            cotacao.sort(function (a, b) {
              if (a.price > b.price) {
                return 1;
              }
              if (a.price < b.price) {
                return -1;
              }
            });

            this.setState({ cotacao_frete: cotacao });

            this.setState({ cotacao_frete_barato: cotacao[0] });

            cotacao.sort(function (a, b) {
              if (a.max > b.max) {
                return 1;
              }
              if (a.max < b.max) {
                return -1;
              }
            });

            this.setState({ cotacao_frete_rapido: cotacao[0] });
          }
        }
      }

      await this.setState({ carregando_frete: false });

      window.scrollTo(0, parseInt(330 + 280 * this.state.items.length));

      // if (
      //   this.state.frete_selecionado != "" &&
      //   this.state.frete_selecionado != undefined
      // ) {
      //   await document.getElementById(this.state.frete_selecionado).click();
      // }

      await this.setState({ carregando_frete: false });
    } else {
      await this.setState({
        carregando_frete: false,
        cotacao_frete_rapido: undefined,
        cotacao_frete_rapido: undefined,
        frete_texto: null,
        valor_frete: null,
      });
      alert("CEP inválido");
    }
  };

  getQuantidadeCarrinho = async () => {
    var produtos = [];
    var valor_total_produtos = [];
    var valor_total_embalagem = [];
    for (var i in localStorage) {
      if (i.indexOf("produto") != -1) {
        if (
          JSON.parse(localStorage[i]).ad_embalagem != null &&
          JSON.parse(localStorage[i]).valor_total_embalagem == undefined
        ) {
          localStorage.removeItem(
            "produto_" + JSON.parse(localStorage[i]).codprod
          );
        } else {
          produtos.push(JSON.parse(localStorage[i]));
          valor_total_produtos.push(JSON.parse(localStorage[i]).valor_total);
          valor_total_embalagem.push(
            JSON.parse(localStorage[i]).valor_total_embalagem
          );
        }
      }
    }

    var valorTotalProdutos = 0;
    for (var v in valor_total_produtos) {
      valorTotalProdutos =
        valorTotalProdutos +
        parseFloat(valor_total_produtos[v].replace(".", "").replace(",", "."));
    }
    var valorTotalEmbalagem = 0;
    for (var v in valor_total_embalagem) {
      if (valor_total_embalagem[v] != 0) {
        valorTotalEmbalagem =
          valorTotalEmbalagem +
          parseFloat(
            valor_total_embalagem[v].replace(".", "").replace(",", ".")
          );
      }
    }
    this.setState({
      valor_total_produtos: valorTotalProdutos + valorTotalEmbalagem,
    });

    await this.setState({ items: produtos });
  };

  sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if (new Date().getTime() - start > milliseconds) {
        break;
      }
    }
  }

  validaTelefone(val) {
    val = val
      .replaceAll("(", "")
      .replaceAll(")", "")
      .replaceAll(" ", "")
      .replaceAll("-", "")
      .trim();
    if (val.length == 11) {
      return true;
    } else if (val.length == 10) {
      return true;
    } else {
      return false;
    }
  }

  validaCpfCnpj(val) {
    if (val.length == 14) {
      var cpf = val.trim();

      cpf = cpf.replace(/\./g, "");
      cpf = cpf.replace("-", "");
      cpf = cpf.split("");

      var v1 = 0;
      var v2 = 0;
      var aux = false;

      for (var i = 1; cpf.length > i; i++) {
        if (cpf[i - 1] != cpf[i]) {
          aux = true;
        }
      }

      if (aux == false) {
        return false;
      }

      for (var i = 0, p = 10; cpf.length - 2 > i; i++, p--) {
        v1 += cpf[i] * p;
      }

      v1 = (v1 * 10) % 11;

      if (v1 == 10) {
        v1 = 0;
      }

      if (v1 != cpf[9]) {
        return false;
      }

      for (var i = 0, p = 11; cpf.length - 1 > i; i++, p--) {
        v2 += cpf[i] * p;
      }

      v2 = (v2 * 10) % 11;

      if (v2 == 10) {
        v2 = 0;
      }

      if (v2 != cpf[10]) {
        return false;
      } else {
        return true;
      }
    } else if (val.length == 18) {
      var cnpj = val.trim();

      cnpj = cnpj.replace(/\./g, "");
      cnpj = cnpj.replace("-", "");
      cnpj = cnpj.replace("/", "");
      cnpj = cnpj.split("");

      var v1 = 0;
      var v2 = 0;
      var aux = false;

      for (var i = 1; cnpj.length > i; i++) {
        if (cnpj[i - 1] != cnpj[i]) {
          aux = true;
        }
      }

      if (aux == false) {
        return false;
      }

      for (var i = 0, p1 = 5, p2 = 13; cnpj.length - 2 > i; i++, p1--, p2--) {
        if (p1 >= 2) {
          v1 += cnpj[i] * p1;
        } else {
          v1 += cnpj[i] * p2;
        }
      }

      v1 = v1 % 11;

      if (v1 < 2) {
        v1 = 0;
      } else {
        v1 = 11 - v1;
      }

      if (v1 != cnpj[12]) {
        return false;
      }

      for (var i = 0, p1 = 6, p2 = 14; cnpj.length - 1 > i; i++, p1--, p2--) {
        if (p1 >= 2) {
          v2 += cnpj[i] * p1;
        } else {
          v2 += cnpj[i] * p2;
        }
      }

      v2 = v2 % 11;

      if (v2 < 2) {
        v2 = 0;
      } else {
        v2 = 11 - v2;
      }

      if (v2 != cnpj[13]) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }

  gerarOrcamento = async (
    cpf_cnpj_parceiro,
    nome_parceiro,
    empresa_parceiro,
    telefone_parceiro,
    email_parceiro
  ) => {
    var post = [];
    var carrinho = [];

    var sequencia = 1;
    for (var prod of this.state.items) {
      if (
        prod.ad_embalagem != "" &&
        prod.ad_embalagem != null &&
        prod.ad_embalagem != undefined
      ) {
        var rand = function () {
          return Math.random().toString(36).substr(2); // remove `0.`
        };

        var token = rand() + rand();
      } else {
        var token = "";
      }

      carrinho.push({
        sequencia: parseInt(sequencia),
        codigo_produto: parseInt(prod.codprod),
        quantidade_produto: prod.quantidade,
        valor_unitario: parseFloat(prod.valor_unitario.replaceAll(",", ".")),
        valor_total: parseFloat(prod.valor_total.replaceAll(",", ".")),
        prazo_entrega: parseInt(prod.prazo),
        numero_impressao: parseInt(prod.tipo_gravacao.cod),
        cor_produto: parseInt(prod.cor_produto.cod),
        batidas: parseInt(prod.batidas),
        frete_site: this.state.frete_texto,
        token_embalagem: token,
      });
      sequencia++;

      if (
        prod.ad_embalagem != "" &&
        prod.ad_embalagem != null &&
        prod.ad_embalagem != undefined
      ) {
        if (
          parseInt(prod.codigo_impressao_embalagem) != 0 &&
          !isNaN(parseInt(prod.codigo_impressao_embalagem))
        ) {
          carrinho.push({
            sequencia: parseInt(sequencia),
            codigo_produto: parseInt(prod.ad_embalagem),
            quantidade_produto: prod.quantidade,
            valor_unitario: parseFloat(
              prod.valor_unitario_embalagem.replaceAll(",", ".")
            ),
            valor_total: parseFloat(
              prod.valor_total_embalagem.replaceAll(",", ".")
            ),
            prazo_entrega: parseInt(prod.prazo),
            numero_impressao: parseInt(prod.codigo_impressao_embalagem),
            cor_produto: parseInt(prod.cor_embalagem),
            batidas: 1,
            frete_site: this.state.frete_texto,
            token_embalagem: token,
          });
          sequencia++;
        }
      }
    }

    post.push({
      nome_parceiro: nome_parceiro,
      razao_social: empresa_parceiro,
      email_parceiro: email_parceiro,
      telefone_parceiro: telefone_parceiro
        .replaceAll("(", "")
        .replaceAll(")", "")
        .replaceAll(" ", "")
        .replaceAll("-", "")
        .trim(),
      observacao: "",
      cpf_cnpj_parceiro: cpf_cnpj_parceiro
        .replaceAll(".", "")
        .replaceAll("/", "")
        .replaceAll("-", "")
        .trim(),
      carrinho: carrinho,
    });

    const response = await GerarOrcamento.post("", post[0]);
    var data = response.data;

    if (data.RESULT) {
      for (var i in localStorage) {
        if (i.indexOf("produto") != -1) {
          localStorage.removeItem(
            "produto_" + JSON.parse(localStorage[i]).codprod
          );
        }
      }
      window.location.href = "/sucesso";
    } else {
      alert(
        "Houve um problema no processamento do seu orçamento. Por favor atualize a página e tente novamente."
      );
    }
  };

  verificaLogin = async () => {
    if (localStorage.getItem("authentication_token") == null) {
      window.location.href = "/login";
    }
  };

  pressEnter = async (e) => {
    if (e.key == "Enter") {
      if (this.state.cep.replaceAll("-", "").replaceAll(".", "").length == 8) {
        this.getCotacaoCargoBR();
      } else {
        await this.setState({
          carregando_frete: false,
          cotacao_frete_rapido: undefined,
          cotacao_frete_rapido: undefined,
          frete_texto: null,
          valor_frete: null,
        });
        alert("CEP inválido");
      }
    }
  };

  selectFrete = async (e) => {
    var valor = JSON.parse(e.target.attributes.data.value).valor.toLocaleString(
      "pt-BR",
      { style: "currency", currency: "BRL" }
    );
    var prazo = JSON.parse(e.target.attributes.data.value).prazo_entrega;
    var nome = JSON.parse(e.target.attributes.data.value).nome;

    localStorage.setItem(
      "ultimo-frete-calculado",
      JSON.stringify({ cep: this.state.cep, opcao: null })
    );

    var frete_texto =
      "Transportadora:" +
      nome +
      ",prazo de entrega:" +
      prazo +
      ",preço:" +
      valor;

    await this.setState({
      frete_selecionado: e.target.value,
      valor_frete: valor,
      prazo_frete: prazo,
      frete_texto: frete_texto,
    });

    if (!this.state.carregando_frete) {
      window.scrollTo(0, parseInt(890 + 400 * this.state.items.length));
    }
  };

  clickLoading = async (e) => {
    this.setState({ gerando_orcamento: true });
    // document.getElementById("prompt-loading").style.display = "block";
    // document.getElementsByTagName("body")[0].style.overflowY = "hidden";
  };

  hiddenLoading = async (e) => {
    document.getElementById("prompt-loading").style.display = "none";
    document.getElementsByTagName("body")[0].style.overflowY = "visible";
    document.getElementsByTagName("body")[0].style.overflowX = "hidden";
  };

  handleChangeCPFCNPJ(value) {
    var format_data = value.replaceAll(".", "");
    var format_data = format_data.replaceAll("-", "");
    var format_data = format_data.replaceAll("/", "");
    if (format_data.length > 11) {
      this.setState({ maskCPFCNPJ: "99.999.999/9999-99", require_razao: true });
    } else if (format_data.length <= 11) {
      this.setState({ maskCPFCNPJ: "999.999.999-999", require_razao: false });
    }
  }

  handleTelefoneForm(value) {
    var format_data = value.replaceAll("(", "");
    var format_data = format_data.replaceAll(")", "");
    var format_data = format_data.replaceAll("-", "");
    var format_data = format_data.replaceAll(" ", "");

    if (format_data.length > 10) {
      this.setState({ maskPhone: "(99) 9 9999-9999" });
    } else if (format_data.length <= 10) {
      this.setState({ maskPhone: "(99) 9999-99999" });
    }
  }

  changeCPFCNPJForm(e) {
    this.setState({ cpf_cnpj_parceiro: e.target.value });
  }

  changeNomeForm(e) {
    this.setState({ nome_parceiro: e.target.value });
  }

  changeEmpresaForm(e) {
    this.setState({ empresa_parceiro: e.target.value });
  }

  changeTelefoneForm(e) {
    this.setState({ telefone_parceiro: e.target.value });
  }

  changeEmailForm(e) {
    this.setState({ email_parceiro: e.target.value });
  }

  render() {
    // if (screen.width < 640 || screen.height < 480) {
    //     window.location.href = "https://innovationbrindes.com";
    // } else if (screen.width < 1025 || screen.height < 700) {
    //     window.location.href = "https://innovationbrindes.com";
    // }else{
    const td_style = { width: "142px" };

    return (
      <ChakraProvider>
        <Head>
          {/* <link rel="alternate" href={`https://innovationbrindes.com.br/sucesso`} hreflang="pt"/> */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PXQHD6F')`,
            }}
          ></script>
        </Head>
        <NextSeo
          title={`${
            this.state.items.length > 0
              ? `${this.state.items.length} Itens em seu carrinho. `
              : ``
          }Innovation Brindes a maior empresa de Brindes Personalizados Promocionais`}
          description={`Sucesso, Brindes, Brindes Personalizados, Brindes Promocionais, Brindes Corporativos, Brindes Ecológicos, Personalizados, Innovation Brindes`}
          keywords={`Sucesso, Brindes, Brindes Personalizados, Personalizados, Brindes Promocionais, Promocionais, Empresa de Brindes, Brindes Corporativos, Chaveiros Personalizados, Squeeze Personalizado, Canetas Personalizadas, Canetas Para Brindes, Caneta Personalizada, Canetas Promocionais, Produtos Promocionais, Brindes Para Eventos, Carregador Celular Personalizado, Power Bank Personalizado, Espelho Personalizado, Brindes Dia Das Mães, Brindes Dia Dos Pais, Brindes Dia Da Mulher, Brindes Para o Final Do Ano, Brindes Para Funcionários, Confecção Promocional`}
          canonical={`https://innovationbrindes.com.br/sucesso`}
          openGraph={{}}
          additionalMetaTags={[
            {
              property: "google-site-verification",
              content: "LbWjsXZYmAB2-2Pte2ynHh04tiGVdXXLsyOOGjHZQYs",
            },
            {
              name: "msvalidate.01",
              content: "7D236B682E6D1FAB048CBF1C65790B63",
            },
            {
              httpEquiv: "Content-Type",
              content: "text/html; charset=utf-8",
            },
            {
              name: "viewport",
              content: "width=device-width, initial-scale=1",
            },
            {
              name: "shareaholic:site_name",
              content: "Innovation Brindes",
            },
            {
              name: "shareaholic:language",
              content: "pt-BR",
            },
            {
              name: "Publisher",
              content:
                "Innovation Brindes a maior empresa de Brindes Personalizados Promocionais",
            },
            {
              name: "Designer",
              content:
                "Innovation Brindes a maior empresa de Brindes Personalizados Promocionais",
            },
            {
              name: "Abstract",
              content:
                "Brindes | Brinde | Brindes Baratos | Brindes Promocionais | Brindes Personalizados | Brinde Promocional | Empresa de Brindes | Comprar Brindes | Brindes Empresas",
            },
            {
              name: "robots",
              content: "Index, follow, all",
            },
            {
              name: "Googlebot",
              content: "Index, follow, all",
            },
            {
              name: "MSNBot",
              content: "Index, follow, all",
            },
            {
              name: "InktomiSlurp",
              content: "Index, follow, all",
            },
            {
              name: "Unknownrobot",
              content: "Index, follow, all",
            },
            {
              name: "Revisit-After",
              content: "1",
            },
          ]}
        />
        <Box
          style={{
            opacity: this.state.display_init,
            transition: "0.3s",
            minHeight: "100vh",
          }}
        >
          <PromptLoading id="prompt-loading">
            {this.state.items.length > 0 ? (
              <img
                alt="loading"
                style={{
                  position: "relative",
                  top: 700 + 280 * this.state.items.length + "px",
                }}
                src={loading}
              />
            ) : (
              <div></div>
            )}
          </PromptLoading>
          {/* <Header /> */}
          <HeaderComponents />
          <CarrinhoContainer>
            <CarrinhoContent>
              <CarrinhoContentResumoPedido>
                <CarrinhoContentResumoPedidoTitle>
                  <p>
                    <strong>Meu carrinho</strong>
                  </p>
                  {/* <Flex
                    flexDirection={"column"}
                    alignItems="center"
                    justifyContent="center"
                    maxWidth="200px"
                    gap={3}
                  >
                    <Input
                      type="number"
                      placeholder="Digite o CEP Origem"
                      id="cep_origem"
                      name="cep_origem"
                      onChange={(e) =>
                        this.setState({ cep_origem_teste: e.target.value })
                      }
                    />
                    <Input
                      type="number"
                      placeholder="Digite o CEP Destino"
                      id="cep_destino"
                      name="cep_destino"
                      onChange={(e) =>
                        this.setState({ cep_destino_teste: e.target.value })
                      }
                    />
                    <Button
                      m="0 auto"
                      position="relative"
                      zIndex="333"
                      onClick={this.getCotacaoBackend}
                      type="submit"
                    >
                      Teste
                    </Button>

                    {this.state.dados_fake.map((data, idx) => {
                      return (
                        <Box
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: 99999999999999999999,
                            position: "relative",
                            fontSize: "12px",
                          }}
                        >
                          <Text fontSize="12px!important">
                            Valor frete: {data.vlrFrete}
                          </Text>
                          <Text fontSize="12px!important">
                            Transp nome: {data.transp_nome}
                          </Text>
                          <Text fontSize="12px!important">
                            Descrição: {data.descricao}
                          </Text>
                          <Text fontSize="12px!important">
                            Cenpj transp: {data.cnpjTransp}
                          </Text>
                          <Text fontSize="12px!important">
                            dtPrevEnt: {data.dtPrevEnt}
                          </Text>
                          <Text fontSize="12px!important">
                            Serviço: {data.servico}
                          </Text>
                        </Box>
                      );
                    })}
                  </Flex> */}
                </CarrinhoContentResumoPedidoTitle>

                {this.state.items.length > 0 ? (
                  <CarrinhoContentResumoPedidoListaProdutos>
                    {this.state.items.map((data, idx) => {
                      return (
                        <CarrinhoContentResumoPedidoListaProdutosProduto>
                          <Box>
                            <CarrinhoContentResumoPedidoListaProdutosProdutoTitleText>
                              <CarrinhoContentResumoPedidoListaProdutosProdutoTitleTextNomeProd>
                                <a href={data.url_prod}>
                                  <p>{data.nome_prod}</p>
                                </a>
                              </CarrinhoContentResumoPedidoListaProdutosProdutoTitleTextNomeProd>
                              <Box
                                marginTop="80px"
                                right="10px"
                                w="50px"
                                h="50px"
                                cursor="pointer"
                              >
                                <img
                                  style={{
                                    width: "48px",
                                    height: "45px",
                                    position: "relative",
                                    cursor: "pointer",
                                    zIndex: "99",
                                  }}
                                  alt="btnRemove"
                                  src={btnRemove}
                                  onClick={() => this.deleteItem(data.id_hash)}
                                />
                              </Box>
                            </CarrinhoContentResumoPedidoListaProdutosProdutoTitleText>
                          </Box>
                          <CarrinhoContentResumoPedidoListaProdutosProdutoContent>
                            <CarrinhoContentResumoPedidoListaProdutosProdutoContentItem>
                              <CarrinhoContentResumoPedidoListaProdutosProdutoContentItemCard>
                                {data.url_img ? (
                                  <a href={data.url_prod}>
                                    <img
                                      alt="url-img"
                                      src={data.url_img.replace(/2-2/g, "1-1")}
                                    />
                                  </a>
                                ) : (
                                  <></>
                                )}
                              </CarrinhoContentResumoPedidoListaProdutosProdutoContentItemCard>
                            </CarrinhoContentResumoPedidoListaProdutosProdutoContentItem>
                            {window.screen.width < 700 ? (
                              <CarrinhoContentResumoPedidoListaProdutosProdutoContentItem
                                style={{ width: "225px" }}
                              >
                                <CarrinhoContentResumoPedidoListaProdutosProdutoContentItemDadosProduto>
                                  <p>
                                    <strong>Codigo:</strong> {data.referencia}
                                  </p>
                                  <p>
                                    <strong>Número de impressões:</strong>{" "}
                                    {data.batidas}
                                  </p>
                                  <p>
                                    <strong>Cor:</strong>{" "}
                                    {data.cor_produto.desc}
                                  </p>
                                  <p style={{ height: "30px" }}>
                                    <strong>Tipo de Gravação:</strong>{" "}
                                    {data.tipo_gravacao.desc}
                                  </p>
                                  <Box>
                                    <p>
                                      <strong>Quantidade: </strong>{" "}
                                      <strong
                                        style={{
                                          color: cor_base_2,
                                          fontFamily: "Akrobat ExtraBold",
                                        }}
                                      >
                                        {data.quantidade}
                                      </strong>
                                    </p>
                                    <p>
                                      <strong>Valor unitário: </strong>{" "}
                                      <strong
                                        style={{
                                          color: cor_base_2,
                                          fontFamily: "Akrobat ExtraBold",
                                        }}
                                      >
                                        {parseFloat(
                                          data.valor_unitario
                                            .replace(".", "")
                                            .replace(",", ".")
                                        ).toLocaleString("pt-BR", {
                                          style: "currency",
                                          currency: "BRL",
                                        })}
                                      </strong>
                                    </p>
                                    <p>
                                      <strong>Subtotal: </strong>{" "}
                                      <strong
                                        style={{
                                          color: cor_base_2,
                                          fontFamily: "Akrobat ExtraBold",
                                        }}
                                      >
                                        {parseFloat(
                                          data.valor_total
                                            .replace(".", "")
                                            .replace(",", ".")
                                        ).toLocaleString("pt-BR", {
                                          style: "currency",
                                          currency: "BRL",
                                        })}
                                      </strong>
                                    </p>
                                    <p>
                                      <strong>Prazo de produção: </strong>{" "}
                                      <strong
                                        style={{
                                          color: cor_base_2,
                                          fontFamily: "Akrobat ExtraBold",
                                        }}
                                      >
                                        {data.prazo} dias
                                      </strong>
                                    </p>
                                  </Box>
                                  <p
                                    style={
                                      data.ad_embalagem == null
                                        ? { display: "none" }
                                        : this.ifnull(
                                            data.tipo_embalagem,
                                            ""
                                          ) == "Print"
                                        ? { fontSize: "13px" }
                                        : {}
                                    }
                                  >
                                    <strong style={{ fontSize: "15px" }}>
                                      Embalagem:{" "}
                                    </strong>{" "}
                                    {this.ifnull(data.tipo_embalagem, "") ==
                                    "Box"
                                      ? "COLORIDA"
                                      : this.ifnull(data.tipo_embalagem, "") ==
                                        "Print"
                                      ? "COLORIDA + SUA MARCA"
                                      : this.ifnull(data.tipo_embalagem, "") ==
                                        "Plus"
                                      ? "FULL PRINT"
                                      : this.ifnull(data.tipo_embalagem, "")}
                                  </p>
                                  <p
                                    style={
                                      data.ad_embalagem == null
                                        ? { display: "none" }
                                        : {}
                                    }
                                  >
                                    <strong>Valor unitário embalagem: </strong>{" "}
                                    <strong
                                      style={{
                                        color: cor_base_2,
                                        fontFamily: "Akrobat ExtraBold",
                                      }}
                                    >
                                      {data.valor_unitario_embalagem
                                        ? parseFloat(
                                            data.valor_unitario_embalagem
                                              .replace(".", "")
                                              .replace(",", ".")
                                          ).toLocaleString("pt-BR", {
                                            style: "currency",
                                            currency: "BRL",
                                          })
                                        : 0}
                                    </strong>
                                  </p>
                                  <p
                                    style={
                                      data.ad_embalagem == null
                                        ? { display: "none" }
                                        : {}
                                    }
                                  >
                                    <strong>Subtotal embalagem: </strong>{" "}
                                    <strong
                                      style={{
                                        color: cor_base_2,
                                        fontFamily: "Akrobat ExtraBold",
                                      }}
                                    >
                                      {data.valor_total_embalagem
                                        ? parseFloat(
                                            data.valor_total_embalagem
                                              .replace(".", "")
                                              .replace(",", ".")
                                          ).toLocaleString("pt-BR", {
                                            style: "currency",
                                            currency: "BRL",
                                          })
                                        : 0}
                                    </strong>
                                  </p>
                                </CarrinhoContentResumoPedidoListaProdutosProdutoContentItemDadosProduto>
                              </CarrinhoContentResumoPedidoListaProdutosProdutoContentItem>
                            ) : (
                              <div></div>
                            )}

                            {window.screen.width > 750 ? (
                              <CarrinhoContentResumoPedidoListaProdutosProdutoContentItem
                                style={{ width: "225px" }}
                              >
                                <CarrinhoContentResumoPedidoListaProdutosProdutoContentItemDadosProduto>
                                  <p>
                                    <strong>Codigo:</strong> {data.referencia}
                                  </p>
                                  <p>
                                    <strong>Número de impressões:</strong>{" "}
                                    {data.batidas}
                                  </p>
                                  <p>
                                    <strong>Cor:</strong>{" "}
                                    {data.cor_produto.desc}
                                  </p>
                                  <p>
                                    <strong>Tipo de Gravação:</strong>{" "}
                                    {data.tipo_gravacao.desc}
                                  </p>
                                </CarrinhoContentResumoPedidoListaProdutosProdutoContentItemDadosProduto>
                              </CarrinhoContentResumoPedidoListaProdutosProdutoContentItem>
                            ) : (
                              <div></div>
                            )}
                            {window.screen.width > 750 ? (
                              <CarrinhoContentResumoPedidoListaProdutosProdutoContentItem
                                style={{ marginLeft: "1rem", width: "150px" }}
                              >
                                <CarrinhoContentResumoPedidoListaProdutosProdutoContentItemDadosProduto>
                                  <p>
                                    <strong>Quantidade: </strong>{" "}
                                    <strong
                                      style={{
                                        color: cor_base_2,
                                        fontFamily: "Akrobat ExtraBold",
                                      }}
                                    >
                                      {data.quantidade}
                                    </strong>
                                  </p>
                                  <p>
                                    <strong>Valor unitário: </strong>{" "}
                                    <strong
                                      style={{
                                        color: cor_base_2,
                                        fontFamily: "Akrobat ExtraBold",
                                      }}
                                    >
                                      {parseFloat(
                                        data.valor_unitario
                                          .replace(".", "")
                                          .replace(",", ".")
                                      ).toLocaleString("pt-BR", {
                                        style: "currency",
                                        currency: "BRL",
                                      })}
                                    </strong>
                                  </p>
                                  <p>
                                    <strong>Subtotal: </strong>{" "}
                                    <strong
                                      style={{
                                        color: cor_base_2,
                                        fontFamily: "Akrobat ExtraBold",
                                      }}
                                    >
                                      {parseFloat(
                                        data.valor_total
                                          .replace(".", "")
                                          .replace(",", ".")
                                      ).toLocaleString("pt-BR", {
                                        style: "currency",
                                        currency: "BRL",
                                      })}
                                    </strong>
                                  </p>
                                  <p>
                                    <strong>Prazo de produção: </strong>{" "}
                                    <strong
                                      style={{
                                        color: cor_base_2,
                                        fontFamily: "Akrobat ExtraBold",
                                      }}
                                    >
                                      {data.prazo} dias
                                    </strong>
                                  </p>
                                </CarrinhoContentResumoPedidoListaProdutosProdutoContentItemDadosProduto>
                              </CarrinhoContentResumoPedidoListaProdutosProdutoContentItem>
                            ) : (
                              <div></div>
                            )}

                            {window.screen.width > 750 ? (
                              <CarrinhoContentResumoPedidoListaProdutosProdutoContentItem>
                                <CarrinhoContentResumoPedidoListaProdutosProdutoContentItemDadosProduto>
                                  <p
                                    style={
                                      data.ad_embalagem == null
                                        ? { display: "none" }
                                        : this.ifnull(
                                            data.tipo_embalagem,
                                            ""
                                          ) == "Print"
                                        ? { fontSize: "13px" }
                                        : {}
                                    }
                                  >
                                    <strong style={{ fontSize: "15px" }}>
                                      Embalagem:{" "}
                                    </strong>{" "}
                                    {this.ifnull(data.tipo_embalagem, "") ==
                                    "Box"
                                      ? "COLORIDA"
                                      : this.ifnull(data.tipo_embalagem, "") ==
                                        "Print"
                                      ? "COLORIDA + SUA MARCA"
                                      : this.ifnull(data.tipo_embalagem, "") ==
                                        "Plus"
                                      ? "FULL PRINT"
                                      : this.ifnull(data.tipo_embalagem, "")}
                                  </p>
                                  <p
                                    style={
                                      data.ad_embalagem == null
                                        ? { display: "none" }
                                        : {}
                                    }
                                  >
                                    <strong>Valor unitário embalagem: </strong>{" "}
                                    <strong
                                      style={{
                                        color: cor_base_2,
                                        fontFamily: "Akrobat ExtraBold",
                                      }}
                                    >
                                      {data.valor_unitario_embalagem
                                        ? parseFloat(
                                            data.valor_unitario_embalagem
                                              .replace(".", "")
                                              .replace(",", ".")
                                          ).toLocaleString("pt-BR", {
                                            style: "currency",
                                            currency: "BRL",
                                          })
                                        : 0}
                                    </strong>
                                  </p>
                                  <p
                                    style={
                                      data.ad_embalagem == null
                                        ? { display: "none" }
                                        : {}
                                    }
                                  >
                                    <strong>Subtotal embalagem: </strong>{" "}
                                    <strong
                                      style={{
                                        color: cor_base_2,
                                        fontFamily: "Akrobat ExtraBold",
                                      }}
                                    >
                                      {data.valor_total_embalagem
                                        ? parseFloat(
                                            data.valor_total_embalagem
                                              .replace(".", "")
                                              .replace(",", ".")
                                          ).toLocaleString("pt-BR", {
                                            style: "currency",
                                            currency: "BRL",
                                          })
                                        : 0}
                                    </strong>
                                  </p>
                                </CarrinhoContentResumoPedidoListaProdutosProdutoContentItemDadosProduto>
                              </CarrinhoContentResumoPedidoListaProdutosProdutoContentItem>
                            ) : (
                              <div></div>
                            )}
                          </CarrinhoContentResumoPedidoListaProdutosProdutoContent>
                        </CarrinhoContentResumoPedidoListaProdutosProduto>
                      );
                    })}
                  </CarrinhoContentResumoPedidoListaProdutos>
                ) : (
                  <CarrinhoContentResumoPedidoNenhumItem>
                    <CarrinhoContentResumoPedidoNenhumItemContent>
                      <CarrinhoContentResumoPedidoNenhumItemContentHeader>
                        <img alt="carrinho-vazio" src={carrinhoVazio} />
                      </CarrinhoContentResumoPedidoNenhumItemContentHeader>
                      <CarrinhoContentResumoPedidoNenhumItemContentTitle>
                        <h1>Sua cesta está</h1>
                        <h1 style={{ color: cor_base_2 }}>vazia!</h1>
                      </CarrinhoContentResumoPedidoNenhumItemContentTitle>
                      <CarrinhoContentResumoPedidoNenhumItemContentSubtitle>
                        <p>Você ainda não possui itens no seu carrinho</p>
                      </CarrinhoContentResumoPedidoNenhumItemContentSubtitle>
                      <CarrinhoContentResumoPedidoNenhumItemContentControl
                        onClick={() => (window.location.href = "/")}
                      >
                        <button onClick={() => (window.location.href = "/")}>
                          Ver produtos
                        </button>
                      </CarrinhoContentResumoPedidoNenhumItemContentControl>
                    </CarrinhoContentResumoPedidoNenhumItemContent>
                  </CarrinhoContentResumoPedidoNenhumItem>
                )}
              </CarrinhoContentResumoPedido>

              {this.state.adicionar_mais_produtos ? (
                // this.state.items.length > 0 ? (<></>) : (<></>)
                <></>
              ) : (
                <>
                  {this.state.items.length > 0 ? (
                    <ContainerGridFrete>
                      <>
                        {this.state.items.length > 0 ? (
                          <Center w="100%">
                            <Flex
                              fontFamily="Akrobat"
                              justifyContent="space-between"
                              pl="30px"
                              pr="30px"
                              alignItems="center"
                              w={["390px", "390px", "872px", "872px", "872px"]}
                              h="70px"
                              bgColor="white"
                              boxShadow="5px 5px 8px 5px #dbdbdb"
                            >
                              <Flex
                                w={[
                                  "100px",
                                  "100px",
                                  "250px",
                                  "250px",
                                  "250px",
                                ]}
                                cursor="pointer"
                                onClick={() => (window.location.href = "/")}
                                h="30px"
                                ml="20px"
                                mt="20px"
                                alignItems="center"
                                textAlign="center"
                                justifyContent="center"
                              >
                                <IconButton
                                  mt="-17px"
                                  ml={["-40px", "-40px", "0px", "0px", "0px"]}
                                  _hover={{ bgColor: "white" }}
                                  _active={{ bgColor: "white" }}
                                  boxShadow="none !important"
                                  bgColor="white"
                                  size="lg"
                                  fontSize="25px"
                                  icon={<BsPlusSquareDotted color="#ff6b0e" />}
                                />
                                <Text
                                  fontSize={[
                                    "14px",
                                    "14px",
                                    "17px",
                                    "17px",
                                    "17px",
                                  ]}
                                  ml={["-10px", "-10px", "5px", "5px", "5px"]}
                                  color="#ff6b0e"
                                >
                                  <strong>ADICIONAR MAIS PRODUTOS</strong>
                                </Text>
                              </Flex>
                              <Flex
                                mr={["-30px", "-30px", "0px", "0px", "0px"]}
                                w={["230px", "230px", "auto", "auto", "auto"]}
                                mt={["15px", "15px", "5px", "5px", "5px"]}
                                h="30px"
                              >
                                <Text
                                  fontSize={[
                                    "12px",
                                    "12px",
                                    "18px",
                                    "18px",
                                    "18px",
                                  ]}
                                  mr={["5px", "5px", "25px", "25px", "25px"]}
                                >
                                  Valor total dos produtos:
                                </Text>
                                <Text
                                  mr={["-15px", "-15px", "0px", "0px", "0px"]}
                                  letterSpacing="0.03rem"
                                  mt={["-7px", "-7px", "-5px", "-5px", "-5px"]}
                                  fontSize="21px"
                                >
                                  <strong>
                                    {parseFloat(
                                      this.state.valor_total_produtos
                                    ).toLocaleString("pt-BR", {
                                      style: "currency",
                                      currency: "BRL",
                                    })}
                                  </strong>
                                </Text>
                              </Flex>
                            </Flex>
                          </Center>
                        ) : (
                          <></>
                        )}
                        {this.state.view_frete ? (
                          <ComponentFrete
                            setModal={() => {
                              window.scrollTo(0, 3000);
                              this.setState({
                                view_modal: true,
                                view_frete: false,
                              });
                            }}
                            state={this.state}
                            pressEnter={this.pressEnter}
                            handleCEP={this.handleCEP}
                            getCotacaoCargoBR={this.getCotacaoCargoBR}
                            selectFrete={this.selectFrete}
                          />
                        ) : (
                          <></>
                        )}
                      </>
                    </ContainerGridFrete>
                  ) : (
                    <div></div>
                  )}

                  {this.state.items.length > 0 ? (
                    this.state.view_modal ? (
                      <ComponentForm
                        setModal={() =>
                          this.setState({
                            view_modal: false,
                            view_frete: true,
                            frete_selecionado: null,
                          })
                        }
                        loadingOrcamento={loadingOrcamento}
                        relogioOrcamento={relogioOrcamento}
                        handleChangeCPFCNPJ={this.handleChangeCPFCNPJ}
                        handleTelefoneForm={this.handleTelefoneForm}
                        gerarOrcamento={this.gerarOrcamento}
                        state={this.state}
                      />
                    ) : (
                      <></>
                    )
                  ) : (
                    <div></div>
                  )}
                </>
              )}
            </CarrinhoContent>
          </CarrinhoContainer>
          <Footer chat_only={true} />
          <FooterSocialMediaComponent />
        </Box>
      </ChakraProvider>
    );
    // }
  }
}

function PassoCalculaFrete(data) {
  return (
    <ProdutoContentGridPassosPassoCalculaFrete
      style={data.state.cotacao_frete.length == 0 ? { height: "16vw" } : {}}
    >
      <ProdutoContentGridPassosPassoCalculaFreteContent>
        <ProdutoContentGridPassosPassoCalculaFreteContentHeader
          style={data.state.cotacao_frete.length == 0 ? { height: "65%" } : {}}
        >
          <ProdutoContentGridPassosPassoCalculaFreteContentHeaderInput>
            <label>
              <strong>CEP:</strong>
            </label>
            <input
              type="text"
              placeholder="Digite seu CEP"
              onKeyDown={() => data.getCotacaoCargoBR()}
              onChange={(e) => data.handleCEP(e)}
            ></input>
            <button onClick={() => data.getCotacaoCargoBR()}>OK</button>
          </ProdutoContentGridPassosPassoCalculaFreteContentHeaderInput>
        </ProdutoContentGridPassosPassoCalculaFreteContentHeader>
        <ProdutoContentGridPassosPassoCalculaFreteContentGrid
          style={data.state.cotacao_frete.length == 0 ? { height: "270%" } : {}}
        >
          <ProdutoContentGridPassosPassoCalculaFreteContentGridHeader>
            <ProdutoContentGridPassosPassoCalculaFreteContentGridHeaderCard>
              <p>TRANSPORTADORA</p>
            </ProdutoContentGridPassosPassoCalculaFreteContentGridHeaderCard>
            <ProdutoContentGridPassosPassoCalculaFreteContentGridHeaderCard>
              <p style={{ top: "10%" }}>
                PREVISÃO DA
                <br />
                TRANSPORTADORA
              </p>
            </ProdutoContentGridPassosPassoCalculaFreteContentGridHeaderCard>
            <ProdutoContentGridPassosPassoCalculaFreteContentGridHeaderCard>
              <p style={{ top: "10%" }}>
                PRAZO DA
                <br />
                PRODUÇÃO
              </p>
            </ProdutoContentGridPassosPassoCalculaFreteContentGridHeaderCard>
            <ProdutoContentGridPassosPassoCalculaFreteContentGridHeaderCard>
              <p style={{ top: "10%" }}>
                PREVISÃO DE
                <br />
                ENTREGA
              </p>
            </ProdutoContentGridPassosPassoCalculaFreteContentGridHeaderCard>
            <ProdutoContentGridPassosPassoCalculaFreteContentGridHeaderCard
              style={{ backgroundColor: cor_base_2 }}
            >
              <p>VALOR DO FRETE</p>
            </ProdutoContentGridPassosPassoCalculaFreteContentGridHeaderCard>
          </ProdutoContentGridPassosPassoCalculaFreteContentGridHeader>
          <ProdutoContentGridPassosPassoCalculaFreteContentGridTransportadora
            style={
              data.state.cotacao_frete.length == 0 ? { display: "none" } : {}
            }
          >
            {data.state.cotacao_frete.map((cota, idx) => {
              var producao = parseInt(data.state.prazo_producao);
              if (idx < 4) {
                return (
                  <LineFreteTransportadora
                    id={idx}
                    clickFrete={data.clickFrete}
                    handleFrete={data.handleFrete}
                    transportadora={cota.name}
                    previsaoTransportadora={
                      "De " + cota.min + " a " + cota.max + " dias úteis"
                    }
                    prazoProducao={producao + " dias úteis"}
                    previsaoEntrega={
                      "Até " + (producao + cota.max) + " dias úteis"
                    }
                    valor={cota.price.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  />
                );
              } else if (idx == 4) {
                return (
                  <LineFreteTransportadora
                    id={idx}
                    clickFrete={data.clickFrete}
                    handleFrete={data.handleFrete}
                    local={true}
                    transportadora="CLIENTE RETIRA"
                    previsaoTransportadora="0 dia útil"
                    prazoProducao={producao + " dias úteis"}
                    previsaoEntrega={"Até " + producao + " dias úteis"}
                    valor="GRÁTIS"
                  />
                );
              }
            })}

            <ProdutoContentGridPassosPassoCalculaFreteContentGridTransportadoraBoxAlert>
              <img alt="exclamacao" src={exclamacao} />
              <h6>Atenção !</h6>
              <p>
                {" "}
                *Nos comprometemos a produzir seus produtos no prazo solicitado
                em seu orçamento. Não nos responsabilizamos por eventuais
                atrasos na entrega <br />
                de seus produtos quando realizadas por meio de transportadoras
                ou correios.
              </p>
            </ProdutoContentGridPassosPassoCalculaFreteContentGridTransportadoraBoxAlert>
          </ProdutoContentGridPassosPassoCalculaFreteContentGridTransportadora>
        </ProdutoContentGridPassosPassoCalculaFreteContentGrid>
      </ProdutoContentGridPassosPassoCalculaFreteContent>
    </ProdutoContentGridPassosPassoCalculaFrete>
  );
}

function LineFreteTransportadora(data) {
  return (
    <TransportadoraLines>
      {data.local ? (
        <TransportadoraLinesCardL>
          <img alt="ico-retira" src={ico_retira} />
          <p>{data.transportadora}</p>
        </TransportadoraLinesCardL>
      ) : (
        <TransportadoraLinesCardT>
          <p>{data.transportadora}</p>
        </TransportadoraLinesCardT>
      )}

      <TransportadoraLinesCardV>
        <p>
          <strong>{data.previsaoTransportadora}</strong>
        </p>
      </TransportadoraLinesCardV>
      <TransportadoraLinesCardV>
        <p>
          <strong>{data.prazoProducao}</strong>
        </p>
      </TransportadoraLinesCardV>
      <TransportadoraLinesCardV>
        <p>
          <strong>{data.previsaoEntrega}</strong>
        </p>
      </TransportadoraLinesCardV>
      <TransportadoraLinesCardI
        onClick={(e) => data.clickFrete(data.valor, data.id)}
      >
        <input
          id={"transportadora-input"}
          type="radio"
          value={data.valor}
          data={data.id}
          onChange={(e) => data.handleFrete(e)}
        ></input>
        <p>
          <strong>{data.valor}</strong>
        </p>
      </TransportadoraLinesCardI>
    </TransportadoraLines>
  );
}

export default Carrinho;
