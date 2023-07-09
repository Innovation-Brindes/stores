import styled from "styled-components";
import { cor_base_2 } from "../../services/cores";

export const DescricaoMobile = styled.div`
  width: 100%;
  height: 350px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  display: block;
  margin-top:50px;
  box-shadow: 0px 6px 4px 0px rgba(218, 218, 218, 0.6);
  @media screen and (min-width: 768px) {
    display:none;
  }
`;
export const DescricaoContentMobile = styled.div`
  width: 400px;
  position:relative;
  margin-left:auto;
  margin-right:auto;
  top:0px;
  display: flex;
  flex-direction:column;
  justify-content:center;
  `;
export const DescricaoContentDescMobile = styled.div`
  width: 350px;
  height: 180px;
  position: relative;
  // background-color: #F8AC00;;.
  
  strong {
    font-size: 16px;
    font-family: "Akrobat";
    position: relative;
    left: 10px;
  }

  P {
    font-size: 14px;
    font-family: "Akrobat";
  }

  div {
    a {
      font-size: 18px;
      font-family: "Akrobat ExtraBold";
      color: ${cor_base_2};
      letter-spacing: 0.04rem;
      text-decoration: underline;
    }
  }
  
  // float: left;
  `;
export const DescricaoContentDimensaoMobile = styled.div`
  width: 350px;
  height: 10%;
  position: relative;

  strong {
    font-size: 15px;
    font-family: "Akrobat";
    position: relative;
    left: 10px;
    
  }
`;
export const VisualMobile = styled.div`
  width: 100%;
  height: 400px;
  display: block;
  position: relative;
  float: left;
  @media screen and (min-width: 768px) {
    display:none;
  }
`;
export const VisualImgMobile = styled.div`
  width: 411px;
  height: 289px;
  position: relative;
  // float: left;
  margin-left: auto;
  margin-right: auto;
  img {
    width: 411px;
    height: 289px;
    margin-top:-25px;
  }

  h1{
    width:100%;
    height:110px;
    font-size: 1.5rem;
    text-align:center;
    font-family:'Gisha';
    background-color: #F4F5F5;
    padding-top: 15px;
    border-top-left-radius:5px;
    border-top-right-radius:5px;
    color: #5e5e5e;
  }
`;
export const DetalhesMobile = styled.div`
  width: 100%;
  height: 100px;
  top: 2%;
  display: block;
  position: relative;
  float: left;
  margin-left: auto;
  margin-right: auto;
  // background-color: violet;
  margin-left: 13px;
  @media screen and (min-width: 768px) {
    display:none;
  }
`;
export const DetalhesContentMobile = styled.div`
  width: 320px;
  height: 250px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  display: block;
  top: 00px;
  // background-color: tomato;
`;
export const DetalhesContentDescricaoMobile = styled.div`
  width: 100%;
  height: 100px;
  position: relative;
  // background-color: sandybrown;

  p {
    font-size: 15px;
    font-family: "Gisha";
    color: #5e5e5e;
  }
`;
export const DetalhesContentCoresMobile = styled.div`
width: 100%;
height: 70px;
position: relative;
margin-right: auto;
margin-left: auto;

`;
export const DetalhesContentCoresContentMobile = styled.div`
 width: auto;
  height: 72px;
  position: relative;
  margin-left: 3rem;
  `;
export const DetalhesContentCoresContentTitleMobile = styled.div`
  width: 100%;
  height: 25px;
  font-size: 17px;
  position: relative;
  left: 0%;
  font-family: 'Akrobat';
  text-align: left;
  // background-color: cornflowerblue;
  `;
export const DetalhesContentCoresContentGridCoresMobile = styled.div`
  width: 100%;
  height: 72px;
`;
export const DetalhesContentCoresContentGridCoresCorMobile = styled.div`
  width: 30px;
  height: 30px;
  position: relative;
  float: left;
  margin-left: 2px;
  margin-top: 3px;
  border-radius: 35px;
  background-color: white;
  cursor: pointer;
`;
export const DetalhesContentCoresContentGridCoresCorCircleOutMobile = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 35px;
  // border: 2px solid #8EC505;
  border: 3px solid #f1f1f1;
  cursor: pointer;
`;
export const DetalhesContentCoresContentGridCoresCorCircleInMobile = styled.div`
  width: 25.5px;
  height: 26px;
  border-radius: 35px;
  // background-color: #33629E;
  position: relative;
  left: 0px;
  top: 0px;
  cursor: pointer;
`;
export const AvisoEmbalagemMobile = styled.div`
  display: block;
  width: 100%;
  
  height: 300px;
  @media screen and (min-width: 768px) {
display: none;
  }
`;
export const AvisoEmbalagemContentMobile = styled.div`
  width: 310px;
  height: 250px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  top: 50px;
  // background-color: yellow;
  img {
    width: 100%;
    display: flex;
    object-fit: scale-down;
    // display: none;
  }
`;
export const AvisoEmbalagemContentBtnMobile = styled.div`
  width: 100%;
  height: 80px;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  top: 60px;
  background-color: transparent;
`;
