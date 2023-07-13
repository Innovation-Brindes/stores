import styled from "styled-components"

export const RelatedProductsContainer = styled.div`
  font-family: "Open Sans", sans-serif;
  width: 100%;

  --webkit-font-smoothing: antialiased;

  background-color: #fff;
`

export const RelatedProductsContentInside = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;

  max-width: 1280px;
  margin: 0 auto;
  padding-block: 38px;

  height: fit-content;

  margin-bottom: 2rem;
  margin-top: 1rem;

  h1,
  p {
    margin: 0;
  }

  @media (max-width: 1366px) {
    max-width: 1280px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 1380px;
  }
`

export const RelatedProductsContent = styled.div`
  margin-top: 50px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(192px, 1fr));
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 1rem;
  align-items: center;
  gap: 1rem;

  a {
    text-decoration: none;
    color: inherit;
  }

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
  }
`

export const ContainerTextSeo = styled.div`
  margin-top: 50px;
  font-size: 10px;
  color: #919191;
  justify-content: flex-start;
  padding-inline: 1rem;
`
