import styled from "styled-components"

export const LayoutBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  display: grid;
  margin: 0 auto;
  --webkit-font-smoothing: antialiased;

  grid-gap: 1rem;
`

export const RelatedBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  display: grid;
  margin: 0 auto;
  --webkit-font-smoothing: antialiased;

  grid-gap: 1rem;
`

export const ProductContainer = styled.div`
  font-family: "Open Sans", sans-serif;
  width: 100%;
  background-color: #fff;
`

export const ProductContent = styled.div`
  width: 100%;

  display: grid;

  max-width: 1280px;
  //margin de 1 rem nas laterais e alinha ao centro
  margin: 0 auto;
  place-content: center;
  gap: 30px;

  background-color: #fff;
  grid-template-columns: 427px 430px 325px;

  height: fit-content;

  h1,
  p {
    margin: 0;
  }

  @media (max-width: 1366px) {
    max-width: 1280px;
    grid-template-columns: 427px 430px 325px;
    place-content: center;
  }

  @media (max-width: 1280px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    max-width: 1380px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 1380px;
  }
`
