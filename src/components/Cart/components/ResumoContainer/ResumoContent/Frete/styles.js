import styled from "styled-components";
import CpfCnpj from "@react-br-forms/cpf-cnpj-mask";

export const RadioInput = styled.input.attrs({ type: "radio" })`
  /* esconde o radio button padrão */
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

export const RadioWrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
`;

export const RadioBall = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 2px solid lightgray;
  background-color: ${(props) => (props.checked ? "lightgray" : "transparent")};
  transition: background-color 0.2s ease;
  box-sizing: border-box;

  /* bola interna */
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% - 8px);
    height: calc(100% - 8px);
    border-radius: 50%;
    background-color: lightgray;
    opacity: ${(props) => (props.checked ? 1 : 0)};
    transition: opacity 0.2s ease;
    box-sizing: border-box;
  }
`;

export const RadioLabel = styled.label`
  font-size: 1rem;
  cursor: pointer;
`;

export const CustomInputCnpjCPF = styled(CpfCnpj)`
  appearance: none;
  background-color: transparent;
  border-radius: 0.375rem;
  border: 1px solid;
  border-color: #cbd5e0;
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
