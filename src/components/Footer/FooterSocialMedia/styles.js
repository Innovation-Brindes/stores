import styled from "styled-components";
import { cor_base_1, cor_base_2 } from "../../../services/cores";


export const FooterSocialMedia = styled.div`
  width: 100%;
  height:60px;
  background-color: ${cor_base_1};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
`
export const FooterSocialMediaContent = styled.div`
  width: 800px;
  height: 80%;
  display:flex;
  flex-direction:row;
  
  @media screen and (max-width:768px){
    width: 400px;
    height:80%;
    
  }
`
export const FooterSocialMediaContentLogo = styled.div`
  width: 500px;
  height: 100%;
  display:flex;
  justify-content:flex-end;
  align-items:center;
  img{
    max-height: 80%;
    float:right;
  }

`
export const FooterSocialMediaContentControl = styled.div`
  width: 300px;
  height: 100%;
  display:flex;
  justify-content: flex-end;
  align-items:center;

  img{
    height:38px;
    margin:5px;
    cursor: pointer;
  }
  
  p{
    width: 50px;
    height:16px;
    font-size:18px;
    color:white;
    padding-left:15px;
    cursor: pointer;
  }
`