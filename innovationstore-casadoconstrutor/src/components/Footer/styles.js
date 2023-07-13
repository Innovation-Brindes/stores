import { Box } from "@chakra-ui/react"
import styled from "styled-components"
import { cor_base_1, cor_base_2 } from "../../services/cores"

export const FooterContainer = styled(Box)`
  width: 100%;
  height: 25vw;
  max-height: 300px;
  position: relative;
  float: left;
  background-color: rgb(255, 255, 255);
  color: black;
  font-family: "Open Sans";
  top: 15px;
  // z-index: 9999;
  .modal {
    z-index: 999999;
    .modal-dialog {
      z-index: 999999;
      .modal-content {
        z-index: 999999;
        position: relative;
        width: 573px;
        height: 80%;
        left: -8%;
        top: 10%;

        .modal-body {
          z-index: 999999;
          height: 30vw;
        }

        .modal-footer {
          z-index: 999999;
          button {
            background-color: ${cor_base_2};
            color: white;
            font-family: "Open Sans", sans-serif;
            font-size: 1vw;
            border-radius: 7px;
            border: none;
          }
        }
      }
    }
  }
  /* @media screen and (max-width: 768px) {
    display: none;
  } */
`
export const FooterContainerImg = styled(Box)`
  width: 100%;
  height: 100px;
  position: relative;
  float: left;
  top: 0%;
  z-index: 999;
  display: flex;
  justify-content: center;
  img {
    width: 250px;
    // height: 100px;
    object-fit: scale-down;
    position: relative;
    margin-left: auto;
    margin-right: auto;
  }
`
export const FooterContainerText = styled.p`
  width: 1000px;
  font-size: 130%;
  background-color: white;

  position: relative;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  color: ${cor_base_1};
`
export const FooterContainerText2 = styled.section`
  width: 1200px;
  font-size: 10px;
  position: relative;
  text-align: start;
  margin-left: auto;
  margin-right: auto;
  background-color: white;

  font-family: "Open Sans", sans-serif;

  color: #919191;

  @media (max-width: 1300px) {
    width: 100% !important;
    padding: 0 1rem !important;
  }

  h1 {
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
  }
  a {
    text-decoration: none;
    font-style: italic;
    color: #333;
    transition: 0.3s;

    &:hover {
      color: #777;
    }
  }
`
export const FooterContainerSublinhar = styled(Box)`
  width: 100%;
  height: 3px;
  background-color: #f6f6f6;
  position: relative;
  top: 10%;
`
export const FooterContainerTitle = styled(Box)`
  width: 40%;
  /* height: 2vw; */
  background-color: white;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0.5%;
  display: flex;
  justify-content: center;

  font-size: 1.3rem;

  @media (max-width: 1300px) {
    display: none;
  }

  p {
    // width: 60%;
    background-color: white;
    position: relative;
    float: left;
    letter-spacing: 0.1rem;
  }

  @media (max-width: 728px) {
    font-size: 1rem;
    text-align: center !important;
  }
`
export const FooterContainerContantSlide3 = styled(Box)`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  background-color: white;
  padding-block: 42px;
  @media (max-width: 728px) {
    display: none;
  }

  .carousel {
    width: 78%;

    .carousel-indicators {
      width: 100%;
      margin-left: auto;
      margin-right: auto;
      bottom: -50px !important;

      li {
        width: 15px;
        height: 15px;
        border-radius: 35px;
        margin: 5px;
        background-color: rgb(211, 211, 211);
        cursor: pointer;
      }
    }

    .carousel-indicators .active {
      background-color: #e2001b;
    }

    .carousel-inner {
      width: 100%;

      .carousel-item {
        img {
          position: relative;
          margin-left: auto;
          margin-right: auto;
          max-width: 917px;
        }
      }
    }
  }
`
export const FooterContainerCookies = styled(Box)`
  width: 1100px;
  height: 80px;
  position: fixed;
  top: 92%;
  z-index: 999;
  display: block;
  background-color: #ffffff;
  // background-color: #F84F00;
  border-top: 15px solid ${cor_base_1};
  @media screen and (max-width: 1366px) {
    width: 1000px;
    height: 80px;
    position: fixed;
    top: 90%;
    z-index: 999;
    display: block;
    background-color: #ffffff;
    // background-color: #F84F00;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const FooterContainerCookiesContent = styled(Box)`
  width: 1100px;
  height: 40px;
  position: relative;
  left: 1%;
  top: 10px;
  z-index: 999;
  display: flex;
  justify-content: space-between;

  p {
    width: 1000px;
    height: 30px;
    position: relative;
    float: left;
    top: 4px;
    font-size: 14px;
    font-family: "Open Sans";
    text-align: center;
    color: #848383;
    display: flex;
    justify-content: center;

    button {
      border: none;
      background-color: transparent;
    }
  }

  button {
    width: 152px;
    height: 36px;
    border: none;
    border-radius: 5px;
    font-size: 15px;
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
    top: 4px;
    left: 30px;
    color: #848383;
    font-size: 20px;
    font-family: "Gisha Bold";
    cursor: pointer;
  }
  @media screen and (max-width: 1366px) {
    width: 1100px;
    top: 5px;
    margin-left: -130px;
    button {
      left: -35px;
    }
    h1 {
      left: -20px;
    }
  }
`
export const FooterContainerBodyModal = styled(Box)`
  width: 511px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  z-index: 999999;
`
export const FooterContainerBodyModalHeader = styled(Box)`
  width: 511px;
  height: 260px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  // background-color: turquoise;

  h1 {
    font-size: 18px;
    font-family: "Open Sans";
    margin-top: 8px;
    color: #848383;
  }

  p {
    font-size: 16px;
    font-family: "Open Sans";
    margin-top: 8px;
    color: #848383;
  }
`
export const FooterContainerBodyModalTable = styled(Box)`
  width: 511px;

  // height: 260px;
  position: relative;
  top: 10px;
  margin-left: auto;
  margin-right: auto;
  // background-color: violet;

  table {
    width: 511px;
    border: 0.4px solid #848383;

    tr {
      border: 0.4px solid #848383;
    }
    th {
      text-align: center;
      font-size: 14px;
      font-family: "Open Sans";
      color: #848383;
      border: 0.4px solid #848383;
    }
    td {
      text-align: center;
      font-size: 14px;
      font-family: "Open Sans";
      color: #848383;
      border: 0.4px solid #848383;
    }
  }
  p {
    font-size: 16px;
    font-family: "Open Sans";
    margin-top: 8px;
    color: #848383;
  }
`
export const FooterContainerIconWhats = styled(Box)`
  width: 200px;
  height: 90px;
  position: fixed;
  top: 85%;
  margin-left: ${(props) => (props.view_chat ? "2px" : "124px")};
  z-index: 999999;
  display: block;
  /* background-image: url("/images/whatsapp.png"); */
  background: url("/images/menu/botchat-mobile-e.png");
  background-repeat: no-repeat;
  background-size: 176px 90px;
  background-position-x: 23px;
  /* background-color:red; */
  cursor: pointer;
  display: block;
  @media screen and (max-width: 768px) {
    display: none;
    width: 100%;
  }
`
export const FooterContainerIconWhatsClose = styled(Box)`
  width: 20px;
  height: 20px;
  position: relative;
  z-index: 999;
  top: -0px;
  left: 83%;
  background-color: transparent;
  cursor: pointer;
`
export const FooterContainerIconWhatsContent = styled(Box)`
  width: 293px;
  height: 90px;
  position: relative;
  z-index: 9999;
  background-color: transparent;
`
export const FooterContainerIconWhatsPrompt = styled(Box)`
  width: 333px;
  height: 300px;
  position: absolute;
  // left: -5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  z-index: 9999;
  // top: -300px;
  // background-color: aquamarine;
`
export const FooterContainerIconWhatsPromptLoading = styled(Box)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 100px;
  background-color: rgba(255, 255, 255, 0.809);
  z-index: 9999;
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
export const FooterContainerIconWhatsPromptHeader = styled(Box)`
  width: 100%;
  height: 100px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  // background-color: #2A2F32;
  display: flex;
  justify-content: space-between;
  background-image: url("/images/menu/header-chat-whats.png");
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 333px 65px;
`
export const FooterContainerIconWhatsPromptHeaderContent = styled(Box)`
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

  /* .close {
    width: 40px;
    height: 40px;
    position: absolute;
    float: left;
    background-image: url("/images/menu/chat/close.png");
    background-repeat: no-repeat;
    background-size: 30px 30px;
  } */
  .logo {
    width: 40px;
    height: 40px;
    position: absolute;
    float: left;
    top: 60px;
    left: 25px;
    background-image: url("/images/menu/chat/logo.png");
    background-repeat: no-repeat;
    background-size: 30px 30px;
  }
`
export const FooterContainerIconWhatsPromptBody = styled(Box)`
  width: 100%;
  height: 650px;
  background-image: url("/images/menu/background-whats.png");
  background-size: 100% 100%;
`
export const FooterContainerIconWhatsPromptBodyMsg1 = styled(Box)`
  width: 317px;
  height: 33px;
  position: relative;
  top: 20px;
  left: 10px;
  background-image: url("/images/menu/chat/msg-1.png");
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
export const FooterContainerIconWhatsPromptBodyMsg2 = styled(Box)`
  width: 308px;
  height: 107px;
  position: relative;
  top: 25px;
  left: 10px;
  background-image: url("/images/menu/chat/msg-2.png");
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
export const FooterContainerIconWhatsPromptBodyMsg3 = styled(Box)`
  width: 317px;
  height: 33px;
  position: relative;
  top: 45px;
  left: 10px;
  background-image: url("/images/menu/chat/msg-3.png");
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
export const FooterContainerIconWhatsPromptBodyInput = styled(Box)`
  width: 305px;
  height: 43px;
  position: relative;
  top: 30px;
  left: 10px;
  margin-top: 10px;
  border-radius: 25px;
  box-shadow: ${(props) => (props.btnSubmit ? "none" : "2px 2px 5px rgb(172, 172, 172)")};
  display: flex;
  z-index: 999;
  .large {
    input {
      padding-left: 110px;
    }

    input[type="text"] {
      padding-left: 110px;
    }
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
    height: 40px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    border: 0px;
    margin-top: ${(props) => (props.lastStep ? "25px" : "0px")};
    background-color: ${cor_base_1};
    border-radius: 8px;
    letter-spacing: 0.08rem;
    font-size: 18px;
    font-family: "Gisha Bold";
    color: white;
    z-index: 9999999;
    /* left: 90%; */
    /* background: url("/images/menu/chat/btn-enviar.png");
    background-repeat: no-repeat; */
  }
`
export const FooterContainerIconWhatsPromptBodyInputData = styled.input`
  width: 100%;
  height: 100%;
  position: relative;
  border: 0px;
  top: 0px;
  background-color: #ffffff;
  border-radius: 25px;
  padding-left: 90px;
  outline: none;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
`
export const FooterContainerIconWhatsPromptBodyContact = styled.div`
  width: 300px;
  height: 43px;
  position: relative;
  top: 50px;
  left: 10px;
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
      background-image: url("/images/menu/chat/emoticons.png");
    }
  }

  button {
    width: 20px;
    height: 20px;
    position: absolute;
    border: 0px;
    top: 12px;
    left: 105%;
    background-image: url("/images/menu/chat/btn-enviar.png");
  }

  input {
    width: 100%;
    height: 100%;
    position: relative;
    border: 0px;
    background-color: #ffffff;
    border-radius: 25px;
    padding-left: 35px;
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
export const FooterSocialMedia = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${cor_base_1};
  display: flex;
  justify-content: center;
  align-items: center;
`
export const FooterSocialMediaContent = styled.div`
  width: 350px;
  height: 80%;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 80%;
  }
`
export const FooterSocialMediaContentLogo = styled.div`
  width: 100px;
  height: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-right: 1px solid white;
  align-self: center;
  img {
    max-height: 80%;
    float: right;
  }

  a {
    width: 100%;
    font-size: 14px;
    text-decoration: none;
    color: white;
    cursor: pointer;
    text-align: right;
    padding-right: 15px;
  }
  a:hover {
    color: white;
  }
  @media screen and (max-width: 768px) {
    width: 120px;
    justify-content: flex-start;
    img {
      max-height: 70%;
      display: block;
      object-fit: scale-down;
      float: left;
      margin-left: 8px;
    }
  }
`
export const FooterSocialMediaContentControl = styled.div`
  width: 250px;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* z-index:9; */
  img {
    height: 38px;
    margin: 5px;
    cursor: pointer;
  }

  p {
    width: 50px;
    height: 16px;
    font-size: 16px;
    color: white;
    padding-left: 15px;
    cursor: pointer;
    white-space: nowrap;
  }

  @media screen and (max-width: 768px) {
    width: 240px;
    justify-content: flex-start;
  }
`
