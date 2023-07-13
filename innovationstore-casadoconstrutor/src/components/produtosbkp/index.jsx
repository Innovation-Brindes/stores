import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Moment from "moment";
import {
  buscaValorProduto,
  buscaMelhorOfertaProduto,
  dadosProdutosSubcategoria,
  ListaPrazoDeProducao,
  SalvarAvisoProdutoIndisponivel,
  buscaProduto,
} from "../../services/api";
import { AiOutlineClose } from "react-icons/ai";

// import Passos from './Passos';

import { cor_base_1, cor_base_2 } from "../../services/cores";

import { Box, IconButton } from "@chakra-ui/react";
import {
  ContentDetalhesQuantidadeBatidas,
  ContentDetalhesQuantidadeBatidasContent,
  ContentDetalhesQuantidadeBatidasContentDesc,
  ContentDetalhesQuantidadeBatidasContentInputBatidas,
  ContentDetalhesQuantidadeBatidasContentInputBatidasContent,
  ContentDetalhesQuantidadeBatidasContentInputBatidasTitle,
  DadosProdutosContent,
  DadosProdutosContentDetalhesIndisponivel,
  DadosProdutosContentDetalhesIndisponivelContent,
  DadosProdutosContentSlideImg,
  DadosProdutosLoading,
  DadosProdutosOpcoesEmbalagem,
  DadosProdutosOpcoesEmbalagemAvisoEmbalagem,
  DadosProdutosOpcoesEmbalagemAvisoEmbalagemBotaoGratis,
  DadosProdutosOpcoesEmbalagemContentDetalhes,
  DadosProdutosOpcoesEmbalagemContentDetalhesContent,
  DadosProdutosOpcoesEmbalagemContentDetalhesContentDescricao,
  DadosProdutosOpcoesEmbalagemContentDetalhesContentSelecao,
  DadosProdutosOpcoesEmbalagemContentDetalhesContentSelecaoContent,
  DadosProdutosOpcoesEmbalagemContentDetalhesContentSelecaoContentInputSelecao,
  DadosProdutosOpcoesEmbalagemContentDetalhesContentSelecaoContentInputSelecaoContent,
  DadosProdutosOpcoesEmbalagemContentDetalhesContentSelecaoContentInputSelecaoTitle,
  DadosProdutosOpcoesEmbalagemContentDetalhesContentTitle,
  DadosProdutosOpcoesEmbalagemContentVisual,
  DadosProdutosOpcoesEmbalagemContentVisualTitle,
  DadosProdutosOpcoesEmbalagemContentVisualTitleImg,
  DadosProdutosTitle,
  DadosProdutosTitleContent,
  DadosProdutosTitleControl,
  DetalhesConcluir,
  DetalhesConcluirContent,
  DetalhesIndisponivelContentDetalhes,
  DetalhesIndisponivelContentDetalhesCores,
  DetalhesIndisponivelContentDetalhesCoresContent,
  DetalhesIndisponivelContentDetalhesCoresContentCorSelecionada,
  DetalhesIndisponivelContentDetalhesCoresContentEstoqueDisponivel,
  DetalhesIndisponivelContentDetalhesCoresContentTitle,
  DetalhesIndisponivelContentDetalhesCoresGridCores,
  DetalhesIndisponivelContentDetalhesCoresGridCoresCircleIn,
  DetalhesIndisponivelContentDetalhesCoresGridCoresCircleInOff,
  DetalhesIndisponivelContentDetalhesCoresGridCoresCircleOut,
  DetalhesIndisponivelContentDetalhesCoresGridCoresCor,
  DetalhesIndisponivelContentDetalhesGravacao,
  DetalhesIndisponivelContentDetalhesGravacaoContent,
  DetalhesIndisponivelContentDetalhesGravacaoContentDesc,
  DetalhesIndisponivelContentDetalhesGravacaoContentInputGravacao,
  DetalhesIndisponivelContentDetalhesGravacaoContentInputGravacaoContent,
  DetalhesIndisponivelContentDetalhesGravacaoContentInputGravacaoTitle,
  DetalhesIndisponivelContentForm,
  DetalhesIndisponivelContentFormAvise,
  DetalhesIndisponivelContentFormSimilares,
  DetalhesIndisponivelContentHeader,
  DetalhesIndisponivelContentHeaderDesc,
  DetalhesIndisponivelContentHeaderImg,
  DetalhesPrazo,
  DetalhesPrazoContent,
  DetalhesPrazoContentDesc,
  DetalhesPrazoContentInputPrazo,
  DetalhesPrazoContentInputPrazoContent,
  DetalhesPrazoContentInputPrazoContentDesc,
  DetalhesPrazoContentInputPrazoTitle,
  DetalhesQuantidade,
  DetalhesQuantidadeContent,
  DetalhesQuantidadeContentDesc,
  DetalhesQuantidadeContentInputQuantidade,
  DetalhesQuantidadeContentInputQuantidadeContent,
  DetalhesQuantidadeContentInputQuantidadeContentButton,
  DetalhesQuantidadeContentInputQuantidadeContentInput,
  DetalhesQuantidadeContentInputQuantidadeContentLabel,
  DetalhesQuantidadeContentInputQuantidadeTitle,
  DetalhesQuantidadeContentInputQuantidadeTitleSelo,
  DetalhesValor,
  DetalhesValorContent,
  OpcoesEmbalagemContentDetalhesContentCores,
  OpcoesEmbalagemContentDetalhesContentCoresContent,
  OpcoesEmbalagemContentDetalhesContentCoresContentGridCores,
  OpcoesEmbalagemContentDetalhesContentCoresContentGridCoresCor,
  OpcoesEmbalagemContentDetalhesContentCoresContentGridCoresCorCircleIn,
  OpcoesEmbalagemContentDetalhesContentCoresContentGridCoresCorCircleOut,
  OpcoesEmbalagemContentDetalhesContentCoresContentTitle,
  OpcoesEmbalagemContentDetalhesContentQueroCaixa,
  OpcoesEmbalagemContentDetalhesContentValor,
  OpcoesEmbalagensContent,
  OpcoesEmbalagensContentDetalhesMobile,
  OpcoesEmbalagensContentDetalhesMobileContentQueroCaixa,
  OpcoesEmbalagensContentDetalhesMobileQueroCaixa,
  OpcoesEmbalagensContentDetalhesMobileQueroCaixaContentSelecao,
  OpcoesEmbalagensContentDetalhesMobileQueroCaixaContentSelecaoContent,
  OpcoesEmbalagensContentDetalhesMobileQueroCaixaContentSelecaoContentInputSelecao,
  OpcoesEmbalagensContentDetalhesMobileQueroCaixaContentSelecaoContentInputSelecaoContent,
  OpcoesEmbalagensContentDetalhesMobileQueroCaixaContentSelecaoContentInputSelecaoContentValor,
  OpcoesEmbalagensContentDetalhesMobileQueroCaixaContentSelecaoContentInputSelecaoTitle,
  OpcoesEmbalagensContentDetalhesMobileQueroCaixaTitle,
  OpcoesEmbalagensContentDetalhesQueroCaixa,
  PromptProduto,
  PromptProdutoModal,
  PromptProdutoModalClose,
  SiteProduto,
  SiteProdutoContent,
  SiteProdutoContentDadosProdutos,
  SiteProdutoContentDescricaoProduto,
  SiteProdutoContentDescricaoProdutoContent,
  SiteProdutoContentDescricaoProdutoContentDesc,
  SiteProdutoContentDescricaoProdutoContentDimensao,
  SiteProdutoContentMaisOpcoes,
  SiteProdutoContentMaisOpcoesContent,
  SiteProdutoContentMaisOpcoesContentTopo,
  SiteProdutoContentMaisOpcoesContentTopoGrid,
  SiteProdutoContentMaisOpcoesContentTopoGridSlide,
  FooterText,
  FooterTextContent
} from "./styles";
import {
  CardProdCores,
  CardProdCoresGridCores,
  CardProdCoresGridCoresContent,
  CardProdCoresGridCoresContentCor,
  CardProdCoresTitle,
  CardProdDesc,
  CardProdValor,
  CardProdValorContent,
  CategoriaContainerContentGridProdutosProduto,
  CategoriaContainerContentGridProdutosProdutoCardProd,
  CategoriaContainerContentGridProdutosProdutoCardProdImgProd,
  CategoriaContainerContentGridProdutosProdutoTitle,
  GridProdutosProdutoBTNConferir,
  Selo,
  SeloEmbalagem,
} from "../Categoria/styles";
import {
  DescricaoMobile,
  DescricaoContentMobile,
  DescricaoContentDescMobile,
  DescricaoContentDimensaoMobile,
  VisualMobile,
  VisualImgMobile,
  DetalhesMobile,
  DetalhesContentMobile,
  DetalhesContentDescricaoMobile,
  DetalhesContentCoresMobile,
  DetalhesContentCoresContentMobile,
  DetalhesContentCoresContentTitleMobile,
  DetalhesContentCoresContentGridCoresMobile,
  DetalhesContentCoresContentGridCoresCorMobile,
  DetalhesContentCoresContentGridCoresCorCircleOutMobile,
  DetalhesContentCoresContentGridCoresCorCircleInMobile,
  AvisoEmbalagemMobile,
  AvisoEmbalagemContentMobile,
  AvisoEmbalagemContentBtnMobile,
} from "./stylesMobile";

// import selo_indisponivel from "../../resources/images/menu/indisponivel.png";

import Head from 'next/head';
import { NextSeo } from "next-seo";
import FooterSocialMediaComponent from "../Footer/FooterSocialMedia";

const geraorcamentopdv = "/images/menu/gera-orcamento-pdv.jpg";
const greenLoading = "/images/menu/green-loader.gif";

// const maisUltraRapido = '/images/menu/ultrarapido-CONFIGURE.png';
const maisUltraRapido = "/images/menu/ultrarapido-branco.png";
// const maisEconomico = '/images/menu/MAIS-ECONOMICO.png';
const maisEconomico = "/images/menu/mais-economico-branco.png";
const melhorOferta = "/images/menu/melhor-oferta-branco.png";

const bannerEmbalagem = "/images/banners/banner-embalagem-gratis.png";
const btnvoltar = "/images/btnvoltar.png";

const btnvoltarproduto = "/images/menu/voltar-produto.png";

const duvida_branca = "/images/menu/duvida-branco.png";

const icon_desc = "/images/menu/icon-desc.png";
const icon_dimensao = "/images/menu/icon-dimensao.png";

const quer_mais_oferta = "/images/quer-mais-oferta.png";

const emb_gratis = "/images/menu/embalagem-gratis-mobile.png";

const produtoIndisponivel = "/images/menu/produto-indisponivel.png";

const loading = "/images/loading.gif";
const duvida = "/images/duvida.png";
const selo_indisponivel = "images/indisponivel.png";
const nome_numeros = {
  1: "Uma",
  2: "Duas",
  3: "Três",
  4: "Quatro",
  5: "Cinco",
  6: "Seis",
  7: "Sete",
  8: "Oito",
  9: "Nove",
  10: "Dez",
};

class Produtobkp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dados: this.props.dados,
      prazo_producao: this.props.prazo_producao,
      dados_produtos_lista: [],
      url_img: null,
      list_img: [],
      passos: [],
      tipo_gravacao: this.props.gravacao,
      cores: this.props.cores,
      cores_embalagem: [],
      numero_max_impressoes: [],
      quantidades: [1000, 500, 300, 100],
      cod_prod: this.props.cod_prod,
      url_site:null,
      url_produto: null,
      passos_verify: false,
      selectedMelhorOferta: false,
      selectedCustom: false,
      grid_passos: false,
      preco_home: this.props.preco_home,
      nome_cor_embalagem: null,
      image_embalagem: "box-vermelho.jpg",
      qtd_indisponivel: false,

      nome_parceiro_indisponivel: null,
      email_parceiro_indisponivel: null,

      loadingProd: true,
      passos_element: [],

      verMaisGravacao: false,
      verMaisQtd: false,
      inputFiltroGravacao: null,

      ampliar_produto: false,
      menu_gravacao_view: false,
      menu_qtd_batidas_view: false,
      menu_prazo_view: false,
      menu_embalagem_view: false,
      menu_qtd_view: false,

      qtd_selecionadas: [],
      prazo_selecionadas: [],
      gravacao_selecionadas: [],
      qtd_batidas_selecionadas: [],
      cor_embalagem_selecionada: [],
      embalagem_selecionadas: [],
      nome_cor: null,
      cor_estoque: null,
      cor_selecionada: [],
      cor_indisponivel: false,

      valores_embalagem: [],

      loadingValor: false,

      gerarorcamento: false,
      verMaisDescricao: false,
      display_init:0,

      texto_seo: this.props.texto_seo
    };
    //   url_site:
    //     window.location.hostname.indexOf("127") != -1
    //       ? window.location.hostname + ":8001"
    //       : window.location.hostname,
    // };

    this.handleClick = this.handleClick.bind(this);
    this.changeVisible = this.changeVisible.bind(this);
    this.changeVisibleLoading = this.changeVisibleLoading.bind(this);
    this.changeVisibleGridPassos = this.changeVisibleGridPassos.bind(this);
    this.hideAllPassos = this.hideAllPassos.bind(this);
  }

  componentDidMount() {

    this.setState({url_site: window.location.hostname.indexOf("localhost") != -1 ? window.location.hostname + ":3000": window.location.hostname})

    var url = window.location.href.replace("http://" + this.state.url_site + "/","");
    this.setState({ url_produto: url });
    
    var self = this
    setTimeout(function(){
      self.setState({display_init:1})
    },1000)
    // this.getProduto(cod_prod);
    window.scrollTo(0, 80);
    this.getCorProduto(this.state.cod_prod);
    this.getTipoGravacao(this.state.cod_prod);

  }

  telaEmbalagem = async () => {
    this.changeVisibleLoading(true);

    await this.setState({ embalagem_selecionadas: ["Print"] });
    await this.getEmbalagens(this.state.dados.ad_embalagem);
    await this.getCorEmbalagem(this.state.dados.ad_embalagem);

    this.setState({ view_embalagem: true });
    window.scrollTo(0, 80);
    this.changeVisibleLoading(false);
  };

  submitCustomQtd = async () => {
    try {
      const response = await buscaProduto.post("listar-tabela-preco/" + this.state.cod_prod + "/" + this.state.qtd_selecionadas,
        {
          codigo_impressao: this.state.gravacao_selecionadas[0],
          codigo_cor: this.state.cor_selecionada[0],
          batidas: this.state.numero_max_impressoes[0],
        }
      );
      var dados = await response.data;

      var qtdcaixa = [];
      var altura = [];
      var largura = [];
      var comprimento = [];
      var peso = [];
      for (var d of dados) {
        if (d.mensagem != null) {
          var mensagem = d.mensagem.split(",");
          for (var m of mensagem) {
            // "QuantidadeProduto=50,CODPROD=77,IDCORES=0,CodigoImpressao=30,Impressao=Placa Prata Las,Batidas=1,ValorVenda=70.32,ValorTotalVenda=3516,PercComissao=0,Altura=27,Largura=22,Comprimento=22,PesoCaixa=0.2,QtdPorCaixa=10,Caixa=27 X 22 X 22,QtdCaixa=5,CubagemUnitaria=4.85,CubagemTotal=24.25;"
            if (m.indexOf("QtdCaixa") != -1) {
              qtdcaixa.push({
                valor: m.replace("QtdCaixa=", "").replace(".", ","),
              });
            }
            if (m.indexOf("Altura") != -1) {
              altura.push({
                valor: m.replace("Altura=", "").replace(".", ","),
              });
            }
            if (m.indexOf("Largura") != -1) {
              largura.push({
                valor: m.replace("Largura=", "").replace(".", ","),
              });
            }
            if (m.indexOf("Comprimento") != -1) {
              comprimento.push({
                valor: m.replace("Comprimento=", "").replace(".", ","),
              });
            }
            if (m.indexOf("PesoCaixa") != -1) {
              peso.push({
                valor: m.replace("PesoCaixa=", "").replace(".", ","),
              });
            }
          }
        }
      }

      await this.setState({
        qtd_caixa_brinde: qtdcaixa[0],
        altura_caixa_brinde: altura[0],
        largura_caixa_brinde: largura[0],
        comprimento_caixa_brinde: comprimento[0],
        peso_caixa_brinde: peso[0],
      });
    } catch (error) {
      console.log(Object.keys(error), error.message);
    }
  };

  addProdutoCarrinho = async (tipo_embalagem = null) => {
    await this.submitCustomQtd();
    // var dimensoes = this.state.dados.dimensoes.replaceAll(" CM","").split(" X ");

    // var altura = {'valor':dimensoes[0]};
    // var largura = {'valor':dimensoes[1]};
    // var comprimento = {'valor':dimensoes[2]};
    // var peso = {'valor':this.state.dados.peso_produto};
    // var qtdcaixa = {'valor':this.state.qtd_caixa_brinde};

    var cubagem = {
      altura: { valor: this.state.altura_caixa_brinde.valor },
      largura: { valor: this.state.largura_caixa_brinde.valor },
      comprimento: { valor: this.state.comprimento_caixa_brinde.valor },
      peso: { valor: this.state.peso_caixa_brinde.valor },
      qtdcaixa: { valor: this.state.qtd_caixa_brinde.valor },
    };

    var gravacao = null;

    this.state.tipo_gravacao.map((data) => {
      if (data.cod == this.state.gravacao_selecionadas[0]) {
        gravacao = { cod: data.cod, desc: data.nome };
      }
    });

    var cor = null;

    this.state.cores.map((data) => {
      if (data.cod == this.state.cor_selecionada[0]) {
        cor = { cod: data.cod, desc: data.text };
      }
    });

    if (this.state.dados.ad_embalagem !== null) {
      if (tipo_embalagem == "Gratis") {
        var TipoEmbalagem = "Grátis";
        var valorUnitarioEmbalagem = "0,00";
        var valorTotalEmbalagem = "0,00";
        var codigo_impressao = "";
      } else {
        if (
          this.state.cor_embalagem_selecionada > 0 ||
          this.state.embalagem_selecionadas.includes("Plus")
        ) {
          var TipoEmbalagem = this.state.embalagem_selecionadas[0];

          if (this.state.embalagem_selecionadas[0] == "Box") {
            var valorUnitarioEmbalagem = this.state.valores_embalagem[0];
            var valorTotalEmbalagem = this.state.valores_embalagem_total[0];
            var codigo_impressao = this.state.codigo_impressao_embalagem[0];
          } else if (this.state.embalagem_selecionadas[0] == "Print") {
            var valorUnitarioEmbalagem = this.state.valores_embalagem[1];
            var valorTotalEmbalagem = this.state.valores_embalagem_total[1];
            var codigo_impressao = this.state.codigo_impressao_embalagem[1];
          } else if (this.state.embalagem_selecionadas[0] == "Plus") {
            var valorUnitarioEmbalagem = this.state.valores_embalagem[2];
            var valorTotalEmbalagem = this.state.valores_embalagem_total[2];
            var codigo_impressao = this.state.codigo_impressao_embalagem[2];
          }
        } else {
          alert("Selecione uma cor para sua embalagem.");
          return true;
        }
      }
    } else {
      var TipoEmbalagem = "";
      var valorUnitarioEmbalagem = "0,00";
      var valorTotalEmbalagem = "0,00";
      var codigo_impressao = "";
    }

    var produto = {
      codprod: this.state.cod_prod,
      nome_prod: this.state.dados.nome,
      referencia: this.state.dados.referencia,
      ad_embalagem: this.state.dados.ad_embalagem,
      cubagem_embalagem: [
        this.state.altura_embalagem,
        this.state.largura_embalagem,
        this.state.comprimento_embalagem,
        this.state.peso_embalagem,
        this.state.qtd_caixa_embalagem,
      ],
      batidas: this.state.qtd_batidas_selecionadas[0],
      cor_embalagem: this.state.cor_embalagem_selecionada[0],
      cor_produto: cor,
      valor_unitario_embalagem: valorUnitarioEmbalagem,
      valor_total_embalagem: valorTotalEmbalagem,
      tipo_embalagem: TipoEmbalagem,
      cubagem: cubagem,
      quantidade: this.state.qtd_selecionadas,
      prazo: this.state.prazo_selecionadas[0],
      valor_unitario: (Math.round(parseFloat(this.state.preco_home) * 100) / 100).toLocaleString("pt-br", { minimumFractionDigits: 2 }),
      valor_total: ((Math.round(parseFloat(this.state.preco_home) * 100) / 100) * parseInt(this.state.qtd_selecionadas)).toString().replaceAll(".", ","),
      prazo_entrega: this.state.prazo_selecionadas[0],
      tipo_gravacao: gravacao,
      codigo_impressao_embalagem: codigo_impressao,
      url_img: this.state.list_img[0],
      url_prod: this.state.url_produto,
    };

    localStorage.setItem(
      "produto_" + this.state.cod_prod,
      JSON.stringify(produto)
    );
    window.location.href = "/carrinho";
  };

  salvarAvisoProdutoIndisponivel = async () => {
    try {
      if (
        this.state.nome_parceiro_indisponivel == null ||
        this.state.nome_parceiro_indisponivel == ""
      ) {
        alert("Informe o seu nome.");
      } else if (
        this.state.email_parceiro_indisponivel == null ||
        this.state.email_parceiro_indisponivel == ""
      ) {
        alert("Informe um email válido.");
      } else {
        var param = {
          email_parceiro: this.state.email_parceiro_indisponivel,
          nome_parceiro: this.state.nome_parceiro_indisponivel,
          codigo_produto: this.state.cod_prod,
        };
        const response = await SalvarAvisoProdutoIndisponivel.post("", param);
        var data = response.data;

        alert(
          "Obrigado pelo interesse em nosso produto. Assim que o produto ficar disponivel novamente iremos entrar em contato. :D"
        );
        document.getElementById("nome-parceiro-indisponivel").value = "";
        document.getElementById("email-parceiro-indisponivel").value = "";
      }
    } catch (error) {
      console.log(Object.keys(error), error.message);
    }
  };

  sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if (new Date().getTime() - start > milliseconds) {
        break;
      }
    }
  }

  preFiltro = async (cod_prod) => {
    if (localStorage.getItem("dados-carregados-busca")) {
      var dados = JSON.parse(localStorage.getItem("dados-carregados-busca"));

      if (
        dados.codprod.toString().substr(dados.codprod.toString().length - 4) ==
        cod_prod
      ) {
        if (dados.qtd != undefined && dados.qtd != null && dados.qtd != "") {
          await this.setState({
            qtd_inicial: parseInt(dados.qtd),
            qtd_selecionadas: [parseInt(dados.qtd)],
          });
        }
        if (
          dados.prazo != undefined &&
          dados.prazo != null &&
          dados.prazo != ""
        ) {
          await this.setState({ prazo_selecionadas: [dados.prazo] });
        }
        if (dados.cor != undefined && dados.cor != null && dados.cor != "") {
          await this.setState({ cor_selecionada: [dados.cor] });
        }
      }
    }
  };

  getEstoqueMaximo = async (estoque) => {
    this.setState({ quantidades: [1000, 500, 300, 100] });

    var quantidade_disponivel = [];
    this.state.quantidades.map((data) => {
      if (data <= estoque) {
        quantidade_disponivel.push(data);
      } else if (data == 1000 && estoque >= data) {
        quantidade_disponivel.push(data);
      } else if (
        estoque <= data &&
        estoque != quantidade_disponivel[quantidade_disponivel.length - 1]
      ) {
        quantidade_disponivel.push(estoque);
      }
    });

    var qtd_filtrada = this.state.qtd_selecionadas;
    if (parseInt(this.state.qtd_inicial) >= parseInt(estoque)) {
      this.setState({
        qtd_selecionadas: [parseInt(estoque)],
        quantidades: quantidade_disponivel,
      });
    } else if (
      parseInt(this.state.qtd_inicial) <= parseInt(estoque) &&
      parseInt(this.state.qtd_inicial) >= parseInt(qtd_filtrada)
    ) {
      this.setState({
        qtd_selecionadas: [parseInt(this.state.qtd_inicial)],
        quantidades: quantidade_disponivel,
      });
    } else {
      this.setState({
        quantidades: quantidade_disponivel,
        qtd_selecionadas: [parseInt(qtd_filtrada)],
      });
    }
  };

  getConfiguracao = async (cod_prod) => {
    try {
      var maiorEstoque = 0;
      this.state.cores.map((data) => {
        if (parseInt(data.estoque) > maiorEstoque) {
          maiorEstoque = parseInt(data.estoque);
        }
      });

      if (maiorEstoque >= 1000) {
        const response = await buscaMelhorOfertaProduto.get(
          cod_prod + "/" + 1000
        );
        var dados = response.data;
      } else {
        const response = await buscaMelhorOfertaProduto.get(
          cod_prod + "/" + maiorEstoque
        );
        var dados = response.data;
      }

      var nome_cor = "";
      var estoque = 0;
      var previsao = "";
      this.state.cores.map((data) => {
        if (data.cod == dados.IDCORES) {
          nome_cor = data.text;
          estoque = data.estoque;
          previsao = data.previsao;
        }
      });

      var quantidade_disponivel = [];
      this.state.quantidades.map((data) => {
        if (data <= maiorEstoque) {
          quantidade_disponivel.push(data);
        } else if (
          maiorEstoque !=
          quantidade_disponivel[quantidade_disponivel.length - 1]
        ) {
          quantidade_disponivel.push(maiorEstoque);
        }
      });

      await this.setState({
        cor_selecionada: [dados.IDCORES],
        nome_cor: nome_cor,
        cor_estoque: estoque,
        previsao: previsao,
        qtd_inicial: parseInt(dados.QuantidadeProduto),
        qtd_selecionadas: [parseInt(dados.QuantidadeProduto)],
        qtd_batidas_selecionadas: [dados.Batidas],
        gravacao_selecionadas: [dados.CodigoImpressao],
        prazo_selecionadas: ["10"],
        preco_home: dados.ValorVenda,
        loadingValor: false,
        quantidades: quantidade_disponivel,
        maiorEstoque: maiorEstoque,
      });

      this.preFiltro(cod_prod);
      this.buscarValor();
    } catch (error) {
      console.log(Object.keys(error), error.message);
    }
  };

  getProduto = async (cod_prod) => {
    try {
      if (cod_prod) {
        const response = await buscaProduto.get(cod_prod);
        var dados = await response.data;

        const responsePrazo = await ListaPrazoDeProducao.get(
          dados.prazo_minimo_entrega.toString()
        );
        var dadosPrazo = await responsePrazo.data;

        if (dados.ativo == "S") {
          this.setState({
            dados: dados,
            preco_home: dados.valor_home,
            prazo_producao: dadosPrazo,
          });

          if (dados.batidadas_maximas > 0) {
            var numero_max_impressoes = [];
            for (var i = 1; i <= dados.batidadas_maximas; i++) {
              numero_max_impressoes.push(i.toString());
            }
            this.setState({ numero_max_impressoes: numero_max_impressoes });
          }

          if (dados.url_seo) {
            var split_data = dados.url_seo.split("-");
            split_data.pop();
            var url = split_data.join("-");

            var referencia = dados.referencia.toString();

            var imagens_produto = [];
            for (var i = 2; i < dados.quantidade_imagens + 3; i++) {
              if (referencia !== null && url !== null) {
                var url_img_prod = "";

                if (i > 4) {
                  var valid = await fetch("http://" +this.state.url_site +"/images/produtos/" +referencia.substr(referencia.length - 4) +"/" +url +"-" +i +"-" +i +".jpg");
                  if (valid.status == "200") {
                    url_img_prod = "http://" +this.state.url_site +"/images/produtos/" +referencia.substr(referencia.length - 4) +"/" +url +"-" +i +"-" +i +".jpg";
                    imagens_produto.push(url_img_prod);
                  }
                } else {
                  url_img_prod = "http://" +this.state.url_site +"/images/produtos/" +referencia.substr(referencia.length - 4) +"/" +url +"-" +i +"-" +i +".jpg";
                  imagens_produto.push(url_img_prod);
                }
              }
            }

            this.setState({ list_img: imagens_produto });
            this.setState({ url_img: split_data.join("-") });
          }
        } else {
          window.location.href = "/";
        }
        this.getGridProduto(dados.codigo_grupo_produto.toString());
      } else {
        window.location.href = "/";
      }
    } catch (error) {
      console.log(Object.keys(error), error.message);
    }
  };

  getCorProduto = async (cod_prod) => {
    try {
      const response = await buscaProduto.get(
        cod_prod + "/cores-disponiveis"
      );
      var dados = await response.data;

      var cores_diponiveis = [];
      for (var d of dados) {
        cores_diponiveis.push({
          text: d.descricao_cor.trim(),
          cod: d.codigo_cor,
          rgb_cores: d.rgb_cores,
          estoque: parseInt(
            d.estoque_disponivel.replaceAll(".", "").replaceAll(",", "")
          ),
          previsao:
            Moment(d.reposicao_estoque).format("DD/MM/YYYY") == "Invalid date"
              ? null
              : Moment(d.reposicao_estoque).format("DD/MM/YYYY"),
        });
      }

      cores_diponiveis.sort(function (a, b) {
        if (a.estoque == 0) {
          return 1;
        } else {
          return -1;
        }
      });

      await this.setState({ cores: cores_diponiveis });
      await this.getProduto(cod_prod);
      await this.getConfiguracao(cod_prod);
      this.changeVisibleLoading(false);
      this.buscarValor();
    } catch (error) {
      console.log(Object.keys(error), error.message);
    }
  };

  getCorEmbalagem = async (cod_prod) => {
    try {
      const response = await buscaProduto.get(
        cod_prod + "/cores-disponiveis"
      );
      var dados = await response.data;

      var cores_diponiveis = [];
      for (var d of dados) {
        cores_diponiveis.push({
          text: d.descricao_cor.trim(),
          cod: d.codigo_cor,
          rgb_cores: d.rgb_cores,
          estoque: parseInt(
            d.estoque_disponivel.replaceAll(".", "").replaceAll(",", "")
          ),
          imagens: {
            box: d.imagem_box,
            print: d.imagem_print,
            plus: d.imagem_plus,
          },
        });
      }

      await this.setState({
        cores_embalagem: cores_diponiveis,
        cor_embalagem_selecionada: [cores_diponiveis[1].cod],
        nome_cor_embalagem: cores_diponiveis[1].text,
        imagens_cor_embalagem: cores_diponiveis[1].imagens,
        image_embalagem: cores_diponiveis[1].imagens.print,
      });
      // await this.getConfiguracao(cod_prod);
    } catch (error) {
      console.log(Object.keys(error), error.message);
    }
  };

  getTipoGravacao = async (cod_prod) => {
    try {
      const response = await buscaProduto.get(
        cod_prod + "/tipo-gravacao"
      );
      var dados = await response.data;

      var tipo_gravacao = [];
      for (var d of dados) {
        tipo_gravacao.push({
          nome: d.descricao_impressao.trim(),
          tooltip: d.texto_impressao.trim(),
          cod: d.codigo_impressao,
          img: d.nome_img,
          desc_site: d.descricao_site,
        });
      }

      await this.setState({ tipo_gravacao: tipo_gravacao });
    } catch (error) {
      console.log(Object.keys(error), error.message);
    }
  };

  getEmbalagens = async (codprod) => {
    try {
      // this.setState({loadingValor:true});
      const response = await buscaProduto.get(
        codprod + "/tipo-gravacao"
      );
      var dados = await response.data;

      if (dados[0].descricao_produto.trim() == "EMBALAGEM PARA CANETA") {
        this.setState({ tipo_embalagem: "caneta" });
      } else {
        this.setState({ tipo_embalagem: "box" });
      }

      var qtd = this.state.qtd_selecionadas;
      var prazo = this.state.prazo_selecionadas[0];

      var valores = [];
      var valoresTotais = [];
      var altura = [];
      var largura = [];
      var comprimento = [];
      var peso = [];
      var qtdcaixa = [];
      var codigo_impressao = [];

      for (var d of dados) {
        const response = await buscaProduto.post(
          "listar-tabela-preco/" + codprod + "/" + qtd,
          {
            ad_embalagem: codprod,
            codigo_impressao: d.codigo_impressao,
            prazo_entrega: prazo,
            codigo_cor: 1,
            batidas: 1,
          }
        );
        var dados = await response.data[0];
        if (dados.mensagem != null) {
          var valor = dados.mensagem.split(",");
        } else {
          var valor = [];
        }

        codigo_impressao.push(d.codigo_impressao);

        for (var v of valor) {
          if (v.indexOf("ValorVenda") != -1) {
            valores.push(v.replace("ValorVenda=", "").replace(".", ","));
          }
          if (v.indexOf("ValorTotalVenda") != -1) {
            valoresTotais.push(
              v.replace("ValorTotalVenda=", "").replace(".", ",")
            );
          }
          if (v.indexOf("Altura") != -1) {
            altura.push({ valor: v.replace("Altura=", "").replace(".", ",") });
          }
          if (v.indexOf("Largura") != -1) {
            largura.push({
              valor: v.replace("Largura=", "").replace(".", ","),
            });
          }
          if (v.indexOf("Comprimento") != -1) {
            comprimento.push({
              valor: v.replace("Comprimento=", "").replace(".", ","),
            });
          }
          if (v.indexOf("PesoCaixa") != -1) {
            peso.push({ valor: v.replace("PesoCaixa=", "").replace(".", ",") });
          }
          if (v.indexOf("QtdCaixa") != -1) {
            qtdcaixa.push({
              valor: v.replace("QtdCaixa=", "").replace(".", ","),
            });
          }
        }
      }

      this.setState({
        valores_embalagem: valores,
        valores_embalagem_total: valoresTotais,
        altura_embalagem: altura[0],
        largura_embalagem: largura[0],
        comprimento_embalagem: comprimento[0],
        peso_embalagem: peso[0],
        qtd_caixa_embalagem: qtdcaixa[0],
        codigo_impressao_embalagem: codigo_impressao,
        loadingValor: false,
      });
    } catch (error) {
      console.log(Object.keys(error), error.message);
    }
  };

  ifnull = (a, b) => {
    if (a === null || a === undefined || a === "") {
      return b;
    } else {
      return a;
    }
  };

  getGridProduto = async (categoria) => {
    try {
      const response = await dadosProdutosSubcategoria.post("",{"codigo_grupo_produto": categoria.toString()});
      var dados = response.data;
      var produtos = [];
      var texto_seo = null;


      
      for (var prod of dados) {
        texto_seo = prod.texto_seo;
        if (prod.url_seo && parseInt(prod.estoque) > 0) {
          var url_seo = prod.url_seo.split("-");

          var referencia = prod.referencia.toString();
          var link =
            "/" +
            referencia.substring(referencia.length - 4) +
            "/" +
            url_seo.slice(0, url_seo.length - 1).join("-") +
            "-1-1.jpg";

          produtos.push({
            prod_nome: prod.nome_produto,
            prod_cod: prod.referencia,
            url_prod: prod.url_seo,
            img_prod: link,
            referencia: prod.referencia,
            descricao: prod.descricao,
            caracteristicas: prod.caracteristicas,
            valor_home: this.ifnull(prod.preco_home, "0,00").replace(".", ","),
            cores: this.ifnull(prod.rgb_cores, "").trim(),
            selo: prod.ad_embalagem ? "S" : "N",
            segmento: prod.segmento,
            ultrarapido: parseInt(prod.prazo_minimo_entrega) == 1 ? "S" : "N",
          });
        }
      }

      this.setState({ dados_produtos_lista: produtos, texto_seo: texto_seo });
    } catch (error) {
      console.log(Object.keys(error), error.message);
    }
  };

  handleClick(p) {
    this.setState({ passos_verify: true });
  }

  hideAllPassos() {
    var divs = document.querySelectorAll("div");
    for (var div of divs) {
      if (div.className.indexOf("element") != -1) {
        div.style.display = "none";
      }
    }
  }

  changeVisible(passo) {
    if (passo > 0) {
      this.hideAllPassos();
      document.getElementById("passosN" + passo).style.display = "block";
      document
        .getElementById("passosN" + passo)
        .querySelectorAll("div")[3].style.display = "block";
      window.scrollTo(0,document.getElementById("passosN" + passo).offsetTop * 1.5);

      if (document.getElementById("passosN" + (passo + 1))) {
        document.getElementById("passosN" + (passo + 1)).style.display = "none";
      }
    } else if (passo < 0) {
      this.hideAllPassos();
      window.scrollTo(0, 10);
    } else {
      this.hideAllPassos();
      document.getElementById("passosN0").style.display = "block";
      document.getElementById("passosN0").querySelectorAll("div")[3].style.display = "block";
      window.scrollTo(0, document.getElementById("passosN0").offsetTop * 1.5);
    }
  }

  changeInputProdutoIndisponivel = async (e, value) => {
    this.setState({ [value]: e.target.value });
  };

  changeVisibleLoading(value) {
    this.setState({ loadingProd: value });
  }

  changeVisibleGridPassos = async () => {
    await this.setState({ grid_passos: true });
    this.changeVisible(0);
  };

  changeQuantidade = async (e) => {
    this.setState({ qtd_selecionadas: parseInt(e.target.value) });
  };

  verMaisGravacao = async () => {
    this.setState({ verMaisGravacao: !this.state.verMaisGravacao });
  };

  verMaisQtdBatidas = async () => {
    this.setState({ verMaisQtdBatidas: !this.state.verMaisQtdBatidas });
  };
  verMaisQtd = async () => {
    this.setState({ verMaisQtd: !this.state.verMaisQtd });
  };

  fecharTodosOsMenus = async () => {
    this.setState({
      menu_gravacao_view: false,
      menu_qtd_batidas_view: false,
      menu_prazo_view: false,
      menu_qtd_view: false,
    });
  };

  changeFiltroGravacao = async (e) => {
    if (e.target.value.trim() != "") {
      this.setState({ verMaisGravacao: true });
    }
    this.setState({ inputFiltroGravacao: e.target.value });
  };

  changeFiltroQtdBatidas = async (e) => {
    if (e.target.value.trim() != "") {
      this.setState({ verMaisQtdBatidas: true });
    }
    this.setState({ inputFiltroQtdBatidas: e.target.value });
  };

  changeFiltroQtd = async (e) => {
    if (e.target.value.trim() != "") {
      this.setState({ verMaisQtd: true });
    }
    this.setState({ inputFiltroQtd: e.target.value });
  };

  changeMenuGravacao = async (e) => {
    if (!this.state.cor_indisponivel) {
      if (e.target.attributes.value.textContent == "passo-gravacao") {
        this.setState({ menu_gravacao_view: !this.state.menu_gravacao_view });
      }

      this.setState({
        menu_qtd_batidas_view: false,
        menu_prazo_view: false,
        menu_qtd_view: false,
      });
    }
  };

  selectGravacao = async (e) => {
    this.setState({ loadingValor: true });
    if (this.state.gravacao_selecionadas[0] == e.target.value) {
      await this.setState({ loadingValor: false });
    } else {
      await this.setState({ gravacao_selecionadas: [e.target.value] });
      await this.buscarValor();
    }
  };

  changeMenuQtdBatidas = async (e) => {
    if (!this.state.cor_indisponivel) {
      if (e.target.attributes.value.textContent == "passo-qtd-batidas") {
        this.setState({
          menu_qtd_batidas_view: !this.state.menu_qtd_batidas_view,
        });
      }
      this.setState({
        menu_gravacao_view: false,
        menu_prazo_view: false,
        menu_qtd_view: false,
      });
    }
  };

  selectQtdBatidas = async (e) => {
    this.setState({ loadingValor: true });
    if (this.state.qtd_batidas_selecionadas[0] == e.target.value) {
      await this.setState({ loadingValor: false });
    } else {
      await this.setState({ qtd_batidas_selecionadas: [e.target.value] });
      this.buscarValor();
    }
  };

  changeMenuPrazo = async (e) => {
    if (!this.state.cor_indisponivel) {
      if (e.target.attributes.value.textContent == "passo-prazo") {
        this.setState({ menu_prazo_view: !this.state.menu_prazo_view });
      }
      this.setState({
        menu_gravacao_view: false,
        menu_qtd_batidas_view: false,
        menu_qtd_view: false,
      });
    }
  };

  changeMenuEmbalagem = async (e) => {
    if (e.target.attributes.value.textContent == "passo-embalagem") {
      this.setState({ menu_embalagem_view: !this.state.menu_embalagem_view });
    }
  };

  selectPrazo = async (e) => {
    this.setState({ loadingValor: true });
    if (this.state.prazo_selecionadas[0] == e.target.value) {
      // await this.setState({prazo_selecionadas:[]});
    } else {
      await this.setState({ prazo_selecionadas: [e.target.value] });
      this.buscarValor();
    }
  };

  changeMenuQtd = async (e) => {
    if (!this.state.cor_indisponivel) {
      if (e.target.attributes.value.textContent == "passo-qtd") {
        this.setState({ menu_qtd_view: !this.state.menu_qtd_view });
      }
      this.setState({
        menu_gravacao_view: false,
        menu_qtd_batidas_view: false,
        menu_prazo_view: false,
      });
    }
  };

  changeQuantidadeValor = async (e) => {
    this.setState({ quantidade_digitada: e.target.value });
  };

  clickFiltroQuantidade = async (e) => {
    this.setState({ loadingValor: true });
    if (
      this.state.quantidade_digitada != null &&
      this.state.quantidade_digitada != ""
    ) {
      await this.setState({
        qtd_selecionadas: [parseInt(this.state.quantidade_digitada)],
        qtd_inicial: parseInt(this.state.quantidade_digitada),
      });
      // this.setState({quantidade_digitada: null});

      this.buscarValor();
    }
  };

  selectEmbalagem = async (e) => {
    if (typeof e === "object") {
      var value = e.target.value;
    } else {
      var value = e;
    }

    if (this.state.embalagem_selecionadas[0] == value) {
      // this.setState({embalagem_selecionadas:[]});
      this.setState({ menu_embalagem_view: false });
    } else {
      if (value.toLowerCase() == "plus") {
        var embalagem_img = "full-print";
        this.setState({
          image_embalagem:
            this.state.imagens_cor_embalagem[value.toLowerCase()],
        });
      } else {
        if (this.state.nome_cor_embalagem != null) {
          var embalagem_img =
            this.state.imagens_cor_embalagem[value.toLowerCase()];
          this.setState({ image_embalagem: embalagem_img });
        } else {
          var embalagem_img = value.toLowerCase() + "-vermelho";
          this.setState({ image_embalagem: embalagem_img + ".jpg" });
        }
      }

      await this.setState({ embalagem_selecionadas: [value] });
      this.setState({ menu_embalagem_view: false });
    }
  };

  selectQtd = async (e) => {
    this.setState({ loadingValor: true });
    if (this.state.qtd_selecionadas[0] == e.target.value) {
      // this.setState({qtd_selecionadas:[]});
    } else {
      await this.setState({
        qtd_selecionadas: [parseInt(e.target.value)],
        qtd_inicial: e.target.value,
      });
      await this.getEstoqueMaximo(this.state.cor_estoque);
      this.buscarValor();
    }
  };

  selectCores = async (cod, nome, estoque, previsao = "") => {
    this.setState({ loadingValor: true });
    if (this.state.cor_selecionada[0] == cod) {
      this.setState({ loadingValor: false });
    } else {
      await this.setState({
        cor_selecionada: [cod],
        nome_cor: nome,
        cor_estoque: estoque,
        previsao: previsao,
      });
      if (estoque == 0) {
        this.setState({ cor_indisponivel: true });
      } else {
        this.setState({ cor_indisponivel: false });
      }
      await this.getEstoqueMaximo(estoque);
      this.buscarValor();
    }
  };

  selectCoresEmbalagem = async (cod, nome, imagens) => {
    // this.setState({loadingValor:true});
    if (this.state.cor_embalagem_selecionada[0] == cod) {
      // this.setState({loadingValor:false});
    } else {
      if (this.state.embalagem_selecionadas[0].toLowerCase() == "plus") {
        var embalagem_img = "full-print";
        this.setState({ image_embalagem: embalagem_img + ".jpg" });
      } else {
        var embalagem_img =
          imagens[this.state.embalagem_selecionadas[0].toLowerCase()];
        this.setState({ image_embalagem: embalagem_img });
      }

      await this.setState({
        cor_embalagem_selecionada: [cod],
        nome_cor_embalagem: nome,
        imagens_cor_embalagem: imagens,
      });

      // await this.getEstoqueMaximo(estoque);
      // this.buscarValor();
    }
  };

  buscarValor = async () => {
    try {
      if (
        this.state.cor_selecionada[0] != "" &&
        this.state.qtd_selecionadas[0] != ""
      ) {
        var estoque = false;
        var quantidade_disponivel = 0;
        this.state.cores.map((data) => {
          if (parseInt(data.cod) == parseInt(this.state.cor_selecionada[0])) {
            if (
              parseInt(this.state.qtd_selecionadas[0]) <= parseInt(data.estoque)
            ) {
              estoque = true;
              quantidade_disponivel = parseInt(data.estoque);
            } else {
              quantidade_disponivel = parseInt(data.estoque);
            }
          }
        });

        if (estoque) {
          var param = {
            codigo_produto: this.state.dados.codigo_produto,
            codigo_impressao: this.state.gravacao_selecionadas[0],
            quantidade: parseInt(this.state.qtd_selecionadas[0]),
            codigo_cor: this.state.cor_selecionada[0],
            batidas: this.state.qtd_batidas_selecionadas[0],
            prazo_entrega: this.state.prazo_selecionadas[0],
          };

          const response = await buscaValorProduto.post("", param);
          var dados = response.data;

          await this.setState({
            preco_home: dados.valor_unitario,
            preco_total: dados.valor_total,
          });
        } else {
          // alert("Estoque para esta cor foi excedida. Estoque disponivel: "+quantidade_disponivel);
          this.setState({
            qtd_selecionadas: [parseInt(quantidade_disponivel)],
          });
          this.buscarValor();
        }
      }
      this.setState({ loadingValor: false });
    } catch (error) {
      console.log(Object.keys(error), error.message);
    }
  };

  voltarConfiguracao = async () => {
    this.setState({ view_embalagem: false });
  };

  visualizarProduto = async () => {
    this.setState({ ampliar_produto: true });
  };

  closeProduto = async () => {
    this.setState({ ampliar_produto: false });
  };

  verMaisDescricao = async () => {
    this.setState({ verMaisDescricao: true });
  };

  render() {
    // if (screen.width < 640 || screen.height < 480) {
    //     window.location.href = "http://innovationbrindes.com";
    // } else if (screen.width < 1024 || screen.height < 700) {
    //     window.location.href = "http://innovationbrindes.com";
    // }else{
    var style_gravacao = this.state.menu_gravacao_view
      ? {
          transition: "0.5s",
          height: 60 + 35 * (this.state.tipo_gravacao.length + 1) + "px",
          borderLeft: "0.6px solid rgb(204, 204, 204)",
          borderRight: "0.6px solid rgb(204, 204, 204)",
          borderBottom: "0.6px solid rgb(204, 204, 204)",
        }
      : {
          transition: "0.5s",
          height: "0px",
          border: "none",
          backgroundColor: "transparent",
        };

    var style_gravacao_input = this.state.menu_gravacao_view
      ? { display: "block" }
      : { display: "none" };
    var style_gravacao_ul = this.state.menu_gravacao_view
      ? this.state.verMaisCategorias
        ? { display: "block", overflowY: "scroll" }
        : { display: "block", height: "210px" }
      : { display: "none" };

    var style_qtd_batidas = this.state.menu_qtd_batidas_view
      ? {
          transition: "0.5s",
          height:
            60 + 25 * (this.state.numero_max_impressoes.length + 1) + "px",
          borderLeft: "0.6px solid rgb(204, 204, 204)",
          borderRight: "0.6px solid rgb(204, 204, 204)",
          borderBottom: "0.6px solid rgb(204, 204, 204)",
        }
      : {
          transition: "0.5s",
          height: "0px",
          border: "none",
          backgroundColor: "transparent",
        };
    var style_qtd_batidas_input = this.state.menu_qtd_batidas_view
      ? { display: "block" }
      : { display: "none" };
    var style_qtd_batidas_ul = this.state.menu_qtd_batidas_view
      ? { display: "block", height: "210px" }
      : { display: "none" };

    var style_prazo = this.state.menu_prazo_view
      ? {
          transition: "0.5s",
          height: "290px",
          borderLeft: "0.6px solid rgb(204, 204, 204)",
          borderRight: "0.6px solid rgb(204, 204, 204)",
          borderBottom: "0.6px solid rgb(204, 204, 204)",
        }
      : {
          transition: "0.5s",
          height: "0px",
          border: "none",
          backgroundColor: "transparent",
        };
    var style_prazo_input = this.state.menu_prazo_view
      ? { display: "block" }
      : { display: "none" };
    var style_prazo_ul = this.state.menu_prazo_view
      ? { display: "block", height: "210px" }
      : { display: "none" };

    var style_embalagem = this.state.menu_embalagem_view
      ? {
          transition: "0.5s",
          height: "200px",
          borderLeft: "0.6px solid rgb(204, 204, 204)",
          borderRight: "0.6px solid rgb(204, 204, 204)",
          borderBottom: "0.6px solid rgb(204, 204, 204)",
        }
      : {
          transition: "0.5s",
          height: "0px",
          border: "none",
          backgroundColor: "transparent",
        };
    var style_embalagem_input = this.state.menu_embalagem_view
      ? { display: "block" }
      : { display: "none" };
    var style_embalagem_ul = this.state.menu_embalagem_view
      ? { display: "block", height: "210px" }
      : { display: "none" };

    var style_qtd = this.state.menu_qtd_view
      ? {
          transition: "0.5s",
          height: "280px",
          borderLeft: "0.6px solid rgb(204, 204, 204)",
          borderRight: "0.6px solid rgb(204, 204, 204)",
          borderBottom: "0.6px solid rgb(204, 204, 204)",
        }
      : {
          transition: "0.5s",
          height: "0px",
          border: "none",
          backgroundColor: "transparent",
        };
    var style_qtd_input = this.state.menu_qtd_view
      ? { display: "block" }
      : { display: "none" };
    var style_qtd_ul = this.state.menu_qtd_view
      ? this.state.verMaisQtd
        ? { display: "block", overflowY: "scroll", overflowX: "hidden" }
        : { display: "block" }
      : { display: "none" };

    // var tooltipTriggerList = [].slice.call(
    //   document.querySelectorAll('[data-bs-toggle="tooltip"]')
    // );
    // var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    //   return new Bootstrap.Tooltip(tooltipTriggerEl);
    // });

    return (
      <>
        <Head>
          {/* <link rel="alternate" href={`http://innovationbrindes.com.br${this.props.linkproduto}`} hreflang="pt"/> */}

          <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'http://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PXQHD6F')`}}></script>
        </Head>
        <NextSeo
          title={`${this.props.nome_produto} ${this.props.referencia}`}
          description={`${this.props.nome_produto}, ${this.props.referencia}, Brindes, Brindes Personalizados, Brindes Promocionais, Brindes Corporativos, Brindes Ecológicos, Personalizados, Innovation Brindes`}
          keywords={`${this.props.nome_produto}, ${this.props.referencia}, Brindes, Brindes Personalizados, Personalizados, Brindes Promocionais, Promocionais, Empresa de Brindes, Brindes Corporativos, Chaveiros Personalizados, Squeeze Personalizado, Canetas Personalizadas, Canetas Para Brindes, Caneta Personalizada, Canetas Promocionais, Produtos Promocionais, Brindes Para Eventos, Carregador Celular Personalizado, Power Bank Personalizado, Espelho Personalizado, Brindes Dia Das Mães, Brindes Dia Dos Pais, Brindes Dia Da Mulher, Brindes Para o Final Do Ano, Brindes Para Funcionários, Confecção Promocional`}
          canonical={`http://innovationbrindes.com.br${this.props.linkproduto}`}
          openGraph={{}}
          additionalMetaTags={[{
            property: 'google-site-verification',
            content: 'LbWjsXZYmAB2-2Pte2ynHh04tiGVdXXLsyOOGjHZQYs'
          }, {
            name: 'msvalidate.01',
            content: '7D236B682E6D1FAB048CBF1C65790B63'
          }, {
            httpEquiv: 'Content-Type',
            content: 'text/html; charset=utf-8'
          }, {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1'
          }, {
            name: 'shareaholic:site_name',
            content: 'Innovation Brindes'
          }, {
            name: 'shareaholic:language',
            content: 'pt-BR'
          }, {
            name: 'Publisher',
            content: 'Innovation Brindes a maior empresa de Brindes Personalizados Promocionais'
          }, {
            name: 'Designer',
            content: 'Innovation Brindes a maior empresa de Brindes Personalizados Promocionais'
          }, {
            name: 'Abstract',
            content: 'Brindes | Brinde | Brindes Baratos | Brindes Promocionais | Brindes Personalizados | Brinde Promocional | Empresa de Brindes | Comprar Brindes | Brindes Empresas'
          }, {
            name: 'robots',
            content: 'Index, follow, all'
          }, {
            name: 'Googlebot',
            content: 'Index, follow, all'
          }, {
            name: 'MSNBot',
            content: 'Index, follow, all'
          }, {
            name: 'InktomiSlurp',
            content: 'Index, follow, all'
          }, {
            name: 'Unknownrobot',
            content: 'Index, follow, all'
          }, {
            name: 'Revisit-After',
            content: '1'
          }
        ]}/>
        
        <Box style={{opacity:this.state.display_init,transition:'0.3s'}}>
        <PromptProduto
          style={{ display: this.state.ampliar_produto ? "block" : "none" }}
        >
          <PromptProdutoModal>
            <PromptProdutoModalClose>
              <IconButton
                zIndex="99999999999"
                w="50px"
                bgColor="white"
                mt="1rem"
                _hover={{ backgroundColor: "white" }}
                _active={{ backgroundColor: "gray.50" }}
                size="lg"
                onClick={() => this.closeProduto()}
                icon={<AiOutlineClose size={35} />}
                boxShadow="none !important"
              />
            </PromptProdutoModalClose>
            <div
              id="carouselExampleDark1"
              className="carousel carousel-dark slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                {this.state.list_img.map((data, idx) => {
                  if (idx == 0) {
                    return (
                      <div
                        className="carousel-item active"
                        data-bs-interval="10000"
                      >
                        <img
                          alt="data-imagem"
                          src={data}
                          className="d-block w-100"
                        />
                      </div>
                    );
                  } else {
                    return (
                      <div className="carousel-item" data-bs-interval="2000">
                        <img src={data} className="d-block w-100" alt="..." />
                      </div>
                    );
                  }
                })}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleDark1"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleDark1"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </PromptProdutoModal>
        </PromptProduto>
        <Header />
        {/* <div className="innovation-site__controle__content">
                                <p onClick={()=>window.history.back()} style={{cursor:'pointer'}}>{'< Voltar'}</p>
                                <h5 onClick={()=>window.history.back()} style={{cursor:'pointer'}}><strong>{this.state.dados.nome} - {this.state.dados.referencia}</strong></h5>
                            </div> */}
        {/* <div className="innovation-site__controle">
                        {!this.state.view_embalagem ?
                            <div></div> :
                            <div className="innovation-site__controle__content__voltar">
                                <div className="innovation-site__controle__content__voltar__control" onClick={()=>this.voltarConfiguracao()}>
                                    <div className="innovation-site__controle__content__voltar__control__img" onClick={()=>this.voltarConfiguracao()}>
                                        <img src={btnvoltar} onClick={()=>this.voltarConfiguracao()}/>
                                    </div>
                                    <div className="innovation-site__controle__content__voltar__control__btn" onClick={()=>this.voltarConfiguracao()}>
                                        voltar e alterar configurações
                                    </div>
                                </div>
                            </div>
                        }
                        
                    </div> */}
        <SiteProduto>
          <SiteProdutoContent>
            {!this.state.view_embalagem ? (
              <SiteProdutoContentDadosProdutos>
                <DadosProdutosLoading
                  style={{ display: this.state.loadingProd ? "flex" : "none" }}
                >
                  <img alt="loading" src={loading} />
                </DadosProdutosLoading>
                <DadosProdutosTitle>
                  <DadosProdutosTitleContent>
                    <h1>
                      {this.state.dados.nome} - {this.state.dados.referencia}
                    </h1>
                  </DadosProdutosTitleContent>
                  <DadosProdutosTitleControl
                    onClick={() => window.history.back()}
                  >
                    <img alt="btnvoltarproduto" src={btnvoltarproduto} />
                  </DadosProdutosTitleControl>
                </DadosProdutosTitle>
                <DadosProdutosContent>
                  <DadosProdutosContentSlideImg>
                    <div
                      id="carouselExampleDark"
                      className="carousel carousel-dark slide"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-indicators" style={{zIndex:"revert"}}>
                        {this.state.list_img.map((data, idx) => {
                          if (this.state.dados.quantidade_imagens < 6) {
                            var style = { left: "20px" };
                          } else if (this.state.dados.quantidade_imagens < 8) {
                            var style = { left: "60px" };
                          } else {
                            var style = { left: "190px" };
                          }

                          if (idx == 0) {
                            return (
                              <img
                                style={style}
                                src={data}
                                data-bs-target="#carouselExampleDark"
                                data-bs-slide-to={idx}
                                className="active"
                                aria-current="true"
                                aria-label={"Slide " + (idx + 1)}
                              ></img>
                            );
                          } else {
                            return (
                              <img
                                style={style}
                                src={data}
                                data-bs-target="#carouselExampleDark"
                                data-bs-slide-to={idx}
                                aria-current="true"
                                aria-label={"Slide " + (idx + 1)}
                              ></img>
                            );
                          }
                        })}
                      </div>
                      <div className="carousel-inner">
                        {this.state.list_img.map((data, idx) => {
                          if (idx == 0) {
                            return (
                              <div
                                className="carousel-item active"
                                data-bs-interval="10000"
                              >
                                <img
                                  onClick={() => this.visualizarProduto()}
                                  src={data}
                                  className="d-block w-100"
                                  alt="data-imagem"
                                />
                              </div>
                            );
                          } else {
                            return (
                              <div
                                className="carousel-item"
                                data-bs-interval="2000"
                              >
                                <img
                                  onClick={() => this.visualizarProduto()}
                                  src={data}
                                  className="d-block w-100"
                                  alt="..."
                                />
                              </div>
                            );
                          }
                        })}
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide="prev"
                        style={{zIndex:"revert"}}
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide="next"
                        style={{zIndex:"revert"}}
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                  </DadosProdutosContentSlideImg>
                  {this.state.dados.estoque == "0" ? (
                    <DadosProdutosContentDetalhesIndisponivel>
                      <DadosProdutosContentDetalhesIndisponivelContent>
                        <DetalhesIndisponivelContentHeader>
                          <DetalhesIndisponivelContentHeaderImg>
                            <img
                              alt="produto-indisponivel"
                              src={produtoIndisponivel}
                            />
                          </DetalhesIndisponivelContentHeaderImg>
                          <DetalhesIndisponivelContentHeaderDesc>
                            <h3>
                              A gente te avisa quando ele estiver <br />
                              em nosso estoque. <br />
                              Basta deixar seus dados aqui:
                            </h3>
                          </DetalhesIndisponivelContentHeaderDesc>
                        </DetalhesIndisponivelContentHeader>
                        <DetalhesIndisponivelContentForm>
                          <input
                            id="nome-parceiro-indisponivel"
                            placeholder="* Nome:"
                            type="text"
                            onChange={(e) =>
                              this.changeInputProdutoIndisponivel(
                                e,
                                "nome_parceiro_indisponivel"
                              )
                            }
                          ></input>
                          <input
                            id="email-parceiro-indisponivel"
                            placeholder="* E-mail:"
                            type="text"
                            onChange={(e) =>
                              this.changeInputProdutoIndisponivel(
                                e,
                                "email_parceiro_indisponivel"
                              )
                            }
                          ></input>
                          <DetalhesIndisponivelContentFormAvise
                            onClick={() =>
                              this.salvarAvisoProdutoIndisponivel()
                            }
                          >
                            ME AVISE QUANDO CHEGAR
                          </DetalhesIndisponivelContentFormAvise>
                          <DetalhesIndisponivelContentFormSimilares
                            value={this.state.dados.url_categoria}
                            onClick={(e) =>
                              (window.location.href = e.target.value)
                            }
                          >
                            Ver produtos similares
                          </DetalhesIndisponivelContentFormSimilares>
                        </DetalhesIndisponivelContentForm>
                      </DadosProdutosContentDetalhesIndisponivelContent>
                    </DadosProdutosContentDetalhesIndisponivel>
                  ) : (
                    <DetalhesIndisponivelContentDetalhes>
                      <DetalhesIndisponivelContentDetalhesCores>
                        <DetalhesIndisponivelContentDetalhesCoresContent>
                          <DetalhesIndisponivelContentDetalhesCoresContentTitle>
                            <strong>Selecione a cor do seu brinde</strong>
                          </DetalhesIndisponivelContentDetalhesCoresContentTitle>
                          <DetalhesIndisponivelContentDetalhesCoresGridCores>
                            {this.state.cores.length > 0
                              ? this.state.cores.map((data, idx) => {
                                  if (data.text.indexOf("/") != -1) {
                                    return (
                                      <DetalhesIndisponivelContentDetalhesCoresGridCoresCor>
                                        <DetalhesIndisponivelContentDetalhesCoresGridCoresCircleOut
                                          onClick={() =>
                                            this.selectCores(
                                              data.cod,
                                              data.text,
                                              data.estoque,
                                              data.previsao
                                            )
                                          }
                                          value={data.cod}
                                          style={
                                            this.state.cor_selecionada[0] ==
                                            data.cod
                                              ? {
                                                  border:
                                                    "2px solid " + cor_base_1,
                                                }
                                              : {}
                                          }
                                        >
                                          {data.estoque > 0 ? (
                                            <DetalhesIndisponivelContentDetalhesCoresGridCoresCircleIn
                                              style={{
                                                backgroundImage:
                                                  "linear-gradient(to right, " +
                                                  data.rgb_cores.split("/")[0] +
                                                  "," +
                                                  data.rgb_cores.split("/")[0] +
                                                  "," +
                                                  data.rgb_cores.split("/")[0] +
                                                  "," +
                                                  data.rgb_cores.split("/")[0] +
                                                  "," +
                                                  data.rgb_cores.split("/")[0] +
                                                  ", " +
                                                  data.rgb_cores.split("/")[1] +
                                                  "," +
                                                  data.rgb_cores.split("/")[1] +
                                                  "," +
                                                  data.rgb_cores.split("/")[1] +
                                                  "," +
                                                  data.rgb_cores.split("/")[1] +
                                                  "," +
                                                  data.rgb_cores.split("/")[1] +
                                                  ")",
                                              }}
                                              onClick={() =>
                                                this.selectCores(
                                                  data.cod,
                                                  data.text,
                                                  data.estoque,
                                                  data.previsao
                                                )
                                              }
                                              value={data.cod}
                                            />
                                          ) : (
                                            <DetalhesIndisponivelContentDetalhesCoresGridCoresCircleInOff
                                              style={{
                                                backgroundImage:
                                                  "linear-gradient(to right, " +
                                                  data.rgb_cores.split("/")[0] +
                                                  "," +
                                                  data.rgb_cores.split("/")[0] +
                                                  "," +
                                                  data.rgb_cores.split("/")[0] +
                                                  "," +
                                                  data.rgb_cores.split("/")[0] +
                                                  "," +
                                                  data.rgb_cores.split("/")[0] +
                                                  ", " +
                                                  data.rgb_cores.split("/")[1] +
                                                  "," +
                                                  data.rgb_cores.split("/")[1] +
                                                  "," +
                                                  data.rgb_cores.split("/")[1] +
                                                  "," +
                                                  data.rgb_cores.split("/")[1] +
                                                  "," +
                                                  data.rgb_cores.split("/")[1] +
                                                  ")",
                                              }}
                                            >
                                              <div className="line-off" />
                                            </DetalhesIndisponivelContentDetalhesCoresGridCoresCircleInOff>
                                          )}
                                        </DetalhesIndisponivelContentDetalhesCoresGridCoresCircleOut>
                                      </DetalhesIndisponivelContentDetalhesCoresGridCoresCor>
                                    );
                                  }

                                  return (
                                    <DetalhesIndisponivelContentDetalhesCoresGridCoresCor>
                                      <DetalhesIndisponivelContentDetalhesCoresGridCoresCircleOut
                                        onClick={() =>
                                          this.selectCores(
                                            data.cod,
                                            data.text,
                                            data.estoque,
                                            data.previsao
                                          )
                                        }
                                        value={data.cod}
                                        style={
                                          this.state.cor_selecionada[0] ==
                                          data.cod
                                            ? {
                                                border:
                                                  "2px solid " + cor_base_1,
                                              }
                                            : {}
                                        }
                                      >
                                        {data.estoque > 0 ? (
                                          <DetalhesIndisponivelContentDetalhesCoresGridCoresCircleIn
                                            style={{
                                              backgroundColor: data.rgb_cores,
                                            }}
                                            onClick={() =>
                                              this.selectCores(
                                                data.cod,
                                                data.text,
                                                data.estoque,
                                                data.previsao
                                              )
                                            }
                                            value={data.cod}
                                          />
                                        ) : (
                                          <DetalhesIndisponivelContentDetalhesCoresGridCoresCircleInOff
                                            style={{
                                              backgroundColor: data.rgb_cores,
                                            }}
                                            value={data.cod}
                                          >
                                            <div className="line-off" />
                                          </DetalhesIndisponivelContentDetalhesCoresGridCoresCircleInOff>
                                        )}
                                      </DetalhesIndisponivelContentDetalhesCoresGridCoresCircleOut>
                                    </DetalhesIndisponivelContentDetalhesCoresGridCoresCor>
                                  );
                                })
                              : null}
                          </DetalhesIndisponivelContentDetalhesCoresGridCores>
                          {this.state.nome_cor != null ? (
                            <DetalhesIndisponivelContentDetalhesCoresContentCorSelecionada>
                              Cor: <strong>{this.state.nome_cor}</strong>
                            </DetalhesIndisponivelContentDetalhesCoresContentCorSelecionada>
                          ) : (
                            <div />
                          )}
                          {this.state.cor_estoque != null ? (
                            <DetalhesIndisponivelContentDetalhesCoresContentEstoqueDisponivel>
                              {this.state.cor_indisponivel ? (
                                <img alt="selo-indisponivel" style={{ position: "relative", top: "-6px" }} src={selo_indisponivel} />
                              ) : (
                                <p>Disponivel:{" "}<strong>{parseInt(this.state.cor_estoque).toLocaleString("pt-br", {minimumFractionDigits: 0,})}{" "}unidades</strong></p>
                              )}
                              <span>
                                {this.state.previsao != undefined &&
                                this.state.previsao != "" ? (
                                  <>
                                    Reposição de Estoque:{" "}
                                    <strong>{this.state.previsao}</strong>
                                  </>
                                ) : (
                                  <></>
                                )}
                              </span>
                            </DetalhesIndisponivelContentDetalhesCoresContentEstoqueDisponivel>
                          ) : (
                            <div />
                          )}
                        </DetalhesIndisponivelContentDetalhesCoresContent>
                      </DetalhesIndisponivelContentDetalhesCores>

                      <div
                        style={
                          this.state.cor_indisponivel
                            ? { transition: "0.3s", opacity: "0.3" }
                            : { transition: "0.3s" }
                        }
                      >
                        <DetalhesIndisponivelContentDetalhesGravacao>
                          <DetalhesIndisponivelContentDetalhesGravacaoContent>
                            <DetalhesIndisponivelContentDetalhesGravacaoContentDesc
                              value="passo-gravacao"
                              onClickCapture={(e) => this.changeMenuGravacao(e)}
                            >
                              <p
                                value="passo-gravacao"
                                onClickCapture={(e) =>
                                  this.changeMenuGravacao(e)
                                }
                              >
                                Escolha a forma de impressão do seu logo
                              </p>
                            </DetalhesIndisponivelContentDetalhesGravacaoContentDesc>
                            <DetalhesIndisponivelContentDetalhesGravacaoContentInputGravacao
                              style={
                                this.state.menu_gravacao_view
                                  ? {
                                      borderLeft:
                                        "0.6px solid rgb(204, 204, 204)",
                                      borderRight:
                                        "0.6px solid rgb(204, 204, 204)",
                                    }
                                  : {}
                              }
                              value="passo-gravacao"
                              onClickCapture={(e) => this.changeMenuGravacao(e)}
                            >
                              <DetalhesIndisponivelContentDetalhesGravacaoContentInputGravacaoTitle
                                value="passo-gravacao"
                                onClickCapture={(e) =>
                                  this.changeMenuGravacao(e)
                                }
                              >
                                <p
                                  value="passo-gravacao"
                                  onClickCapture={(e) =>
                                    this.changeMenuGravacao(e)
                                  }
                                >
                                  {/* Gravação:  */}

                                  {this.state.gravacao_selecionadas.length >
                                  0 ? (
                                    this.state.gravacao_selecionadas.map(
                                      (impressaoS) => {
                                        return this.state.tipo_gravacao.map(
                                          (data) => {
                                            if (
                                              data.cod.toString() ==
                                              impressaoS.toString()
                                            ) {
                                              return (
                                                <strong
                                                  value="passo-gravacao"
                                                  onClickCapture={(e) =>
                                                    this.changeMenuGravacao(e)
                                                  }
                                                >
                                                  {" " +
                                                    (data.nome.length > 30
                                                      ? data.nome.substring(
                                                          0,
                                                          30
                                                        ) + "..."
                                                      : data.nome
                                                    ).toString()}
                                                </strong>
                                              );
                                            }
                                          }
                                        );
                                      }
                                    )
                                  ) : (
                                    <div></div>
                                  )}
                                </p>

                                {this.state.gravacao_selecionadas.length > 0 ? (
                                  this.state.gravacao_selecionadas.map(
                                    (impressaoS) => {
                                      return this.state.tipo_gravacao.map(
                                        (data) => {
                                          if (
                                            data.cod.toString() ==
                                            impressaoS.toString()
                                          ) {
                                            return (
                                              <img
                                                alt="duvida"
                                                src={duvida}
                                                data-bs-toggle="tooltip"
                                                data-bs-placement="top"
                                                title={data.tooltip}
                                              />
                                            );
                                          }
                                        }
                                      );
                                    }
                                  )
                                ) : (
                                  <div></div>
                                )}
                              </DetalhesIndisponivelContentDetalhesGravacaoContentInputGravacaoTitle>
                              <DetalhesIndisponivelContentDetalhesGravacaoContentInputGravacaoContent
                                style={style_gravacao}
                              >
                                <ul style={style_gravacao_ul}>
                                  {this.state.tipo_gravacao.map((data, idx) => {
                                    if (
                                      this.state.inputFiltroGravacao != null &&
                                      this.state.inputFiltroGravacao != ""
                                    ) {
                                      if (
                                        data.nome
                                          .toLowerCase()
                                          .indexOf(
                                            this.state.inputFiltroGravacao.toLowerCase()
                                          ) != -1
                                      ) {
                                        if (this.state.verMaisGravacao) {
                                          return (
                                            <li>
                                              <input
                                                value={data.cod}
                                                checked={
                                                  this.state.gravacao_selecionadas.includes(
                                                    data.cod.toString()
                                                  )
                                                    ? true
                                                    : false
                                                }
                                                type="checkbox"
                                                onClick={(e) => {
                                                  this.selectGravacao(e);
                                                  this.fecharTodosOsMenus();
                                                }}
                                              />
                                              <p
                                                style={
                                                  data.nome.length > 24
                                                    ? {
                                                        width: "190px",
                                                        height: "40px",
                                                        top: "8px",
                                                      }
                                                    : { width: "190px" }
                                                }
                                              >
                                                <strong>{data.nome}</strong>
                                              </p>
                                            </li>
                                          );
                                        } else {
                                          if (idx < 4) {
                                            return (
                                              <li>
                                                <input
                                                  value={data.cod}
                                                  checked={
                                                    this.state.gravacao_selecionadas.includes(
                                                      data.cod.toString()
                                                    )
                                                      ? true
                                                      : false
                                                  }
                                                  type="checkbox"
                                                  onClick={(e) => {
                                                    this.selectGravacao(e);
                                                    this.fecharTodosOsMenus();
                                                  }}
                                                />
                                                <p
                                                  style={
                                                    data.nome.length > 24
                                                      ? {
                                                          width: "190px",
                                                          height: "40px",
                                                          top: "8px",
                                                        }
                                                      : { width: "190px" }
                                                  }
                                                >
                                                  <strong>{data.nome}</strong>
                                                </p>
                                              </li>
                                            );
                                          }
                                        }
                                      }
                                    } else {
                                      if (this.state.verMaisGravacao) {
                                        return (
                                          <li>
                                            <input
                                              value={data.cod}
                                              checked={
                                                this.state.gravacao_selecionadas.includes(
                                                  data.cod.toString()
                                                )
                                                  ? true
                                                  : false
                                              }
                                              type="checkbox"
                                              onClick={(e) => {
                                                this.selectGravacao(e);
                                                this.fecharTodosOsMenus();
                                              }}
                                            />
                                            <p
                                              style={
                                                data.nome.length > 24
                                                  ? {
                                                      width: "190px",
                                                      height: "40px",
                                                      top: "8px",
                                                    }
                                                  : { width: "190px" }
                                              }
                                            >
                                              <strong>{data.nome}</strong>
                                            </p>
                                          </li>
                                        );
                                      } else {
                                        if (idx < 4) {
                                          return (
                                            <li>
                                              <input
                                                value={data.cod}
                                                checked={
                                                  this.state.gravacao_selecionadas.includes(
                                                    data.cod.toString()
                                                  )
                                                    ? true
                                                    : false
                                                }
                                                type="checkbox"
                                                onClick={(e) => {
                                                  this.selectGravacao(e);
                                                  this.fecharTodosOsMenus();
                                                }}
                                              />
                                              <p
                                                style={
                                                  data.nome.length > 24
                                                    ? {
                                                        width: "190px",
                                                        height: "40px",
                                                        top: "8px",
                                                      }
                                                    : { width: "190px" }
                                                }
                                              >
                                                <strong>{data.nome}</strong>
                                              </p>
                                            </li>
                                          );
                                        }
                                      }
                                    }
                                  })}
                                </ul>
                              </DetalhesIndisponivelContentDetalhesGravacaoContentInputGravacaoContent>
                            </DetalhesIndisponivelContentDetalhesGravacaoContentInputGravacao>
                          </DetalhesIndisponivelContentDetalhesGravacaoContent>
                        </DetalhesIndisponivelContentDetalhesGravacao>

                        <ContentDetalhesQuantidadeBatidas
                          style={{ position: "relative", top: "10px" }}
                        >
                          <ContentDetalhesQuantidadeBatidasContent
                            style={
                              this.state.menu_qtd_batidas_view
                                ? { border: "0.6px solid #F1F2F2" }
                                : {}
                            }
                          >
                            <ContentDetalhesQuantidadeBatidasContentDesc
                              value="passo-qtd-batidas"
                              onClickCapture={(e) =>
                                this.changeMenuQtdBatidas(e)
                              }
                            >
                              <p
                                value="passo-qtd-batidas"
                                onClickCapture={(e) =>
                                  this.changeMenuQtdBatidas(e)
                                }
                              >
                                Defina quantas vezes seu logo vai ser impresso
                              </p>
                            </ContentDetalhesQuantidadeBatidasContentDesc>
                            <ContentDetalhesQuantidadeBatidasContentInputBatidas
                              value="passo-qtd-batidas"
                              style={
                                this.state.menu_qtd_batidas_view
                                  ? {
                                      borderLeft:
                                        "0.6px solid rgb(204, 204, 204)",
                                      borderRight:
                                        "0.6px solid rgb(204, 204, 204)",
                                    }
                                  : {}
                              }
                              onClickCapture={(e) =>
                                this.changeMenuQtdBatidas(e)
                              }
                            >
                              <ContentDetalhesQuantidadeBatidasContentInputBatidasTitle
                                value="passo-qtd-batidas"
                                onClickCapture={(e) =>
                                  this.changeMenuQtdBatidas(e)
                                }
                              >
                                <p
                                  value="passo-qtd-batidas"
                                  onClickCapture={(e) =>
                                    this.changeMenuQtdBatidas(e)
                                  }
                                >
                                  {/* Quantidade de batidas:  */}
                                  {this.state.qtd_batidas_selecionadas.length >
                                  0 ? (
                                    <strong
                                      value="passo-qtd-batidas"
                                      onClickCapture={(e) =>
                                        this.changeMenuQtdBatidas(e)
                                      }
                                    >
                                      {parseInt(
                                        this.state.qtd_batidas_selecionadas[0]
                                      ) > 1
                                        ? nome_numeros[
                                            this.state
                                              .qtd_batidas_selecionadas[0]
                                          ] + " impressões"
                                        : nome_numeros[
                                            this.state
                                              .qtd_batidas_selecionadas[0]
                                          ] + " impressão"}
                                    </strong>
                                  ) : null}
                                </p>
                                <img alt="duvida" src={duvida} />
                              </ContentDetalhesQuantidadeBatidasContentInputBatidasTitle>
                              <ContentDetalhesQuantidadeBatidasContentInputBatidasContent
                                style={style_qtd_batidas}
                              >
                                <ul style={style_qtd_batidas_ul}>
                                  {this.state.numero_max_impressoes.map(
                                    (data, idx) => {
                                      if (
                                        this.state.inputFiltroQtdBatidas !=
                                          null &&
                                        this.state.inputFiltroQtdBatidas != ""
                                      ) {
                                        if (
                                          data.nome
                                            .toLowerCase()
                                            .indexOf(
                                              this.state.inputFiltroQtdBatidas.toLowerCase()
                                            ) != -1
                                        ) {
                                          if (this.state.verMaisQtdBatidas) {
                                            return (
                                              <li>
                                                <input
                                                  value={data}
                                                  checked={
                                                    this.state.qtd_batidas_selecionadas.includes(
                                                      data
                                                    )
                                                      ? true
                                                      : false
                                                  }
                                                  type="checkbox"
                                                  onClick={(e) => {
                                                    this.selectQtdBatidas(e);
                                                    this.fecharTodosOsMenus();
                                                  }}
                                                />
                                                <p style={{ width: "190px" }}>
                                                  <strong>
                                                    {data == 1
                                                      ? nome_numeros[data] +
                                                        " impressão"
                                                      : nome_numeros[data] +
                                                        " impressões"}
                                                  </strong>
                                                </p>
                                              </li>
                                            );
                                          } else {
                                            if (idx < 4) {
                                              return (
                                                <li>
                                                  <input
                                                    value={data}
                                                    checked={
                                                      this.state.qtd_batidas_selecionadas.includes(
                                                        data
                                                      )
                                                        ? true
                                                        : false
                                                    }
                                                    type="checkbox"
                                                    onClick={(e) => {
                                                      this.selectQtdBatidas(e);
                                                      this.fecharTodosOsMenus();
                                                    }}
                                                  />
                                                  <p style={{ width: "190px" }}>
                                                    <strong>
                                                      {data == 1
                                                        ? nome_numeros[data] +
                                                          " impressão"
                                                        : nome_numeros[data] +
                                                          " impressões"}
                                                    </strong>
                                                  </p>
                                                </li>
                                              );
                                            }
                                          }
                                        }
                                      } else {
                                        if (this.state.verMaisQtdBatidas) {
                                          return (
                                            <li>
                                              <input
                                                value={data}
                                                checked={
                                                  this.state.qtd_batidas_selecionadas.includes(
                                                    data
                                                  )
                                                    ? true
                                                    : false
                                                }
                                                type="checkbox"
                                                onClick={(e) => {
                                                  this.selectQtdBatidas(e);
                                                  this.fecharTodosOsMenus();
                                                }}
                                              />
                                              <p style={{ width: "190px" }}>
                                                <strong>
                                                  {data == 1
                                                    ? nome_numeros[data] +
                                                      " impressão"
                                                    : nome_numeros[data] +
                                                      " impressões"}
                                                </strong>
                                              </p>
                                            </li>
                                          );
                                        } else {
                                          if (idx < 4) {
                                            return (
                                              <li>
                                                <input
                                                  value={data}
                                                  checked={
                                                    this.state.qtd_batidas_selecionadas.includes(
                                                      data
                                                    )
                                                      ? true
                                                      : false
                                                  }
                                                  type="checkbox"
                                                  onClick={(e) => {
                                                    this.selectQtdBatidas(e);
                                                    this.fecharTodosOsMenus();
                                                  }}
                                                />
                                                <p style={{ width: "190px" }}>
                                                  <strong>
                                                    {data == 1
                                                      ? nome_numeros[data] +
                                                        " impressão"
                                                      : nome_numeros[data] +
                                                        " impressões"}
                                                  </strong>
                                                </p>
                                              </li>
                                            );
                                          }
                                        }
                                      }
                                    }
                                  )}
                                </ul>
                              </ContentDetalhesQuantidadeBatidasContentInputBatidasContent>
                            </ContentDetalhesQuantidadeBatidasContentInputBatidas>
                          </ContentDetalhesQuantidadeBatidasContent>
                        </ContentDetalhesQuantidadeBatidas>

                        <DetalhesPrazo
                          style={{ position: "relative", top: "20px" }}
                        >
                          <DetalhesPrazoContent
                            style={
                              this.state.menu_prazo_view
                                ? {
                                    borderTopRightRadius: "5px",
                                    borderRight:
                                      "0.6px solid rgb(190, 190, 190)",
                                  }
                                : {}
                            }
                          >
                            <DetalhesPrazoContentDesc
                              value="passo-prazo"
                              onClickCapture={(e) => this.changeMenuPrazo(e)}
                            >
                              <p
                                value="passo-prazo"
                                onClickCapture={(e) => this.changeMenuPrazo(e)}
                              >
                                Escolha o dia que o seu brinde vai ficar pronto:
                              </p>
                            </DetalhesPrazoContentDesc>
                            <DetalhesPrazoContentInputPrazo
                              value="passo-prazo"
                              style={
                                this.state.menu_prazo_view
                                  ? {
                                      borderRight:
                                        "0.6px solid rgb(190, 190, 190)",
                                    }
                                  : {}
                              }
                              onClickCapture={(e) => this.changeMenuPrazo(e)}
                            >
                              <DetalhesPrazoContentInputPrazoTitle
                                value="passo-prazo"
                                onClickCapture={(e) => this.changeMenuPrazo(e)}
                              >
                                <p
                                  value="passo-prazo"
                                  onClickCapture={(e) =>
                                    this.changeMenuPrazo(e)
                                  }
                                >
                                  {/* Prazo de produção:  */}
                                  {this.state.prazo_selecionadas.length > 0 ? (
                                    <strong
                                      value="passo-prazo"
                                      onClickCapture={(e) =>
                                        this.changeMenuPrazo(e)
                                      }
                                    >
                                      {this.state.prazo_producao.map((data) => {
                                        if (
                                          data.prazo ==
                                          this.state.prazo_selecionadas[0]
                                        ) {
                                          return (
                                            data.data_producao +
                                            " (" +
                                            data.nome_data +
                                            ") "
                                          );
                                        }
                                      })}
                                      {/* {' '+(parseInt(this.state.prazo_selecionadas[0]) > 1 ? this.state.prazo_selecionadas[0]+' dias uteis de produção':this.state.prazo_selecionadas[0]+' dia util de produção').toString()} */}
                                    </strong>
                                  ) : null}
                                </p>
                                {parseInt(this.state.prazo_selecionadas[0]) ==
                                10 ? (
                                  <img
                                    alt="mais-economico"
                                    value="passo-prazo"
                                    onClickCapture={(e) =>
                                      this.changeMenuPrazo(e)
                                    }
                                    src={maisEconomico}
                                  />
                                ) : parseInt(
                                    this.state.prazo_selecionadas[0]
                                  ) == 1 ? (
                                  <img
                                    alt="mais-ultrarapido"
                                    value="passo-prazo"
                                    onClickCapture={(e) =>
                                      this.changeMenuPrazo(e)
                                    }
                                    src={maisUltraRapido}
                                  />
                                ) : (
                                  <div></div>
                                )}
                                {/* <img src={duvida} /> */}
                              </DetalhesPrazoContentInputPrazoTitle>
                              <DetalhesPrazoContentInputPrazoContent
                                style={style_prazo}
                              >
                                <ul style={style_prazo_ul}>
                                  {this.state.prazo_producao.map((data) => {
                                    if (parseInt(data.prazo) == 1) {
                                      return (
                                        <li>
                                          <input
                                            type="checkbox"
                                            value={parseInt(data.prazo)}
                                            checked={
                                              this.state
                                                .prazo_selecionadas[0] ==
                                              parseInt(data.prazo)
                                                ? true
                                                : false
                                            }
                                            onClick={(e) => {
                                              this.selectPrazo(e);
                                              this.fecharTodosOsMenus();
                                            }}
                                          />
                                          <p
                                            style={{
                                              backgroundColor: cor_base_2,
                                              color: "white",
                                            }}
                                          >
                                            <strong
                                              style={{
                                                width: "100px",
                                                left: "5px",
                                              }}
                                            >
                                              {data.data_producao}
                                            </strong>
                                            <strong
                                              style={{
                                                fontSize: "13px",
                                                top: "3px",
                                                left: "5px",
                                                width: "85px",
                                              }}
                                            >
                                              ({data.nome_data})
                                            </strong>
                                            <strong
                                              style={{
                                                width: "110px",
                                                left: "0px",
                                              }}
                                            >
                                              MAIS RÁPIDO
                                            </strong>
                                          </p>
                                          {/* <img src={maisUltraRapido} /> */}
                                        </li>
                                      );
                                    } else {
                                      if (parseInt(data.prazo) == 10) {
                                        return (
                                          <li>
                                            <input
                                              type="checkbox"
                                              value={parseInt(data.prazo)}
                                              checked={
                                                this.state
                                                  .prazo_selecionadas[0] ==
                                                parseInt(data.prazo)
                                                  ? true
                                                  : false
                                              }
                                              onClick={(e) => {
                                                this.selectPrazo(e);
                                                this.fecharTodosOsMenus();
                                              }}
                                            />
                                            <p
                                              style={{
                                                backgroundColor: cor_base_1,
                                                color: "white",
                                              }}
                                            >
                                              <strong
                                                style={{
                                                  width: "100px",
                                                  left: "5px",
                                                }}
                                              >
                                                {data.data_producao}
                                              </strong>
                                              <strong
                                                style={{
                                                  fontSize: "13px",
                                                  top: "3px",
                                                  left: "5px",
                                                  width: "85px",
                                                }}
                                              >
                                                ({data.nome_data})
                                              </strong>
                                              <strong
                                                style={{
                                                  width: "110px",
                                                  left: "0px",
                                                }}
                                              >
                                                MAIS ECONÔMICO
                                              </strong>
                                            </p>
                                            {/* <img src={maisEconomico} /> */}
                                          </li>
                                        );
                                      } else {
                                        return (
                                          <li>
                                            <input
                                              type="checkbox"
                                              value={parseInt(data.prazo)}
                                              checked={
                                                this.state
                                                  .prazo_selecionadas[0] ==
                                                parseInt(data.prazo)
                                                  ? true
                                                  : false
                                              }
                                              onClick={(e) => {
                                                this.selectPrazo(e);
                                                this.fecharTodosOsMenus();
                                              }}
                                            />
                                            <p>
                                              <strong
                                                style={{
                                                  width: "100px",
                                                  left: "5px",
                                                }}
                                              >
                                                {data.data_producao}
                                              </strong>
                                              <strong
                                                style={{
                                                  fontSize: "13px",
                                                  top: "3px",
                                                  left: "5px",
                                                  width: "85px",
                                                }}
                                              >
                                                ({data.nome_data})
                                              </strong>
                                              <strong
                                                style={{ width: "110px" }}
                                              ></strong>
                                            </p>
                                          </li>
                                        );
                                      }
                                    }
                                  })}
                                  <DetalhesPrazoContentInputPrazoContentDesc>
                                    <p style={{ width: "100%" }}>
                                      * Previsão de produção para pedidos
                                      aprovados até{" "}
                                      {new Date().getHours() >= 14
                                        ? "amanhã"
                                        : "hoje"}
                                      ,<br />
                                      dia{" "}
                                      {new Date().getHours() >= 14
                                        ? new Date().getDate() + 1
                                        : new Date().getDate()}{" "}
                                      até as 14hrs. <br />
                                      ** Seu produto estará disponível para
                                      retirada a partir das 17:00 hrs da data
                                      escolhida.
                                    </p>
                                  </DetalhesPrazoContentInputPrazoContentDesc>
                                </ul>
                              </DetalhesPrazoContentInputPrazoContent>
                            </DetalhesPrazoContentInputPrazo>
                          </DetalhesPrazoContent>
                        </DetalhesPrazo>

                        <DetalhesQuantidade
                          style={{ position: "relative", top: "30px" }}
                        >
                          <DetalhesQuantidadeContent
                            style={
                              this.state.menu_qtd_view
                                ? {
                                    borderTopRightRadius: "5px",
                                    borderRight:
                                      "0.6px solid rgb(190, 190, 190)",
                                  }
                                : {}
                            }
                          >
                            <DetalhesQuantidadeContentDesc
                              value="passo-qtd"
                              onClickCapture={(e) => this.changeMenuQtd(e)}
                            >
                              <p
                                value="passo-qtd"
                                onClickCapture={(e) => this.changeMenuQtd(e)}
                              >
                                Quantas unidades você quer orçar?
                              </p>
                            </DetalhesQuantidadeContentDesc>
                            <DetalhesQuantidadeContentInputQuantidade
                              value="passo-qtd"
                              style={
                                this.state.menu_qtd_view
                                  ? { borderRight: "0.6px solid #F1F2F2" }
                                  : {}
                              }
                              onClickCapture={(e) => this.changeMenuQtd(e)}
                            >
                              <DetalhesQuantidadeContentInputQuantidadeTitle
                                value="passo-qtd"
                                onClickCapture={(e) => this.changeMenuQtd(e)}
                              >
                                {this.state.menu_qtd_view ? (
                                  <p
                                    value="passo-qtd"
                                    onClickCapture={(e) =>
                                      this.changeMenuQtd(e)
                                    }
                                  >
                                    <strong
                                      value="passo-qtd"
                                      onClickCapture={(e) =>
                                        this.changeMenuQtd(e)
                                      }
                                    >
                                      Selecione uma das quantidades abaixo
                                    </strong>
                                  </p>
                                ) : (
                                  <p
                                    value="passo-qtd"
                                    onClickCapture={(e) =>
                                      this.changeMenuQtd(e)
                                    }
                                  >
                                    {/* Quantidade:  */}
                                    {this.state.qtd_selecionadas.length > 0 ? (
                                      this.state.qtd_selecionadas[0] == 1000 ? (
                                        <strong
                                          value="passo-qtd"
                                          onClickCapture={(e) =>
                                            this.changeMenuQtd(e)
                                          }
                                        >
                                          1.000 unidades
                                          {/* <div value="passo-qtd" onClickCapture={(e)=>this.changeMenuQtd(e)} className="innovation-site__produto__content__dados-produtos__content__detalhes__qtd__content__input-qtd__title__selo"> */}
                                          {/* <h4 value="passo-qtd" onClickCapture={(e)=>this.changeMenuQtd(e)}>MELHOR OFERTA</h4> */}
                                          {/* </div> */}
                                        </strong>
                                      ) : (
                                        <strong
                                          value="passo-qtd"
                                          onClickCapture={(e) =>
                                            this.changeMenuQtd(e)
                                          }
                                        >
                                          {" " +
                                            (parseInt(
                                              this.state.qtd_selecionadas[0]
                                            ) > 1
                                              ? this.state.qtd_selecionadas[0] +
                                                ""
                                              : this.state.qtd_selecionadas[0] +
                                                ""
                                            ).toString()}{" "}
                                          unidades
                                        </strong>
                                      )
                                    ) : null}
                                    {this.state.qtd_selecionadas[0] == 1000 ? (
                                      <img
                                        alt="melhor-oferta"
                                        value="passo-qtd"
                                        onClickCapture={(e) =>
                                          this.changeMenuQtd(e)
                                        }
                                        src={melhorOferta}
                                      />
                                    ) : null}
                                  </p>
                                )}
                              </DetalhesQuantidadeContentInputQuantidadeTitle>
                              <DetalhesQuantidadeContentInputQuantidadeContent
                                style={style_qtd}
                              >
                                <ul style={style_qtd_ul}>
                                  {this.state.quantidades.map((data, idx) => {
                                    if (data == 1000) {
                                      return (
                                        <li>
                                          <input
                                            value={data}
                                            checked={
                                              this.state.qtd_selecionadas.includes(
                                                data
                                              )
                                                ? true
                                                : false
                                            }
                                            type="checkbox"
                                            onClick={(e) => {
                                              this.selectQtd(e);
                                              this.fecharTodosOsMenus();
                                            }}
                                          />
                                          <p>
                                            <strong>
                                              {parseInt(data).toLocaleString(
                                                "pt-br",
                                                { minimumFractionDigits: 0 }
                                              )}{" "}
                                              unidades
                                            </strong>
                                          </p>
                                          <DetalhesQuantidadeContentInputQuantidadeTitleSelo>
                                            <img
                                              alt="melhor-oferta"
                                              src={melhorOferta}
                                            />
                                          </DetalhesQuantidadeContentInputQuantidadeTitleSelo>
                                        </li>
                                      );
                                    } else {
                                      return (
                                        <li>
                                          <input
                                            value={data}
                                            checked={
                                              this.state.qtd_selecionadas.includes(
                                                data
                                              )
                                                ? true
                                                : false
                                            }
                                            type="checkbox"
                                            onClick={(e) => {
                                              this.selectQtd(e);
                                              this.fecharTodosOsMenus();
                                            }}
                                          />
                                          <p style={{ width: "190px" }}>
                                            <strong>
                                              {parseInt(data).toLocaleString(
                                                "pt-br",
                                                { minimumFractionDigits: 0 }
                                              )}{" "}
                                              unidades
                                            </strong>
                                          </p>
                                        </li>
                                      );
                                    }
                                  })}
                                </ul>

                                <DetalhesQuantidadeContentInputQuantidadeContentLabel
                                  style={style_qtd_input}
                                >
                                  <strong>
                                    Ou digite a quantidade desejada
                                  </strong>
                                </DetalhesQuantidadeContentInputQuantidadeContentLabel>

                                <DetalhesQuantidadeContentInputQuantidadeContentInput
                                  style={style_qtd_input}
                                >
                                  <label style={style_qtd_input}>
                                    <strong>Quantidade:</strong>
                                  </label>
                                  <input
                                    style={style_qtd_input}
                                    type="text"
                                    onChange={(e) =>
                                      this.changeQuantidadeValor(e)
                                    }
                                    onKeyDown={(e) =>
                                      this.changeQuantidadeValor(e)
                                    }
                                  />
                                  <label
                                    style={
                                      this.state.menu_qtd_view
                                        ? { display: "block", left: "10px" }
                                        : { display: "none" }
                                    }
                                  >
                                    <strong>unidades</strong>
                                  </label>
                                </DetalhesQuantidadeContentInputQuantidadeContentInput>
                                <DetalhesQuantidadeContentInputQuantidadeContentButton
                                  style={style_qtd_input}
                                >
                                  <button
                                    onClick={() => {
                                      this.clickFiltroQuantidade();
                                      this.fecharTodosOsMenus();
                                    }}
                                  >
                                    <strong>OK</strong>
                                  </button>
                                </DetalhesQuantidadeContentInputQuantidadeContentButton>
                              </DetalhesQuantidadeContentInputQuantidadeContent>
                            </DetalhesQuantidadeContentInputQuantidade>
                          </DetalhesQuantidadeContent>
                        </DetalhesQuantidade>
                      </div>

                      {!this.state.cor_indisponivel ? (
                        <DetalhesValor>
                          <DetalhesValorContent>
                            <p>por apenas</p>

                            {this.state.loadingValor ? (
                              <img alt="green-loading" src={greenLoading} />
                            ) : (
                              <strong>
                                R${" "}
                                {parseFloat(
                                  this.state.preco_home
                                ).toLocaleString("pt-br", {
                                  minimumFractionDigits: 2,
                                })}
                              </strong>
                            )}

                            <p style={{ top: "-12px" }}>a unidade</p>
                          </DetalhesValorContent>
                        </DetalhesValor>
                      ) : (
                        <></>
                      )}

                      {/* <div className="innovation-site__produto__content__dados-produtos__content__detalhes__valor-black-friday">
                                                    <div className="innovation-site__produto__content__dados-produtos__content__detalhes__valor-black-friday__content">
                                                        <div className="innovation-site__produto__content__dados-produtos__content__detalhes__valor-black-friday__content__close">
                                                            <div className="innovation-site__produto__content__dados-produtos__content__detalhes__valor-black-friday__content__close__line-x" />
                                                            <div className="innovation-site__produto__content__dados-produtos__content__detalhes__valor-black-friday__content__close__line-y" />

                                                        </div>
                                                            
                                                        <p>por apenas</p>

                                                        {this.state.loadingValor ?
                                                            <img src={greenLoading} />:
                                                            <strong>R$ {parseFloat(this.state.preco_home).toLocaleString('pt-br', {minimumFractionDigits: 2})}</strong>
                                                        }
                                                        
                                                        <p style={{top:'-12px'}}>a unidade</p>
                                                    </div>
                                                    <div className="innovation-site__produto__content__dados-produtos__content__detalhes__valor-black-friday__selo">
                                                        <span className="icon icon-35 icon-10-desconto-orange"></span>
                                                    </div>
                                                    <div className="innovation-site__produto__content__dados-produtos__content__detalhes__valor-black-friday__content-black-friday">
                                                        <p>BLACK FRIDAY</p>

                                                        {this.state.loadingValor ?
                                                            <img src={greenLoading} />:
                                                            <strong>R$ {(Math.round(parseFloat(this.state.preco_home - ((this.state.preco_home)*10/100)) * 100) / 100).toLocaleString('pt-br', {minimumFractionDigits: 2})}</strong>
                                                        }
                                                        
                                                        <p>a unidade</p>
                                                    </div>
                                                </div> */}

                      {!this.state.cor_indisponivel ? (
                        <DetalhesConcluir>
                          <DetalhesConcluirContent>
                            <button
                              onClick={() =>
                                this.state.dados.ad_embalagem != null
                                  ? this.telaEmbalagem()
                                  : this.addProdutoCarrinho()
                              }
                            >
                              GERAR ORÇAMENTO
                            </button>
                          </DetalhesConcluirContent>
                        </DetalhesConcluir>
                      ) : (
                        <></>
                      )}
                    </DetalhesIndisponivelContentDetalhes>
                  )}
                </DadosProdutosContent>

                <DescricaoMobile>
                    <DescricaoContentMobile>

                      <DescricaoContentDescMobile
                        style={
                          this.state.verMaisDescricao
                            ? { transition: "0.6s", height: "auto" }
                            : {}
                        }
                      >
                        <img alt="icon-desc" src={icon_desc} />
                        <strong>DESCRIÇÃO</strong>

                        {this.state.dados.caracteristicas != undefined ? (
                          this.state.dados.caracteristicas.length > 250 ? (
                            this.state.verMaisDescricao ? (
                              <div>
                                <p>{this.state.dados.caracteristicas}</p>
                              </div>
                            ) : (
                              <div>
                                <p>
                                  {this.state.dados.caracteristicas.substring(
                                    0,
                                    240
                                  ) + "..."}
                                </p>
                                <a onClick={() => this.verMaisDescricao()}>
                                  Ver mais
                                </a>
                              </div>
                            )
                          ) : (
                            <div>
                              <p>{this.state.dados.caracteristicas}</p>
                            </div>
                          )
                        ) : (
                          ""
                        )}
                      </DescricaoContentDescMobile>

                      <DescricaoContentDimensaoMobile>
                        <img alt="icon-dimensao" src={icon_dimensao} />
                        <strong>DIMENSÕES</strong>
                        <p>
                          {this.state.dados.dimensoes + " "}
                          <p
                            style={{
                              fontSize: "12px",
                              left: "0px",
                              top: "0px",
                            }}
                          >
                            (Esse produto é produzido por diversos
                            fabricantes, portanto as medidas e o peso
                            apresentados podem sofrer pequenas alterações.)
                          </p>
                        </p>
                      </DescricaoContentDimensaoMobile>
                    </DescricaoContentMobile>
                </DescricaoMobile>


              </SiteProdutoContentDadosProdutos>
            ) : (
              <SiteProdutoContentDadosProdutos>
                
                <DadosProdutosTitle>
                  <DadosProdutosTitleContent>
                    <h1>
                      {this.state.dados.nome} - {this.state.dados.referencia}
                    </h1>
                  </DadosProdutosTitleContent>
                  <DadosProdutosTitleControl
                    onClick={() => this.voltarConfiguracao()}
                  >
                    <img alt="btnvoltarproduto" src={btnvoltarproduto} />
                  </DadosProdutosTitleControl>
                </DadosProdutosTitle>

                <DadosProdutosOpcoesEmbalagem>
                  <DadosProdutosOpcoesEmbalagemAvisoEmbalagem>
                    <DadosProdutosOpcoesEmbalagemAvisoEmbalagemBotaoGratis
                      onClick={() => this.addProdutoCarrinho("Gratis")}
                    ></DadosProdutosOpcoesEmbalagemAvisoEmbalagemBotaoGratis>
                    <p>COMO GOSTARIA QUE SEU BRINDE FOSSE EMBALADO?</p>
                    <img alt="banner-embalagem" src={bannerEmbalagem} />
                  </DadosProdutosOpcoesEmbalagemAvisoEmbalagem>
                  <AvisoEmbalagemMobile>
                    <AvisoEmbalagemContentMobile>
                      <img alt="emb-gratis" src={emb_gratis} />
                      <AvisoEmbalagemContentBtnMobile
                        onClick={() => this.addProdutoCarrinho("Gratis")}
                      ></AvisoEmbalagemContentBtnMobile>
                    </AvisoEmbalagemContentMobile>
                  </AvisoEmbalagemMobile>

                  <OpcoesEmbalagensContent>
                    

                    <VisualMobile>
                      <VisualImgMobile>
                        <h1>QUERO QUE MEU BRINDE VIRE UM PRESENTE!</h1>
                        {this.state.embalagem_selecionadas.includes("Plus") ? (
                          <div
                            id="carouselExampleDark2"
                            style={{ height: "449px" }}
                            className="carousel carousel-dark slide"
                            data-bs-ride="carousel"
                          >
                            <div className="carousel-inner">
                              <div
                                className="carousel-item active"
                                data-bs-interval="2000"
                              >
                                <img
                                  alt="embalagem"
                                  src={
                                    "/images/embalagem" +
                                    this.state.image_embalagem +
                                    "plus/plus1.jpg"
                                  }
                                  className="d-block w-100"
                                />
                              </div>
                              <div
                                className="carousel-item"
                                data-bs-interval="2000"
                              >
                                <img
                                  src={
                                    "/images/embalagem" +
                                    this.state.image_embalagem +
                                    "plus/plus2.jpg"
                                  }
                                  className="d-block w-100"
                                  alt="..."
                                />
                              </div>
                              <div
                                className="carousel-item"
                                data-bs-interval="2000"
                              >
                                <img
                                  src={
                                    "/images/embalagem" +
                                    this.state.image_embalagem +
                                    "plus/plus3.jpg"
                                  }
                                  className="d-block w-100"
                                  alt="..."
                                />
                              </div>
                            </div>
                            <button
                              className="carousel-control-prev"
                              type="button"
                              data-bs-target="#carouselExampleDark2"
                              data-bs-slide="prev"
                            >
                              <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"
                              ></span>
                              <span className="visually-hidden">Previous</span>
                            </button>
                            <button
                              className="carousel-control-next"
                              type="button"
                              data-bs-target="#carouselExampleDark2"
                              data-bs-slide="next"
                            >
                              <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                              ></span>
                              <span className="visually-hidden">Next</span>
                            </button>
                          </div>
                        ) : this.state.embalagem_selecionadas.includes(
                            "Box"
                          ) ? (
                          <img
                            alt="embalagem"
                            src={
                              "/images/embalagem/" + this.state.image_embalagem
                            }
                          />
                        ) : this.state.embalagem_selecionadas.includes(
                            "Print"
                          ) ? (
                          <img
                            alt="embalagem"
                            src={
                              "/images/embalagem/" + this.state.image_embalagem
                            }
                          />
                        ) : (
                          <img
                            alt="embalagem"
                            src={
                              "/images/embalagem/" + this.state.image_embalagem
                            }
                          />
                        )}
                      </VisualImgMobile>
                    </VisualMobile>

                          
                    <DetalhesMobile>
                      <DetalhesContentMobile>
                        <DetalhesContentDescricaoMobile>
                          {this.state.embalagem_selecionadas.includes("Box") ? (
                            <p>
                              {" "}
                              Seu brinde em uma embalagem especial,
                              <br />
                              com 6 opções de cores. Escolha a sua!
                            </p>
                          ) : this.state.embalagem_selecionadas.includes(
                              "Print"
                            ) ? (
                            <p>
                              {" "}
                              Seu brinde em uma embalagem especial.
                              <br />
                              São 6 opções de cores e personalizadas <br />
                              <strong>com logo de sua empresa</strong>
                            </p>
                          ) : this.state.embalagem_selecionadas.includes(
                              "Plus"
                            ) ? (
                            <div>
                              <p>
                                <strong>A melhor opção!</strong> Totalmente
                                impressa, <br />
                                deixando seu brinde muito mais exclusivo.
                              </p>
                              <p
                                style={{
                                  height: "89px",
                                  position: "relative",
                                  float: "left",
                                  marginTop: "5px",
                                  fontSize: "85%",
                                }}
                              >
                                Após finalizar seu pedido/orçamento, enviaremos
                                <br />o gabarito e a Instrução para a criação da{" "}
                                <br />
                                sua embalagem.
                              </p>
                            </div>
                          ) : (
                            <div></div>
                          )}
                        </DetalhesContentDescricaoMobile>
                      </DetalhesContentMobile>
                    </DetalhesMobile>


                    <OpcoesEmbalagensContentDetalhesMobile>
                      <OpcoesEmbalagensContentDetalhesMobileContentQueroCaixa>
                        <OpcoesEmbalagensContentDetalhesMobileQueroCaixaTitle>
                          <p>
                            Escolha uma das <br />
                            <strong>3 opções</strong> disponíveis abaixo
                          </p>
                        </OpcoesEmbalagensContentDetalhesMobileQueroCaixaTitle>
                        <OpcoesEmbalagensContentDetalhesMobileQueroCaixaContentSelecao>
                          <OpcoesEmbalagensContentDetalhesMobileQueroCaixaContentSelecaoContent
                            style={
                              this.state.menu_embalagem_view
                                ? { border: "0.6px solid #F1F2F2" }
                                : {}
                            }
                          >
                            <OpcoesEmbalagensContentDetalhesMobileQueroCaixaContentSelecaoContentInputSelecao
                              value="passo-embalagem"
                              style={
                                this.state.menu_embalagem_view
                                  ? { borderRight: "0.6px solid #F1F2F2" }
                                  : {}
                              }
                              onClickCapture={(e) =>
                                this.changeMenuEmbalagem(e)
                              }
                            >
                              <OpcoesEmbalagensContentDetalhesMobileQueroCaixaContentSelecaoContentInputSelecaoTitle
                                value="passo-embalagem"
                                onClickCapture={(e) =>
                                  this.changeMenuEmbalagem(e)
                                }
                              >
                                <p
                                  value="passo-embalagem"
                                  onClickCapture={(e) =>
                                    this.changeMenuEmbalagem(e)
                                  }
                                >
                                  <strong
                                    value="passo-embalagem"
                                    onClickCapture={(e) =>
                                      this.changeMenuEmbalagem(e)
                                    }
                                  >
                                    Embalagem{" "}
                                  </strong>
                                  <strong
                                    value="passo-embalagem"
                                    onClickCapture={(e) =>
                                      this.changeMenuEmbalagem(e)
                                    }
                                    style={{
                                      color: cor_base_2,
                                      fontFamily: "Akrobat extraBold",
                                      fontSize: "95%",
                                      letterSpacing: "0.03rem",
                                    }}
                                  >
                                    {this.state.embalagem_selecionadas[0] ==
                                    "Box"
                                      ? "COLORIDA"
                                      : this.state.embalagem_selecionadas[0] ==
                                        "Print"
                                      ? "COLORIDA + SUA MARCA"
                                      : this.state.embalagem_selecionadas[0] ==
                                        "Plus"
                                      ? "FULL PRINT"
                                      : ""}
                                  </strong>
                                </p>
                              </OpcoesEmbalagensContentDetalhesMobileQueroCaixaContentSelecaoContentInputSelecaoTitle>
                              <OpcoesEmbalagensContentDetalhesMobileQueroCaixaContentSelecaoContentInputSelecaoContent
                                style={style_embalagem}
                              >
                                <ul style={style_embalagem_ul}>
                                  <li>
                                    <input
                                      value="Box"
                                      checked={
                                        this.state.embalagem_selecionadas.includes(
                                          "Box"
                                        )
                                          ? true
                                          : false
                                      }
                                      type="checkbox"
                                      onClick={(e) => {
                                        this.selectEmbalagem(e);
                                      }}
                                    />

                                    <p
                                      onClick={() => {
                                        this.selectEmbalagem("Box");
                                      }}
                                    >
                                      <strong
                                        onClick={() => {
                                          this.selectEmbalagem("Box");
                                        }}
                                      >
                                        Embalagem
                                      </strong>
                                      COLORIDA
                                    </p>
                                    {/* <img src={maisUltraRapido} /> */}
                                  </li>
                                  <li>
                                    <input
                                      value="Print"
                                      checked={
                                        this.state.embalagem_selecionadas.includes(
                                          "Print"
                                        )
                                          ? true
                                          : false
                                      }
                                      type="checkbox"
                                      onClick={(e) => {
                                        this.selectEmbalagem(e);
                                      }}
                                    />
                                    <p
                                      onClick={() => {
                                        this.selectEmbalagem("Print");
                                      }}
                                    >
                                      <strong
                                        onClick={() => {
                                          this.selectEmbalagem("Print");
                                        }}
                                      >
                                        Embalagem
                                      </strong>
                                      COLORIDA + SUA MARCA
                                    </p>
                                    {/* <img src={maisUltraRapido} /> */}
                                  </li>
                                  <li>
                                    <input
                                      value="Plus"
                                      checked={
                                        this.state.embalagem_selecionadas.includes(
                                          "Plus"
                                        )
                                          ? true
                                          : false
                                      }
                                      type="checkbox"
                                      onClick={(e) => {
                                        this.selectEmbalagem(e);
                                      }}
                                    />
                                    <p
                                      onClick={() => {
                                        this.selectEmbalagem("Plus");
                                      }}
                                    >
                                      <strong
                                        onClick={() => {
                                          this.selectEmbalagem("Plus");
                                        }}
                                      >
                                        Embalagem
                                      </strong>
                                      FULL PRINT
                                    </p>
                                    {/* <img src={maisUltraRapido} /> */}
                                  </li>
                                </ul>
                              </OpcoesEmbalagensContentDetalhesMobileQueroCaixaContentSelecaoContentInputSelecaoContent>
                            </OpcoesEmbalagensContentDetalhesMobileQueroCaixaContentSelecaoContentInputSelecao>
                          </OpcoesEmbalagensContentDetalhesMobileQueroCaixaContentSelecaoContent>
                        </OpcoesEmbalagensContentDetalhesMobileQueroCaixaContentSelecao>

                        
                      </OpcoesEmbalagensContentDetalhesMobileContentQueroCaixa>
                    </OpcoesEmbalagensContentDetalhesMobile>

                    
                    <DetalhesMobile>
                      <DetalhesContentMobile>
                        <DetalhesContentCoresMobile
                          style={
                            this.state.embalagem_selecionadas.includes("Plus")
                              ? { display: "none" }
                              : { display: "block" }
                          }
                        >
                          <DetalhesContentCoresContentMobile>
                            <DetalhesContentCoresContentTitleMobile>
                              {this.state.nome_cor_embalagem != null &&
                              this.state.nome_cor_embalagem != "" ? (
                                <strong>
                                  Cor da embalagem:{" "}
                                  {this.state.nome_cor_embalagem}
                                </strong>
                              ) : (
                                <strong>
                                  Selecione a cor da sua embalagem:
                                </strong>
                              )}
                            </DetalhesContentCoresContentTitleMobile>
                            <DetalhesContentCoresContentGridCoresMobile>
                              {this.state.cores_embalagem.length > 0
                                ? this.state.cores_embalagem.map(
                                    (data, idx) => {
                                      if (idx == 0) {
                                        var styles = {
                                          border: "2px solid " + cor_base_1,
                                        };
                                      } else {
                                        var styles = {};
                                      }

                                      return (
                                        <DetalhesContentCoresContentGridCoresCorMobile>
                                          <DetalhesContentCoresContentGridCoresCorCircleOutMobile
                                            onClick={() =>
                                              this.selectCoresEmbalagem(
                                                data.cod,
                                                data.text,
                                                data.imagens
                                              )
                                            }
                                            value={data.cod}
                                            style={
                                              this.state
                                                .cor_embalagem_selecionada[0] ==
                                              data.cod
                                                ? {
                                                    border:
                                                      "2px solid " + cor_base_1,
                                                  }
                                                : {}
                                            }
                                          >
                                            <DetalhesContentCoresContentGridCoresCorCircleInMobile
                                              style={{
                                                backgroundColor: data.rgb_cores,
                                              }}
                                              onClick={() =>
                                                this.selectCoresEmbalagem(
                                                  data.cod,
                                                  data.text,
                                                  data.imagens
                                                )
                                              }
                                              value={data.cod}
                                            />
                                          </DetalhesContentCoresContentGridCoresCorCircleOutMobile>
                                        </DetalhesContentCoresContentGridCoresCorMobile>
                                      );
                                    }
                                  )
                                : null}
                            </DetalhesContentCoresContentGridCoresMobile>
                          </DetalhesContentCoresContentMobile>
                        </DetalhesContentCoresMobile>
                      </DetalhesContentMobile>
                    </DetalhesMobile>

                    <OpcoesEmbalagensContentDetalhesMobile style={{height:"80px"}}>
                      <OpcoesEmbalagensContentDetalhesMobileContentQueroCaixa>
                        <OpcoesEmbalagensContentDetalhesMobileQueroCaixaContentSelecaoContentInputSelecaoContentValor>
                            <p>
                              por mais <br />
                              {/* <strong>R$ 1,03</strong> <br/> */}
                              {this.state.loadingValor ? (
                                <img alt="green-loading" src={greenLoading} />
                              ) : null}
                              {this.state.valores_embalagem.length > 0 ? (
                                <strong>
                                  R${" "}
                                  {this.state.valores_embalagem.map(
                                    (data, idx) => {
                                      if (
                                        this.state.embalagem_selecionadas[0] ==
                                          "Box" &&
                                        idx == 0
                                      ) {
                                        return parseFloat(
                                          this.state.valores_embalagem[0]
                                            .replaceAll(".", "")
                                            .replaceAll(",", ".")
                                        ).toLocaleString("pt-br", {
                                          minimumFractionDigits: 2,
                                        });
                                      } else if (
                                        this.state.embalagem_selecionadas[0] ==
                                          "Print" &&
                                        idx == 1
                                      ) {
                                        return parseFloat(
                                          this.state.valores_embalagem[1]
                                            .replaceAll(".", "")
                                            .replaceAll(",", ".")
                                        ).toLocaleString("pt-br", {
                                          minimumFractionDigits: 2,
                                        });
                                      } else if (
                                        this.state.embalagem_selecionadas[0] ==
                                          "Plus" &&
                                        idx == 2
                                      ) {
                                        return parseFloat(
                                          this.state.valores_embalagem[2]
                                            .replaceAll(".", "")
                                            .replaceAll(",", ".")
                                        ).toLocaleString("pt-br", {
                                          minimumFractionDigits: 2,
                                        });
                                      }
                                    }
                                  )}
                                </strong>
                              ) : (
                                <div></div>
                              )}
                              <br />a unidade
                            </p>
                          </OpcoesEmbalagensContentDetalhesMobileQueroCaixaContentSelecaoContentInputSelecaoContentValor>
                      </OpcoesEmbalagensContentDetalhesMobileContentQueroCaixa>
                    </OpcoesEmbalagensContentDetalhesMobile>
                    
                    <DadosProdutosOpcoesEmbalagemContentVisual>
                      <DadosProdutosOpcoesEmbalagemContentVisualTitle>
                        <p>
                          QUERO QUE MEU{" "}
                          <strong>BRINDE VIRE UM PRESENTE!</strong>
                        </p>
                      </DadosProdutosOpcoesEmbalagemContentVisualTitle>
                      <DadosProdutosOpcoesEmbalagemContentVisualTitleImg>
                        {this.state.embalagem_selecionadas.includes("Plus") ? (
                          <div
                            id="carouselExampleDark"
                            style={{ height: "449px" }}
                            className="carousel carousel-dark slide"
                            data-bs-ride="carousel"
                          >
                            <div className="carousel-inner">
                              <div
                                className="carousel-item active"
                                data-bs-interval="2000"
                              >
                                <img
                                  alt="imagem-embalagem"
                                  src={
                                    "/images/embalagem" +
                                    this.state.image_embalagem +
                                    "plus/plus1.jpg"
                                  }
                                  className="d-block w-100"
                                />
                              </div>
                              <div
                                className="carousel-item"
                                data-bs-interval="2000"
                              >
                                <img
                                  src={
                                    "/images/embalagem" +
                                    this.state.image_embalagem +
                                    "plus/plus2.jpg"
                                  }
                                  className="d-block w-100"
                                  alt="..."
                                />
                              </div>
                              <div
                                className="carousel-item"
                                data-bs-interval="2000"
                              >
                                <img
                                  src={
                                    "/images/embalagem" +
                                    this.state.image_embalagem +
                                    "plus/plus3.jpg"
                                  }
                                  className="d-block w-100"
                                  alt="..."
                                />
                              </div>
                            </div>
                            <button
                              className="carousel-control-prev"
                              type="button"
                              data-bs-target="#carouselExampleDark"
                              data-bs-slide="prev"
                            >
                              <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"
                              ></span>
                              <span className="visually-hidden">Previous</span>
                            </button>
                            <button
                              className="carousel-control-next"
                              type="button"
                              data-bs-target="#carouselExampleDark"
                              data-bs-slide="next"
                            >
                              <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                              ></span>
                              <span className="visually-hidden">Next</span>
                            </button>
                          </div>
                        ) : this.state.embalagem_selecionadas.includes(
                            "Box"
                          ) ? (
                          <img
                            alt="imagem-embalagem"
                            src={
                              "/images/embalagem/" + this.state.image_embalagem
                            }
                          />
                        ) : this.state.embalagem_selecionadas.includes(
                            "Print"
                          ) ? (
                          <img
                            alt="imagem-embalagem"
                            src={
                              "/images/embalagem/" + this.state.image_embalagem
                            }
                          />
                        ) : (
                          <img
                            alt="imagem-embalagem"
                            src={
                              "/images/embalagem/" + this.state.image_embalagem
                            }
                          />
                        )}
                      </DadosProdutosOpcoesEmbalagemContentVisualTitleImg>
                    </DadosProdutosOpcoesEmbalagemContentVisual>

                    <DadosProdutosOpcoesEmbalagemContentDetalhes>
                      <DadosProdutosOpcoesEmbalagemContentDetalhesContent>
                        <DadosProdutosOpcoesEmbalagemContentDetalhesContentTitle>
                          <p>
                            Escolha uma das <br />
                            <strong>3 opções</strong> disponíveis abaixo
                          </p>
                        </DadosProdutosOpcoesEmbalagemContentDetalhesContentTitle>
                        <DadosProdutosOpcoesEmbalagemContentDetalhesContentSelecao>
                          <DadosProdutosOpcoesEmbalagemContentDetalhesContentSelecaoContent
                            style={
                              this.state.menu_embalagem_view
                                ? { border: "0.6px solid #F1F2F2" }
                                : {}
                            }
                          >
                            <DadosProdutosOpcoesEmbalagemContentDetalhesContentSelecaoContentInputSelecao
                              value="passo-embalagem"
                              style={
                                this.state.menu_embalagem_view
                                  ? { borderRight: "0.6px solid #F1F2F2" }
                                  : {}
                              }
                              onClickCapture={(e) =>
                                this.changeMenuEmbalagem(e)
                              }
                            >
                              <DadosProdutosOpcoesEmbalagemContentDetalhesContentSelecaoContentInputSelecaoTitle
                                value="passo-embalagem"
                                onClickCapture={(e) =>
                                  this.changeMenuEmbalagem(e)
                                }
                              >
                                <p
                                  value="passo-embalagem"
                                  onClickCapture={(e) =>
                                    this.changeMenuEmbalagem(e)
                                  }
                                >
                                  <strong
                                    value="passo-embalagem"
                                    onClickCapture={(e) =>
                                      this.changeMenuEmbalagem(e)
                                    }
                                  >
                                    Embalagem{" "}
                                  </strong>
                                  <strong
                                    value="passo-embalagem"
                                    onClickCapture={(e) =>
                                      this.changeMenuEmbalagem(e)
                                    }
                                    style={{
                                      color: cor_base_2,
                                      fontFamily: "Akrobat extraBold",
                                      fontSize: "95%",
                                      letterSpacing: "0.03rem",
                                    }}
                                  >
                                    {this.state.embalagem_selecionadas[0] ==
                                    "Box"
                                      ? "COLORIDA"
                                      : this.state.embalagem_selecionadas[0] ==
                                        "Print"
                                      ? "COLORIDA + SUA MARCA"
                                      : this.state.embalagem_selecionadas[0] ==
                                        "Plus"
                                      ? "FULL PRINT"
                                      : ""}
                                  </strong>
                                </p>
                              </DadosProdutosOpcoesEmbalagemContentDetalhesContentSelecaoContentInputSelecaoTitle>
                              <DadosProdutosOpcoesEmbalagemContentDetalhesContentSelecaoContentInputSelecaoContent
                                style={style_embalagem}
                              >
                                <ul style={style_embalagem_ul}>
                                  <li>
                                    <input
                                      value="Box"
                                      checked={
                                        this.state.embalagem_selecionadas.includes(
                                          "Box"
                                        )
                                          ? true
                                          : false
                                      }
                                      type="checkbox"
                                      onClick={(e) => {
                                        this.selectEmbalagem(e);
                                      }}
                                    />

                                    <p
                                      onClick={() => {
                                        this.selectEmbalagem("Box");
                                      }}
                                    >
                                      <strong
                                        onClick={() => {
                                          this.selectEmbalagem("Box");
                                        }}
                                      >
                                        Embalagem
                                      </strong>
                                      COLORIDA
                                    </p>
                                    {/* <img src={maisUltraRapido} /> */}
                                  </li>
                                  <li>
                                    <input
                                      value="Print"
                                      checked={
                                        this.state.embalagem_selecionadas.includes(
                                          "Print"
                                        )
                                          ? true
                                          : false
                                      }
                                      type="checkbox"
                                      onClick={(e) => {
                                        this.selectEmbalagem(e);
                                      }}
                                    />
                                    <p
                                      onClick={() => {
                                        this.selectEmbalagem("Print");
                                      }}
                                    >
                                      <strong
                                        onClick={() => {
                                          this.selectEmbalagem("Print");
                                        }}
                                      >
                                        Embalagem
                                      </strong>
                                      COLORIDA + SUA MARCA
                                    </p>
                                    {/* <img src={maisUltraRapido} /> */}
                                  </li>
                                  <li>
                                    <input
                                      value="Plus"
                                      checked={
                                        this.state.embalagem_selecionadas.includes(
                                          "Plus"
                                        )
                                          ? true
                                          : false
                                      }
                                      type="checkbox"
                                      onClick={(e) => {
                                        this.selectEmbalagem(e);
                                      }}
                                    />
                                    <p
                                      onClick={() => {
                                        this.selectEmbalagem("Plus");
                                      }}
                                    >
                                      <strong
                                        onClick={() => {
                                          this.selectEmbalagem("Plus");
                                        }}
                                      >
                                        Embalagem
                                      </strong>
                                      FULL PRINT
                                    </p>
                                    {/* <img src={maisUltraRapido} /> */}
                                  </li>
                                </ul>
                              </DadosProdutosOpcoesEmbalagemContentDetalhesContentSelecaoContentInputSelecaoContent>
                            </DadosProdutosOpcoesEmbalagemContentDetalhesContentSelecaoContentInputSelecao>
                          </DadosProdutosOpcoesEmbalagemContentDetalhesContentSelecaoContent>
                        </DadosProdutosOpcoesEmbalagemContentDetalhesContentSelecao>

                        <DadosProdutosOpcoesEmbalagemContentDetalhesContentDescricao>
                          {this.state.embalagem_selecionadas.includes("Box") ? (
                            <p>
                              {" "}
                              Seu brinde em uma embalagem especial,
                              <br />
                              com 6 opções de cores. Escolha a sua!
                            </p>
                          ) : this.state.embalagem_selecionadas.includes(
                              "Print"
                            ) ? (
                            <p>
                              {" "}
                              Seu brinde em uma embalagem especial.
                              <br />
                              São 6 opções de cores e personalizadas <br />
                              <strong>com logo de sua empresa</strong>
                            </p>
                          ) : this.state.embalagem_selecionadas.includes(
                              "Plus"
                            ) ? (
                            <div>
                              <p>
                                <strong>A melhor opção!</strong> Totalmente
                                impressa, <br />
                                deixando seu brinde muito mais exclusivo.
                              </p>
                              <p
                                style={{
                                  height: "89px",
                                  position: "relative",
                                  float: "left",
                                  marginTop: "5px",
                                  fontSize: "85%",
                                }}
                              >
                                Após finalizar seu pedido/orçamento, enviaremos
                                <br />o gabarito e a Instrução para a criação da{" "}
                                <br />
                                sua embalagem.
                              </p>
                            </div>
                          ) : (
                            <div></div>
                          )}
                        </DadosProdutosOpcoesEmbalagemContentDetalhesContentDescricao>
                        <OpcoesEmbalagemContentDetalhesContentCores
                          style={
                            this.state.embalagem_selecionadas.includes("Plus")
                              ? { display: "none" }
                              : { display: "block" }
                          }
                        >
                          <OpcoesEmbalagemContentDetalhesContentCoresContent>
                            <OpcoesEmbalagemContentDetalhesContentCoresContentTitle>
                              {this.state.nome_cor_embalagem != null &&
                              this.state.nome_cor_embalagem != "" ? (
                                <strong>
                                  Cor da embalagem:{" "}
                                  {this.state.nome_cor_embalagem}
                                </strong>
                              ) : (
                                <strong>
                                  Selecione a cor da sua embalagem:
                                </strong>
                              )}
                            </OpcoesEmbalagemContentDetalhesContentCoresContentTitle>
                            <OpcoesEmbalagemContentDetalhesContentCoresContentGridCores>
                              {this.state.cores_embalagem.length > 0
                                ? this.state.cores_embalagem.map(
                                    (data, idx) => {
                                      if (idx == 0) {
                                        var styles = {
                                          border: "2px solid " + cor_base_1,
                                        };
                                      } else {
                                        var styles = {};
                                      }

                                      return (
                                        <OpcoesEmbalagemContentDetalhesContentCoresContentGridCoresCor>
                                          <OpcoesEmbalagemContentDetalhesContentCoresContentGridCoresCorCircleOut
                                            onClick={() =>
                                              this.selectCoresEmbalagem(
                                                data.cod,
                                                data.text,
                                                data.imagens
                                              )
                                            }
                                            value={data.cod}
                                            style={
                                              this.state
                                                .cor_embalagem_selecionada[0] ==
                                              data.cod
                                                ? {
                                                    border:
                                                      "2px solid " + cor_base_1,
                                                  }
                                                : {}
                                            }
                                          >
                                            <OpcoesEmbalagemContentDetalhesContentCoresContentGridCoresCorCircleIn
                                              style={{
                                                backgroundColor: data.rgb_cores,
                                              }}
                                              onClick={() =>
                                                this.selectCoresEmbalagem(
                                                  data.cod,
                                                  data.text,
                                                  data.imagens
                                                )
                                              }
                                              value={data.cod}
                                            />
                                          </OpcoesEmbalagemContentDetalhesContentCoresContentGridCoresCorCircleOut>
                                        </OpcoesEmbalagemContentDetalhesContentCoresContentGridCoresCor>
                                      );
                                    }
                                  )
                                : null}
                            </OpcoesEmbalagemContentDetalhesContentCoresContentGridCores>
                          </OpcoesEmbalagemContentDetalhesContentCoresContent>
                        </OpcoesEmbalagemContentDetalhesContentCores>
                        <OpcoesEmbalagemContentDetalhesContentValor>
                          <p>
                            por mais <br />
                            {/* <strong>R$ 1,03</strong> <br/> */}
                            {this.state.loadingValor ? (
                              <img alt="green-loading" src={greenLoading} />
                            ) : null}
                            {this.state.valores_embalagem.length > 0 ? (
                              <strong>
                                R${" "}
                                {this.state.valores_embalagem.map(
                                  (data, idx) => {
                                    if (
                                      this.state.embalagem_selecionadas[0] ==
                                        "Box" &&
                                      idx == 0
                                    ) {
                                      return parseFloat(
                                        this.state.valores_embalagem[0]
                                          .replaceAll(".", "")
                                          .replaceAll(",", ".")
                                      ).toLocaleString("pt-br", {
                                        minimumFractionDigits: 2,
                                      });
                                    } else if (
                                      this.state.embalagem_selecionadas[0] ==
                                        "Print" &&
                                      idx == 1
                                    ) {
                                      return parseFloat(
                                        this.state.valores_embalagem[1]
                                          .replaceAll(".", "")
                                          .replaceAll(",", ".")
                                      ).toLocaleString("pt-br", {
                                        minimumFractionDigits: 2,
                                      });
                                    } else if (
                                      this.state.embalagem_selecionadas[0] ==
                                        "Plus" &&
                                      idx == 2
                                    ) {
                                      return parseFloat(
                                        this.state.valores_embalagem[2]
                                          .replaceAll(".", "")
                                          .replaceAll(",", ".")
                                      ).toLocaleString("pt-br", {
                                        minimumFractionDigits: 2,
                                      });
                                    }
                                  }
                                )}
                              </strong>
                            ) : (
                              <div></div>
                            )}
                            <br />a unidade
                          </p>
                        </OpcoesEmbalagemContentDetalhesContentValor>
                        <OpcoesEmbalagemContentDetalhesContentQueroCaixa>
                          <button onClick={() => this.addProdutoCarrinho()}>
                            QUERO <strong>UMA CAIXA ESPECIAL</strong>
                          </button>
                        </OpcoesEmbalagemContentDetalhesContentQueroCaixa>
                      </DadosProdutosOpcoesEmbalagemContentDetalhesContent>
                    </DadosProdutosOpcoesEmbalagemContentDetalhes>


                    <OpcoesEmbalagensContentDetalhesMobileQueroCaixa>
                      <button onClick={() => this.addProdutoCarrinho()}>
                        QUERO <strong>UMA CAIXA ESPECIAL</strong>
                      </button>
                    </OpcoesEmbalagensContentDetalhesMobileQueroCaixa>

                  </OpcoesEmbalagensContent>
                </DadosProdutosOpcoesEmbalagem>
              </SiteProdutoContentDadosProdutos>
            )}

            {!this.state.view_embalagem ? (
              this.state.dados.caracteristicas != undefined ? (
                <SiteProdutoContentDescricaoProduto
                  style={{
                    height:
                      parseInt(
                        35 * (this.state.dados.caracteristicas.length / 39)
                      ) + "px",
                  }}
                >
                  <SiteProdutoContentDescricaoProdutoContent>
                    <SiteProdutoContentDescricaoProdutoContentDesc>
                      <img alt="icon-desc" src={icon_desc} />
                      <strong>DESCRIÇÃO</strong>
                      <p>{" " + this.state.dados.caracteristicas}</p>
                    </SiteProdutoContentDescricaoProdutoContentDesc>
                    <SiteProdutoContentDescricaoProdutoContentDimensao>
                      <img alt="icon-dimensao" src={icon_dimensao} />
                      <strong>DIMENSÕES</strong>
                      <p>
                        {this.state.dados.dimensoes + " "}
                        <p
                          style={{ fontSize: "12px", left: "0px", top: "0px" }}
                        >
                          (Esse produto é produzido por diversos fabricantes,
                          portanto as medidas e o peso apresentados podem sofrer
                          pequenas alterações.)
                        </p>
                      </p>
                    </SiteProdutoContentDescricaoProdutoContentDimensao>
                  </SiteProdutoContentDescricaoProdutoContent>
                </SiteProdutoContentDescricaoProduto>
              ) : (
                <div></div>
              )
            ) : (
              <div></div>
            )}

            <SiteProdutoContentMaisOpcoes>
              <SiteProdutoContentMaisOpcoesContent>
                <SiteProdutoContentMaisOpcoesContentTopo>
                  <img alt="quer-mais-oferta" src={quer_mais_oferta} />
                </SiteProdutoContentMaisOpcoesContentTopo>
                <SiteProdutoContentMaisOpcoesContentTopoGrid>
                  <SiteProdutoContentMaisOpcoesContentTopoGridSlide>
                    {this.state.dados_produtos_lista.map((data, idx) => {
                      if (idx < 4) {
                        return (
                          <MontaProduto
                            prod_nome={data.prod_nome}
                            codigo_prod={data.prod_cod}
                            url_prod={data.url_prod}
                            img_prod={"/images/produtos" + data.img_prod}
                            descricao={data.descricao}
                            caracteristicas={data.caracteristicas}
                            valor_home={data.valor_home}
                            selo={data.selo}
                            segmento={data.segmento}
                            ultrarapido={data.ultrarapido}
                            idx={idx}
                            cores={data.cores}
                            state={this.state}
                          />
                        );
                      }
                    })}
                  </SiteProdutoContentMaisOpcoesContentTopoGridSlide>
                </SiteProdutoContentMaisOpcoesContentTopoGrid>
              </SiteProdutoContentMaisOpcoesContent>
            </SiteProdutoContentMaisOpcoes>
            {/* {this.state.dados.referencia !== undefined ? <div style={this.state.grid_passos ? {display:'block'}:{display:'none'}}>
                                                                            <Passos 
                                                                                url_img={this.state.list_img[0]}
                                                                                url_prod={this.state.url_produto}
                                                                                cod_prod={this.state.cod_prod}
                                                                                nome_prod={this.state.dados.nome}
                                                                                referencia={this.state.dados.referencia}
                                                                                changeVisible={this.changeVisible}
                                                                                batidadas={this.state.dados.batidadas_maximas}
                                                                                ad_embalagem={this.state.dados.ad_embalagem}
                                                                                changeVisibleLoading={this.changeVisibleLoading}
                                                                                ad_pdv={this.state.dados.ad_pdv}/>
                                                                         </div> : null} */}
          </SiteProdutoContent>
        </SiteProduto>
        {/* <Footer hiddenSlide={true} /> */}
        <FooterText>
            <FooterTextContent>
              <p id="myP" dangerouslySetInnerHTML={{__html:this.state.texto_seo}}></p>
            </FooterTextContent>
        </FooterText>
        <Footer chat_only={true} />
        <FooterSocialMediaComponent />
        </Box>
      </>

    );
  }
}

export default Produtobkp;

function ifnull(a, b) {
  if (a === null || a === undefined || a === "") {
    return b;
  } else {
    return a;
  }
}

function MontaProduto(data) {

  
  if (data.cores != "") {
    var cores = data.cores.split(";");
  }else{
    var cores = [];
  }

  // var tooltipTriggerList = [].slice.call(
  //   document.querySelectorAll('[data-bs-toggle="tooltip"]')
  // );
  // var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  //   return new Bootstrap.Tooltip(tooltipTriggerEl);
  // });

  var seloprod = {};
  if (data.segmento != "") {
    if (data.segmento == "N") {
      seloprod = {
        width: "78px",
        height: "21px",
        left: "120px",
        backgroundImage: 'url("/images/menu/NOVIDADE.png")',
      };
    } else if (data.segmento == "U") {
      seloprod = {
        width: "95px",
        height: "21px",
        left: "104px",
        backgroundImage: 'url("/images/menu/ultrarapido.png")',
      };
    } else if (data.segmento == "NN") {
      seloprod = {
        width: "78px",
        height: "21px",
        left: "120px",
        backgroundImage: 'url("/images/menu/NOVIDADE.png")',
      };
    } else if (data.segmento == "UN") {
      seloprod = {
        width: "78px",
        height: "21px",
        left: "120px",
        backgroundImage: 'url("/images/menu/NOVIDADE.png")',
      };
    }
  }

  return (
    <CategoriaContainerContentGridProdutosProduto
      style={data.idx == 0 ? { marginLeft: "5px" } : {}}
    >
      <CategoriaContainerContentGridProdutosProdutoTitle>
        <strong>
          <h1>{data.prod_nome}</h1>
        </strong>
        <p style={{ top: "8px" }}>
          -{" "}
          {data.codigo_prod
            .toString()
            .substring(data.codigo_prod.toString().length - 4, 100)}{" "}
          -
        </p>
      </CategoriaContainerContentGridProdutosProdutoTitle>
      <CategoriaContainerContentGridProdutosProdutoCardProd>
        <a href={"/" + data.url_prod}>
          <CategoriaContainerContentGridProdutosProdutoCardProdImgProd
            src={data.img_prod}
          />
        </a>

        {data.selo == "S" ? <SeloEmbalagem /> : <div></div>}
        {data.seloprod != "" ? <Selo style={seloprod} /> : <div></div>}

        <CardProdDesc>
          <p>{ifnull(data.caracteristicas, "").substring(0, 55)}...</p>
        </CardProdDesc>
        <CardProdCores>
          <CardProdCoresTitle>
            <p>
              <strong>Cores:</strong>
            </p>
          </CardProdCoresTitle>
          <CardProdCoresGridCores>
            <CardProdCoresGridCoresContent>
              {cores != undefined ? 
                cores.map((data, idx) => {
                    if (idx == 0 || idx == 5 || idx == 10) {
                      if (data.trim() != "") {
                        if (data.split(":")[0].indexOf("/") != -1) {
                          if (
                            data.split(":")[1].split("/")[0] == "#ffffff" ||
                            data.split(":")[1].split("/")[1] == "#ffffff"
                          ) {
                            return (
                              <CardProdCoresGridCoresContentCor
                                style={{
                                  marginLeft: "0px",
                                  backgroundImage:
                                    "linear-gradient(to right, " +
                                    data.split(":")[1].split("/")[0] +
                                    "," +
                                    data.split(":")[1].split("/")[0] +
                                    "," +
                                    data.split(":")[1].split("/")[0] +
                                    "," +
                                    data.split(":")[1].split("/")[0] +
                                    "," +
                                    data.split(":")[1].split("/")[0] +
                                    ", " +
                                    data.split(":")[1].split("/")[1] +
                                    "," +
                                    data.split(":")[1].split("/")[1] +
                                    "," +
                                    data.split(":")[1].split("/")[1] +
                                    "," +
                                    data.split(":")[1].split("/")[1] +
                                    "," +
                                    data.split(":")[1].split("/")[1] +
                                    ")",
                                  border: "1px solid rgb(180,180,180)",
                                }}
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title={data.split(":")[0]}
                              ></CardProdCoresGridCoresContentCor>
                            );
                          } else {
                            return (
                              <CardProdCoresGridCoresContentCor
                                style={{
                                  marginLeft: "0px",
                                  backgroundImage:
                                    "linear-gradient(to right, " +
                                    data.split(":")[1].split("/")[0] +
                                    "," +
                                    data.split(":")[1].split("/")[0] +
                                    "," +
                                    data.split(":")[1].split("/")[0] +
                                    "," +
                                    data.split(":")[1].split("/")[0] +
                                    "," +
                                    data.split(":")[1].split("/")[0] +
                                    ", " +
                                    data.split(":")[1].split("/")[1] +
                                    "," +
                                    data.split(":")[1].split("/")[1] +
                                    "," +
                                    data.split(":")[1].split("/")[1] +
                                    "," +
                                    data.split(":")[1].split("/")[1] +
                                    "," +
                                    data.split(":")[1].split("/")[1] +
                                    ")",
                                }}
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title={data.split(":")[0]}
                              ></CardProdCoresGridCoresContentCor>
                            );
                          }
                        }

                        if (data.split(":")[1] == "#ffffff") {
                          return (
                            <CardProdCoresGridCoresContentCor
                              style={{
                                marginLeft: "0px",
                                backgroundColor: data.split(":")[1] + "",
                                border: "1px solid rgb(180,180,180)",
                              }}
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title={data.split(":")[0]}
                            ></CardProdCoresGridCoresContentCor>
                          );
                        } else {
                          return (
                            <CardProdCoresGridCoresContentCor
                              style={{
                                marginLeft: "0px",
                                backgroundColor: data.split(":")[1] + "",
                              }}
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title={data.split(":")[0]}
                            ></CardProdCoresGridCoresContentCor>
                          );
                        }
                      }
                    } else {
                      if (data.trim() != "") {
                        if (data.split(":")[0].indexOf("/") != -1) {
                          if (
                            data.split(":")[1].split("/")[0] == "#ffffff" ||
                            data.split(":")[1].split("/")[1] == "#ffffff"
                          ) {
                            return (
                              <CardProdCoresGridCoresContentCor
                                style={{
                                  backgroundImage:
                                    "linear-gradient(to right, " +
                                    data.split(":")[1].split("/")[0] +
                                    "," +
                                    data.split(":")[1].split("/")[0] +
                                    "," +
                                    data.split(":")[1].split("/")[0] +
                                    "," +
                                    data.split(":")[1].split("/")[0] +
                                    "," +
                                    data.split(":")[1].split("/")[0] +
                                    ", " +
                                    data.split(":")[1].split("/")[1] +
                                    "," +
                                    data.split(":")[1].split("/")[1] +
                                    "," +
                                    data.split(":")[1].split("/")[1] +
                                    "," +
                                    data.split(":")[1].split("/")[1] +
                                    "," +
                                    data.split(":")[1].split("/")[1] +
                                    ")",
                                  border: "1px solid rgb(180,180,180)",
                                }}
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title={data.split(":")[0]}
                              ></CardProdCoresGridCoresContentCor>
                            );
                          } else {
                            return (
                              <CardProdCoresGridCoresContentCor
                                style={{
                                  backgroundImage:
                                    "linear-gradient(to right, " +
                                    data.split(":")[1].split("/")[0] +
                                    "," +
                                    data.split(":")[1].split("/")[0] +
                                    "," +
                                    data.split(":")[1].split("/")[0] +
                                    "," +
                                    data.split(":")[1].split("/")[0] +
                                    "," +
                                    data.split(":")[1].split("/")[0] +
                                    ", " +
                                    data.split(":")[1].split("/")[1] +
                                    "," +
                                    data.split(":")[1].split("/")[1] +
                                    "," +
                                    data.split(":")[1].split("/")[1] +
                                    "," +
                                    data.split(":")[1].split("/")[1] +
                                    "," +
                                    data.split(":")[1].split("/")[1] +
                                    ")",
                                }}
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title={data.split(":")[0]}
                              ></CardProdCoresGridCoresContentCor>
                            );
                          }
                        }
                        if (data.split(":")[1] == "#ffffff") {
                          return (
                            <CardProdCoresGridCoresContentCor
                              style={{
                                backgroundColor: data.split(":")[1] + "",
                                border: "1px solid rgb(180,180,180)",
                              }}
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title={data.split(":")[0]}
                            ></CardProdCoresGridCoresContentCor>
                          );
                        } else {
                          return (
                            <CardProdCoresGridCoresContentCor
                              style={{
                                backgroundColor: data.split(":")[1] + "",
                              }}
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title={data.split(":")[0]}
                            ></CardProdCoresGridCoresContentCor>
                          );
                        }
                      }
                    }
                  })
                : null}
            </CardProdCoresGridCoresContent>
          </CardProdCoresGridCores>
        </CardProdCores>
        <CardProdValor>
          <CardProdValorContent>
            <p>
              {parseFloat(
                data.valor_home.replaceAll(".", "").replaceAll(",", ".")
              ) != 0.0 ? (
                <div>
                  a partir de <br />
                  <strong>
                    R${" "}
                    {parseFloat(
                      data.valor_home.replaceAll(".", "").replaceAll(",", ".")
                    ).toLocaleString("pt-br", { minimumFractionDigits: 2 })}
                    <br />
                  </strong>
                  <p style={{ fontSize: "11px" }}>gerado pela melhor oferta</p>
                </div>
              ) : (
                <div></div>
              )}
            </p>
          </CardProdValorContent>
        </CardProdValor>
      </CategoriaContainerContentGridProdutosProdutoCardProd>
      <GridProdutosProdutoBTNConferir>
        <a href={"/" + data.url_prod}>
          <button>
            <strong>CONFIRA</strong>
          </button>
        </a>
      </GridProdutosProdutoBTNConferir>
    </CategoriaContainerContentGridProdutosProduto>
  );
}
