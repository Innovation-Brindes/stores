import { Box, Center } from "@chakra-ui/react"
import styled from "styled-components"
import { cor_base_1, cor_base_2 } from "../../services/cores"

export const FooterContainerMobile = styled(Box)`
  width: 100%;

  position: relative;
  float: left;
  // background-color: deepskyblue;
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    margin-top: 2rem;
  }
`
export const FooterContainerContentMobile = styled(Box)`
  width: 100%;
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`
export const FooterContainerContentTitleMobile = styled(Box)`
  display: none;
  width: 245px;
  height: 100px;
  // background-color: #f05423;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0.5%;
  display: flex;
  justify-content: center;

  p {
    width: 100%;
    background-color: white;
    position: relative;
    float: left;
    text-align: center;
    font-size: 100%;
    letter-spacing: 0.1rem;
    font-family: "Open Sans";
    font-weight: bold;
  }

  strong {
    color: ${cor_base_1};
    font-family: "Open Sans";
    font-weight: bold;
  }
  @media screen and (max-width: 768px) {
    display: flex;
  }

  @media screen and (max-width: 380px) {
    display: flex;
    height: 60px;
    p {
      font-size: 14px;
    }
  }
`
export const FooterContainerContentSlidesMobile = styled(Box)`
  width: 100%;
  display: none;

  .carousel-indicators {
    width: 200px;
    background-color: transparent;
    margin-left: auto;
    margin-right: auto;
    z-index: 1;
    bottom: -10px;
  }

  @media screen and (max-width: 768px) {
    display: block;
  }
`
export const CenterMobile = styled(Center)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
  margin-left: 1rem;
  .carousel {
    width: 100%;
    .carousel-indicators {
      height: 50px;
      position: relative;
      li {
        margin: 4px;
        width: 15px;
        height: 15px;
        position: relative;
        border-radius: 35px;
        background-color: rgb(211, 211, 211);
        cursor: pointer;
      }
    }
    .carousel-indicators .active {
      background-color: ${cor_base_2};
    }
    .carousel-inner {
      position: relative;
      top: -20px;

      .carousel-item {
        width: 100%;

        .content-carousel-item {
          width: 100%;

          justify-content: center;
          img {
            width: 50%;
          }
        }
      }
    }
  }
`
export const FooterContainerContentDadosMobile = styled(Box)`
  width: 100%;
  height: 300px;
  position: relative;
  float: left;
  // background-color: rgb(0, 70, 128);
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`
export const FooterContainerContentDadosLogoMobile = styled(Box)`
  width: 210px;
  // height: ;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
  img {
    width: 210px;
    display: block;
    object-fit: scale-down;
  }
`
export const FooterContainerContentDadosTitleMobile = styled(Box)`
  width: 350px;
  height: 80px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  font-size: 15px;
  font-family: "Gisha bold";
  color: ${cor_base_1};
  // background-color: rgb(226, 226, 226);
  text-align: center;
`
export const FooterContainerContentDadosSubTitleMobile = styled(Box)`
  width: 350px;
  min-height: 850px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  font-size: 12px;
  font-family: "Akrobat";
  color: black;
  text-align: justify;
  background-color: #fafafa;
  p {
    font-size: 14px;
  }
`
export const FooterContainerIconWhatsMobile = styled(Box)`
  width: 71px;
  height: 74px;
  position: fixed;
  top: 85%;
  z-index: 999;
  display: block;
  background-image: url("/images/menu/botchat-mobile.png");
  background-repeat: no-repeat;
  cursor: pointer;
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`
export const FooterContainerIconWhatsCloseMobile = styled(Box)`
  width: 20px;
  height: 20px;
  position: relative;
  left: 253px;
  z-index: 9999;
  background-color: transparent;
  cursor: pointer;
`
export const FooterContainerIconWhatsContentMobile = styled(Box)`
  width: 71px;
  height: 74px;
  position: relative;
  z-index: 9999;
  background-color: transparent;
`
export const FooterContainerIconWhatsPromptMobile = styled(Box)`
  width: 370px;
  height: 100vh;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin-top: 10px;
  z-index: 9999;

  overflow-x: scroll;
  overflow-y: scroll;
  // top: -300px;
  // background-color: aquamarine;
`
export const FooterContainerIconWhatsPromptLoadingMobile = styled(Box)`
  width: 100%;
  height: 100%;
  min-height: 550px;
  max-height: 600px;
  border-radius: 8px;
  position: absolute;
  top: 100px;
  background-color: rgba(255, 255, 255, 0.809);
  z-index: 99999;
  display: flex;
  align-items: center;

  img {
    width: 70px;
    height: 70px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
  }
`
export const FooterContainerIconWhatsPromptHeaderMobile = styled(Box)`
  width: 100%;
  height: 100px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  // background-color: #2A2F32;
  display: flex;
  justify-content: space-between;
  background: url("/images/menu/header-chat-whats.png");
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 100% 65px;
  display: none;
  @media screen and (max-width: 430px) {
    background-size: 100% 65px;
  }

  @media screen and (max-width: 768px) {
    display: flex;
  }
`
export const FooterContainerIconWhatsPromptHeaderContentMobile = styled(Box)`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: transparent;

  .clock {
    width: 150px;
    // height: 30px;
    position: absolute;
    float: left;
    top: 35px;
    left: -15px;
    color: white;
    font-size: 14px;
    text-align: center;

    font-family: "Roboto Medium", sans-serif;
  }
  .title {
    width: 150px;
    // height: 30px;
    position: absolute;
    float: left;
    top: 65px;
    left: 30px;
    color: white;
    font-size: 14px;
    text-align: right;
    font-family: "Roboto Medium", sans-serif;
  }

  .close {
    width: 33px;
    height: 32px;
    position: absolute;
    float: left;
    /* background: url("/images/menu/chat/close.png"); */
    /* background-repeat: no-repeat; */
    background-size: 29px 30px;
    background-position: center;
    background-color: white;
    border-radius: 20px;
  }

  .logo {
    width: 40px;
    height: 40px;
    position: absolute;
    float: left;
    top: 60px;
    left: 25px;
    background: url("/images/menu/chat/logo.png");
    background-repeat: no-repeat;
    background-size: 30px 30px;
  }
`
export const FooterContainerIconWhatsPromptBodyMobile = styled(Box)`
  width: 100%;
  height: 600px;
  background: url("/images/menu/background-whats.png");
  background-size: 100% 100%;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  z-index: 99;
`
export const FooterContainerIconWhatsPromptBodyMsg1Mobile = styled(Box)`
  width: 317px;
  height: 33px;
  position: relative;
  margin-left: -2rem;
  top: 20px;
  left: 12vw;
  background: url("/images/menu/chat/msg-1.png");
  background-repeat: no-repeat;
  background-size: 317px 33px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    position: relative;
    top: 5px;
    padding-left: 15px;
    font-size: 13px;
    font-weight: 500;
    font-family: "Roboto", sans-serif;
  }
`
export const FooterContainerIconWhatsPromptBodyMsg2Mobile = styled(Box)`
  width: 308px;
  height: 107px;
  position: relative;
  top: 25px;
  margin-left: -2rem;
  left: 12vw;
  background: url("/images/menu/chat/msg-2.png");
  background-repeat: no-repeat;
  background-size: 308px 107px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    position: relative;
    top: 5px;
    padding-left: 15px;
    font-size: 13px;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
  }
`
export const FooterContainerIconWhatsPromptBodyInputMobile = styled(Box)`
  width: 305px;
  height: 43px;
  position: relative;
  margin-left: -2rem;
  top: 30px;
  left: 13vw;
  margin-top: 10px;
  border-radius: 25px;
  box-shadow: ${(props) => (props.btnSubmit ? "none" : "2px 2px 5px rgb(172, 172, 172)")};
  display: flex;

  input:nth-child(1) {
    background-color: red;
  }

  input {
    padding-left: 75px;
    width: 100%;
    height: 100%;
    position: relative;
    border: 0px;
    top: 0px;
    background-color: #ffffff;
    border-radius: 25px;
    outline: none;
    font-size: 16px;
    font-family: "Roboto", sans-serif;

    .nome {
      padding-left: 70px;
      width: 100%;
      height: 100%;
      position: relative;
      border: 0px;
      top: 0px;
      background-color: #ffffff;
      border-radius: 25px;
      outline: none;
      font-size: 16px;
      font-family: "Roboto", sans-serif;
    }

    .cpf-cnpj {
      padding-left: 120px;
      width: 100%;
      height: 100%;
      position: relative;
      border: 0px;
      top: 0px;
      background-color: #ffffff;
      border-radius: 25px;
      outline: none;
      font-size: 16px;
      font-family: "Roboto", sans-serif;
    }

    .telefone {
      padding-left: 90px;
      width: 100%;
      height: 100%;
      position: relative;
      border: 0px;
      top: 0px;
      background-color: #ffffff;
      border-radius: 25px;
      outline: none;
      font-size: 16px;
      font-family: "Roboto", sans-serif;
    }

    .email {
      padding-left: 70px;
      width: 100%;
      height: 100%;
      position: relative;
      border: 0px;
      top: 0px;
      background-color: #ffffff;
      border-radius: 25px;
      outline: none;
      font-size: 16px;
      font-family: "Roboto", sans-serif;
    }

    .razao-social {
      padding-left: 120px;
      width: 100%;
      height: 100%;
      position: relative;
      border: 0px;
      top: 0px;
      background-color: #ffffff;
      border-radius: 25px;
      outline: none;
      font-size: 16px;
      font-family: "Roboto", sans-serif;
    }
  }

  .large {
    input {
      padding-left: 110px;
    }

    input[type="text"] {
      padding-left: 110px;
    }
  }

  label {
    position: absolute;
    top: 12px;
    z-index: 9999;
    left: 20px;
    color: rgb(81, 81, 81);
    font-size: 16px;
    font-family: "Roboto Medium", sans-serif;
  }

  button {
    width: 130px;
    height: 45px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    border: 0px;
    margin-top: ${(props) => (props.lastStep ? "25px" : "10px")};
    background-color: ${cor_base_1};
    border-radius: 8px;
    letter-spacing: 0.08rem;
    font-size: 18px;
    font-family: "Gisha Bold";
    color: white;
    /* left: 90%; */
    /* background: url("/images/menu/chat/btn-enviar.png");
    background-repeat: no-repeat; */
  }
`
export const FooterContainerIconWhatsPromptBodyMsg3Mobile = styled(Box)`
  width: 317px;
  height: 33px;
  position: relative;
  top: 45px;
  left: 12vw;
  background: url("/images/menu/chat/msg-3.png");
  background-repeat: no-repeat;
  background-size: 317px 33px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    position: relative;
    top: 5px;
    padding-left: 15px;
    font-size: 13px;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
  }
`
export const FooterContainerIconWhatsPromptBodyContactMobile = styled(Box)`
  width: 300px;
  height: 43px;
  position: relative;
  top: 50px;
  left: 25px;
  margin-top: 10px;
  border-radius: 25px;
  box-shadow: 2px 2px 5px rgb(172, 172, 172);

  .icon {
    width: 20px;
    height: 20px;
    position: absolute;
    z-index: 9999;
    left: 5px;
    button {
      width: 18px;
      height: 18px;
      position: absolute;
      border: 0px;
      top: 12px;
      left: 0px;
      background: url("/images/menu/chat/emoticons.png");
      background-repeat: no-repeat;
    }
  }

  button {
    width: 20px;
    height: 20px;
    position: absolute;
    border: 0px;
    top: 12px;
    left: 105%;
    background: url("/images/menu/chat/btn-enviar.png");
    background-repeat: no-repeat;
  }

  input {
    width: 100%;
    height: 100%;
    position: relative;
    border: 0px;
    background-color: #ffffff;
    border-radius: 25px;
    outline: none;
  }

  input[type="text"] {
    padding-left: 30px;
  }

  input::-webkit-input-placeholder {
    font-size: 16px;
    font-family: "Roboto Medium", sans-serif;
  }
`
export const FooterContainerCookiesMobile = styled(Box)`
  width: 400px;
  font-size: 8px;
  height: 80px;
  position: fixed;
  top: 92%;
  z-index: 999;
  background-color: #ffffff;
  // background-color: #F84F00;
  border-top: 15px solid ${cor_base_1};
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`
export const FooterContainerCookiesContentMobile = styled(Box)`
  width: 400px;
  height: 40px;
  position: relative;
  left: 2%;
  top: 10px;
  z-index: 999;
  display: flex;
  justify-content: space-between;

  p {
    width: 250px;
    height: 30px;
    position: relative;
    float: left;
    top: 4px;
    font-size: 8px;
    font-family: "Akrobat";
    text-align: center;
    color: #848383;
    display: flex;
    justify-content: center;

    button {
      margin-left: 1rem;
      font-size: 12px;
      border: none;
      background-color: transparent;
    }
  }

  button {
    width: 100px;
    height: 36px;
    border: none;
    border-radius: 5px;
    font-size: 10px;
    font-family: "Gisha Bold";
    letter-spacing: 0.03rem;
    position: relative;
    float: left;
    color: white;
    background-color: ${cor_base_1};
    outline: none;
  }

  button:focus {
    border: 0.6px solid #ffffff;
    box-shadow: 0 0 3px rgb(255, 255, 255);
    outline-offset: 0px;
    outline: none;
  }

  h1 {
    width: 30px;
    height: 30px;
    position: relative;
    float: left;
    top: 12px;
    left: 5px;
    color: #848383;
    font-size: 8px;
    font-family: "Gisha Bold";
  }
`
