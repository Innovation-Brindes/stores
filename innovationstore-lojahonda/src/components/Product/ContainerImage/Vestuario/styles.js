import styled from "styled-components"

export const ButtonVestuarioContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 1rem;
`

export const ButtonVestuario = styled.button`
  background-color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #fff;
  background-color: #ff4f00;
  cursor: pointer;
  border: 1px solid #ff4f00;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.1s ease-in-out;

  svg {
    font-size: 1.2rem;
  }

  &:hover {
    background-color: #fff;
    color: #ff4f00;
    border: 1px solid #ff4f00;
  }

  ${({ active }) => active && `background-color: #fff; color: #ff4f00; border: 1px solid #ff4f00;`}
`
