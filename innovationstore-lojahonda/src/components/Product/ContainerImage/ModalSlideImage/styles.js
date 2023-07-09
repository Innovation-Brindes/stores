import styled from "styled-components"

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  /* height: 100vh; */
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9998;
  display: ${(props) => (props.open ? "block" : "none")};

  @media (max-width: 768px) {
    display: none;
  }
`

export const ButtonClose = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: #333;
  z-index: 9999;

  svg {
    font-size: 1.5rem;
    color: #333;
  }

  &:hover {
    filter: brightness(0.8);
    transition: all 0.3s ease;
  }
`

export const ContainerModalSlideImage = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 45rem;
  height: 38rem;
  background-color: #fff;
  border-radius: 0.3rem;
  display: ${(props) => (props.open ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0 1rem 1rem 1rem;
  z-index: 9999;
  box-shadow: 0 0 0.5rem 0.1rem rgba(0, 0, 0, 0.2);
  overflow: hidden;

  @media (max-width: 768px) {
    display: none;
  }
`

export const ContentModalSlideImage = styled.div`
  position: relative;
`

export const ContainerButtonClose = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  padding-bottom: 1rem;
  padding-top: 1rem;
`

export const ContainerImage = styled.div`
  object-fit: cover;
  width: 100%;
`

export const ContainerButtonController = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 9999;

  button {
    svg {
      font-size: 2rem;
    }
  }
`
