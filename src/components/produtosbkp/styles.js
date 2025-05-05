import { Box } from "@chakra-ui/react";
import styled from "styled-components";
import { cor_base_1, cor_base_2 } from "../../services/cores";

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
    left:0;
    width: 100%;
    height: 100%;
    z-index: 99999999999;
    background-color: rgba(0, 0, 0, 0.603);
  }
`;
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
                .carousel-inner{
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
        height:111px;
        width:141px;
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
`;
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

    button{
        width: 50px;
        height: 40px;
        font-size: 16px;
        font-family: 'Akrobat Bold';
        border: none;
        border-radius: 4px;
        background-color: transparent;
    }
  }
`;
export const SiteProduto = styled(Box)`
margin-bottom:12rem;
`;
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
`;
export const SiteProdutoContentDadosProdutos = styled(Box)`
  width: 100%;
  min-width: 920px;
  height: 800px;
  top: -3vw;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  background-color: #F1F2F2;
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
`;
export const DadosProdutosLoading = styled(Box)`
  width: 100%;
  height: 150%;
  position: absolute;
  background-color: white;
  top: -10%;
  z-index: 99999;

  img {
    width: 100px;
    height:100px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    /* left: 44%; */
    top: 15%;
  }
  @media screen and (max-width: 768px){
    width: 100%;
    height: 150%;
    position: absolute;
    background-color: white;
    top: -10%;
    z-index: 99999;
    
    img{
        width: 100px;
        height: 100px;
        position: relative;
        margin-left: auto;
        margin-right: auto;
        top: 15%;
    }
  }
`;
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
  `;
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
    h1{
        width: 100%;
        color: white;
        font-family: 'Akrobat SemiBold';
        font-size: .9rem;
        letter-spacing: 0.06rem;
        position: relative;
        top: 30%;
        left: 1rem;
    }
  }
  `;
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
    img{
        position: relative;
        left: 2px;
        top: 5px;
    }
  }
`;
export const DadosProdutosContent = styled.div`
  width: 1050px;
  height: 700px;
  position: relative;
  margin-left:auto;
  margin-right:auto;
  display: flex;
  justify-content: center;
  background-color: #F1F2F2;

  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 400px;
    height: 1200px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    display: block;
    justify-content: none;
    background-color: #F1F2F2;
  }
  
`;
export const DadosProdutosContentSlideImg = styled(Box)`
  width: 600px;
  height: 85%;
  margin-top:15px;
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


    #carouselExampleDark .carousel-indicators{
        width: 390px;
        height: 160px;
        left: -60px;
        top: 100%;
        overflow-y: hidden;
        overflow-y: hidden;
    }
    
    #carouselExampleDark .carousel-indicators img{
        // width:100%;
        // height:100%;
        height:111px;
        width:141px;
        position: relative;
        left: 60px;
    }
    
    .carousel-indicators::-webkit-scrollbar{
        background-color: white;
        height: 0.8em;
    }
    
    .carousel-indicators::-webkit-scrollbar-thumb{
        background-color: #d1d1d1;
        border-radius: 15px;
    }
    .carousel-indicators::-webkit-scrollbar-thumb:hover{
        transition: 1s;
        background-color: #d1d1d1;
    }
    
    .carousel-inner{
        cursor: pointer;
    }
}
`;
export const DadosProdutosContentDetalhesIndisponivel = styled(Box)`
  width: 400px;
  height: 467px;
  position: relative;
  float: left;
  top: 2%;
  background-color: #ffffff;
  margin-left: 13px;
  border-radius: 3px;
`;
export const DadosProdutosContentDetalhesIndisponivelContent = styled(Box)`
  width: 90%;
  height: 450px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  // background-color: #70f800;
`;
export const DetalhesIndisponivelContentHeader = styled(Box)`
  width: 100%;
  height: 125px;
  position: relative;
  margin-top: 5%;
  // background-color: #afafaf;
`;
export const DetalhesIndisponivelContentHeaderImg = styled(Box)`
  width: 230px;
  height: 30px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
`;
export const DetalhesIndisponivelContentHeaderDesc = styled(Box)`
  width: 100%;
  height: 90px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5px;
  // background-color: aquamarine;

  h3 {
    font-size: 20px;
    font-family: "Gisha";
    color: rgb(82, 82, 82);
  }
`;
export const DetalhesIndisponivelContentForm = styled(Box)`
  width: 100%;
  height: 300px;
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
    font-family: "Gisha";
    color: rgb(82, 82, 82);
  }
`;
export const DetalhesIndisponivelContentFormAvise = styled.button`
  width: 100%;
  height: 45px;
  position: relative;
  border: none;
  border-radius: 3px;
  font-size: 16px;
  font-family: "Gisha";
  color: white;
  margin-top: 20px;
  background-color: ${cor_base_1};
`;
export const DetalhesIndisponivelContentFormSimilares = styled.button`
  width: 100%;
  height: 45px;
  position: relative;
  border: 0.6px solid rgb(82, 82, 82);
  border-radius: 3px;
  font-size: 16px;
  font-family: "Gisha";
  color: rgb(82, 82, 82);
  margin-top: 20px;
  background-color: white;
`;
export const DetalhesIndisponivelContentDetalhes = styled(Box)`
  width: 400px;
  height: 680px;
  position: relative;
  margin-left: auto;
  margin-right:auto;
  float: left;
  top: 2%;
  /* background-color: red; */
  /* background-color: #F8AC00; */
  /* margin-left: 13px; */

  @media screen and (max-width:768px) {
    /* background-color:blue; */
  }
`;
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
`;
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
`;
export const DetalhesIndisponivelContentDetalhesCoresContentTitle = styled(Box)`
  width: 90%;
  height: 25px;
  font-size: 14px;
  position: relative;
  left: 2%;
  font-family: "Akrobat";
  // background-color: cornflowerblue;
`;
export const DetalhesIndisponivelContentDetalhesCoresGridCores = styled(Box)`
  width: 90%;
  height: 72px;
  // background-color: crimson;
`;
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
`;
export const DetalhesIndisponivelContentDetalhesCoresGridCoresCircleOut = styled( Box)`
  width: 30px;
  height: 30px;
  border-radius: 35px;
  // border: 2px solid #8EC505;
  border: 2px solid #f1f1f1;
  cursor: pointer;
  // display: flex;
  // justify-content: center;
  // align-items: center;
`;
export const DetalhesIndisponivelContentDetalhesCoresGridCoresCircleIn = styled(Box)`
  width: 16px;
  height: 16px;
  border-radius: 15px;
  // background-color: #33629E;
  position: relative;
  left: 5px;
  top: 4.8px;
  cursor: pointer;
`;
export const DetalhesIndisponivelContentDetalhesCoresGridCoresCircleInOff = styled( Box)`
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
`;
export const DetalhesIndisponivelContentDetalhesCoresContentCorSelecionada = styled( Box)`
  width: 90%;
  height: 20px;
  font-size: 14px;
  position: relative;
  left: 2%;
  font-family: "Akrobat";

  // background-color: cornflowerblue;
`;
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
    white-space:nowrap;
  }
  span {
    width: 170px;
    font-size: 12px;
    color: #777777;
    position: relative;
    top: -7px;
  }
  // background-color: cornflowerblue;
`;
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
`;
export const DetalhesIndisponivelContentDetalhesGravacaoContent = styled(Box)`
  width: 100%;
  height: 100%;
  // background-color: cadetblue;
`;
export const DetalhesIndisponivelContentDetalhesGravacaoContentDesc = styled( Box)`
  width: 360px;
  height: 30px;
  position: relative;
  border-top: 0.4px solid rgb(225, 225, 225);
  border-left: 0.4px solid rgb(225, 225, 225);
  border-right: 0.4px solid rgb(225, 225, 225);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  // background-color: white;
  background: linear-gradient(
    to top,
    rgb(231, 231, 231),
    rgb(248, 248, 248),
    white
  );

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
    background: linear-gradient(to top, rgb(231, 231, 231),rgb(248, 248, 248),white);

    p{
        font-size: 14px;
        font-family: 'Akrobat';
        position: relative;
        left: 18px;
        top: 5px;
    }
  }
`;
export const DetalhesIndisponivelContentDetalhesGravacaoContentInputGravacao = styled( Box)`
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
`;
export const DetalhesIndisponivelContentDetalhesGravacaoContentInputGravacaoTitle = styled( Box)`
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
    font-family: 'Akrobat';
    color:rgb(82, 82, 82);
    display: flex;
    justify-content: space-between;

    img{
        width: 16px;
        height: 16px;
        position: relative;
        top: 5px;
    }
  }
`;
export const DetalhesIndisponivelContentDetalhesGravacaoContentInputGravacaoContent = styled(  Box)`
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
    left:-1px;

    border-left: 0.6px solid rgb(160, 160, 160);
    border-right: 0.6px solid rgb(160, 160, 160);
    border-bottom: 0.6px solid rgb(160, 160, 160);

    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    
    z-index: 9999;

    a{
        position: relative;
        top: -20px;
    }

    p{
        width: 50%;
        height: 30px;
        position: relative;
        left: 10%;
        color:rgb(82, 82, 82);
        text-decoration-line:rgb(82, 82, 82);
    }

    input{
        width: 245px;
        height: 32px;
        border-radius: 0px;
        top: 18px;
        left: 8%;
        position: relative;
        border: 0.6px solid rgb(204, 204, 204);
        outline: none;
    }

    input::-webkit-input-placeholder{
        padding-left: 10px;
        font-family: 'Akrobat';
        color: rgb(204, 204, 204);
    }

    ul{
        width: 270px;
        height: 180px;
        position: relative;
        top: 18px;
        // left: 8%;
        // background-color: rgba(95, 158, 160, 0.377);
    }
    
    li{
        width: 225px;
        height: 35px;
        position: relative;
        margin-top: 5px;
        // background-color: chocolate;
        list-style-type: none;
        left: -33px;

        input{
            width: 15%;
            height: 60%;
            position: relative;
            float: left;
        }

        input[type=checkbox]:checked:before {
            border-radius: 2px;
            content: "";
            display: block;
            position: relative;
            width: 23px;
            height: 23px;
            left: 5px;
            background: url('/images/menu/check-verde.png');
            background-color: white;
            background-size: 100% 100%;
        }

        p{
            width: 85%;
            height: 60%;
            position: relative;
            float: left;
            top: 18px;
            left: 25px;
            font-size: 100%;
            font-family: 'Akrobat';
            color:rgb(82, 82, 82);
        }
    }
  }
`;
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
`;
export const ContentDetalhesQuantidadeBatidasContent = styled(Box)`
  width: 100%;
  height: 100%;
  // background-color: cadetblue;
`;
export const ContentDetalhesQuantidadeBatidasContentDesc = styled(Box)`
  width: 360px;
  height: 30px;
  position: relative;
  border-top: 0.4px solid rgb(225, 225, 225);
  border-left: 0.4px solid rgb(225, 225, 225);
  border-right: 0.4px solid rgb(225, 225, 225);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background: linear-gradient(
    to top,
    rgb(231, 231, 231),
    rgb(248, 248, 248),
    white
  );

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
    background: linear-gradient(to top, rgb(231, 231, 231),rgb(248, 248, 248),white);

    p{
        font-size: 14px;
        font-family: 'Akrobat';
        position: relative;
        left: 18px;
        top: 5px;
    }
  }
`;
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
`;
export const ContentDetalhesQuantidadeBatidasContentInputBatidasTitle = styled(  Box)`
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
    font-family: 'Akrobat';
    color:rgb(82, 82, 82);
    display: flex;
    justify-content: space-between;

    img{
        width: 16px;
        height: 16px;
        position: relative;
        top: 3px;
    }
  }
`;
export const ContentDetalhesQuantidadeBatidasContentInputBatidasContent = styled(  Box)`
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
    left:-1px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    // border-left: 0.6px solid rgb(204, 204, 204);
    // border-right: 0.6px solid rgb(204, 204, 204);
    // border-bottom: 0.6px solid rgb(204, 204, 204);
    z-index: 9999;

    a{
        position: relative;
        top: -20px;
    }

    p{
        width: 50%;
        height: 30px;
        position: relative;
        left: 10%;
        color:rgb(82, 82, 82);
        text-decoration-line:rgb(82, 82, 82);
    }

    input{
        width: 245px;
        height: 32px;
        border-radius: 0px;
        top: 18px;
        left: 8%;
        position: relative;
        border: 0.6px solid rgb(204, 204, 204);
        outline: none;
    }

    input::-webkit-input-placeholder{
        padding-left: 10px;
        font-family: 'Akrobat';
        color: rgb(204, 204, 204);
    }

    ul{
        width: 270px;
        height: 180px;
        position: relative;
        top: 18px;
        // left: 8%;
        // background-color: rgba(95, 158, 160, 0.377);
    }
    
    li{
        width: 225px;
        height: 35px;
        position: relative;
        margin-top: 5px;
        // background-color: chocolate;
        list-style-type: none;
        left: -33px;

        input{
            width: 15%;
            height: 60%;
            position: relative;
            float: left;
            // border: 0.6px solid rgb(204, 204, 204);
        }

        input[type=checkbox]:checked:before {
            border-radius: 2px;
            content: "";
            display: block;
            position: relative;
            width: 23px;
            height: 23px;
            left: 5px;
            background: url('/images/menu/check-verde.png');
            background-color: white;
            background-size: 100% 100%;
        }

        p{
            width: 50%;
            height: 60%;
            position: relative;
            float: left;
            top: 18px;
            left: 25px;
            font-size: 100%;
            font-family: 'Akrobat';
            color:rgb(82, 82, 82);
        }
    }
  }
`;
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
`;
export const DetalhesPrazoContent = styled(Box)`
  width: 100%;
  height: 100%;
  // background-color: cadetblue;
`;
export const DetalhesPrazoContentDesc = styled(Box)`
  width: 360px;
  height: 30px;
  position: relative;
  border-top: 0.4px solid rgb(225, 225, 225);
  border-left: 0.4px solid rgb(225, 225, 225);
  border-right: 0.4px solid rgb(225, 225, 225);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background: linear-gradient(
    to top,
    rgb(231, 231, 231),
    rgb(248, 248, 248),
    white
  );

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
    background: linear-gradient(to top, rgb(231, 231, 231),rgb(248, 248, 248),white);

    p{
        font-size: 14px;
        font-family: 'Akrobat';
        position: relative;
        left: 18px;
        top: 5px;
    }
  }
`;
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
`;
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
    font-family: 'Akrobat';
    color:rgb(82, 82, 82);
    display: flex;
    justify-content: space-between;

    img{
        width: 110px;
        height: 23px;
        position: relative;
        display: block;
        object-fit: scale-down;
        top: 0px;
        left: -15px;
    }
  }
`;
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
    left:-1px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    // border-left: 0.6px solid rgb(204, 204, 204);
    // border-right: 0.6px solid rgb(204, 204, 204);
    // border-bottom: 0.6px solid rgb(204, 204, 204);
    z-index: 9999;
    p{
        width: 50%;
        height: 30px;
        position: relative;
        left: 10%;
        color:rgb(82, 82, 82);
        text-decoration-line: rgb(82, 82, 82);
    }

    input{
        width: 245px;
        height: 32px;
        border-radius: 0px;
        top: 18px;
        left: 8%;
        position: relative;
        border: 0.6px solid rgb(204, 204, 204);
        outline: none;
    }

    input::-webkit-input-placeholder{
        padding-left: 10px;
        font-family: 'Akrobat';
        color: rgb(204, 204, 204);
    }

    ul{
        width: 360px;
        height: 180px;
        position: relative;
        top: 0px;
        left: -30px;
        // background-color: rgba(95, 158, 160, 0.377);
    }
    
    li{
        width: 360px;
        height: 35px;
        position: relative;
        margin-top: 5px;
        // background-color: chocolate;
        list-style-type: none;
        left: -20px;

        input{
            width: 10%;
            height: 60%;
            position: relative;
            float: left;
        }

        input[type=checkbox]:checked:before {
            border-radius: 2px;
            content: "";
            display: block;
            position: relative;
            width: 23px;
            height: 23px;
            left: 5px;
            background: url('/images/menu/check-verde.png');
            background-color: white;
            background-size: 100% 100%;
        }

        p{
            width: 280px;
            height: 23px;
            position: relative;
            float: left;
            top: 18px;
            left: 25px;
            font-size: 15px;
            font-family: 'Akrobat';
            letter-spacing: 0.02rem;
            color:rgb(82, 82, 82);
            border-radius: 3px;
            display: flex;
            justify-content: space-between;

            strong{
                position: relative;
                float: left;
                width: 100px;
                letter-spacing: 0.02rem;
            }
        }

        img{
            // width: 60px;
            // height: 70%;
            position: relative;
            float: left;
            top: 18px;
            left: 65px;
        }
      }
  }
`;
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

    p{
        width: 100%;
        height: 60px;
        font-size: 11px;
    }
  }
`;
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
`;
export const DetalhesQuantidadeContent = styled(Box)`
  width: 100%;
  height: 100%;
  // background-color: cadetblue;
`;
export const DetalhesQuantidadeContentDesc = styled(Box)`
  width: 360px;
  height: 30px;
  position: relative;
  border-top: 0.4px solid rgb(225, 225, 225);
  border-left: 0.4px solid rgb(225, 225, 225);
  border-right: 0.4px solid rgb(225, 225, 225);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background: linear-gradient(
    to top,
    rgb(231, 231, 231),
    rgb(248, 248, 248),
    white
  );

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
    background: linear-gradient(to top, rgb(231, 231, 231),rgb(248, 248, 248),white);

    p{
        font-size: 14px;
        font-family: 'Akrobat';
        position: relative;
        left: 18px;
        top: 5px;
    }
  }
`;
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
`;
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
    font-family: 'Akrobat';
    color:rgb(82, 82, 82);
    // background-color: turquoise;

    strong{
        position: relative;
        left: 2px;
    }

    p{
        width: 95%;
        display: flex;
        justify-content: space-between;
    }
  }
`;
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
    left:-1px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border-left: 0.6px solid rgb(204, 204, 204);
    border-right: 0.6px solid rgb(204, 204, 204);
    border-bottom: 0.6px solid rgb(204, 204, 204);
    z-index: 9999;
    p{
        width: 50%;
        height: 30px;
        position: relative;
        float: left;
        left: 10%;
        color:rgb(82, 82, 82);
        text-decoration-line: rgb(82, 82, 82);
    }
    input::-webkit-input-placeholder{
        padding-left: 10px;
        font-family: 'Akrobat';
        color: rgb(204, 204, 204);
    }

    ul{
        width: 310px;
        height: 180px;
        position: relative;
        float: left;
        overflow-y: hidden;
        overflow-x: hidden;
        top: -5px;
    }
    li{
        width: 245px;
        height: 33px;
        position: relative;
        margin-top: 5px;
        // background-color: chocolate;
        list-style-type: none;
        left: -15px;

        input{
            width: 10%;
            height: 23px;
            top: 18px;
            position: relative;
            float: left;
            z-index: 999;
            
        }

        input[type=checkbox]:checked:before {
            border-radius: 2px;
            content: "";
            display: block;
            position: relative;
            width: 23px;
            height: 23px;
            left: 0.8px;
            background: url('/images/menu/check-verde.png');
            background-color: white;
            background-size: 100% 100%;
            z-index: 999;
        }

        p{
            width: 36%;
            height: 60%;
            position: relative;
            float: left;
            top: 18px;
            left: 25px;
            font-size: 100%;
            font-family: 'Akrobat';
            // color:rgb(82, 82, 82);
            color:rgb(82, 82, 82);
        }

        

    }
  }
`;
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

    h4{
        position: relative;
        top: 5px;
        font-size: 13px;
        text-align: center;
        font-family: 'Gisha bold';
        color: ${cor_base_1};
        // border-radius: 5px;
        // background-color: #F1F2F2;
    }
  }
`;
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
    font-family: 'Akrobat';
    color:rgb(82, 82, 82);
  }
`;
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
    left:40px;
    display: flex;
    justify-content: space-between;
    // background-color: aqua;
    label{
        width: 65px;
        font-size: 15px;
        position: relative;
        float: left;
        top:5px;
        font-family: 'Akrobat';
        color:rgb(82, 82, 82);
    }
    input{
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
`;
export const DetalhesQuantidadeContentInputQuantidadeContentButton = styled( Box)`
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
    left:20px;
    // background-color: rgb(255, 0, 149);

    button{
        width: 100%;
        height: 100%;
        color: white;
        font-size: 18px;
        font-family: 'Akrobat Bold';
        border: none;
        background-color: ${cor_base_1};
    }
  }
`;
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
`;
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

    img{
        width: 50px;
        height: 50px;
        position: relative;
        top: -10px;
    }
    p{
        height: 10px;
        font-size: 17px;
        font-family: 'Akrobat';
        position: relative;
    }
    strong{
        // height: 10px;
        position: relative;
        top: -8px;
        font-size: 28px;
        font-family: 'Akrobat';
        text-align: center;
    }
  }
`;
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
`;
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

    button{
        width: 360px;
        height: 45px;
        border: none;
        border-radius: 5px;
        background-color: ${cor_base_2};
        font-size: 20px;
        font-family: 'Akrobat ExtraBold';
        position: relative;
        font-weight: 400;
        letter-spacing: 00.05rem;
        // line-height: 90%;
        color: white;
    }
  }
`;
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
`;
export const DadosProdutosOpcoesEmbalagemAvisoEmbalagem = styled(Box)`
  width: 910px;
  height: 180px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  // background-color: yellow;
  P {
    font-size: 25px;
    font-family: "Gisha";
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
    P{
      font-size: 18px;
      font-family: 'Gisha';
      position: relative;
      color: #5e5e5e;
      top: 15px;
      left: 50px;
  }

  img{
      width: 400px;
      position: relative;
  }
  }
`;
export const DadosProdutosOpcoesEmbalagemAvisoEmbalagemBotaoGratis = styled( Box)`
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
`;
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
`;
export const DadosProdutosOpcoesEmbalagemContentVisualTitle = styled(Box)`
  width: 100%;
  height: 70px;
  position: relative;
  float: left;
  // background-color: yellowgreen;

  p {
    font-size: 25px;
    font-family: "Gisha";
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

    p{
        font-size: 25px;
        font-family: 'Gisha';
        position: relative;
        color: #5e5e5e;
        left: 50px;
        top: 10px;
        letter-spacing: 0.05rem;
    }
  }
`;
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

    img{
        width: 571px;
        height: 449px;
    }
  }
`;
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
`;
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
    top:70px;
    // background-color: tomato;
  }
`;
export const DadosProdutosOpcoesEmbalagemContentDetalhesContentTitle = styled( Box)`
  width: 290px;
  height: 85px;
  position: relative;
  left: 3%;
  // background-color: rosybrown;

  p {
    font-size: 20px;
    font-family: "Gisha";
    color: #5e5e5e;
  }
  @media screen and (max-width: 768px) {
    width: 250px;
    height: 85px;
    position: relative;
    left: 3%;
    // background-color: rosybrown;

    p{
        font-size: 20px;
        font-family: 'Gisha';
        color: #5e5e5e;
    }
  }
`;
export const DadosProdutosOpcoesEmbalagemContentDetalhesContentSelecao = styled( Box)`
  width: 300px;
  height: 67px;
  // background-color: burlywood;
  @media screen and (max-width: 768px) {
    width: 300px;
    height: 67px;
    // background-color: burlywood;
  }
`;
export const DadosProdutosOpcoesEmbalagemContentDetalhesContentSelecaoContent = styled(Box)`
  width: 100%;
  height: 100%;
  // background-color: cadetblue;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    // background-color: cadetblue;
  }
`;
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
`;
export const DadosProdutosOpcoesEmbalagemContentDetalhesContentSelecaoContentInputSelecaoTitle = styled( Box)`
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
    font-family: 'Akrobat';
    color:rgb(82, 82, 82);
    display: flex;
    justify-content: space-between;

    img{
        width: 16px;
        height: 16px;
        position: relative;
        top: 3px;
    }
  }
`;
export const DadosProdutosOpcoesEmbalagemContentDetalhesContentSelecaoContentInputSelecaoContent = styled(  Box)`
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
    left:-1px;
    border-radius: 3px;
    // border-left: 0.6px solid rgb(204, 204, 204);
    // border-right: 0.6px solid rgb(204, 204, 204);
    // border-bottom: 0.6px solid rgb(204, 204, 204);
    z-index: 9999;

    p{
        width: 50%;
        height: 30px;
        position: relative;
        left: 10%;
        color:$cor_base_1;
        text-decoration-line:$cor_base_1;
    }

    input{
        width: 245px;
        height: 32px;
        border-radius: 0px;
        top: 18px;
        left: 8%;
        position: relative;
        border: 0.6px solid rgb(204, 204, 204);
        outline: none;
    }

    input::-webkit-input-placeholder{
        padding-left: 10px;
        font-family: 'Akrobat';
        color: rgb(204, 204, 204);
    }

    ul{
        width: 270px;
        height: 180px;
        position: relative;
        top: 20px;
        // left: 8%;
        // background-color: rgba(95, 158, 160, 0.377);
    }
    
    li{
        width: 260px;
        height: 35px;
        position: relative;
        margin-top: 5px;
        // background-color: chocolate;
        list-style-type: none;
        left: -33px;

        input{
            width: 10%;
            height: 60%;
            position: relative;
            float: left;
        }

        input[type=checkbox]:checked:before {
            border-radius: 2px;
            content: "";
            display: block;
            position: relative;
            width: 23px;
            height: 23px;
            left: 0.8px;
            background: url('../../images/check-verde.png');
            background-color: white;
            background-size: 100% 100%;
        }

        strong{
            color:rgb(82, 82, 82);
            margin-right: 6px;
        }
        p{
            width: 90%;
            height: 60%;
            position: relative;
            float: left;
            top: 18px;
            left: 25px;
            font-size: 100%;
            // font-family: 'Akrobat';
            // color:rgb(82, 82, 82);

            color:$cor_base_2;
            font-family:'Akrobat extraBold';
            letter-spacing:'0.03rem';
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
`;
export const DadosProdutosOpcoesEmbalagemContentDetalhesContentDescricao = styled( Box)`
  width: 100%;
  height: 100px;
  position: relative;
  // background-color: sandybrown;

  p {
    font-size: 15px;
    font-family: "Gisha";
    color: #5e5e5e;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100px;
    position: relative;
    // background-color: sandybrown;

    p{
        font-size: 15px;
        font-family: 'Gisha';
        color: #5e5e5e;
    }
  }
`;
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
`;
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
`;
export const OpcoesEmbalagemContentDetalhesContentCoresContentTitle = styled(  Box)`
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
    font-family: 'Akrobat';
    // background-color: cornflowerblue;
  }
`;
export const OpcoesEmbalagemContentDetalhesContentCoresContentGridCores = styled( Box)`
  width: 100%;
  height: 72px;
  // background-color: crimson;
  @media screen and (max-width: 768px) {
  width: 100%;
  height: 72px;
  // background-color: crimson;
  }
`;
export const OpcoesEmbalagemContentDetalhesContentCoresContentGridCoresCor = styled( Box)`
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
`;
export const OpcoesEmbalagemContentDetalhesContentCoresContentGridCoresCorCircleOut = styled( Box)`
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
    border: 2px solid #F1F1F1;
    cursor: pointer;
  }
`;
export const OpcoesEmbalagemContentDetalhesContentCoresContentGridCoresCorCircleIn = styled(  Box)`
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
    top: 4.80px;
    cursor: pointer;
  }
`;
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

    p{
        font-size: 19px;
        font-family: 'Akrobat';
        line-height: 130%;

        strong{
            font-size: 27px;
            position: relative;
            top: 2px;
            font-family: 'Akrobat extraBold';
            letter-spacing: 0.02rem;
        }
    }

    img{
        width: 50px;
        height: 50px;
        position: relative;
        top: -10px;
    }
  }
`;
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

    button{
        width: 234px;
        height: 51px;
        border-radius: 5px;
        border: none;
        color: white;
        font-size: 20px;
        position: relative;
        float: left;
        letter-spacing: 0.02rem;
        font-family: 'Akrobat';
        background-color: $cor_base_2;
    }
  }
`;
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
    p{
        font-size: 15px;
        font-family: 'Gisha';
        color: #5e5e5e;
    }
  }
`;
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
`;
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

    img{
        position: relative;
        float: left;
        top: 20%;
    }
    strong{
        // width: 20%;
        position: relative;
        float: left;
        font-size: 18px;
        left: 10px;
        top: 20%;
        font-family: 'Akrobat';
    }
    p{
        width: 80%;
        position: relative;
        float: left;
        top: 25%;
        left: -28px;
        font-size: 16px;
        font-family: 'Akrobat';
    }
  }
`;
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
`;
export const SiteProdutoContentMaisOpcoes = styled(Box)`
  width: 100%;
  height: 600px;
  position: relative;
  top: -100px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const SiteProdutoContentMaisOpcoesContent = styled(Box)`
  width: 980px;
  height: 100%;
  position: relative;
  margin-left: auto;
  margin-right: auto;
`;
export const SiteProdutoContentMaisOpcoesContentTopo = styled(Box)`
  width: 100%;
  height: 80px;
  position: relative;
  display: flex;
  justify-content: center;

  img {
    height: 80px;
  }
`;
export const SiteProdutoContentMaisOpcoesContentTopoGrid = styled(Box)`
  width: 100%;
  height: 500px;
  position: relative;
  float: left;
  display:flex;
  justify-content:center;
  top: 30px;
`;
export const SiteProdutoContentMaisOpcoesContentTopoGridSlide = styled(Box)`
  width: 86%;
  height: 100%;
  display:flex;
  justify-content:space-between;
`;
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
`;

export const OpcoesEmbalagensContentDetalhesMobileQueroCaixa = styled(Box)`
  width: 270px;
  height: 52px;
  display: block;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  top: 12px;
  // background-color: rgb(230, 21, 219);

  button{
      width: 270px;
      height: 51px;
      border-radius: 5px;
      border: none;
      color: white;
      font-size: 20px;
      position: relative;
      float: left;
      letter-spacing: 0.02rem;
      font-family: 'Akrobat';
      background-color: #FF4F00;
  }
  @media screen and (min-width: 768px) {
display:none;
  }
`;
export const OpcoesEmbalagensContentDetalhesMobileContentQueroCaixa = styled(Box)`
  width: 320px;
  height: 250px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  display: block;
  top:00px;
  // background-color: tomato;
`;
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
    height:150px;
    display:block;
  }
`;
export const OpcoesEmbalagensContentDetalhesMobileQueroCaixaTitle = styled(Box)`
   width: 250px;
  height: 85px;
  position: relative;
  left: 3%;
  // background-color: rosybrown;

  p{
      font-size: 20px;
      font-family: 'Gisha';
      color: #5e5e5e;
  }
`;
export const OpcoesEmbalagensContentDetalhesMobileQueroCaixaContentSelecao = styled(Box)`
width: 300px;
height: 67px;
// background-color: burlywood;
`;
export const OpcoesEmbalagensContentDetalhesMobileQueroCaixaContentSelecaoContent = styled(Box)`
 width: 100%;
height: 100%;
// background-color: cadetblue;
`;
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
`;
export const OpcoesEmbalagensContentDetalhesMobileQueroCaixaContentSelecaoContentInputSelecaoTitle = styled(Box)`
 width: 80%;
height: 100%;
position: relative;
left: 3%;
top: 15%;
font-size: 15px;
letter-spacing: 0.06rem;
font-family: 'Akrobat';
color:rgb(82, 82, 82);
display: flex;
justify-content: space-between;

img{
width: 16px;
height: 16px;
position: relative;
top: 3px;
}
`;
export const OpcoesEmbalagensContentDetalhesMobileQueroCaixaContentSelecaoContentInputSelecaoContent = styled(Box)`
 width: 300px;
height: 0px;
position: relative;
float: left;
background-color: white;
top: -5px;
left:-1px;
border-radius: 3px;
// border-left: 0.6px solid rgb(204, 204, 204);
// border-right: 0.6px solid rgb(204, 204, 204);
// border-bottom: 0.6px solid rgb(204, 204, 204);
z-index: 9999;

p{
width: 50%;
height: 30px;
position: relative;
left: 10%;
color:${cor_base_1};
text-decoration-line:${cor_base_1};
}

input{
width: 245px;
height: 32px;
border-radius: 0px;
top: 18px;
left: 8%;
position: relative;
border: 0.6px solid rgb(204, 204, 204);
outline: none;
}

input::-webkit-input-placeholder{
padding-left: 10px;
font-family: 'Akrobat';
color: rgb(204, 204, 204);
}

ul{
width: 270px;
height: 180px;
position: relative;
top: 20px;
// left: 8%;
// background-color: rgba(95, 158, 160, 0.377);
}

li{
width: 260px;
height: 35px;
position: relative;
margin-top: 5px;
// background-color: chocolate;
list-style-type: none;
left: -33px;

input{
width: 10%;
height: 60%;
position: relative;
float: left;
}

input[type=checkbox]:checked:before {
border-radius: 2px;
content: "";
display: block;
position: relative;
width: 23px;
height: 23px;
left: 0.8px;
background: url('../images/check-verde.png');
background-color: white;
background-size: 100% 100%;
}

strong{
color:rgb(82, 82, 82);
margin-right: 6px;
}
p{
width: 90%;
height: 60%;
position: relative;
float: left;
top: 18px;
left: 25px;
font-size: 100%;
// font-family: 'Akrobat';
// color:rgb(82, 82, 82);

color:${cor_base_2};
font-family:'Akrobat Extrabold';
letter-spacing:'0.03rem';
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
`;
export const OpcoesEmbalagensContentDetalhesMobileQueroCaixaContentSelecaoContentInputSelecaoContentValor = styled(Box)`
width: 150px;
height: 63px;
position: relative;
// float: left;
margin-left: auto;
margin-right: auto;
top: -5px;
left:-20px;
text-align: center;
// background-color: seagreen;

p{
  font-size: 19px;
  font-family: 'Akrobat';
  line-height: 130%;

  strong{
      font-size: 27px;
      position: relative;
      top: 2px;
      font-family: 'Akrobat extraBold';
      letter-spacing: 0.02rem;
  }
}

img{
    width: 50px;
    height: 50px;
    position: relative;
    top: -10px;
}
`;


export const FooterText = styled.div`
  width:100%;
  min-width:960px;
  height: auto;
  margin-bottom:25px;
  display:flex;
  justify-content:center;

  @media screen and (max-width: 768px){
    width:370px;
    min-width: 350px;
    position: relative;
    margin-left:auto;
    margin-right:auto;

    margin-top:85px;
  }
`

export const FooterTextContent = styled.div`
  width:960px;
  height: auto;

  @media screen and (max-width: 768px){
    width:370px;
    margin-top:65px;
  }
`