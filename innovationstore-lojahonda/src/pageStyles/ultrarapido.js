import styled from "styled-components"
import { Grid, Image } from "@chakra-ui/react"

export const Container = styled(Grid)`
  grid-template-columns: repeat(5, 1fr);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 425px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (max-width: 320px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const ContainerImage = styled(Image)`
  margin: -15px auto;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;

  @media (max-width: 720px) {
    margin-top: 1rem;

    width: 600px;
  }
`
