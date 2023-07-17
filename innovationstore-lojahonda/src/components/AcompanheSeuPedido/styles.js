import styled from "styled-components"
import { Box, Button, Flex, Text } from "@chakra-ui/react"

export const ContainerBox = styled(Box)`
  min-height: 93.6vh;
  width: 100%;
  background-color: #f5f5f5;
  padding-bottom: 50px;
`
export const ContainerFlexImages = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35%;
  position: relative;
  &:before {
    position: absolute;
    top: 0;
    left: -75%;
    z-index: 2;
    display: block;
    content: "";
    width: 50%;
    height: 100%;
    background: -webkit-linear-gradient(left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 100%);
    background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 100%);
    -webkit-transform: skewX(-5deg);
    transform: skewX(-5deg);
    -webkit-animation: shine all ease 3s infinite;
    animation: shine 5s infinite;
  }
  img {
    overflow: hidden;
    float: left;
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

export const ButtonVoltar = styled(Button)`
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
    background: #cc0000;
    transition: all ease 0.2s;
    color: white;
  }

  &:hover span {
    padding-left: 35px;
    &:after {
      opacity: 1;
      left: 0px;
    }
  }
`

export const ContainerFlex = styled(Flex)`
  margin-left: auto;
  margin-right: auto;
  height: 30px;
  width: 1250px;
  @media screen and (max-width: 1366px) {
    margin-top: 20px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: -37px;
    width: 100vw;
    position: relative;
  }
`
export const FlexContainerDesktopStatus = styled(Flex)`
  border: 1px solid #d1d1d1;
  margin-top: 25px;
  width: 1250px;
  min-height: 260px;
  background-color: white;
  padding-top: 40px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const FlexContato = styled(Flex)`
  width: 345px;
  height: 30px;
  margin-top: 5px;
  text-align: left;
`
export const ContainerFlexStatusPedidoDesktop = styled(Flex)`
  flex-direction: column;
  width: 1100px;
  display: block;
  margin-bottom: 20px;
  background-color: white;
`
export const FlexIcon = styled(Flex)`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    display: flex;
    justify-content: space-around;
    margin-top: -10px;
    height: 50px;
    width: 200px;
  }
`

export const ContainerFlexStatusPedidoMobile = styled(Flex)`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`
export const FlexContainerDados = styled(Flex)`
  background-color: white;
  flex-direction: row;
  border: 1px solid #d1d1d1;
  border-bottom: 1px solid #d1d1d1;
  margin-top: 25px;
  width: 1250px;
  height: 245px;
  margin-right: auto;
  margin-left: auto;
  @media screen and (max-width: 768px) {
    margin-top: 25px;
    border-bottom: 1px solid #d1d1d1;
    border: none;
    flex-direction: column;
    width: 100vw;
    height: auto;
    margin-right: auto;
    margin-left: auto;
    display: block;
  }
`
export const FlexContainerMobileStatus = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`
export const TextTransportadora = styled(Text)``
export const TextA = styled.a`
  position: relative;
  text-decoration: none;
  margin-bottom: 20px;
  color: black;
`
