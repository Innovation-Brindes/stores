import { Box, Button, Flex, FlexProps } from "@chakra-ui/react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { cor_base_1, cor_base_2 } from "../../services/cores";

export const PromptLoading = styled.div`
  width: 100%;
  height: 500vw;
  position: absolute;
  top: 0px;
  background-color: rgba(0, 0, 0, 0.212);
  z-index: 999999;
  display: none;

  img {
    position: relative;
    left: 45%;
  }
`;
export const CarrinhoContainer = styled(Box)`
  min-height: calc(100vh - 145px);
  @media screen and (max-width: 768px) {
    min-height: 80vh;
  }
`;
export const CarrinhoContent = styled.div`
  width: 100%;
  // height: 0;
  // background-color: burlywood;
`;
export const CarrinhoContentResumoPedido = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    z-index: revert;
  }

  // height: 30vw;
  // background-color: cadetblue;
`;
export const CarrinhoContentResumoPedidoTitle = styled.div`
  width: 100%;
  height: 60px;
  background-color: #efeff0;
  position: relative;

  p {
    color: black;
    font-size: 28px;
    font-family: "Akrobat";
    font-weight: 300;
    text-align: center;
    position: relative;
    top: 15%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 60px;
    background-color: #efeff0;
    position: relative;
    z-index: revert;

    p {
      color: black;
      font-size: 28px;
      font-family: "Akrobat";
      font-weight: 300;
      text-align: center;
      position: relative;
      top: 10%;
    }
  }
`;
export const CarrinhoContentResumoPedidoListaProdutos = styled.div`
  width: 872px;
  // height: 800px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;

  height: auto;
  background-color: #f2f2f2;
  @media screen and (max-width: 768px) {
    width: 390px;
    // height: 800px;
    top: 15px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    z-index: revert;
    background-color: #f2f2f2;
  }
`;
export const CarrinhoContentResumoPedidoListaProdutosProduto = styled.div`
  width: 872px;
  min-height: 205px;
  margin-bottom: 10px;
  position: relative;
  float: left;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  border-radius: 5px;
  background-color: white;
  box-shadow: 5px 5px 8px 5px #dbdbdb;
  // background-color: rgb(255, 0, 0);
  // box-shadow: 0.3px 0.3px 20px 0.3px rgb(228, 228, 228);
  z-index: 997;
  @media screen and (max-width: 768px) {
    width: 390px;
    height: 350px;
    margin-bottom: 25px;
    position: relative;
    float: left;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5px;
    border-radius: 5px;
    background-color: white;
    box-shadow: 5px 5px 8px 5px #dbdbdb;
    // background-color: rgb(255, 0, 0);
    // box-shadow: 0.3px 0.3px 20px 0.3px rgb(228, 228, 228);
    z-index: revert;
  }
`;
export const CarrinhoContentResumoPedidoListaProdutosProdutoTitleText = styled.div`
  width: 100%;
  height: 30px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  top: 0vw;
  text-align: center;
  font-family: "Gisha Bold";
  color: #424242;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 30px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    top: 0vw;
    text-align: center;
    font-family: "Gisha Bold";
    color: #424242;
    display: flex;
    justify-content: space-between;
    img {
      width: 48px;
      height: 45px;
      position: relative;
      cursor: pointer;
      top: 207px;
      right: 290px;
      z-index: revert;
    }
  }
`;
export const CarrinhoContentResumoPedidoListaProdutosProdutoTitleTextNomeProd = styled.div`
  width: 40%;
  height: 100%;
  position: relative;
  left: 27px;
  // background-color: #F8AC00;
  a {
    text-decoration: none;
    color: ${cor_base_2};
    &:hover {
      color: #ff6400;
      opacity: 0.8;
    }
  }
  p {
    width: 100%;
    height: 100%;
    font-size: 14px;
    line-height: 100%;
    position: relative;
    top: 10px;
    font-family: "Gisha Bold";
    text-align: left;
    background-color: white;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    position: relative;
    left: 27px;
    text-decoration: none;
    // background-color: #F8AC00;
    a {
      text-decoration: none;
      color: ${cor_base_2};
      &:hover {
        color: #ff6400;
        opacity: 0.8;
      }
    }
    p {
      width: 100%;
      height: 100%;
      font-size: 14px;
      line-height: 100%;
      position: relative;
      top: 10px;
      font-family: "Gisha Bold";
      text-align: center;
      background-color: white;
    }
  }
`;
export const CarrinhoContentResumoPedidoListaProdutosProdutoContent = styled.div`
  width: 100%;
  height: 157px;
  // background-color: rgba(65, 105, 225, 0.315);
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: start;
  @media screen and (max-width: 768px) {
    width: 390px;
    height: 100%;
    // background-color: rgba(65, 105, 225, 0.315);
    margin-left: -5px;
    margin-right: auto;
    display: block;
    justify-content: auto;
  }
`;
export const CarrinhoContentResumoPedidoListaProdutosProdutoContentItem = styled.div`
  width: 225px;
  height: 157px;
  margin-left: 0px;
  // background-color: rgba(250, 128, 114, 0.479);
  @media screen and (max-width: 768px) {
    width: 160px;
    height: 50px;
    margin-left: 0%;
    position: relative;
    float: left;
    z-index: revert;
    // background-color: rgba(250, 128, 114, 0.479);
  }
`;
export const CarrinhoContentResumoPedidoListaProdutosProdutoContentItemCard = styled.div`
  width: 126px;
  height: 157px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  top: 8px;
  border: 1px solid rgb(201, 201, 201);
  // border-radius: 15px;

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: scale-down;
    background-color: white;
    // border-radius: 15px;
  }
  @media screen and (max-width: 768px) {
    width: 126px;
    height: 157px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid rgb(201, 201, 201);
    // border-radius: 15px;

    img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: scale-down;
      background-color: white;
      // border-radius: 15px;
    }
  }
`;
export const CarrinhoContentResumoPedidoListaProdutosProdutoContentItemDadosProduto = styled.div`
  width: 100%;
  height: 180px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  top: 23px;
  // background-color: rosybrown;

  p {
    font-size: 15px;
    font-family: "Akrobat";
    height: 10px;
    color: #424242;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 157px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    top: 5px;
    // background-color: rosybrown;

    p {
      font-size: 14px;
      font-family: "Akrobat";
      height: 10px;
      color: #424242;
    }
  }
`;
export const CarrinhoContentResumoPedidoNenhumItem = styled.div`
  width: 100%;
  height: calc(100vh - 205px);
  position: relative;
  float: left;
`;
export const CarrinhoContentResumoPedidoNenhumItemContent = styled.div`
  width: 500px;

  height: 300px;
  position: relative;
  top: 20%;
  margin-left: auto;
  margin-right: auto;
  // background-color: #d3d3d3;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 300px;
    position: relative;
    top: 20%;
    margin-left: auto;
    margin-right: auto;
    // background-color: #d3d3d3;
  }
`;
export const CarrinhoContentResumoPedidoNenhumItemContentHeader = styled.div`
  width: 100%;
  height: 60px;
  position: relative;
  display: flex;
  justify-content: center;

  img {
    width: 51px;
    height: 51px;
  }
`;
export const CarrinhoContentResumoPedidoNenhumItemContentTitle = styled.div`
  width: 100%;
  height: 26px;
  display: flex;
  justify-content: center;
  h1 {
    font-size: 23px;
    margin-left: 7px;
    font-family: "Gisha Bold";
  }
`;
export const CarrinhoContentResumoPedidoNenhumItemContentSubtitle = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;

  p {
    font-size: 18px;
    font-family: "Gisha";
  }
`;
export const CarrinhoContentResumoPedidoNenhumItemContentControl = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;

  button {
    width: 217px;
    height: 50px;
    position: relative;
    border-radius: 5px;
    border: none;
    background-color: ${cor_base_2};
    font-size: 18px;
    color: white;
    font-family: "Akrobat";
  }
`;
export const CarrinhoContentResumoPedidoMaisProdutos = styled.div`
  width: 100%;
  height: 150px;
  margin-top: 70px;
  @media screen and (max-width: 768px) {
    margin-top: 50px;
    width: 100%;
    height: 150px;
  }
`;
export const MaisProdutosLine = styled.div`
  width: 100%;
  height: 3px;
  background-color: #efeff0;
`;
export const MaisProdutosOpcoes = styled.div`
  width: 270px;
  height: 115px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  top: -25px;
  // background-color: rosybrown;

  button {
    width: 100%;
    height: 50px;
    background-color: #8ec505;
    border-radius: 5px;
    color: white;
    font-size: 22px;
    font-family: "Akrobat";
    border: none;
  }
  @media screen and (max-width: 768px) {
    width: 270px;
    height: 115px;
    position: relative;

    position: relative;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    top: -26px;
    // background-color: rosybrown;

    button {
      width: 100%;
      height: 50px;
      background-color: #8ec505;
      border-radius: 5px;
      color: white;
      font-size: 22px;
      font-family: "Akrobat";
      border: none;
    }
  }
`;
export const MaisProdutosOpcoesAdd = styled.div`
  width: 100%;
  height: 25px;
  position: relative;
  display: flex;
  justify-content: center;

  .btn {
    margin-top: 0.1rem;
    /* width: 25px;
    height: 25px;
    position: relative;
    border: 1px solid rgb(62, 62, 62);
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-right: 5px; */
    /* p {
      position: relative;
      left: -5.5px;
      top: 4px;
      font-size: 25px;
      font-family: "Akrobat Semibold";
      text-align: center;
    } */
  }

  p {
    margin-left: -0.5rem;
    font-size: 18px;
    font-family: "Akrobat";
    margin-top: 10px;
    cursor: pointer;
    strong {
      font-family: "Akrobat Extrabold";
    }
  }
`;
export const ContainerGridFrete = styled.div`
  width: 872px;
  height: auto;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
  top: 0%;
  margin-bottom: 15px;
  @media screen and (max-width: 768px) {
    width: 100%;
    min-height: 80px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    top: 0%;
  }
`;
export const ContainerGridFreteHeader = styled.div`
  width: 100%;
  height: 60px;
  // background-color: #f05423;
  @media screen and (max-width: 768px) {
    width: 360px;
    height: 60px;
    position: relative;
    top: -25px;
    margin-left: auto;
    margin-right: auto;
  }
`;
export const ContainerGridFreteHeaderInput = styled.div`
  width: 450px;
  height: 100%;
  position: relative;
  left: 0px;
  z-index: 997;
  // background-color: chartreuse;

  label {
    font-size: 16px;
    letter-spacing: 0.05rem;
    top: 10px;
    font-family: "Akrobat";
    position: relative;
    float: left;
    margin-bottom: 5px;
  }

  input {
    width: 140px;
    height: 45px;
    margin-left: 9px;
    border: 0.6px solid rgb(207, 207, 207);
    position: relative;
    font-size: 18px;
    font-family: "Akrobat";
    letter-spacing: 0.05rem;
    padding-left: 12px;
    float: left;
    outline: none;
  }

  input[type="text"],
  input[type="password"],
  textarea,
  select {
    outline: none;
  }

  button {
    width: 45px;
    height: 45px;
    margin-left: 14px;
    border: none;
    font-size: 16px;
    font-family: "Akrobat";
    position: relative;
    float: left;
    top: 0px;
    background-color: ${cor_base_1};
    color: white;
  }

  img {
    width: 45px;
    height: 45px;
    position: relative;
    float: left;
    margin-left: 5px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    position: relative;
    left: 0px;
    z-index: 997;
    // background-color: chartreuse;

    label {
      width: 100%;
      font-size: 19px;
      letter-spacing: 0.05rem;
      top: 5px;
      margin-left: 9px;
      font-family: "Akrobat";
      position: relative;
    }

    input {
      width: 250px;
      height: 45px;
      margin-left: 8.5px;
      border: 0.6px solid rgb(207, 207, 207);
      position: relative;
      font-size: 18px;
      font-family: "Akrobat";
      letter-spacing: 0.05rem;
      padding-left: 12px;
      float: left;
    }

    input[type="text"],
    input[type="password"],
    textarea,
    select {
      outline: none;
    }

    button {
      width: 45px;
      height: 45px;
      margin-left: 12px;
      border: none;
      font-size: 16px;
      font-family: "Akrobat";
      position: relative;
      float: left;
      top: 0px;
      background-color: ${cor_base_1};
      color: white;
    }

    img {
      width: 45px;
      height: 45px;
      position: relative;
      float: left;
      margin-left: -8px;
    }
  }
`;
export const ContainerGridFreteContent = styled.div`
  width: 850px;
  min-height: 200px;
  height: auto;
  position: relative;
  // background-color: burlywood;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 370px;
    position: relative;
    display: none;
  }
`;
export const BoxGridContainer = styled(Box)`
  width: 872px;
  padding: 40px;
  padding-top: 6rem;
  margin-top: 4;
  @media screen and (max-width: 768px) {
    width: 390px;
    padding: 0px;
    margin-left: auto;
    margin-right: auto;
  }
`;
export const ContainerGridFreteContentTable = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  left: -28px;
  // background-color: cyan;
  @media screen and (max-width: 768px) {
    width: 80%;
    height: 100%;
    position: relative;

    left: 0px;

    table {
      width: 400px;
    }
  }
`;
export const ContainerGridFreteContentTableBoxAlert = styled.div`
  width: 100%;
  height: 25%;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  top: 15px;
  left: -0.8rem;
  // border: 2px solid #F8AC00;
  img {
    position: relative;
    float: left;
    left: 5%;
  }

  h6 {
    position: relative;
    float: left;
    top: 35px;
    font-weight: 400;
    font-family: "Akrobat Bold";
    color: gray;
    font-size: 14px;
  }

  p {
    position: relative;
    float: left;
    left: 6%;
    width: 80%;
    color: rgb(95, 95, 95);
    font-size: 11px;
    letter-spacing: 0.02rem;
    font-family: "Akrobat";
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 25%;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    display: none;
    top: 20px;
    // border: 2px solid #F8AC00;

    img {
      position: relative;
      float: left;
      top: 5px;
      left: 2%;
    }

    h6 {
      position: relative;
      float: left;
      left: 5%;
      top: 10px;
      font-weight: 400;
      font-family: "Akrobat";
      color: black;
      font-size: 22px;
    }

    p {
      position: relative;
      float: left;
      left: 10%;
      width: 80%;
      color: rgb(95, 95, 95);
      font-size: 14px;
      letter-spacing: 0.02rem;
      font-family: "Akrobat";
    }
  }
`;
export const ContainerGridFreteContentTableBoxAlertHeader = styled.tr`
  width: 100%;
  th {
    font-size: 19px;
    font-weight: 400;
    color: rgb(60, 60, 60);
    font-family: "Akrobat";
    text-align: center;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    th {
      font-size: 19px;
      font-weight: 400;
      color: rgb(60, 60, 60);
      font-family: "Akrobat";
      text-align: center;
    }
  }
`;
export const ContainerGridFreteContentTableBoxAlertLin1 = styled.tr`
  // background-color: #ededed;
  position: relative;
  margin-top: 300px;
  height: 30px;
  td {
    width: 80px;
    // background-color: #ededed;
    height: 30px;

    p {
      width: 142px;
      height: 30px;
      position: relative;
      top: 10px;
      text-align: center;
      font-size: 16px;
      font-family: "Akrobat";
      background-color: #ededed;

      strong {
        position: relative;
        top: 0px;
      }

      input {
        width: 20px;
        position: relative;
        height: 20px;
        top: 5px;
        right: 20px;
        cursor: pointer;
      }

      input[type="radio"]:checked:before {
        content: "";
        display: block;
        position: relative;
        width: 20px;
        height: 20px;
        border-radius: 15px;
        background: url("../images/ok.png");
        background-color: white;
        background-size: 100% 100%;
      }
    }
  }
  @media screen and (max-width: 768px) {
    // background-color: #ededed;
    position: relative;
    height: 30px;

    td {
      width: 80px;
      // background-color: #ededed;
      height: 30px;

      p {
        width: 142px;
        height: 30px;
        position: relative;
        top: 10px;
        text-align: center;
        font-size: 16px;
        font-family: "Akrobat";
        background-color: #ededed;

        strong {
          position: relative;
          top: 0px;
        }

        input {
          width: 20px;
          position: relative;
          height: 20px;
          top: 5px;
          right: 20px;
          cursor: pointer;
        }

        input[type="radio"]:checked:before {
          content: "";
          display: block;
          position: relative;
          width: 20px;
          height: 20px;
          border-radius: 15px;
          background: url("../../images/ok.png");
          background-color: white;
          background-size: 100% 100%;
        }
      }
    }
  }
`;
export const ContainerGridFreteContentTableBoxAlertLin2 = styled.tr`
  // background-color: #f7f7f7;
  position: relative;
  padding-top: 10px;
  td {
    width: 80px;
    p {
      width: 142px;
      height: 30px;
      position: relative;
      top: 10px;
      text-align: center;
      font-size: 16px;
      font-family: "Akrobat";
      background-color: #f7f7f7;

      strong {
        position: relative;
        top: 0px;
      }
      input {
        width: 20px;
        position: relative;
        height: 20px;
        top: 5px;
        right: 20px;
        cursor: pointer;
      }
      input[type="radio"]:checked:before {
        content: "";
        display: block;
        position: relative;
        width: 20px;
        height: 20px;
        border-radius: 15px;
        background: url("../images/ok.png");
        background-color: white;
        background-size: 100% 100%;
      }
    }
  }
  @media screen and (max-width: 768px) {
    // background-color: #f7f7f7;
    position: relative;
    padding-top: 10px;
    td {
      width: 80px;
      p {
        width: 142px;
        height: 30px;
        position: relative;
        top: 10px;
        text-align: center;
        font-size: 16px;
        font-family: "Akrobat";
        background-color: #f7f7f7;

        strong {
          position: relative;
          top: 0px;
        }
        input {
          width: 20px;
          position: relative;
          height: 20px;
          top: 5px;
          right: 20px;
          cursor: pointer;
        }
        input[type="radio"]:checked:before {
          content: "";
          display: block;
          position: relative;
          width: 20px;
          height: 20px;
          border-radius: 15px;
          background: url("../../images/ok.png");
          background-color: white;
          background-size: 100% 100%;
        }
      }
    }
  }
`;

export const ContainerGridFreteContentTableBoxAlertLin3 = styled.tr`
  // background-color: #ededed;
  position: relative;
  padding-top: 10px;
  td {
    width: 80px;
    p {
      width: 142px;
      height: 30px;
      position: relative;
      top: 10px;
      text-align: center;
      font-size: 16px;
      font-family: "Akrobat";
      background-color: #ededed;
      display: flex;
      justify-content: center;
      align-items: center;
      strong {
        position: relative;
        top: 0px;
      }
      input {
        width: 20px;
        position: relative;
        height: 20px;
        top: 0px;
        right: 18px;
        cursor: pointer;
      }
      input[type="radio"]:checked:before {
        content: "";
        display: block;
        position: relative;
        width: 20px;
        height: 20px;
        border-radius: 15px;
        background: url("../images/ok.png");
        background-color: white;
        background-size: 100% 100%;
      }
    }
  }
  @media screen and (max-width: 768px) {
    // background-color: #ededed;
    position: relative;
    padding-top: 10px;

    td {
      width: 80px;
      p {
        width: 142px;
        height: 30px;
        position: relative;
        top: 10px;
        text-align: center;
        font-size: 16px;
        font-family: "Akrobat";
        background-color: #ededed;

        strong {
          position: relative;
          top: 0px;
        }
        input {
          width: 20px;
          position: relative;
          height: 20px;
          top: 5px;
          right: 20px;
          cursor: pointer;
        }
        input[type="radio"]:checked:before {
          content: "";
          display: block;
          position: relative;
          width: 20px;
          height: 20px;
          border-radius: 15px;
          background: url("../../images/ok.png");
          background-color: white;
          background-size: 100% 100%;
        }
      }
    }
  }
`;
export const ContainerGridFreteContentTableBoxAlertLin4 = styled.tr`
  // background-color: #f7f7f7;
  position: relative;
  padding-top: 10px;
  td {
    p {
      width: 142px;
      height: 30px;
      position: relative;
      top: 10px;
      text-align: center;
      font-size: 16px;
      font-family: "Akrobat";
      background-color: #ededed;
      display: flex;
      justify-content: center;
      align-items: center;

      strong {
        position: relative;
        top: 0px;
      }
      input {
        width: 20px;
        position: relative;
        height: 20px;
        top: 0px;
        right: 18px;
        cursor: pointer;
        z-index: 99;
      }
      input[type="radio"]:checked:before {
        content: "";
        display: block;
        position: relative;
        width: 20px;
        height: 20px;
        border-radius: 15px;
        background: url("../images/ok.png");
        background-color: white;
        background-size: 100% 100%;
      }
    }
  }
  @media screen and (max-width: 768px) {
    // background-color: #f7f7f7;
    position: relative;
    padding-top: 10px;
    td {
      p {
        width: 142px;
        height: 30px;
        position: relative;
        top: 10px;
        text-align: center;
        font-size: 16px;
        font-family: "Akrobat";
        background-color: #f7f7f7;

        strong {
          position: relative;
          top: 0px;
        }
        input {
          width: 20px;
          position: relative;
          height: 20px;
          top: 5px;
          right: 20px;
          cursor: pointer;
        }
        input[type="radio"]:checked:before {
          content: "";
          display: block;
          position: relative;
          width: 20px;
          height: 20px;
          border-radius: 15px;
          background: url("../../images/ok.png");
          background-color: white;
          background-size: 100% 100%;
        }
      }
    }
  }
`;
export const ContainerGridFreteContentResumoCarrinho = styled.div`
  width: 100%;
  height: 217px;
  position: relative;
  float: left;
  background-color: #efeff0;
  @media screen and (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;
export const ContainerGridFreteContentResumoCarrinhoContent = styled.div`
  width: 1150px;
  height: 100%;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  z-index: 997;
  font-family: "Akrobat";
  // background-color: rgba(250, 128, 114, 0.397);
  @media screen and (max-width: 768px) {
    width: 72%;
    //width: 100%;
    height: 100%;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    z-index: 997;
    font-family: "Akrobat";
    // background-color: rgba(250, 128, 114, 0.397);
  }
`;
export const ContainerGridFreteContentResumoCarrinhoContentResumo = styled.div`
  width: 320px;
  height: 120px;
  position: relative;
  float: right;
  font-family: "Akrobat";
  // background-color: rgba(46, 139, 86, 0.432);

  h1 {
    font-size: 30px;
    font-family: "Akrobat";
    font-weight: 400;
    position: relative;
    top: 14%;
    color: #4c4b4d;
    letter-spacing: 0.04rem;
  }

  p {
    height: 10px;
    font-size: 16px;
    font-family: "Akrobat";
    position: relative;
    top: 28%;
    display: flex;
    color: #4c4b4d;
    justify-content: space-between;

    strong {
      font-size: 19px;
    }
  }
  @media screen and (max-width: 768px) {
    width: 320px;
    height: 120px;
    position: relative;
    float: right;
    font-family: "Akrobat";
    // background-color: rgba(46, 139, 86, 0.432);

    h1 {
      font-size: 30px;
      font-family: "Akrobat";
      font-weight: 400;
      position: relative;
      top: 14%;
      color: #4c4b4d;
      letter-spacing: 0.04rem;
    }

    p {
      height: 10px;
      font-size: 16px;
      font-family: "Akrobat";
      position: relative;
      top: 28%;
      display: flex;
      color: #4c4b4d;
      justify-content: space-between;
      margin-right: -1.2rem;

      strong {
        font-size: 19px;
      }
    }
  }
`;
export const ContainerGridFreteContentResumoCarrinhoValorTotal = styled.div`
  width: 100%;
  height: 50px;
  position: relative;
  float: left;
  top: -50px;
  background-color: #f7f7f7;
`;

export const MotionFlex = motion(Flex);
export const ContainerGridFreteContentResumoCarrinhoContentCarrinhoFinalizacao = styled(
  MotionFlex
)`
  width: 100%;
  height: 520px;
  top: 15px;
  z-index: 997;
  margin-bottom: 10px;
  position: relative;
  float: left;
  @media screen and (max-width: 768px) {
    height: 500px;
    margin-top: 215px;
    margin-bottom: 90px;
  }
`;
export const ContainerFlexGerarOrcamentoVoltar = styled(MotionFlex)`
  justify-content: space-between;
  width: 872px;
  margin-left: -12px;

  height: 40px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const ContainerFlexGerarOrcamentoVoltarMobile = styled(MotionFlex)`
  width: 390px;
  margin-top: 25px;
  justify-content: space-between;
  height: 20px;
  @media screen and (min-width: 769px) {
    display: none;
  }
`;
export const ContainerGridFreteContentResumoCarrinhoContentCarrinhoFinalizacaoContent = styled(
  Flex
)`
  width: 872px;
  height: 430px;
  position: relative;
  // background-color: burlywood;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 768px) {
    width: 390px;
    flex-direction: column-reverse;
    height: 100%;
    position: relative;
    // background-color: burlywood;
    margin-left: auto;
    margin-right: auto;
  }
`;
export const ContainerGridFreteContentResumoCarrinhoContentCarrinhoFinalizacaoContentForm = styled.div`
  width: 500px;
  height: 430px;
  // height: 710px;
  // height: 650px;
  position: relative;
  float: left;
  left: 0px;
  border-radius: 5px;
  box-shadow: 2px 2px 20px 2px rgb(233, 233, 233);
  background-color: #ffff;

  p {
    position: relative;
    top: 5px;
    font-family: "Gisha";
  }
  @media screen and (max-width: 768px) {
    // width: 815px;

    width: 100%;

    height: 430px;
    // height: 710px;
    // height: 650px;

    position: relative;
    float: left;
    left: 0px;
    border-radius: 5px;
    box-shadow: 2px 2px 20px 2px rgb(233, 233, 233);
    background-color: #ffffff;
    top: -5px;

    p {
      position: relative;
      top: 5px;
      font-family: "Gisha";
      display: none;
    }
  }
`;
export const MotionBox = motion(Box);
export const BoxContainerResumoCarrinho = styled(MotionBox)`
  border-radius: 5px;
  box-shadow: 2px 2px 20px 2px rgb(233, 233, 233);
  background-color: #ffff;
  font-family: "akrobat";
  width: 350px;
  height: 430px;
  margin-left: 22px;
  padding-left: 25px;
  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
    width: 390px;
    margin-left: auto;
    margin-right: auto;
  }
`;
export const ContainerGridFreteContentResumoCarrinhoContentCarrinhoFinalizacaoContentFormContent = styled.div`
  // width: 760px;
  width: 95%;
  height: 430px;
  position: relative;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 768px) {
  }
`;
export const ContentCarrinhoFinalizacaoContentFormContentHeader = styled.div`
  width: 100%;
  height: 120px;
  position: relative;

  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  // background-color: darkgoldenrod;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 42%;
    position: relative;

    margin-left: auto;
    margin-right: auto;
    top: 30px;
    display: flex;
    justify-content: center;
    // background-color: darkgoldenrod;
  }
`;
export const ContentCarrinhoFinalizacaoContentFormContentHeaderText = styled.div`
  width: 85%;
  height: 100%;
  position: relative;

  padding-left: 10px;
  margin-top: 15px;
  h1 {
    // font-size: 25px;
    font-size: 32px;
    font-family: "Gisha";
    letter-spacing: 0.02rem;
    color: #606060;
    strong {
      font-family: "Gisha Bold";
      // font-size: 17px;
      font-size: 30px;
      font-weight: 900;
      color: ${cor_base_2};
    }
  }

  p {
    line-height: 130%;
    font-size: 19px;
    display: block;
    font-family: "Gisha";
    letter-spacing: 0.02rem;
    top: -5px;
    color: #606060;
  }
  @media screen and (max-width: 768px) {
    width: 70%;
    height: 100%;

    position: relative;

    h1 {
      // font-size: 25px;
      font-size: 160%;
      font-family: "Gisha";
      letter-spacing: 0.02rem;
      color: #606060;
    }

    strong {
      font-family: "Gisha Bold";
      // font-size: 17px;
      font-size: 110%;
      color: ${cor_base_2};
    }

    p {
      font-size: 100%;
      display: block;
      font-family: "Gisha";
      letter-spacing: 0.02rem;
      top: -10px;
      color: #606060;
    }
  }
`;
export const CarrinhoFinalizacaoContentFormContentHeaderTextImg = styled.div`
  width: 20%;
  height: 100%;
  position: relative;
  img {
    width: 120px;
    position: relative;
    top: 0px;
    right: -16px;
  }
  @media screen and (max-width: 768px) {
    width: 20%;
    height: 100%;
    position: relative;

    img {
      width: 120px;
      position: relative;
      top: -30px;
    }
  }
`;
export const CarrinhoFinalizacaoContentFormContentBody = styled.div`
  width: 100%;
  height: 330px;
  position: relative;
  margin-top: 5px;
  // background-color: darkgoldenrod;
  input {
    padding-left: 1rem;
    width: 100%;
    height: 50px;
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
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 70%;

    position: relative;
    top: 30px;
    // background-color: darkgoldenrod;
    input {
      width: 100%;
      height: 50px;
      position: relative;
      margin-top: 8px;
      border: none;

      ::placeholder {
        position: relative;
        font-family: "Akrobat";
        padding-left: 15px;
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
      padding-left: 10px;
    }
  }
`;
export const CarrinhoFinalizacaoContentFormContentBodyLoading = styled.div`
  width: 100%;
  height: 130px;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: row;

  p {
    width: 80%;
    font-size: 18px;
    font-family: "Gisha";
    text-align: center;
    color: rgb(0, 0, 0, 0.7);
    strong {
      font-family: "Gisha Bold";
    }
  }

  img {
    width: 70px;
    height: 70px;
    display: block;
    object-fit: fill;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    position: relative;
    top: -340px;
    flex-direction: column;
    align-items: center;

    p {
      width: 80%;
      font-size: 18px;
      font-family: "Gisha";
      text-align: justify;
      strong {
        font-family: "Gisha Bold";
      }
    }
    img {
      width: 100px;
      height: 100px;
      display: block;
      object-fit: contain;
    }
  }
`;
export const CarrinhoFinalizacaoContentFormContentBodyBtn = styled(Button)`
  width: 350px;
  height: 40px;
  border: none;
  box-shadow: none !important;
  border-radius: 10px;
  background-color: #ff4f00;
  color: white;
  font-family: "akrobat";
  font-size: 18px;
  letter-spacing: 0.1rem;
  :hover {
    background-color: #ff4f00;
    opacity: 0.9;
  }
  :active {
    background-color: #ff4f00;
  }
  @media screen and (max-width: 768px) {
    box-shadow: none !important;
    width: 200px;
    height: 40px;
    position: relative;
    margin-right: 70px;
    top: 0px;
    border: none;
    font-family: "akrobat";
    border-radius: 5px;
    background-color: #ff4f00;
    color: white;
    font-size: 18px;
    :hover {
      background-color: #ff4f00;
      opacity: 0.9;
    }
    :active {
      background-color: #ff4f00;
    }
  }
`;
export const ProdutoContentGridPassosPassoCalculaFrete = styled.div`
  width: 100%;
  height: 720px;
  position: relative;
  float: left;
  // z-index: 999;
`;
export const ProdutoContentGridPassosPassoCalculaFreteContent = styled.div`
  width: 85%;
  height: 80%;
  position: relative;
  margin-left: auto;
  margin-right: auto;
`;
export const ProdutoContentGridPassosPassoCalculaFreteContentHeader = styled.div`
  width: 100%;
  height: 18%;
`;
export const ProdutoContentGridPassosPassoCalculaFreteContentHeaderInput = styled.div`
  width: 350px;
  height: 33px;
  top: 50%;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  // background-color: deeppink;

  label {
    font-size: 120%;
    font-family: "Akrobat";
  }

  input {
    width: 216px;
    height: 100%;
    border: 1px solid rgb(211, 211, 211);
    margin-left: 5%;
    border-radius: 3px 0px 0px 3px;
    font-size: 1vw;
    font-family: "Akrobat";
    background-color: rgb(228, 228, 228);
    z-index: 999999;
    cursor: pointer;
  }

  input::placeholder {
    font-size: 80%;
    font-family: "Akrobat";
  }

  button {
    width: 25px;
    height: 100%;
    position: relative;
    top: -8%;
    border: none;
    color: white;
    border-radius: 0px 5px 5px 0px;
    font-size: 90%;
    font-family: "Akrobat";
    background-color: ${cor_base_1};
  }
`;
export const ProdutoContentGridPassosPassoCalculaFreteContentGrid = styled.div`
  width: 100%;
  height: 80%;
  position: relative;

  float: left;
`;
export const ProdutoContentGridPassosPassoCalculaFreteContentGridHeader = styled.div`
  width: 100%;
  height: 90px;
  position: relative;
  float: left;
`;
export const ProdutoContentGridPassosPassoCalculaFreteContentGridHeaderCard = styled.div`
  width: 177px;
  height: 72px;
  border-radius: 5px;
  background-color: ${cor_base_1};
  position: relative;
  float: left;
  top: 15%;
  margin-left: 1%;
  text-align: center;

  p {
    position: relative;
    font-size: 20px;
    font-family: "Akrobat";
    color: white;
    top: 30%;
  }
`;
export const ProdutoContentGridPassosPassoCalculaFreteContentGridTransportadora = styled.div`
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
`;
export const ProdutoContentGridPassosPassoCalculaFreteContentGridTransportadoraBoxAlert = styled.div`
  width: 100%;
  height: 25%;
  position: relative;
  float: left;
  top: 10%;
  border: 2px solid #f8ac00;

  img {
    position: relative;
    float: left;
    top: 10%;
    left: 2%;
  }

  h6 {
    position: relative;
    float: left;
    left: 5%;
    font-family: "Akrobat";
    color: #f8ac00;
    font-size: 1.3vw;
  }

  p {
    position: relative;
    float: left;
    left: 10%;
    width: 80%;
    font-size: 1vw;
    font-family: "Akrobat";
  }
`;
export const TransportadoraLines = styled.div`
  width: 100%;
  height: 80px;
  position: relative;
  float: left;
  // background-color: rgb(0, 244, 252);
  margin-top: 0%;
`;
export const TransportadoraLinesCardL = styled.div`
  width: 177px;
  height: 95px;
  border-radius: 8px 8px 8px 8px;
  border: 1px solid rgb(228, 228, 228);
  position: relative;
  float: left;
  top: 2%;
  text-align: center;
  margin-left: 1%;

  p {
    width: 90%;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    font-size: 110%;
    font-family: "Akrobat";
    color: rgb(0, 0, 0);
    top: 10%;
  }

  img {
    width: 90%;
  }
`;
export const TransportadoraLinesCardT = styled.div`
  width: 177px;
  height: 72px;
  border-radius: 8px 8px 8px 8px;
  border: 1px solid rgb(228, 228, 228);
  position: relative;
  float: left;
  top: 2%;
  text-align: center;
  margin-left: 1%;

  p {
    width: 90%;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    font-size: 95%;
    font-family: "Akrobat";
    color: rgb(0, 0, 0);
    top: 10%;
  }

  @media screen and (min-width: 1500px) {
    p {
      font-size: 120%;
    }
  }
`;
export const TransportadoraLinesCardV = styled.div`
  width: 177px;
  height: 72px;
  border-radius: 8px 8px 8px 8px;
  border: 1px solid rgb(228, 228, 228);
  position: relative;
  float: left;
  top: 2%;
  text-align: center;
  margin-left: 1%;

  p {
    width: 100%;
    position: absolute;
    float: left;
    font-size: 110%;
    font-family: "Akrobat";
    color: rgb(0, 0, 0);
    top: 30%;
  }

  input {
    width: 22px;
    height: 22px;
    position: relative;
    float: left;
    top: 32%;
    left: 8%;
    // z-index: 999;
    cursor: pointer;
  }

  input[type="radio"]:checked:before {
    content: "";
    display: block;
    position: relative;
    border-radius: 50%;
    background: url("../images/ok.png");
    background-color: white;
    background-size: 100% 100%;
  }
`;
export const TransportadoraLinesCardI = styled.div`
  width: 177px;
  height: 72px;
  border-radius: 8px 8px 8px 8px;
  border: 1px solid rgb(228, 228, 228);
  position: relative;
  float: left;
  top: 2%;
  text-align: center;
  margin-left: 1%;
  cursor: pointer;

  p {
    width: 100%;
    position: absolute;
    float: left;
    font-size: 110%;
    font-family: "Akrobat";
    color: rgb(0, 0, 0);
    top: 30%;
  }

  input {
    width: 22px;
    height: 22px;
    position: relative;
    float: left;
    top: 32%;
    left: 8%;
    z-index: 999;
    cursor: pointer;
  }

  input[type="radio"]:checked:before {
    width: 22px;
    height: 22px;
    content: "";
    display: block;
    position: relative;
    border-radius: 50%;
    background: url("../images/ok.png");
    background-color: white;
    background-size: 100% 100%;
  }
`;
export const ContainerComponentFrete = styled(Box)`
  height: auto;
  text-align: center;
  align-items: center;
  width: 872px;
  padding-top: 12px;
  min-height: 205px;
  background-color: #ffff;
  box-shadow: 5px 5px 8px 5px #dbdbdb;
  margin-top: 25px;
  @media screen and (max-width: 768px) {
    min-height: 230px;
    width: 390px;
    margin-top: 25px;
  }
`;
export const ContainerComponentFreteFlex = styled(Flex)`
  margin-left: auto;
  margin-right: auto;
  width: 600px;
  font-family: "Akrobat";
  height: 30px;
  margin-top: 20px;
  justify-content: center;
  @media screen and (max-width: 768px) {
    width: 390px;
  }
`;
export const FlexBotaoConfirmar = styled(Flex)`
  justify-content: end;
  margin-top: 15px;
  width: 872px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const FlexBotaoConfirmarMobile = styled(Flex)`
  width: 100%;
  justify-content: center;
  margin-top: -25px;
  @media screen and (min-width: 769px) {
    display: none;
  }
`;
