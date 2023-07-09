import { Grid, Modal, Tooltip } from "@chakra-ui/react"
import styled from "styled-components"
import { cor_base_1, cor_base_2 } from "../../../services/cores"
import { colorBaseUltraRapido } from "./../../UltraRapido/component/FlexFiltroUltraRapido/styles"

export const BuscarContentFiltro = styled.div`
  width: 440px;
  height: 100vh;
  position: relative;
  float: left;
  z-index: 999;
  transition: 0.3s;
  /* background-color: rgb(235, 235, 235); */
  @media screen and (max-width: 768px) {
    width: 100%;
    transition: 0.3s;
    position: ${(props) => (props.viewMenuMobile ? "fixed" : "relative")};
    height: ${(props) =>
      props.isUltraRapido && !props.viewMenuMobile ? "30px" : props.viewMenuMobile ? "500px" : "150px"};
    margin-top: ${(props) => (props.viewMenuMobile ? "240px" : props.scrollY > 100 ? "-40px" : "60px")};
    margin-bottom: ${(props) =>
      props.isUltraRapido ? "160px" : props.viewMenuMobile ? "240px" : props.scrollY > 100 ? "-40px" : "50px"};
    margin-left: auto;
    margin-right: auto;
    background-color: white;
    top: 0;
  }
`
export const BuscarContentFiltroContent = styled.div`
  width: 100%;
  height: auto;
  /* height: 640px; */
  position: relative;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: revert;
  border: 1px solid #d4d4d4;
  border-radius: 5px;
  /* background-color: cadetblue; */
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 45px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    // background-color: cyan;
    background-color: white;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid rgb(238, 238, 238);
    border: none;
  }
`

export const BuscarContentFiltroContentHeader = styled.div`
  width: 400px;
  height: ${(props) => (props.isUltraRapido ? "170px" : "200px")};
  background-color: white;
  display: flex;
  flex-direction: column;
  transition: 0.3s;
  padding-top: ${(props) => (props.isUltraRapido ? "20px" : "0")};
  h1 {
    font-size: ${(props) => (props.isUltraRapido ? "40px" : "60px")};
    font-family: "Open Sans";
    font-weight: bold;
    color: ${(props) => (props.isUltraRapido ? `${colorBaseUltraRapido}` : "#58bc03")};
  }
  h2 {
    height: 77px;
    font-size: ${(props) => (props.isUltraRapido ? "22px" : "32px")};
    font-family: "Open Sans";
    font-weight: bold;
    color: ${(props) => (props.isUltraRapido ? "#494949" : "#494949")};
    span {
      color: ${(props) => (props.isUltraRapido ? `${colorBaseUltraRapido}` : "#58bc03")};
    }
  }
  p {
    padding-top: ${(props) => (props.isUltraRapido ? "10px" : "0px")};
    font-size: 14px;
    font-family: "Open Sans";
    color: ${(props) => (props.isUltraRapido ? "#494949" : "#494949")};
    text-align: center;
  }
  strong {
    color: ${colorBaseUltraRapido};
  }

  button {
    width: 200px;
    height: 40px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    background-color: ${(props) => (props.isUltraRapido ? `${colorBaseUltraRapido}` : "#58bc03")};
    border-radius: 7px;
    font-family: "Open Sans";
    font-weight: bold;
    letter-spacing: 0.03rem;
    color: white;
    display: none;
  }

  @media screen and (max-width: 768px) {
    z-index: 99;
    background-color: ${(props) => (props.scrollY > 100 ? "#eeeeee" : "white")};
    width: ${(props) => (props.viewMenuMobile ? "370px" : "100vw")};
    height: ${(props) =>
      props.isUltraRapido && props.scrollY > 100
        ? "auto"
        : !props.isUltraRapido && props.scrollY > 100
        ? "auto"
        : "auto"};
    transition: all ease 0.5s;
    position: ${(props) => (props.scrollY > 100 ? "fixed" : "relative")};
    margin-left: ${(props) => (props.scrollY > 100 ? "auto" : "-20px")};
    margin-right: ${(props) => (props.scrollY > 100 ? "auto" : "0")};
    padding-left: ${(props) => (props.scrollY > 100 ? "auto" : "40px")};
    position: ${(props) => (props.scrollY > 100 ? "fixed" : "relative")};
    display: ${(props) => (props.viewMenuMobile ? "none" : "flex")};
    padding-top: ${(props) => (props.scrollY > 100 ? "0" : "0px")};

    margin-top: ${(props) => (props.scrollY > 100 ? "0" : "3rem")};

    top: 0;
    opacity: ${(props) => (props.scrollY > 100 ? "0.9" : "1")};
    h1 {
      font-size: ${(props) => (props.isUltraRapido && props.scrollY < 100 ? "40px" : "50px")};
    }
    h2 {
      height: 60px;
      font-size: 20px;
    }
    p {
      font-size: 14px;
      display: none;
    }
    strong {
      color: ${colorBaseUltraRapido};
    }
    button {
      opacity: ${(props) => (props.scrollY > 100 ? "1" : "1")};
      display: block;
      margin-top: ${(props) => (props.scrollY > 100 ? "35px" : "30px")};
      margin-bottom: 25px;
    }
  }
`

export const BuscarContentFiltroContentHeaderMobile = styled.div`
  width: 100%;
  height: 70px;
  display: none;
  background-color: white;
  margin-top: 25px;
  @media screen and (max-width: 768px) {
    z-index: 999;
    margin-top: ${(props) => (props.isUltraRapido ? "-75px" : "30px")};
    display: ${(props) => (props.viewMenuMobile ? "block" : "none")};
  }
`

export const BuscarContentFiltroContentHeaderMobileTitle = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  /* display:${(props) => (props.viewMenuMobile ? "block" : "none")}; */
  background-color: ${(props) => (props.isUltraRapido ? `${colorBaseUltraRapido}` : "#58bc03")};
  align-items: center;
  margin-bottom: 10px;
  h1 {
    width: 58%;
    font-size: 18px;
    font-family: "Open Sans";
    font-weight: bold;
    text-align: right;
    padding-top: 8px;
    color: white;
  }
  span {
    width: 10%;
    font-size: 18px;
    font-family: "Open Sans";
    font-weight: bold;
    color: white;
  }
`

export const BuscarContentFiltroContentControl = styled.div`
  width: 400px;
  height: auto;
  @media screen and (max-width: 768px) {
    z-index: 99999;
    width: 400px;
    background-color: white;
    display: ${(props) => (props.viewMenuMobile ? "block" : "none")};
  }
  /* height:370px; */
  /* background-color: green; */
`

export const BuscarContentFiltroContentControlCustom = styled.div`
  width: 400px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`

export const BuscarContentFiltroContentControlCustomItem = styled.div`
  width: ${(props) => (props.w ? props.w + "px" : "100%")};
  height: 80px;
  border-radius: 5px;
  border: 1px solid #dadada;
  margin-bottom: 10px;
  display: flex;
  flex-direction: ${(props) => (props.fd ? props.fd : "column")};
  justify-content: center;
  align-items: center;
  h1 {
    /* width:100%; */
    height: 10px;
    font-size: 16px;
    font-family: "Open Sans";
    display: flex;
    align-items: center;
    /* text-align:center; */
  }
  h2 {
    height: 40px;
    font-size: 16px;
    font-family: "Open Sans";
    font-weight: bold;
    margin-left: 15px;
    display: flex;
    align-items: center;
  }
  input {
    width: 70%;
    height: 30px;
    font-size: 16px;
    font-family: "Open Sans";
    font-weight: bold;
    outline: none;
    ::placeholder {
      font-size: 13px;
      font-family: "Open Sans";
    }
  }

  div {
    width: 45%;
    label {
      font-size: 16px;
      font-family: "Open Sans";
      font-weight: bold;
    }
    &:nth-child(1) {
      width: 40%;
      border-right: 1px solid #dadada;
    }
    &:nth-child(2) {
      margin-left: 15px;
    }
    input {
      width: 70%;
      padding-left: 5px;
      ::placeholder {
        font-size: 11px;
        font-family: "Open Sans";
      }
    }
  }
`

export const BuscarContentFiltroContentControlItem = styled.div`
  width: ${(props) => (props.w ? props.w + "px" : "100%")};
  min-height: 80px;
  height: auto;
  border-radius: 5px;
  border: 1px solid #dadada;
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  h1 {
    min-width: 70px;
    width: ${(props) => (props.wH ? props.wH : "70px")};
    height: 50px;
    font-size: ${(props) => (props.h1F ? props.h1F : 16)}px;
    font-family: "Open Sans";
    border-right: 1px solid #dadada;
    margin-left: 15px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  h2 {
    min-width: 190px;
    height: 50px;
    font-size: 16px;
    font-family: "Open Sans";
    font-weight: bold;
    margin-left: 15px;
    display: flex;
    align-items: center;
    cursor: pointer;
    span {
      font-family: "Open Sans";
      margin-left: 5px;
    }
  }

  p {
    min-width: 250px;
    height: 80px;
    font-size: 13px;
    font-family: "Open Sans";
    display: flex;
    margin-top: 10px;
    align-items: center;
    margin-left: 15px;
    cursor: pointer;
  }

  a {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    justify-self: flex-end;
    margin-top: -25px;
    cursor: pointer;
  }

  input {
    width: 150px;
    outline: none;
    margin-left: 15px;
    font-size: 14px;
    margin-top: -8px;
    font-family: "Open Sans";
  }

  input::placeholder {
    font-family: "Open Sans";
  }

  button {
    width: 100px;
    height: 40px;
    background-color: ${(props) => (props.isUltraRapido ? `${colorBaseUltraRapido}` : "#58bc03")};
    font-size: 14;
    font-family: "Open Sans";
    font-weight: bold;
    color: white;
    border-radius: 5px;
  }

  @media screen and (max-width: 768px) {
    button {
      display: none;
    }
  }
`

export const BuscarContentFiltroContentControlPrazo = styled.div`
  width: "100%";
  min-height: 80px;
  height: auto;
  border-radius: 5px;
  border: 1px solid #dadada;
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;

  h1 {
    width: 92.5%;
    height: 20px;
    font-size: 16px;
    font-family: "Open Sans";
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-top: 5px;
  }
`

export const BuscarContentFiltroContentControlPrazoGrid = styled(Grid)`
  width: 100%;
  height: 60px;
  grid-template-columns: repeat(auto-fill, 73px);
  /* background-color:red; */
`

export const PrazoItem = styled.div`
  width: 75px;
  height: 60%;
  /* background-color:green; */
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 5px;
  border-right: 1px solid rgb(0, 0, 0, 0.1);
  cursor: pointer;

  &:nth-child(5) {
    border-right: none;
  }

  h1 {
    width: 65px;
    height: 40px;
    display: block;
    text-align: center;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    font-size: 14px;
    font-family: "Open Sans";
    border-radius: 10px;
  }

  p {
    height: 10px;
    font-size: 11px;
    text-align: center;
    font-family: "Open Sans";
    /* background-color:red; */
  }
`

export const BuscarContentFiltroContentControlItemGridCores = styled(Grid)`
  width: 290px;
  min-height: 60px;
  margin-left: 8px;
  margin-top: 20px;
  margin-bottom: 20px;
  /* background-color:rgb(0,0,0,0.2); */

  .boxcor {
    width: 20px;
    height: 20px;
    background-color: green;
    border-radius: 20px;
    cursor: pointer;
    transition: 0.2s;
    margin: 2px;
  }

  .boxcor:hover {
    transform: scale(1.1, 1.1);
    transition: 0.2s;
  }
`

export const BoxCor = styled(Tooltip)`
  /* width:100px; */
  height: 30px;
  font-size: 14px;

  /*     
    div{
      width:20px;
      height:20px;
      background-color:green;
      border-radius:20px;
      cursor: pointer;
      transition: 0.2s;
      margin:2px;
    }

    div:hover{
      transform:scale(1.1,1.1);
      transition: 0.2s;
    } */
`

export const BuscarContentFiltroContentControlItemBrindes = styled.div`
  width: 1110px;
  /* width: ${(props) => (props.view ? 1353 : 0)}px; */
  height: ${(props) => (props.view ? 292 : 0)}px;
  background-color: white;
  border: 1px solid #d4d4d4;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => (props.view ? 1 : 0)};
  left: 19px;
  margin-top: 250px;
  // margin-left:20px;
  z-index: ${(props) => (props.view ? 999 : -1)};
  border-radius: 5px;
  box-shadow: 1px 1px 8px 5px rgb(212, 212, 212, 0.3);
  transition: 0.3s;

  @media screen and (max-width: 1460px) {
    margin-left: 0px;
    /* width:1300px; */
  }

  @media screen and (max-width: 1366px) {
    margin-left: 0px;
    width: 980px;
  }

  @media screen and (max-width: 1310px) {
    margin-left: 0px;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
  /* @media screen and (max-width: 1100px) {
      margin-left:0px;
      width:900px;
  } */
`

export const BuscarContentFiltroContentControlItemBrindesContent = styled.div`
  width: 100%;
  height: 95%;
  display: ${(props) => (props.view ? "flex" : "none")};
  justify-content: center;
  // margin-left:15px;

  @media screen and (max-width: 1170px) {
    width: 100%;
  }
  /* background-color: yellow; */
`

export const BuscarContentFiltroContentControlItemBrindesContentGrid = styled.div`
  width: 98%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media screen and (max-width: 1170px) {
    width: 80%;
  }
  /* background-color: rgb(150,150,150, 0.5); */
`
export const BuscarContentFiltroContentControlItemBrindesContentGridColumn = styled.div`
  /* width: 15.6%; */
  min-width: 185px;
  height: 100%;
  margin: 2px;
  /* background-color:green; */
  display: flex;
  flex-direction: column;

  a {
    width: 100%;
    font-size: 12px;
    margin: 2px;
    font-family: "Open Sans";
    margin-bottom: 5px;
    cursor: pointer;
    color: #000;
    display: block;
    text-align: left;
  }

  a:hover {
    background-color: ${(props) => (props.isUltraRapido ? "#FED8B1" : "#daeac5")};
  }

  &:nth-child(6) {
    min-width: 145px;
  }

  @media screen and (max-width: 1366px) {
    min-width: 160px;
    a {
      font-size: 11.7px;
    }
  }

  @media screen and (max-width: 1280px) {
    min-width: 135px;
    a {
      font-size: 11px;
    }
    &:nth-child(6) {
      min-width: 130px;
    }
  }

  @media screen and (max-width: 1170px) {
    min-width: 105px;
    a {
      font-size: 10px;
    }
  }
`

export const BuscarContentFiltroContentControlItemBrindesContentImgProd = styled.div`
  width: 240px;
  min-width: 240px;
  height: 100%;
  /* background-color:yellow; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0px;
  img {
    position: relative;
    float: left;
    height: 290px;
  }

  @media screen and (max-width: 1366px) {
    img {
      width: 240px;
    }
  }
`

export const BuscarContentFiltroContentControlItemBrindesCores = styled.div`
  width: 400px;
  /* width: ${(props) => (props.view ? 1353 : 0)}px; */
  height: ${(props) => (props.view ? 292 : 0)}px;
  background-color: white;
  border: 1px solid #d4d4d4;
  border-top: none;
  border-radius: 5px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-self: left;
  opacity: ${(props) => (props.view ? 1 : 0)};
  z-index: ${(props) => (props.view ? "none" : "-1")};
  /* justify-content:center; */
  margin-top: 310px;
  margin-left: -1px;
  transition: 0.3s;
`

export const BuscarContentFiltroContentControlItemBrindesCoresHeader = styled.div`
  width: 90%;
  height: 50px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-top: 8px;
  display: ${(props) => (props.view ? "block" : "none")};
  transition: 0.4s;
`

export const BuscarContentFiltroContentControlItemBrindesCoresBody = styled.div`
  width: 90%;
  height: 210px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-top: 8px;
  overflow-y: auto;
  display: ${(props) => (props.view ? "block" : "none")};
  transition: 0.4s;
  li {
    width: 90%;
    height: 40px;
    margin: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style-type: none;

    input {
      width: 25px;
      height: 25px;
      cursor: pointer;
    }
    input[type="checkbox"]:checked:before {
      content: "";
      display: block;
      position: relative;
      width: 25px;
      height: 25px;
      left: 0px;
      background: url("/images/check-verde.png");
      background-color: white;
      background-size: 100% 100%;
    }

    p {
      height: 20px;
      padding-top: 5px;
      font-size: 16px;
      font-family: "Open Sans";
    }
  }
`

export const BuscarContentFiltroContentControlItemBrindesPrazo = styled.div`
  width: 400px;
  /* width: ${(props) => (props.view ? 1353 : 0)}px; */
  height: ${(props) => (props.view ? 250 : 0)}px;
  background-color: white;
  /* border: 1px solid #d4d4d4; */
  border: ${(props) => (props.view ? "1px solid #d4d4d4" : "none")};
  border-top: none;
  border-radius: 5px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-self: left;
  opacity: ${(props) => (props.view ? 1 : 0)}px;
  z-index: ${(props) => (props.view ? "none" : "-1")};
  /* justify-content:center; */
  margin-top: 300px;
  margin-left: -1px;
  transition: 0.3s;
`

export const BuscarContentFiltroContentControlItemBrindesPrazoHeader = styled.div`
  width: 90%;
  height: 50px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-top: 8px;
  display: ${(props) => (props.view ? "block" : "none")};
  transition: 0.4s;
`

export const BuscarContentFiltroContentControlItemBrindesPrazoBody = styled.div`
  width: 90%;
  height: 230px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-top: 8px;
  overflow-y: auto;
  display: ${(props) => (props.view ? "block" : "none")};
  transition: 0.4s;
  li {
    width: 90%;
    height: 40px;
    margin: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style-type: none;

    input {
      width: 25px;
      height: 25px;
      cursor: pointer;
    }

    input[type="checkbox"]:checked:before {
      content: "";
      display: block;
      position: relative;
      width: 25px;
      height: 25px;
      left: 0px;
      background: url("/images/check-verde.png");
      background-color: white;
      background-size: 100% 100%;
    }

    p {
      height: 20px;
      padding-top: 5px;
      font-size: 13px;
      font-family: "Open Sans";

      strong {
        margin-left: 6px;
        margin-right: 6px;
      }
    }
  }
`

export const CategoriasModalMobile = styled(Modal)`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`

export const BuscarContentSlideTopoFilterBodyBrindesMobile = styled.div`
  width: 369px;
  /* width: ${(props) => (props.view ? 1353 : 0)}px; */
  height: ${(props) => (props.view ? 292 : 0)}px;
  height: 292px;
  background-color: white;
  border: 1px solid #d4d4d4;
  position: absolute;
  display: none;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => (props.view ? 1 : 0)};
  left: -1;
  margin-top: 290px;
  z-index: ${(props) => (props.view ? 99 : -1)};
  border-radius: 5px;
  box-shadow: 1px 1px 8px 5px rgb(212, 212, 212, 0.3);
  transition: 0.3s;
  overflow-x: scroll;
  overflow-y: scroll;

  @media screen and (max-width: 768px) {
    display: flex;
  }
`

export const BuscarContentSlideTopoFilterBodyBrindesMobileContent = styled.div`
  width: 98%;
  height: 95%;
  display: ${(props) => (props.view ? "flex" : "none")};
  justify-content: center;
  /* background-color: yellow; */
`

export const BuscarContentSlideTopoFilterBodyBrindesMobileContentGrid = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-right: 1px solid #d4d4d4;

  @media screen and (max-width: 768px) {
    width: 100%;
    border-right: none;
  }

  /* background-color: rgb(150,150,150, 0.5); */
`
export const BuscarContentSlideTopoFilterBodyBrindesMobileContentGridColumn = styled.div`
  /* width: 15.6%; */
  min-width: 100%;
  height: 100%;
  margin: 2px;
  /* background-color:green; */
  display: flex;
  flex-direction: column;

  a {
    width: 100%;
    font-size: 14px;
    margin: 2px;
    font-family: "Open Sans";
    margin-bottom: 5px;
    padding-left: 0px;
    display: block;
    text-align: left;
    cursor: pointer;
  }

  a:hover {
    background-color: #daeac5;
  }

  &:nth-child(6) {
    min-width: 145px;
  }
`

export const BuscarContentSlideTopoFilterBodyBrindesMobileContentImgProd = styled.div`
  width: 240px;
  height: 100%;
  /* background-color:yellow; */
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    /* height:90%; */
  }

  @media screen and (max-width: 1366px) {
    img {
      /* height:160px; */
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const BuscarContentSlideTopoFilterControlItemText = styled.div`
  width: ${(props) => (props.wid ? props.wid : 40)}%;
  height: 50px;
  display: ${(props) => (props.value ? "block" : "flex")};
  flex-direction: ${(props) => (props.value ? "none" : "row")};
  /* z-index: revert; */
  .title {
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-between;

    p {
      width: 50%;
      display: flex;
      justify-content: flex-start;
      input {
        left: 0px;
        margin: 0px;
        margin-left: 5px;
        width: 50px;
      }

      font-size: 14px;
    }

    @media screen and (max-width: 1150px) {
      p {
        font-size: 14px;
        input {
          font-size: 14px;
        }
      }
    }
  }

  h1 {
    min-width: 70px;
    width: ${(props) => (props.wH ? props.wH : "70px")};
    height: 50px;
    font-size: ${(props) => (props.h1F ? props.h1F : 16)}px;
    font-family: "Open Sans";
    border-right: 1px solid #dadada;
    margin-left: 15px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  h2 {
    min-width: 190px;
    height: 50px;
    font-size: 16px;
    font-family: "Open Sans";
    font-weight: bold;
    margin-left: 15px;
    display: flex;
    align-items: center;
    cursor: pointer;
    span {
      font-family: "Open Sans";
      margin-left: 5px;
    }
  }

  p {
    min-width: ${(props) => (props.value ? "120px" : "250px;")};
    height: ${(props) => (props.value ? "20px" : "50px")};
    font-size: ${(props) => (props.value ? "16px" : "13px")};
    font-family: "Open Sans";
    display: flex;
    align-items: center;
    margin-left: ${(props) => (props.value ? "0px" : "15px")};
    cursor: pointer;
    strong {
      margin-left: 5px;
    }
  }

  a {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    justify-self: flex-end;
    margin-top: -25px;
    cursor: pointer;
  }

  input {
    outline: none;
    margin-left: 15px;
    font-size: 16px;
    margin-top: 0px;
    font-family: "Open Sans";
    font-weight: bold;
  }

  input::placeholder {
    font-family: "Open Sans";
  }

  div {
    display: flex;
    justify-content: flex-start;

    label {
      width: 30px;
      font-size: 16px;
      font-family: "Open Sans";
      font-weight: 600;
    }

    input {
      width: 100%;
      outline: none;
      font-size: 16px;
      font-family: "Open Sans";
      font-weight: 600;

      ::placeholder {
        font-weight: 400;
      }
    }
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 14px;
    }
    h2 {
      font-size: 14px;
    }

    p {
      width: 165px;
      min-width: 165px;
    }

    a {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      justify-self: flex-end;
      margin-top: -25px;
      cursor: pointer;
    }

    input {
      outline: none;
      margin-left: 15px;
      font-size: 16px;
      margin-top: 0px;
      font-family: "Open Sans";
      font-weight: bold;
    }

    input::placeholder {
      font-family: "Open Sans";
    }

    div {
      display: flex;
      justify-content: flex-start;

      label {
        width: 30px;
        font-size: 16px;
        font-family: "Open Sans";
        font-weight: 600;
      }

      input {
        width: 100%;
        outline: none;
        font-size: 16px;
        font-family: "Open Sans";
        font-weight: 600;

        ::placeholder {
          font-weight: 400;
        }
      }
    }
  }
`

export const BuscarContentSlideTopoFilterControlItemArrow = styled.div`
  width: ${(props) => (props.wid ? props.wid : 50)}%;
  height: 50px;
  /* background-color: blue; */
  display: flex;
  justify-content: flex-end;
  /* align-items:center; */
  margin-top: -10px;
  cursor: pointer;
`

export const BuscarContentSlideTopoFilterControlItem = styled.div`
  width: ${(props) => (props.wid ? props.wid : 100)}%;
  height: 81px;
  border: 1px solid #d4d4d4;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;

  @media screen and (max-width: 1366px) {
    height: 60px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const BuscarContentFiltroContentSubmit = styled.div`
  width: 400px;
  height: 60px;
  /* background-color: blue; */
  display: flex;
  justify-content: center;
  button {
    width: 100%;
    height: 50px;
    /* background-color: #58bc03; */
    background-color: ${(props) => (props.isUltraRapido ? `${colorBaseUltraRapido}` : "#58bc03")};
    border-radius: 10px;
    font-size: 18px;
    font-family: "Open Sans";
    font-weight: bold;
    letter-spacing: 0.03rem;
    color: white;
  }
`

export const BuscarContentFiltroContentControlItemSubmit = styled.div`
  width: 100%;
  height: 60px;
  display: none;
  justify-content: flex-end;
  button {
    width: 100%;
    height: 60px;
    background-color: ${(props) => (props.isUltraRapido ? `${colorBaseUltraRapido}` : "#58bc03")};
    margin-top: ${(props) => (props.isUltraRapido && props.viewMenuMobile ? "50px" : "20px")};
    font-size: 15px;
    font-family: "Open Sans";
    font-weight: bold;
    color: white;
    border-radius: 8px;
  }

  @media screen and (max-width: 768px) {
    display: flex;
  }
`
