import { Box, Text, DrawerContent, Image } from "@chakra-ui/react"
import { motion } from "framer-motion"
import styled from "styled-components"
import { cor_base_1, cor_base_2 } from "../../../services/cores"

export const InnovationSiteHomeHeaderMobile = styled(Box)`
  width: 95%;
  height: 120px;
  display: none;
  position: relative;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 768px) {
    display: block;
  }
`
export const ImageMenuHeader = styled(motion.img)`
  margin-top: 0.3rem;
  margin-right: 0.5rem;
  height: 40px;
`
export const TextMenuHeader = styled(motion.h1)`
  transition: 1.5s;
  font-size: 21px;
  padding-top: 12px;
  padding-left: 10px;
  font-family: "Open sans";
`
export const InnovationSiteHomeHeaderContentMobile = styled(Box)`
  width: 95%;
  height: 50px;

  // background-color: #9df19a;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
`
export const InnovationSiteHomeHeaderContentMenuMobile = styled(Box)`
  width: 50px;
  height: 50px;
  position: relative;
  float: left;
  top: 8px;
  z-index: 999;
  // background-color: cyan;

  i {
    position: relative;
    font-size: 40px;
    color: black;
  }
`
export const InnovationSiteHomeHeaderContentMenuNavLinkMobile = styled.a`
  text-decoration: none;
  color: black;
`
export const InnovationSiteHomeHeaderContentLogoMobile = styled(Box)`
  width: 150px;
  height: 50px;
  position: relative;
  float: left;
  top: 10px;
  img {
    width: 150px;
    display: block;
    object-fit: scale-down;
    // width: 100%;
    // height: 100%;
  }
`
export const InnovationSiteHomeHeaderContentUserMobile = styled(Box)`
  width: 80px;
  height: 50px;
  position: relative;
  float: left;
  top: 15px;
  // background-color: darkblue;
  i {
    position: relative;
    float: right;
    margin-left: auto;
    margin-right: auto;
    color: ${cor_base_2};
    font-size: 40px;
  }
`
export const InnovationSiteHomeHeaderContentCartMobile = styled(Box)`
  width: 50px;
  height: 50px;
  position: relative;
  float: left;
  top: 15px;
  // background-color: darkcyan;
  i {
    width: 40px;
    height: 40px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    color: ${cor_base_2};
    font-size: 40px;
  }
`
export const InnovationSiteHomeHeaderContentInputMobile = styled(Box)`
  width: 95%;
  height: 50px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  top: 5px;

  input {
    width: 100%;
    height: 45px;
    position: relative;
    top: 10px;
    border: 0.8px solid #cacaca;
    border-radius: 3px;
    padding-left: 10px;
    -webkit-appearance: none;
    -moz-appearance: none;
    background: transparent;
    background-image: url("/images/menu/lupa.png");
    background-repeat: no-repeat;
    background-position-x: 97%;
    background-position-y: 6px;
  }
  input::-webkit-input-placeholder {
    font-size: 12px;
  }
`
export const InnovationSiteHomeHeaderContentClickInputMobile = styled(Box)`
  width: 50px;
  height: 45px;
  position: relative;
  background-color: transparent;
  top: -35px;
  left: 85%;
`

export const BoxMenuSegmentos = styled.a`
  width: 49%;
  height: 42px;
  margin-left: 2.5%;
  margin-right: 2.5%;
  margin-top: -8px;
  /* border-right: 1px solid rgb(0,0,0,0.2); */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;

  &:nth-child(2) {
    border-right: none;
  }

  a {
    height: 15px;
    font-size: 14px;
    font-family: "Open sans";
    font-weight: 100;
    margin-top: 7px;
    color: black;
    text-decoration: none;
    letter-spacing: -0.02rem;
  }
`

export const TextMenu = styled.p`
  height: 5px;
  font-family: "Open sans";
  letter-spacing: -0.3px;
`
