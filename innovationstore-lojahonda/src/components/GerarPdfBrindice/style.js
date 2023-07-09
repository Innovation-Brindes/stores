import styled from "styled-components";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import ReactInputMask from "react-input-mask";
import { cor_base_1 } from "../../services/cores";

export const ContainerBox = styled(Box)`
  height: 100vh;
  width: 100%;
  background-color: #f5f5f5;
  @media screen and (max-width: 768px){
    min-width: 400px;
    width: 100%;
    height: 100%;
  }
`;
export const ContainerInput = styled(ReactInputMask)`
  background-color: #f5f5f5;
  height: 40px;
  border-radius: 5px;
  padding-left: 15px;
  outline: none;
  transition: all ease 0.3s;
  ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: black;
  }
`;
export const ButtonVoltarGerarPDF = styled(Button)`
  box-shadow: none !important;
  color: black;
  width: 100px;
  font-size: 18px;
  height: 30px;
  border: 1px solid #d1d1d1;
  border-radius: 3px;
  text-align: center;
  background-color: #d1d1d1;
  transition: all ease 0.3s;
  text-decoration: none;
  cursor: pointer;
  letter-spacing: 1px;
  span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: all ease 0.5s;

    &:after {
      content: url("/images/seta-branca-esquerda.png");
      position: absolute;
      opacity: 0;
      top: 2px;
      left: -20px;
      transition: 0.3s;
    }
  }
  &:active {
    background-color: #d1d1d1;
  }
  &:hover {
    background: ${cor_base_1};  
    transition: all ease 0.2s;
    color:white;
  }

  &:hover span {
    padding-left: 35px;
    &:after {
      opacity: 1;
      left: 0px;
    }
  }
`;