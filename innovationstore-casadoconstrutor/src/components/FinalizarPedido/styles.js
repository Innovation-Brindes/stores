import { Box, Flex, Progress, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion';
import styled from 'styled-components'

export const ContainerBox = styled(motion(Box))`
 padding-top: 40px;
 min-height: calc(100vh - 120px);
 @media screen and (max-height: 780px){
   padding-top: 10px;
 }
`;
export const TextForm = styled(Text)`
animation: ${props => props.texte ? 'tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both':'tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both'};
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
`;
export const FlexCheckedFaturamento = styled(Flex)`
  height: 40px;
  width: 100%;
  justify-content: center;
  margin-top: 20px;
  margin-left: -35px;
  input::-webkit-input-placeholder {
    font-family: "Akrobat";
    color: rgb(204, 204, 204);
  }

  input {
      width: 30%;
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
    border:none;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    top:-1px;
    left:-0.5px;
  }
`;
export const FlexCheckedFaturamento2 = styled(Flex)`
  height: 40px;
  width: 100%;
  justify-content: center;
  margin-top: 20px;
  margin-left: -35px;
  input::-webkit-input-placeholder {
    font-family: "Akrobat";
    color: rgb(204, 204, 204);
  }

  input {
      width: 30%;
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
    border:none;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    top:-1px;
    left:-0.5px;
  }
`;
export const FlexCheckedFaturamento3 = styled(Flex)`
  height: 40px;
  width: 100%;
  justify-content: center;
  margin-left: -11px;
  margin-top: -5px;
  input::-webkit-input-placeholder {
    font-family: "Akrobat";
    color: rgb(204, 204, 204);
  }

  input {
      width: 30%;
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
    border:none;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    top:-1px;
    left:-0.5px;
  }
`;
export const ContainerBoxProductTableTextFinalizarPedido = styled(Box)`
  margin-top: 18px;
  height: 108px;
  width: auto;
  padding-left: 30px;
  
  @media (max-width: 1024px) {
    padding-left: 15px;
  }
  @media (max-width: 768px) {

  }
`;
export const CarrinhoContentResumoPedidoListaProdutosProdutoTitleTextNomeProdFinalizarPedido = styled.div`
  position: relative;
  // background-color: #F8AC00;
  a {
    text-decoration: none;
    color: black;
    &:hover {
      color: black;
      opacity: 0.8;
    }
  }
  p {
    line-height: 100%;
    position: relative;
    font-family: "Gisha";
  }
  @media screen and (max-width: 768px) {
    position: relative;
    text-decoration: none;
    width: 230px;
    a {
      text-decoration: none;
      color: black;
      &:hover {
        color: black;
        opacity: 0.8;
      }
    }
  }
`;
export const BoxBorder = styled(Box)`
  width: 61%;
  @media screen and (max-width: 1284px){
    width: 59%;
  }
  @media screen and (max-width: 1024px){
    width: 50.5%;
  }
`;
export const FlexMotion = styled(motion(Flex))`

`;
export const ProgressMotion = styled(motion(Progress))`

`;
export const InputEnviarMaisTarde = styled(Flex)`
  input::-webkit-input-placeholder {
    color: rgb(204, 204, 204);
  }

  input {
    width: 35%;
    height: 85%;
    position: relative;
    cursor: pointer;
  }

  input[type="radio"]:checked:before {
    content: "";
    display: block;
    position: relative;
    width: 26px;
    height: 26px;
    border-radius: 15px;
    background: url("../images/ok.png");
    background-color: white;
    border:none;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    top:-1px;
    left:-0.5px;
  }
`;

export const InputEnviarMaisTardeMobile = styled(Flex)`
  input::-webkit-input-placeholder {
    color: rgb(204, 204, 204);
  }

  input {
    margin-left: 10px;
    margin-top: 5px;
    width: 25px;
    height: 25px;
    position: relative;
    cursor: pointer;
  }

  input[type="radio"]:checked:before {
    content: "";
    display: block;
    position: relative;
    width: 26px;
    height: 26px;
    border-radius: 15px;
    background: url("../images/ok.png");
    background-color: white;
    border:none;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    top:-1px;
    left:-0.5px;
  }
`;
export const ModalEditarDados = styled.div`
 display: flex;
 padding-right: 20px;
 justify-content: end;
`;
export const ModalEditarComponentFaturamento = styled.div`
 display: flex;
 padding-right: 20px;
 justify-content: end;
 width: 100%;
`;