import styled from "styled-components"
import * as Toast from "@radix-ui/react-toast"

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

export const ContainerQuantity = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  gap: 17px;
`

export const ContentQuantity = styled.div`
  border: 1px solid #cfcfcf;
  border-radius: 10px;
`

export const BoxQuantity = styled.div`
  padding-block: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;

  h1 {
    font-size: 20px;
    color: #e2001b;
    font-weight: 700;
  }

  .value {
    font-size: 14px;
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.3rem;
    visibility: hidden;

    span {
      font-size: 9px;
    }
  }

  .value.show {
    visibility: visible;
  }
`

export const BoxInputQuantity = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    width: 150px;
    font-size: 20px;
    padding-block: 1px;
    text-align: center;
    border: 1px solid #cfcfcf;
    border-radius: 5px;
    outline: none;
  }
`

export const IconInputQuantity = styled.button`
  position: absolute;
  right: -5.8rem;
  top: 50%;
  transform: translateY(-50%);

  ${(props) =>
    props.disabled &&
    `
    cursor: not-allowed;
    opacity: 0.5;
  `}

  cursor: pointer;

  display: flex;
  align-items: center;

  gap: 0.3rem;

  svg {
    font-size: 30px;
    color: #e2001b;
  }

  span {
    font-size: 14px;
  }
`

export const SelectBestOption = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 17px;

  > h1 {
    font-size: 20px;
    color: #e2001b;
    font-weight: 700;
    text-align: center;
  }
`
