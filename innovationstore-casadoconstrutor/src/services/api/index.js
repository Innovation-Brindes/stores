import axios from "axios"

export const baseURL = axios.create({
  baseURL: "https://api.innovationbrindes.com.br/api/site/v2/",
  headers: {
    "Content-Type": "application/json",
  },
})

export const buscaMelhorOfertaProduto = axios.create({
  baseURL: "https://api.innovationbrindes.com.br/api/site/v2/produto/produto-melhor-oferta",
  headers: {
    "Content-type": "application/json",
  },
})

export const buscaValorProduto = axios.create({
  baseURL: "https://api.innovationbrindes.com.br/api/site/v2/produto/buscar-valor-produto",
  headers: {
    "Content-type": "application/json",
  },
})

export const dadosProdutosSubcategoria = axios.create({
  baseURL: "https://api.innovationbrindes.com.br/api/site/v2/produto/listar-por-subcategoria/",
  headers: {
    "Content-type": "application/json",
    Authorization: "token base64:GBmTIgI0gbs8+17oVKlCcg==",
  },
})

export const dadosProdutosSegmento = axios.create({
  baseURL: "https://api.innovationbrindes.com.br/api/site/v2/produto/listar-por-segmento/",
  headers: {
    "Content-type": "application/json",
  },
})

export const dadosProdutosUltraRapidoRandom = axios.create({
  baseURL: "https://api.innovationbrindes.com.br/api/site/v2/pedido/ultra-rapido",
  headers: {
    "Content-type": "application/json",
  },
})

export const dadosProdutos = axios.create({
  baseURL: "https://api.innovationbrindes.com.br/api/site/v2/produto/listar-random",
  headers: {
    "Content-type": "application/json",
  },
})

export const dadosCategorias = axios.create({
  baseURL: "https://api.innovationbrindes.com.br/api/site/v2/categoria/listar",
  headers: {
    "Content-type": "application/json",
  },
})

export const dadosMenu = axios.create({
  baseURL: "https://api.innovationbrindes.com.br/api/site/v2/categoria/listar-menu",
  headers: {
    "Content-type": "application/json",
  },
})

export const dadosSubCategorias = axios.create({
  baseURL: "https://api.innovationbrindes.com.br/api/site/v2/categoria/listar-subcategorias",
  headers: {
    "Content-type": "application/json",
  },
})

export const dadosSubCategoriasUltraRapido = axios.create({
  baseURL: "https://api.innovationbrindes.com.br/api/site/v2/categoria/listar-subcategorias-ultra-rapido",
  headers: {
    "Content-type": "application/json",
  },
})

export const dadosPorSubCategorias = axios.create({
  baseURL: "https://api.innovationbrindes.com.br/api/site/v2/produto/listar-por-subcategoria",
  headers: {
    "Content-type": "application/json",
  },
})

export const dadosSegmentos = axios.create({
  baseURL: "https://api.innovationbrindes.com.br/api/site/v2/segmento/listar",
  headers: {
    "Content-type": "application/json",
  },
})

export const dadosParceiro = axios.create({
  baseURL: "https://api.innovationbrindes.com.br/api/site/v2/cliente/busca-dados-parceiro",
  headers: {
    "Content-type": "application/json",
  },
})

export const requestEsqueciMinhaSenha = axios.create({
  baseURL: "https://api.innovationbrindes.com.br/api/site/v2/conta-site/esqueci-minha-senha",
  headers: {
    "Content-type": "application/json",
  },
})

export const confereCPFCNPJPorEmail = axios.create({
  baseURL: "https://api.innovationbrindes.com.br/api/site/v2/conta-site/confere-cpfcnpj-por-email",
  headers: {
    "Content-type": "application/json",
  },
})

export const validaTokenSite = axios.create({
  baseURL: "https://api.innovationbrindes.com.br/api/site/v2/conta-site/valida-token",
  headers: {
    "Content-type": "application/json",
  },
})

export const atualizarSenhaSite = axios.create({
  baseURL: "https://api.innovationbrindes.com.br/api/site/v2/conta-site/atualizar-senha",
  headers: {
    "Content-type": "application/json",
  },
})

export const buscaProduto = axios.create({
  baseURL: "https://api.innovationbrindes.com.br/api/site/v2/produto/",
  headers: {
    "Content-type": "application/json",
  },
})

export const buscaFaixaDePreco = axios.create({
  baseURL: "https://api.innovationbrindes.com.br/api/site/v2/home-site/filtro-faixa-preco",
  headers: {
    "Content-type": "application/json",
  },
})

export const cotacaoCargoBR = axios.create({
  baseURL: "https://private-anon-e4fd4a4864-cargobr.apiary-mock.com/v1/freights/quotations/",
  headers: {
    "Content-type": "application/json",
  },
})

export const validaCEP = axios.create({
  baseURL: "https://api.postmon.com.br/v1/cep/",
  headers: {
    "Content-type": "application/json",
  },
})

export const verificaRegistrosPorEmail = axios.create({
  baseURL: "https://api.innovationbrindes.com.br/api/site/v2/login-site/valida-registros",
  headers: {
    "Content-type": "application/json",
  },
})

export const inserirNovoParceiro = axios.create({
  baseURL: "https://api.innovationbrindes.com.br/api/site/v2/login-site/",
  headers: {
    "Content-type": "application/json",
  },
})

export const atualizarDadosParceiro = axios.create({
  baseURL: "https://api.innovationbrindes.com.br/api/site/v2/conta-site/salvar-dados-parceiro",
  headers: {
    "Content-type": "application/json",
  },
})

export const buscaCoresDisponiveis = axios.create({
  baseURL: "https://api.innovationbrindes.com.br/api/site/v2/busca/busca-cores-disponiveis",
  headers: {
    "Content-type": "application/json",
  },
})

export const buscaInformacoesEndereco = axios.create({
  baseURL: "https://api.postmon.com.br/v1/cep",
  headers: {
    "Content-type": "application/json",
  },
})

export const buscaProdutoPorParametros = axios.create({
  baseURL: "https://api.innovationbrindes.com.br/api/site/v2/busca/listar-produto-por-parametros",
  headers: {
    "Content-type": "application/json",
  },
})
export const buscaListaFaixaDePreco = axios.create({
  baseURL: "https://api.innovationbrindes.com.br/api/site/v2/home-site",
  headers: {
    "Content-type": "application/json",
  },
})
export const buscaConfiguracaoProdutoBuscado = axios.create({
  baseURL: "https://api.innovationbrindes.com.br/api/site/v2/home-site",
  headers: {
    "Content-type": "application/json",
  },
})

export const buscaImpressoesDisponiveis = axios.create({
  baseURL: "https://api.innovationbrindes.com.br/api/site/v2/busca/busca-impressoes-disponiveis",
  headers: {
    "Content-type": "application/json",
  },
})

export const ListaPrazoDeProducao = axios.create({
  baseURL: "https://api.innovationbrindes.com.br/api/site/v2/produto/listar-prazo-producao/",
  headers: {
    "Content-type": "application/json",
  },
})

export const SalvarAvisoProdutoIndisponivel = axios.create({
  baseURL: "https://api.innovationbrindes.com.br/api/site/v2/produto/me-avise-produto-indisponivel/",
  headers: {
    "Content-type": "application/json",
  },
})

export const SalvarContatoSite = axios.create({
  baseURL: "https://api.innovationbrindes.com.br/api/site/v2/contato/inserir-contato-whatsapp/",
  headers: {
    "Content-type": "application/json",
  },
})

export const BuscaTodosProdutos = axios.create({
  baseURL: "https://api.innovationbrindes.com.br/api/site/v2/busca/busca-todos-produtos",
  headers: {
    "Content-type": "application/json",
  },
})

export const GerarOrcamento = axios.create({
  baseURL: "https://api.innovationbrindes.com.br/api/site/v2/orcamento/salvar-cabecalho-nota",
  headers: {
    "Content-type": "application/json",
  },
})

export const GerarOrçamentoPDF = axios.create({
  baseURL: "https://api.innovationbrindes.com.br/api/site/v2/gerarPDF",
  headers: {
    "Content-type": "application/json",
  },
})

export const UploadArquivoDrive = axios.create({
  baseURL: "https://api.innovationbrindes.com.br/api/site/v2/pedido/upload-drive-devolucao",
  headers: {
    "Content-type": "application/json",
  },
})

export const AcompanharPedido = axios.create({
  baseURL: "https://api.innovationbrindes.com.br/api/site/v2/pedido/acompanhe-seu-pedido",
  headers: {
    "Content-type": "application/json",
  },
})

export const getInformacoesLayout = axios.create({
  baseURL: "https://api.innovationbrindes.com.br/api/site/v2/pedido/listar-informacoes-layout",
  headers: {
    "Content-type": "application/json",
  },
})

export const getListarInfoClientes = axios.create({
  baseURL: "https://api.innovationbrindes.com.br/api/site/v2/pedido/lista-info-clientes",
  headers: {
    "Content-type": "application/json",
  },
})

export const AtualizaInfoCliente = axios.create({
  baseURL: "https://api.innovationbrindes.com.br/api/site/v2/pedido/atualiza-info-cliente",
  headers: {
    "Content-type": "application/json",
  },
})
