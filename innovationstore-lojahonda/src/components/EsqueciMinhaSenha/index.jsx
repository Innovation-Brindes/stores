import React, { Component } from "react";

import {
  atualizarSenhaSite,
  validaTokenSite,
  verificaRegistrosPorEmail,
} from "../../services/api";

import { EyeSlashFill, EyeFill } from "react-bootstrap-icons";
import { Box } from "@chakra-ui/react";
import {
  ContainerLogin,
  ContainerLoginContentHeader,
  ContainerLoginContentHeaderForm,
  ContainerLoginContentHeaderFormCardLogin,
  ContainerLoginContentHeaderFormCardLoginContent,
  ContainerLoginContentHeaderFormCardLoginContentBody,
  ContainerLoginContentHeaderFormCardLoginContentBodyViewPwd,
  ContainerLoginContentHeaderFormCardLoginContentBodyViewPwdIcon,
  ContainerLoginContentHeaderFormCardLoginContentHeader,
} from "../Login/styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

class EsqueciMinhaSenha extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cpf_cnpj_parceiro: null,
      senha_parceiro: null,
      senha_cad_parceiro: null,

      type_input: "password",
      url_site:
        window.location.hostname.indexOf("localhost") != -1
          ? window.location.hostname + ":3000"
          : window.location.hostname,
    };

    this.changeVisiblePasswordEMS = this.changeVisiblePasswordEMS.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem("authentication_token") != null) {
      window.location.href = "/minha-conta";
    } else {
      var url = window.location.href.replaceAll(
        "http://" + this.state.url_site,
        ""
      );
      url = url.split("/");

      var result = this.confereTokenAcesso(url[2], url[3]);

      if (!result) {
        window.location.href = "/login";
      }
    }
  }

  confereTokenAcesso = async (cpf_cnpj_parceiro, token_access) => {
    try {
      await this.setState({
        cpf_cnpj_parceiro: cpf_cnpj_parceiro,
        token_access: token_access,
      });
      var param = {
        cpf_cnpj_parceiro: this.state.cpf_cnpj_parceiro,
        token: this.state.token_access,
      };
      
      const response = await validaTokenSite.post("", param);
      var data = response.data;

      if (data.mensagem == "Token autenticado") {
        return 1;
      } else {
        return 0;
      }
    } catch (error) {
      console.log(Object.keys(error), error.message);
    }
  };

  changeVisiblePasswordEMS() {
    
    if (this.state.type_input == "password") {
      this.setState({ type_input: "text" });
    } else {
      this.setState({ type_input: "password" });
    }
  }

  changeSenha(e) {
    this.setState({ senha_parceiro: e.target.value });
  }
  changeSenhaCad(e) {
    this.setState({ senha_cad_parceiro: e.target.value });
  }

  cadastrarNovaSenha = async () => {
    try {
      if (
        this.ifnull(this.state.senha_parceiro, "").trim() ==
        this.ifnull(this.state.senha_cad_parceiro, "").trim()
      ) {
        var param = {
          senha_parceiro: this.state.senha_parceiro,
          cpf_cnpj_parceiro: this.state.cpf_cnpj_parceiro,
          token: this.state.token_access,
        };
        const response = await atualizarSenhaSite.post("", param);
        var dados = response.data;

        if (dados.mensagem == "Senha atualizada") {
          alert("Senha atualizada com sucesso.");

          window.location.href = "/login";
        }
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

  ifnull = (a, b) => {
    if (a === null || a === undefined || a === "") {
      return b;
    } else {
      return a;
    }
  };

  render() {
    return (
      <Box>
        <Header/>
        <ContainerLogin>
          <ContainerLoginContentHeader>
            <p>
              <strong>Nova senha</strong>
            </p>
          </ContainerLoginContentHeader>
          <ContainerLoginContentHeaderForm style={{ width: "525px" }}>
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
              <ContainerLoginContentHeaderFormCardLoginContent>
                <ContainerLoginContentHeaderFormCardLoginContentHeader>
                  <h1>
                    Olá,<strong> esqueceu a senha?</strong>
                  </h1>
                  <p>Cadastre abaixo sua nova senha.</p>
                </ContainerLoginContentHeaderFormCardLoginContentHeader>
                <ContainerLoginContentHeaderFormCardLoginContentBody>
                  <input
                    style={{ backgroundColor: "#EDEDED" }}
                    type={this.state.type_input}
                    placeholder="Senha"
                    onChange={(e) => this.changeSenha(e)}
                    onKeyDown={(e) => this.changeSenha(e)}
                  />

                  <input
                    style={{ backgroundColor: "#F7F7F7" }}
                    type={this.state.type_input}
                    placeholder="Confirmar senha"
                    onChange={(e) => this.changeSenhaCad(e)}
                    onKeyDown={(e) => this.changeSenhaCad(e)}
                  />

                  <ContainerLoginContentHeaderFormCardLoginContentBodyViewPwd>
                    <p
                      style={{ marginTop: "1rem" }}
                      onClick={() => this.changeVisiblePasswordEMS()}
                    >
                      visualizar senha
                    </p>
                    {this.state.type_input == "password" ? (
                      <ContainerLoginContentHeaderFormCardLoginContentBodyViewPwdIcon
                        style={{ marginTop: "1rem" }}
                      >
                        <EyeSlashFill
                          onClick={() => this.changeVisiblePasswordEMS()}
                          size="15px"
                        />
                      </ContainerLoginContentHeaderFormCardLoginContentBodyViewPwdIcon>
                    ) : (
                      <ContainerLoginContentHeaderFormCardLoginContentBodyViewPwdIcon
                        style={{ marginTop: "1rem" }}
                      >
                        <EyeFill
                          onClick={() => this.changeVisiblePasswordEMS()}
                          size="15px"
                        />
                      </ContainerLoginContentHeaderFormCardLoginContentBodyViewPwdIcon>
                    )}
                  </ContainerLoginContentHeaderFormCardLoginContentBodyViewPwd>

                  <button  onClick={() => this.cadastrarNovaSenha()}>
                    <strong>ATUALIZAR</strong>
                  </button>
                </ContainerLoginContentHeaderFormCardLoginContentBody>
              </ContainerLoginContentHeaderFormCardLoginContent>
            </ContainerLoginContentHeaderFormCardLogin>
          </ContainerLoginContentHeaderForm>
        </ContainerLogin>
        <Footer/>
      </Box>
    );
  }
}

export default EsqueciMinhaSenha;
