import {
  Image,
  Text,
  Flex,
  Button,
  Textarea,
  Input,
  Box,
} from "@chakra-ui/react";
import styled from "styled-components";

const checkbox = "images/solicitacao_layout/upload_icon_checkbox.svg";

export const ContainerSolicitacaoLayout = styled(Box)`
  width: 100%;
  margin: 0 auto;
  font-family: Arial;
  padding-inline: 4rem;
  max-width: 1550px;
  min-height: 100vh;

  @media screen and (max-width: 1366px) {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;

    padding-inline: 1rem;
  }
`;
export const InputChecked = styled.div`
  top: 6px;
  left: 15px;
  position: relative;

  transform: scale(0.9);

  font-size: 0.9rem;
  input {
    display: none;
  }
  label {
    cursor: pointer;
  }
  input + label:before {
    cursor: pointer;
    content: "";
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: white;
    border: 2px solid #f85300;
    display: inline-block;
    vertical-align: middle;
    margin-right: 8px;
    margin-bottom: 3px;
  }

  input:checked + label:before {
    background-image: url("/images/solicitacao_layout/checked_laranja.svg");
    width: 30px;
    height: 30px;
    background-repeat: no-repeat;
    background-position: center;
    border: none;
  }

  @media screen and (max-width: 768px) {
    top: 10px;
    transform: translateX(-10px);
  }
`;

export const BannerSolicitacaoLayout = styled(Image)`
  width: 100%;
  height: 365px;
  margin-top: -15px;
  @media screen and (max-width: 1366px) {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    width: 400px;
    height: 425px;
  }
`;
export const BoxSpaceSolicitacaoLayout = styled(Box)`
  width: 100%;
  position: relative;
  background-color: #f5f5f5;
  margin-top: 15px;
  height: 50px;
  @media screen and (max-width: 1366px) {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 30px;
  }
`;
export const ButtonConfirmarSolicitacaoLayout = styled(Button)`
  width: 200px;
  height: 40px;
  font-family: "Akrobat";
  color: #f85300;
  cursor: pointer;
  letter-spacing: 1px;
  position: relative;
  z-index: 1;
  border-radius: 4px;
  transition: ease-out 0.3s;
  margin: 0 auto;
  background-color: #ffffff;
  outline: none;
  font-weight: 600;
  border: 1px solid #f85300;
  &:active {
    transform: translateY(2px);
  }
  &:hover,
  &:focus {
    color: white;
    border: 1px solid #f85300;
  }
  &::before {
    transition: 0.5s all ease;
    position: absolute;
    top: 0;
    left: 50%;
    right: 50%;
    bottom: 0;
    opacity: 0;
    content: "";
    background-color: #f85300;
  }
  &:hover::before,
  &:focus::before {
    transition: 0.5s all ease;
    left: 0;
    right: 0;
    opacity: 1;
    z-index: -1;
  }
`;
export const FlexProdutos = styled(Flex)`
  width: 100%;
  padding-left: 10px;
  justify-content: space-between;
  align-items: center;

  height: 150px;
  margin-top: 15px;
  margin: auto auto;

  @media screen and (max-width: 1366px) {
    width: 100%;
    justify-content: space-around;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    height: ${(props) =>
      props.isChecked && props.idx !== 0 ? "210px" : "300px"};
    margin-bottom: 10px;
    align-items: flex-start;

    padding: 0 !important;

    margin-top: 3rem;
  }
`;
export const ButtonPorcentagemSolicitacaoLayout = styled(Button)`
  width: 355px;
  height: 55px;
  color: #f85300;
  cursor: pointer;
  position: relative;
  z-index: 1;
  border-radius: 25px;
  margin: auto auto;
  outline: none;
  font-size: 16px;
  font-weight: 600;
  border: 2px solid #f85300;
  font-family: Arial;

  padding: 0 !important;
`;

export const BoxSolicitacaoLayout = styled.div`
  margin: auto auto;
  position: relative;
  padding: 1.4rem;

  cursor: ${(props) => props.isDisabled && "not-allowed"};

  width: 350px;

  background: transparent;

  border: 1px solid #cecece;
  border-radius: 12px;

  color: ${(props) => props.color};

  display: flex;
  align-items: center;

  input[type="file"] {
    transform: scale(0.8);
    position: absolute;
    right: 6px;
    width: 370px;

    @media screen and (max-width: 768px) {
      width: 100%;
      right: 35px;
    }
  }

  input[type="file"]::file-selector-button {
    margin-right: 20px;
    border: none;
    background: #f84009;
    padding: 10px 20px;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
    transition: background 0.2s ease-in-out;
  }

  input[type="file"]::file-selector-button:hover {
    background: #f84009;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
  }
`;

export const TextareaSolicitacaoLayout = styled(Textarea)`
  padding-left: 10px;
  padding-top: 5px;
  border-radius: 10px;
  margin: auto auto;
  max-height: 70px;
  flex: 1;
  z-index: 9;
  height: 70px;
  font-size: 14px;
  border: 1px solid #cecece;

  transition: all 0.1s ease;

  &:focus {
    outline: 1px solid #f85300;
    border: 1px solid #f85300;
  }

  @media screen and (max-width: 1366px) {
    max-height: 90px;
  }
  @media screen and (max-width: 768px) {
    height: 150px;
    width: 390px;
    margin: 0;
    margin-block: 1rem;
  }
`;
export const InputSolicitacaoLayout = styled(Input)`
  border: 1px solid gray;
  padding-left: 10px;
  padding-top: 5px;
  border-radius: 10px;
  margin: auto auto;
  width: 590px;
  height: 70px;
  font-size: 14px;
  @media screen and (max-width: 768px) {
    height: 150px;
    width: 390px;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
export const Labet = styled.label`
  input {
    display: none;
  }
`;
