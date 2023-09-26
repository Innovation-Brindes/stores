import * as Dialog from "@radix-ui/react-dialog"
import styled from "styled-components"

export const ModalButton = styled.button`
  max-width: 223px;
  max-height: 26px;
  height: 26px;
  width: 100%;
  background: #f5f5f5;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-block: 11px;

  border-radius: 12px;

  transition: all 0.1s ease-in-out;

  cursor: pointer;

  .text-button {
    font-size: 12px;
    color: #ff4f00;
    -webkit-font-smoothing: antialiased;
    text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.004);
    --webkit-text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.004);
    font-smooth: always;
    text-rendering: optimizeLegibility !important;

    letter-spacing: 0.1px;
  }

  svg {
    font-size: 17px;
    display: inline-block;
  }

  &:hover {
    background: #e5e5e5;
  }

  @media (max-width: 768px) {
    max-width: 298px;
    max-height: 44px;
    height: 44px;

    margin: 11px auto;

    .text-button {
      font-size: 1rem;
      color: #ff4f00;
    }

    svg {
      font-size: 23px;
      display: inline-block;
    }
  }
`

export const ModalOverlay = styled(Dialog.Overlay)`
  background: rgba(0 0 0 / 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  place-items: center;
  overflow-y: auto;
`

export const ModalContent = styled(Dialog.Content)`
  min-width: 300px;
  max-width: 436px;
  width: 100%;
  background: white;
  padding: 10px 17px;
  border-radius: 10px;

  min-height: 442px;

  position: relative;

  top: -2rem;

  .footer {
    display: flex;
    justify-content: flex-end;
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    top: 0;
  }
`
export const ModalTitle = styled(Dialog.Title)`
  font-size: 1rem;
  margin-bottom: 1rem;
  color: #414042;
  max-width: 388px;
  width: 100%;
  background: #f5f5f5;
  text-align: center;
  padding-block: 4px;

  margin-inline: auto;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`
export const ModalDescription = styled(Dialog.Description)`
  display: grid;
  grid-template-columns: 217px 1fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    font-size: 0.8rem !important;

    img {
      object-fit: contain;
      width: 100%;
    }
  }
`

export const TableContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const ModalCloseButton = styled(Dialog.Close)`
  position: absolute;
  top: -1rem;
  right: -2.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #414042;
  font-size: 1.2rem;
  font-weight: 600;
  transition: all 0.1s ease-in-out;

  svg {
    font-size: 2.2rem;
    color: #fff;
  }

  &:hover {
    color: #ff4f00;
  }

  @media (max-width: 768px) {
    top: 0;
    right: 0;

    svg {
      color: #414042;
      font-size: 2rem;
    }
  }
`

export const ColorInputContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  flex-wrap: wrap;
`

export const ColorTableInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 8px;
`

export const ColorTableHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 14px;
  font-weight: bold;
  color: #414042;
`

export const ColorTableFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 14px;
  font-weight: bold;
  margin-top: 11px;
  padding-block: 11px;

  background-color: #f5f5f5;
`

export const RowDivider = styled.div`
  width: 100%;
  height: 1px;
  background: #cfcfcf;
`

export const ColorTableRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 14px;
  color: #414042;
`

export const Wrapper = styled.div`
  display: flex;
`

export const ColorSelected = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 8px;
  color: #414042;

  margin: 15px 0;

  .noStock {
    font-size: 12px;
    font-weight: normal;
  }
`
