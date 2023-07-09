import styled from "styled-components";
import { Box, Select } from "@chakra-ui/react";

export const InputFormEditar = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid gray;
  padding-left: 15px;
  border-radius: 5px;
  letter-spacing: 1px;
  animation: ${props => props.razaoSocial ? 'all ease 1s ':'all ease 1s'};
  &:focus {
    border-color: gray;
  }
`;
export const InputFlex = styled.input`
  width: 800px;
  height: 40px;
  border: 1px solid gray;
  padding-left: 15px;
  border-radius: 5px;
  letter-spacing: 1px;
  &:focus {
    border-color: gray;
  }
`;

export const InputMaskFormEditar = styled(Box)`
  input {
    width: 100%;
    height: 40px;
    border: 1px solid gray;
    padding-left: 15px;
    border-radius: 5px;
    letter-spacing: 1px;
    &:focus {
      border-color: gray;
    }
  }
`;

export const SelectFormEditar = styled(Select)`
  width: 95px;
  border: 1px solid gray;
  position: relative;
  left: 33px;
  box-shadow: none !important;
  z-index: 9999;
  position: relative;
  &:focus {
    border-color: black;
    border: 2px solid black;
  }
  @media screen and (max-width: 768px) {
    left: 6px;
}
`;
