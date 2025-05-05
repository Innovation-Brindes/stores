import { Image } from "@chakra-ui/react";
import styled from "styled-components";

export const BoxCardsZoom = styled.div`
  width: 80%;
  height: 400px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: flex-start;

  @media screen and (max-width: 768px) {
    width: 80%;
    height: 90px;
  }
`;

export const BoxCardItemZoom = styled(Image)`
  width: auto;
  height: 640px;
  transition: 0.2s;
  position: relative;
  margin: auto;
  /* background: ${(props) =>
    props.bgimg ? `url(${props.bgimg})` : "none"}; */
  &:hover {
    transform: scale(1.1, 1.1);
    transition: 0.3s;
    cursor: crosshair;
  }
  @media screen and (max-width: 1366px) {
    width: auto;
    height: 480px;
    top: -20px;
    transition: 0.2s;
    position: relative;
    margin: auto;
    /* background: ${(props) =>
      props.bgimg ? `url(${props.bgimg})` : "none"}; */
    &:hover {
      transform: scale(1.1, 1.1);
      transition: 0.3s;
      cursor: crosshair;
    }
  }
  @media screen and (max-width: 768px) {
    width: auto;
    height: 180px;
    transition: 0.2s;
    /* background: ${(props) =>
      props.bgimg ? `url(${props.bgimg})` : "none"}; */
  }
`;

export const ControlSlider = styled.div`
  width: 100%;
  height: 50px;
  /* background-color:red; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  z-index: 99;
  opacity: 0.5;

  @media screen and (max-width: 768px) {
    top: 40%;
  }
`;
