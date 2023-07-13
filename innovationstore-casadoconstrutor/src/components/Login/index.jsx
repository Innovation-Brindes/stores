import React, { Component } from "react";
import InputMask from "react-input-mask";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import {
  verificaRegistrosPorEmail,
  inserirNovoParceiro,
  requestEsqueciMinhaSenha,
  confereCPFCNPJPorEmail,
} from "../../services/api";

import { cor_base_1, cor_base_2 } from "../../services/cores";

import { EyeSlashFill, EyeFill } from "react-bootstrap-icons";

// import loading from "../../resources/images/loading.gif";
import EsqueciMinhaSenha from "../EsqueciMinhaSenha";
import { Box } from "@chakra-ui/react";
import {
  ContainerLogin,
  ContainerLoginContent,
  ContainerLoginContentHeader,
  ContainerLoginContentHeaderForm,
  ContainerLoginContentHeaderFormCardCadastro,
  ContainerLoginContentHeaderFormCardCadastroContentBodyDescricao,
  ContainerLoginContentHeaderFormCardCadastroLoading,
  ContainerLoginContentHeaderFormCardCadastroLoadingImg,
  ContainerLoginContentHeaderFormCardLogin,
  ContainerLoginContentHeaderFormCardLoginContent,
  ContainerLoginContentHeaderFormCardLoginContentBody,
  ContainerLoginContentHeaderFormCardLoginContentBodyEsqPwd,
  ContainerLoginContentHeaderFormCardLoginContentBodySenhaIncorreta,
  ContainerLoginContentHeaderFormCardLoginContentBodyViewPwd,
  ContainerLoginContentHeaderFormCardLoginContentBodyViewPwdIcon,
  ContainerLoginContentHeaderFormCardLoginContentHeader,
  ContainerLoginContentHeaderFormCardLoginLoading,
  ContainerLoginContentHeaderFormCardLoginLoadingImg,
} from "./styles";

const loading = "/images/loading.gif";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type_input: "password",
      maskCPFCNPJ: "999.999.999-999",
      maskCPFCNPJCad: "999.999.999-999",

      email_parceiro: null,
      cpf_cnpj_parceiro: null,
      senha_parceiro: null,

      nome_parceiro: null,
      cpf_cnpj_cad_parceiro: null,
      telefone_cad_parceiro: null,
      email_cad_parceiro: null,
      confirma_email_cad_parceiro: null,
      senha_cad_parceiro: null,
      confirma_senha_cad_parceiro: null,

      require_cadastro: false,
      require_cpfcpnj: false,
      nextPage: "minha-conta",

      acessando_site: false,
      criando_conta_site: false,
      url_site:
        window.location.hostname.indexOf("localhost") != -1
          ? window.location.hostname + ":3000"
          : window.location.hostname,
    };

    this.changeVisiblePassword = this.changeVisiblePassword.bind(this);
    this.handleChangeCPFCNPJ = this.handleChangeCPFCNPJ.bind(this);
    this.handleChangeCPFCNPJCad = this.handleChangeCPFCNPJCad.bind(this);

    this.changeCPFCNPJ = this.changeCPFCNPJ.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 10);
    if (localStorage.getItem("authentication_token") != null) {
      window.location.href = "/minha-conta";
    } else {
      var url = window.location.href.replaceAll(
        "http://" + this.state.url_site,
        ""
      );
      url = url.split("/");

      if (url.length == 2) {
        this.setState({ type_view: "login" });
      } else if (url.length == 4) {
        this.setState({ type_view: "esqueci-a-senha" });
      }
    }

    if (localStorage.getItem("solicitacao-de-orcamento") == "true") {
      this.setState({ nextPage: "carrinho" });
      localStorage.setItem("solicitacao-de-orcamento", "false");
    } else {
      this.setState({ nextPage: "minha-conta" });
      localStorage.setItem("solicitacao-de-orcamento", "false");
    }
  }

  changeVisiblePassword() {
    
    if (this.state.type_input == "password") {
      this.setState({ type_input: "text" });
    } else {
      this.setState({ type_input: "password" });
    }
  }

  handleChangeCPFCNPJ(value) {
    var format_data = value.replaceAll(".", "");
    var format_data = format_data.replaceAll("-", "");
    var format_data = format_data.replaceAll("/", "");

    if (format_data.length > 11) {
      this.setState({ maskCPFCNPJ: "99.999.999/9999-99" });
    } else if (format_data.length <= 11) {
      this.setState({ maskCPFCNPJ: "999.999.999-999" });
    }
  }

  changeCPFCNPJ(e) {
    this.setState({ cpf_cnpj_parceiro: e.target.value });
  }

  handleChangeCPFCNPJCad(value) {
    var format_data = value.replaceAll(".", "");
    var format_data = format_data.replaceAll("-", "");
    var format_data = format_data.replaceAll("/", "");

    if (format_data.length > 11) {
      this.setState({ maskCPFCNPJCad: "99.999.999/9999-99" });
    } else if (format_data.length <= 11) {
      this.setState({ maskCPFCNPJCad: "999.999.999-999" });
    }
  }

  changeCPFCNPJCad(e) {
    this.setState({ cpf_cnpj_cad_parceiro: e.target.value });
  }

  changeTelefoneCad(e) {
    this.setState({ telefone_cad_parceiro: e.target.value });
  }

  changeEmail(e) {
    this.setState({ email_parceiro: e.target.value });
  }

  changeSenha(e) {
    this.setState({ senha_parceiro: e.target.value });
  }

  changeNomeCad(e) {
    this.setState({ nome_parceiro: e.target.value });
  }
  changeEmailCad(e) {
    this.setState({ email_cad_parceiro: e.target.value });
  }
  changeConfirmaEmailCad(e) {
    this.setState({ confirma_email_cad_parceiro: e.target.value });
  }
  changeSenhaCad(e) {
    this.setState({ senha_cad_parceiro: e.target.value });
  }
  changeConfirmaSenhaCad(e) {
    this.setState({ confirma_senha_cad_parceiro: e.target.value });
  }

  ifnull = (a, b) => {
    if (a === null || a === undefined || a === "") {
      return b;
    } else {
      return a;
    }
  };

  fazLogin = async () => {
    await this.setState({ acessando_site: true, senhaIncorreta: false });

    if (this.ifnull(this.state.email_parceiro, "").trim() == "") {
      alert("Preencha o campo E-mail.");
    } else if (this.ifnull(this.state.senha_parceiro, "").trim() == "") {
      alert("Preencha o campo Senha.");
    } else {
      var qtd_reg = await this.verificaQuantidadeRegistros();

      if (!this.state.require_cadastro && parseInt(qtd_reg) == 0) {
        this.setState({ require_cadastro: true, acessando_site: false });
        return true;
      } else if (!this.state.require_cpfcpnj && parseInt(qtd_reg) > 1) {
        this.setState({ require_cpfcpnj: true, acessando_site: false });
        return true;
      } else if (this.state.require_cpfcpnj && parseInt(qtd_reg) > 1) {
        if (
          this.state.cpf_cnpj_parceiro == "" ||
          this.state.cpf_cnpj_parceiro == null ||
          this.state.cpf_cnpj_parceiro == undefined
        ) {
          await this.setState({ acessando_site: false });
          alert("É necessario preencher o CPF/CNPJ.");
          return true;
        } else {
          var cpfcnpj = this.state.cpf_cnpj_parceiro
            .replaceAll(".", "")
            .replaceAll("-", "")
            .replaceAll("/", "")
            .trim();
          var body = {
            email_parceiro: this.state.email_parceiro,
            cpf_cnpj_parceiro: cpfcnpj,
            senha_parceiro: this.state.senha_parceiro,
          };
        }
      } else if (parseInt(qtd_reg) == 1) {
        var body = {
          email_parceiro: this.state.email_parceiro,
          senha_parceiro: this.state.senha_parceiro,
        };
      }

      var myInit = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
        cors: "none",
        cache: "default",
      };

      var INNOV_API = await fetch("https://api.innovationbrindes.com.br/api/site/v2/login-site/entrar",myInit);
      var INNOV_API_REST = await INNOV_API.json();

      if (parseInt(INNOV_API_REST.codigo_parceiro) != 0) {
        if (
          INNOV_API_REST.codigo_parceiro.trim() != "" &&
          INNOV_API_REST.codigo_parceiro != 0
        ) {
          localStorage.setItem(
            "authentication_token",
            Math.floor(Math.random() * 10000000000000000000).toString(16)
          );
          localStorage.setItem(
            "codigo_parceiro",
            INNOV_API_REST.codigo_parceiro
          );
          localStorage.setItem(
            "nome_parceiro",
            INNOV_API_REST.nome_parceiro.trim()
          );
          window.location.href = "/" + this.state.nextPage;
        }
      } else {
        await this.setState({ acessando_site: false, senhaIncorreta: true });
        // alert("Email ou Senha esta incorreto.");
      }
    }
    await this.setState({ acessando_site: false });
  };

  esqueciMinhaSenha = async () => {
    try {
      if (this.ifnull(this.state.email_parceiro, "").trim() != "") {
        var valid = await this.verificaQuantidadeRegistros();

        if (!this.state.require_cpfcpnj && parseInt(valid) > 1) {
          this.setState({ require_cpfcpnj: true });
        } else {
          if (
            parseInt(valid) > 1 &&
            this.ifnull(this.state.email_parceiro, "").trim() != "" &&
            this.ifnull(this.state.cpf_cnpj_parceiro, "").trim() != ""
          ) {
            const response = await confereCPFCNPJPorEmail.get(
              this.state.email_parceiro +
                "/" +
                this.state.cpf_cnpj_parceiro
                  .replaceAll(".", "")
                  .replaceAll("-", "")
                  .replaceAll("/", "")
            );
            var dados = response.data;

            if (dados.confere == "SIM") {
              const response = await requestEsqueciMinhaSenha.post("", {
                email_parceiro: this.state.email_parceiro.trim(),
                cpfcnpj_parceiro: this.state.cpf_cnpj_parceiro
                  .replaceAll(".", "")
                  .replaceAll("-", "")
                  .replaceAll("/", ""),
              });
              var dados = response.data;
              if (dados.mensagem == "Token criado.") {
                alert(
                  "Email enviado para " +
                    this.state.email_parceiro.trim() +
                    ". Acesse para finalizar a atualização da senha."
                );
              }
            } else {
              alert("CPF/CNPJ não confere com o email informado.");
            }
          } else if (parseInt(valid) == 1) {
            if (parseInt(valid) == 1) {
              const response = await requestEsqueciMinhaSenha.post("", {
                email_parceiro: this.state.email_parceiro.trim(),
              });
              var dados = response.data;
              if (dados.mensagem == "Token criado.") {
                alert(
                  "Email enviado para " +
                    this.state.email_parceiro.trim() +
                    ". Acesse para finalizar a atualização da senha."
                );
              }
            } else {
              alert("Email não cadastrado.");
            }
          } else {
            alert("Preencha o Email e o CPF/CNPJ.");
          }
        }
      } else {
        alert("Preencha o campo de email.");
      }
    } catch (error) {
      console.log(Object.keys(error), error.message);
    }
  };

  verificaQuantidadeRegistros = async () => {
    try {
      const response = await verificaRegistrosPorEmail.get(
        this.state.email_parceiro.trim()
      );
      var dados = response.data;

      return dados.quantidade_registro;
    } catch (error) {
      console.log(Object.keys(error), error.message);
    }
  };

  inserirNovoParceiroSite = async () => {
    try {
      await this.setState({ criando_conta_site: true });

      if (
        this.ifnull(this.state.email_cad_parceiro, "").trim() !=
        this.ifnull(this.state.confirma_email_cad_parceiro, "").trim()
      ) {
        alert("Email não confere com o primeiro.");
        await this.setState({ criando_conta_site: false });
      } else if (
        this.ifnull(this.state.senha_cad_parceiro, "").trim() !=
        this.ifnull(this.state.confirma_senha_cad_parceiro, "").trim()
      ) {
        alert("Senha não confere.");
        await this.setState({ criando_conta_site: false });
      } else if (this.ifnull(this.state.nome_parceiro, "").trim() == "") {
        alert("Preencha o campo de Nome.");
        await this.setState({ criando_conta_site: false });
      } else if (
        this.ifnull(this.state.cpf_cnpj_cad_parceiro, "").trim() == ""
      ) {
        alert("Preencha o campo de CPF/CNPJ.");
        await this.setState({ criando_conta_site: false });
      } else if (
        this.ifnull(this.state.telefone_cad_parceiro, "").trim() == ""
      ) {
        alert("Preencha o campo de Telefone.");
        await this.setState({ criando_conta_site: false });
      } else if (this.ifnull(this.state.email_cad_parceiro, "").trim() == "") {
        alert("Preencha o campo de Email.");
        await this.setState({ criando_conta_site: false });
      } else if (this.ifnull(this.state.senha_cad_parceiro, "").trim() == "") {
        alert("Preencha o campo de Senha.");
        await this.setState({ criando_conta_site: false });
      } else {
        const responseVerifica = await verificaRegistrosPorEmail.get(
          this.state.confirma_email_cad_parceiro.trim()
        );
        var dados = responseVerifica.data;

        if (parseInt(dados.quantidade_registro) == 0) {
          var param = {
            nome_parceiro: this.state.nome_parceiro,
            email_parceiro: this.state.confirma_email_cad_parceiro,
            cpf_cnpj_parceiro: this.state.cpf_cnpj_cad_parceiro.replaceAll(".", "").replaceAll("/", "").replaceAll("-", ""),
            telefone_parceiro: this.state.telefone_cad_parceiro.replaceAll(" ", "").replaceAll("(", "").replaceAll(")", "").replaceAll("-", ""),
            senha_parceiro: this.state.confirma_senha_cad_parceiro,
          };

          const response = await inserirNovoParceiro.post(
            "inserir-novo-parceiro",
            param
          );
          var dados = response.data;

          if (dados.resultado == "1") {
            this.setState({
              email_parceiro: this.state.confirma_email_cad_parceiro,
              senha_parceiro: this.state.confirma_senha_cad_parceiro,
            });
            this.fazLogin();
          }
        } else {
          await this.setState({ criando_conta_site: false });
          alert("Já existe uma conta cadastrada neste email.");
        }
      }
    } catch (error) {
      console.log(Object.keys(error), error.message);
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

        {this.state.type_view == "login" ? (
          <ContainerLogin>
            <ContainerLoginContent>
              <ContainerLoginContentHeader>
                <p>
                  <strong>Seu cadastro</strong>
                </p>
              </ContainerLoginContentHeader>
              <ContainerLoginContentHeaderForm>
                <ContainerLoginContentHeaderFormCardLogin
                  onClick={() => {
                    this.setState({ require_cadastro: false });
                  }}
                  style={
                    this.state.require_cadastro
                      ? { transition: "1s", opacity: 0.6 }
                      : { transition: "1s", opacity: 1 }
                  }
                >
                  <ContainerLoginContentHeaderFormCardLoginLoading
                    style={
                      this.state.acessando_site
                        ? { display: "block" }
                        : { display: "none" }
                    }
                  >
                    <ContainerLoginContentHeaderFormCardLoginLoadingImg>
                      <img alt="loading" src={loading} />
                    </ContainerLoginContentHeaderFormCardLoginLoadingImg>
                  </ContainerLoginContentHeaderFormCardLoginLoading>
                  <ContainerLoginContentHeaderFormCardLoginContent>
                    <ContainerLoginContentHeaderFormCardLoginContentHeader>
                      <h1>
                        <strong>Já é cliente</strong> Innovation Brindes?
                      </h1>
                      <p>Então entre com seus dados de login e senha.</p>
                    </ContainerLoginContentHeaderFormCardLoginContentHeader>
                    <ContainerLoginContentHeaderFormCardLoginContentBody>
                      <input
                        style={{ backgroundColor: "#EDEDED" }}
                        type="email"
                        placeholder="E-mail"
                        onChange={(e) => this.changeEmail(e)}
                        onKeyPress={(e) =>
                          e.key == "Enter" ? this.fazLogin() : null
                        }
                      />

                      <InputMask
                        placeholder="CPF / CNPJ"
                        style={
                          this.state.require_cpfcpnj
                            ? {
                                transition: "0.6s",
                                height: "57px",
                                opacity: 1,
                                backgroundColor: "#F7F7F7",
                              }
                            : {
                                opacity: 0,
                                height: "0px",
                                backgroundColor: "#EDEDED",
                              }
                        }
                        mask={this.state.maskCPFCNPJ}
                        onChange={(e) => {
                          this.changeCPFCNPJ(e);
                          this.handleChangeCPFCNPJ(e.target.value);
                        }}
                        maskChar=""
                        onKeyPress={(e) =>
                          e.key == "Enter" ? this.fazLogin() : null
                        }
                      />
                      <ContainerLoginContentHeaderFormCardLoginContentBodyEsqPwd>
                        <p onClick={() => this.esqueciMinhaSenha()}>
                          Esqueceu a senha?
                        </p>
                      </ContainerLoginContentHeaderFormCardLoginContentBodyEsqPwd>
                      <input
                        style={
                          this.state.require_cpfcpnj
                            ? {
                                position: "relative",
                                top: "0px",
                                backgroundColor: "#EDEDED",
                              }
                            : {
                                position: "relative",
                                top: "-25px",
                                backgroundColor: "#F7F7F7",
                              }
                        }
                        type={this.state.type_input}
                        placeholder="Senha"
                        onChange={(e) => this.changeSenha(e)}
                        onKeyPress={(e) =>
                          e.key == "Enter" ? this.fazLogin() : null
                        }
                      />

                      {this.state.senhaIncorreta ? (
                        <ContainerLoginContentHeaderFormCardLoginContentBodySenhaIncorreta>
                          Email ou senha esta incorreto.
                        </ContainerLoginContentHeaderFormCardLoginContentBodySenhaIncorreta>
                      ) : (
                        <p></p>
                      )}

                      <ContainerLoginContentHeaderFormCardLoginContentBodyViewPwd>
                        <p onClick={() => this.changeVisiblePassword()}>
                          visualizar senha
                        </p>
                        {this.state.type_input == "password" ? (
                          <ContainerLoginContentHeaderFormCardLoginContentBodyViewPwdIcon>
                            <EyeSlashFill
                              onClick={() => this.changeVisiblePassword()}
                              size="15px"
                            />
                          </ContainerLoginContentHeaderFormCardLoginContentBodyViewPwdIcon>
                        ) : (
                          <ContainerLoginContentHeaderFormCardLoginContentBodyViewPwdIcon>
                            <EyeFill
                              onClick={() => this.changeVisiblePassword()}
                              size="15px"
                            />
                          </ContainerLoginContentHeaderFormCardLoginContentBodyViewPwdIcon>
                        )}
                      </ContainerLoginContentHeaderFormCardLoginContentBodyViewPwd>

                      <button onClick={() => this.fazLogin()}>
                        <strong>ACESSAR</strong>
                      </button>
                    </ContainerLoginContentHeaderFormCardLoginContentBody>
                  </ContainerLoginContentHeaderFormCardLoginContent>
                </ContainerLoginContentHeaderFormCardLogin>
                <ContainerLoginContentHeaderFormCardCadastro
                  style={
                    this.state.require_cadastro
                      ? { transition: "1s", transform: "scale(1.11,1.11)" }
                      : { transition: "1s" }
                  }
                >
                  <ContainerLoginContentHeaderFormCardCadastroLoading
                    style={
                      this.state.criando_conta_site
                        ? { display: "block" }
                        : { display: "none" }
                    }
                  >
                    <ContainerLoginContentHeaderFormCardCadastroLoadingImg>
                      <img alt="loading" src={loading} />
                    </ContainerLoginContentHeaderFormCardCadastroLoadingImg>
                  </ContainerLoginContentHeaderFormCardCadastroLoading>
                  <ContainerLoginContentHeaderFormCardLoginContent>
                    <ContainerLoginContentHeaderFormCardLoginContentHeader>
                      <h1>
                        <strong>Ainda não é cadastrado</strong> no site?
                      </h1>
                      <p>
                        Faça agora mesmo o seu cadastro, é simples e rápido!
                      </p>
                    </ContainerLoginContentHeaderFormCardLoginContentHeader>
                    <ContainerLoginContentHeaderFormCardLoginContentBody>
                      <input
                        onChange={(e) => this.changeNomeCad(e)}
                        style={{ backgroundColor: "#EDEDED" }}
                        type="text"
                        placeholder="Nome"
                      />

                      <InputMask
                        placeholder="CPF / CNPJ"
                        style={{ backgroundColor: "#F7F7F7" }}
                        mask={this.state.maskCPFCNPJCad}
                        onChange={(e) => {
                          this.changeCPFCNPJCad(e);
                          this.handleChangeCPFCNPJCad(e.target.value);
                        }}
                        maskChar=""
                      />

                      <InputMask
                        placeholder="Telefone"
                        style={{ backgroundColor: "#EDEDED" }}
                        mask="(99) 99999-9999"
                        onChange={(e) => {
                          this.changeTelefoneCad(e);
                        }}
                        maskChar=""
                      />

                      <input
                        onChange={(e) => this.changeEmailCad(e)}
                        style={{ backgroundColor: "#F7F7F7" }}
                        type="email"
                        placeholder="E-mail"
                      />
                      <input
                        onChange={(e) => this.changeConfirmaEmailCad(e)}
                        style={{ backgroundColor: "#EDEDED" }}
                        type="email"
                        placeholder="Confirma E-mail"
                      />
                      <input
                        onChange={(e) => this.changeSenhaCad(e)}
                        style={{ backgroundColor: "#F7F7F7" }}
                        type="password"
                        placeholder="Senha"
                      />
                      <input
                        onChange={(e) => this.changeConfirmaSenhaCad(e)}
                        style={{ backgroundColor: "#EDEDED" }}
                        type="password"
                        placeholder="Confirma senha"
                      />

                      <ContainerLoginContentHeaderFormCardCadastroContentBodyDescricao>
                        <p>Ao clicar no botão Criar Conta, aceita os nossos</p>
                        <p
                          style={{
                            color: cor_base_1,
                            cursor: "pointer",
                            marginTop: "-1rem",
                          }}
                        >
                          Termos e Condições
                        </p>
                      </ContainerLoginContentHeaderFormCardCadastroContentBodyDescricao>
                      <button
                        style={{ marginTop: "-2rem" }}
                        onClick={() => this.inserirNovoParceiroSite()}
                      >
                        <strong>CRIAR CONTA</strong>
                      </button>
                    </ContainerLoginContentHeaderFormCardLoginContentBody>
                  </ContainerLoginContentHeaderFormCardLoginContent>
                </ContainerLoginContentHeaderFormCardCadastro>
              </ContainerLoginContentHeaderForm>
            </ContainerLoginContent>
          </ContainerLogin>
        ) : (
          <EsqueciMinhaSenha />
        )}

        <Footer />
      </Box>
    );
    // }
  }
}

export default Login;
