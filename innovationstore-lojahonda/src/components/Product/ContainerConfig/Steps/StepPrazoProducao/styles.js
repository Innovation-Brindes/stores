import styled from "styled-components"

export const ContainerProducao = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  height: 100%;
  align-items: flex-start;
  justify-content: flex-start;

  span {
    font-size: 11px;
    font-weight: 400;
  }
`

export const Producao = styled.label`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`

export const ProducaoTextColor = styled.div`
  width: 100%;
  flex: 1;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  padding: 0.2rem;
  border-radius: 0.2rem;

  span {
    font-weight: 700;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-image: repeating-linear-gradient(to right, #cfcfcf, #cfcfcf 5px, transparent 5px, transparent 10px);
`

export const GroupProducao = styled.div`
  display: flex;
  width: 100%;
  gap: 0.3rem;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`
