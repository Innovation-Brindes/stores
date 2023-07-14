import styled from "styled-components"
import { Box, LinkBox, Image, Text, Button, Flex } from "@chakra-ui/react"
import { cor_base_1, cor_base_2 } from "./../../services/cores"
import { colorBaseUltraRapido } from "../UltraRapido/component/FlexFiltroUltraRapido/styles"

export const ImgProd = styled(Image)`
  width: 170px;
  height: 210px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  display: block;
  object-fit: scale-down;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: scale-down;
    border: 1px solid #eeeeee;
  }
  &:hover {
    transition: 0.6s;
    img {
      transition: 0.4s;
      transform: scale(1.02, 1.02);
      box-shadow: 0 0 1em rgb(191, 191, 191);
    }
  }
  @media screen and (max-width: 768px) {
    width: 170px;
    height: 210px;
    position: relative;
    float: left;
    display: block;
    object-fit: scale-down;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: scale-down;
      border: 1px solid #eeeeee;
    }
    &:hover {
      transition: 0.6s;
      img {
        transition: 0.4s;
        transform: scale(1.02, 1.02);
        box-shadow: 0 0 1em rgb(191, 191, 191);
      }
    }
  }
`

export const Title = styled(Box)`
  margin-left: auto;
  margin-right: auto;
  font-size: 17px;
  height: 60px;
  margin-top: 10px;
  // white-space: nowrap;
  text-align: center;
  text-decoration: none;
  strong {
    width: 190px;
    height: 45px;
    font-weight: bolder;
    position: relative;
  }

  h1 {
    font-size: 14px;
    height: 30px;
    line-height: 100%;
    z-index: 99;
    position: relative;
  }
  p {
    font-size: 15px;
    position: relative;
    font-weight: 100;
    margin-top: -0.5rem;
  }
  @media screen and (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
    font-size: 17px;
    margin-top: 10px;

    height: 60px;
    // white-space: nowrap;
    text-align: center;

    strong {
      width: 190px;
      height: 45px;
      font-weight: Bolder;
      position: relative;
    }

    h1 {
      font-size: 14px;
      height: 20px;
      line-height: 100%;
    }
    p {
      font-size: 15px;
      position: relative;
      font-weight: 100;
    }
  }
`

export const CardProdDesc = styled.div`
  width: 100%;
  height: 40px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  p {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    line-height: 150%;
    font-size: 11px;
    color: gray;
  }
`
export const CardProdCores = styled(Box)`
  width: 100%;
  height: 25px;
  display: flex;
  position: relative;
  float: left;
  margin-top: -18px;
  margin-left: 3px;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 25px;
    display: flex;
    position: relative;
    float: left;
    margin-top: -18px;
    margin-left: 3px;
    // background-color: #f05423;
  }
`
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
      text-align: left;
    }
  }
`
export const CardProdCoresGridCores = styled.div`
  width: 100%;
  height: 50px;
  position: relative;
  float: left;
  // background-color: rgb(238, 144, 30);
`
export const GridCoresContent = styled.div`
  width: 100%;
  height: 45px;
  position: relative;
  z-index: -1;
  margin-left: 5px;
  margin-top: -2px;
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
  /* 
  .tooltip-inner {
    background-color: #00acd6 !important;
    color: #fff;
  } */
`

export const ButtonConfira = styled(Button)`
  width: 150px;
  height: 35px;
  margin-top: ${(props) => (props.isUltraRapido ? "5px" : `5px`)};
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  background-color: ${(props) => (props.isUltraRapido ? `${colorBaseUltraRapido}` : `${cor_base_1}`)};
  display: none;
  span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: all ease 0.5s;
    &:after {
      content: url("/images/seta-branca.png");
      position: absolute;
      opacity: 0;
      top: 3px;
      right: -20px;
      transition: 0.3s;
    }
  }
  &:active {
    background-color: ${cor_base_2};
  }
  &:hover {
    background: ${(props) =>
      props.isUltraRapido
        ? `linear-gradient(90deg, ${colorBaseUltraRapido} 0%, #FFDB58 100%)`
        : `linear-gradient(90deg, #cc0000 0%, ${cor_base_1} 100%)`};
    transition: all ease 0.2s;
    color: white;
  }

  &:hover span {
    padding-right: 45px;
    &:after {
      opacity: 1;
      right: 0px;
    }
  }
`
export const TextMenorValor = styled(Text)``
export const FlexPreco = styled(Flex)`
  margin-top: -25px;
  justify-content: end;
  margin-left: -10px;
  width: 100%;
`
export const LinkBoxProductContainer = styled(Box)`
  margin-left: auto;
  margin-right: auto;
  transition: all ease 0.2s cubic-bezier(0.08, 0.52, 0.52, 1);
  display: flex;
  border: 0.5px solid #d1d1d1;
  border-radius: 5px;
  height: 450px;
  margin-bottom: 20px;
  position: relative;
  width: 190px;
  flex-direction: column;
  transform: scale(1, 1);

  @keyframes pulse {
    0% {
      -moz-box-shadow: ${(props) => (props.isUltraRapido ? `0 0 0 0 ${colorBaseUltraRapido}` : `0 0 0 0 #cc0000`)};
      box-shadow: ${(props) => (props.isUltraRapido ? `0 0 0 0 ${colorBaseUltraRapido}` : `0 0 0 0 #cc0000`)};
    }
    70% {
      -moz-box-shadow: 0 0 0 5px rgba(0, 0, 0, 0);
      box-shadow: 0 0 0 5px rgba(0, 0, 0, 0);
    }
    100% {
      -moz-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
  }
  strong {
    h1 {
      font-size: 11px;
      line-height: 140%;
    }
  }

  &:active {
    transform: scale(0.9);
  }
  &:hover {
    animation: pulse 5s infinite;
    transform: scale(1.05, 1.05);
    transition: all ease 0.2s;
    duration: 0.5s;
    border: 0.5px solid #d1d1d1;
  }
  &:hover ${ButtonConfira} {
    /* display: block; */
  }
  &:hover ${FlexPreco} {
    /* display: none; */
  }
  &:hover ${TextMenorValor} {
    /* display: none; */
  }
  @media screen and (max-width: 768px) {
    &:hover {
      animation: none;
      transform: none;
      transition: all ease 0.3s;
      duration: none;
      border: 0.5px solid #d1d1d1;
    }
  }
`

export const TextPreco = styled(Text)`
  margin-left: -10px;
  margin-top: 5px;
  font-size: 15px;
  font-weight: bold;
`
