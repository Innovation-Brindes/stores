import styled from "styled-components"

export const BoxBestOption = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.6rem;
`
export const BoxBestOptionItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  width: 100%;

  padding-inline: 15px;
  padding-block: 5px;
  border: 1px solid ${(props) => (props.isSelected ? "#ff4f00" : "#cfcfcf")};
  cursor: pointer;
  border-radius: 5px;

  transition: all 0.2s ease-in-out;

  @media (max-width: 768px) {
    padding-inline: 10px;
    padding-block: 7px;
  }
`
export const BoxBestOptionItemContent = styled.div`
  display: flex;
  flex-direction: column;
`
export const BoxBestOptionItemContentHeader = styled.div`
  h1 {
    color: #414042;
    font-size: 14px;
    font-weight: 700;
  }
`
export const BoxBestOptionItemContentBody = styled.div`
  color: #414042;
  strong {
    font-weight: 400;
    font-size: 14px;
  }

  span {
    font-size: 9px;
    margin-left: 0.3rem;
  }
`
