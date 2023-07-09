import styled from "styled-components"

export const ContainerImpressao = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  height: 100%;
  align-items: flex-start;
  justify-content: flex-start;
`

export const Impressao = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-image: repeating-linear-gradient(to right, #cfcfcf, #cfcfcf 5px, transparent 5px, transparent 10px);
`

export const GroupImpressao = styled.div`
  display: flex;
  width: 100%;
  gap: 0.3rem;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`
