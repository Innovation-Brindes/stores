import styled from "styled-components";
import { Grid } from "@chakra-ui/react";

export const ContainerGrid = styled(Grid)`
  width: 1100px;
  margin-top: 20px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  grid-template-columns: repeat(5, 1fr);
  @media screen and (max-width: 1366px) {
    grid-template-columns: repeat(4, 1fr);
    width: 900px;
    margin-left: auto;
    margin-right: auto;
  }
  @media screen and (max-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
    width: 800px;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    width: 400px;
    margin-left: auto;
    margin-right: auto;
  }
`;
