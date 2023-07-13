import styled from "styled-components";
import { cor_base_1 } from "../../services/cores";

export const ContainerMinhaConta = styled.div`
  width: 100%;
  height: 1200px;
`;
export const ContainerMinhaContaContent = styled.div`
  width: 1100px;
  height: 100%;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-top: 48px;
`;
export const ContainerMinhaContaContentControl = styled.div`
  width: 100%;
  height: 54px;
  position: relative;
`;
export const ContainerMinhaContaContentControlBtn = styled.div`
  width: 156px;
  height: 40px;
  position: relative;
  float: left;
  margin-left: 7px;
  border-radius: 3px;
  background-color: white;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  &:hover {
    transition: 0.3s;
    background-image: url("../images/sair-on.png");
  }
`;
export const ContainerMinhaContaContentDadosContaResumo = styled.div`
  width: 100%;
  height: 920px;
  position: relative;
  border-radius: 8px;
  box-shadow: 2px 2px 20px 2px rgb(233, 233, 233);
`;
export const ContainerMinhaContaContentDadosContaResumoLoading = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 999;
  display: block;
  background-color: white;
`;
export const ContainerMinhaContaContentDadosContaResumoLoadingImg = styled.div`
  width: 135px;
  height: 140px;
  top: 40%;
  position: relative;
  margin-left: auto;
  margin-right: auto;
`;

export const ContainerMinhaContaContentDadosContaResumoHeader = styled.div`
  width: 99%;
  height: 60px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  border-radius: 8px 8px 0px 0px;
  top: 0.5%;
  background-color: ${cor_base_1};

  p {
    position: relative;
    text-align: center;
    font-size: 25px;
    font-weight: 400;
    font-family: "Akrobat";
    color: white;
    letter-spacing: 0.08rem;
    top: 10px;
  }
`;
export const ContainerMinhaContaContentDadosContaResumoContent = styled.div`
  width: 70%;
  position: relative;
  margin-left: auto;
  margin-right: auto;
`;
export const ContainerMinhaContaContentDadosContaResumoContentCadastroPJ = styled.div`
  position: relative;
  float: left;
  width: 50%;
  height: 90%;
  // background-color: rgba(0, 0, 255, 0.08);
  padding: 0px 0px 0px 0px;
  font-family: "Akrobat", sans-serif;
  top: 100px;
`;
export const ContainerMinhaContaContentDadosContaResumoContentCadastroPJHeader = styled.div`
  width: 100%;
  position: relative;
  margin: 5px 5px 5px 5px;
  margin-left: auto;
`;
export const ContainerMinhaContaContentDadosContaResumoContentCadastroPJHeaderTitle = styled.div`
  font-size: 120%;
  color: black;
  font-family: "Akrobat", sans-serif;
`;
export const ContainerMinhaContaContentDadosContaResumoContentCadastroPJHeaderSubtitle = styled.div`
  width: 100%;
  font-size: 110%;
  color: ${cor_base_1};
  margin-top: 0%;
  font-family: "Akrobat", sans-serif;
  position: relative;
  float: left;

  p {
    color: ${cor_base_1};
  }
`;
export const ContainerMinhaContaContentDadosContaResumoContentCadastroPJHeaderSubtitleSublinhado = styled.div`
  width: 90%;
  height: 1px;
  position: relative;
  top: -10px;
  background-color: ${cor_base_1};
`;
export const ContainerMinhaContaContentDadosContaResumoContentCadastroPJdados = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  top: 00px;

  p {
    position: relative;
    line-height: 90%;
    color: #686868;
  }
  // background-color: deepskyblue;
`;
export const ContainerMinhaContaContentDadosContaResumoContentCadastroContato = styled.div`
  position: relative;
  float: left;
  width: 50%;
  height: 90%;
  // background-color: rgba(0, 0, 255, 0.08);
  padding: 0px 0px 0px 0px;
  font-family: "Akrobat", sans-serif;
  top: 100px;
`;
export const ContainerMinhaContaContentDadosContaResumoContentCadastroContatoHeader = styled.div`
  width: 100%;
  position: relative;
  margin: 5px 5px 5px 5px;
  margin-left: auto;
`;
export const ContainerMinhaContaContentDadosContaResumoContentCadastroContatoHeaderTitle = styled.div`
  font-size: 120%;
  color: black;
  font-family: "Akrobat", sans-serif;
`;
export const ContainerMinhaContaContentDadosContaResumoContentCadastroContatoHeaderSubTitle = styled.div`
  width: 100%;
  font-size: 110%;
  color: ${cor_base_1};
  margin-top: 0%;
  font-family: "Akrobat", sans-serif;
  position: relative;
  float: left;
`;
export const ContainerMinhaContaContentDadosContaResumoContentCadastroContatoHeaderSubTitleSublinhado = styled.div`
  width: 90%;
  height: 1px;
  position: relative;
  top: -10px;
  background-color: ${cor_base_1};
`;
export const ContainerMinhaContaContentDadosContaResumoContentCadastroContatoDados = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  top: 00px;

  p {
    position: relative;
    line-height: 90%;
    color: #686868;
  }
  // background-color: deepskyblue;
`;
export const DadosContaResumoFooter = styled.div`
  width: 100%;
  height: 85px;
  position: relative;
  float: left;
  // background-color: rgba(255, 0, 0, 0.562);
  top: 8%;
`;
export const DadosContaResumoFooterLinha = styled.div`
  width: 98%;
  height: 3px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  top: 40%;
  background-color: #e2e2e2;
`;
export const DadosContaResumoFooterButton = styled.div`
  width: 217px;
  height: 49px;
  position: relative;
  float: right;
  right: 5%;
  top: 10%;
  background-color: white;
  button {
    width: 207px;
    height: 49px;
    background-color: ${cor_base_1};
    position: relative;
    margin-left: auto;
    margin-right: auto;
    left: 2.5%;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 18px;
    font-family: "Akrobat";
    letter-spacing: 00.08rem;
  }
`;
export const DadosConta = styled.div`
  width: 100%;
  height: 920px;
  position: relative;
  border-radius: 8px;
  box-shadow: 2px 2px 20px 2px rgb(233, 233, 233);
`;
export const DadosContaLoading = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 999;
  display: block;
  background-color: white;
`;
export const DadosContaLoadingImg = styled.div`
  width: 135px;
  height: 140px;
  top: 40%;
  position: relative;
  margin-left: auto;
  margin-right: auto;
`;
export const DadosContaHeader = styled.div`
  width: 99%;
  height: 60px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  border-radius: 8px 8px 0px 0px;
  top: 0.5%;
  background-color: ${cor_base_1};

  p {
    position: relative;
    text-align: center;
    font-size: 25px;
    font-weight: 400;
    font-family: "Akrobat";
    color: white;
    letter-spacing: 0.08rem;
    top: 10px;
  }
`;
export const DadosContaContent = styled.div`
  width: 100%;
`;
export const DadosContaContentCadastroPJ = styled.div`
  position: relative;
  float: left;
  width: 50%;
  height: 90%;
  // background-color: rgba(0, 0, 255, 0.08);
  padding: 0px 0px 0px 0px;
  font-family: "Akrobat", sans-serif;
  top: 10px;
`;
export const DadosContaContentCadastroPJHeader = styled.div`
  width: 90%;
  position: relative;
  margin: 5px 5px 5px 5px;
  margin-left: auto;
`;
export const DadosContaContentCadastroPJHeaderTitle = styled.div`
  font-size: 120%;
  color: black;
  font-family: "Akrobat", sans-serif;
`;
export const DadosContaContentCadastroPJHeaderSubtitle = styled.div`
  width: 100%;
  font-size: 110%;
  color: ${cor_base_1};
  margin-top: 2%;
  font-family: "Akrobat", sans-serif;
  position: relative;
  float: left;
`;
export const DadosContaContentCadastroPJHeaderSubtitleSublinhado = styled.div`
  width: 60%;
  height: 1px;
  position: relative;
  top: -10px;
  background-color: ${cor_base_1};
`;
export const DadosContaContentCadastroPJContent = styled.div`
  width: 90%;
  height: 87%;
  position: relative;
  margin: 5px 5px 5px 5px;
  margin-left: auto;
`;
export const DadosContaContentCadastroPJContentTextField = styled.div`
  width: 100%;
  position: relative;
  float: left;
  margin-top: 5px;

  label {
    margin-top: 0.5rem;
    color: rgb(105, 105, 105);
  }
  button {
    width: 27%;
    height: 25px;
    background-color: ${cor_base_1};
    color: white;
    border: none;
    border-radius: 5px;
    margin-left: 10px;
    font-family: "Akrobat", sans-serif;
    cursor: pointer;
  }
`;
export const DadosContaContentCadastroPJContentTextFieldInputText = styled.input`
  width: 70%;
  height: 30px;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.212);
  border-radius: 4px;
  padding-left: 0.5rem;
`;
export const DadosContaContentCadastroPJContentTextFieldCol2CEP = styled.div`
  width: 85%;
  height: 30px;
  // background-color: rgba(0, 0, 255, 0.199);
  position: relative;
  float: left;
  margin-top: -1.5rem;
  display: flex;
  justify-content: space-between;

  label {
    color: rgb(105, 105, 105);
  }
  button {
    margin-top: 0.5rem;
    width: 200px;
    height: 100%;
    background-color: ${cor_base_1};
    color: white;
    border: none;
    border-radius: 5px;
    margin-left: 10px;
    font-size: 100%;
    font-family: "Akrobat", sans-serif;
    cursor: pointer;
  }
`;
export const DadosContaContentCadastroPJContentTextFieldCol2 = styled.div`
  width: 35%;
  height: 55px;
  // background-color: rgba(0, 0, 255, 0.199);
  position: relative;
  float: left;
  margin-top: 10px;

  label {
    color: rgb(105, 105, 105);
  }
  button {
    width: 200px;
    height: 25px;
    background-color: ${cor_base_1};
    color: white;
    border: none;
    border-radius: 5px;
    margin-left: 10px;
    font-family: "Akrobat", sans-serif;
    cursor: pointer;
  }
`;
export const DadosContaContentCadastroPJContentTextFieldCol2InputText = styled.input`
  width: 90%;
  height: 20px;
  padding-left: 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.212);
  border-radius: 4px;
  margin-top: 0.5rem;
`;
export const DadosContaContentCadastroPJContentTextFieldInputCheckBox = styled.input`
  // background-color: blueviolet;
  border-radius: 10px;
  margin-left: 1rem;
  padding-left: 1rem;
  position: relative;
  `;
export const DadosContaContentCadastroPJContentTextFieldInputCheckBoxLabel = styled.label`
  margin-left: 0.5rem;
  position: relative;
`;
export const DadosContaContentDadosContato = styled.div`
  position: relative;
  float: left;
  width: 50%;
  height: 90%;
  // background-color: rgba(0, 0, 255, 0.08);
  padding: 0px 0px 0px 0px;
  font-family: "Akrobat", sans-serif;
  top: 10px;
`;
export const DadosContaContentDadosContatoHeader = styled.div`
  width: 90%;
  position: relative;
  margin: 5px 5px 5px 5px;
  // margin-left: auto;
`;
export const DadosContaContentDadosContatoHeaderTitle = styled.div`
  font-size: 120%;
  color: black;
  font-family: "Akrobat", sans-serif;
`;
export const DadosContaContentDadosContatoHeaderSubtitle = styled.div`
  width: 100%;
  font-size: 110%;
  color: ${cor_base_1};
  font-family: "Akrobat", sans-serif;
  position: relative;
  float: left;
`;
export const DadosContaContentDadosContatoHeaderSubtitleSublinhado = styled.div`
  width: 60%;
  height: 1px;
  position: relative;
  top: -10px;
  background-color: ${cor_base_1};
`;
export const DadosContaContentDadosContatoContent = styled.div`
  width: 90%;
  height: 87%;
  position: relative;
  margin: 17px 5px 5px 5px;
  // background-color: rgba(210, 105, 30, 0.212);
  margin-right: auto;
`;
export const DadosContaContentDadosContatoContentTextField = styled.div`
  width: 100%;
  // background-color: rgba(0, 0, 255, 0.199);
  position: relative;
  float: left;
  margin-top: 10px;
  label {
    margin-top: -1rem;
    color: rgb(105, 105, 105);
  }
  button {
    width: 200px;
    height: 25px;
    background-color: ${cor_base_1};
    color: white;
    border: none;
    border-radius: 5px;
    margin-left: 10px;
    font-family: "Akrobat", sans-serif;
    cursor: pointer;
  }
`;
export const DadosContaContentDadosContatoContentTextFieldSelect = styled.input`
  width: 70%;
  height: 20px;
  padding-left: 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.212);
  border-radius: 4px;
  font-family: "Akrobat", sans-serif;

  option {
    font-family: "Akrobat", sans-serif;
    border: none;
  }
`;
export const ContentDadosFooter = styled.div`
  width: 100%;
  height: 85px;
  position: relative;
  float: left;
  // background-color: rgba(255, 0, 0, 0.562);
  top: 2%;
`;
export const ContentDadosFooterLinha = styled.div`
  width: 98%;
  height: 3px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  top: 40%;
  background-color: #e2e2e2;
`;
export const ContentDadosFooterButton = styled.div`
  width: 217px;
  height: 49px;
  position: relative;
  float: right;
  right: 5%;
  top: 10%;
  background-color: white;
  button {
    width: 207px;
    height: 49px;
    background-color: ${cor_base_1};
    position: relative;
    margin-left: auto;
    margin-right: auto;
    left: 2.5%;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 18px;
    font-family: "Akrobat";
    letter-spacing: 00.08rem;
  }
`;
