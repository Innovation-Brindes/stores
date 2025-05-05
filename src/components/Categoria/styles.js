import { Box, Grid, Select } from "@chakra-ui/react";
import styled from "styled-components";
import { cor_base_1 } from "../../services/cores";

export const CategoriaContainer = styled.div`
  height: auto;
`;
export const CategoriaContainerContent = styled(Box)`
  width: 1309px;
  height: auto;
  overflow: hidden;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  padding-top: 20px;
  @media screen and (max-width: 1340px) {
    width: 95%;
  }
  @media screen and (max-width: 768px) {
    width: 380px;
    flex-direction: ${(props) => (props.viewMenu ? "none" : "column")};
    margin-top: ${(props) => (props.viewMenu ? "-30px" : "none")};

    /* display:block;
      justify-content:none; */
  }
`;
export const CategoriaContainerContentFilter = styled(Box)`
  width: 1250px;
  // max-width: 1110px;
  // min-width: 1098px;
  top: 0vw;
  height: 80px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  z-index: revert;
  background-color: white;
  // background-color: #4d4d4d;
  display: flex;
  justify-content: flex-end;
  input[type="text"],
  input[type="password"],
  textarea,
  select {
    outline: none;
  }

  .sm {
    width: 100;
    background-color: #00acd6;
  }
  @media screen and (max-width: 1280px) {
    width: 98%;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const CategoriaContainerContentFilterSelect = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
  background-color: white;
  background-image: url("/images/menu/seta.png");
  background-repeat: no-repeat;
  background-position-x: 90%;
  background-position-y: 11px;
  width: 190px;
  height: 34px;
  position: relative;
  border-radius: 3px;
  border: 0.8px solid rgb(191, 191, 191);
  top: 20%;
  /* left: 350px; */
  font-size: 100%;
  font-family: "Akrobat";
  option {
    position: relative;
    text-align: center;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
export const CategoriaContainerContentGridProdutos = styled(Grid)`
  width: 850px;
  max-width: 1100px;
  height: ${(props) =>
    props.length ? 555 * Math.ceil(props.length / 4) + "px" : "1200px"};
  min-height: auto;
  grid-template-columns: repeat(auto-fill, 210px);
  // max-height: 990px;
  position: relative;
  float: right;
  margin-left: auto;
  margin-right: auto;
  height: auto;
  /* justify-content: space-evenly;
  top: 2vw;
  left: 25px; */
  // background-color: aquamarine;
  @media screen and (max-width: 1366px) {
    width: 850px;
    margin-left: 20px;
    max-width: 1100px;
    height: ${(props) =>
      props.length ? 555 * Math.ceil(props.length / 4) + "px" : "1200px"};
    grid-template-columns: repeat(auto-fill, 210px);
    min-height: auto;
    height: auto;
  }
  @media screen and (max-width: 1230px) {
    width: 60%;
    height: ${(props) =>
      props.length ? 555 * Math.ceil(props.length / 3) + "px" : "1200px"};
    grid-template-columns: repeat(auto-fill, 222px);
  }
  @media screen and (max-width: 1190px) {
    width: 40%;
    height: ${(props) =>
      props.length ? 555 * Math.ceil(props.length / 2) + "px" : "1200px"};
    grid-template-columns: repeat(auto-fill, 210px);
  }

  @media screen and (max-width: 768px) {
    width: 380px;
    height: auto;
    min-height: 1200px;
    height: ${(props) =>
      props.length ? 555 * Math.ceil(props.length / 2) + "px" : "1200px"};
    // max-height: 990px;
    position: relative;
    z-index: revert;
    margin-left: auto;
    margin-right: auto;
    float: left;
    margin-top: ${(props) => (props.viewMenu ? "550px" : "150px")};
    justify-content: space-evenly;
    top: -170px;
    left: -10px;
    grid-template-columns: repeat(auto-fill, 170px);
    // background-color: aquamarine;
  }
`;
export const CategoriaContainerContentGridProdutosLoading = styled(Box)`
  width: 100%;
  height: 20%;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  margin-top: -5px;
  z-index: 9999;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    margin-top: 25%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 20%;
    position: absolute;
    margin-left: auto;
    margin-right: auto;

    img {
      width: 100px;
      height: 100px;
      position: relative;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;
export const CategoriaContainerContentTextoSEO = styled(Box)`
  width: 958px;
  top: 0vw;
  min-height: 20px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
  z-index: 997;
  background-color: white;
  // background-color: #4d4d4d;
  display: flex;
  justify-content: center;
  a {
    text-decoration: none;
  }
  p {
    font-family: "Akrobat";
    text-align: justify;
  }
  display: block;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const CategoriaContainerContentGridProdutosProduto = styled(Box)`
  width: 200px;
  height: 550px;
  position: relative;
  float: left;
  /* left: 1rem; */
  text-align: center;
  font-family: "Akrobat";
  font-size: 120%;
  display: block;
  /* margin-left: 50px; */
  // background-color: cadetblue;
  @media screen and (max-width: 768px) {
    width: 180px;
    height: 550px;
    position: relative;
    float: left;
    text-align: center;
    font-family: "Akrobat";
    font-size: 120%;
    display: block;
    // background-color: cadetblue;
    margin-left: 5px;
    left: 0;
    margin-right: 0px;
  }
`;
export const CategoriaContainerContentGridProdutosProdutoTitle = styled(Box)`
  font-size: 17px;
  height: 60px;
  // font-family: 'Akrobat';
  font-family: "Gisha Bold";
  // white-space: nowrap;
  text-align: center;

  strong {
    width: 200px;
    height: 45px;
    font-weight: bolder;
    position: relative;
  }

  h1 {
    font-size: 15px;
    height: 20px;
    line-height: 100%;
    font-family: "Gisha Bold";
  }
  p {
    font-size: 16px;
    position: relative;
    font-weight: 100;
    font-family: "Gisha";
    margin-top: -0.5rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 17px;
    height: 60px;
    // font-family: 'Akrobat';
    font-family: "Gisha Bold";
    // white-space: nowrap;
    text-align: center;

    strong {
      width: 200px;
      height: 45px;
      font-weight: Bolder;
      position: relative;
    }

    h1 {
      font-size: 15px;
      height: 20px;
      line-height: 100%;
      font-family: "Gisha Bold";
    }
    p {
      font-size: 16px;
      position: relative;
      font-weight: 100;
      font-family: "Gisha";
    }
  }
`;
export const CategoriaContainerContentGridProdutosProdutoCardProd = styled(Box)`
  width: 100%;

  height: 417px;
  position: relative;
  border: 0.6px solid #eeeeee;
  transform: scale(1, 1);
  // background-color: rgb(23, 223, 100);
  &:hover {
    transition: 0.3s;
    transform: scale(1.02, 1.02);
    background-color: rgb(252, 252, 252);
  }
  .img-selo {
    position: absolute;
    top: 0%;
    right: 0.5%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 417px;
    position: relative;
    border: 0.6px solid #eeeeee;
    // background-color: rgb(23, 223, 100);
    &:hover {
      transition: 0.3s;
      transform: scale(1.02, 1.02);
      background-color: rgb(252, 252, 252);
    }
    .img-selo {
      position: absolute;
      top: 0%;
      right: 0.5%;
    }
  }
`;
export const CategoriaContainerContentGridProdutosProdutoCardProdImgProd = styled.img`
  width: 100%;
  height: 247px;
  position: relative;
  float: left;

  display: block;
  object-fit: scale-down;
  border: 0.6px solid #eeeeee;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: scale-down;
    border: 1px solid #eeeeee;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 247px;
    position: relative;
    float: left;
    display: block;
    object-fit: scale-down;
    border: 0.6px solid #eeeeee;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: scale-down;
      border: 1px solid #eeeeee;
    }
    &:hover {
      transition: 0.3s;
      opacity: 0.8;
    }
  }
`;

export const SeloEmbalagem = styled(Box)`
  width: 196px;
  height: 68px;
  position: absolute;
  top: 190px;
  left: -15px;
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
`;
export const Selo = styled(Box)`
  position: absolute;
  top: 0%;
  right: 0.5%;
`;
export const CardProdDesc = styled(Box)`
  width: 100%;
  height: 50px;
  display: block;
  position: relative;
  float: left;
  // background-color: #f05423;

  p {
    width: 175px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
    line-height: 150%;
    font-size: 11px;
    font-family: "Gisha";
    top: 12px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 50px;
    display: block;
    position: relative;
    float: left;
    // background-color: #f05423;

    p {
      width: 175px;
      position: relative;
      margin-left: auto;
      margin-right: auto;
      text-align: left;
      line-height: 150%;
      font-size: 11px;
      font-family: "Gisha";
      top: 12px;
    }
  }
`;
export const CardProdCores = styled(Box)`
  width: 100%;
  height: 108px;
  display: block;
  position: relative;
  float: left;
  margin-top: 10px;
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
`;
export const CardProdCoresTitle = styled(Box)`
  width: 22%;
  height: 18px;
  position: relative;
  padding-left: 8px;
  // background-color: aqua;
  margin-top: 3px;
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
    width: 22%;
    padding-left: 5px;

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
`;
export const CardProdCoresGridCores = styled.div`
  width: 100%;
  height: 50px;
  position: relative;
  float: left;
  // background-color: rgb(238, 144, 30);
`;
export const CardProdCoresGridCoresContent = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  left: 10px;
  z-index: -1;
  // background-color: rgba(165, 42, 42, 0.349)
`;
export const CardProdCoresGridCoresContentCor = styled(Box)`
  width: 14px;
  height: 14px;
  position: relative;
  float: left;
  margin-left: 6px;
  margin-top: 6px;
  border-radius: 14px;
  /* 
  .tooltip-inner {
    background-color: #00acd6 !important;
    color: #fff;
  } */
`;
export const CardProdValor = styled(Box)`
  width: 100%;
  height: 48px;
  display: block;
  position: relative;
  float: left;
  margin-left: auto;
  margin-right: auto;
  top: -50px;
  // background-color: burlywood;
`;
export const CardProdValorContent = styled(Box)`
  width: 170px;
  height: 100%;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  p {
    height: 8px;
    line-height: 130%;
    font-size: 11px;
    font-family: "Gisha";
    text-align: right;
  }

  strong {
    font-size: 18px;
    letter-spacing: -0.02rem;
    font-family: "Gisha Bold";
  }
`;
export const GridProdutosProdutoBTNConferirIndisponivel = styled(Box)`
  width: 100%;
  height: 50px;
  position: relative;
  top: -40px;
  // background-color: rgb(255, 94, 0);

  button {
    width: 100%;
    height: 27px;
    position: relative;
    top: 10px;
    border: none;
    border-radius: 2px;
    letter-spacing: 0.05rem;
    background-color: #dfdfdf;
    font-size: 15px;
    font-family: "Akrobat";
    color: #4d4d4d;
    font-weight: 400px;
  }
  @media screen and (max-width: 768px) {
    button {
      height: 40px;
    }
  }
`;
export const GridProdutosProdutoBTNConferir = styled(Box)`
  width: 100%;
  height: 50px;
  position: relative;
  top: -40px;
  // background-color: rgb(255, 94, 0);

  button {
    width: 100%;
    height: 27px;
    position: relative;
    top: 10px;
    border: none;
    border-radius: 2px;
    letter-spacing: 0.05rem;
    background-color: ${cor_base_1};
    font-size: 18px;
    font-family: "Akrobat";
    color: white;
    font-weight: 400px;
  }
  @media screen and (max-width: 768px) {
    button {
      height: 40px;
    }
  }
`;

export const GridContainerFilterAviso = styled(Grid)`
  grid-template-columns: 1fr 200px;
  align-items: center;
  max-width: 1100px;
  width: 813px;
  grid-gap: 1rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    grid-gap: 1rem;
  }
`;

export const SelectFilter = styled(Select)`
  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
  background-color: white;
  background-image: url("/images/menu/seta.png");
  background-repeat: no-repeat;
  background-position-x: 90%;
  background-position-y: 11px;
  width: 190px;
  height: 34px;
  position: relative;
  float: left;
  border-radius: 3px;
  border: 0.8px solid rgb(191, 191, 191);
  top: 20%;
  /* left: 350px; */
  font-size: 100%;
  font-family: "Akrobat";
  option {
    position: relative;
    text-align: center;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
