import { Box, Grid } from "@chakra-ui/react";
import styled from "styled-components";
import { colorBaseUltraRapido } from "./../FlexFiltroUltraRapido/styles";

export const UltraRapidoContainer = styled(Box)`
  height: auto;
  overflow: hidden;
  margin-bottom: 50px;
`;
export const UltraRapidoContainerContent = styled(Box)`
  height: 100%;
`;
export const UltraRapidoContainerSlide = styled(Box)`
  .topo {
    width: 100%;
    max-width: 1570px;
    height: 465px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 15px;

    .frame {
      overflow-x: "hidden";
      overflow-y: "hidden";
      width: 100%;
      max-width: 1900px;
      height: 465px;
    }
    .framelg {
      overflow-x: "hidden";
      overflow-y: "hidden";
      width: 100%;
      max-width: 1900px;
      height: 520px;
    }
    .frame_mobile {
      overflow-x: "hidden";
      overflow-y: "hidden";
      width: 100%;
      height: 520px;
    }

    @media screen and (max-width: 1700px) {
      height: 420px;
    }

    @media screen and (max-width: 1450px) {
      height: 370px;
    }

    @media screen and (max-width: 768px) {
      height: 520px;
    }
  }
  .topolg {
    width: 100%;
    max-width: 1900px;
    height: 465px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 15px;

    @media screen and (max-width: 1700px) {
      height: 420px;
    }

    @media screen and (max-width: 1450px) {
      height: 370px;
    }
  }
  @media screen and (max-width: 768px) {
    width: 400px;
    height: 380px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
  }
  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;
export const UltraRapidoContainerGridProdutos = styled(Box)`
  width: 100%;
  position: relative;
  z-index: 997;
  // background-color: blueviolet;
  background-size: 100%;
  background-repeat: repeat-y;
`;
export const UltraRapidoContainerGridProdutosFilter = styled(Box)`
  width: 52%;
  max-width: 1110px;
  min-width: 1098px;
  top: 0vw;
  height: 80px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  z-index: 997;
  background-color: white;
  // background-color: #4d4d4d;
  display: flex;
  justify-content: center;
  input[type="text"],
  input[type="password"],
  textarea,
  select {
    outline: none;
  }

  @media screen and (max-width: 1120px) {
    min-width: 900px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 400px;
    min-width: 400px;
  }
`;
export const Pagination = styled(Box)`
  width: 510px;
  height: 34px;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  // display: flex;
  // justify-content: center;
  top: 20%;
  left: 270px;
  margin-right: 10px;
  display: flex;
  justify-content: center;

  .page-item {
    font-family: "Akrobat";
    color: black;
    a {
      cursor: pointer;
      text-decoration: none;
      color: black;
      &:hover {
        background-color: #fafad2;
        color: ${colorBaseUltraRapido};
        font-size: 17px;
        border-bottom: 3px solid ${colorBaseUltraRapido};
      }
    }
  }

  .page-item-active {
    font-family: "Akrobat";
    color: white;
    background-color: ${colorBaseUltraRapido};
    border-bottom: 2.5px solid ${colorBaseUltraRapido};
    a {
      background-color: ${colorBaseUltraRapido};
      text-decoration: none;
      color: white;
      cursor: no-drop;
    }
  }

  @media screen and (max-width: 768px) {
    width: 400px;
    max-width: 400px;
    min-width: 400px;
    left: 0px;
    margin-right: 0px;

    /* .page-item {
      display:none;
      &:first-child{
        display:block;
      }
      &:last-child{
        display:block;
      }
    } */
  }
`;
export const FilterSelect = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
  background-color: white;
  background-image: url("/images/menu/seta.png");
  background-repeat: no-repeat;
  background-position-x: 90%;
  background-position-y: 11px;
  padding-left: 15px;
  width: 200px;
  height: 34px;
  position: relative;
  border-radius: 3px;
  border: 0.8px solid rgb(191, 191, 191);
  top: 20%;
  left: 363px;
  font-size: 100%;
  font-family: "Akrobat";
  cursor: pointer;
  option {
    position: relative;
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const GridProdutosProdutos = styled(Grid)`
  width: 848px;
  max-width: 1100px;
  height: auto;
  overflow: hidden;
  position: relative;
  /* background-color:red; */
  z-index: 999;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-evenly;
  top: 0vw;
  /* background-color: white; */
  grid-template-columns: repeat(auto-fill, 212px);

  @media screen and (max-width: 768px) {
    width: 400px;
    grid-template-columns: repeat(auto-fill, 200px);
  }
`;
export const ProdutosLoading = styled(Box)`
  width: 100%;
  height: 300px;
  position: relative;
  float: left;
`;
export const ProdutosLoadingImage = styled(Box)`
  width: 100%;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
`;
export const UltraRapidoContent = styled.div`
  width: 1309px;
  min-height: 800px;
  height: auto;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1366px) {
    width: 95%;
  }
  @media screen and (max-width: 768px) {
    width: 400px;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
  }
`;
