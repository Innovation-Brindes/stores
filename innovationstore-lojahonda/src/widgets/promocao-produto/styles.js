import styled, { keyframes } from "styled-components"
import React from "react"
import { cor_base_2 } from "../../services/cores"

export const CardBox = styled.div`
  width: 361px;
  height: 619px;
  /* background-color:#e5e5e5; */
  border-radius: 10px;

  img {
    display: block;
    object-fit: fill;
    border-radius: 8px;
    cursor: pointer;
  }

  .mobile {
    display: none;
  }

  @media screen and (max-width: 1230px) {
    width: calc(361px - 8%);
    height: calc(619px - 5%);
  }

  @media screen and (max-width: 1140px) {
    width: 100%;
    height: calc(619px - 8%);
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 400px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    height: calc(619px - 8%);

    .desktop {
      display: none;
    }

    .mobile {
      cursor: pointer;
      display: block;
    }
  }
`

export const CardBoxHeader = styled.div`
  width: 100%;
  height: 95px;
  background-color: ${cor_base_2};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  /* height: */
  h2 {
    font-size: 13px;
    font-family: "Gisha";
    color: white;
    margin-left: 15px;
    margin-top: 0px;
  }
`

export const CardBoxHeaderCount = styled.div`
  width: 93%;
  height: 70px;
  /* background-color:pink; */
  position: relative;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  top: 5px;
`

export const CardBoxHeaderCountTitle = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* background-color:red; */
  h1 {
    font-size: 27px;
    color: white;
    font-family: "Gisha Bold";
    line-height: 100%;
    margin-top: 18px;
    text-align: center;
  }
  h2 {
    width: 200px;
    font-size: 18px;
    color: white;
    font-family: "Gisha";
    line-height: 100%;
    margin-top: 5px;
    font-weight: 100;
    text-align: center;
    position: relative;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (max-width: 1230px) {
    h1 {
      font-size: 25px;
    }
  }

  @media screen and (max-width: 1140px) {
    h1 {
      font-size: 23px;
    }
  }

  @media screen and (max-width: 768px) {
    h2 {
      width: 100%;
      font-size: 19px;
    }
  }
`

export const CardBoxHeaderCountClock = styled.div`
  width: 45%;
  height: 20px;
  margin-top: 5px;

  div {
    display: flex;
    justify-content: center;
    flex-direction: row;

    h1 {
      width: 50px;
      height: 20px;
      font-size: 30px;
      color: white;
      font-family: "Gisha Bold";
      margin-right: 5px;
      text-align: right;

      &:nth-child(1) {
        margin-left: -5px;
      }
      &:nth-child(2) {
        margin-left: 5px;
      }
    }

    p {
      height: 0px;
      font-weight: 100;
      font-size: 30px;
      margin-top: -7px;
      color: white;
    }

    h2 {
      height: 20px;
      font-size: 15px;
      color: white;
      font-family: "Gisha";
      margin-right: 5px;
      margin-top: 5px;

      &:nth-child(1) {
        margin-left: 8px;
      }

      &:nth-child(2) {
        margin-left: 20px;
      }

      &:nth-child(3) {
        margin-left: 25px;
      }
    }

    @media screen and (max-width: 1140px) {
      h1 {
        font-size: 25px;
      }

      h2 {
        font-size: 13px;

        &:nth-child(1) {
          margin-left: 5px;
        }

        &:nth-child(2) {
          margin-left: 10px;
        }

        &:nth-child(3) {
          margin-left: 16px;
        }
      }

      p {
        height: 0px;
        font-weight: 100;
        font-size: 25px;
        margin-top: -7px;
        color: white;
      }
    }
  }

  @media screen and (max-width: 1140px) {
    h1 {
      font-size: 23px;
    }
  }
`

const fadeInAnimation = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`

export const CardBoxProduto = styled.div`
  width: 100%;
  height: 418px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation-name: ${fadeInAnimation};
  animation-duration: 1s;

  img {
    margin-top: -2px;
    display: block;
    object-fit: cover;
    /* display:flex; */
    /* align-self:center;     */
  }

  @media screen and (max-width: 1230px) {
    height: calc(418px - 5%);
    img {
      height: calc(418px - 8%);
      margin-top: -2px;
      display: block;
      object-fit: cover;
      /* display:flex; */
      /* align-self:center;     */
    }
  }

  @media screen and (max-width: 768px) {
    height: calc(418px - 15%);
    img {
      width: 100%;
      height: 100%;
      /* height:calc(418px - 25%); */
      margin-top: -2px;
      display: block;
      object-fit: cover;
      /* display:flex; */
      /* align-self:center;     */
    }
  }
  /* background-color:white; */
  /* height: */
`

export const CardBoxFooter = styled.div`
  width: 95%;
  height: 100px;
  display: flex;
  justify-content: center;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  /* height: */
`

export const CardBoxFooterDesc = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    width: 100%;
    height: 20px;
    font-size: 18px;
    font-family: "Gisha Bold";
    white-space: nowrap;
    text-align: center;
    display: block;
    position: relative;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (max-width: 1230px) {
    h1 {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 1140px) {
    height: 80px;
    h1 {
      font-size: 14px;
      line-height: 80%;
    }
  }

  /* height: */
`

export const CardBoxFooterDescValue = styled.div`
  width: 100%;
  /* background-color:green; */
  /* height: */
  span {
    font-size: 15px;
    font-family: "Gisha";
    font-weight: 700;
    color: ${cor_base_2};
    text-decoration: line-through;
  }
  h1 {
    width: 100%;
    height: 20px;
    font-size: 25px;
    font-family: "Gisha Bold";
    color: ${cor_base_2};
  }
`

export const CardBoxFooterButton = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 7px;

  button {
    width: 165px;
    height: 40px;
    background-color: ${cor_base_2};
    border-radius: 10px;
    font-size: 20px;
    font-family: "Gisha Bold";
    color: white;
    transition: 0.2s;
  }

  button:hover {
    transform: scale(1.1, 1.1);
    transition: 0.2s;
  }

  @media screen and (max-width: 1140px) {
    height: 70px;
    button {
      width: calc(154px - 5%);
      height: calc(48px - 5%);
    }
  }
  /* height: */
`
