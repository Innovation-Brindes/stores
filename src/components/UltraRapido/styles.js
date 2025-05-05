import { Box, Text, Flex } from "@chakra-ui/react";
import styled from "styled-components";
import { colorBaseUltraRapido } from "./component/FlexFiltroUltraRapido/styles";

export const FlexContainer = styled(Flex)`
  margin-top: -15px;
  justify-content: center;
  width: 100%;
  @media screen and (max-width: 1280px) {
    margin-top: -15px;
    justify-content: center;
    width: 100%;
    flex-direction: column;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const TextUltraRapido = styled(Text)`
  color: #494949;
  margin-top: 30px;
  font-size: 75px;
  font-family: "HelveticaNeueLTStd-Lt";
  line-height: 85%;
  strong {
    color: ${colorBaseUltraRapido};
    font-family: "Helvetica Neue LT Std Bold";
  }
  @media screen and (max-width: 1366px) {
    margin-top: 40px;
    font-size: 60px;
  }
  @media screen and (max-width: 1280px) {
    margin-top: 40px;
    font-size: 60px;
  }
  @media screen and (max-width: 768px) {
    font-size: 40px;
    text-align: center;
  }
`;

export const TextUltraRapido2 = styled(Text)`
  color: #494949;
  font-size: 32px;
  margin-top: -10px;
  font-family: "HelveticaNeueLTStd-Lt";
  strong {
    font-family: "Helvetica Neue LT Std Bold";
    color: ${colorBaseUltraRapido};
  }
  @media screen and (max-width: 1366px) {
    font-size: 24px;
  }
  @media screen and (max-width: 1280px) {
    font-size: 24px;
  }
  @media screen and (max-width: 768px) {
    font-size: 26px;
    text-align: center;
  }
`;
export const ContainerFlexUtilize = styled(Flex)`
  align-items: center;
  height: 80px;
  justify-content: center;
  @media screen and (max-width: 1366px) {
    height: 65px;
  }
  @media screen and (max-width: 1280px) {
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const TextUltraRapido3 = styled(Text)`
  color: #494949;
  margin-top: 20px;
  font-size: 18px;
  font-family: "HelveticaNeueLTStd-Lt";

  @media screen and (max-width: 1366px) {
    font-size: 18px;
    font-family: "Helvetica Neue LT Std Bold";
  }
  @media screen and (max-width: 1280px) {
    font-size: 15px;
    font-family: "Helvetica Neue LT Std Bold";
  }
  @media screen and (max-width: 768px) {
    font-size: 17px;
    text-align: center;
    margin-top: 0;
    strong {
      color: ${colorBaseUltraRapido};
    }
  }
`;

export const ImgProdUltraRapido = styled.img`
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
`;

export const SelectUltraRapido = styled.select`
  cursor: pointer;
  z-index: 999;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
  background-color: white;
  background-image: url("/images/select.png");
  background-repeat: no-repeat;
  background-position-x: 90%;
  background-position-y: 11px;
  padding-left: 15px;
  width: 200px;
  height: 34px;
  position: relative;
  border-radius: 3px;
  border: 0.8px solid rgb(191, 191, 191);
  top: 23%;
  left: 363px;
  font-size: 100%;
  font-family: "Akrobat";
  cursor: pointer;
  option {
    position: relative;
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const PaginationUltraRapido = styled(Box)`
  width: 520px;
  height: 34px;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  // display: flex;
  // justify-content: center;
  top: 20%;
  left: 270px;
  margin-right: 10px;
  display: flex;
  justify-content: center;

  .page-item {
    font-family: "Akrobat";
    color: black;
    a {
      cursor: pointer;
      text-decoration: none;
      color: black;
      &:hover {
        transition: "all ease 0.3s";
        background-color: #fafad2;
        color: ${colorBaseUltraRapido};
        font-size: 16px;
      }
    }
  }

  .page-item-active {
    font-family: "Akrobat";
    color: white;
    background-color: ${colorBaseUltraRapido};
    a {
      background-color: ${colorBaseUltraRapido};
      text-decoration: none;
      color: white;
      cursor: no-drop;
    }
  }

  @media screen and (max-width: 768px) {
    width: 225px;
    left: 71px;
    nav {
      width: 100%;
    }
    .page-item {
      font-family: "Akrobat";
      color: black;
      a {
        margin-left: 5px;
        margin-right: 5px;
        cursor: pointer;
        text-decoration: none;
        color: black;
        &:hover {
          transition: "all ease 0.3s";
          background-color: #fafad2;
          color: ${colorBaseUltraRapido};
          font-size: 12px;
        }
      }
    }

    .page-item-active {
      font-family: "Akrobat";
      color: white;
      background-color: ${colorBaseUltraRapido};
      margin-right: 5px;
      a {
        background-color: ${colorBaseUltraRapido};
        text-decoration: none;
        color: white;

        cursor: no-drop;
      }
    }
  }
`;
