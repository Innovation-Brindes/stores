import styled from "styled-components";
import { cor_base_1 } from "../../services/cores";

export const ContainerLogin = styled.div`
  width: 100%;
  height: 1000px;
`;
export const ContainerLoginContent = styled.div`
  width: 100%;
  height: 100%;
`;
export const ContainerLoginContentHeader = styled.div`
  width: 100%;
  height: 119px;
  background-color: #efeff0;
  text-align: center;
  font-size: 180%;
  font-family: "Akrobat";
  font-weight: 400;

  p {
    position: relative;
    top: 30%;
    color: #353535;
  }
`;
export const ContainerLoginContentHeaderForm = styled.div`
  width: 1100px;
  height: 630px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-top: 44px;
  display: flex;
  justify-content: space-between;
`;
export const ContainerLoginContentHeaderFormCardLogin = styled.div`
  width: 525px;
  height: 100%;
  border-radius: 5px;
  box-shadow: 2px 2px 20px 2px rgb(233, 233, 233);
`;
export const ContainerLoginContentHeaderFormCardLoginLoading = styled.div`
  width: 525px;
  height: 100%;
  position: absolute;
  z-index: 999;
  display: block;
  background-color: rgba(255, 255, 255, 0.26);
`;
export const ContainerLoginContentHeaderFormCardLoginLoadingImg = styled.div`
  width: 135px;
  height: 140px;
  top: 20%;
  position: relative;
  margin-left: auto;
  margin-right: auto;
`;
export const ContainerLoginContentHeaderFormCardLoginContent = styled.div`
  width: 80%;
  height: 100%;
  position: relative;
  margin-left: auto;
  margin-right: auto;
`;
export const ContainerLoginContentHeaderFormCardLoginContentHeader = styled.div`
  width: 100%;
  height: 112px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  top: 10px;
  // background-color: darkgoldenrod;

  h1 {
    font-size: 35px;
    font-family: "Akrobat";
    color: ${cor_base_1};
    text-align: left;
  }

  p {
    margin-top: -0.8rem;
    font-size: 17px;
    text-align: left;
    color: #606060;
  }
`;
export const ContainerLoginContentHeaderFormCardLoginContentBody = styled.div`
  width: 100%;
  height: 70%;
  position: relative;
  // background-color: darkgoldenrod;
  button {
    width: 190px;
    height: 47px;
    position: relative;
    float: right;
    border: none;
    border-radius: 5px;
    background-color: ${cor_base_1};
    color: white;
    font-size: 100%;
    letter-spacing: 0.08rem;
    font-weight: 400;
    margin-top: 1.5rem;
  }

  input {
    padding-left: 1rem;
    width: 100%;
    height: 57px;
    position: relative;
    margin-top: 8px;
    border: none;

    ::placeholder {
      position: relative;
      color: gray;
    }
  }

  input[type="text"],
  input[type="password"],
  textarea,
  select {
    outline: none;
  }

  input:focus {
    border: none;
    box-shadow: none;
    outline-offset: 0px;
    outline: none;
  }
  input:focus::-webkit-input-placeholder {
    opacity: 0;
  }

  input::-webkit-input-placeholder {
  }
`;
export const ContainerLoginContentHeaderFormCardLoginContentBodyEsqPwd = styled.label`
  width: 100%;
  height: 20px;
  position: relative;
  top: -15px;
  p {
    height: 20px;
    float: right;
    color: black;
    text-decoration: underline black;
    font-size: 15px;
    font-family: "Akrobat";
    cursor: pointer;
  }
`;
export const ContainerLoginContentHeaderFormCardLoginContentBodySenhaIncorreta = styled.p`
  width: 200px;
  height: 10px;
  font-size: 14px;
  font-family: "Akrobat";
  display: block;
  position: relative;
  top: -20px;
  color: red;
  // background-color: violet;
`;
export const ContainerLoginContentHeaderFormCardLoginContentBodyViewPwd = styled.div`
  width: 100%;
  height: 40px;
  position: relative;
  float: right;
  margin-top: -1rem;
  p {
    position: relative;
    float: right;
    font-size: 15px;
    font-family: "Akrobat";
    cursor: pointer;
  }
  // background-color: darkmagenta;
`;
export const ContainerLoginContentHeaderFormCardLoginContentBodyViewPwdIcon = styled.div`
  position: relative;
  float: right;
  margin-right: 10px;
  top: 3px;
  cursor: pointer;
`;
export const ContainerLoginContentHeaderFormCardCadastro = styled.div`
  width: 525px;
  height: 100%;
  border-radius: 5px;
  box-shadow: 2px 2px 20px 2px rgb(233, 233, 233);
`;
export const ContainerLoginContentHeaderFormCardCadastroLoading = styled.div`
  width: 525px;
  height: 100%;
  position: absolute;
  z-index: 999;
  display: block;
  background-color: rgba(255, 255, 255, 0.26);
`;
export const ContainerLoginContentHeaderFormCardCadastroLoadingImg = styled.div`
  width: 135px;
  height: 140px;
  top: 20%;
  position: relative;
  margin-left: auto;
  margin-right: auto;
`;
export const ContainerLoginContentHeaderFormCardCadastroContentBodyDescricao = styled.div`
  width: 100%;
  height: 40px;
  position: relative;
  top: 5px;
  // background-color: darkmagenta;
  p {
    height: 12px;
    position: relative;
    font-size: 12px;
    font-family: "Akrobat";
  }
`;
