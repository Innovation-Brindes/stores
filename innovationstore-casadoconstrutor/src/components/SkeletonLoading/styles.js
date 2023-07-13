import styled, { keyframes } from "styled-components"

const skeletonLoading = keyframes`
   0% {
    background-color: hsl(200, 20%, 80%);
  }
  100% {
    background-color: hsl(200, 20%, 95%);
  }
`

export const Skeleton = styled.div`
  animation: ${skeletonLoading} 1s ease-in-out infinite alternate;

  width: 100%;
  height: ${({ height }) => height}px;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const SkeletonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 10px;
`

export const SkeletonCheckbox = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: hsl(200, 20%, 80%);
`

export const SkeletonContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
`

export const SkeletonText = styled.div`
  width: 108px;
  height: 20px;
  border-radius: 5px;
  background-color: hsl(200, 20%, 80%);
`
