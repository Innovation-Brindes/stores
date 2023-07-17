import React, { Component, useRef } from "react"
import {
  dadosSubCategorias,
  buscaCoresDisponiveis,
  buscaImpressoesDisponiveis,
  buscaProdutoPorParametros,
  buscaListaFaixaDePreco,
  dadosCategorias,
  buscaConfiguracaoProdutoBuscado,
} from "../../services/api"
import Footer from "../../components/Footer"
// import bgPrecoHome from '../../images/precohome.png';
// import loading from "../../resources/images/loading.gif";
import { Box, Center, Image, Spinner } from "@chakra-ui/react"
import {
  BuscarContent,
  BuscarContentFilter,
  BuscarContentFilterSelect,
  GridProduts,
  GridProdutsLoading,
  GridProdutsProduto,
  GridProdutsProdutoTitle,
  GridProdutsProdutoCardProdCustom,
  GridProdutsProdutoCardProdCustomImgProd,
  GridProdutsProdutoCardProdCustomSeloEmbalagem,
  GridProdutsProdutoCardProdCustomSelo,
  GridProdutsProdutoCardProdCustomDesc,
  GridProdutsProdutoCardProdCustomQuantidade,
  GridProdutsProdutoCardProdCustomQuantidadeTitle,
  GridProdutsProdutoCardProdCustomCores,
  GridProdutsProdutoCardProdCustomCoresTitle,
  GridProdutsProdutoCardProdCustomCoresGridCores,
  GridProdutsProdutoCardProdCustomCoresGridCoresContent,
  GridProdutsProdutoCardProdCustomCoresGridCoresContentCor,
  GridProdutsProdutoCardProdCustomCoresGridCoresContentAviso,
  GridProdutsProdutoCardProdCustomValor,
  GridProdutsProdutoCardProdCustomValorContent,
  GridProdutsProdutoBtnConferirIndisponivel,
  GridProdutsProdutoBtnConferir,
  CardProd,
  CardProdImgProd,
  CardProdSeloEmbalagem,
  CardProdDesc,
  CardProdDescCores,
  CardProdDescCoresTitle,
  CardProdDescCoresGridCores,
  CardProdDescCoresGridCoresContent,
  CardProdDescCoresGridCoresContentCor,
  CardProdValor,
  CardProdValorContent,
  Preco,
  NaoEncontrouProduto,
  NaoEncontrouProdutoBody,
} from "./styles"

import Head from "next/head"
import { NextSeo } from "next-seo"
import FiltroBusca from "./components/Filtro"
import { GridProductDefault } from "./../GridProductsDefault/index"
import { FlexContainer, TextUltraRapido, TextUltraRapido2, TextUltraRapido3 } from "../UltraRapido/styles"
import FooterComponent from "../Footer/FooterComponent"

const loading = "/images/loading.gif"
const loading_ultra_rapido = "/images/loading-ultra-rapido.gif"
const lupa = "/images/menu/lupa-busca.png"

var cont = 1
class Buscar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dados: [],
      categorias: [],
      subcategorias: [],
      cores: [],
      impressoes: [],
      faixas: [],
      texto_buscado: null,
      url_site: null,
      subcategorias_selecionadas: [],
      categorias_selecionadas: [],
      cor_selecionadas: [],
      impressao_selecionadas: [],
      prazo_selecionadas: [],
      faixa_selecionadas: [],

      firstLoading: false,

      valor_inicial: null,
      valor_final: null,

      inputFiltroCategoria: null,
      inputFiltroCor: null,
      inputFiltroImpressao: null,
      inputFiltroFaixa: null,

      quantidade_selecionada: null,

      verFiltroMobile: false,
      verMaisSubcategorias: false,
      verMaisFaixas: false,
      verMaisImpressoes: false,
      verMaisCor: false,
      verMaisCategorias: false,
      menu_categoria_view: false,
      menu_cor_view: false,
      menu_gravacao_view: false,
      nao_encontrou: false,
      loadingProd: "block",
      openChat: false,

      paginacao: 1,
      total_paginacao: [],
      filtroRapido: false,
      orderByMobile: 1,
      cont: 1,
      display_init: 0,
      id_order: 1,
      isUltraRapido: false,
      sortBanner: 0,
      mobileView: false,
    }
    this.addCont = this.addCont.bind(this)
    this.footerChatRef = React.createRef()
  }

  componentDidMount() {
    // this.setState({url_site: window.location.hostname.indexOf("localhost") != -1 ? window.location.hostname + ":3000" : window.location.hostname});
    // var url_site = window.location.hostname.indexOf("localhost") != -1 ? window.location.hostname + ":3000" : window.location.hostname;
    // var url = window.location.href.replace("https://" + url_site + "/","");
    this.setState({ sortBanner: Math.floor(Math.random() * 3) })

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      this.setState({ mobileView: true })
    } else {
      this.setState({ mobileView: false })
    }
    this.setState({ sortBanner: Math.floor(Math.random() * 3) })

    var self = this
    setTimeout(function () {
      self.setState({ display_init: 1 })
    }, 1000)

    var texto_buscado = this.props.textobuscado

    window.scrollTo(0, 0)

    if (texto_buscado != "" && texto_buscado != undefined) {
      this.setState({ filtroRapido: false })
      texto_buscado = decodeURI(texto_buscado).replaceAll("&", " ")

      // this.getCategoriasProdutoBuscado(texto_buscado);
      if (texto_buscado === "ultra-rapido") {
        this.setState({ isUltraRapido: true })
        this.setState({ filtroRapido: true })
        this.loadPreFiltro()
        this.getListaDeFiltros(false)
        return
      }

      if (texto_buscado == "verificação de produtos") {
        this.getGridProdutoPorParametros("verificação de produtos")
      } else {
        this.setState({
          texto_buscado: texto_buscado,
          quantidade_selecionada: null,
          quantidade_filtrada: null,
        })
        this.getListaDeFiltros(texto_buscado)
      }
    } else {
      if (localStorage.getItem("filtro-rapido") != null) {
        this.setState({ filtroRapido: true })
        this.loadPreFiltro()
        this.getListaDeFiltros(texto_buscado)
      } else {
        window.location.href = "/lojahonda"
      }
    }
  }

  ifnull = (a, b) => {
    if (a === null || a === undefined || a === "") {
      return b
    } else {
      return a
    }
  }

  setPagination = async (e) => {
    await this.setState({
      paginacao: parseInt(e.target.attributes.data.value),
      loadingProd: "block",
    })
    window.scrollTo(0, 10)
    this.getGridProdutoPorParametros()
  }

  getGridProdutoPorParametros = async (texto_buscado = null) => {
    try {
      this.setState({ dados: [] })
      this.setState({ loadingProd: "block" })

      var categorias = this.state.categorias_selecionadas.join(",")
      var subcategorias = this.state.subcategorias_selecionadas.join(",")
      var cor = this.state.cor_selecionadas.join(",")
      var impressao = this.state.impressao_selecionadas.join(",")
      var quantidade = this.state.quantidade_selecionada
      var valor_inicial = this.state.valor_inicial
      var valor_final = this.state.valor_final
      var prazo = isNaN(parseInt(this.state.prazo_selecionadas.join(",")))
        ? 10
        : parseInt(this.state.prazo_selecionadas.join(","))

      const response = await buscaProdutoPorParametros.post("", {
        codigo_categoria: categorias,
        codigo_subcategoria: subcategorias,
        codigo_cor: cor,
        codigo_impressao: impressao,
        quantidade: quantidade,
        valor_inicial: valor_inicial,
        valor_final: valor_final,
        prazo_entrega: prazo,
        texto_buscado: this.state.texto_buscado,
        paginacao: this.state.paginacao,
        ultra_rapido: this.state.isUltraRapido,
      })
      var dados = await response.data
      var produtos = []
      var categoria = []
      var subcategoria = []
      for (var prod of dados) {
        if (prod.url_seo) {
          var url_seo = prod.url_seo.split("-")
          var referencia = prod.referencia.toString()
          var link =
            "/" +
            referencia.substring(referencia.length - 4) +
            "/" +
            url_seo.slice(0, url_seo.length - 1).join("-") +
            "-1-1.jpg"
          var preco_home = Math.round(parseFloat(prod.valor_venda) * 100) / 100
          if (isNaN(preco_home)) {
            preco_home = 0.0
          }

          categoria.push(prod.categoria)
          subcategoria.push(prod.codigo_grupo_produto)
          produtos.push({
            prod_nome: prod.nome,
            prod_cod: prod.referencia,
            url_prod: prod.url_seo,
            img_prod: link,
            referencia: prod.referencia,
            descricao: prod.descricao,
            caracteristicas: prod.caracteristicas,
            valor_home: (Math.round(parseFloat(preco_home) * 100) / 100).toLocaleString("pt-br", {
              minimumFractionDigits: 2,
            }),
            selo: prod.ad_embalagem ? "S" : "N",
            segmento: prod.segmento,
            cores: this.ifnull(prod.rgb_cores, "").trim(),
            pdv: prod.ad_pdv,
            cubagem: prod.dimensoes,
            url_img: link,
            estoque: prod.estoque_disponivel,
            data_ultra_rapido: prod.data_ultra_rapido,
            selo_prod: prod.selo_prod,
            imagem_home_store: prod.imagem_home_store,
          })
        }
      }

      if (texto_buscado != "verificação de produtos") {
        if (!this.state.firstLoading) {
          categoria = categoria.filter(function (e, i) {
            return categoria.indexOf(e) === i
          })
          this.setState({ categorias_selecionadas: categoria })

          subcategoria = subcategoria.filter(function (e, i) {
            return subcategoria.indexOf(e) === i
          })
          this.setState({ subcategorias_selecionadas: subcategoria })
        }
      }

      produtos.sort(function (a, b) {
        var valor_a = parseFloat(a.valor_home.replace(".", "").replace(",", "."))
        var valor_b = parseFloat(b.valor_home.replace(".", "").replace(",", "."))

        if (a.estoque != 0) {
          if (valor_a < valor_b) {
            return -1
          } else if (valor_a > valor_b) {
            return 1
          }
        }

        return 0
      })

      await this.setState({ dados: produtos })

      this.setState({ loadingProd: "none" })

      this.handleOrderBy({
        target: { options: { selectedIndex: this.state.id_order } },
      })
      this.handleOrderBy({
        target: { options: { selectedIndex: this.state.id_order } },
      })

      this.setState({ firstLoading: true })
    } catch (error) {
      console.log(Object.keys(error), error.message)
    }
  }

  handleOrderBy = async (e) => {
    this.setState({ id_order: e.target.options.selectedIndex })
    if (e.target.options.selectedIndex == 1) {
      this.state.dados.sort(function (a, b) {
        var valor_a = parseFloat(a.valor_home.replace(".", "").replace(",", "."))
        var valor_b = parseFloat(b.valor_home.replace(".", "").replace(",", "."))
        if (a.estoque != 0) {
          if (valor_a < valor_b) {
            return -1
          } else if (valor_a > valor_b) {
            return 1
          }
        }

        return 0
      })
    } else {
      this.state.dados.sort(function (a, b) {
        var valor_a = parseFloat(a.valor_home.replace(".", "").replace(",", "."))
        var valor_b = parseFloat(b.valor_home.replace(".", "").replace(",", "."))

        if (a.estoque != 0) {
          if (valor_a < valor_b) {
            return 1
          } else if (valor_a > valor_b) {
            return -1
          }
        }

        return 0
      })
    }
    var dados = this.state.dados
    this.setState({ dados: dados })
  }

  verFiltroMobile = async () => {
    this.setState({ verFiltroMobile: !this.state.verFiltroMobile })
  }

  orderByMobile = async () => {
    if (this.state.orderByMobile == 1) {
      await this.setState({ orderByMobile: 2 })
    } else {
      await this.setState({ orderByMobile: 1 })
    }

    if (this.state.orderByMobile == 1) {
      this.state.dados.sort(function (a, b) {
        var valor_a = parseFloat(a.valor_home.replace(".", "").replace(",", "."))
        var valor_b = parseFloat(b.valor_home.replace(".", "").replace(",", "."))
        if (valor_a < valor_b) {
          return -1
        } else if (valor_a > valor_b) {
          return 1
        }
        return 0
      })
    } else {
      this.state.dados.sort(function (a, b) {
        var valor_a = parseFloat(a.valor_home.replace(".", "").replace(",", "."))
        var valor_b = parseFloat(b.valor_home.replace(".", "").replace(",", "."))
        if (valor_a < valor_b) {
          return 1
        } else if (valor_a > valor_b) {
          return -1
        }
        return 0
      })
    }

    var dados = this.state.dados
    this.setState({ dados: dados })
  }

  changeMenuCategoria = async (e) => {
    if (e.target.attributes.value.textContent == "menu-categoria") {
      this.setState({ menu_categoria_view: !this.state.menu_categoria_view })
    }
  }

  changeMenuSubcategoria = async (e) => {
    if (e.target.attributes.value.textContent == "menu-subcategoria") {
      this.setState({
        menu_subcategoria_view: !this.state.menu_subcategoria_view,
      })
    }
  }

  changeMenuCor = async (e) => {
    if (e.target.attributes.value.textContent == "menu-cor") {
      this.setState({ menu_cor_view: !this.state.menu_cor_view })
    }
  }

  changeMenuGravacao = async (e) => {
    if (e.target.attributes.value.textContent == "menu-gravacao") {
      this.setState({ menu_gravacao_view: !this.state.menu_gravacao_view })
    }
  }

  changeMenuPrazo = async (e) => {
    if (e.target.attributes.value.textContent == "menu-prazo") {
      this.setState({ menu_prazo_view: !this.state.menu_prazo_view })
    }
  }

  changeMenuPreco = async (e) => {
    if (e.target.attributes.value.textContent == "menu-preco") {
      this.setState({ menu_preco_view: !this.state.menu_preco_view })
    }
  }

  getCategoriasProdutoBuscado = async (texto_buscado) => {
    try {
      const response = await buscaConfiguracaoProdutoBuscado.get(texto_buscado)
      var dados = response.data
    } catch (error) {
      console.log(Object.keys(error), error.message)
    }
  }

  loadPreFiltro = async () => {
    var filtros = JSON.parse(localStorage.getItem("filtro-rapido"))

    if (ifnull(filtros.categoria, "") != "") {
      if (filtros.categoria.indexOf(",") != -1) {
        this.setState({
          categorias_selecionadas: filtros.categoria.split(","),
        })
      } else {
        this.setState({ categorias_selecionadas: [filtros.categoria] })
      }
    }

    if (ifnull(filtros.subcategoria, "") != "") {
      if (filtros.subcategoria.indexOf(",") != -1) {
        this.setState({
          subcategorias_selecionadas: filtros.subcategoria.split(","),
        })
      } else {
        this.setState({ subcategorias_selecionadas: [filtros.subcategoria] })
      }
    }

    if (ifnull(filtros.cor, "") != "") {
      this.setState({ cor_selecionadas: [filtros.cor] })
    }

    if (ifnull(filtros.quantidade, "") != "") {
      this.setState({ quantidade_selecionada: filtros.quantidade })
      this.setState({ quantidade_filtrada: filtros.quantidade })
    }

    if (ifnull(filtros.valor_inicial, "") != "") {
      this.setState({ valor_inicial: filtros.valor_inicial })
      this.setState({ valor_de: filtros.valor_inicial })
      this.setState({ faixa_selecionadas: ["novafaixa"] })
    }
    if (ifnull(filtros.valor_final, "") != "") {
      this.setState({ valor_final: filtros.valor_final })
      this.setState({ valor_ate: filtros.valor_final })
      this.setState({ faixa_selecionadas: ["novafaixa"] })
    }

    // await this.getGridProdutoPorParametros();
  }

  getCorEImpressoesPorCategoria = async () => {
    try {
      var param = {
        codigo_categoria: this.state.categorias_selecionadas.join(","),
        codigo_subcategoria: this.state.subcategorias_selecionadas.join(","),
      }

      const responseCores = await buscaCoresDisponiveis.post("", param)
      var dadosCor = responseCores.data

      var cores = []
      for (var cor of dadosCor) {
        cores.push({
          name: cor.nome_cor.trim(),
          cod: cor.codigo_cor,
          rgb: cor.rgb_cores,
        })
      }

      cores.sort(function (a, b) {
        if (a.name > b.name) {
          return 1
        }
        if (a.name < b.name) {
          return -1
        }

        return 0
      })

      this.setState({ cores: cores })

      const responseImpressao = await buscaImpressoesDisponiveis.post("", param)
      var dadosImpressao = responseImpressao.data

      var impressoes = []
      for (var impressao of dadosImpressao) {
        impressoes.push({
          name: impressao.nome_impressao.trim(),
          cod: impressao.codigo_impressao,
        })
      }

      impressoes.sort(function (a, b) {
        if (a.name > b.name) {
          return 1
        }
        if (a.name < b.name) {
          return -1
        }

        return 0
      })

      this.setState({ impressoes: impressoes })
      this.getFaixaDePreco()
    } catch (error) {
      console.log(Object.keys(error), error.message)
    }
  }

  getFaixaDePreco = async () => {
    const responseFaixa = await buscaListaFaixaDePreco.post("lista-faixa-preco", {
      codigo_categoria: this.state.categorias_selecionadas.join(","),
      codigo_subcategoria: this.state.subcategorias_selecionadas.join(","),
      codigo_cor: this.state.cor_selecionadas.join(","),
      quantidade: this.state.quantidade_selecionada,
      texto_buscado: this.state.texto_buscado,
    })
    var dadosFaixa = responseFaixa.data

    var faixa = []
    for (var faixas of dadosFaixa) {
      faixa.push({
        name: faixas.descricao_faixa.trim(),
        cod: faixas.codigo_faixa,
        vlrinicial: faixas.valor_inicial,
        vlrfinal: faixas.valor_final,
      })
    }

    if (
      this.state.valor_de != null &&
      this.state.valor_de != "" &&
      this.state.valor_ate != null &&
      this.state.valor_ate != ""
    ) {
      faixa.push({
        name: "De R$ " + parseFloat(this.state.valor_de) + " a R$ " + parseFloat(this.state.valor_ate),
        cod: "novafaixa",
        vlrinicial: this.state.valor_de,
        vlrfinal: this.state.valor_ate,
      })

      // faixa.sort(function (a, b) {
      //   var valor_a = parseFloat(a.vlrinicial.replace(".", "").replace(",", "."));
      //   var valor_b = parseFloat(b.vlrinicial.replace(".", "").replace(",", "."));

      //   if (valor_a < valor_b) {
      //     return -1;
      //   } else if (valor_a > valor_b) {
      //     return 1;
      //   }
      //   return 0;
      // });
    }

    this.setState({ faixas: faixa, faixa_selecionadas: ["novafaixa"] })
  }

  titleize(text) {
    var words = text.toLowerCase().split(" ")
    for (var a = 0; a < words.length; a++) {
      var w = words[a]
      words[a] = w[0].toUpperCase() + w.slice(1)
    }
    return words.join(" ")
  }

  getListaDeFiltros = async (texto_buscado = null) => {
    try {
      const responseCat = await dadosCategorias.get("")
      var dadosCat = responseCat.data

      var categorias = []
      for (var cat of dadosCat) {
        categorias.push({
          name: this.titleize(cat.descricao_grupo_produto.trim()),
          cod: cat.codigo_grupo_produto,
        })
      }

      categorias.sort(function (a, b) {
        if (a.name > b.name) {
          return 1
        }
        if (a.name < b.name) {
          return -1
        }

        return 0
      })

      this.setState({ categorias: categorias })

      await this.getSubcategoriaPorCategoria()

      await this.getGridProdutoPorParametros(texto_buscado)

      var param = {
        codigo_categoria: this.state.categorias_selecionadas.join(","),
        codigo_subcategoria: this.state.subcategorias_selecionadas.join(","),
        texto_buscado: this.state.texto_buscado,
        quantidade: this.state.quantidade_selecionada,
      }

      const responseCores = await buscaCoresDisponiveis.post("", param)
      var dadosCor = responseCores.data

      var cores = []
      for (var cor of dadosCor) {
        cores.push({
          name: cor.nome_cor.trim(),
          cod: cor.codigo_cor,
          rgb: cor.rgb_cores,
        })
      }

      cores.sort(function (a, b) {
        if (a.name > b.name) {
          return 1
        }
        if (a.name < b.name) {
          return -1
        }

        return 0
      })

      this.setState({ cores: cores })

      const responseImpressao = await buscaImpressoesDisponiveis.post("", param)
      var dadosImpressao = responseImpressao.data

      var impressoes = []
      for (var impressao of dadosImpressao) {
        impressoes.push({
          name: impressao.nome_impressao.trim(),
          cod: impressao.codigo_impressao,
        })
      }

      impressoes.sort(function (a, b) {
        if (a.name > b.name) {
          return 1
        }
        if (a.name < b.name) {
          return -1
        }

        return 0
      })

      this.setState({ impressoes: impressoes })

      this.setState({ prazo_selecionadas: [10] })

      this.getFaixaDePreco()
    } catch (error) {
      console.log(Object.keys(error), error.message)
    }
  }

  getSubcategoriaPorCategoria = async () => {
    try {
      const response = await dadosSubCategorias.post("", {
        // codigo_categoria: this.state.categorias_selecionadas.join(","),
      })
      var dados = response.data

      var subcategoria = []
      for (var subcat of dados) {
        subcategoria.push({
          name: subcat.descricao_grupo_produto.trim(),
          cod: subcat.codigo_grupo_produto,
        })
      }

      subcategoria.sort(function (a, b) {
        if (a.name > b.name) {
          return 1
        }
        if (a.name < b.name) {
          return -1
        }

        return 0
      })

      this.setState({ subcategorias: subcategoria })
    } catch (error) {
      console.log(Object.keys(error), error.message)
    }
  }

  verMaisCategorias = async () => {
    this.setState({ verMaisCategorias: !this.state.verMaisCategorias })
  }

  changeFiltroCategoria = async (e) => {
    if (e.target.value.trim() != "") {
      this.setState({ verMaisCategorias: true })
    }
    this.setState({ inputFiltroCategoria: e.target.value })
  }

  changeFiltroSubcategoria = async (e) => {
    if (e.target.value.trim() != "") {
      this.setState({ verMaisSubcategorias: true })
    }
    this.setState({ inputFiltroSubcategoria: e.target.value })
  }

  verMaisSubcategorias = async () => {
    this.setState({ verMaisSubcategorias: !this.state.verMaisSubcategorias })
  }

  verMaisCor = async () => {
    this.setState({ verMaisCor: !this.state.verMaisCor })
  }

  changeFiltroCor = async (e) => {
    if (e.target.value.trim() != "") {
      this.setState({ verMaisCor: true })
    }
    this.setState({ inputFiltroCor: e.target.value })
  }
  selectCor = async (e) => {
    if (this.state.cor_selecionadas[0] == e.target.value) {
      this.setState({ cor_selecionadas: [] })
    } else {
      this.setState({ cor_selecionadas: [e.target.value] })
    }
  }

  selectCores = async (cod) => {
    // this.setState({loadingValor:true});
    if (this.state.cor_selecionadas[0] == cod) {
      await this.setState({ cor_selecionadas: [] })
    } else {
      await this.setState({ cor_selecionadas: [cod] })
      // this.buscarValor();
    }
    this.filtrarProdutos()
  }

  selectFaixa = async (e) => {
    if (this.state.faixa_selecionadas[0] == e.target.value) {
      await this.setState({
        faixa_selecionadas: [],
        valor_inicial: null,
        valor_final: null,
      })
    } else {
      await this.setState({
        faixa_selecionadas: [e.target.value],
        valor_inicial: parseFloat(JSON.parse(e.target.attributes.data.value).inicial),
        valor_final: parseFloat(JSON.parse(e.target.attributes.data.value).final),
      })
    }
    this.setState({ menu_preco_view: false })
    this.getGridProdutoPorParametros()
  }

  changeFiltroImpressao = async (e) => {
    if (e.target.value.trim() != "") {
      this.setState({ verMaisImpressoes: true })
    }
    this.setState({ inputFiltroImpressao: e.target.value })
  }

  verMaisFaixas = async () => {
    this.setState({ verMaisFaixas: !this.state.verMaisFaixas })
  }

  verMaisImpressoes = async () => {
    this.setState({ verMaisImpressoes: !this.state.verMaisImpressoes })
  }

  selectImpressao = async (e) => {
    if (this.state.impressao_selecionadas[0] == e.target.value) {
      this.setState({ impressao_selecionadas: [] })
    } else {
      this.setState({ impressao_selecionadas: [e.target.value] })
    }
  }

  selectPrazo = async (e) => {
    if (this.state.prazo_selecionadas[0] == e.target.value) {
      this.setState({ prazo_selecionadas: [] })
    } else {
      this.setState({ prazo_selecionadas: [e.target.value] })
    }
    this.filtrarProdutos()
  }

  changeQuantidade = async (e) => {
    this.setState({ quantidade_selecionada: e.target.value })
  }

  changeValorDe = async (e) => {
    this.setState({ valor_de: e.target.value })
  }

  changeValorAte = async (e) => {
    this.setState({ valor_ate: e.target.value })
  }

  clickFiltroValor = async () => {
    if (
      this.state.valor_de != null &&
      this.state.valor_de != "" &&
      this.state.valor_ate != null &&
      this.state.valor_ate != ""
    ) {
      var faixa = this.state.faixas
      var remove = false
      var index = 99999
      faixa.map((data, idx) => {
        if (data.cod == "novafaixa") {
          remove = true
          index = idx
        }
      })
      faixa.splice(index, 1)

      faixa.push({
        name: "De R$ " + parseFloat(this.state.valor_de) + " a R$ " + parseFloat(this.state.valor_ate),
        cod: "novafaixa",
        vlrinicial: this.state.valor_de,
        vlrfinal: this.state.valor_ate,
      })

      faixa.sort(function (a, b) {
        var valor_a = parseFloat(a.vlrinicial.replace(".", "").replace(",", "."))
        var valor_b = parseFloat(b.vlrinicial.replace(".", "").replace(",", "."))
        if (valor_a < valor_b) {
          return -1
        } else if (valor_a > valor_b) {
          return 1
        }
        return 0
      })

      await this.setState({
        faixas: faixa,
        faixa_selecionadas: ["novafaixa"],
        valor_inicial: this.state.valor_de,
        valor_final: this.state.valor_ate,
      })

      this.filtrarProdutos()
    }
  }

  deleteCategoria = async (cod) => {
    var categorias_selecionadas = this.state.categorias_selecionadas
    var remove = false
    var index = 0

    categorias_selecionadas.map((data, idx) => {
      if (data == cod) {
        remove = true
        index = idx
      }
    })

    categorias_selecionadas.splice(index, 1)

    var novaArr = categorias_selecionadas.filter(function (e, i) {
      return categorias_selecionadas.indexOf(e) === i
    })
    this.setState({ categorias_selecionadas: novaArr })
    this.setState({ subcategorias: [] })
    this.deleteSubcategoria()
  }

  deleteCor = async (cod) => {
    var cor_selecionadas = this.state.cor_selecionadas
    var remove = false
    var index = 0

    cor_selecionadas.map((data, idx) => {
      if (data == cod) {
        remove = true
        index = idx
      }
    })

    cor_selecionadas.splice(index, 1)

    var novaArr = cor_selecionadas.filter(function (e, i) {
      return cor_selecionadas.indexOf(e) === i
    })

    this.setState({ cor_selecionadas: novaArr })
  }
  deleteImpressao = async (cod) => {
    var impressao_selecionadas = this.state.impressao_selecionadas
    var remove = false
    var index = 0

    impressao_selecionadas.map((data, idx) => {
      if (data == cod) {
        remove = true
        index = idx
      }
    })

    impressao_selecionadas.splice(index, 1)

    var novaArr = impressao_selecionadas.filter(function (e, i) {
      return impressao_selecionadas.indexOf(e) === i
    })

    this.setState({ impressao_selecionadas: novaArr })
  }

  deletePrazo = async () => {
    this.setState({ prazo_selecionadas: [] })
  }

  deleteFaixa = async () => {
    this.setState({ faixa_selecionadas: [] })
    this.setState({ valor_inicial: null })
    this.setState({ valor_final: null })
  }

  addCont(idx) {
    cont = idx
  }

  resetCont() {
    cont = 1
  }

  filtrarProdutos = async () => {
    this.setState({ verFiltroMobile: false })

    this.setState({
      quantidade_filtrada: ifnull(this.state.quantidade_selecionada, ""),
    })
    this.getFaixaDePreco()
    this.getGridProdutoPorParametros()
  }

  loadDadosProduto = async (url_prod, codigo_prod, estoque) => {
    localStorage.setItem(
      "filtro-rapido",
      JSON.stringify({
        categoria: this.state.categorias_selecionadas.join(","),
        subcategoria: this.state.subcategorias_selecionadas.join(","),
        quantidade: ifnull(this.state.quantidade_filtrada, ""),
        valor_inicial: this.state.valor_inicial,
        valor_final: this.state.valor_final,
        cor: this.state.cor_selecionadas[0],
      }),
    )

    localStorage.removeItem("dados-carregados-busca")

    var quantidade = this.state.quantidade_selecionada
    var cor = this.state.cor_selecionadas[0]
    var prazo = this.state.prazo_selecionadas[0]

    if (parseInt(estoque) == 0) {
      localStorage.removeItem("dados-carregados-busca")
    } else {
      localStorage.setItem(
        "dados-carregados-busca",
        JSON.stringify({
          codprod: codigo_prod,
          qtd: quantidade,
          cor: cor,
          prazo: prazo,
        }),
      )
    }

    // window.location.href = "/" + url_prod;
  }

  atualizarBusca = async ({
    subcategoria_selecionada,
    cor_selecionada,
    prazo_selecionado,
    quantidade_selecionada,
    valor_de_selecionado,
    valor_ate_selecionado,
    texto_buscado,
  }) => {
    try {
      await this.setState({
        categorias_selecionadas: [],
        subcategorias_selecionadas: subcategoria_selecionada != null ? [String(subcategoria_selecionada.cod)] : [],
        cor_selecionadas: cor_selecionada != null ? cor_selecionada.split(",") : [],
        quantidade_selecionada: quantidade_selecionada,
        quantidade_filtrada: ifnull(quantidade_selecionada, ""),
        valor_inicial: valor_de_selecionado,
        valor_final: valor_ate_selecionado,
        texto_buscado: texto_buscado,
        prazo_selecionadas: prazo_selecionado != null ? [parseInt(prazo_selecionado.prazo)] : [],
      })

      await this.getGridProdutoPorParametros()
    } catch (error) {
      console.log(Object.keys(error), error.message)
    }
  }

  render() {
    var height_menu_subcat =
      this.state.subcategorias_selecionadas.length == 0
        ? "35px"
        : 35 * this.state.subcategorias_selecionadas.length + "px"
    var height_menu_cat =
      this.state.categorias_selecionadas.length == 0 ? "35px" : 35 * this.state.categorias_selecionadas.length + "px"

    var style_categoria = this.state.menu_categoria_view
      ? { transition: "0.5s", height: "280px" }
      : {
          transition: "0.5s",
          height: "0px",
          border: "none",
          backgroundColor: "transparent",
        }
    var style_categoria_input = this.state.menu_categoria_view
      ? { display: "block", marginTop: "0.5rem" }
      : { display: "none", marginTop: "0.5rem" }
    var style_categoria_ul = this.state.menu_categoria_view
      ? this.state.verMaisCategorias
        ? { display: "block", overflowY: "scroll" }
        : { display: "block" }
      : { display: "none" }

    var style_subcategoria = this.state.menu_subcategoria_view
      ? { transition: "0.5s", height: "280px" }
      : {
          transition: "0.5s",
          height: "0px",
          border: "none",
          backgroundColor: "transparent",
        }
    var style_subcategoria_input = this.state.menu_subcategoria_view ? { display: "block" } : { display: "none" }
    var style_subcategoria_ul = this.state.menu_subcategoria_view
      ? this.state.verMaisSubcategorias
        ? { display: "block", overflowY: "scroll" }
        : { display: "block" }
      : { display: "none" }

    var style_cor = this.state.menu_cor_view
      ? { transition: "0.5s", height: "280px" }
      : {
          transition: "0.5s",
          height: "0px",
          border: "none",
          backgroundColor: "transparent",
        }
    var style_cor_input = this.state.menu_cor_view ? { display: "block" } : { display: "none" }
    var style_cor_ul = this.state.menu_cor_view
      ? this.state.verMaisCor
        ? { display: "block", overflowY: "scroll" }
        : { display: "block" }
      : { display: "none" }

    var style_gravacao = this.state.menu_gravacao_view
      ? { transition: "0.5s", height: "280px" }
      : {
          transition: "0.5s",
          height: "0px",
          border: "none",
          backgroundColor: "transparent",
        }
    var style_gravacao_input = this.state.menu_gravacao_view ? { display: "block" } : { display: "none" }
    var style_gravacao_ul = this.state.menu_gravacao_view
      ? this.state.verMaisImpressoes
        ? { display: "block", overflowY: "scroll" }
        : { display: "block" }
      : { display: "none" }

    var style_prazo = this.state.menu_prazo_view
      ? { transition: "0.5s", height: "280px" }
      : {
          transition: "0.5s",
          height: "0px",
          border: "none",
          backgroundColor: "transparent",
        }
    var style_prazo_input = this.state.menu_prazo_view ? { display: "block" } : { display: "none" }
    var style_prazo_ul = this.state.menu_prazo_view ? { display: "block", height: "210px" } : { display: "none" }

    var style_preco = this.state.menu_preco_view
      ? { transition: "0.5s", height: "280px" }
      : {
          transition: "0.5s",
          height: "0px",
          border: "none",
          backgroundColor: "transparent",
        }
    var style_preco_input = this.state.menu_preco_view ? { display: "block" } : { display: "none" }
    var style_preco_ul = this.state.menu_preco_view
      ? this.state.verMaisFaixas
        ? { display: "block", overflowY: "scroll", overflowX: "hidden" }
        : { display: "block" }
      : { display: "none" }

    var height = 0
    if (this.state.menu_categoria_view) {
      height = height + 280
    }
    if (this.state.menu_subcategoria_view) {
      height = height + 280
    }

    var top_gravacao_height = height
    if (this.state.menu_gravacao_view) {
      height = height + 280
    }

    var top_height_preco = height
    if (this.state.menu_prazo_view) {
      top_height_preco = height + 280
    }

    var top_height_qtd = top_height_preco
    if (this.state.menu_preco_view) {
      top_height_qtd = top_height_preco + 280
    }

    return (
      <>
        <Head>
          {/* <link rel="alternate" href={`https://innovationbrindes.com.br/buscar`} hreflang="pt"/> */}

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
          title={`Innovation Brindes a maior empresa de Brindes Personalizados Promocionais`}
          description={`Busca, Brindes, Brindes Personalizados, Brindes Promocionais, Brindes Corporativos, Brindes Ecológicos, Personalizados, Innovation Brindes`}
          keywords={`Busca, Brindes, Brindes Personalizados, Personalizados, Brindes Promocionais, Promocionais, Empresa de Brindes, Brindes Corporativos, Chaveiros Personalizados, Squeeze Personalizado, Canetas Personalizadas, Canetas Para Brindes, Caneta Personalizada, Canetas Promocionais, Produtos Promocionais, Brindes Para Eventos, Carregador Celular Personalizado, Power Bank Personalizado, Espelho Personalizado, Brindes Dia Das Mães, Brindes Dia Dos Pais, Brindes Dia Da Mulher, Brindes Para o Final Do Ano, Brindes Para Funcionários, Confecção Promocional`}
          canonical={`https://innovationbrindes.com.br/buscar`}
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
        <Box style={{ opacity: this.state.display_init, transition: "0.3s" }}>
          <Box>
            {this.state.mobileView && this.state.isUltraRapido ? (
              <></>
            ) : this.state.isUltraRapido ? (
              <Image
                mt="-15px"
                maxWidth="1900px"
                mx={this.state.mobileView ? "auto" : "auto"}
                h={this.state.mobileView ? "auto" : "auto"}
                w={this.state.mobileView ? "100vw" : "100%"}
                objectFit="cover"
                src={`/images/banners/banner-ultra-rapido/banner-ultra-rapido-${this.state.sortBanner}.png`}
                alt="banner-ultra-rapido"
              />
            ) : (
              <></>
            )}
            <BuscarContentFilter isUltraRapido={this.state.isUltraRapido}>
              <BuscarContentFilterSelect
                isUltraRapido={this.state.isUltraRapido}
                id="select-order"
                onChange={(e) => this.handleOrderBy(e)}
              >
                <option>Ordenar produtos</option>
                <option>Menor Valor</option>
                <option>Maior Valor</option>
              </BuscarContentFilterSelect>
            </BuscarContentFilter>

            <BuscarContent isUltraRapido={this.state.isUltraRapido}>
              {this.state.subcategorias.length > 0 && this.state.subcategorias_selecionadas.length > 0 ? (
                <FiltroBusca
                  loadingProd={this.state.loadingProd}
                  texto_buscado={this.state.texto_buscado}
                  subcategoria_carregada={this.state.subcategorias_selecionadas}
                  subcategorias={this.state.subcategorias}
                  cores={[]}
                  cor_selecionadas={this.state.cor_selecionadas}
                  quantidade_selecionada={this.state.quantidade_selecionada}
                  valor_de={this.state.valor_de}
                  valor_ate={this.state.valor_ate}
                  atualizarBusca={this.atualizarBusca}
                  count_produtos={this.state.dados.length}
                  active_load={() => this.setState({ loadingProd: "block", dados: [] })}
                  ocultar_whats={(value) => this.footerChatRef.current?.ocultWhatsApp(value)}
                  isUltraRapido={this.state.isUltraRapido}
                  selo_prod={this.state.dados.selo_prod}
                />
              ) : (
                <></>
              )}

              {this.state.dados.length == 0 && this.state.loadingProd == "none" ? (
                <NaoEncontrouProduto>
                  <NaoEncontrouProdutoBody>
                    <h1>
                      <img alt="lupa" src={lupa} /> Busca sem resultado :(
                    </h1>
                    <h2>Nenhum produto correspondente à sua pesquisa</h2>
                    <p>
                      Faça uma <strong>nova pesquisa</strong> ou fale com um de <strong>nossos consultores</strong>
                    </p>
                    <button onClick={() => this.footerChatRef.current?.openChat()}>Falar com consultor</button>
                  </NaoEncontrouProdutoBody>
                </NaoEncontrouProduto>
              ) : (
                <GridProduts
                  isUltraRapido={this.state.isUltraRapido}
                  templateColumns={`repeat(auto-fill, minmax(200px, max-content))`}
                  style={this.state.loadingProd == "block" ? { height: "500px" } : {}}
                >
                  <GridProdutsLoading style={{ display: this.state.loadingProd }}>
                    {this.state.isUltraRapido ? (
                      <Center>
                        <img alt="loading_ultra_rapido" src={loading_ultra_rapido} />
                      </Center>
                    ) : (
                      <Center>
                        <Spinner size="lg" color="#CC0000" />
                      </Center>
                    )}
                  </GridProdutsLoading>

                  {this.state.dados.map((data) => {
                    return this.state.isUltraRapido ? (
                      <GridProductDefault
                        prod_nome={data.prod_nome}
                        codigo_prod={data.prod_cod}
                        url_prod={data.url_prod}
                        img_prod={data.imagem_home_store}
                        descricao={data.descricao}
                        caracteristicas={data.caracteristicas}
                        valor_home={data.valor_home}
                        selo={data.selo}
                        segmento={data.segmento}
                        ultrarapido={data.ultrarapido}
                        url_site={this.state.url_site}
                        ad_pdv={data.pdv}
                        cores={data.cores}
                        estoque={data.estoque}
                        isUltraRapido={this.state.isUltraRapido}
                        state={this.state}
                        selo_prod={data.selo_prod}
                        data_ultra_rapido={data.data_ultra_rapido}
                      />
                    ) : (
                      <GridProductDefault
                        loadDadosProduto={this.loadDadosProduto}
                        prod_nome={data.prod_nome}
                        codigo_prod={data.prod_cod}
                        url_prod={data.url_prod}
                        url_img={data.url_img}
                        referencia={data.referencia}
                        img_prod={data.imagem_home_store}
                        descricao={data.descricao}
                        caracteristicas={data.caracteristicas}
                        valor_home={data.valor_home}
                        selo={data.selo}
                        segmento={data.segmento}
                        ultrarapido={data.ultrarapido}
                        url_site={this.state.url_site}
                        ad_pdv={data.pdv}
                        cores={data.cores}
                        state={this.state}
                        addCont={this.addCont}
                        resetCont={this.resetCont}
                        cont={cont}
                        descricao_impressao={data.descricao_impressao}
                        cubagem={data.cubagem}
                        estoque={data.estoque}
                        countItems={this.state.dados.length}
                        isUltraRapido={this.state.isUltraRapido}
                        selo_prod={data.selo_prod}
                        data_ultra_rapido={data.data_ultra_rapido}
                      />
                    )
                  })}
                </GridProduts>
              )}
            </BuscarContent>
          </Box>
          <Footer ref={this.footerChatRef} />
        </Box>
      </>
    )
    // }
  }
}

function ifnull(a, b) {
  if (a === null || a === undefined || a === "") {
    return b
  } else {
    return a
  }
}

function NaoEncontrouProdutoComp() {
  return (
    <NaoEncontrouProduto>
      <NaoEncontrouProdutoBody>
        <h1>
          <img src={lupa} /> Busca sem resultado :(
        </h1>
        <h2>Nenhum produto correspondente à sua pesquisa</h2>
        <p>
          Faça uma <strong>nova pesquisa</strong> ou fale com um de <strong>nossos consultores</strong>
        </p>
        <button>Falar com consultor</button>
      </NaoEncontrouProdutoBody>
    </NaoEncontrouProduto>
  )
}

export default Buscar
