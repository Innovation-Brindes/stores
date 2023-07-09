import * as Dialog from "@radix-ui/react-dialog"
import styled from "styled-components"

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
  max-width: 800px;
  width: 100%;
  background: white;
  padding: 30px;
  border-radius: 4px;

  position: relative;

  .footer {
    display: flex;
    justify-content: flex-end;
    font-size: 0.9rem;
  }
`
export const ModalTitle = styled(Dialog.Title)`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #414042;
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

  .header-title {
    padding: 1rem 0.5rem;
    text-align: center;
    color: #414042;
    background: #f2f2f2;
    border-radius: 4px;
    font-size: 1.2rem;
    font-weight: 600;
  }

  .table-header {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    place-items: center;
    padding: 1rem 0.5rem;
    background-color: #ff4f00;
    border-radius: 4px;
    color: white;
    font-weight: 600;

    span {
      font-size: 0.7rem;
    }
  }

  .table-body-group {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }

  .table-body {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    place-items: center;
    padding: 1rem 0.5rem;
    background-color: #f2f2f2;
    border-radius: 4px;
    color: #414042;
    font-weight: 600;
  }
`

export const ModalCloseButton = styled(Dialog.Close)`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #414042;
  font-size: 1.2rem;
  font-weight: 600;
  transition: all 0.1s ease-in-out;

  svg {
    font-size: 2.2rem;
  }

  &:hover {
    color: #ff4f00;
  }
`
