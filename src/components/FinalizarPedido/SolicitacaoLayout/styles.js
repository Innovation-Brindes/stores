import styled from "styled-components";
import { Box } from "@chakra-ui/react";

export const ContainerSolicitacaoLayout = styled(Box)`
  width: 100%;
  margin: 0 auto;
  min-height: 400px;
  height: auto;
  @media screen and (max-width: 768px) {
    height: auto;

    min-height: 100vh;

  }
`;

export const Button = styled.button`
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
