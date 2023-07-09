import styled from "styled-components"
import * as Checkbox from "@radix-ui/react-checkbox"
import CpfCnpj from "@react-br-forms/cpf-cnpj-mask"

export const CustomizableInputCnpj = styled(CpfCnpj)``

export const ContainerCheckbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.3rem;
  padding: 0.5rem 0;

  label {
    cursor: pointer;

    &:hover {
      filter: brightness(95%);
    }
  }
`

export const StyledCheckbox = styled(Checkbox.Root)`
  width: 20px;
  height: 20px;
  color: #76706b;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  user-select: none;
  border-radius: 3px;
  border: 1px solid #76706b;
  background-color: white;
  position: relative;

  &:hover {
    filter: brightness(95%);
    color: white;
  }

  &:focus {
    outline: none;
  }
`

export const StyledIndicator = styled(Checkbox.Indicator)`
  content: "";
  display: block;
  position: absolute;
  left: 4px;
  top: -1px;
  width: 5px;
  height: 11px;
  border-width: 0 2px 2px 0;
  border-style: solid;
  border-color: #76706b;
  transform-origin: bottom left;
  transform: rotate(45deg);
`

export const Container = styled.div`
  width: 100%;
  display: ${({ show }) => (show ? "flex" : "none")};
  flex-direction: column;
  gap: 12px;
`

export const HeaderResumoOrcamento = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;

  h1 {
    font-size: 20px;
    color: #ff4f00;
    font-weight: bold;
  }
`

export const FormResumoOrcamento = styled.form`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 11px;

  border: 1px solid #cfcfcf;
  border-radius: 10px;

  padding-block: 9px;
  padding-inline: 21px;

  .form-header {
    align-self: flex-start;

    span {
      color: #414042;
      font-size: 15px;
      display: block;
    }
  }

  .form-footer {
    span {
      color: #919191;
      font-size: 9px;
      display: block;
    }
  }

  .form-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 11px;

    input {
      border: 1px solid #cfcfcf;
      padding-block: 9px;
      border-radius: 5px;
      padding-inline: 16px;

      outline-color: #95c620;
    }

    input.error {
      border: 1px solid red;
      position: relative;
    }
  }

  //subir a borda para o topo
`
