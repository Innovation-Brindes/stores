import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  Button,
  Box,
  Flex,
  Image,
  Text,
  Grid,
  VStack,
  Modal,
  ModalHeader,
} from "@chakra-ui/react"
import { motion } from "framer-motion"
import ReactInputMask from "react-input-mask"
import styled from "styled-components"
import { cor_base_1, cor_base_2 } from "../../services/cores"

export const PromptProduto = styled(Box)`
  position: fixed;
  padding: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99999999999;
  background-color: rgba(0, 0, 0, 0.603);
  @media screen and (max-width: 768px) {
    position: fixed;
    padding: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99999999999;
    background-color: rgba(0, 0, 0, 0.603);
  }
`
export const PromptProdutoModal = styled(Box)`
  width: 900px;
  height: 650px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2%;
  border-radius: 5px;
  background-color: white;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 450px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    margin-top: 15%;
    border-radius: 5px;
    background-color: white;
    .carousel-inner {
      border-radius: 5px;
      position: relative;
      top: 5vh;
    }
  }
  #carouselExampleDark .carousel-indicators {
    width: 600px;
    height: 30%;
    left: -85px;
    top: 100%;
    overflow-y: hidden;
    overflow-y: hidden;
    @media screen and (max-width: 768px) {
      width: 380px;
      height: 160px;
      left: -60px;
      top: 100%;
      overflow-y: hidden;
      overflow-y: hidden;
    }
  }

  #carouselExampleDark .carousel-indicators img {
    // width:100%;
    // height:100%;
    height: 111px;
    width: 141px;
    position: relative;
    left: 60px;
    @media screen and (max-width: 768px) {
      // width:100%;
      // height:100%;
      height: 111px;
      width: 141px;
      position: relative;
      left: 60px;
    }
  }

  .carousel-indicators::-webkit-scrollbar {
    background-color: white;
    height: 0.8em;
    @media screen and (max-width: 768px) {
      background-color: white;
      height: 0.8em;
    }
  }

  .carousel-indicators::-webkit-scrollbar-thumb {
    background-color: #d1d1d1;
    border-radius: 15px;
  }
  .carousel-indicators::-webkit-scrollbar-thumb:hover {
    transition: 1s;
    background-color: #d1d1d1;
  }

  .carousel-inner {
    cursor: pointer;
  }
`
export const PromptProdutoModalClose = styled(Box)`
  width: 100px;
  height: 40px;
  position: relative;
  float: right;
  z-index: 999;

  button {
    width: 100px;
    height: 40px;
    font-size: 16px;
    font-family: "Akrobat ExtraBold";
    border: none;
    border-radius: 4px;
    background-color: transparent;
  }
  @media screen and (max-width: 768px) {
    width: 50px;
    height: 40px;
    position: relative;
    float: right;
    z-index: 999;

    button {
      width: 50px;
      height: 40px;
      font-size: 16px;
      font-family: "Akrobat Bold";
      border: none;
      border-radius: 4px;
      background-color: transparent;
    }
  }
`
export const SiteProduto = styled(Box)`
  margin-bottom: 12rem;
`
export const SiteProdutoContent = styled(Box)`
  width: 100%;
  // min-width: 920px;
  height: 1400px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  // background-color: white;
  @media screen and (max-width: 768px) {
    height: 1440px;
    // background-color: #F8AC00;
  }
`
export const SiteProdutoContentDadosProdutos = styled(Box)`
  width: 100%;
  min-width: 920px;
  height: 800px;
  top: -3vw;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  background-color: #f1f2f2;
  @media screen and (max-width: 768px) {
    width: 100%;
    min-width: 300px;
    height: 1250px;
    top: -3vw;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    z-index: revert;
    background-color: #f1f2f2;
    // background-color: #F8AC00;
  }
`
export const DadosProdutosLoading = styled(Box)`
  width: 100%;
  height: 150%;
  position: absolute;
  background-color: white;
  top: -10%;
  z-index: 99999;

  img {
    width: 100px;
    height: 100px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    /* left: 44%; */
    top: 15%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 150%;
    position: absolute;
    background-color: white;
    top: -10%;
    z-index: 99999;

    img {
      width: 100px;
      height: 100px;
      position: relative;
      margin-left: auto;
      margin-right: auto;
      top: 15%;
    }
  }
`
export const DadosProdutosTitle = styled(Box)`
  width: 100%;
  height: 40px;
  margin-top: 5%;
  background-color: ${cor_base_1};
  display: flex;
  justify-content: center;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 40px;
    margin-top: 5%;
    background-color: ${cor_base_1};
    display: flex;
    justify-content: center;
  }
`
export const DadosProdutosTitleContent = styled(Box)`
  width: 815px;
  height: 100%;
  position: relative;
  // background-color: red;
  h1 {
    color: white;
    font-family: "Akrobat SemiBold";
    font-size: 22px;
    letter-spacing: 0.06rem;
    position: relative;
    top: 20%;
  }
  @media screen and (max-width: 768px) {
    width: 78%;
    height: 100%;
    position: relative;
    // background-color: red;
    h1 {
      width: 100%;
      color: white;
      font-family: "Akrobat SemiBold";
      font-size: 0.9rem;
      letter-spacing: 0.06rem;
      position: relative;
      top: 30%;
      left: 1rem;
    }
  }
`
export const DadosProdutosTitleControl = styled(Box)`
  width: 100px;
  height: 80%;
  position: relative;
  top: 15%;
  border-left: 1.5px solid white;
  cursor: pointer;
  img {
    position: relative;
    left: 5px;
    top: 4px;
  }
  @media screen and (max-width: 768px) {
    width: 21%;
    height: 80%;
    position: relative;
    top: 15%;
    border-left: 1.5px solid white;
    cursor: pointer;
    img {
      position: relative;
      left: 2px;
      top: 5px;
    }
  }
`
export const DadosProdutosContent = styled.div`
  width: 1050px;
  height: 700px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  background-color: #f1f2f2;

  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 400px;
    height: 1200px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    display: block;
    justify-content: none;
    background-color: #f1f2f2;
  }
`
export const DadosProdutosContentSlideImg = styled(Box)`
  width: 600px;
  height: 85%;
  margin-top: 15px;
  h5 {
    color: black;
  }
  .carousel-caption-2 {
    width: 10%;
    position: absolute;

    top: 2%;
    font-family: "Akrobat";
    left: 90%;
  }
  .carousel-caption-2 a {
    text-decoration: none;
    color: black;
  }
  .carousel-caption {
    width: 50%;
    // background-color: blueviolet;
    position: absolute;

    top: 90%;
    font-family: "Akrobat";
    left: 60%;
  }
  #carouselExampleDark .carousel-indicators {
    width: 600px;
    height: 30%;
    left: -85px;
    top: 106%;
    overflow-y: hidden;
    overflow-y: hidden;
  }

  #carouselExampleDark .carousel-indicators img {
    // width:100%;
    // height:100%;
    height: 111px;
    width: 141px;
    position: relative;
    left: 60px;
  }

  .carousel-indicators::-webkit-scrollbar {
    background-color: white;
    height: 0.8em;
  }

  .carousel-indicators::-webkit-scrollbar-thumb {
    background-color: #d1d1d1;
    border-radius: 15px;
  }
  .carousel-indicators::-webkit-scrollbar-thumb:hover {
    transition: 1s;
    background-color: #d1d1d1;
  }

  .carousel-inner {
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    width: 390px;
    height: 510px;
    top: 2%;
    position: relative;
    left: 1%;
    // float: left;
    // left: 15px;

    #carouselExampleDark .carousel-indicators {
      width: 390px;
      height: 160px;
      left: -60px;
      top: 100%;
      overflow-y: hidden;
      overflow-y: hidden;
    }

    #carouselExampleDark .carousel-indicators img {
      // width:100%;
      // height:100%;
      height: 111px;
      width: 141px;
      position: relative;
      left: 60px;
    }

    .carousel-indicators::-webkit-scrollbar {
      background-color: white;
      height: 0.8em;
    }

    .carousel-indicators::-webkit-scrollbar-thumb {
      background-color: #d1d1d1;
      border-radius: 15px;
    }
    .carousel-indicators::-webkit-scrollbar-thumb:hover {
      transition: 1s;
      background-color: #d1d1d1;
    }

    .carousel-inner {
      cursor: pointer;
    }
  }
`
export const DadosProdutosContentDetalhesIndisponivel = styled(Box)`
  width: 100%;
  height: 595px;
  position: relative;
  border-radius: 3px;
`
export const DadosProdutosContentDetalhesIndisponivelContent = styled(motion(Box))`
  width: 90%;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding: 15px;
  box-shadow: 1px 2px 5px 2px rgb(0, 0, 0, 0.1);
  border-radius: 5px;
  transition: all ease 0.1s;
  // background-color: #70f800;
`
export const MotionBox = styled(motion(Box))``
export const DetalhesIndisponivelContentHeader = styled(Box)`
  width: 100%;
  height: 125px;
  position: relative;
  margin-top: 5%;
  // background-color: #afafaf;
  @media screen and (max-width: 1366px) {
    margin-top: 0;
  }
`
export const DetalhesIndisponivelContentHeaderImg = styled(Box)`
  width: 330px;
  height: 45px;
  position: relative;
  background-color: #ff0000;
  margin-left: auto;
  margin-right: auto;
  padding-top: 10px;
  border-radius: 5px;
  img {
    margin-right: auto;
    margin-left: auto;
  }
`
export const DetalhesIndisponivelContentHeaderDesc = styled(Box)`
  width: 100%;
  height: 90px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5px;
  // background-color: aquamarine;

  h3 {
    text-align: center;
    margin-top: 15px;
    font-size: 19px;
    font-family: "Open sans";
    color: #414241;
  }
  @media screen and (max-width: 1366px) {
    h3 {
      font-size: 17px;
    }
  }
`
export const DetalhesIndisponivelContentForm = styled(Box)`
  width: 100%;
  height: auto;
  position: relative;
  // background-color: #f00b0b;

  input {
    width: 100%;
    height: 50px;
    position: relative;
    margin-top: 20px;
    border: none;
    border-radius: 3px;
    background-color: rgb(247, 247, 247);
    padding-left: 10px;
  }
  input[type="text"] {
    outline: none;
  }
  input::-webkit-input-placeholder {
    font-size: 16px;
    font-family: "Open sans";
    color: rgb(82, 82, 82);
  }
  @media screen and (max-width: 1366px) {
    input {
      margin-top: 9px;
    }
  }
`
export const DetalhesIndisponivelContentFormAvise = styled(Button)`
  width: 100%;
  height: 45px;
  position: relative;
  border: none;
  border-radius: 5px;
  font-size: 12px;
  font-family: "Open sans";
  color: white;
  margin-top: 20px;
  background-color: ${cor_base_1};

  &:hover {
    background-color: ${cor_base_1};
  }
`
export const DetalhesIndisponivelContentFormSimilares = styled.button`
  width: 100%;
  height: 45px;
  position: relative;
  border: 0.6px solid ${cor_base_2};
  border-radius: 5px;
  font-size: 12px;
  font-family: "Open sans";
  color: ${cor_base_2};
  margin-top: 20px;
  background-color: #fbeee3;
`
export const DetalhesIndisponivelContentDetalhes = styled(Box)`
  width: 400px;
  height: 680px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  float: left;
  top: 2%;
  /* background-color: red; */
  /* background-color: #F8AC00; */
  /* margin-left: 13px; */

  @media screen and (max-width: 768px) {
    /* background-color:blue; */
  }
`
export const DetalhesIndisponivelContentDetalhesCores = styled(Box)`
  width: 360px;
  height: 150px;
  background-color: white;
  border-radius: 5px;
  border: 0.4px solid rgb(225, 225, 225);
  margin-bottom: 25px;
  @media screen and (max-width: 768px) {
    width: 380px;
    height: 150px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    background-color: white;
    border-radius: 5px;
    border: 0.4px solid rgb(225, 225, 225);
    margin-bottom: 25px;
  }
`
export const DetalhesIndisponivelContentDetalhesCoresContent = styled(Box)`
  width: 100%;
  height: 72px;
  position: relative;
  left: 15px;
  top: 5px;
  // background-color: cadetblue;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 72px;
    position: relative;
    left: 15px;
    top: 5px;
  }
`
export const DetalhesIndisponivelContentDetalhesCoresContentTitle = styled(Box)`
  width: 90%;
  height: 25px;
  font-size: 14px;
  position: relative;
  left: 2%;
  font-family: "Akrobat";
  // background-color: cornflowerblue;
`
export const DetalhesIndisponivelContentDetalhesCoresGridCores = styled(Box)`
  width: 90%;
  height: 72px;
  // background-color: crimson;
`

export const DetalhesIndisponivelContentDetalhesCoresGridCoresCor = styled(Box)`
  width: 30px;
  height: 30px;
  position: relative;
  float: left;
  margin-left: 2px;
  margin-top: 3px;
  border-radius: 35px;
  background-color: white;
  cursor: pointer;
`
export const DetalhesIndisponivelContentDetalhesCoresGridCoresCircleOut = styled(Box)`
  width: 30px;
  height: 30px;
  border-radius: 35px;
  // border: 2px solid #8EC505;
  border: 2px solid #f1f1f1;
  cursor: pointer;
  // display: flex;
  // justify-content: center;
  // align-items: center;
`
export const DetalhesIndisponivelContentDetalhesCoresGridCoresCircleIn = styled(Box)`
  width: 16px;
  height: 16px;
  border-radius: 15px;
  // background-color: #33629E;
  position: relative;
  left: 5px;
  top: 4.8px;
  cursor: pointer;
`
export const DetalhesIndisponivelContentDetalhesCoresGridCoresCircleInOff = styled(Box)`
  width: 16px;
  height: 16px;
  border-radius: 15px;
  // background-color: #33629E;
  position: relative;
  left: 5px;
  top: 4.8px;
  opacity: 0.4;
  cursor: pointer;

  .line-off {
    width: 3px;
    height: 27px;
    position: absolute;
    opacity: 2;
    top: -5px;
    left: 6px;
    background-color: red;
    transform: rotate(45deg);
    z-index: 9999;
  }
`

export const GridCoresCor = styled(Box)`
  width: 30px;
  height: 30px;
  position: relative;
  float: left;
  margin-left: 2px;
  margin-top: 3px;
  border-radius: 35px;
  background-color: white;
  cursor: pointer;
`
export const GridCoresCircleOut = styled(Box)`
  width: 30px;
  height: 30px;
  border-radius: 35px;
  // border: 2px solid #8EC505;
  border: 2px solid #f1f1f1;
  cursor: pointer;
  // display: flex;
  // justify-content: center;
  // align-items: center;
`
export const GridCoresCircleIn = styled(Box)`
  width: 16px;
  height: 16px;
  border-radius: 15px;
  // background-color: #33629E;
  position: relative;
  left: 5px;
  top: 4.8px;
  cursor: pointer;
`
export const GridCoresCircleInOff = styled(Box)`
  width: 16px;
  height: 16px;
  border-radius: 15px;
  // background-color: #33629E;
  position: relative;
  left: 5px;
  top: 4.8px;
  opacity: 0.4;
  cursor: not-allowed;
  pointerEvents: none;

  .line-off {
    width: 3px;
    height: 27px;
    position: absolute;
    opacity: 2;
    top: -5px;
    left: 6px;
    background-color: red;
    transform: rotate(45deg);
    z-index: 9999;
    cursor: not-allowed;
    pointerEvents: none;
  }
`

export const DetalhesIndisponivelContentDetalhesCoresContentCorSelecionada = styled(Box)`
  width: 90%;
  height: 20px;
  font-size: 14px;
  position: relative;
  left: 2%;
  font-family: "Akrobat";

  // background-color: cornflowerblue;
`
export const DetalhesIndisponivelContentDetalhesCoresContentEstoqueDisponivel = styled(Box)`
  width: 90%;
  height: 35px;
  font-size: 14px;
  position: relative;
  left: 2%;
  font-family: "Akrobat";
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;

  p {
    width: 150px;
    white-space: nowrap;
  }
  span {
    width: 170px;
    font-size: 12px;
    color: #777777;
    position: relative;
    top: -7px;
  }
  // background-color: cornflowerblue;
`
export const DetalhesIndisponivelContentDetalhesGravacao = styled(Box)`
  width: 360px;
  height: 67px;
  position: relative;
  // top: 25px;
  // background-color: burlywood;
  @media screen and (max-width: 768px) {
    width: 360px;
    height: 67px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
  }
`
export const DetalhesIndisponivelContentDetalhesGravacaoContent = styled(Box)`
  width: 100%;
  height: 100%;
  // background-color: cadetblue;
`
export const DetalhesIndisponivelContentDetalhesGravacaoContentDesc = styled(Box)`
  width: 360px;
  height: 30px;
  position: relative;
  border-top: 0.4px solid rgb(225, 225, 225);
  border-left: 0.4px solid rgb(225, 225, 225);
  border-right: 0.4px solid rgb(225, 225, 225);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  // background-color: white;
  background: linear-gradient(to top, rgb(231, 231, 231), rgb(248, 248, 248), white);

  p {
    font-size: 14px;
    font-family: "Akrobat";
    position: relative;
    left: 18px;
    top: 5px;
  }
  @media screen and (max-width: 768px) {
    width: 360px;
    height: 30px;
    position: relative;
    border-top: 0.4px solid rgb(225, 225, 225);
    border-left: 0.4px solid rgb(225, 225, 225);
    border-right: 0.4px solid rgb(225, 225, 225);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    // background-color: white;
    background: linear-gradient(to top, rgb(231, 231, 231), rgb(248, 248, 248), white);

    p {
      font-size: 14px;
      font-family: "Akrobat";
      position: relative;
      left: 18px;
      top: 5px;
    }
  }
`
export const DetalhesIndisponivelContentDetalhesGravacaoContentInputGravacao = styled(Box)`
  width: 360px;
  height: 34px;
  position: relative;
  float: left;
  background-color: white;
  // background-color: white;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  // border: 0.6px solid rgb(204, 204, 204);

  border-left: 0.4px solid rgb(225, 225, 225);
  border-right: 0.4px solid rgb(225, 225, 225);
  border-bottom: 0.4px solid rgb(225, 225, 225);

  cursor: pointer;
  margin-top: 0px;

  background-image: url("/images/menu/seta.png");
  background-repeat: no-repeat;
  background-position-x: 95%;
  background-position-y: 12px;
  @media screen and (max-width: 768px) {
    width: 360px;
    height: 34px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    background-color: white;
    // background-color: white;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    // border: 0.6px solid rgb(204, 204, 204);

    border-left: 0.4px solid rgb(225, 225, 225);
    border-right: 0.4px solid rgb(225, 225, 225);
    border-bottom: 0.4px solid rgb(225, 225, 225);

    cursor: pointer;
    margin-top: 0px;

    background-image: url("/images/menu/seta.png");
    background-repeat: no-repeat;
    background-position-x: 95%;
    background-position-y: 12px;
  }
`
export const DetalhesIndisponivelContentDetalhesGravacaoContentInputGravacaoTitle = styled(Box)`
  width: 80%;
  height: 100%;
  position: relative;
  left: 18px;
  top: 15%;
  font-size: 15px;
  letter-spacing: 0.06rem;
  font-family: "Akrobat";
  color: rgb(82, 82, 82);
  display: flex;
  justify-content: space-between;

  img {
    width: 16px;
    height: 16px;
    position: relative;
    top: 5px;
  }
  @media screen and (max-width: 768px) {
    width: 80%;
    height: 100%;
    position: relative;
    left: 18px;
    top: 15%;
    font-size: 15px;
    letter-spacing: 0.06rem;
    font-family: "Akrobat";
    color: rgb(82, 82, 82);
    display: flex;
    justify-content: space-between;

    img {
      width: 16px;
      height: 16px;
      position: relative;
      top: 5px;
    }
  }
`
export const DetalhesIndisponivelContentDetalhesGravacaoContentInputGravacaoContent = styled(Box)`
  width: 360px;
  height: 0px;
  position: relative;
  float: left;
  background-color: white;
  top: -5px;
  left: -1px;

  border-left: 0.6px solid rgb(160, 160, 160);
  border-right: 0.6px solid rgb(160, 160, 160);
  border-bottom: 0.6px solid rgb(160, 160, 160);

  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  z-index: 9999;

  a {
    position: relative;
    top: -20px;
  }

  p {
    width: 50%;
    height: 30px;
    position: relative;
    left: 10%;
    color: rgb(82, 82, 82);
    text-decoration-line: rgb(82, 82, 82);
  }

  input {
    width: 245px;
    height: 32px;
    border-radius: 0px;
    top: 18px;
    left: 8%;
    position: relative;
    border: 0.6px solid rgb(204, 204, 204);
    outline: none;
  }

  input::-webkit-input-placeholder {
    padding-left: 10px;
    font-family: "Akrobat";
    color: rgb(204, 204, 204);
  }

  ul {
    width: 270px;
    height: 180px;
    position: relative;
    top: 18px;
    // left: 8%;
    // background-color: rgba(95, 158, 160, 0.377);
  }

  li {
    width: 225px;
    height: 35px;
    position: relative;
    margin-top: 5px;
    // background-color: chocolate;
    list-style-type: none;
    left: -33px;

    input {
      width: 15%;
      height: 60%;
      position: relative;
      float: left;
    }

    input[type="checkbox"]:checked:before {
      border-radius: 2px;
      content: "";
      display: block;
      position: relative;
      width: 23px;
      height: 23px;
      left: 5px;
      background: url("/images/menu/check-verde.png");
      background-color: white;
      background-size: 100% 100%;
    }

    p {
      width: 85%;
      height: 60%;
      position: relative;
      float: left;
      top: 18px;
      left: 25px;
      font-size: 100%;
      font-family: "Akrobat";
      color: rgb(82, 82, 82);
    }
  }
  @media screen and (max-width: 768px) {
    width: 360px;
    height: 0px;
    position: relative;
    float: left;
    background-color: white;
    top: -5px;
    left: -1px;

    border-left: 0.6px solid rgb(160, 160, 160);
    border-right: 0.6px solid rgb(160, 160, 160);
    border-bottom: 0.6px solid rgb(160, 160, 160);

    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    z-index: 9999;

    a {
      position: relative;
      top: -20px;
    }

    p {
      width: 50%;
      height: 30px;
      position: relative;
      left: 10%;
      color: rgb(82, 82, 82);
      text-decoration-line: rgb(82, 82, 82);
    }

    input {
      width: 245px;
      height: 32px;
      border-radius: 0px;
      top: 18px;
      left: 8%;
      position: relative;
      border: 0.6px solid rgb(204, 204, 204);
      outline: none;
    }

    input::-webkit-input-placeholder {
      padding-left: 10px;
      font-family: "Akrobat";
      color: rgb(204, 204, 204);
    }

    ul {
      width: 270px;
      height: 180px;
      position: relative;
      top: 18px;
      // left: 8%;
      // background-color: rgba(95, 158, 160, 0.377);
    }

    li {
      width: 225px;
      height: 35px;
      position: relative;
      margin-top: 5px;
      // background-color: chocolate;
      list-style-type: none;
      left: -33px;

      input {
        width: 15%;
        height: 60%;
        position: relative;
        float: left;
      }

      input[type="checkbox"]:checked:before {
        border-radius: 2px;
        content: "";
        display: block;
        position: relative;
        width: 23px;
        height: 23px;
        left: 5px;
        background: url("/images/menu/check-verde.png");
        background-color: white;
        background-size: 100% 100%;
      }

      p {
        width: 85%;
        height: 60%;
        position: relative;
        float: left;
        top: 18px;
        left: 25px;
        font-size: 100%;
        font-family: "Akrobat";
        color: rgb(82, 82, 82);
      }
    }
  }
`
export const ContentDetalhesQuantidadeBatidas = styled(Box)`
  width: 360px;
  height: 67px;
  // background-color: burlywood;
  @media screen and (max-width: 768px) {
    width: 360px;
    height: 67px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    // background-color: burlywood;
  }
`
export const ContentDetalhesQuantidadeBatidasContent = styled(Box)`
  width: 100%;
  height: 100%;
  // background-color: cadetblue;
`
export const ContentDetalhesQuantidadeBatidasContentDesc = styled(Box)`
  width: 360px;
  height: 30px;
  position: relative;
  border-top: 0.4px solid rgb(225, 225, 225);
  border-left: 0.4px solid rgb(225, 225, 225);
  border-right: 0.4px solid rgb(225, 225, 225);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background: linear-gradient(to top, rgb(231, 231, 231), rgb(248, 248, 248), white);

  p {
    font-size: 14px;
    font-family: "Akrobat";
    position: relative;
    left: 18px;
    top: 5px;
  }
  @media screen and (max-width: 768px) {
    width: 360px;
    height: 30px;
    position: relative;
    border-top: 0.4px solid rgb(225, 225, 225);
    border-left: 0.4px solid rgb(225, 225, 225);
    border-right: 0.4px solid rgb(225, 225, 225);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background: linear-gradient(to top, rgb(231, 231, 231), rgb(248, 248, 248), white);

    p {
      font-size: 14px;
      font-family: "Akrobat";
      position: relative;
      left: 18px;
      top: 5px;
    }
  }
`
export const ContentDetalhesQuantidadeBatidasContentInputBatidas = styled(Box)`
  width: 360px;
  height: 34px;
  position: relative;
  float: left;
  background-color: white;

  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  border-bottom: 0.4px solid rgb(225, 225, 225);
  border-left: 0.4px solid rgb(225, 225, 225);
  border-right: 0.4px solid rgb(225, 225, 225);

  // border: 0.6px solid rgb(204, 204, 204);
  cursor: pointer;
  margin-top: 0px;

  background-image: url("/images/menu/seta.png");
  background-repeat: no-repeat;
  background-position-x: 95%;
  background-position-y: 12px;
  @media screen and (max-width: 768px) {
    width: 360px;
    height: 34px;
    position: relative;
    float: left;
    background-color: white;

    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    border-bottom: 0.4px solid rgb(225, 225, 225);
    border-left: 0.4px solid rgb(225, 225, 225);
    border-right: 0.4px solid rgb(225, 225, 225);

    // border: 0.6px solid rgb(204, 204, 204);
    cursor: pointer;
    margin-top: 0px;

    background-image: url("/images/menu/seta.png");
    background-repeat: no-repeat;
    background-position-x: 95%;
    background-position-y: 12px;
  }
`
export const ContentDetalhesQuantidadeBatidasContentInputBatidasTitle = styled(Box)`
  width: 80%;
  height: 100%;
  position: relative;
  left: 18px;
  top: 15%;
  font-size: 15px;
  letter-spacing: 0.06rem;
  font-family: "Akrobat";
  color: rgb(82, 82, 82);
  display: flex;
  justify-content: space-between;

  img {
    width: 16px;
    height: 16px;
    position: relative;
    top: 3px;
  }
  @media screen and (max-width: 768px) {
    width: 80%;
    height: 100%;
    position: relative;
    left: 18px;
    top: 15%;
    font-size: 15px;
    letter-spacing: 0.06rem;
    font-family: "Akrobat";
    color: rgb(82, 82, 82);
    display: flex;
    justify-content: space-between;

    img {
      width: 16px;
      height: 16px;
      position: relative;
      top: 3px;
    }
  }
`
export const ContentDetalhesQuantidadeBatidasContentInputBatidasContent = styled(Box)`
  width: 360px;
  height: 0px;
  position: relative;
  float: left;
  background-color: white;
  top: -5px;
  left: -1px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  // border-left: 0.6px solid rgb(204, 204, 204);
  // border-right: 0.6px solid rgb(204, 204, 204);
  // border-bottom: 0.6px solid rgb(204, 204, 204);
  z-index: 9999;

  a {
    position: relative;
    top: -20px;
  }

  p {
    width: 50%;
    height: 30px;
    position: relative;
    left: 10%;
    color: rgb(82, 82, 82);
    text-decoration-line: rgb(82, 82, 82);
  }

  input {
    width: 245px;
    height: 32px;
    border-radius: 0px;
    top: 18px;
    left: 8%;
    position: relative;
    border: 0.6px solid rgb(204, 204, 204);
    outline: none;
  }

  input::-webkit-input-placeholder {
    padding-left: 10px;
    font-family: "Akrobat";
    color: rgb(204, 204, 204);
  }

  ul {
    width: 270px;
    height: 180px;
    position: relative;
    top: 18px;
    // left: 8%;
    // background-color: rgba(95, 158, 160, 0.377);
  }

  li {
    width: 225px;
    height: 35px;
    position: relative;
    margin-top: 5px;
    // background-color: chocolate;
    list-style-type: none;
    left: -33px;

    input {
      width: 15%;
      height: 60%;
      position: relative;
      float: left;
      // border: 0.6px solid rgb(204, 204, 204);
    }

    input[type="checkbox"]:checked:before {
      border-radius: 2px;
      content: "";
      display: block;
      position: relative;
      width: 23px;
      height: 23px;
      left: 5px;
      background: url("/images/menu/check-verde.png");
      background-color: white;
      background-size: 100% 100%;
    }

    p {
      width: 50%;
      height: 60%;
      position: relative;
      float: left;
      top: 18px;
      left: 25px;
      font-size: 100%;
      font-family: "Akrobat";
      color: rgb(82, 82, 82);
    }
  }
  @media screen and (max-width: 768px) {
    width: 360px;
    height: 0px;
    position: relative;
    float: left;
    background-color: white;
    top: -5px;
    left: -1px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    // border-left: 0.6px solid rgb(204, 204, 204);
    // border-right: 0.6px solid rgb(204, 204, 204);
    // border-bottom: 0.6px solid rgb(204, 204, 204);
    z-index: 9999;

    a {
      position: relative;
      top: -20px;
    }

    p {
      width: 50%;
      height: 30px;
      position: relative;
      left: 10%;
      color: rgb(82, 82, 82);
      text-decoration-line: rgb(82, 82, 82);
    }

    input {
      width: 245px;
      height: 32px;
      border-radius: 0px;
      top: 18px;
      left: 8%;
      position: relative;
      border: 0.6px solid rgb(204, 204, 204);
      outline: none;
    }

    input::-webkit-input-placeholder {
      padding-left: 10px;
      font-family: "Akrobat";
      color: rgb(204, 204, 204);
    }

    ul {
      width: 270px;
      height: 180px;
      position: relative;
      top: 18px;
      // left: 8%;
      // background-color: rgba(95, 158, 160, 0.377);
    }

    li {
      width: 225px;
      height: 35px;
      position: relative;
      margin-top: 5px;
      // background-color: chocolate;
      list-style-type: none;
      left: -33px;

      input {
        width: 15%;
        height: 60%;
        position: relative;
        float: left;
        // border: 0.6px solid rgb(204, 204, 204);
      }

      input[type="checkbox"]:checked:before {
        border-radius: 2px;
        content: "";
        display: block;
        position: relative;
        width: 23px;
        height: 23px;
        left: 5px;
        background: url("/images/menu/check-verde.png");
        background-color: white;
        background-size: 100% 100%;
      }

      p {
        width: 50%;
        height: 60%;
        position: relative;
        float: left;
        top: 18px;
        left: 25px;
        font-size: 100%;
        font-family: "Akrobat";
        color: rgb(82, 82, 82);
      }
    }
  }
`
export const DetalhesPrazo = styled(Box)`
  width: 360px;
  height: 67px;
  // background-color: burlywood;
  @media screen and (max-width: 768px) {
    width: 360px;
    height: 67px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    // background-color: burlywood;
  }
`
export const DetalhesPrazoContent = styled(Box)`
  width: 100%;
  height: 100%;
  // background-color: cadetblue;
`
export const DetalhesPrazoContentDesc = styled(Box)`
  width: 360px;
  height: 30px;
  position: relative;
  border-top: 0.4px solid rgb(225, 225, 225);
  border-left: 0.4px solid rgb(225, 225, 225);
  border-right: 0.4px solid rgb(225, 225, 225);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background: linear-gradient(to top, rgb(231, 231, 231), rgb(248, 248, 248), white);

  p {
    font-size: 14px;
    font-family: "Akrobat";
    position: relative;
    left: 18px;
    top: 5px;
  }
  @media screen and (max-width: 768px) {
    width: 360px;
    height: 30px;
    position: relative;
    border-top: 0.4px solid rgb(225, 225, 225);
    border-left: 0.4px solid rgb(225, 225, 225);
    border-right: 0.4px solid rgb(225, 225, 225);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background: linear-gradient(to top, rgb(231, 231, 231), rgb(248, 248, 248), white);

    p {
      font-size: 14px;
      font-family: "Akrobat";
      position: relative;
      left: 18px;
      top: 5px;
    }
  }
`
export const DetalhesPrazoContentInputPrazo = styled(Box)`
  width: 360px;
  height: 34px;
  position: relative;
  float: left;
  background-color: white;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  border-bottom: 0.4px solid rgb(225, 225, 225);
  border-left: 0.4px solid rgb(225, 225, 225);
  border-right: 0.4px solid rgb(225, 225, 225);
  // border: 0.6px solid rgb(204, 204, 204);
  cursor: pointer;
  margin-top: 0px;

  background-image: url("/images/menu/seta.png");
  background-repeat: no-repeat;
  background-position-x: 95%;
  background-position-y: 12px;
  @media screen and (max-width: 768px) {
    width: 360px;
    height: 34px;
    position: relative;
    float: left;
    background-color: white;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    border-bottom: 0.4px solid rgb(225, 225, 225);
    border-left: 0.4px solid rgb(225, 225, 225);
    border-right: 0.4px solid rgb(225, 225, 225);
    // border: 0.6px solid rgb(204, 204, 204);
    cursor: pointer;
    margin-top: 0px;

    background-image: url("/images/menu/seta.png");
    background-repeat: no-repeat;
    background-position-x: 95%;
    background-position-y: 12px;
  }
`
export const DetalhesPrazoContentInputPrazoTitle = styled(Box)`
  width: 90%;
  height: 100%;
  position: relative;
  left: 18px;
  top: 17%;
  font-size: 14px;
  letter-spacing: 0.02rem;
  font-family: "Akrobat";
  color: rgb(82, 82, 82);
  display: flex;
  justify-content: space-between;

  img {
    width: 110px;
    height: 23px;
    position: relative;
    display: block;
    object-fit: scale-down;
    top: 0px;
    left: -15px;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
    height: 100%;
    position: relative;
    left: 18px;
    top: 17%;
    font-size: 14px;
    letter-spacing: 0.02rem;
    font-family: "Akrobat";
    color: rgb(82, 82, 82);
    display: flex;
    justify-content: space-between;

    img {
      width: 110px;
      height: 23px;
      position: relative;
      display: block;
      object-fit: scale-down;
      top: 0px;
      left: -15px;
    }
  }
`
export const DetalhesPrazoContentInputPrazoContent = styled(Box)`
  width: 360px;
  height: 0px;
  position: relative;
  float: left;
  background-color: white;
  top: -5px;
  left: -1px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  // border-left: 0.6px solid rgb(204, 204, 204);
  // border-right: 0.6px solid rgb(204, 204, 204);
  // border-bottom: 0.6px solid rgb(204, 204, 204);
  z-index: 9999;
  p {
    width: 50%;
    height: 30px;
    position: relative;
    left: 10%;
    color: rgb(82, 82, 82);
    text-decoration-line: rgb(82, 82, 82);
  }

  input {
    width: 245px;
    height: 32px;
    border-radius: 0px;
    top: 18px;
    left: 8%;
    position: relative;
    border: 0.6px solid rgb(204, 204, 204);
    outline: none;
  }

  input::-webkit-input-placeholder {
    padding-left: 10px;
    font-family: "Akrobat";
    color: rgb(204, 204, 204);
  }

  ul {
    width: 360px;
    height: 180px;
    position: relative;
    top: 0px;
    left: -30px;
    // background-color: rgba(95, 158, 160, 0.377);
  }

  li {
    width: 360px;
    height: 35px;
    position: relative;
    margin-top: 5px;
    // background-color: chocolate;
    list-style-type: none;
    left: -20px;

    input {
      width: 10%;
      height: 60%;
      position: relative;
      float: left;
    }

    input[type="checkbox"]:checked:before {
      border-radius: 2px;
      content: "";
      display: block;
      position: relative;
      width: 23px;
      height: 23px;
      left: 5px;
      background: url("/images/menu/check-verde.png");
      background-color: white;
      background-size: 100% 100%;
    }

    p {
      width: 280px;
      height: 23px;
      position: relative;
      float: left;
      top: 18px;
      left: 25px;
      font-size: 15px;
      font-family: "Akrobat";
      letter-spacing: 0.02rem;
      color: rgb(82, 82, 82);
      border-radius: 3px;
      display: flex;
      justify-content: space-between;

      strong {
        position: relative;
        float: left;
        width: 100px;
        letter-spacing: 0.02rem;
      }
    }

    img {
      // width: 60px;
      // height: 70%;
      position: relative;
      float: left;
      top: 18px;
      left: 65px;
    }
  }
  @media screen and (max-width: 768px) {
    width: 360px;
    height: 0px;
    position: relative;
    float: left;
    background-color: white;
    top: -5px;
    left: -1px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    // border-left: 0.6px solid rgb(204, 204, 204);
    // border-right: 0.6px solid rgb(204, 204, 204);
    // border-bottom: 0.6px solid rgb(204, 204, 204);
    z-index: 9999;
    p {
      width: 50%;
      height: 30px;
      position: relative;
      left: 10%;
      color: rgb(82, 82, 82);
      text-decoration-line: rgb(82, 82, 82);
    }

    input {
      width: 245px;
      height: 32px;
      border-radius: 0px;
      top: 18px;
      left: 8%;
      position: relative;
      border: 0.6px solid rgb(204, 204, 204);
      outline: none;
    }

    input::-webkit-input-placeholder {
      padding-left: 10px;
      font-family: "Akrobat";
      color: rgb(204, 204, 204);
    }

    ul {
      width: 360px;
      height: 180px;
      position: relative;
      top: 0px;
      left: -30px;
      // background-color: rgba(95, 158, 160, 0.377);
    }

    li {
      width: 360px;
      height: 35px;
      position: relative;
      margin-top: 5px;
      // background-color: chocolate;
      list-style-type: none;
      left: -20px;

      input {
        width: 10%;
        height: 60%;
        position: relative;
        float: left;
      }

      input[type="checkbox"]:checked:before {
        border-radius: 2px;
        content: "";
        display: block;
        position: relative;
        width: 23px;
        height: 23px;
        left: 5px;
        background: url("/images/menu/check-verde.png");
        background-color: white;
        background-size: 100% 100%;
      }

      p {
        width: 280px;
        height: 23px;
        position: relative;
        float: left;
        top: 18px;
        left: 25px;
        font-size: 15px;
        font-family: "Akrobat";
        letter-spacing: 0.02rem;
        color: rgb(82, 82, 82);
        border-radius: 3px;
        display: flex;
        justify-content: space-between;

        strong {
          position: relative;
          float: left;
          width: 100px;
          letter-spacing: 0.02rem;
        }
      }

      img {
        // width: 60px;
        // height: 70%;
        position: relative;
        float: left;
        top: 18px;
        left: 65px;
      }
    }
  }
`
export const DetalhesPrazoContentInputPrazoContentDesc = styled(Box)`
  width: 90%;
  position: relative;
  top: 10px;

  p {
    width: 100%;
    height: 60px;
    font-size: 11px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    position: relative;
    top: 10px;

    p {
      width: 100%;
      height: 60px;
      font-size: 11px;
    }
  }
`
export const DetalhesQuantidade = styled(Box)`
  width: 360px;
  height: 67px;
  // background-color: burlywood;
  @media screen and (max-width: 768px) {
    width: 360px;
    height: 67px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    // background-color: burlywood;
  }
`
export const DetalhesQuantidadeContent = styled(Box)`
  width: 100%;
  height: 100%;
  // background-color: cadetblue;
`
export const DetalhesQuantidadeContentDesc = styled(Box)`
  width: 360px;
  height: 30px;
  position: relative;
  border-top: 0.4px solid rgb(225, 225, 225);
  border-left: 0.4px solid rgb(225, 225, 225);
  border-right: 0.4px solid rgb(225, 225, 225);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background: linear-gradient(to top, rgb(231, 231, 231), rgb(248, 248, 248), white);

  p {
    font-size: 14px;
    font-family: "Akrobat";
    position: relative;
    left: 18px;
    top: 5px;
  }
  @media screen and (max-width: 768px) {
    width: 360px;
    height: 30px;
    position: relative;
    border-top: 0.4px solid rgb(225, 225, 225);
    border-left: 0.4px solid rgb(225, 225, 225);
    border-right: 0.4px solid rgb(225, 225, 225);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background: linear-gradient(to top, rgb(231, 231, 231), rgb(248, 248, 248), white);

    p {
      font-size: 14px;
      font-family: "Akrobat";
      position: relative;
      left: 18px;
      top: 5px;
    }
  }
`
export const DetalhesQuantidadeContentInputQuantidade = styled(Box)`
  width: 360px;
  height: 32px;
  position: relative;
  float: left;
  background-color: white;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  border-bottom: 0.4px solid rgb(225, 225, 225);
  border-left: 0.4px solid rgb(225, 225, 225);
  border-right: 0.4px solid rgb(225, 225, 225);
  // border: 0.6px solid rgb(204, 204, 204);
  cursor: pointer;
  // margin-top: 10px;
  background-image: url("/images/menu/seta.png");
  background-repeat: no-repeat;
  background-position-x: 95%;
  background-position-y: 12px;
  @media screen and (max-width: 768px) {
    width: 360px;
    height: 32px;
    position: relative;
    float: left;
    background-color: white;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    border-bottom: 0.4px solid rgb(225, 225, 225);
    border-left: 0.4px solid rgb(225, 225, 225);
    border-right: 0.4px solid rgb(225, 225, 225);
    // border: 0.6px solid rgb(204, 204, 204);
    cursor: pointer;
    // margin-top: 10px;

    background-image: url("/images/menu/seta.png");
    background-repeat: no-repeat;
    background-position-x: 95%;
    background-position-y: 12px;
  }
`
export const DetalhesQuantidadeContentInputQuantidadeTitle = styled(Box)`
  width: 90%;
  height: 100%;
  position: relative;
  left: 18px;
  top: 15%;
  font-size: 15px;
  letter-spacing: 0.06rem;
  font-family: "Akrobat";
  color: rgb(82, 82, 82);
  // background-color: turquoise;

  strong {
    position: relative;
    left: 2px;
  }

  p {
    width: 95%;
    display: flex;
    justify-content: space-between;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
    height: 100%;
    position: relative;
    left: 18px;
    top: 15%;
    font-size: 15px;
    letter-spacing: 0.06rem;
    font-family: "Akrobat";
    color: rgb(82, 82, 82);
    // background-color: turquoise;

    strong {
      position: relative;
      left: 2px;
    }

    p {
      width: 95%;
      display: flex;
      justify-content: space-between;
    }
  }
`
export const DetalhesQuantidadeContentInputQuantidadeContent = styled(Box)`
  width: 360px;
  height: 0px;
  position: relative;
  float: left;
  background-color: white;
  top: -5px;
  left: -1px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  // border-left: 0.6px solid rgb(204, 204, 204);
  // border-right: 0.6px solid rgb(204, 204, 204);
  // border-bottom: 0.6px solid rgb(204, 204, 204);
  z-index: 9999;

  a {
    position: relative;
    top: -20px;
  }

  p {
    width: 50%;
    height: 30px;
    position: relative;
    left: 10%;
    color: rgb(82, 82, 82);
    text-decoration-line: rgb(82, 82, 82);
  }

  input {
    width: 245px;
    height: 32px;
    border-radius: 0px;
    top: 18px;
    left: 8%;
    position: relative;
    border: 0.6px solid rgb(204, 204, 204);
    outline: none;
  }

  input::-webkit-input-placeholder {
    padding-left: 10px;
    font-family: "Akrobat";
    color: rgb(204, 204, 204);
  }

  ul {
    width: 270px;
    height: 180px;
    position: relative;
    // left: 8%;
    // background-color: rgba(95, 158, 160, 0.377);
  }

  li {
    width: 225px;
    height: 35px;
    position: relative;
    margin-top: 5px;
    // background-color: chocolate;
    list-style-type: none;
    left: -30px;

    input {
      width: 15%;
      height: 60%;
      position: relative;
      float: left;
      // border: 0.6px solid rgb(204, 204, 204);
    }

    input[type="checkbox"]:checked:before {
      border-radius: 2px;
      content: "";
      display: block;
      position: relative;
      width: 23px;
      height: 23px;
      left: 5px;
      background: url("/images/menu/check-verde.png");
      background-color: white;
      background-size: 100% 100%;
    }

    p {
      width: 50%;
      height: 60%;
      position: relative;
      float: left;
      top: 18px;
      left: 25px;
      font-size: 100%;
      font-family: "Akrobat";
      color: rgb(82, 82, 82);
    }
  }
  @media screen and (max-width: 768px) {
    width: 360px;
    height: 0px;
    position: relative;
    float: left;
    background-color: white;
    top: -5px;
    left: -1px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border-left: 0.6px solid rgb(204, 204, 204);
    border-right: 0.6px solid rgb(204, 204, 204);
    border-bottom: 0.6px solid rgb(204, 204, 204);
    z-index: 9999;
    p {
      width: 50%;
      height: 30px;
      position: relative;
      float: left;
      left: 10%;
      color: rgb(82, 82, 82);
      text-decoration-line: rgb(82, 82, 82);
    }
    input::-webkit-input-placeholder {
      padding-left: 10px;
      font-family: "Akrobat";
      color: rgb(204, 204, 204);
    }

    ul {
      width: 310px;
      height: 180px;
      position: relative;
      float: left;
      overflow-y: hidden;
      overflow-x: hidden;
      top: -5px;
    }
    li {
      width: 245px;
      height: 33px;
      position: relative;
      margin-top: 5px;
      // background-color: chocolate;
      list-style-type: none;
      left: -15px;

      input {
        width: 10%;
        height: 23px;
        top: 18px;
        position: relative;
        float: left;
        z-index: 999;
      }

      input[type="checkbox"]:checked:before {
        border-radius: 2px;
        content: "";
        display: block;
        position: relative;
        width: 23px;
        height: 23px;
        left: 0.8px;
        background: url("/images/menu/check-verde.png");
        background-color: white;
        background-size: 100% 100%;
        z-index: 999;
      }

      p {
        width: 36%;
        height: 60%;
        position: relative;
        float: left;
        top: 18px;
        left: 25px;
        font-size: 100%;
        font-family: "Akrobat";
        // color:rgb(82, 82, 82);
        color: rgb(82, 82, 82);
      }
    }
  }
`
export const DetalhesQuantidadeContentInputQuantidadeTitleSelo = styled(Box)`
  width: 130px;
  height: 100%;
  position: relative;
  top: -19px;
  left: 200px;
  border-radius: 5px;
  // background-color: #f9f9f9;

  h4 {
    position: relative;
    font-size: 14px;
    text-align: center;
    font-family: "Gisha Bold";
    color: ${cor_base_1};
    letter-spacing: 0;
    // border-radius: 5px;
    // background-color: #F1F2F2;
  }
  @media screen and (max-width: 768px) {
    width: 120px;
    height: 70%;
    position: relative;
    float: left;
    top: 18px;
    left: 70px;
    border-radius: 5px;
    // background-color: #f9f9f9;

    h4 {
      position: relative;
      top: 5px;
      font-size: 13px;
      text-align: center;
      font-family: "Gisha bold";
      color: ${cor_base_1};
      // border-radius: 5px;
      // background-color: #F1F2F2;
    }
  }
`
export const DetalhesQuantidadeContentInputQuantidadeContentLabel = styled.label`
  font-size: 15px;
  position: relative;
  top: -20px;
  left: 80px;
  float: left;
  font-family: "Akrobat";
  color: rgb(82, 82, 82);
  @media screen and (max-width: 768px) {
    font-size: 15px;
    position: relative;
    top: -20px;
    left: 80px;
    float: left;
    font-family: "Akrobat";
    color: rgb(82, 82, 82);
  }
`
export const DetalhesQuantidadeContentInputQuantidadeContentInput = styled(Box)`
  width: 220px;
  height: 32px;
  position: relative;
  float: left;
  top: -8px;
  left: 40px;
  display: flex;
  justify-content: space-between;
  // background-color: aqua;
  label {
    width: 68px;
    font-size: 15px;
    position: relative;
    float: left;
    top: 5px;
    font-family: "Akrobat";
    color: rgb(82, 82, 82);
  }
  input {
    width: 65px;
    height: 32px;
    border-radius: 0px;
    left: 2%;
    top: -0.2rem;
    position: relative;
    float: left;
    border: 0.6px solid rgb(204, 204, 204);
    outline: none;
  }
  @media screen and (max-width: 768px) {
    width: 220px;
    height: 32px;
    position: relative;
    float: left;
    top: -8px;
    left: 40px;
    display: flex;
    justify-content: space-between;
    // background-color: aqua;
    label {
      width: 65px;
      font-size: 15px;
      position: relative;
      float: left;
      top: 5px;
      font-family: "Akrobat";
      color: rgb(82, 82, 82);
    }
    input {
      width: 65px;
      height: 32px;
      border-radius: 0px;
      left: 2%;
      position: relative;
      float: left;
      border: 0.6px solid rgb(204, 204, 204);
      outline: none;
    }
  }
`
export const DetalhesQuantidadeContentInputQuantidadeContentButton = styled(Box)`
  width: 54px;
  height: 32px;
  position: relative;
  float: left;
  top: -11px;
  left: 20px;
  // background-color: rgb(255, 0, 149);

  button {
    width: 100%;
    height: 100%;
    color: white;
    font-size: 18px;
    font-family: "Akrobat ExtraBold";
    border: none;
    background-color: ${cor_base_1};
  }
  @media screen and (max-width: 768px) {
    width: 54px;
    height: 32px;
    position: relative;
    float: left;
    top: -8px;
    left: 20px;
    // background-color: rgb(255, 0, 149);

    button {
      width: 100%;
      height: 100%;
      color: white;
      font-size: 18px;
      font-family: "Akrobat Bold";
      border: none;
      background-color: ${cor_base_1};
    }
  }
`
export const DetalhesValor = styled(Box)`
  width: 300px;
  height: 80px;
  margin-top: 53px;
  margin-left: 5px;
  // background-color: burlywood;
  display: flex;
  justify-content: center;
  // background-color: burlywood;  }
  @media screen and (max-width: 768px) {
    width: 160px;
    height: 80px;
    margin-top: 53px;
    // margin-left: 5px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    // background-color: burlywood;
  }
`
export const DetalhesValorContent = styled(Box)`
  width: 100%;
  height: 100%;

  img {
    width: 50px;
    height: 50px;
    position: relative;
    top: -10px;
  }
  p {
    height: 10px;
    font-size: 17px;
    font-family: "Akrobat";
    position: relative;
  }
  strong {
    height: 10px;
    position: relative;
    top: -8px;
    font-size: 28px;
    font-family: "Akrobat";
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;

    img {
      width: 50px;
      height: 50px;
      position: relative;
      top: -10px;
    }
    p {
      height: 10px;
      font-size: 17px;
      font-family: "Akrobat";
      position: relative;
    }
    strong {
      // height: 10px;
      position: relative;
      top: -8px;
      font-size: 28px;
      font-family: "Akrobat";
      text-align: center;
    }
  }
`
export const DetalhesConcluir = styled(Box)`
  width: 300px;
  height: 53px;
  margin-top: 15px;

  // background-color: burlywood;
  @media screen and (max-width: 768px) {
    width: 360px;

    height: 53px;
    margin-top: 15px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    // background-color: burlywood;
  }
`
export const DetalhesConcluirContent = styled(Box)`
  width: 100%;
  height: 100%;

  button {
    width: 360px;
    height: 45px;
    border: none;
    border-radius: 5px;
    background-color: ${cor_base_2};
    font-size: 20px;
    font-family: "Akrobat ExtraBold";
    position: relative;
    font-weight: 400;
    letter-spacing: 00.05rem;
    // line-height: 90%;
    color: white;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;

    button {
      width: 360px;
      height: 45px;
      border: none;
      border-radius: 5px;
      background-color: ${cor_base_2};
      font-size: 20px;
      font-family: "Akrobat ExtraBold";
      position: relative;
      font-weight: 400;
      letter-spacing: 00.05rem;
      // line-height: 90%;
      color: white;
    }
  }
`
export const DadosProdutosOpcoesEmbalagem = styled(Box)`
  width: 100%;
  height: 800px;
  position: relative;

  // background-color: #F1F2F2;
  background-color: #f9f9f9;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 1300px;
    position: relative;
    background-color: #f9f9f9;
  }
`
export const DadosProdutosOpcoesEmbalagemAvisoEmbalagem = styled(Box)`
  width: 910px;
  height: 180px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  // background-color: yellow;
  P {
    font-size: 25px;
    font-family: "Open sans";
    position: relative;
    color: #5e5e5e;
    top: 15px;
    left: 50px;
  }

  img {
    position: relative;
  }

  @media screen and (max-width: 768px) {
    width: 400px;
    height: 180px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    display: none;
    // background-color: yellow;
    P {
      font-size: 18px;
      font-family: "Open sans";
      position: relative;
      color: #5e5e5e;
      top: 15px;
      left: 50px;
    }

    img {
      width: 400px;
      position: relative;
    }
  }
`
export const DadosProdutosOpcoesEmbalagemAvisoEmbalagemBotaoGratis = styled(Box)`
  width: 235px;
  height: 51px;
  position: absolute;
  background-color: transparent;
  left: 588px;
  top: 71px;
  z-index: 99;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    width: 235px;
    height: 51px;
    position: absolute;
    background-color: transparent;
    left: 188px;
    top: 71px;
    z-index: 99;
    cursor: pointer;
  }
`
export const DadosProdutosOpcoesEmbalagemContentVisual = styled(Box)`
  width: 571px;
  height: 85%;
  // background-color: turquoise;
  @media screen and (max-width: 768px) {
    width: 571px;
    height: 85%;
    display: none;
    // background-color: turquoise;
  }
`
export const DadosProdutosOpcoesEmbalagemContentVisualTitle = styled(Box)`
  width: 100%;
  height: 70px;
  position: relative;
  float: left;
  // background-color: yellowgreen;

  p {
    font-size: 25px;
    font-family: "Open sans";
    position: relative;
    color: #5e5e5e;
    left: 50px;
    top: 10px;
    letter-spacing: 0.05rem;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 70px;
    position: relative;
    float: left;
    // background-color: yellowgreen;

    p {
      font-size: 25px;
      font-family: "Open sans";
      position: relative;
      color: #5e5e5e;
      left: 50px;
      top: 10px;
      letter-spacing: 0.05rem;
    }
  }
`
export const DadosProdutosOpcoesEmbalagemContentVisualTitleImg = styled(Box)`
  width: 571px;
  height: 449px;
  position: relative;
  float: left;

  img {
    width: 571px;
    height: 449px;
  }
  @media screen and (max-width: 768px) {
    width: 571px;
    height: 449px;
    position: relative;
    float: left;

    img {
      width: 571px;
      height: 449px;
    }
  }
`
export const DadosProdutosOpcoesEmbalagemContentDetalhes = styled(Box)`
  width: 331px;
  height: 85%;
  top: 2%;
  // background-color: violet;
  margin-left: 13px;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 85%;
    top: 2%;
    display: none;
    // background-color: violet;
    margin-left: 13px;
  }
`
export const DadosProdutosOpcoesEmbalagemContentDetalhesContent = styled(Box)`
  width: 315px;
  height: 449px;
  position: relative;
  top: 70px;
  // background-color: tomato;
  @media screen and (max-width: 768px) {
    width: 410px;
    height: 449px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    top: 70px;
    // background-color: tomato;
  }
`
export const DadosProdutosOpcoesEmbalagemContentDetalhesContentTitle = styled(Box)`
  width: 290px;
  height: 85px;
  position: relative;
  left: 3%;
  // background-color: rosybrown;

  p {
    font-size: 20px;
    font-family: "Open sans";
    color: #5e5e5e;
  }
  @media screen and (max-width: 768px) {
    width: 250px;
    height: 85px;
    position: relative;
    left: 3%;
    // background-color: rosybrown;

    p {
      font-size: 20px;
      font-family: "Open sans";
      color: #5e5e5e;
    }
  }
`
export const DadosProdutosOpcoesEmbalagemContentDetalhesContentSelecao = styled(Box)`
  width: 300px;
  height: 67px;
  // background-color: burlywood;
  @media screen and (max-width: 768px) {
    width: 300px;
    height: 67px;
    // background-color: burlywood;
  }
`
export const DadosProdutosOpcoesEmbalagemContentDetalhesContentSelecaoContent = styled(Box)`
  width: 100%;
  height: 100%;
  // background-color: cadetblue;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    // background-color: cadetblue;
  }
`
export const DadosProdutosOpcoesEmbalagemContentDetalhesContentSelecaoContentInputSelecao = styled(Box)`
  width: 299px;
  height: 34px;
  position: relative;
  float: left;
  background-color: white;
  border-radius: 3px;
  // border: 0.6px solid rgb(204, 204, 204);
  cursor: pointer;
  margin-top: 0px;

  background-image: url("/images/menu/seta.png");
  background-repeat: no-repeat;
  background-position-x: 95%;
  background-position-y: 12px;
  @media screen and (max-width: 768px) {
    width: 299px;
    height: 34px;
    position: relative;
    float: left;
    background-color: white;
    border-radius: 3px;
    // border: 0.6px solid rgb(204, 204, 204);
    cursor: pointer;
    margin-top: 0px;

    background-image: url("/images/menu/seta.png");
    background-repeat: no-repeat;
    background-position-x: 95%;
    background-position-y: 12px;
  }
`
export const DadosProdutosOpcoesEmbalagemContentDetalhesContentSelecaoContentInputSelecaoTitle = styled(Box)`
  width: 80%;
  height: 100%;
  position: relative;
  left: 3%;
  top: 15%;
  font-size: 15px;
  letter-spacing: 0.06rem;
  font-family: "Akrobat";
  color: rgb(82, 82, 82);
  display: flex;
  justify-content: space-between;

  img {
    width: 16px;
    height: 16px;
    position: relative;
    top: 3px;
  }
  @media screen and (max-width: 768px) {
    width: 80%;
    height: 100%;
    position: relative;
    left: 3%;
    top: 15%;
    font-size: 15px;
    letter-spacing: 0.06rem;
    font-family: "Akrobat";
    color: rgb(82, 82, 82);
    display: flex;
    justify-content: space-between;

    img {
      width: 16px;
      height: 16px;
      position: relative;
      top: 3px;
    }
  }
`
export const DadosProdutosOpcoesEmbalagemContentDetalhesContentSelecaoContentInputSelecaoContent = styled(Box)`
  width: 300px;
  height: 0px;
  position: relative;
  float: left;
  background-color: white;
  top: -5px;
  left: -1px;
  border-radius: 3px;
  // border-left: 0.6px solid rgb(204, 204, 204);
  // border-right: 0.6px solid rgb(204, 204, 204);
  // border-bottom: 0.6px solid rgb(204, 204, 204);
  z-index: 9999;

  p {
    width: 50%;
    height: 30px;
    position: relative;
    left: 10%;
    color: ${cor_base_1};
    text-decoration-line: ${cor_base_1};
  }

  input {
    width: 245px;
    height: 32px;
    border-radius: 0px;
    top: 18px;
    left: 8%;
    position: relative;
    border: 0.6px solid rgb(204, 204, 204);
    outline: none;
  }

  input::-webkit-input-placeholder {
    padding-left: 10px;
    font-family: "Akrobat";
    color: rgb(204, 204, 204);
  }

  ul {
    width: 270px;
    height: 180px;
    position: relative;
    top: 20px;
    // left: 8%;
    // background-color: rgba(95, 158, 160, 0.377);
  }

  li {
    width: 260px;
    height: 35px;
    position: relative;
    margin-top: 5px;
    // background-color: chocolate;
    list-style-type: none;
    left: -33px;

    input {
      width: 10%;
      height: 60%;
      position: relative;
      float: left;
    }

    input[type="checkbox"]:checked:before {
      border-radius: 2px;
      content: "";
      display: block;
      position: relative;
      width: 23px;
      height: 23px;
      left: 0.8px;
      background: url("../images/check-verde.png");
      background-color: white;
      background-size: 100% 100%;
    }

    strong {
      color: rgb(82, 82, 82);
      margin-right: 6px;
    }
    p {
      width: 90%;
      height: 60%;
      position: relative;
      float: left;
      top: 18px;
      left: 25px;
      font-size: 100%;
      // font-family: 'Akrobat';
      // color:rgb(82, 82, 82);

      color: ${cor_base_2};
      font-family: "Akrobat ExtraBold";
      letter-spacing: "0.03rem";
    }

    // img{
    //     // width: 60px;
    //     // height: 70%;
    //     position: relative;
    //     float: left;
    //     top: 14px;
    //     left: 25px;
    // }
  }
  @media screen and (max-width: 768px) {
    width: 300px;
    height: 0px;
    position: relative;
    float: left;
    background-color: white;
    top: -5px;
    left: -1px;
    border-radius: 3px;
    // border-left: 0.6px solid rgb(204, 204, 204);
    // border-right: 0.6px solid rgb(204, 204, 204);
    // border-bottom: 0.6px solid rgb(204, 204, 204);
    z-index: 9999;

    p {
      width: 50%;
      height: 30px;
      position: relative;
      left: 10%;
      color: $cor_base_1;
      text-decoration-line: $cor_base_1;
    }

    input {
      width: 245px;
      height: 32px;
      border-radius: 0px;
      top: 18px;
      left: 8%;
      position: relative;
      border: 0.6px solid rgb(204, 204, 204);
      outline: none;
    }

    input::-webkit-input-placeholder {
      padding-left: 10px;
      font-family: "Akrobat";
      color: rgb(204, 204, 204);
    }

    ul {
      width: 270px;
      height: 180px;
      position: relative;
      top: 20px;
      // left: 8%;
      // background-color: rgba(95, 158, 160, 0.377);
    }

    li {
      width: 260px;
      height: 35px;
      position: relative;
      margin-top: 5px;
      // background-color: chocolate;
      list-style-type: none;
      left: -33px;

      input {
        width: 10%;
        height: 60%;
        position: relative;
        float: left;
      }

      input[type="checkbox"]:checked:before {
        border-radius: 2px;
        content: "";
        display: block;
        position: relative;
        width: 23px;
        height: 23px;
        left: 0.8px;
        background: url("../../images/check-verde.png");
        background-color: white;
        background-size: 100% 100%;
      }

      strong {
        color: rgb(82, 82, 82);
        margin-right: 6px;
      }
      p {
        width: 90%;
        height: 60%;
        position: relative;
        float: left;
        top: 18px;
        left: 25px;
        font-size: 100%;
        // font-family: 'Akrobat';
        // color:rgb(82, 82, 82);

        color: $cor_base_2;
        font-family: "Akrobat extraBold";
        letter-spacing: "0.03rem";
      }

      // img{
      //     // width: 60px;
      //     // height: 70%;
      //     position: relative;
      //     float: left;
      //     top: 14px;
      //     left: 25px;
      // }
    }
  }
`
export const DadosProdutosOpcoesEmbalagemContentDetalhesContentDescricao = styled(Box)`
  width: 100%;
  height: 100px;
  position: relative;
  // background-color: sandybrown;

  p {
    font-size: 15px;
    font-family: "Open sans";
    color: #5e5e5e;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100px;
    position: relative;
    // background-color: sandybrown;

    p {
      font-size: 15px;
      font-family: "Open sans";
      color: #5e5e5e;
    }
  }
`
export const OpcoesEmbalagemContentDetalhesContentCores = styled(Box)`
  width: 300px;
  height: 70px;
  // background-color: burlywood;
  @media screen and (max-width: 768px) {
    width: 300px;
    height: 70px;
    position: relative;
    margin-right: auto;
    margin-left: auto;
    // background-color: burlywood;
  }
`
export const OpcoesEmbalagemContentDetalhesContentCoresContent = styled(Box)`
  width: 100%;
  height: 72px;
  // background-color: cadetblue;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 72px;
    position: relative;
    margin-right: auto;
    margin-left: auto;
    // background-color: cadetblue;
  }
`
export const OpcoesEmbalagemContentDetalhesContentCoresContentTitle = styled(Box)`
  width: 90%;
  height: 25px;
  font-size: 17px;
  position: relative;
  left: 2%;
  font-family: "Akrobat";
  // background-color: cornflowerblue;
  @media screen and (max-width: 768px) {
    width: 90%;
    height: 25px;
    font-size: 17px;
    position: relative;
    left: 2%;
    font-family: "Akrobat";
    // background-color: cornflowerblue;
  }
`
export const OpcoesEmbalagemContentDetalhesContentCoresContentGridCores = styled(Box)`
  width: 100%;
  height: 72px;
  // background-color: crimson;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 72px;
    // background-color: crimson;
  }
`
export const OpcoesEmbalagemContentDetalhesContentCoresContentGridCoresCor = styled(Box)`
  width: 30px;
  height: 30px;
  position: relative;
  float: left;
  margin-left: 2px;
  margin-top: 3px;
  border-radius: 35px;
  background-color: white;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    width: 30px;
    height: 30px;
    position: relative;
    float: left;
    margin-left: 2px;
    margin-top: 3px;
    border-radius: 35px;
    background-color: white;
    cursor: pointer;
  }
`
export const OpcoesEmbalagemContentDetalhesContentCoresContentGridCoresCorCircleOut = styled(Box)`
  width: 30px;
  height: 30px;
  border-radius: 35px;
  // border: 2px solid #8EC505;
  border: 2px solid #f1f1f1;
  cursor: pointer;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 768px) {
    width: 30px;
    height: 30px;
    border-radius: 35px;
    // border: 2px solid #8EC505;
    border: 2px solid #f1f1f1;
    cursor: pointer;
  }
`
export const OpcoesEmbalagemContentDetalhesContentCoresContentGridCoresCorCircleIn = styled(Box)`
  width: 16px;
  height: 16px;
  border-radius: 30px;
  // background-color: #33629E;
  position: relative;
  top: 5px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    width: 16px;
    height: 16px;
    border-radius: 15px;
    // background-color: #33629E;
    position: relative;
    left: 5px;
    top: 4.8px;
    cursor: pointer;
  }
`
export const OpcoesEmbalagemContentDetalhesContentValor = styled(Box)`
  width: 150px;
  height: 63px;
  position: relative;
  float: left;
  top: -5px;
  // background-color: seagreen;

  p {
    font-size: 19px;
    font-family: "Akrobat";
    line-height: 130%;

    strong {
      font-size: 27px;
      position: relative;
      top: 2px;
      font-family: "Akrobat ExtraBold";
      letter-spacing: 0.02rem;
    }
  }

  img {
    width: 50px;
    height: 50px;
    position: relative;
    top: -10px;
  }
  @media screen and (max-width: 768px) {
    width: 150px;
    height: 63px;
    position: relative;
    float: left;
    top: -5px;
    // background-color: seagreen;

    p {
      font-size: 19px;
      font-family: "Akrobat";
      line-height: 130%;

      strong {
        font-size: 27px;
        position: relative;
        top: 2px;
        font-family: "Akrobat extraBold";
        letter-spacing: 0.02rem;
      }
    }

    img {
      width: 50px;
      height: 50px;
      position: relative;
      top: -10px;
    }
  }
`
export const OpcoesEmbalagemContentDetalhesContentQueroCaixa = styled(Box)`
  width: 100%;
  height: 52px;
  position: relative;
  float: left;
  top: 12px;
  // background-color: rgb(230, 21, 219);

  button {
    width: 234px;
    height: 51px;
    border-radius: 5px;
    border: none;
    color: white;
    font-size: 20px;
    position: relative;
    float: left;
    letter-spacing: 0.02rem;
    font-family: "Akrobat";
    background-color: ${cor_base_2};
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 52px;
    position: relative;
    float: left;
    top: 12px;
    // background-color: rgb(230, 21, 219);

    button {
      width: 234px;
      height: 51px;
      border-radius: 5px;
      border: none;
      color: white;
      font-size: 20px;
      position: relative;
      float: left;
      letter-spacing: 0.02rem;
      font-family: "Akrobat";
      background-color: $cor_base_2;
    }
  }
`
export const SiteProdutoContentDescricaoProduto = styled(Box)`
  width: 100%;
  min-height: 170px;
  position: relative;
  float: left;
  top: -120px;
  background-color: white;
  box-shadow: 0px 6px 4px 0px rgba(218, 218, 218, 0.6);
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100px;
    position: relative;
    display: none;
    background-color: white;
    // background-color: sandybrown;
    min-height: 0;
    box-shadow: 0px 6px 4px 0px rgba(218, 218, 218, 0.6);
    p {
      font-size: 15px;
      font-family: "Open sans";
      color: #5e5e5e;
    }
  }
`
export const SiteProdutoContentDescricaoProdutoContent = styled(Box)`
  width: 978px;
  height: 100%;
  position: relative;
  // right: 110px;
  margin-left: auto;
  margin-right: auto;
  right: 1.2rem;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 768px) {
    width: 920px;
    height: 100%;
    position: relative;
    // right: 110px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
    display: none;
  }
`
export const SiteProdutoContentDescricaoProdutoContentDesc = styled(Box)`
  width: 450px;
  height: 100%;
  position: relative;

  img {
    position: relative;
    float: left;
    top: 20%;
  }
  strong {
    // width: 20%;
    position: relative;
    float: left;
    font-size: 18px;
    left: 10px;
    top: 20%;
    font-family: "Akrobat";
  }
  p {
    width: 80%;
    position: relative;
    float: left;
    top: 25%;
    left: -28px;
    font-size: 16px;
    font-family: "Akrobat";
  }
  @media screen and (max-width: 768px) {
    width: 450px;
    height: 100%;
    position: relative;

    img {
      position: relative;
      float: left;
      top: 20%;
    }
    strong {
      // width: 20%;
      position: relative;
      float: left;
      font-size: 18px;
      left: 10px;
      top: 20%;
      font-family: "Akrobat";
    }
    p {
      width: 80%;
      position: relative;
      float: left;
      top: 25%;
      left: -28px;
      font-size: 16px;
      font-family: "Akrobat";
    }
  }
`
export const SiteProdutoContentDescricaoProdutoContentDimensao = styled(Box)`
  width: 470px;
  height: 60%;
  position: relative;
  top: 20%;
  border-left: 2px solid rgb(228, 228, 228);

  img {
    position: relative;
    float: left;
    left: 20px;
  }
  strong {
    // width: 20%;
    position: relative;
    float: left;
    font-size: 18px;
    left: 30px;
    font-family: "Akrobat";
  }
  p {
    // width: 80%;
    position: relative;
    float: left;
    font-size: 16px;
    top: 10px;
    left: 20px;
    font-family: "Akrobat";
  }
`
export const SiteProdutoContentMaisOpcoes = styled(Box)`
  width: 100%;
  height: 600px;
  position: relative;
  top: -100px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const SiteProdutoContentMaisOpcoesContent = styled(Box)`
  width: 980px;
  height: 100%;
  position: relative;
  margin-left: auto;
  margin-right: auto;
`
export const SiteProdutoContentMaisOpcoesContentTopo = styled(Box)`
  width: 100%;
  height: 80px;
  position: relative;
  display: flex;
  justify-content: center;

  img {
    height: 80px;
  }
`
export const SiteProdutoContentMaisOpcoesContentTopoGrid = styled(Box)`
  width: 100%;
  height: 500px;
  position: relative;
  float: left;
  display: flex;
  justify-content: center;
  top: 30px;
`
export const SiteProdutoContentMaisOpcoesContentTopoGridSlide = styled(Box)`
  width: 86%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`
export const ModalTShirt = styled(Modal)``

export const FlexButtonTshirt = styled(Flex)`
  cursor: pointer;
  padding-left: 15px;
  align-items: center;
  margin: 0 auto 0 auto;
  width: 220px;
  height: 45px;
  border-radius: 5px;
  box-shadow: ${(props) =>
    props.isOpen
      ? "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
      : ""};
  background-color: ${(props) => (props.isOpen ? "#E8E8E8" : "")};
  &:active,
  &:focus {
    transform: translateY(2px);
    background-color: #e8e8e8;
  }
  &:before {
    position: absolute;
    top: 0;
    left: -75%;
    z-index: 2;
    display: block;
    content: "";
    width: 100%;
    height: 100%;
    background: -webkit-linear-gradient(left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 100%);
    background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 100%);
    -webkit-transform: skewX(-5deg);
    transform: skewX(-5deg);
    -webkit-animation: shine all ease 3s infinite;
    animation: shine 4s infinite;
  }
  @-webkit-keyframes shine {
    100% {
      left: 300%;
    }
  }
  @keyframes shine {
    100% {
      left: 300%;
    }
  }
`
export const OpcoesEmbalagensContent = styled(Box)`
  width: 100%;
  height: 700px;
  position: relative;
  float: left;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 700px;
    position: relative;
    float: left;
    display: block;
    justify-content: auto;
  }
`

export const OpcoesEmbalagensContentDetalhesMobileQueroCaixa = styled(Box)`
  width: 270px;
  height: 52px;
  display: block;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  top: 12px;
  // background-color: rgb(230, 21, 219);

  button {
    width: 270px;
    height: 51px;
    border-radius: 5px;
    border: none;
    color: white;
    font-size: 20px;
    position: relative;
    float: left;
    letter-spacing: 0.02rem;
    font-family: "Akrobat";
    background-color: #ff4f00;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const OpcoesEmbalagensContentDetalhesMobileContentQueroCaixa = styled(Box)`
  width: 320px;
  height: 250px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  display: block;
  top: 00px;
  // background-color: tomato;
`
export const OpcoesEmbalagensContentDetalhesMobile = styled(Box)`
  width: 100%;
  height: 250px;
  top: 2%;
  display: block;
  position: relative;
  float: left;
  margin-left: auto;
  margin-right: auto;
  // background-color: violet;
  margin-left: 13px;
  display: none;
  @media screen and (max-width: 768px) {
    height: 150px;
    display: block;
  }
`
export const OpcoesEmbalagensContentDetalhesMobileQueroCaixaTitle = styled(Box)`
  width: 250px;
  height: 85px;
  position: relative;
  left: 3%;
  // background-color: rosybrown;

  p {
    font-size: 20px;
    font-family: "Open sans";
    color: #5e5e5e;
  }
`
export const OpcoesEmbalagensContentDetalhesMobileQueroCaixaContentSelecao = styled(Box)`
  width: 300px;
  height: 67px;
  // background-color: burlywood;
`
export const OpcoesEmbalagensContentDetalhesMobileQueroCaixaContentSelecaoContent = styled(Box)`
  width: 100%;
  height: 100%;
  // background-color: cadetblue;
`
export const OpcoesEmbalagensContentDetalhesMobileQueroCaixaContentSelecaoContentInputSelecao = styled(Box)`
  width: 299px;
  height: 34px;
  position: relative;
  float: left;
  background-color: white;
  border-radius: 3px;
  // border: 0.6px solid rgb(204, 204, 204);
  cursor: pointer;
  margin-top: 0px;

  background-image: url("/images/menu/seta.png");
  background-repeat: no-repeat;
  background-position-x: 95%;
  background-position-y: 12px;
`
export const OpcoesEmbalagensContentDetalhesMobileQueroCaixaContentSelecaoContentInputSelecaoTitle = styled(Box)`
  width: 80%;
  height: 100%;
  position: relative;
  left: 3%;
  top: 15%;
  font-size: 15px;
  letter-spacing: 0.06rem;
  font-family: "Akrobat";
  color: rgb(82, 82, 82);
  display: flex;
  justify-content: space-between;

  img {
    width: 16px;
    height: 16px;
    position: relative;
    top: 3px;
  }
`
export const OpcoesEmbalagensContentDetalhesMobileQueroCaixaContentSelecaoContentInputSelecaoContent = styled(Box)`
  width: 300px;
  height: 0px;
  position: relative;
  float: left;
  background-color: white;
  top: -5px;
  left: -1px;
  border-radius: 3px;
  // border-left: 0.6px solid rgb(204, 204, 204);
  // border-right: 0.6px solid rgb(204, 204, 204);
  // border-bottom: 0.6px solid rgb(204, 204, 204);
  z-index: 9999;

  p {
    width: 50%;
    height: 30px;
    position: relative;
    left: 10%;
    color: ${cor_base_1};
    text-decoration-line: ${cor_base_1};
  }

  input {
    width: 245px;
    height: 32px;
    border-radius: 0px;
    top: 18px;
    left: 8%;
    position: relative;
    border: 0.6px solid rgb(204, 204, 204);
    outline: none;
  }

  input::-webkit-input-placeholder {
    padding-left: 10px;
    font-family: "Akrobat";
    color: rgb(204, 204, 204);
  }

  ul {
    width: 270px;
    height: 180px;
    position: relative;
    top: 20px;
    // left: 8%;
    // background-color: rgba(95, 158, 160, 0.377);
  }

  li {
    width: 260px;
    height: 35px;
    position: relative;
    margin-top: 5px;
    // background-color: chocolate;
    list-style-type: none;
    left: -33px;

    input {
      width: 10%;
      height: 60%;
      position: relative;
      float: left;
    }

    input[type="checkbox"]:checked:before {
      border-radius: 2px;
      content: "";
      display: block;
      position: relative;
      width: 23px;
      height: 23px;
      left: 0.8px;
      background: url("../images/check-verde.png");
      background-color: white;
      background-size: 100% 100%;
    }

    strong {
      color: rgb(82, 82, 82);
      margin-right: 6px;
    }
    p {
      width: 90%;
      height: 60%;
      position: relative;
      float: left;
      top: 18px;
      left: 25px;
      font-size: 100%;
      // font-family: 'Akrobat';
      // color:rgb(82, 82, 82);

      color: ${cor_base_2};
      font-family: "Akrobat Extrabold";
      letter-spacing: "0.03rem";
    }

    // img{
    //     // width: 60px;
    //     // height: 70%;
    //     position: relative;
    //     float: left;
    //     top: 14px;
    //     left: 25px;
    // }
  }
`
export const OpcoesEmbalagensContentDetalhesMobileQueroCaixaContentSelecaoContentInputSelecaoContentValor = styled(Box)`
  width: 150px;
  height: 63px;
  position: relative;
  // float: left;
  margin-left: auto;
  margin-right: auto;
  top: -5px;
  left: -20px;
  text-align: center;
  // background-color: seagreen;

  p {
    font-size: 19px;
    font-family: "Akrobat";
    line-height: 130%;

    strong {
      font-size: 27px;
      position: relative;
      top: 2px;
      font-family: "Akrobat extraBold";
      letter-spacing: 0.02rem;
    }
  }

  img {
    width: 50px;
    height: 50px;
    position: relative;
    top: -10px;
  }
`

export const FooterText = styled.div`
  width: 100%;
  min-width: 960px;
  height: auto;
  margin-bottom: 25px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 370px;
    min-width: 350px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0px;
  }
  @media screen and (max-width: 380px) {
    width: 100vw;
    min-width: 350px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
  }
`

export const FooterTextContent = styled.div`
  width: 100%;
  height: auto;
  background: rgba(255, 255, 255, 1);
  padding: 15px;
  font-family: "Helvetica Neue LT Light";
  color: gray;
  margin-bottom: -25px;
  strong {
    font-family: "Helvetica Rounded Bold";
  }
  p {
    margin-left: auto;
    margin-right: auto;
    max-width: 960px;
  }
  a {
    text-decoration: none;
    color: gray;
    font-family: "Helvetica Rounded Bold";
  }

  @media screen and (max-width: 768px) {
    width: 370px;
    margin-top: 65px;
  }

  @media screen and (max-width: 400px) {
    p {
      font-size: 10px;
    }
  }
`

export const FlexCheckedPassos2 = styled(Flex)`
  align-items: center;
  height: 40px;
  width: 100%;
  justify-content: flex-start;
  padding-left: 32px;

  input::-webkit-input-placeholder {
    font-family: "Akrobat";
    color: rgb(204, 204, 204);
  }

  input {
    margin-left: -40px;
    width: 40px;
    height: 60%;
    position: relative;
    cursor: pointer;
  }

  input[type="radio"]:checked:before {
    content: "";
    display: block;
    margin-left: 47px;

    position: relative;
    width: 26px;
    height: 26px;
    border-radius: 15px;
    background: url("../images/ok.png");
    background-color: white;
    border: none;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    top: -1px;
    left: -40.5px;
  }

  @media screen and (max-width: 768px) {
    align-items: center;
    height: 40px;
    justify-content: flex-start;

    input::-webkit-input-placeholder {
      font-family: "Akrobat";
      color: rgb(204, 204, 204);
    }

    input {
      margin-left: -40px;
      width: 40px;
      height: 60%;
      position: relative;
      cursor: pointer;
    }

    input[type="radio"]:checked:before {
      content: "";
      display: block;
      margin-left: 37px;

      position: relative;
      width: 26px;
      height: 26px;
      border-radius: 15px;
      background: url("../images/ok.png");
      background-color: white;
      border: none;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      top: -1px;
      left: -31px;
    }
  }
`
export const FlexCheckedPassos = styled.div`
  align-items: center;
  height: 30px;
  width: 20px;
  display: flex;
  z-index: 999;
  flex-direction: row;
  input::-webkit-input-placeholder {
    font-family: "Akrobat";
    color: rgb(204, 204, 204);
  }

  input {
    width: 20px;
    height: 20px;
    position: relative;
    cursor: pointer;
  }

  input[type="radio"]:checked:before {
    content: "";
    display: block;
    position: relative;
    width: 21px;
    height: 21px;
    border-radius: 15px;
    background: url("../images/ok.png");
    background-color: white;
    border: none;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    top: -1px;
    left: -0.5px;
  }
`
export const LiContainerCheckbox = styled(Flex)`
  list-style-type: none;
  height: 40px;
  align-items: center;
  border-bottom: 1px solid gray;
  width: 400px;
  &:last-child {
    border-bottom: none;
  }
  @media screen and (max-width: 1366px) {
    width: 90%;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`

export const LiContainerCheckboxGrid = styled.div`
  width: 350px;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 20px;
  h1 {
    font-size: 12px;
    font-family: "Open sans";
  }
`

export const ContainerGotas = styled.div`
  margin-left: 15px;
  height: 25px;
  width: 25px;
  border-color: black;
  border: 1px solid black;
  margin-top: 5px;
  border-radius: 0% 50% 50% 50%;
  transform: rotate(45deg);
  p {
    transform: rotate(-45deg);
    padding-left: 8px;
  }
`
export const ContainerGotasSemLimites = styled.div`
  background: linear-gradient(90deg, rgba(242, 18, 7, 1) 0%, rgba(0, 146, 255, 1) 100%);
  margin-left: 15px;
  height: 25px;
  width: 25px;
  border-radius: 0% 50% 50% 50%;
  transform: rotate(45deg);
  box-shadow: inset -25px 10px 0px -10px linear-gradient(90deg, rgba(242, 18, 7, 1) 0%, rgba(0, 146, 255, 1) 100%);
`
export const FlexContainerProdutos = styled(Flex)`
  padding-top: 10px;
  justify-content: space-evenly;
  height: 895px;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  width: 1330px;
  background: white;

  @media screen and (max-width: 1366px) {
    transition: 0.3s;
  }
  @media screen and (max-height: 780px) {
    transition: 0.3s;
  }
  @media screen and (max-width: 1024px) {
    /* zoom:80%; */
    transition: 0.3s;
    /* width:100%; */
  }
  @media screen and (max-width: 768px) {
    height: auto;
    overflow: hidden;
    width: 100%;
    min-height: 1200px;
    background-color: white;
  }
`
export const FlexContainerProdutoColumnRow = styled(Flex)`
  width: 975px;
  height: auto;
  border-radius: 5px;
  flex-direction: row;
  margin-bottom: 15px;
  @media screen and (max-width: 1366px) {
    margin-right: 10px;
    width: 975px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
    border-radius: 15px;
    box-shadow: 5px 5px 8px 5px white;
    flex-direction: column;
    margin-top: -35px;
  }
`
export const DivComponentDesktop = styled(Box)`
  display: block;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const ComponentGridMaisOfertas = styled(Box)`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 10px;
  @media screen and (max-width: 768px) {
    /* display: none; */
  }
`
export const ComponentDesktopTitle = styled(Box)`
  width: 100%;
  height: 80px;
  /* background-color:white; */
  display: flex;
  justify-content: center;
  margin-top: 25px;
  img {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    display: block;
    object-fit: scale-down;
  }
  display: block;
  @media screen and (max-width: 768px) {
    /* display: none; */
  }
`

export const GridMaisOfertas = styled(Grid)`
  width: 900px;
  height: auto;
  overflow: hidden;
  grid-template-columns: repeat(auto-fill, 220px);
  margin-bottom: 10px;
  padding-left: 8px;
  padding-top: 20px;

  @media screen and (max-width: 768px) {
    width: 410px;
    grid-template-columns: repeat(auto-fill, 200px);
  }
  @media screen and (max-width: 410px) {
    width: 100vw;
    padding-left: 0px;
    grid-template-columns: repeat(auto-fill, 182px);
  }
`

export const TextPasso4 = styled(Text)`
  font-size: 15px;
  margin-left: 15px;
  strong {
    margin-left: 5px;
  }
  @media screen and (max-width: 1366px) {
    font-size: 14px;
    margin-left: 15px;
  }
  @media screen and (max-width: 768px) {
    margin-left: 10px;
    font-size: 13px;
    strong {
      font-size: 12px;
    }
  }
`
export const TextPasso5 = styled(Text)`
  font-size: 18px;
  @media screen and (max-width: 1366px) {
    font-size: 9px;
  }
  @media screen and (max-width: 768px) {
    font-size: 9px;
  }
`
export const DivComponentMobile = styled(Box)`
  height: ${(props) => (props.heigth ? props.heigth : "auto")};
  display: none;
  padding-top: 10px;
  h1 {
    height: "30px";
    padding-left: "20px";
    padding-top: "38px";
    font-size: "21px";
    margin-top: "10px";
    text-align: "center";
    font-family: "Open sans";
    strong {
      color: "red";
    }
  }

  p {
    padding-left: "20px";
    margin-top: "-18px";
    font-size: "18px";
    text-align: "center";
    font-family: "Open sans";
  }
  /* p{
    pl='20px' mt='-15px' fontSize="18px" textAlign='center'  fontFamily={'Gisha'}
  } */
  @media screen and (max-width: 768px) {
    width: 100vw;
    display: block;
    h1 {
      height: 30px;
      font-size: 21px;
      margin-top: 10px;
      strong {
        color: "red";
      }
    }

    p {
    }
  }
  @media screen and (max-width: 380px) {
    width: 100vw;
    h1 {
      background-color: "red";
      strong {
        font-size: "18px";
      }
    }
  }
`

export const DivComponentMobile2 = styled(Box)`
  display: none;

  @media screen and (max-width: 768px) {
    width: 100vw;
    display: flex;
    flex-direction: column;
    h1 {
      height: 30px;
      font-size: 21px;
      margin-top: 10px;
      strong {
        color: "red";
      }
    }

    p {
    }
  }
  @media screen and (max-width: 380px) {
    width: 100vw;
    h1 {
      background-color: "red";
      strong {
        font-size: "18px";
      }
    }
  }
`
export const FlexContainerComponentProduto = styled(Flex)`
  padding-top: 0px;
  width: 100%;
  flex-direction: column;
  height: 450px;
  @media screen and (max-width: 768px) {
    padding-top: 25px;
    width: 100vw;
    flex-direction: column;
    height: 450px;
  }
`
export const FlexContainerComponentProdutoBoxImage = styled(Box)`
  border-radius: 10px;
  border: 1px solid #dbdbdb;
  position: relative;
  margin-right: auto;
  margin-left: auto;
  margin-top: -26px;
  left: -10px;
  width: 400px;
  height: 500px;
  @media screen and (max-width: 768px) {
    width: 400px;
    margin-top: 30px;
    height: 370px;
    border: none;
    position: relative;
    margin-right: auto;
    margin-left: auto;
  }
  @media screen and (max-width: 500px) {
    width: 100vw;
    margin-top: 30px;
    height: 370px;
    border: none;
    position: relative;
    margin-right: auto;
    margin-left: auto;
  }
`
export const FlexContainerComponentProdutoImage = styled(Image)`
  width: 375px;
  height: 292px;
  display: block;
  border-radius: 8px;
  @media screen and (max-width: 768px) {
    height: 250px;
  }
`
export const FlexContainerComponentProdutoBoxImageMotion = styled(motion(Box))`
  margin-right: auto;
  margin-left: auto;
  width: 850px;
  height: auto;
  @media screen and (max-width: 1366px) {
    width: 850px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 225px;
  }
`
export const FlexContainerComponentProdutoImageMotion = styled(motion(Image))`
  margin-right: auto;
  margin-left: auto;
  width: auto;
  height: 570px;
  @media screen and (max-width: 768px) {
    height: 198px;
  }
`
export const FlexContainerComponentPassos = styled(Box)`
  color: #414042;
  width: 100%;
  height: 500px;
  @media screen and (max-width: 768px) {
    min-height: 200px;
    /* width:400px; */
    height: auto;
    margin: -90px auto 0 auto;
  }
`
export const ContainerAccordion = styled(Accordion)`
  width: 472px;
  margin-top: 0px;
  border-color: white;
  height: 470px;
  font-family: "Open sans";

  @media screen and (max-width: 1024px) {
    width: 430px;
  }
  @media screen and (max-width: 768px) {
    width: 100vw;
    height: auto;
    margin: 0 auto;
  }
`
export const ContainerAccordionFlex = styled(Flex)`
  width: 468px;
  @media screen and (max-width: 1024px) {
    width: 400px;
  }
  @media screen and (max-width: 768px) {
    width: 100vw;
  }
`
export const ContainerAccordionBox = styled(Box)`
  width: 468px;
  @media screen and (max-width: 1024px) {
    width: 400px;
  }
  @media screen and (max-width: 768px) {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    width: 99vw;
  }
`
export const ContainerAccordionItem = styled(AccordionItem)`
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`

export const BoxPassoFlex = styled.div`
  width: 100%;
  color: #414042;
  display: flex;
  justify-content: space-between;
`

export const BoxPassoFlexTitle = styled.p`
  font-size: ${(props) => (props.mobileIphoneView ? "14px" : "16px")};
  height: ${(props) => (props.mobileIphoneView ? "20px" : "")};
  margin-top: ${(props) => (props.mt ? props.mt : "15px")};
  color: ${(props) => (props.color ? props.color : "")};
`

export const BoxIcon = styled.div`
  width: ${(props) => (props.boxSize ? props.boxSize : "auto")};
  height: ${(props) => (props.boxSize ? props.boxSize : "auto")};
  margin-top: ${(props) => (props.mt ? props.mt : "none")};
  margin-left: ${(props) => (props.ml ? props.ml : "none")};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : "none")};
  border: ${(props) => (props.border ? props.border : "none")};
`

export const BoxEdition = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContainerAccordionPanel = styled(AccordionPanel)`
  @media screen and (max-width: 1024px) {
    width: 400px;
  }
  @media screen and (max-width: 600px) {
    width: 100vw;
  }
`
export const ContainerPdfFlex = styled(Flex)`
  font-family: "Open Sans, sans-serif!important";
  flex-direction: column;
  max-height: 600px;
  width: 320px;
  @media screen and (max-width: 1366px) {
    margin-right: 65px;
  }
  @media screen and (max-width: 1280px) {
    margin-right: 65px;
  }
  @media screen and (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
    width: 400px;
    margin-top: 20px;
  }
  @media screen and (max-width: 400px) {
    margin-left: auto;
    margin-right: auto;
    width: 100vw;
    margin-top: 20px;
  }
`

export const ControleSlide = styled.div`
  width: 80px;
`

export const ImgSlide = styled.img`
  width: 45px;
  height: 45px;
  transition: 0.3s;
  &:hover {
    transform: scale(1.05, 1.05);
    transition: 0.3s;
  }
`

export const CardProdCores = styled(Box)`
  width: 180px;
  height: 30px;
  display: block;
  position: absolute;
  float: left;
  margin-top: 10px;
  background-color: transparent;
  // background-color: #f05423;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 108px;
    display: block;
    position: relative;
    float: left;
    margin-top: 10px;
    // background-color: #f05423;
  }
`
export const CardProdCoresTitle = styled(Box)`
  width: 100%;
  height: 18px;
  position: relative;
  // background-color: aqua;

  p {
    width: 174px;
    height: 100%;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    font-size: 12.5px;
    font-family: "Akrobat";
    text-align: left;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 18px;
    position: relative;
    // background-color: aqua;

    p {
      width: 174px;
      height: 100%;
      position: relative;
      margin-left: auto;
      margin-right: auto;
      font-size: 12.5px;
      font-family: "Akrobat";
      text-align: left;
    }
  }
`
export const CardProdCoresGridCores = styled(Grid)`
  width: 100%;
  height: 45px;
  position: absolute;
  float: left;
  background-color: transparent;
  top: -30px;
  padding-left: 25px;
  grid-template-columns: repeat(auto-fill, 18px);
  // background-color: rgb(238, 144, 30);
`
export const CardProdCoresGridCoresContent = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  left: 10px;
  z-index: -1;
  // background-color: rgba(165, 42, 42, 0.349)
`
export const CardProdCoresGridCoresContentCor = styled(Box)`
  width: 14px;
  height: 14px;
  position: relative;
  float: left;
  margin-left: 6px;
  margin-top: 6px;
  border-radius: 14px;

  .tooltip-inner {
    background-color: #00acd6 !important;
    /*!important is not necessary if you place custom.css at the end of your css calls. For the purpose of this demo, it seems to be required in SO snippet*/
    color: #fff;
  }
`
export const Selo = styled(Box)`
  width: 90px;
  height: 18px;
  left: 120px;
  background-color: ${(props) => (props.idx % 2 == 0 ? cor_base_2 : "#16A9F6")};
  font-size: 9px;
  padding-top: 2.5px;
  font-family: "Gisha Bold";
  text-align: center;
  color: white;
  letter-spacing: 0.03rem;
`

export const SeloEmbalagem = styled(Box)`
  width: 196px;
  height: 68px;
  background-image: url("/images/menu/EMBALAGEM-ESPECIAL.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  // background-color: burlywood;
  @media screen and (max-width: 768px) {
    width: 166px;
    height: 48px;
    position: absolute;
    top: 201px;
    background-image: url("/images/menu/EMBALAGEM-ESPECIAL.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    // background-color: burlywood;
  }
`
export const BoxOrcamento = styled(Box)`
  border-radius: 5px;
  box-shadow: 1px 1px 3px 1px #bebed1;
  background-color: white;

  @media screen and (max-width: 768px) {
    box-shadow: none;
  }
`
export const BoxFormularioOrcamento = styled(Box)`
  min-height: 400px;
  margin-top: 4;

  @media screen and (max-width: 768px) {
    min-height: 610px;
  }
`
export const ContainerBoxOrcamentoRapido = styled(Box)`
  color: #414042;
  border-radius: 5px;
  background-color: #fff;
  margin-bottom: 15px;
  width: 320px;
  box-shadow: 1px 1px 3px 1px #bebed1;
  height: auto;
  //max-height: 380px;
  animation: swing-in-top-fwd 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
  @keyframes swing-in-top-fwd {
    0% {
      transform: rotateX(-100deg);
      transform-origin: top;
      opacity: 0;
    }
    100% {
      transform: rotateX(0deg);
      transform-origin: top;
      opacity: 1;
    }
  }
  @media screen and (max-width: 768px) {
    box-shadow: 1px 1px 3px 1px #f5f5f5;
    max-height: none;
    width: 400px;
  }
  @media screen and (max-width: 400px) {
    width: 100vw;
  }
`
export const ButtonPDFPadrao = styled(Button)`
  padding-block: 1rem;

  &:hover {
    filter: brightness(1.1);
  }

  @media screen and (max-width: 768px) {
    width: 360px;
    height: 70px;
    font-size: 22px;
  }
`

export const ComponentFormIndisponivelContainer = styled.div`
  height: 600px;
  width: 400px;
  background-color: white;
  margin-top: -2px;
  z-index: 3;
  height: ${(props) => `${props.require_razao ? "600px" : "550px"}`};
  @media screen and (max-width: 1366px) {
    height: ${(props) => `${props.require_razao ? "530px" : "490px"}`};
  }
`
export const ComponentVStackContainer = styled(VStack)`
  margin-top: 25px;
  width: 90%;
  @media screen and (max-width: 1366px) {
    margin-top: -5px;
  }
`
export const ImageCamisaTabela = styled(Image)`
  width: 220px;
  height: 250px;
  animation: swing-in-top-fwd 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.2s both;

  @keyframes swing-in-top-fwd {
    0% {
      transform: rotateX(-100deg);
      transform-origin: top;
      opacity: 0;
    }
    100% {
      transform: rotateX(0deg);
      transform-origin: top;
      opacity: 1;
    }
  }
`
export const FlexTableHead = styled(Flex)`
  font-size: 14px;
  padding-left: 10px;
  padding-top: 12px;
  color: white;
  justify-content: space-around;
  text-align: center;
  margin: 5px 0 0 15px;
  width: 470px;
  height: 50px;
  background-color: #ff4f00;
  animation: has-shown 1s cubic-bezier(0.785, 0.135, 0.15, 0.86) forwards;

  @keyframes has-shown {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }
  @media screen and (max-width: 768px) {
    font-size: 12px;
    padding-top: 15px;
    padding-left: 5px;
    margin: 5px auto 0 auto;
    width: 100%;
  }
`
export const FlexTableBody = styled(Flex)`
  font-size: 14px;
  padding-left: 10px;
  justify-content: space-around;
  color: black;
  text-align: center;
  margin: 5px 0 0 15px;
  width: 470px;
  height: 40px;
  animation: has-shown 1s cubic-bezier(0.785, 0.135, 0.15, 0.86) 100ms forwards;

  @keyframes has-shown {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }
  @media screen and (max-width: 768px) {
    font-size: 12px;
    padding-left: 5px;
    margin: 5px auto 0 auto;
    width: 100%;
  }
`
export const FlexTableTitle = styled(Text)`
  font-size: 14px;
  text-align: center;
  color: black;
  animation: slit-in-vertical 0.45s ease-out both;

  @keyframes slit-in-vertical {
    0% {
      transform: translateZ(-800px) rotateY(90deg);
      opacity: 0;
    }
    54% {
      transform: translateZ(-160px) rotateY(87deg);
      opacity: 1;
    }
    100% {
      transform: translateZ(0) rotateY(0);
    }
  }
`

export const FlexTableFooter = styled(Text)`
  font-size: 14px;
  color: gray;
  animation: slit-in-vertical 0.45s ease-out both;
  width: 100%;

  @keyframes slit-in-vertical {
    0% {
      transform: translateZ(-800px) rotateY(90deg);
      opacity: 0;
    }
    54% {
      transform: translateZ(-160px) rotateY(87deg);
      opacity: 1;
    }
    100% {
      transform: translateZ(0) rotateY(0);
    }
  }
`
export const FlexTamanhoCamisaPassos = styled(Flex)`
  margin: -10px 5px 0 0;
  font-size: 12px;
  p:nth-child(1) {
    margin-left: 0;
  }
  p {
    margin-left: 5px;
  }
  @media screen and (max-width: 768px) {
    margin: -10px 0 0 0;
    font-size: 9px;
  }
`
export const ModalHeaderTitle = styled(ModalHeader)`
  animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.61, 0.355, 1) both;
  @keyframes tracking-in-expand {
    0% {
      letter-spacing: -0.5em;
      opacity: 0;
    }
    40% {
      opacity: 0.6;
    }
    100% {
      opacity: 1;
    }
  }
`
export const ReactInputMaskRazaoSocial = styled(ReactInputMask)`
  background-color: #f5f5f5;
  height: 40px;
  border: 0.3px solid rgb(0, 0, 0, 0.1);
  border-radius: 5px;
  padding-left: 15px;
  outline: none;
  animation: ${(props) =>
    `${
      props.require_razao
        ? "swing-in-top-fwd 0.8s cubic-bezier(0.175, 0.885, 0.320, 1.275) both"
        : "swing-in-bottom-bck 0.8s cubic-bezier(0.175, 0.885, 0.320, 1.275) both"
    }`};

  @keyframes swing-in-top-fwd {
    0% {
      transform: rotateX(-100deg);
      transform-origin: top;
      opacity: 0;
    }
    100% {
      transform: rotateX(0deg);
      transform-origin: top;
      opacity: 1;
    }
  }

  @keyframes swing-in-bottom-bck {
    0% {
      transform: rotateX(-70deg);
      transform-origin: bottom;
      opacity: 0;
    }
    100% {
      transform: rotateX(0);
      transform-origin: bottom;
      opacity: 1;
    }
  }

  @media screen and (max-width: 768px) {
  }
`
