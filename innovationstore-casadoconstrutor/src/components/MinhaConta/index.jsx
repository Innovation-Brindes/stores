import React, { Component } from "react";
import InputMask from "react-input-mask";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import {
  dadosParceiro,
  atualizarDadosParceiro,
  buscaInformacoesEndereco,
} from "../../services/api";
import { cor_base_1, cor_base_2 } from "../../services/cores";

// import loading from "../../resources/images/loading.gif";
import { Box } from "@chakra-ui/react";
import {
  ContainerMinhaConta,
  ContainerMinhaContaContent,
  ContainerMinhaContaContentControl,
  ContainerMinhaContaContentControlBtn,
  ContainerMinhaContaContentDadosContaResumo,
  ContainerMinhaContaContentDadosContaResumoContent,
  ContainerMinhaContaContentDadosContaResumoContentCadastroContato,
  ContainerMinhaContaContentDadosContaResumoContentCadastroContatoDados,
  ContainerMinhaContaContentDadosContaResumoContentCadastroContatoHeader,
  ContainerMinhaContaContentDadosContaResumoContentCadastroContatoHeaderSubTitle,
  ContainerMinhaContaContentDadosContaResumoContentCadastroContatoHeaderSubTitleSublinhado,
  ContainerMinhaContaContentDadosContaResumoContentCadastroContatoHeaderTitle,
  ContainerMinhaContaContentDadosContaResumoContentCadastroPJ,
  ContainerMinhaContaContentDadosContaResumoContentCadastroPJdados,
  ContainerMinhaContaContentDadosContaResumoContentCadastroPJHeader,
  ContainerMinhaContaContentDadosContaResumoContentCadastroPJHeaderSubtitle,
  ContainerMinhaContaContentDadosContaResumoContentCadastroPJHeaderSubtitleSublinhado,
  ContainerMinhaContaContentDadosContaResumoContentCadastroPJHeaderTitle,
  ContainerMinhaContaContentDadosContaResumoHeader,
  ContainerMinhaContaContentDadosContaResumoLoading,
  ContainerMinhaContaContentDadosContaResumoLoadingImg,
  ContentDadosFooter,
  ContentDadosFooterButton,
  ContentDadosFooterLinha,
  DadosConta,
  DadosContaContent,
  DadosContaContentCadastroPJ,
  DadosContaContentCadastroPJContent,
  DadosContaContentCadastroPJContentTextField,
  DadosContaContentCadastroPJContentTextFieldCol2,
  DadosContaContentCadastroPJContentTextFieldCol2CEP,
  DadosContaContentCadastroPJContentTextFieldCol2InputText,
  DadosContaContentCadastroPJContentTextFieldInputCheckBox,
  DadosContaContentCadastroPJContentTextFieldInputCheckBoxLabel,
  DadosContaContentCadastroPJContentTextFieldInputText,
  DadosContaContentCadastroPJHeader,
  DadosContaContentCadastroPJHeaderSubtitle,
  DadosContaContentCadastroPJHeaderSubtitleSublinhado,
  DadosContaContentCadastroPJHeaderTitle,
  DadosContaContentDadosContato,
  DadosContaContentDadosContatoContent,
  DadosContaContentDadosContatoContentTextField,
  DadosContaContentDadosContatoContentTextFieldSelect,
  DadosContaContentDadosContatoHeader,
  DadosContaContentDadosContatoHeaderSubtitle,
  DadosContaContentDadosContatoHeaderSubtitleSublinhado,
  DadosContaContentDadosContatoHeaderTitle,
  DadosContaHeader,
  DadosContaLoading,
  DadosContaLoadingImg,
  DadosContaResumoFooter,
  DadosContaResumoFooterButton,
  DadosContaResumoFooterLinha,
} from "./styles";
// import { EyeSlashFill, EyeFill } from 'react-bootstrap-icons';
const loading = "/images/loading.gif";

class MinhaConta extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type_input: "password",
      maskCPFCNPJ: "999.999.999-999",
      dado_da_conta: "on",
      pedido_btn: "off",

      edit: false,
      dados_parceiro: [],

      cpf_cnpj_parceiro: null,
      razao_social_parceiro: null,
      inscricao_estadual: null,
      identificacao: null,
      cep: null,
      logradouro: null,
      numero: null,
      complemento: null,
      bairro: null,
      municipio: null,
      uf: null,
      observacao: null,
      nome_contato: null,
      departamento: null,
      fixo: null,
      celular: null,
      email: null,
      salvando_dados: false,

      nextPage: "minha-conta",
    };

    this.changeVisiblePassword = this.changeVisiblePassword.bind(this);
    this.handleChangeCPFCNPJ = this.handleChangeCPFCNPJ.bind(this);
    this.ativaDadosDaConta = this.ativaDadosDaConta.bind(this);
    this.ativaPedido = this.ativaPedido.bind(this);
    this.sleep = this.sleep.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem("authentication_token") == null) {
      window.location.href = "/login";
    } else {
      window.scrollTo(0, 10);
      this.getDadosParceiros();

      if (localStorage.getItem("solicitacao-de-orcamento") == "true") {
        this.setState({ nextPage: "carrinho" });
        localStorage.setItem("solicitacao-de-orcamento", "false");
      } else {
        this.setState({ nextPage: "minha-conta" });
        localStorage.setItem("solicitacao-de-orcamento", "false");
      }
    }
  }

  getDadosParceiros = async () => {
    try {
      const response = await dadosParceiro.get(
        localStorage.getItem("codigo_parceiro")
      );
      var dados = response.data;

      this.setState({ dados_parceiro: dados });

      await this.setState({
        cep: dados.cep,
        complemento: dados.complemento,
        cpf_cnpj_parceiro: dados.cpf_cnpj_parceiro,
        email: dados.email,
        inscricao_estadual: dados.inscricao_estadual,
        nome_contato: dados.nome_contato,
        numero: dados.numero,
        celular: dados.numero_celular,
        fixo: dados.numero_telefone,
        razao_social_parceiro: dados.razao_social_parceiro,
      });

      await this.getInformacoesEndereco();

      this.preencherDadosParceiro();
      // this.setState({
      //                 bairro:                 dados.bairro,
      //                 cep:                    dados.cep,
      //                 complemento:            dados.complemento,
      //                 cpf_cnpj_parceiro:      dados.cpf_cnpj_parceiro,
      //                 departamento:           dados.departamento,
      //                 email:                  dados.email,
      //                 inscricao_estadual:     dados.inscricao_estadual,
      //                 logradouro:             dados.logradouro,
      //                 municipio:              dados.municipio,
      //                 nome_contato:           dados.nome_contato,
      //                 numero:                 dados.numero,
      //                 celular:                dados.numero_celular,
      //                 fixo:                   dados.numero_telefone,
      //                 razao_social_parceiro:  dados.razao_social_parceiro,
      //                 uf:                     dados.uf
      // });
    } catch (error) {
      console.log(Object.keys(error), error.message);
    }
  };

  preencherDadosParceiro = async () => {
    document.getElementById("cpf-cnpj").value = this.state.cpf_cnpj_parceiro;
    document.getElementById("razao-social").value =
      this.state.razao_social_parceiro;
    document.getElementById("nome-contato").value =
      this.state.razao_social_parceiro;
    document.getElementById("complemento").value = this.state.complemento;
    document.getElementById("fixo").value = this.state.fixo;
    document.getElementById("celular").value = this.state.celular;
    document.getElementById("email").value = this.state.email;
    document.getElementById("uf").value = this.state.uf;
    // document.getElementById("inscricao-estadual").value = this.state.inscricao_estadual;
    document.getElementById("cep").value = this.state.cep;
    document.getElementById("logradouro").value = this.state.logradouro;
    document.getElementById("numero").value = this.state.numero;
    document.getElementById("bairro").value = this.state.bairro;
    document.getElementById("municipio").value = this.state.municipio;
    document.getElementById("nome-contato").value =
      this.state.razao_social_parceiro;
    document.getElementById("depto-contato").value = this.state.departamento;
  };

  changeVisiblePassword() {
    if (this.state.type_input == "password") {
      this.setState({ type_input: "text" });
    } else {
      this.setState({ type_input: "password" });
    }
  }

  handleChangeCPFCNPJ(value) {
    this.setState({ valueCPFCNPJ: value });

    var format_data = value.replaceAll(".", "");
    var format_data = format_data.replaceAll("-", "");
    var format_data = format_data.replaceAll("/", "");

    if (format_data.length > 11) {
      this.setState({ maskCPFCNPJ: "99.999.999/9999-99" });
    } else if (format_data.length <= 11) {
      this.setState({ maskCPFCNPJ: "999.999.999-999" });
    }
  }

  salvarDadosParceiro = async () => {
    await this.setState({ salvando_dados: true });
    var param = {
      codigo_parceiro: this.state.dados_parceiro.codigo_parceiro,
      bairro: this.state.bairro,
      uf: this.state.uf,
      celular: this.state.celular,
      cep: this.state.cep,
      complemento: this.state.complemento,
      cpf_cnpj_parceiro: this.state.cpf_cnpj_parceiro,
      email: this.state.email,
      fixo: this.state.fixo,
      identificacao: this.state.identificacao,
      inscricao_estadual: this.state.inscricao_estadual,
      logradouro: this.state.logradouro,
      municipio: this.state.municipio,
      nome_contato: this.state.nome_contato,
      numero: this.state.numero,
      observacao: this.state.observacao,
      razao_social_parceiro: this.state.razao_social_parceiro,
    };

    const response = await atualizarDadosParceiro.post("", param);
    var dados = response.data;

    if (dados.mensagem == "Salvo com sucesso") {
      alert("Dados atualizados com sucesso");
    }
    this.sleep(1000);

    window.location.href = this.state.nextPage;
  };

  getInformacoesEndereco = async (e) => {
    try {
      var CEP_API = await fetch(
        `https://api.postmon.com.br/v1/cep/` + this.state.cep
      );
      var CEP_API_REST = await CEP_API.json();

      await this.setState({
        bairro: CEP_API_REST.bairro,
        municipio: CEP_API_REST.cidade,
        uf: CEP_API_REST.estado,
        logradouro: CEP_API_REST.logradouro,
      });

      this.preencherDadosParceiro();
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

  editarCadastroParceiro = async () => {
    await this.setState({ edit: true });
    this.preencherDadosParceiro();
  };

  ativaDadosDaConta() {
    this.setState({ dado_da_conta: "on", pedido_btn: "off" });
  }

  ativaPedido() {
    this.setState({ dado_da_conta: "off", pedido_btn: "on" });
  }

  logoutSite = async () => {
    localStorage.removeItem("authentication_token");
    window.location.href = "/";
  };

  changeInputs = async (e, value) => {
    if (value != "cep") {
      this.setState({ [value]: e.target.value });
    } else {
      this.setState({
        [value]: e.target.value
          .replaceAll(".", "")
          .replaceAll("-", "")
          .replaceAll("/", ""),
      });
    }
  };

  render() {
    // if (screen.width < 640 || screen.height < 480) {
    //     window.location.href = "http://innovationbrindes.com";
    // } else if (screen.width < 1024 || screen.height < 700) {
    //     window.location.href = "http://innovationbrindes.com";
    // }else{
    return (
      <Box>
        <Header />
        <ContainerMinhaConta>
          <ContainerMinhaContaContent>
            <ContainerMinhaContaContentControl>
              <ContainerMinhaContaContentControlBtn
                onClick={() => this.ativaDadosDaConta()}
                style={{
                  marginLeft: "0px",
                  backgroundImage:
                    'url("../images/dados-da-conta-' +
                    this.state.dado_da_conta +
                    '.png")',
                }}
              />
              {/* <div onClick={()=>this.ativaPedido()} style={{backgroundImage:'url("../images/pedidos-'+this.state.pedido_btn+'.png")'}} className="innovation-site__minha-conta__content__control__btn" /> */}
              <ContainerMinhaContaContentControlBtn
                style={{ backgroundImage: 'url("../images/sair-off.png")' }}
                onClick={() => this.logoutSite()}
              />
            </ContainerMinhaContaContentControl>
            {this.state.edit ? (
              <DadosDaContaEdicao
                salvarDadosParceiro={this.salvarDadosParceiro}
                getInformacoesEndereco={this.getInformacoesEndereco}
                changeInputs={this.changeInputs}
                preencherDadosParceiro={this.preencherDadosParceiro}
                state={this.state}
              />
            ) : (
              <DadosDaConta
                editarCadastroParceiro={this.editarCadastroParceiro}
                state={this.state}
              />
            )}
          </ContainerMinhaContaContent>
        </ContainerMinhaConta>
        <Footer />
      </Box>
    );
    // }
  }
}

export default MinhaConta;

function DadosDaConta(data) {
  return (
    <ContainerMinhaContaContentDadosContaResumo style={{ height: "750px" }}>
      <ContainerMinhaContaContentDadosContaResumoLoading
        style={
          data.state.cpf_cnpj_parceiro != null
            ? { display: "none" }
            : { display: "block" }
        }
      >
        <ContainerMinhaContaContentDadosContaResumoLoadingImg>
          <img alt="loading" src={loading} />
        </ContainerMinhaContaContentDadosContaResumoLoadingImg>
      </ContainerMinhaContaContentDadosContaResumoLoading>
      <ContainerMinhaContaContentDadosContaResumoHeader>
        <p>
          <strong>Dados da conta</strong>
        </p>
      </ContainerMinhaContaContentDadosContaResumoHeader>
      <ContainerMinhaContaContentDadosContaResumoContent>
        <ContainerMinhaContaContentDadosContaResumoContentCadastroPJ>
          <ContainerMinhaContaContentDadosContaResumoContentCadastroPJHeader>
            <ContainerMinhaContaContentDadosContaResumoContentCadastroPJHeaderTitle>
              <strong>Cadastro Pessoa Jurídica</strong>
            </ContainerMinhaContaContentDadosContaResumoContentCadastroPJHeaderTitle>
            <ContainerMinhaContaContentDadosContaResumoContentCadastroPJHeaderSubtitle>
              <p>
                <strong>Informações</strong>
              </p>
              <ContainerMinhaContaContentDadosContaResumoContentCadastroPJHeaderSubtitleSublinhado />
            </ContainerMinhaContaContentDadosContaResumoContentCadastroPJHeaderSubtitle>
          </ContainerMinhaContaContentDadosContaResumoContentCadastroPJHeader>
          <ContainerMinhaContaContentDadosContaResumoContentCadastroPJdados>
            <p>
              CNPJ: <strong>{data.state.cpf_cnpj_parceiro}</strong>
            </p>
            <p>
              Razão Social: <strong>{data.state.razao_social_parceiro}</strong>
            </p>
            <p>
              Inscrição Estadual:{" "}
              <strong>{data.state.inscricao_estadual}</strong>
            </p>

            <ContainerMinhaContaContentDadosContaResumoContentCadastroPJHeaderSubtitle
              style={{ top: "10px" }}
            >
              <p style={{ color: cor_base_1 }}>
                <strong>Endereço</strong>
              </p>
              <ContainerMinhaContaContentDadosContaResumoContentCadastroPJHeaderSubtitleSublinhado />
            </ContainerMinhaContaContentDadosContaResumoContentCadastroPJHeaderSubtitle>

            <br />
            <p style={{ top: "10px" }} />
            {/* <p>*Identificação: <strong>{data.state.dados_parceiro.departamento}</strong></p> */}
            <p>
              CEP: <strong>{data.state.cep}</strong>
            </p>
            <p>
              Logradouro: <strong>{data.state.logradouro}</strong>
            </p>
            <p>
              Numero: <strong>{data.state.numero}</strong>
            </p>
            <p>
              Complemento: <strong>{data.state.complemento}</strong>
            </p>
            <p>
              Bairro: <strong>{data.state.bairro}</strong>
            </p>
            <p>
              Município: <strong>{data.state.municipio}</strong>
            </p>
            <p>
              UF: <strong>{data.state.uf}</strong>
            </p>
          </ContainerMinhaContaContentDadosContaResumoContentCadastroPJdados>
        </ContainerMinhaContaContentDadosContaResumoContentCadastroPJ>
        <ContainerMinhaContaContentDadosContaResumoContentCadastroContato>
          <ContainerMinhaContaContentDadosContaResumoContentCadastroContatoHeader>
            <ContainerMinhaContaContentDadosContaResumoContentCadastroContatoHeaderTitle>
              <strong>Dados do contato</strong>
            </ContainerMinhaContaContentDadosContaResumoContentCadastroContatoHeaderTitle>
            <ContainerMinhaContaContentDadosContaResumoContentCadastroContatoHeaderSubTitle>
              <p>
                <strong>Informações</strong>
              </p>
              <ContainerMinhaContaContentDadosContaResumoContentCadastroContatoHeaderSubTitleSublinhado />
            </ContainerMinhaContaContentDadosContaResumoContentCadastroContatoHeaderSubTitle>
          </ContainerMinhaContaContentDadosContaResumoContentCadastroContatoHeader>
          <ContainerMinhaContaContentDadosContaResumoContentCadastroContatoDados>
            <p>
              Pessoa de contato: <strong>{data.state.nome_contato}</strong>
            </p>
            {/* <p>Depto. do contato: <strong>{data.state.departamento}</strong></p> */}
            <p>
              Fixo: <strong>{data.state.fixo}</strong>
            </p>
            <p>
              Celular: <strong>{data.state.celular}</strong>
            </p>
            <p>
              Email: <strong>{data.state.email}</strong>
            </p>
          </ContainerMinhaContaContentDadosContaResumoContentCadastroContatoDados>
        </ContainerMinhaContaContentDadosContaResumoContentCadastroContato>
      </ContainerMinhaContaContentDadosContaResumoContent>
      <DadosContaResumoFooter>
        <DadosContaResumoFooterLinha />
        <DadosContaResumoFooterButton>
          <button
            onClick={() => {
              data.editarCadastroParceiro();
            }}
          >
            <strong>EDITAR</strong>
          </button>
        </DadosContaResumoFooterButton>
      </DadosContaResumoFooter>
    </ContainerMinhaContaContentDadosContaResumo>
  );
}

function DadosDaContaEdicao(data) {
  return (
    <DadosConta>
      <DadosContaLoading
        style={
          data.state.salvando_dados ? { display: "block" } : { display: "none" }
        }
      >
        <DadosContaLoadingImg>
          <img alt="loading" src={loading} />
        </DadosContaLoadingImg>
      </DadosContaLoading>
      <DadosContaHeader>
        <p>
          <strong>Editar cadastro</strong>
        </p>
      </DadosContaHeader>
      <DadosContaContent>
        <DadosContaContentCadastroPJ>
          <DadosContaContentCadastroPJHeader>
            <DadosContaContentCadastroPJHeaderTitle>
              <strong>Cadastro Pessoa Jurídica</strong>
            </DadosContaContentCadastroPJHeaderTitle>
            <DadosContaContentCadastroPJHeaderSubtitle>
              <p>
                <strong>Informações</strong>
              </p>
              <DadosContaContentCadastroPJHeaderSubtitleSublinhado />
            </DadosContaContentCadastroPJHeaderSubtitle>
          </DadosContaContentCadastroPJHeader>

          <DadosContaContentCadastroPJContent>
            <div>
              <DadosContaContentCadastroPJContentTextField>
                <label>* CPF:</label>
                <br />
                <DadosContaContentCadastroPJContentTextFieldInputText
                  style={{ width: "208px", height: "24px" }}
                  type="text"
                  id={"cpf-cnpj"}
                  onChange={(e) => data.changeInputs(e, "cpf_cnpj_parceiro")}
                  onKeyDown={(e) => data.changeInputs(e, "cpf_cnpj_parceiro")}
                />
              </DadosContaContentCadastroPJContentTextField>
              <DadosContaContentCadastroPJContentTextField>
                <label>* Nome:</label>
                <br />
                <DadosContaContentCadastroPJContentTextFieldInputText
                  style={{ width: "208px", height: "24px" }}
                  type="text"
                  id={"razao-social"}
                  onChange={(e) => data.changeInputs(e, "cpf_cnpj_parceiro")}
                  onKeyDown={(e) => data.changeInputs(e, "cpf_cnpj_parceiro")}
                />
              </DadosContaContentCadastroPJContentTextField>
              {/* <DadosContaContentCadastroPJContentTextField>
                                    <label>* CNPJ:</label><br/>
                                    <input  style={{width:'208px',height:'24px'}}
                                            className="innovation-site__minha-conta__content__dados-conta__content__cadastro-pj__content__textfield__input-text"
                                            type="text"
                                            id={"cpf-cnpj"}
                                            onChange={(e)=>data.changeInputs(e,'cpf_cnpj_parceiro')}
                                            onKeyDown={(e)=>data.changeInputs(e,'cpf_cnpj_parceiro')}/>
                                </DadosContaContentCadastroPJContentTextField>
                                <DadosContaContentCadastroPJContentTextField>
                                    <label>* Razão social:</label><br/>
                                    <input  style={{width:'208px',height:'24px'}}
                                            className="innovation-site__minha-conta__content__dados-conta__content__cadastro-pj__content__textfield__input-text"
                                            type="text"
                                            id={"razao-social"}
                                            onChange={(e)=>data.changeInputs(e,'razao_social_parceiro')}
                                            onKeyDown={(e)=>data.changeInputs(e,'razao_social_parceiro')}/>
                                </DadosContaContentCadastroPJContentTextField>
                                <DadosContaContentCadastroPJContentTextField>
                                    <label>* Inscrição Estadual:</label><br/>
                                    <input  style={{width:'208px',height:'24px'}}
                                            className="innovation-site__minha-conta__content__dados-conta__content__cadastro-pj__content__textfield__input-text"
                                            type="text"
                                            id={"inscricao-estadual"}
                                            onChange={(e)=>data.changeInputs(e,'inscricao_estadual')}
                                            onKeyDown={(e)=>data.changeInputs(e,'inscricao_estadual')}/>
                                    <input className="innovation-site__minha-conta__content__dados-conta__content__cadastro-pj__content__textfield__input-checkbox" type="radio" ></input>
                                    <label className="innovation-site__minha-conta__content__dados-conta__content__cadastro-pj__content__textfield__input-checkbox__label">Isento</label>
                                </DadosContaContentCadastroPJContentTextField> */}
            </div>

            <DadosContaContentCadastroPJHeaderSubtitle>
              <p>
                <strong>Endereço</strong>
              </p>
              <DadosContaContentCadastroPJHeaderSubtitleSublinhado />
            </DadosContaContentCadastroPJHeaderSubtitle>
            {/* <DadosContaContentCadastroPJContentTextField>
                                    <label>* Identificação:</label><br/>
                                    <select style={{width:'100%',maxWidth:'445px',height:'24px'}} className='innovation-site__minha-conta__content__dados-conta__content__cadastro-pj__content__textfield__select'>
                                        <option>Selecione para identificar seu endereço</option>
                                        <option>Exemplo 1</option>
                                        <option>Exemplo 2</option>
                                        <option>Exemplo 3</option>
                                        <option>Exemplo 4</option>
                                    </select>
                                </DadosContaContentCadastroPJContentTextField> */}
            <DadosContaContentCadastroPJContentTextFieldCol2
              style={{ top: "15px" }}
            >
              <label>* CEP:</label>
              <br />
            </DadosContaContentCadastroPJContentTextFieldCol2>
            <DadosContaContentCadastroPJContentTextFieldCol2CEP
              style={{ width: "370px", height: "24px" }}
            >
              <DadosContaContentCadastroPJContentTextFieldCol2InputText
                style={{ width: "211px", height: "24px" }}
                type="text"
                id={"cep"}
                onChange={(e) => data.changeInputs(e, "cep")}
                onKeyDown={(e) => data.changeInputs(e, "cep")}
              />

              <button
                style={{ width: "157px", height: "24px" }}
                onClick={() => {
                  data.getInformacoesEndereco();
                }}
              >
                BUSCAR
              </button>
            </DadosContaContentCadastroPJContentTextFieldCol2CEP>
            <DadosContaContentCadastroPJContentTextField
              style={{ top: "10px" }}
            >
              <label>* Logradouro:</label>
              <br />
              <DadosContaContentCadastroPJContentTextFieldInputText
                style={{ width: "100%", maxWidth: "445px", height: "24px" }}
                placeholder="Endereço"
                type="text"
                id={"logradouro"}
                onChange={(e) => data.changeInputs(e, "logradouro")}
                onKeyDown={(e) => data.changeInputs(e, "logradouro")}
              />
            </DadosContaContentCadastroPJContentTextField>
            <DadosContaContentCadastroPJContentTextField
              style={{ marginTop: "10px" }}
            >
              <label>* Número:</label>
              <br />
              <DadosContaContentCadastroPJContentTextFieldInputText
                style={{ width: "208px", height: "24px", top: "-8px" }}
                type="text"
                id={"numero"}
                onChange={(e) => data.changeInputs(e, "numero")}
                onKeyDown={(e) => data.changeInputs(e, "numero")}
              />
              <DadosContaContentCadastroPJContentTextFieldInputCheckBox type="radio"></DadosContaContentCadastroPJContentTextFieldInputCheckBox>
              <DadosContaContentCadastroPJContentTextFieldInputCheckBoxLabel>
                Sem número
              </DadosContaContentCadastroPJContentTextFieldInputCheckBoxLabel>
            </DadosContaContentCadastroPJContentTextField>
            <DadosContaContentCadastroPJContentTextField>
              <label style={{ marginTop: "0.5rem" }}>* Complemento:</label>
              <br />
              <DadosContaContentCadastroPJContentTextFieldInputText
                style={{ width: "100%", maxWidth: "445px", height: "24px" }}
                placeholder="Ex: Bloco 3, apt 5"
                type="text"
                id={"complemento"}
                onChange={(e) => data.changeInputs(e, "complemento")}
                onKeyDown={(e) => data.changeInputs(e, "complemento")}
              />
            </DadosContaContentCadastroPJContentTextField>
            <DadosContaContentCadastroPJContentTextField>
              <label>* Bairro:</label>
              <br />
              <DadosContaContentCadastroPJContentTextFieldInputText
                style={{ width: "100%", maxWidth: "445px", height: "24px" }}
                type="text"
                id={"bairro"}
                onChange={(e) => data.changeInputs(e, "bairro")}
                onKeyDown={(e) => data.changeInputs(e, "bairro")}
              />
            </DadosContaContentCadastroPJContentTextField>
            <DadosContaContentCadastroPJContentTextField>
              <label>* Município:</label>
              <br />
              <DadosContaContentCadastroPJContentTextFieldInputText
                style={{ width: "211px", height: "24px" }}
                type="text"
                id={"municipio"}
                onChange={(e) => data.changeInputs(e, "municipio")}
                onKeyDown={(e) => data.changeInputs(e, "municipio")}
              />
            </DadosContaContentCadastroPJContentTextField>
            <DadosContaContentCadastroPJContentTextField>
              <label>* UF:</label>
              <br />
              <DadosContaContentCadastroPJContentTextFieldInputText
                style={{ width: "211px", height: "24px" }}
                type="text"
                id={"uf"}
                onChange={(e) => data.changeInputs(e, "uf")}
                onKeyDown={(e) => data.changeInputs(e, "uf")}
              />
            </DadosContaContentCadastroPJContentTextField>
            <DadosContaContentCadastroPJContentTextField>
              <label>* Observação:</label>
              <br />
              <DadosContaContentCadastroPJContentTextFieldInputText
                style={{ width: "100%", maxWidth: "445px", height: "24px" }}
                type="text"
                id={"observacao"}
                onChange={(e) => data.changeInputs(e, "observacao")}
                onKeyDown={(e) => data.changeInputs(e, "observacao")}
              />
            </DadosContaContentCadastroPJContentTextField>
          </DadosContaContentCadastroPJContent>
        </DadosContaContentCadastroPJ>
        <DadosContaContentDadosContato>
          <DadosContaContentDadosContatoHeader>
            <DadosContaContentDadosContatoHeaderTitle>
              <strong>Dados do contato</strong>
            </DadosContaContentDadosContatoHeaderTitle>
            <DadosContaContentDadosContatoHeaderSubtitle>
              <p>
                <strong>Informações</strong>
              </p>
              <DadosContaContentDadosContatoHeaderSubtitleSublinhado />
            </DadosContaContentDadosContatoHeaderSubtitle>
          </DadosContaContentDadosContatoHeader>
          <DadosContaContentDadosContatoContent>
            <div>
              <DadosContaContentDadosContatoContentTextField
                style={{ position: "relative" }}
              >
                <label style={{ position: "relative", top: "0px" }}>
                  * Pessoa de contato:
                </label>
                <br />
                <DadosContaContentDadosContatoContentTextFieldSelect
                  style={{
                    width: "445px",
                    height: "24px",
                    position: "relative",
                  }}
                  type="text"
                  id={"nome-contato"}
                  onChange={(e) => data.changeInputs(e, "nome_contato")}
                  onKeyDown={(e) => data.changeInputs(e, "nome_contato")}
                />
              </DadosContaContentDadosContatoContentTextField>
              {/* <div style={{position:'relative',top:'-18px'}} className="innovation-site__minha-conta__content__dados-conta__content__dados-contato__content__textfield">
                                    <label style={{position:'relative', top:'0px'}}>* Depto. do contato:</label><br/>
                                    <input  style={{width:'445px',height:'24px',position:'relative', top:'-8px'}}
                                            className="innovation-site__minha-conta__content__dados-conta__content__dados-contato__content__textfield__select"
                                            type="text"
                                            id={"depto-contato"}
                                            onChange={(e)=>data.changeInputs(e,'departamento')}
                                            onKeyDown={(e)=>data.changeInputs(e,'departamento')}/>
                                </div> */}

              <div>
                <DadosContaContentCadastroPJContentTextFieldCol2
                  style={{ position: "relative", top: "-20px" }}
                >
                  <label style={{ position: "relative", top: "10px" }}>
                    * Fixo:
                  </label>
                  <br />
                  <DadosContaContentCadastroPJContentTextFieldCol2InputText
                    style={{ width: "100%", maxWidth: "211px", height: "24px" }}
                    placeholder="(00) 00000-0000"
                    type="text"
                    id={"fixo"}
                    onChange={(e) => data.changeInputs(e, "fixo")}
                    onKeyDown={(e) => data.changeInputs(e, "fixo")}
                  />
                </DadosContaContentCadastroPJContentTextFieldCol2>
                <DadosContaContentCadastroPJContentTextFieldCol2
                  style={{ position: "relative", top: "-28px", left: "45px" }}
                >
                  <label style={{ marginTop: "1.6rem" }}></label>
                  <br />
                  <DadosContaContentCadastroPJContentTextFieldCol2InputText
                    style={{ width: "100%", maxWidth: "155px", height: "24px" }}
                    placeholder="00000"
                    type="text"
                  ></DadosContaContentCadastroPJContentTextFieldCol2InputText>
                </DadosContaContentCadastroPJContentTextFieldCol2>
              </div>
              <div>
                <DadosContaContentCadastroPJContentTextFieldCol2
                  style={{ position: "relative", top: "-38px" }}
                >
                  <label style={{ position: "relative", top: "10px" }}>
                    * Celular:
                  </label>
                  <br />
                  <DadosContaContentCadastroPJContentTextFieldCol2InputText
                    style={{ width: "100%", maxWidth: "211px", height: "24px" }}
                    placeholder="(00) 00000-0000"
                    type="text"
                    id={"celular"}
                    onChange={(e) => data.changeInputs(e, "celular")}
                    onKeyDown={(e) => data.changeInputs(e, "celular")}
                  />
                </DadosContaContentCadastroPJContentTextFieldCol2>
                <DadosContaContentCadastroPJContentTextFieldCol2
                  style={{ position: "relative", top: "-38px", left: "45px" }}
                >
                  <label></label>
                  <br />
                  <DadosContaContentCadastroPJContentTextFieldCol2InputText
                    style={{ width: "100%", maxWidth: "155px", height: "24px" }}
                    placeholder="00000"
                    type="text"
                  ></DadosContaContentCadastroPJContentTextFieldCol2InputText>
                </DadosContaContentCadastroPJContentTextFieldCol2>
              </div>
              <DadosContaContentDadosContatoContentTextField
                style={{ position: "relative", top: "-40px" }}
              >
                <label style={{ position: "relative" }}>* Email:</label>
                <br />
                <DadosContaContentDadosContatoContentTextFieldSelect
                  style={{
                    position: "relative",
                    width: "445px",
                    height: "24px",
                  }}
                  type="text"
                  id={"email"}
                  onChange={(e) => data.changeInputs(e, "email")}
                  onKeyDown={(e) => data.changeInputs(e, "email")}
                />
              </DadosContaContentDadosContatoContentTextField>
            </div>
          </DadosContaContentDadosContatoContent>
        </DadosContaContentDadosContato>
      </DadosContaContent>
      <ContentDadosFooter>
        <ContentDadosFooterLinha />
        <ContentDadosFooterButton>
          <button onClick={() => data.salvarDadosParceiro()}>
            <strong>SALVAR</strong>
          </button>
        </ContentDadosFooterButton>
      </ContentDadosFooter>
    </DadosConta>
  );
}
