import React, { Component } from "react"
import Header from "../Header"
import Footer from "../Footer"
import Moment from "moment"
import { ComponentPdf } from "./components/ComponentPdf"
import { ComponentProduto } from "./components/ComponentProduto"
import { ComponentPassos } from "./components/ComponentPassos"
import { parseCookies } from "nookies"
import {
  buscaValorProduto,
  buscaMelhorOfertaProduto,
  dadosProdutosSubcategoria,
  ListaPrazoDeProducao,
  buscaProduto,
  GerarOrcamento,
} from "../../services/api"
import { Alert, AlertIcon, Box, ChakraProvider, CloseButton, Flex, Text } from "@chakra-ui/react"
import Head from "next/head"
import { NextSeo } from "next-seo"
import FooterSocialMediaComponent from "../Footer/FooterSocialMedia"
import {
  ComponentDesktopTitle,
  ComponentGridMaisOfertas,
  DivComponentDesktop,
  DivComponentMobile,
  DivComponentMobile2,
  FlexContainerProdutoColumnRow,
  FlexContainerProdutos,
  FooterText,
  FooterTextContent,
} from "./styles"
import ComponentProductList from "./components/ComponentProductList"
import ComponentDescricaoDimensao from "./components/ComponentDescricaoDimensao"
import { BotaoVoltar } from "./components/BotaoVoltar"
import ComponentFormIndisponivel from "./components/ComponentFormIndisponivel"
import { useCart } from "../../contexts/useCart"
import { FontStyles } from "../Home/styles"

const geraorcamentopdv = "/images/menu/gera-orcamento-pdv.jpg"
const greenLoading = "/images/menu/green-loader.gif"

// const maisUltraRapido = '/images/menu/ultrarapido-CONFIGURE.png';
const maisUltraRapido = "/images/menu/ultrarapido-branco.png"
// const maisEconomico = '/images/menu/MAIS-ECONOMICO.png';
const maisEconomico = "/images/menu/mais-economico-branco.png"
const melhorOferta = "/images/menu/melhor-oferta-branco.png"

const bannerEmbalagem = "/images/banners/banner-embalagem-gratis.png"
const btnvoltar = "/images/btnvoltar.png"

const btnvoltarproduto = "/images/menu/voltar-produto.png"

const duvida_branca = "/images/menu/duvida-branco.png"

const icon_desc = "/images/menu/icon-desc.png"
const icon_dimensao = "/images/menu/icon-dimensao.png"

const quer_mais_oferta = "/images/quer-mais-oferta.png"

const emb_gratis = "/images/menu/embalagem-gratis-mobile.png"

const produtoIndisponivel = "/images/menu/produto-indisponivel.png"

const loading = "/images/loading.gif"
const duvida = "/images/duvida.png"
const selo_indisponivel = "images/indisponivel.png"
const confiraTambem = "/images/home/confira-tambem.png"
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
}

class Produto extends Component {
  static contextType = useCart

  constructor(props) {
    super(props)

    this.state = {
      dados: this.props.dados,
      prazo_producao: this.props.prazo_producao,
      dados_produtos_lista: [],
      url_img: null,
      list_img: [],
      tipo_gravacao: this.props.gravacao,
      cores: this.props.cores,
      lists_quantidades: [],
      numero_max_impressoes: [],
      quantidades: [50, 100, 500, 1000],
      cod_prod: this.props.cod_prod,
      url_site: null,
      url_produto: null,
      preco_home: this.props.preco_home,
      display_init: 0,
      texto_seo: this.props.texto_seo,
      prazo_selecionado: "",
      resumo: false,
      loadingValor: false,
      cor_selecionada: null,
      tipo_gravacao_selecionada: null,
      impressao_produto: null,
      prazo_selecionado: null,
      quantidade_selecionada: null,
      loading_orcamento_pdf: false,
      altura_caixa_brinde: 0,
      largura_caixa_brinde: 0,
      peso_caixa_brinde: 0,
      orcamento_block: false,
      quantidade_resumo: null,
      addressClientValue: null,
      frete_gratis: null,
    }
    this.resumoView = this.resumoView.bind(this)
    this.componentPdfRefs = React.createRef()
    this.componentPassosRefs = React.createRef()
  }

  componentDidMount() {
    this.submitCustomQtd()
    this.getGridProduto()

    this.setState({
      url_site:
        window.location.hostname.indexOf("localhost") != -1
          ? window.location.hostname + ":3000"
          : window.location.hostname,
      loadingValor: true,
    })

    var url = window.location.href.replace("https://" + this.state.url_site + "/", "")
    this.setState({ url_produto: url })

    var self = this
    setTimeout(function () {
      self.setState({ display_init: 1 })
    }, 1000)
    // this.getProduto(cod_prod);
    this.getCorProduto(this.state.cod_prod)
    this.getTipoGravacao(this.state.cod_prod)
  }

  handleInputsPassos = async (items) => {
    for await (let item of items) {
      if (this.ifnull(item.value, "") != "" && this.ifnull(item.state, "")) {
        this.setState({ [item.state]: item.value })
      }
    }
    this.buscarValor()
    this.listQuantidadesPorPreco()
  }

  atualizaQtd = (qtd) => {
    this.setState({ quantidade_resumo: qtd })
  }

  listQuantidadesPorPreco = async () => {
    try {
      var result = []

      var qtds = [50, 100, 500, 1000]

      this.state.cores.map((data) => {
        if (
          parseInt(data.cod) == parseInt(this.state.cor_selecionada.cod) ||
          parseInt(data.cod) == parseInt(this.state.cor_selecionada)
        ) {
          if (parseInt(data.estoque) < 50) {
            qtds = [data.estoque]
          }
        }
      })

      for await (var qtd of qtds) {
        if (this.state.cor_selecionada != "") {
          var estoque = false
          var quantidade_disponivel = 0
          this.state.cores.map((data) => {
            if (
              parseInt(data.cod) == parseInt(this.state.cor_selecionada.cod) ||
              parseInt(data.cod) == parseInt(this.state.cor_selecionada)
            ) {
              if (parseInt(this.ifnull(qtd, 1000)) <= parseInt(data.estoque)) {
                estoque = true
                quantidade_disponivel = parseInt(data.estoque)
              } else {
                quantidade_disponivel = parseInt(data.estoque)
              }
            }
          })

          if (estoque) {
            var tipo_gravacao =
              this.state.tipo_gravacao_selecionada != null ? this.state.tipo_gravacao_selecionada.cod : null
            var prazo = this.state.prazo_selecionado != null ? this.state.prazo_selecionado.prazo : null

            var param = {
              codigo_produto: this.state.dados.codigo_produto,
              codigo_impressao: tipo_gravacao,
              quantidade: qtd,
              codigo_cor: this.state.cor_selecionada.cod,
              batidas: this.ifnull(this.state.impressao_produto, null),
              prazo_entrega: prazo,
            }

            const response = await buscaValorProduto.post("", param)
            var dados = response.data

            result.push({
              quantidade: qtd,
              valor: parseFloat(dados.valor_unitario).toFixed(2),
            })
          }
        }
      }

      this.setState({ lists_quantidades: result })
    } catch (error) {
      console.log(Object.keys(error), error.message)
    }
  }

  resumoView = () => {
    this.setState({ resumo: true })
  }

  // eslint-disable-next-line react/no-typos

  submitCustomQtd = async () => {
    try {
      const response = await buscaProduto.post(
        "listar-tabela-preco/" + this.state.cod_prod + "/" + this.state.quantidade_selecionada,
      )
      var dados = await response.data

      var qtdcaixa = []
      var altura = []
      var largura = []
      var comprimento = []
      var peso = []
      var calc_kangu = []
      var cubagemTotal = []
      for (var d of dados) {
        if (d.mensagem != null) {
          var mensagem = d.mensagem.split(",")
          for (var m of mensagem) {
            // "QuantidadeProduto=50,CODPROD=77,IDCORES=0,CodigoImpressao=30,Impressao=Placa Prata Las,Batidas=1,ValorVenda=70.32,ValorTotalVenda=3516,PercComissao=0,Altura=27,Largura=22,Comprimento=22,PesoCaixa=0.2,QtdPorCaixa=10,Caixa=27 X 22 X 22,QtdCaixa=5,CubagemUnitaria=4.85,CubagemTotal=24.25;"
            if (m.indexOf("QtdCaixa") != -1) {
              qtdcaixa.push({
                valor: m.replace("QtdCaixa=", "").replace(".", ","),
              })
            }
            if (m.indexOf("CubagemTotal") != -1) {
              cubagemTotal.push({
                valor: m.replace("CubagemTotal=", "").replace(";", ""),
              })
            }
            if (m.indexOf("Altura") != -1) {
              altura.push({
                valor: m.replace("Altura=", "").replace(".", ","),
              })
            }
            if (m.indexOf("Largura") != -1) {
              largura.push({
                valor: m.replace("Largura=", "").replace(".", ","),
              })
            }
            if (m.indexOf("Comprimento") != -1) {
              comprimento.push({
                valor: m.replace("Comprimento=", "").replace(".", ","),
              })
            }
            if (m.indexOf("PesoCaixa") != -1) {
              peso.push({
                valor: m.replace("PesoCaixa=", "").replace(".", ","),
              })
            }
          }
        }
      }

      calc_kangu.push(dados[0].calc_kangu)

      await this.setState({
        qtd_caixa_brinde: qtdcaixa[0],
        altura_caixa_brinde: altura[0],
        largura_caixa_brinde: largura[0],
        comprimento_caixa_brinde: comprimento[0],
        peso_caixa_brinde: peso[0],
        calc_kangu: dados[0].calc_kangu,
        cubagem_total: cubagemTotal[0],
      })
    } catch (error) {
      console.log(Object.keys(error), error.message)
    }
  }

  ComponentDidMount = async () => {
    this.submitCustomQtd()
  }

  addProdutoCarrinho = async (tipo_embalagem = null) => {
    await this.submitCustomQtd()

    var cubagem = {
      altura: { valor: this.state.altura_caixa_brinde?.valor },
      largura: { valor: this.state.largura_caixa_brinde.valor },
      comprimento: { valor: this.state.comprimento_caixa_brinde.valor },
      peso: { valor: this.state.peso_caixa_brinde.valor },
      qtdcaixa: { valor: this.state.qtd_caixa_brinde.valor },
    }

    var gravacao = null

    this.state.tipo_gravacao.map((data) => {
      if (data.cod == this.state.tipo_gravacao_selecionada.cod) {
        gravacao = { cod: data.cod, desc: data.nome }
      }
    })

    var cor = null

    this.state.cores.map((data) => {
      if (data.cod == this.state.cor_selecionada.cod) {
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

    var TipoEmbalagem = ""
    var valorUnitarioEmbalagem = "0,00"
    var valorTotalEmbalagem = "0,00"
    var codigo_impressao = ""

    const hash =
      "produto_" +
      this.state.cod_prod +
      "_" +
      Math.floor(Date.now() * Math.random()).toString(36) +
      "_" +
      Math.random() * 10
    var produto = {
      id_hash: hash,
      imagem: this.state.dados.imagem_produto,
      codprod: this.state.cod_prod,
      nome_prod: this.state.dados.nome,
      referencia: this.state.dados.referencia,
      ad_embalagem: null,
      cubagem_embalagem: [null, null, null, null],
      batidas: this.state.impressao_produto,
      cor_produto: cor,
      valor_unitario_embalagem: valorUnitarioEmbalagem,
      valor_total_embalagem: valorTotalEmbalagem,
      tipo_embalagem: "",
      cubagem: cubagem,
      quantidade: this.state.quantidade_selecionada,
      prazo: this.state.prazo_selecionado.prazo,
      valor_unitario: (Math.round(parseFloat(this.state.preco_home) * 100) / 100).toLocaleString("pt-br", {
        minimumFractionDigits: 2,
      }),
      valor_total: (
        (Math.round(parseFloat(this.state.preco_home) * 100) / 100) *
        parseInt(this.state.quantidade_selecionada)
      )
        .toString()
        .replaceAll(".", ","),
      prazo_entrega: this.state.prazo_selecionado.prazo,
      tipo_gravacao: gravacao,
      codigo_impressao_embalagem: "",
      url_img: this.state.list_img[0],
      url_prod: this.state.url_produto,
      genero: this.state.genero,
    }

    localStorage.setItem(hash, JSON.stringify(produto))
    window.location.href = "/carrinho"
  }

  getEstoqueMaximo = async (estoque) => {
    this.setState({ quantidades: [1000, 500, 300, 100] })

    var quantidade_disponivel = []
    this.state.quantidades.map((data) => {
      if (data <= estoque) {
        quantidade_disponivel.push(data)
      } else if (data == 1000 && estoque >= data) {
        quantidade_disponivel.push(data)
      } else if (estoque <= data && estoque != quantidade_disponivel[quantidade_disponivel.length - 1]) {
        quantidade_disponivel.push(estoque)
      }
    })

    var qtd_filtrada = this.state.quantidade_selecionada
    if (parseInt(this.state.qtd_inicial) >= parseInt(estoque)) {
      this.setState({
        quantidade_selecionada: parseInt(estoque),
        quantidades: quantidade_disponivel,
      })
    } else if (
      parseInt(this.state.qtd_inicial) <= parseInt(estoque) &&
      parseInt(this.state.qtd_inicial) >= parseInt(qtd_filtrada)
    ) {
      this.setState({
        quantidade_selecionada: parseInt(this.state.qtd_inicial),
        quantidades: quantidade_disponivel,
      })
    } else {
      this.setState({
        quantidades: quantidade_disponivel,
        quantidade_selecionada: parseInt(qtd_filtrada),
      })
    }
  }

  getConfiguracao = async (cod_prod) => {
    try {
      var maiorEstoque = 0
      this.state.cores.map((data) => {
        if (parseInt(data.estoque) > maiorEstoque) {
          maiorEstoque = parseInt(data.estoque)
        }
      })

      if (maiorEstoque >= 1000) {
        const response = await buscaMelhorOfertaProduto.get(cod_prod + "/" + 1000)
        var dados = response.data
      } else {
        const response = await buscaMelhorOfertaProduto.get(cod_prod + "/" + maiorEstoque)
        var dados = response.data
      }

      var cor_buscada
      this.state.cores.map((data) => {
        if (data.cod == dados.IDCORES) {
          cor_buscada = data
        }
      })

      var tipo_gravacao
      this.state.tipo_gravacao.map((data) => {
        if (data.cod == dados.CodigoImpressao) {
          tipo_gravacao = data
        }
      })

      var prazo_producao
      this.state.prazo_producao.map((data) => {
        if (data.prazo == "10" || data.prazo == "15") {
          prazo_producao = data
        }
      })

      var quantidade_disponivel = []
      this.state.quantidades.map((data) => {
        if (data <= maiorEstoque) {
          quantidade_disponivel.push(data)
        } else if (maiorEstoque != quantidade_disponivel[quantidade_disponivel.length - 1]) {
          quantidade_disponivel.push(maiorEstoque)
        }
      })

      await this.setState({
        cor_selecionada: cor_buscada,
        cor_estoque: cor_buscada.estoque,
        previsao: cor_buscada.previsao,
        qtd_inicial: parseInt(dados.QuantidadeProduto),
        qtd_selecionadas: [parseInt(dados.QuantidadeProduto)],
        quantidade_selecionada: parseInt(dados.QuantidadeProduto),
        qtd_batidas_selecionadas: [1],
        quantidade_selecionada: parseInt(dados.QuantidadeProduto),
        impressao_produto: 1,
        gravacao_selecionadas: [dados.CodigoImpressao],
        tipo_gravacao_selecionada: tipo_gravacao,
        prazo_selecionadas: ["10"],
        prazo_selecionado: prazo_producao,
        preco_home: dados.ValorVenda,
        loadingValor: false,
        quantidades: quantidade_disponivel,
        maiorEstoque: maiorEstoque,
        melhor_oferta_carregada: true,
      })

      this.preFiltro(cod_prod)
      this.buscarValor()
    } catch (error) {
      console.log(Object.keys(error), error.message)
    }
  }

  getProduto = async (cod_prod) => {
    this.submitCustomQtd()
    try {
      if (cod_prod) {
        const response = await buscaProduto.get(cod_prod)
        var dados = await response.data

        const responsePrazo = await ListaPrazoDeProducao.get(dados.prazo_minimo_entrega.toString())
        var dadosPrazo = await responsePrazo.data

        if (dados.ativo == "S") {
          this.setState({
            dados: dados,
            preco_home: dados.valor_home,
            prazo_producao: dadosPrazo,
          })

          if (dados.batidadas_maximas > 0) {
            var numero_max_impressoes = []
            for (var i = 1; i <= dados.batidadas_maximas; i++) {
              numero_max_impressoes.push(i.toString())
            }
            this.setState({ numero_max_impressoes: numero_max_impressoes })
          }

          if (dados.url_seo) {
            var split_data = dados.url_seo.split("-")
            split_data.pop()
            var url = split_data.join("-")

            var referencia = dados.referencia.toString()

            var imagens_produto = []
            for (var i = 2; i < dados.quantidade_imagens + 3; i++) {
              if (referencia !== null && url !== null) {
                var url_img_prod = ""

                if (i > 4) {
                  var valid = await fetch(
                    "https://" +
                      this.state.url_site +
                      "/images/produtos/" +
                      referencia.substr(referencia.length - 4) +
                      "/" +
                      url +
                      "-" +
                      i +
                      "-" +
                      i +
                      ".jpg",
                  )
                  if (valid.status == "200") {
                    url_img_prod =
                      "https://" +
                      this.state.url_site +
                      "/images/produtos/" +
                      referencia.substr(referencia.length - 4) +
                      "/" +
                      url +
                      "-" +
                      i +
                      "-" +
                      i +
                      ".jpg"
                    imagens_produto.push(url_img_prod)
                  }
                } else {
                  url_img_prod =
                    "https://" +
                    this.state.url_site +
                    "/images/produtos/" +
                    referencia.substr(referencia.length - 4) +
                    "/" +
                    url +
                    "-" +
                    i +
                    "-" +
                    i +
                    ".jpg"
                  imagens_produto.push(url_img_prod)
                }
              }
            }

            this.setState({ list_img: imagens_produto })
            this.setState({ url_img: split_data.join("-") })
          }
        } else {
          window.location.href = "/"
        }
        this.getGridProduto(dados.codigo_grupo_produto.toString())
      } else {
        window.location.href = "/"
      }
    } catch (error) {
      console.log(Object.keys(error), error.message)
    }
  }

  getCorProduto = async (cod_prod) => {
    try {
      const response = await buscaProduto.get(cod_prod + "/cores-disponiveis")
      var dados = await response.data

      var cores_diponiveis = []
      for (var d of dados) {
        cores_diponiveis.push({
          text: d.descricao_cor.trim(),
          cod: d.codigo_cor,
          rgb_cores: d.rgb_cores,
          estoque: parseInt(d.estoque_disponivel.replaceAll(".", "").replaceAll(",", "")),
          previsao: d.reposicao_estoque,
          tamanho_p: d.tamanho_p,
          tamanho_m: d.tamanho_m,
          tamanho_g: d.tamanho_g,
          tamanho_gg: d.tamanho_gg,
          tamanho_xgg: d.tamanho_xgg,
          quantidade_repo: d.quantidade_reposicao,
          data_reposicao_estoque: d.reposicao_estoque,
        })
      }

      cores_diponiveis.sort(function (a, b) {
        if (a.estoque == 0) {
          return 1
        } else {
          return -1
        }
      })

      this.setState({ cores: cores_diponiveis })

      await this.getProduto(cod_prod)
      await this.getConfiguracao(cod_prod)

      // this.changeVisibleLoading(false);

      this.buscarValor()
      this.listQuantidadesPorPreco()
    } catch (error) {
      console.log(Object.keys(error), error.message)
    }
  }

  getTipoGravacao = async (cod_prod) => {
    try {
      const response = await buscaProduto.get(cod_prod + "/tipo-gravacao")
      var dados = await response.data

      var tipo_gravacao = []
      for (var d of dados) {
        tipo_gravacao.push({
          nome: d.descricao_impressao.trim(),
          tooltip: d.texto_impressao.trim(),
          cod: d.codigo_impressao,
          img: d.nome_img,
          desc_site: d.descricao_site,
        })
      }

      await this.setState({ tipo_gravacao: tipo_gravacao })
    } catch (error) {
      console.log(Object.keys(error), error.message)
    }
  }

  ifnull = (a, b) => {
    if (a === null || a === undefined || a === "") {
      return b
    } else {
      return a
    }
  }

  getGridProduto = async (categoria) => {
    try {
      const response = await dadosProdutosSubcategoria.post("", {
        codigo_grupo_produto: categoria.toString(),
      })
      var dados = response.data
      var produtos = []
      var texto_seo = null

      for (var prod of dados) {
        texto_seo = prod.texto_seo
        if (prod.url_seo && parseInt(prod.estoque) > 0) {
          var url_seo = prod.url_seo.split("-")

          var referencia = prod.referencia.toString()
          var link =
            "/" +
            referencia.substring(referencia.length - 4) +
            "/" +
            url_seo.slice(0, url_seo.length - 1).join("-") +
            "-1-1.jpg"

          produtos.push({
            prod_nome: prod.nome_produto,
            prod_cod: prod.referencia,
            url_prod: prod.url_seo,
            img_prod: link,
            referencia: prod.referencia,
            descricao: prod.descricao,
            caracteristicas: prod.caracteristicas,
            valor_home: parseFloat(this.ifnull(prod.preco_home, 0.0)).toFixed(2).toString().replaceAll(".", ","),
            cores: this.ifnull(prod.rgb_cores, "").trim(),
            selo: prod.ad_embalagem ? "S" : "N",
            segmento: prod.segmento,
            ultrarapido: parseInt(prod.prazo_minimo_entrega) == 1 ? "S" : "N",
            selo_prod: prod.selo_prod,
          })
        }
      }

      this.setState({ dados_produtos_lista: produtos, texto_seo: texto_seo })
    } catch (error) {
      console.log(Object.keys(error), error.message)
    }
  }

  selectCores = async (cod, nome, estoque, previsao = "", tamanho_p, tamanho_m, tamanho_g, tamanho_gg, tamanho_xgg) => {
    this.setState({ loadingValor: true })
    if (this.state.cor_selecionada == cod) {
      this.setState({ loadingValor: false })
    } else {
      await this.setState({
        cor_selecionada: [cod],
        nome_cor: nome,
        cor_estoque: estoque,
        previsao: previsao,
        tamanho_p: tamanho_p,
        tamanho_m: tamanho_m,
        tamanho_g: tamanho_g,
        tamanho_gg: tamanho_gg,
        tamanho_xgg: tamanho_xgg,
      })
      if (estoque == 0) {
        this.setState({ cor_indisponivel: true })
      } else {
        this.setState({ cor_indisponivel: false })
      }
      await this.getEstoqueMaximo(estoque)
      this.buscarValor()
    }
  }

  buscarValor = async () => {
    this.submitCustomQtd()
    try {
      this.setState({ loadingValor: true })
      if (this.state.cor_selecionada != "") {
        var estoque = false
        var quantidade_disponivel = 0
        this.state.cores.map((data) => {
          if (parseInt(data.cod) == parseInt(this.state.cor_selecionada.cod)) {
            if (parseInt(this.ifnull(this.state.quantidade_selecionada, 1000)) <= parseInt(data.estoque)) {
              estoque = true
              quantidade_disponivel = parseInt(data.estoque)
            } else {
              quantidade_disponivel = parseInt(data.estoque)
            }
          }
        })

        if (estoque) {
          var tipo_gravacao =
            this.state.tipo_gravacao_selecionada != null ? this.state.tipo_gravacao_selecionada.cod : null
          var prazo = this.state.prazo_selecionado != null ? this.state.prazo_selecionado.prazo : null

          var param = {
            codigo_produto: this.state.dados.codigo_produto,
            codigo_impressao: tipo_gravacao,
            quantidade: parseInt(this.ifnull(this.state.quantidade_selecionada, 1000)),
            codigo_cor: this.state.cor_selecionada.cod,
            batidas: this.ifnull(this.state.impressao_produto, null),
            prazo_entrega: prazo,
          }

          const response = await buscaValorProduto.post("", param)
          var dados = response.data

          await this.setState({
            preco_home: parseFloat(dados.valor_unitario).toFixed(2),
            preco_total: dados.valor_total,
          })
          this.setState({ loadingValor: false })
        } else {
          this.setState({ loadingValor: false })
        }
      } else {
        this.setState({ loadingValor: false })
      }
    } catch (error) {
      this.setState({ loadingValor: false })
      console.log(Object.keys(error), error.message)
    }
  }

  gerarOrcamentoProduto = async (data_info) => {
    if (data_info != undefined) {
      try {
        var numero_nota_salvo = await this.validaTimeoutOrcamentoExistente()
        this.setState({ loading_orcamento_pdf: true })
        var post = []
        var carrinho = []

        carrinho.push({
          sequencia: 1,
          codprod: parseInt(this.state.cod_prod),
          quantidade: parseInt(this.state.quantidade_selecionada),
          valor_unitario: parseFloat(this.state.preco_home),
          valor_total: parseFloat(this.state.preco_home * parseInt(this.state.quantidade_selecionada)).toFixed(2),
          prazo_entrega: parseInt(this.state.prazo_selecionado.prazo),
          numero_impressao: parseInt(this.state.tipo_gravacao_selecionada.cod),
          cor_produto: parseInt(this.state.cor_selecionada.cod),
          batidas: parseInt(this.state.impressao_produto),
          frete_site: "",
          token_embalagem: null,
          embalagem: null,
        })

        post.push({
          nome_parceiro: data_info.nome_parceiro,
          razao_social: data_info.razao_social_parceiro,
          email_parceiro: data_info.email_parceiro,
          telefone_parceiro: data_info.telefone_parceiro
            .replaceAll("(", "")
            .replaceAll(")", "")
            .replaceAll(" ", "")
            .replaceAll("-", "")
            .trim(),
          observacao: "",
          cpf_cnpj_parceiro: data_info.cpfcnpj_parceiro
            .replaceAll(".", "")
            .replaceAll("/", "")
            .replaceAll("-", "")
            .trim(),
          numero_nota: numero_nota_salvo,
          carrinho: carrinho,
        })

        const response = await GerarOrcamento.post("", post[0])
        var data = response.data

        if (response.data === "Block") {
          // alert("Orçamento gerado com sucesso!");
          this.setState({ orcamento_block: true })

          setTimeout(() => {
            this.setState({ orcamento_block: false })
          }, 6000)

          return
        }

        if (data.RESULT) {
          this.setState({ loading_orcamento_pdf: false })
          this.componentPdfRefs.current?.closeForm()
          window.open(
            `https://api.innovationbrindes.com.br/api/site/v2/orcamento/gerar-pdf-orcamento-produto/${data.NOTA}/${data.ULTIMA_SEQUENCIA}`,
          )

          if (numero_nota_salvo == null) {
            localStorage.setItem(
              "existing_budget_log",
              window.btoa(JSON.stringify({ numero_nota: data.NOTA, datetime: new Date() })),
            )
          } else {
            var existing_budget_log = JSON.parse(window.atob(localStorage.getItem("existing_budget_log")))
            if (parseInt(existing_budget_log.numero_nota) != parseInt(data.NOTA)) {
              localStorage.setItem(
                "existing_budget_log",
                window.btoa(
                  JSON.stringify({
                    numero_nota: data.NOTA,
                    datetime: new Date(),
                  }),
                ),
              )
            }
          }
        } else {
          this.setState({ loading_orcamento_pdf: false })
          this.componentPdfRefs.current?.closeForm()
          alert("Houve um problema no processamento do seu orçamento. Por favor atualize a página e tente novamente.")
        }
      } catch (error) {
        this.setState({ loading_orcamento_pdf: false })
        this.componentPdfRefs.current?.closeForm()
        console.log(Object.keys(error), error.message)
      }
    }
  }

  handleAddressClientValue = (newAddress, frete_gratis) => {
    this.setState({ address_client: newAddress, frete_gratis: frete_gratis })
  }

  validaTimeoutOrcamentoExistente = async () => {
    if (localStorage.getItem("existing_budget_log")) {
      var dados = JSON.parse(window.atob(localStorage.getItem("existing_budget_log")))
      var date_init = new Date(dados.datetime)
      date_init.setHours(date_init.getHours() + 3)
      if (date_init > new Date()) {
        return dados.numero_nota
      } else {
        // localStorage.removeItem('existing_budget_log');
        return null
      }
    } else {
      return null
    }
  }

  render() {
    return (
      <ChakraProvider>
        <Head>
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="viewport" content="width = device-width, initial-scale = 2.3, user-scalable = no" />
          <meta
            name="viewport"
            content="width = device-width, initial-scale = 2.3, minimum-scale = 1, maximum-scale = 5"
          />
          {/* <link rel="alternate" href={`https://innovationbrindes.com.br${this.props.linkproduto}`} hreflang="pt"/> */}

          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PXQHD6F')`,
            }}
          ></script>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `{
            "@context": "https://schema.org/",
            "@type": "CategoryCodeSet",
            "@id": ${this.state.dados_produtos_lista.map((prod, idx) => {
              if (idx === 0) {
                return JSON.stringify("https://innovationbrindes.com.br/" + prod.url_prod)
              }
            })},
            "name": "${this.props.dados.nome}",
            "hasCategoryCode": {
              "@type": "CategoryCode",
              "name": "${this.props.dados.nome}",
              "description": "${this.props.dados.descricao}",
              "inCodeSet": ${this.state.dados_produtos_lista.map((prod, idx) => {
                if (idx === 0) {
                  return JSON.stringify("https://innovationbrindes.com.br/" + prod.url_prod)
                }
              })},
            }
          }`,
            }}
          ></script>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `{
            "@context": "https://schema.org/",
            "@type": "Thing",
            "additionalType": "${this.props.dados.descricao}",
            "description": "${this.props.dados.descricao}",
            "disambiguatingDescription": "${this.props.dados.descricao}",
            "potentialAction": "${this.props.dados.descricao}",
            "subjectOf": "${this.props.dados.descricao}",
            "name": "${this.props.dados.nome}",
            "alternateName": "${this.props.dados.nome}",
            "identifier": "${this.props.dados.referencia}",
            "url":
              ${this.state.dados_produtos_lista.map((prod, idx) => {
                if (idx === 0) {
                  return JSON.stringify("https://innovationbrindes.com.br/" + prod.url_prod)
                }
              })},
            "sameAs":
              ${this.state.dados_produtos_lista.map((prod, idx) => {
                if (idx === 0) {
                  return JSON.stringify("https://innovationbrindes.com.br/" + prod.url_prod)
                }
              })},
            "mainEntityOfPage":
              ${this.state.dados_produtos_lista.map((prod, idx) => {
                if (idx === 0) {
                  return JSON.stringify("https://innovationbrindes.com.br/" + prod.url_prod)
                }
              })},
             "image":
              ${this.state.list_img.map((url, idx) => {
                if (idx === 0) {
                  return JSON.stringify(url)
                }
              })},
          }`,
            }}
          ></script>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `{
              "@context": "https://schema.org/",
              "@type": "Product",
              "url": "https://innovationbrindes.com.br/",
              "model": ${this.state.dados_produtos_lista.map((prod, idx) => {
                if (idx === 0) {
                  return JSON.stringify("https://innovationbrindes.com.br/" + prod.url_prod)
                }
              })},
              "productID":"${this.props.dados.referencia}",
              "logo":"https://innovationbrindes.com.br/images/menu/logo-topo.png",
              "slogan": "${this.props.dados.nome}",
              "itemCondition":"new",
              "name": "${this.props.dados.nome}",
              "image": [
                ${this.state.list_img.map((url) => {
                  return JSON.stringify(url)
                })}
               ],
               "keywords": ${this.state.dados_produtos_lista.map((prod, idx) => {
                 if (idx === 0) {
                   return JSON.stringify(prod.url_prod.replaceAll("-", ","))
                 }
               })},
               "isSimilarTo": {
                "@type": "Product",
                "name": [
                  ${this.state.dados_produtos_lista.map((prod_similar, idx) => {
                    if (idx > 0 && idx < 6) {
                      return JSON.stringify("https://innovationbrindes.com.br/" + prod_similar.url_prod)
                    }
                  })}
                 ],
              },
               "isRelatedTo": {
                "@type": "Product",
                "name": [
                  ${this.state.dados_produtos_lista.map((prod_related, idx) => {
                    if (idx > 6 && idx < 12) {
                      return JSON.stringify("https://innovationbrindes.com.br/" + prod_related.url_prod)
                    }
                  })}
                 ],
              },
               "color": [
                ${this.props.cores.map((cor) => {
                  return JSON.stringify(cor)
                })}
              ],
              "depth": "${this.state.dados.estoque}",
              "hasMeasurement": "${this.props.dados.dimensoes}",
              "description": "${this.props.dados.descricao}",
              "sku": "${this.props.dados.referencia}",
              "mpn": "${this.props.dados.quantidade_maxima}",
              "brand": {
                "@type": "Brand",
                "name": "Innovation Brindes"
              },
              "review": {
                "@type": "Review",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "4",
                  "bestRating": "5"
                },
                "author": {
                  "@type": "Organization",
                  "name": "Innovation Brindes"
                }
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.4",
                "reviewCount": "100"
              },
              "offers": {
                "@type": "AggregateOffer",
                "offerCount": "5",
                "lowPrice": "${this.props.dados.valor_home}",
                "highPrice": "${(this.props.dados.valor_home * 110) / 100}",
                "priceCurrency": "BRL"
              }
            }`,
            }}
          ></script>
        </Head>
        <NextSeo
          title={`${this.props.nome_produto} ${this.props.referencia}`}
          description={`${this.props.nome_produto}, ${this.props.referencia}, Brindes, Brindes Personalizados, Brindes Promocionais, Brindes Corporativos, Brindes Ecológicos, Personalizados, Innovation Brindes`}
          keywords={`${this.props.nome_produto}, ${this.props.referencia}, Brindes, Brindes Personalizados, Personalizados, Brindes Promocionais, Promocionais, Empresa de Brindes, Brindes Corporativos, Chaveiros Personalizados, Squeeze Personalizado, Canetas Personalizadas, Canetas Para Brindes, Caneta Personalizada, Canetas Promocionais, Produtos Promocionais, Brindes Para Eventos, Carregador Celular Personalizado, Power Bank Personalizado, Espelho Personalizado, Brindes Dia Das Mães, Brindes Dia Dos Pais, Brindes Dia Da Mulher, Brindes Para o Final Do Ano, Brindes Para Funcionários, Confecção Promocional`}
          canonical={`https://innovationbrindes.com.br${this.props.linkproduto}`}
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
              content: "Innovation Brindes a maior empresa de Brindes Personalizados Promocionais",
            },
            {
              name: "Designer",
              content: "Innovation Brindes a maior empresa de Brindes Personalizados Promocionais",
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

        {this.state.orcamento_block && (
          <Alert
            status="success"
            variant="subtle"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            height="200px"
          >
            <AlertIcon boxSize="40px" mr={0} />
            <Box mt={4}>
              <strong>Orçamento gerado com sucesso!</strong>
              <br />
              Aguarde, em breve entraremos em contato.
            </Box>
            <CloseButton
              position="absolute"
              right="8px"
              top="8px"
              onClick={() => this.setState({ orcamento_block: false })}
            />
          </Alert>
        )}
        <Box
          minH="86.1vh"
          w={this.state.mobileView ? "99.1vw" : "100%"}
          h="auto"
          overflow="hidden"
          bgColor={this.state.mobileView ? "white" : "#f5f5f5"}
          style={{ opacity: this.state.display_init, transition: "0.3s" }}
        >
          <FlexContainerProdutos>
            <FlexContainerProdutoColumnRow>
              <Flex flexDirection="column" w={this.state.mobileView ? "100%" : "50%"} h="auto">
                <ComponentProduto state={this.state} list_img={this.state.list_img} />
                {this.state.dados.estoque != 0 ? (
                  <DivComponentMobile>
                    <ComponentPassos
                      resumoView={this.resumoView}
                      selectCores={this.selectCores}
                      state={this.state}
                      handleInputsPassos={this.handleInputsPassos}
                      closeForm={this.componentPdfRefs.current?.closeForm}
                      ref={this.componentPassosRefs}
                      setState={this.setState}
                      atualizaQtd={this.atualizaQtd}
                    />
                  </DivComponentMobile>
                ) : (
                  <></>
                )}

                <DivComponentDesktop>
                  <ComponentDescricaoDimensao
                    maginTopDimensao={this.componentPdfRefs.current?.maginTopDimensao}
                    state={this.state}
                  />
                </DivComponentDesktop>

                {this.state.dados.estoque != 0 ? (
                  <DivComponentMobile2>
                    <ComponentPdf
                      ref={this.componentPdfRefs}
                      resumoView={this.resumoView}
                      state={this.state}
                      gerarOrcamentoProduto={this.gerarOrcamentoProduto}
                      addProdutoCarrinho={this.addProdutoCarrinho}
                      submitCustomQtd={this.submitCustomQtd}
                      handleAddressClientValue={this.handleAddressClientValue}
                    />
                    <ComponentDescricaoDimensao
                      maginTopDimensao={this.componentPdfRefs.current?.maginTopDimensao}
                      state={this.state}
                    />
                  </DivComponentMobile2>
                ) : (
                  <DivComponentMobile>
                    <ComponentFormIndisponivel
                      state={this.state}
                      gerarOrcamentoProduto={this.gerarOrcamentoProduto}
                      salvarAvisoProdutoIndisponivel={this.salvarAvisoProdutoIndisponivel}
                    />
                  </DivComponentMobile>
                )}
              </Flex>

              <DivComponentDesktop>
                <ComponentPassos
                  resumoView={this.resumoView}
                  selectCores={this.selectCores}
                  state={this.state}
                  handleInputsPassos={this.handleInputsPassos}
                  closeForm={this.componentPdfRefs.current?.closeForm}
                  ref={this.componentPassosRefs}
                  setState={this.setState}
                  atualizaQtd={this.atualizaQtd}
                />
              </DivComponentDesktop>
            </FlexContainerProdutoColumnRow>

            {this.state.dados.estoque != 0 ? (
              <DivComponentDesktop>
                <ChakraProvider>
                  <ComponentPdf
                    resumoView={this.resumoView}
                    state={this.state}
                    gerarOrcamentoProduto={this.gerarOrcamentoProduto}
                    addProdutoCarrinho={this.addProdutoCarrinho}
                    submitCustomQtd={this.submitCustomQtd}
                    ref={this.componentPdfRefs}
                    handleAddressClientValue={this.handleAddressClientValue}
                  />
                </ChakraProvider>
              </DivComponentDesktop>
            ) : (
              <DivComponentDesktop>
                <ComponentFormIndisponivel
                  state={this.state}
                  salvarAvisoProdutoIndisponivel={this.salvarAvisoProdutoIndisponivel}
                />
              </DivComponentDesktop>
            )}
          </FlexContainerProdutos>

          <ComponentGridMaisOfertas>
            <ComponentDesktopTitle>
              <img alt="confira-tambem" src={confiraTambem} />
            </ComponentDesktopTitle>
            <ComponentProductList
              seloprod={this.seloprod}
              state={this.state}
              ifnull={this.ifnull}
              cores={this.props.cores}
            />
          </ComponentGridMaisOfertas>
        </Box>

        <FooterText>
          <FooterTextContent>
            <p id="myP" dangerouslySetInnerHTML={{ __html: this.state.texto_seo }}></p>
          </FooterTextContent>
        </FooterText>

        {/* <FooterSocialMediaComponent /> */}
      </ChakraProvider>
    )
  }
}

export default Produto
