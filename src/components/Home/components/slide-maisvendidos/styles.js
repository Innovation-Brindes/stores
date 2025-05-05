import styled from 'styled-components';
import { Image, Box, Text } from "@chakra-ui/react";

export const HomeContentBodyCategoriasGridItemTextSlideVendido = styled(Text)`
  text-align: center;
  color: black;
  font-size: 36px;
  font-family: 'Poppins bold';
  @media screen and (max-width: 1366px) {
    font-size: 30px;
    text-align: center;
    width: 400px;
  }
  @media screen and (max-width: 768px) {
    font-size: 24px;
    text-align: center;
    width: 400px;
  }
`;

export const HomeContentBodyCategoriasGridItemImageSlideVendido = styled(Image)`
  width: 361px;
  height: 294px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  transition: all ease 0.2s;
  text-decoration: none;

  &:hover {
    transform: scale(1.05, 1.05);
    transition: all ease 0.2s;
  }

  @media screen and (max-width: 1366px) {
    width: 320px;
    height: auto;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    transition: all ease 0.2s;
    text-decoration: none;

    &:hover {
      transform: scale(1.05, 1.05);
      transition: all ease 0.2s;
    }
  }
  @media screen and (max-width: 1230px) {
    width: calc(361px - 10%);
    height: calc(294px - 10%);
    background-size: calc(361px - 10%) calc(294px - 10%);
  }

  @media screen and (max-width: 1140px) {
    width: calc(361px - 15%);
    height: calc(294px - 15%);
    background-size: calc(361px - 15%) calc(294px - 15%);
    margin-left: 0px;
  }
  @media screen and (max-width: 768px) {
    width: 350px;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    text-decoration: none;
    &:hover {
      transform: scale(1, 1);
      transition: all ease 0.2s;
    }
  }
`;

export const BoxCards = styled.div`
    width:95%;
    height:330px;
    position:relative;
    margin-left:auto;
    margin-right:auto;
    display:flex;
    justify-content:space-between;
    @media screen and (max-width:768px){
      width: 100%;
      height:230px;
      padding-right: 12px;
    }
`
export const BoxCardsItem = styled(Box)`
    width: 200px; 
    height: 300px;
    transition: all ease 0.2s;
    &:hover{
        transform:scale(1.1,1.1);
        transition: all ease 0.2s;
    }
    @media screen and (max-width:768px){
        width: 125px;
        height: 230px;
        &:hover{
        transform:scale(1,1);
        transition: all ease 0.2s;
        }
    }
`

export const BoxCardItem = styled(Image)`
    width:161px;
    height:161px;
    background-repeat: no-repeat;
    cursor: pointer;
    background: ${props => (props.bgimg ? `url(${props.bgimg})` : 'none')};
    background-size: 161px 161px;
    margin: 32px auto 0 auto;

    @media screen and (max-width:1366px){
        width:161px;
        height:161px;
        background-size: 161px 161px;
    }
    @media screen and (max-width:1230px){
        width:130px;
        height:130px;
        background-size: 130px 130px;
    }
    @media screen and (max-width:768px){
        width:125px;
        height:auto;
    }
`