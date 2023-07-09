import styled, { keyframes } from "styled-components"

export const Heading = styled.h1`
  color: #ff4f00;
  font-size: 20px;
  font-weight: bold;
`

export const ResumoContent = styled.div`
  flex: ${({ flex }) => flex && 1};
  max-height: fit-content;
  width: 100%;
  display: ${({ show }) => (show ? "flex" : "none")};
  flex-direction: column;
  align-items: center;

  justify-content: ${({ justifyContent }) => justifyContent};

  border: ${({ border }) => border && "1px solid #cfcfcf;"};
  border-radius: 10px;
  padding: 1rem;

  //subir a borda para o topo
  margin-top: -1rem;
`

export const ProductInfo = styled.div`
  color: #414042;
  font-size: 12px;

  display: flex;
  align-self: flex-start;
  flex-direction: column;
  gap: 0.2rem;

  margin-top: 20px;

  div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.3rem;

    span {
    }

    strong {
      font-weight: bold;
    }
  }
`

export const ProductValueContent = styled.div`
  color: #414042;

  .priceProduct {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;

    span {
      font-size: 12px;
      padding-top: 10px;
    }
    strong {
      font-size: 40px;
    }
  }
`

export const ProductTotalPrice = styled.div`
  font-size: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  span {
    color: #ff4f00;
    font-weight: bold;
  }

  strong {
    color: #414042;
  }
`

export const FreteGratisContainer = styled.div`
  display: ${({ isShow }) => (isShow ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  width: 100%;
  color: white;
  gap: 0.5rem;
  margin-top: 0.5rem;

  background-color: rgb(11, 115, 248);

  border-radius: 20px;

  padding-block: 0.2rem;
  padding-inline: 0.5rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }
  span {
    font-size: 12px;
    //dots in the end of the text
    max-width: 260px;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    @media (max-width: 768px) {
      max-width: 150px;
    }
  }

  @media (max-width: 768px) {
    justify-content: space-between;
    gap: 0rem;
  }
`

export const animationLoading = keyframes`
   to {
      transform: rotate(1turn);
    }
`

export const Loader = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: conic-gradient(#0000 10%, #95c620);
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 8px), #000 0);

  animation: ${animationLoading} 1s linear infinite;
`

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-image: repeating-linear-gradient(to right, #cfcfcf, #cfcfcf 5px, transparent 5px, transparent 10px);
`

export const ContainerDivider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 0.5rem;
`

export const ContainerActions = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
`

export const Button = styled.button`
  width: 100%;
  border-radius: 23px;
  font-size: 20px;
  text-transform: uppercase;
  background: ${({ background }) => background};
  color: ${({ color }) => color};
  border: 1px solid ${({ border }) => border};
  padding-block: 0.5rem;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`
