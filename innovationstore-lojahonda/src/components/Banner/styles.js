import styled, { keyframes } from "styled-components"

export const animationImageScale = keyframes`
  from {
    opacity: 0;
    transform: scale(1.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`

export const animationTranslate = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

export const BannerContainer = styled.div`
  width: 100%;
  height: 300px;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
`

export const BannerCurrentImage = styled.img`
  width: 100%;

  object-fit: cover;

  animation: ${animationTranslate} 1s ease-in-out;
`
