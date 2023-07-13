import styled from "styled-components";
import CpfCnpj from "@react-br-forms/cpf-cnpj-mask";
import { Button } from "@chakra-ui/button";

export const CustomizableInputCnpj = styled(CpfCnpj)`
  appearance: none;
  background-color: ${(props) => props.background || "transparent"};
  border-radius: 0.375rem;
  border: 1px solid;
  border-color: ${(props) => props.borderColor || "#ced4da"};
  box-shadow: none;
  color: inherit;
  display: inline-flex;
  font-size: 1rem;
  height: 2.5rem;
  line-height: normal;
  outline: none;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  transition: box-shadow 250ms;
  width: 100%;

  &_focus {
    border-color: #ff4f00;
    box-shadow: 0 0 0 2px rgba(30, 64, 175, 0.5);
  }

  &:disabled {
    opacity: 0.4;
  }
`;

export const WhatsAppButton = styled(Button)`
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes pulse-border {
    0% {
      transform: scale(1);
      opacity: 0.75;
    }
    50% {
      transform: scale(1.1);
      opacity: 0.5;
    }
    100% {
      transform: scale(1);
      opacity: 0.75;
    }
  }

  .pulse-button {
    animation-name: pulse;
    animation-duration: 1.5s;
    animation-timing-function: ease-out;
    animation-iteration-count: infinite;
  }

  .pulse-button:before {
    animation-name: pulse-border;
    animation-duration: 1.5s;
    animation-timing-function: ease-out;
    animation-iteration-count: infinite;
  }
`;
