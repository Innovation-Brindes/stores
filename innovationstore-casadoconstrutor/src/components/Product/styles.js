import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: auto;
  padding: 0.9rem 0;

  margin-top: 1rem;

  background-color: #fff;

  ${({ disabled }) =>
    disabled &&
    `
    pointer-events: none;
    cursor: not-allowed!important;

    h1, h2, div, span, svg {
      color: #cfcfcf!important;
      border-color: #cfcfcf!important;
      cursor: not-allowed!important;
    }
  `}

  border: ${({ border }) => border};
  border-color: #cfcfcf;

  @media (max-width: 768px) {
    padding: 0.9rem 1rem;
  }
`

export const BackgroundFooter = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
`
