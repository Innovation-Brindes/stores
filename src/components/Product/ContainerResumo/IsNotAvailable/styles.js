import styled from "styled-components"
import * as Toast from "@radix-ui/react-toast"
import CpfCnpj from "@react-br-forms/cpf-cnpj-mask"

export const ToastContainer = styled(Toast.Root)`
  position: fixed;
  top: 1rem;
  right: 50%;
  transform: translateX(50%);
  background-color: #95c620;
  width: 400px;
  padding: 1rem;
  border-radius: 5px;
  color: #fff;
  font-size: 0.9rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  display: ${(props) => (props.show ? "flex" : "none")};
  align-items: center;
  gap: 0.5rem;
`

export const IsNotAvailableHeader = styled.div`
  width: 100%;
  padding-block: 13px;
  background-color: #ff0000;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
`

export const IsNotAvailableContent = styled.div`
  display: flex;
  align-self: flex-start;
  margin-top: 16px;
  padding-inline: 0.7rem;
  flex-direction: column;

  h1 {
    color: #414042;
    font-size: 15px;
    text-align: left;
    font-weight: bold;
  }

  .span-group {
    display: flex;
    align-items: center;
    margin-top: 6px;
    gap: 8px;
  }

  .hero-section {
    line-height: 1.5rem;
    margin-top: 14px;
    span {
      color: #414042;
      font-size: 15px;
    }
  }
`

export const IsNotAvailableSpan = styled.span`
  font-size: 15px;
  font-weight: bold;
  color: #fff;
  padding: 0.2rem 0.5rem;

  background-color: ${({ background }) => background};
`

export const FormResumoOrcamento = styled.form`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 11px;
  margin-top: 12px;

  border-radius: 10px;

  .form-header {
    align-self: flex-start;

    span {
      color: #414042;
      font-size: 15px;
      display: block;
    }
  }

  .form-footer {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 12px;
    gap: 12px;
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

export const CustomizableInputCnpj = styled(CpfCnpj)``
