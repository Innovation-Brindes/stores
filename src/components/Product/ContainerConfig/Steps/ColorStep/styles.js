import styled from "styled-components"

export const AccordionHeaderColors = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;

  color: #414042;

  .stock {
    font-size: 11px;
  }
`

export const AccordionColorsRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0.5rem 0.5rem 0.5rem 0;
`

export const AccordionFooterPanelColors = styled.div`
  display: flex;
  align-self: flex-end;
  justify-content: flex-end;
  gap: 0.5rem;
  padding-top: 43px;

  color: #919191;
  font-size: 10px;
`

export const Sizes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 14px;
    font-weight: 400;
  }
`

export const SizeContainer = styled.div`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.columns}, 1fr)`};
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;

  color: #414042;

  padding: 0.5rem 0.5rem 0.5rem 0;

  place-items: center;

  span {
    font-size: 12px;

    padding: 0.5rem;
    border-radius: 6px;
    background-color: #f2f2f2;
    cursor: pointer;

    &:hover {
      background-color: #e2e2e2;
    }
  }
`
