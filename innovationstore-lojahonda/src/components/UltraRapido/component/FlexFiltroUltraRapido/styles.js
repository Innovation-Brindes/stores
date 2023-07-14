import { Modal, RangeSlider } from "@chakra-ui/react"
import styled from "styled-components"
import { Flex } from "@chakra-ui/react"

export const colorBaseUltraRapido = "#cc0000"

export const SetaSlider = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${colorBaseUltraRapido};
  position: relative;

  top: ${(props) => props.top};
  right: ${(props) => props.right};

  &::after {
    content: "";
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 10px 10px;
    border-color: transparent transparent #fff transparent;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    ${(props) =>
      props.arrowRight &&
      `
      transform: translate(-50%, -50%) rotate(315deg);
    `}

    ${(props) =>
      props.arrowLeft &&
      `
      transform: translate(-50%, -50%) rotate(135deg);
    `}
  }
`

export const UltraRapidoContentSlide = styled.div`
  width: 100%;
  height: 747px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  background-color: white;

  @media screen and (max-width: 1366px) {
    width: 100%;
    height: 530px;
  }

  @media screen and (max-width: 1200px) {
    width: 100%;
    height: 530px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 640px;
  }

  /* 
  @media screen and (max-width: 1700px) {
      height: 420px;
  }
  
  @media screen and (max-width: 1450px) {
      height: 370px;
  }
  display: block;
  @media screen and (max-width: 768px) {
    display: none;
  } */
`

export const UltraRapidoContentSlideTopo = styled.div`
  width: 1380px;
  height: 100%;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  z-index: revert;
  display: flex;
  justify-content: space-between;
  /* background-color:yellow; */

  @media screen and (max-width: 1366px) {
    width: 90%;
    justify-content: center;
  }

  @media screen and (max-width: 1150px) {
    justify-content: flex-start;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`

export const UltraRapidoContentSlideTopoFilter = styled.div`
  width: 485px;
  height: 100%;
  /* background-color:cyan; */
  @media screen and (max-width: 1366px) {
    margin-right: 100px;
  }
  @media screen and (max-width: 1150px) {
    margin-right: 0px;
    width: 400px;
  }
  @media screen and (max-width: 768px) {
    margin-right: 0px;
    width: 100%;
  }
`

export const UltraRapidoContentSlideTopoFilterHeader = styled.div`
  width: 100%;
  height: 360px;
  /* background-color:red; */

  h1 {
    font-size: 110px;
    font-family: "Gisha Bold";
    line-height: 85%;
    background: -webkit-linear-gradient(#7fbc04, #7fbc04, #58bc03, #58bc03);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  h2 {
    font-size: 35px;
    font-family: "Gisha Bold";
    line-height: 98%;
    color: #58bc03;
    span {
      color: black;
    }
  }
  p {
    font-size: 18px;
    font-family: "Open Sans";
  }

  @media screen and (max-width: 1366px) {
    height: 200px;
    h1 {
      font-size: 50px;
      font-family: "Gisha Bold";
      line-height: 85%;
      background: -webkit-linear-gradient(#7fbc04, #7fbc04, #58bc03, #58bc03);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    h2 {
      font-size: 25px;
      font-family: "Gisha Bold";
      line-height: 98%;
      color: #58bc03;
      span {
        color: black;
      }
    }
    p {
      font-size: 15px;
      font-family: "Open Sans";
    }
  }
  @media screen and (max-width: 1200px) {
    height: 200px;
    h1 {
      font-size: 50px;
      font-family: "Gisha Bold";
      line-height: 85%;
      background: -webkit-linear-gradient(#7fbc04, #7fbc04, #58bc03, #58bc03);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    h2 {
      font-size: 25px;
      font-family: "Gisha Bold";
      line-height: 98%;
      color: #58bc03;
      span {
        color: black;
      }
    }
    p {
      font-size: 15px;
      font-family: "Open Sans";
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const UltraRapidoContentSlideTopoFilterHeaderMobile = styled.div`
  width: 100%;
  height: 320px;
  display: none;
  /* background-color:red; */
  p {
    font-size: 15px;
    font-family: "Open Sans";
    padding-left: 5px;
  }
  @media screen and (max-width: 768px) {
    display: block;
  }
`

export const UltraRapidoContentSlideTopoFilterHeaderMobileInfo = styled.div`
  width: 98%;
  height: 250px;
  display: flex;
  justify-content: flex-end;
  position: relative;
  margin-left: auto;
  margin-right: auto;

  div {
    width: 100%;
    position: absolute;
    h1 {
      width: 208px;
      font-size: 60px;
      font-family: "Gisha Bold";
      line-height: 80%;
      background: -webkit-linear-gradient(#7fbc04, #7fbc04, #58bc03, #58bc03);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    h2 {
      width: 160px;
      font-size: 23px;
      font-family: "Gisha Bold";
      line-height: 98%;
      color: #58bc03;
      span {
        color: black;
      }
    }
    p {
      width: 127px;
      font-size: 12px;
      font-family: "Open Sans";
    }
  }

  img {
    width: 65%;
    display: block;
    object-fit: contain;
    align-self: flex-end;
    z-index: revert;
  }
`

export const UltraRapidoContentSlideTopoFilterControl = styled(Flex)`
  width: 1260px;
  height: 100px;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 1366px) {
    width: 1200px;
    height: 80px;
  }
  @media screen and (max-width: 768px) {
    height: auto;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    width: 400px;
    flex-direction: column;
  }
`

export const UltraRapidoContentSlideTopoFilterControlCustom = styled.div`
  width: 100%;
  height: 81px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`

export const UltraRapidoContentSlideTopoFilterControlItem = styled.div`
  width: 480px;
  height: 80px;
  border: 1px solid #d4d4d4;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;

  @media screen and (max-width: 1366px) {
    width: 450px;
    height: 60px;
  }

  @media screen and (max-width: 768px) {
    width: 95%;
    margin-right: auto;
    margin-left: auto;
    height: 90px;
  }
`
export const UltraRapidoContentSlideTopoFilterControlItemCenter = styled.div`
  width: 280px;
  height: 80px;
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
    width: 95%;
    margin-right: auto;
    margin-left: auto;
    height: 90px;
  }
`

export const UltraRapidoContentSlideTopoFilterBodyBrindes = styled.div`
  width: 1383px;
  /* width: ${(props) => (props.view ? 1353 : 0)}px; */
  height: ${(props) => (props.view ? 292 : 0)}px;
  height: 292px;
  background-color: white;
  border: 1px solid #d4d4d4;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => (props.view ? 1 : 0)};
  left: 4px;
  margin-top: 230px;
  z-index: ${(props) => (props.view ? 99 : -1)};
  border-radius: 5px;
  box-shadow: 1px 1px 8px 5px rgb(212, 212, 212, 0.3);
  transition: 0.3s;
  outline: none;
  margin-left: 300px;
  @media screen and (max-width: 1920px) {
    margin-top: 415px;
    left: 0px;
  }

  @media screen and (max-width: 1366px) {
    left: 4px;
    margin-top: 240px;
    width: 1200px;
    margin-left: 80px;
  }

  @media screen and (max-width: 1280px) {
    margin-left: 60px;
    width: 1150px;
  }
  @media screen and (max-width: 1100px) {
    margin-left: 0px;
    width: 900px;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const UltraRapidoContentSlideTopoFilterBodyBrindesContent = styled.div`
  width: 98%;
  height: 95%;
  display: ${(props) => (props.view ? "flex" : "none")};
  justify-content: center;
  /* background-color: yellow; */
`

export const UltraRapidoContentSlideTopoFilterBodyBrindesContentGrid = styled.div`
  width: 84%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  &:after {
    content: "";
    height: 60%;
    width: 2px;
    background-color: #00000029;
    margin-inline: 1rem;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    border-right: none;
  }

  /* background-color: rgb(150,150,150, 0.5); */
`
export const UltraRapidoContentSlideTopoFilterBodyBrindesContentGridColumn = styled.div`
  /* width: 15.6%; */
  min-width: 185px;
  height: 100%;
  margin: 2px;
  /* background-color:green; */
  display: flex;
  flex-direction: column;
  margin-top: ${(props) => (props.noMargin ? "0" : "12rem")};

  a {
    width: 100%;
    font-size: 12px;
    margin: 2px;
    font-family: "Open Sans";
    margin-bottom: 5px;
    padding-left: 6px;
    cursor: pointer;
  }

  a:hover {
    background-color: #fafad2;
  }

  &:nth-child(6) {
    min-width: 145px;
  }

  @media screen and (max-width: 1366px) {
    min-width: 160px;
    a {
      font-size: 11.5px;
    }
  }
  @media screen and (max-width: 1280px) {
    min-width: 135px;
    a {
      font-size: 10px;
    }
    &:nth-child(6) {
      min-width: 130px;
    }
  }
  @media screen and (max-width: 1100px) {
    min-width: 105px;
  }
`

export const UltraRapidoContentSlideTopoFilterBodyBrindesContentImgProd = styled.div`
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
export const CategoriasModalMobile = styled(Modal)`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`

export const UltraRapidoContentSlideTopoFilterBodyBrindesMobile = styled.div`
  width: 100%;
  /* max-width:400px; */
  /* width: ${(props) => (props.view ? 1353 : 0)}px; */
  height: ${(props) => (props.view ? 292 : 0)}px;
  height: 100vh;
  background-color: white;
  border: 1px solid #d4d4d4;
  position: absolute;
  display: none;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => (props.view ? 1 : 0)};
  left: 0%;
  z-index: ${(props) => (props.view ? 999 : -1)};
  border-radius: 5px;
  box-shadow: 1px 1px 8px 5px rgb(212, 212, 212, 0.3);
  transition: 0.3s;
  overflow: auto;

  @media screen and (max-width: 768px) {
    display: flex;
  }
`

export const UltraRapidoContentSlideTopoFilterBodyBrindesMobileContent = styled.div`
  width: 98%;
  height: 95%;
  display: ${(props) => (props.view ? "flex" : "none")};
  justify-content: center;
  /* background-color: yellow; */
`

export const UltraRapidoContentSlideTopoFilterBodyBrindesMobileContentGrid = styled.div`
  width: 84%;
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
export const UltraRapidoContentSlideTopoFilterBodyBrindesMobileContentGridColumn = styled.div`
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
    padding-left: 6px;
    cursor: pointer;
  }

  a:hover {
    background-color: #fafad2;
  }

  &:nth-child(6) {
    min-width: 145px;
  }
`

export const UltraRapidoContentSlideTopoFilterBodyBrindesMobileContentImgProd = styled.div`
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

export const UltraRapidoContentSlideTopoFilterControlItemTextCenter = styled.div`
  width: ${(props) => (props.wid ? props.wid : 40)}%;
  height: 50px;
  display: ${(props) => (props.value ? "block" : "flex")};
  flex-direction: ${(props) => (props.value ? "none" : "row")};
  /* z-index: revert; */
  h1 {
    min-width: 90px;
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
    font-family: "Gisha Bold";
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
    width: 150px;
    outline: none;
    margin-left: 5px;
    font-size: 16px;
    margin-top: 0px;
    font-family: "Gisha Bold";
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

  @media screen and (max-width: 1366px) {
    input {
      width: 150px;
      outline: none;
      margin-left: 15px;
      font-size: 16px;
      margin-top: 0px;
      font-family: "Gisha Bold";
    }

    input::placeholder {
      font-family: "Open Sans";
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
      font-family: "Gisha Bold";
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
export const UltraRapidoContentSlideTopoFilterControlItemText = styled.div`
  width: ${(props) => (props.wid ? props.wid : 40)}%;
  height: 50px;
  display: ${(props) => (props.value ? "block" : "flex")};
  flex-direction: ${(props) => (props.value ? "none" : "row")};
  padding-left: 10px;
  font-size: 15px;
  /* z-index: revert; */
  p {
    strong {
      font-size: 15px;
    }
  }
  .title {
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-between;

    p {
      strong {
        font-size: 15px;
      }
      width: 50%;
      display: flex;
      justify-content: flex-start;
      white-space: nowrap;
      input {
        left: 0px;
        margin: 0px;
        margin-left: 5px;
        width: 50px;
      }
    }
  }

  @media screen and (max-width: 1280px) {
    .title {
      width: 100%;
      height: 30px;
      display: flex;
      justify-content: space-between;

      p {
        strong {
          font-size: 14px;
        }
        width: 50%;
        display: flex;
        justify-content: flex-start;
        white-space: nowrap;
        input {
          left: 0px;
          margin: 0px;
          margin-left: 5px;
          width: 50px;
        }
      }
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
    font-family: "Gisha Bold";
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
    font-family: "Gisha Bold";
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
      font-family: "Gisha Bold";
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

export const UltraRapidoContentSlideTopoFilterControlItemArrow = styled.div`
  width: ${(props) => (props.wid ? props.wid : 50)}%;
  height: 50px;
  /* background-color: blue; */
  display: flex;
  justify-content: flex-end;
  /* align-items:center; */
  margin-top: -10px;
  cursor: pointer;
`

export const UltraRapidoContentSlideTopoFilterControlSubmit = styled(Flex)`
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: -15px;
  height: 120px;
  button {
    width: 480px;
    height: 50px;
    background-color: ${colorBaseUltraRapido};
    border-radius: 10px;
    font-size: 16px;
    font-family: "Open Sans";
    letter-spacing: 0.1rem;
    color: white;
    text-transform: uppercase;
  }

  @media screen and (max-width: 1366px) {
    button {
      margin-top: 0px;
    }
  }
  @media screen and (max-width: 768px) {
    button {
      width: 370px;
      margin-right: auto;
      margin-left: auto;
      margin-top: -25px;
    }
  }
`
export const ContainerRangeSlider = styled(RangeSlider)`
  margin-top: -5px;
  @media screen and (max-width: 1366px) {
    margin-top: -10px;
  }
  @media screen and (max-width: 1280px) {
    margin-top: -13px;
  }
  @media screen and (max-width: 768px) {
    margin-top: 0px;
  }
`

export const UltraRapidoContentSlideTopoBanner = styled.div`
  width: 950px;
  height: 100%;
  display: flex;
  align-items: right;
  /* background-color:blue; */

  @media screen and (max-width: 1366px) {
    /* width: 950px; */
    justify-self: center;
    width: auto;

    img {
      display: block;
      object-fit: cover;
      width: auto;
      height: 480px;
    }
  }
  @media screen and (max-width: 1280px) {
    width: 650px;
    justify-self: center;

    img {
      /* width:auto; */
      margin-top: 25px;
      height: 90%;
    }
  }
  @media screen and (max-width: 1150px) {
    width: 65%;
    justify-self: center;

    img {
      width: 100%;
      margin-top: 25px;
      height: auto;
      display: block;
      object-fit: contain;
    }
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`
