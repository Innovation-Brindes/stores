import styled from "styled-components";
import { cor_base_1, cor_base_2 } from "../../services/cores";

export const SucessoContent = styled.div`
  width: 100%;
`;
export const SucessoContentImagemSucesso = styled.div`
  width: 100%;
  height: 363px;
  position: relative;
  background-color: #8EC53F;
  display: flex;
  justify-content: center;
  img {
    width: 642px;
    height: 363px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 205px;
    position: relative;
    background-color: #8EC53F;
    display: flex;
    justify-content: center;
    img {
      width: 372px;
      height: 203px;
      position: relative;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;
export const SucessoContentConcluir = styled.div`
  width: 100%;
  height: 130px;
  position: relative;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100px;
    position: relative;
    background-color: #f9f9f9;
    display: flex;
    justify-content: center;
  }
`;
export const SucessoContentConcluirContent = styled.div`
  width: 630px;
  position: relative;
  top: 15%;
  display: flex;
  justify-content: center;

  button {
    width: 218px;
    height: 50px;
    position: relative;
    float: left;
    border-radius: 5px;
    font-size: 120%;
    font-family: "Akrobat";
    border: none;
    text-align: center;
    background-color: ${cor_base_2};
    color: white;
    cursor: pointer;
  }

  p {
    position: relative;
    float: left;
    font-size: 26px;
    margin-left: 8px;
    top: 3px;
    font-family: "Akrobat";
    text-align: center;
    color: #4c4b4d;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    position: relative;
    top: 15%;
    display: flex;
    justify-content: center;

    button {
      width: 218px;
      height: 50px;
      position: relative;
      float: left;
      border-radius: 5px;
      font-size: 120%;
      font-family: "Akrobat";
      border: none;
      text-align: center;
      background-color: ${cor_base_2};
      color: white;
      cursor: pointer;
    }

    p {
      position: relative;
      float: left;
      font-size: 16px;
      margin-left: 8px;
      top: 3px;
      font-family: "Akrobat";
      text-align: center;
      color: #4c4b4d;
    }
  }
`;
export const SucessoContentConcluirBtn = styled.div`
  width: 100%;
  height: 100px;
  position: relative;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100px;
    position: relative;
    background-color: #f9f9f9;
    display: flex;
    justify-content: center;
  }
`;
export const SucessoContentConcluirBtnContent = styled.div`
  width: 530px;
  position: relative;
  top: 0%;
  display: flex;
  justify-content: center;

  button {
    width: 218px;
    height: 50px;
    position: relative;
    float: left;
    border-radius: 5px;
    font-size: 120%;
    letter-spacing: 0.08rem;
    font-family: "Akrobat";
    border: none;
    text-align: center;
    background-color: ${cor_base_2};
    color: white;
    cursor: pointer;
  }

  p {
    position: relative;
    float: left;
    font-size: 26px;
    margin-left: 8px;
    top: 3px;
    font-family: "Akrobat";
    text-align: center;
    color: #4c4b4d;
  }
  @media screen and (max-width: 768px) {
    width: 530px;
    position: relative;
    top: 0%;
    display: flex;
    justify-content: center;

    button {
      width: 218px;
      height: 50px;
      position: relative;
      float: left;
      border-radius: 5px;
      font-size: 120%;
      letter-spacing: 0.08rem;
      font-family: "Akrobat";
      border: none;
      text-align: center;
      background-color: ${cor_base_2};
      color: white;
      cursor: pointer;
    }

    p {
      position: relative;
      float: left;
      font-size: 26px;
      margin-left: 8px;
      top: 3px;
      font-family: "Akrobat";
      text-align: center;
      color: #4c4b4d;
    }
  }
`;
