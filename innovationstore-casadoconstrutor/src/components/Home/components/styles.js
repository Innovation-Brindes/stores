import { Modal, Box } from "@chakra-ui/react"
import styled from "styled-components"

export const HomeContentSlide = styled(Box)`
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
    height: ${(props) => (props.bannerRecesso ? "102%" : "640px")};
  }
`

export const HomeContentSlideTopo = styled.div`
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

export const HomeContentSlideTopoFilter = styled.div`
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

export const HomeContentSlideTopoFilterHeader = styled.div`
  width: 100%;
  height: 360px;
  /* background-color:red; */

  strong {
    color: #414042;
  }

  h1 {
    font-size: 110px;
    font-family: "Open Sans";
    color: #e2001b;
    font-weight: 700;
    line-height: 85%;
  }
  h2 {
    font-size: 35px;
    font-family: "Open Sans";
    font-weight: 700;
    line-height: 98%;
    color: "#e2001b";

    span {
      color: black;
    }
  }
  p {
    font-size: 17px;
    font-family: "Open Sans";
  }

  @media screen and (max-width: 1366px) {
    height: 280px;
    h1 {
      font-size: 89px;
      font-family: "Open Sans";
      color: #e2001b;
      font-weight: 700;
      line-height: 85%;
    }
    h2 {
      font-size: 30px;
      font-family: "Open Sans";
      font-weight: 700;
      line-height: 98%;
      color: #e2001b;
      span {
        color: black;
        font-weight: normal;
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
      font-family: "Open Sans";
      font-weight: 700;
      line-height: 85%;
      background: -webkit-linear-gradient(#7fbc04, #7fbc04, #58bc03, #58bc03);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    h2 {
      font-size: 25px;
      font-family: "Open Sans";
      font-weight: 700;
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

export const HomeContentSlideTopoFilterHeaderMobile = styled.div`
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
    position: relative;
    z-index: 999999;
  }
`

export const HomeContentSlideTopoFilterHeaderMobileInfo = styled.div`
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
      font-family: "Open Sans";
      font-weight: 700;
      line-height: 80%;
      background: -webkit-linear-gradient(#e2001b, #e2001b, #e2001b, #e2001b);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    h2 {
      width: 160px;
      font-size: 23px;
      font-family: "Open Sans";
      font-weight: 700;
      line-height: 98%;
      color: #e2001b;
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

export const HomeContentSlideTopoFilterControl = styled.div`
  width: 100%;
  min-height: 360px;
  /* background-color:red; */

  @media screen and (max-width: 1366px) {
    min-height: 300px;
  }
  @media screen and (max-width: 768px) {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    width: 350px;
  }
`

export const HomeContentSlideTopoFilterControlCustom = styled.div`
  width: 100%;
  height: 81px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`

export const HomeContentSlideTopoFilterControlItem = styled.div`
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
    width: 350px;
  }
`

export const HomeContentSlideTopoFilterBodyBrindes = styled.div`
  width: 1353px;
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

  @media screen and (max-width: 1920px) {
    margin-top: 415px;
    left: 0px;
  }

  @media screen and (max-width: 1366px) {
    left: 4px;
    margin-top: 240px;
    width: 1200px;
  }

  @media screen and (max-width: 1280px) {
    margin-left: 0px;
    width: 1024px;
  }
  @media screen and (max-width: 1100px) {
    margin-left: 0px;
    width: 900px;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const HomeContentSlideTopoFilterBodyBrindesContent = styled.div`
  width: 98%;
  height: 95%;
  display: ${(props) => (props.view ? "flex" : "none")};
  justify-content: center;
  /* background-color: yellow; */
`

export const HomeContentSlideTopoFilterBodyBrindesContentGrid = styled.div`
  width: 84%;
  height: 100%;
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
export const HomeContentSlideTopoFilterBodyBrindesContentGridColumn = styled.div`
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
    padding-left: 6px;
    cursor: pointer;
  }

  a:hover {
    background-color: #daeac5;
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

export const HomeContentSlideTopoFilterBodyBrindesContentImgProd = styled.div`
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

export const HomeContentSlideTopoFilterBodyBrindesMobile = styled.div`
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

export const HomeContentSlideTopoFilterBodyBrindesMobileContent = styled.div`
  width: 98%;
  height: 95%;
  display: ${(props) => (props.view ? "flex" : "none")};
  justify-content: center;
  /* background-color: yellow; */
`

export const HomeContentSlideTopoFilterBodyBrindesMobileContentGrid = styled.div`
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
export const HomeContentSlideTopoFilterBodyBrindesMobileContentGridColumn = styled.div`
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
    background-color: #daeac5;
  }

  &:nth-child(6) {
    min-width: 145px;
  }
`

export const HomeContentSlideTopoFilterBodyBrindesMobileContentImgProd = styled.div`
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

export const HomeContentSlideTopoFilterControlItemText = styled.div`
  width: ${(props) => (props.wid ? props.wid : 40)}%;
  height: 50px;
  display: ${(props) => (props.value ? "block" : "flex")};
  flex-direction: ${(props) => (props.value ? "none" : "row")};
  /* z-index: revert; */

  .placeholder-text {
    font-size: 16px;
    white-space: nowrap;

    @media screen and (max-width: 768px) {
      font-size: 10px;
    }
  }

  .title {
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-between;

    p {
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
    font-weight: 700;
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

    ::placeholder {
      color: #cfcfcf;
    }

    @media screen and (max-width: 768px) {
      font-size: 10px !important;
    }
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
      font-weight: 700;
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

export const HomeContentSlideTopoFilterControlItemArrow = styled.div`
  width: ${(props) => (props.wid ? props.wid : 50)}%;
  height: 50px;
  /* background-color: blue; */
  display: flex;
  justify-content: flex-end;
  /* align-items:center; */
  margin-top: -10px;
  cursor: pointer;
`

export const HomeContentSlideTopoFilterControlSubmit = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    width: 100%;
    max-width: 295px;
    height: 45px;
    background-color: #e2001b;
    margin-top: 25px;
    border-radius: 10px;
    font-size: 20px;
    font-family: "Open Sans";
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    color: white;
    border-radius: 23px;
    font-weight: normal;
  }

  @media screen and (max-width: 1366px) {
    button {
      margin-top: 0px;
    }
  }
`

export const HomeContentSlideTopoBanner = styled.div`
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
