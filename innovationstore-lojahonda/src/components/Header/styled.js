import styled from "styled-components"
import { cor_base_2 } from "../../services/cores"

export const Header = styled.div`
  width: 100%;
  height: 70px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #d4d4d4;
  /* margin-bottom: 15px; */
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (max-width: 768px) {
    height: 120px;
    flex-direction: column;
    padding-left: 5px;
    padding-right: 5px;
  }
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1360px;
  height: 50px;
  /* background-color: yellow; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const MobileControl = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-block: 10px;
    padding-inline: 10px;
  }
`

export const HeaderContentLogo = styled.div`
  height: 100%;
  /* background-color:cyan; */
  display: flex;
  align-items: center;
  cursor: pointer;

  @media screen and (max-width: 1150px) {
    width: 130px;
  }
`

export const HeaderContentNav = styled.div`
  width: 40%;
  /* max-width:540px; */
  height: 100%;
  /* background-color:red; */
  display: flex;
  justify-content: space-between;
  margin-right: 10px;
  gap: 10px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const HeaderContentNavItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Open sans";
  font-size: 17px;

  a {
    text-decoration: none;
    color: black;
  }
  a:hover {
    text-decoration: none;
    color: black;
  }

  &:nth-child(1) {
    .dropdown .btn {
      background-color: transparent;
      color: black;
      border: none;
      outline: none;
      box-shadow: none;
    }

    .dropdown .dropdown-menu {
      width: 700px;
      font-family: "Open sans";
      font-size: 14px;
      /* display: flex; */
    }
    .dropdown .dropdown-menu .content-menu {
      position: relative;
      float: left;
    }
  }

  &:nth-child(2) {
    .dropdown .btn {
      background-color: transparent;
      color: black;
      border: none;
      outline: none;
      box-shadow: none;
    }

    .dropdown .dropdown-menu {
      width: 300px;
      font-family: "Open sans";
      font-size: 14px;
      /* display: flex; */
    }
    .dropdown .dropdown-menu .content-menu {
      position: relative;
      float: left;
    }
  }

  &:nth-child(3) {
    flex-direction: column;
    position: relative;
    top: -13px;
  }
  &:nth-child(4) {
    flex-direction: column;
    position: relative;
    top: -13px;
    @media screen and (max-width: 1100px) {
      width: 60px;
      margin-right: 0px;
      top: -3px;
      line-height: 90%;
    }

    @media screen and (max-width: 1100px) {
      span {
        top: 2px;
        left: 0px;
      }
    }
  }
`

export const TagInfo = styled.span`
  width: 60px;
  height: 18px;
  position: relative;
  top: ${(props) => (props.top ? props.top : 9)}px;
  left: ${(props) => (props.left ? props.left : 20)}px;
  background-color: ${cor_base_2};
  font-size: ${(props) => (props.fSize ? props.fSize : 12)}px;
  padding-top: ${(props) => (props.pTop ? props.pTop : "none")};
  text-align: center;
  border-radius: 2px;
  letter-spacing: ${(props) => (props.lSpacing ? props.lSpacing : "0.05rem")};
  color: white;
  font-family: "Open sans";
`

export const HeaderContentInput = styled.div`
  display: flex;
  flex: 1;

  max-width: 375px;
  .click-lupa {
    width: 35px;
    height: 35px;
    background-color: transparent;
    position: absolute;
    left: 81%;
    z-index: 999;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
  /* background-color: rgb(255,0,0, 0.15); */
`
export const HeaderContentInputMobile = styled.div`
  width: 98%;
  height: 35px;
  display: none;
  margin-top: 12px;

  .click-lupa {
    width: 35px;
    height: 35px;
    background-color: transparent;
    position: absolute;
    left: 90%;
    z-index: 999;
  }
  @media screen and (max-width: 768px) {
    display: block;
  }
  /* background-color: rgb(255,0,0, 0.15); */
`
export const HeaderContentContact = styled.div`
  width: 160px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-right: 1px solid #d4d4d4;
  p {
    height: 10px;
    margin-right: 8px;
    font-family: "Open sans";
  }
  a {
    height: 10px;
    margin-right: 8px;
    font-family: "Open sans";
    text-decoration: none;
    color: black;
    margin-top: -15px;
  }

  @media screen and (max-width: 375px) {
    a {
      font-size: 15px;
    }
  }
  /* background-color: red; */
`
export const HeaderContentCart = styled.div`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 12px;

  p {
    height: 10px;
    color: ${cor_base_2};
    font-family: "Open sans";
    cursor: pointer;
  }

  span {
    display: none;
    cursor: pointer;
  }

  @media screen and (max-width: 1200px) {
    width: 40px;
    margin-left: 8px;
    p {
      display: none;
    }
    span {
      width: 18px;
      height: 18px;
      background-color: ${cor_base_2};
      font-size: 12px;
      border-radius: 10px;
      display: flex;
      font-family: "Open sans";
      color: white;
      align-items: center;
      text-align: center;
      position: absolute;
      padding-left: 6px;
      top: 35px;
      margin-left: 22px;
    }
  }
  /* background-color: red; */
`
