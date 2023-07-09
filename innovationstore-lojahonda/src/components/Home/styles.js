import { Box, Grid, Button, Image } from "@chakra-ui/react"
import styled, { createGlobalStyle, keyframes } from "styled-components"
import { cor_base_1, cor_base_2 } from "../../services/cores"

export const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Gisha';
  src: url('/fonts/gisha.ttf');
}
@font-face {
  font-family: 'Gisha bold';
  src: url('/fonts/gishabd.ttf');
}
@font-face {
  font-family: 'Akrobat';
  src: url('/fonts/Akrobat-Regular.otf');
}
@font-face {
  font-family: 'Akrobat ExtraBold';
  src: url('/fonts/Akrobat-ExtraBold.otf');
}
@font-face {
  font-family: 'Akrobat SemiBold';
  src: url('/fonts/Akrobat-SemiBold.otf');
}
@font-face {
  font-family: 'Helvetica Neue LT Std Bold';
  src: url('/fonts/Helvetica Neue LT Std 75 Bold.otf');
}
@font-face {
  font-family: 'HelveticaNeueLTStd-Lt';
  src: url('/fonts/HelveticaNeueLTStd-Lt.otf');
}
@font-face {
  font-family: 'Verdana';
  src: url('/fonts/verdana.ttf');
}
@font-face {
  font-family: 'Verdana bold';
  src: url('/fonts/verdanab.ttf');
}
`

export const HomeContainer = styled(Box)`
  background-color: white;
  width: 100%;
  margin: 0 auto;
  transition: 0.3s;
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
            font-family: "Open sans", sans-serif;
            font-size: 1vw;
            border-radius: 7px;
            border: none;
          }
        }
      }
    }
  }
`

export const BotaoFecharRecesso = styled(Button)`
  z-index: 9999999;
  position: fixed;
  left: 63.5%;
  top: 12%;
  transform: translate(50%, 50%);
  width: 30px;
  height: 30px;
  border: 2px solid white;
  border-radius: 50%;
  color: white;
  @media screen and (max-width: 1366px) {
    left: 69%;
    top: 11.5%;
  }
  @media screen and (max-width: 768px) {
    left: 81.5%;
    top: 19%;
  }
`
export const ImageFecharRecesso = styled(Image)`
  z-index: 9999999;
  position: fixed;
  width: 600px;
  height: 600px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  @media screen and (max-width: 768px) {
    width: 350px;
    height: 350px;
  }
`

export const HomeContainerFiltroBuscar = styled(Box)`
  width: 100%;
  height: 83px;
  position: relative;
  // z-index: 99999;
  z-index: 999;
  display: none;
  transition: 1s;
`
export const HomeContainerFiltroBuscarContent = styled(Box)`
  width: 100%;
  height: 83px;
  position: fixed;
  background-color: #e1e1e1;
  display: block;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const HomeContainerFiltroBuscarContentBanner = styled(Box)`
  position: relative;
  float: left;
  width: 100%;
  height: 31px;
  background-color: ${cor_base_2};
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const HomeContainerFiltroBuscarContentInputs = styled(Box)`
  width: 800px;
  height: 60%;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  top: 31px;
  display: flex;
  justify-content: space-between;
  input[type="text"],
  input[type="password"],
  textarea,
  select {
    outline: none;
  }
`
export const HomeContainerFiltroBuscarContentInputsSelect = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
  background-color: white;
  background-image: url("/images/menu/seta_down_laranga.png");
  background-repeat: no-repeat;
  background-position-x: 94%;
  background-position-y: 11px;
  padding-left: 15px;
  width: 248px;
  max-width: 248px;
  height: 31px;
  max-height: 40px;
  position: relative;
  border-radius: 5px;
  border: none;
  top: -20px;
  font-size: 100%;
  font-family: "Open sans", sans-serif;
  cursor: pointer;

  option {
    position: relative;
    text-align: center;
  }

  input[type="text"],
  input[type="password"],
  textarea,
  select {
    outline: none;
  }
`
export const HomeContainerFiltroBuscarContentInputsLabel = styled.label`
  position: relative;
  width: 153px;
  max-width: 153px;
  height: 31px;
  max-height: 40px;
  border-radius: 5px;
  border: none;
  top: -20px;
  font-size: 100%;
  font-family: "Open sans", sans-serif;
  background-color: white;
  p {
    width: 70px;
    position: relative;
    float: left;
    left: 10px;
    top: 4px;
  }

  input[type="text"],
  input[type="password"],
  textarea,
  select {
    outline: none;
  }

  input:focus {
    border: none;
    box-shadow: none;
    outline-offset: 0px;
    outline: none;
  }
`
export const HomeContainerFiltroBuscarContentInputsLabelInput = styled.input`
  width: 70px;
  border: none;
  position: relative;
  left: 10px;
  top: 3px;
`
export const HomeContainerFiltroBuscarContentInputsLabelOnly = styled.label`
  width: 30px;
  position: relative;
  top: -16px;
  font-size: 100%;
  font-family: "Open sans", sans-serif;
  left: 15px;
`
export const HomeContainerFiltroBuscarContentInputsLabelPrecos = styled.label`
  position: relative;
  width: 100px;
  height: 31px;
  border-radius: 5px;
  border: none;
  top: -20px;
  font-size: 100%;
  font-family: "Open sans", sans-serif;
  background-color: white;
  p {
    width: 30px;
    position: relative;
    float: left;
    left: 10px;
    top: 4px;
  }

  input[type="text"],
  input[type="password"],
  textarea,
  select {
    outline: none;
  }

  input:focus {
    border: none;
    box-shadow: none;
    outline-offset: 0px;
    outline: none;
  }
`
export const HomeContainerFiltroBuscarContentInputsLabelPrecosInput = styled.input`
  width: 70px;
  border: none;
  position: relative;
  left: 0px;
  top: 3px;
`
export const HomeContainerFiltroBuscarContentInputsbtn = styled.button`
  width: 30px;
  height: 31px;
  position: relative;
  border: none;
  border-radius: 0px 10px 10px 0px;
  background-color: ${cor_base_2};
  color: white;
  top: -20px;
  font-size: 100%;
  font-weight: 500;
  font-family: "Open sans", sans-serif;
`
export const HomeContent = styled(Box)`
  width: 100%;
  height: auto;
  overflow: hidden;
  position: relative;
  display: block;
  /* background-color:red; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const HomeContentBody = styled(Box)`
  width: 1360px;
  min-height: 800px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  /* background-color:yellow; */

  @media screen and (max-width: 1370px) {
    width: 97%;
  }
`

export const HomeContentBodyTitle = styled(Box)`
  width: 100%;
  height: 100px;
  /* background-color:white; */
  display: flex;
  justify-content: center;
  img {
    display: block;
    object-fit: scale-down;
  }
`

export const HomeContentBodyCategorias = styled(Box)`
  width: 100%;
  height: 660px;
  /* background-color:green; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1350px) {
    width: 75%;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    zoom: 80%;
  }
  @media screen and (max-width: 1270px) {
    width: 82%;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    zoom: 82%;
  }
  @media screen and (max-width: 1140px) {
    width: 100%;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    zoom: 100%;
  }
`

export const HomeContentBodySlideCategorias = styled(Box)`
  width: 100%;
  height: 230px;
`

export const HomeContentBodyBanner = styled(Box)`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  /* background-color:red; */
`

export const HomeContentBodyCategoriasGrid = styled(Grid)`
  width: 70%;
  height: 110%;
  margin-left: auto;
  margin-right: auto;
  grid-template-columns: repeat(2, 460px);
  place-items: center;
  column-gap: 50px;

  @media screen and (max-width: 1370px) {
    width: 60%;
    /* height:105%; */
    grid-template-columns: repeat(2, 380px);
  }

  @media screen and (max-width: 1230px) {
    height: 98%;
    grid-template-columns: repeat(2, 350px);
  }

  @media screen and (max-width: 1140px) {
    height: 85%;
    grid-template-columns: repeat(2, 350px);
    margin-left: 15px;
  }
`

export const HomeContentBodyCategoriasGridItem = styled.a`
  width: 361px;
  height: 294px;
  /* background-color:grey; */
  position: relative;
  margin-left: auto;
  margin-right: auto;
  transition: 0.2s;
  border-radius: 10px;
  background: ${(props) => (props.bgimg ? `url(${props.bgimg})` : "none")};
  background-size: 100% 100%;
  text-decoration: none;
  cursor: pointer;

  h1 {
    width: 45%;
    height: 80px;
    font-size: 32px;
    line-height: 90%;
    font-family: "Open sans", sans;
    color: white;
    margin-left: 15px;
    margin-top: 20px;
  }

  p {
    width: 50%;
    font-size: 20px;
    line-height: 110%;
    font-family: "Open sans", sans-serif;
    color: white;
    margin-left: 15px;
  }

  &:hover {
    transform: scale(1.05, 1.05);
    transition: 0.2s;
  }

  @media screen and (max-width: 1230px) {
    width: calc(361px - 10%);
    height: calc(294px - 10%);
    background-size: calc(361px - 10%) calc(294px - 10%);
    h1 {
      font-size: 29px;
    }

    p {
      font-size: 19px;
    }
  }

  @media screen and (max-width: 1140px) {
    width: calc(361px - 15%);
    height: calc(294px - 15%);
    background-size: calc(361px - 15%) calc(294px - 15%);
    margin-left: 0px;
    h1 {
      font-size: 27px;
    }

    p {
      font-size: 17px;
    }
  }
`

export const HomeContentBodyCategoriasPromocao = styled(Box)`
  height: 100%;
  /* background-color:blue; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  border: 1px solid #e5e5e5;
  border-radius: 10px;
  font-size: 1.3rem;
  text-transform: uppercase;

  @media screen and (max-width: 1230px) {
    align-items: flex-start;
  }
`

export const HomeContentBodyInfo = styled(Grid)`
  width: 80%;
  height: 480px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  grid-template-columns: repeat(3, 370px);

  @media screen and (max-width: 1370px) {
    width: 1050px;
    grid-template-columns: repeat(3, 345px);
  }

  @media screen and (max-width: 1140px) {
    width: 1020px;
    grid-template-columns: repeat(3, 325px);
  }
`

export const HomeContentBodyInfoCard = styled(Box)`
  width: 345px;
  height: 460px;
  /* background-color:green; */
`
export const HomeContentBodyInfoCardHeader = styled(Box)`
  width: 345px;
  height: 70px;
  /* background-color:orange; */
  display: flex;
  justify-content: center;

  img {
    display: block;
    object-fit: scale-down;
  }
`

export const HomeContentBodyInfoCardBody = styled(Box)`
  width: 275px;
  height: 370px;
  /* background-color:blue; */
  position: relative;
  margin-left: auto;
  margin-right: auto;
  border-radius: 8px;
  border: 2px solid #dadada;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;

  img {
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    display: block;
    object-fit: scale-down;
    margin-top: 5px;
  }

  h1 {
    font-size: 18px;
    font-weight: bold;
    font-family: "Open Sans", sans-serif;
    color: #414042;
    text-align: center;
    margin-top: 10px;
    padding-top: 7px;
    padding-bottom: 26px;
    text-align: center;
  }
  p {
    font-size: 14px;
    font-family: "Open Sans", sans-serif;
    color: #414042;
    padding-inline: 19px;
  }
`
// export const HomeContentSlide = styled(Box)`
//   width: 100%;
//   height: 758px;
//   position: relative;
//   margin-left: auto;
//   margin-right: auto;
//   background-color: white;

//   @media screen and (max-width: 1700px) {
//       height: 420px;
//   }

//   @media screen and (max-width: 1450px) {
//       height: 370px;
//   }
//   display: block;
//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `;

// export const HomeContentSlideTopo = styled(Box)`
//   width: 1380px;
//   height: 100%;
//   position: relative;
//   margin-left: auto;
//   margin-right: auto;
//   z-index: revert;
//   display: flex;
//   justify-content:space-between;
//   /* background-color:yellow; */

//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `;

// export const HomeContentSlideTopoIframe = styled.iframe`
//   overflow-x:hidden;
//   overflow-y:hidden;
//   width: 100%;
//   height:480px;
//       display: block;
//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `;
// export const HomeContentFilter = styled(Box)`
//   width: 200px;
//   height: 54px;
//   top: 0.8vw;
//   left: 365px;
//   position: relative;
//   margin-left: auto;
//   margin-right: auto;
//   z-index: 997;
//   // background-color: rgb(214, 16, 16);
//   display: flex;
//   justify-content: flex-end;
//   input[type="text"],
//   input[type="password"],
//   textarea,
//   select {
//     outline: none;
//   }
//   display:block;
//   @media screen and (max-width: 768px){
//     display:none;
//   }
// `;
// export const HomeContentFilterSelect = styled.select`
//   -webkit-appearance: none;
//   -moz-appearance: none;
//   background: transparent;
//   background-color: white;
//   background-image: url("/images/menu/seta.png");
//   background-repeat: no-repeat;
//   background-position-x: 90%;
//   background-position-y: 11px;
//   padding-left: 15px;
//   width: 200px;
//   height: 34px;
//   position: relative;
//   border-radius: 3px;
//   border: 0.8px solid rgb(191, 191, 191);
//   top: 20%;
//   font-size: 100%;
//   font-family: "Open sans", sans-serif;
//   cursor: pointer;
//   option {
//     color: black;
//     position: relative;
//     text-align: center;
//   }
// `;
// export const HomeContentTitleSlide = styled(Box)`
//   width: 100%;
//   height: 3px;
//   position: relative;
//   top: -25px;
//   text-align: center;
//   z-index: 99;
//   font-family: "Open sans", sans;
//   p {
//     width: 240px;
//     height: 30px;
//     position: relative;
//     margin-left: auto;
//     margin-right: auto;
//     background-color: white;
//     // font-family: 'Akrobat';
//     font-family: "Open sans", sans;
//     // font-size: 120%;
//     font-size: 18px;
//     font-weight: 400;
//     letter-spacing: 0.05rem;
//     color: ${cor_base_1};
//   }
//   display:block;
//   @media screen and (max-width: 768px){
//     display:none;
//   }
// `;
// export const HomeContentSublinhado = styled(Box)`
//   width: 100%;
//   height: 3px;
//   position: relative;
//   top: -15px;
//   background-color: #f6f6f6;
//   display:block;
//   @media screen and (max-width: 768px){
//     display:none;
//   }
// `;
// export const HomeContentGridProdutos = styled(Box)`
//   width: 1070px;
//   height: 1300px;
//   // min-height: 880px;
//   // max-height: 1000px;
//   position: relative;
//   z-index: 997;
//   margin-left: auto;
//   margin-right: auto;
//   top: 40px;
//   display: block;
//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `;
// export const HomeContentGridProdutosLoading = styled(Box)`
//   width: 13%;
//   height: 20%;
//   position: relative;
//   margin-left: auto;
//   margin-right: auto;
//   margin-top: 20%;
// `;
// export const HomeContentGridProdutosSlide1 = styled(Box)`
//   position: relative;

//   .carousel-item {
//     height: 1100px;
//     // background-color: rgb(255, 0, 0);
//   }
// `;
// export const HomeContentSlideRodape = styled(Box)`
//   width: 1020px;
//   height: 100%;
//   position: relative;
//   margin-left: auto;
//   margin-right: auto;
// `;
// export const HomeContentGridProdutosProduto = styled(Box)`
//   width: 200px;
//   height: 550px;
//   position: relative;
//   float: left;
//   text-align: center;
//   font-family: "Open sans", sans-serif;
//   font-size: 120%;
//   display: block;
//   margin-left: 50px;
//   // background-color: cadetblue;
// `;
// export const HomeContentGridProdutosProdutoTitle = styled(Box)`
//   font-size: 17px;
//   height: 60px;
//   // font-family: 'Akrobat';
//   font-family: "Open sans", sans;
//   // white-space: nowrap;
//   text-align: center;

//   strong {
//     width: 200px;
//     height: 45px;
//     font-weight: bolder;
//     position: relative;
//   }

//   h1 {
//     font-size: 15px;
//     height: 20px;
//     line-height: 100%;
//     font-family: "Open sans", sans;
//   }
//   p {
//     font-size: 16px;
//     position: relative;
//     font-weight: 100;
//     font-family: "Open sans", sans-serif;
//   }
// `;
// export const HomeContentGridProdutosProdutoCardProd = styled(Box)`
//   width: 100%;
//   height: 417px;
//   position: relative;
//   border: 0.6px solid #eeeeee;
//   // background-color: rgb(23, 223, 100);
//   &:hover {
//     transition: 0.3s;
//     transform: scale(1.02, 1.02);
//     background-color: rgb(252, 252, 252);
//   }
// `;
// export const HomeContentGridProdutosProdutoCardProdImgProd = styled.img`
//   width: 100%;
//   height: 247px;
//   position: relative;
//   float: left;
//   display: block;
//   object-fit: scale-down;
//   border: 0.6px solid #eeeeee;
//   cursor: pointer;
//   img {
//     width: 100%;
//     height: 100%;
//     display: block;
//     object-fit: scale-down;
//     border: 1px solid #eeeeee;
//   }
// `;
// export const HomeContentGridProdutosProdutoCardProdSeloEmbalagem = styled(Box)`
//   width: 196px;
//   height: 68px;
//   position: absolute;
//   top: 190px;
//   left: -15px;
//   background-image: url("/images/menu/EMBALAGEM-ESPECIAL.png");
//   background-repeat: no-repeat;
//   background-size: 100% 100%;
//   // background-color: burlywood;
// `;
// export const HomeContentGridProdutosProdutoCardProdSelo = styled(Box)`
//   width: 95px;
//   height: 21px;
//   position: absolute;
//   top: 1px;
//   left: 103px;
//   // background-image: url("/images/menu/ultrarapido.png");
//   background-repeat: no-repeat;
//   background-size: 100% 100%;
//   // background-color: burlywood;
// `;
// export const HomeContentGridProdutosProdutoCardProdDesc = styled(Box)`
//   width: 100%;
//   height: 50px;
//   display: block;
//   position: relative;
//   float: left;
//   // background-color: #f05423;

//   p {
//     width: 175px;
//     position: relative;
//     margin-left: auto;
//     margin-right: auto;
//     text-align: left;
//     line-height: 150%;
//     font-size: 11px;
//     font-family: "Open sans", sans-serif;
//     top: 12px;
//   }
// `;
// export const HomeContentGridProdutosProdutoCardProdCores = styled(Box)`
//   width: 100%;
//   height: 108px;
//   display: block;
//   position: relative;
//   float: left;
//   margin-top: 10px;
//   // background-color: #f05423;
// `;
// export const HomeContentGridProdutosProdutoCardProdCoresTitle = styled(Box)`
//   width: 100%;
//   height: 18px;
//   position: relative;
//   // background-color: aqua;

//   p {
//     width: 174px;
//     height: 100%;
//     position: relative;
//     margin-left: auto;
//     margin-right: auto;
//     font-size: 11px;
//     font-family: "Open sans", sans;
//     text-align: left;
//   }
// `;
// export const HomeContentGridProdutosProdutoCardProdCoresGridCores = styled(Box)`
//   width: 100%;
//   height: 50px;
//   position: relative;
//   float: left;
//   // background-color: rgb(238, 144, 30);
// `;
// export const HomeContentGridProdutosProdutoCardProdCoresGridCoresContent = styled(Box)`
//   width: 100px;
//   height: 60px;
//   position: relative;
//   left: 10px;
//   z-index: 999;
//   // background-color: rgba(165, 42, 42, 0.349);
// `;
// export const HomeContentGridProdutosProdutoCardProdCoresGridCoresContentCor = styled(Box)`
//   width: 14px;
//   height: 14px;
//   position: relative;
//   float: left;
//   margin-left: 6px;
//   margin-top: 6px;
//   border-radius: 14px;

//   .tooltip-inner {
//     background-color: #00acd6 !important;
//     /*!important is not necessary if you place custom.css at the end of your css calls. For the purpose of this demo, it seems to be required in SO snippet*/
//     color: #fff;
//   }
// `;
// export const HomeContentGridProdutosProdutoCardProdValor = styled(Box)`
//   width: 100%;
//   height: 48px;
//   display: block;
//   position: relative;
//   float: left;
//   margin-left: auto;
//   margin-right: auto;
//   top: -50px;
//   // background-color: burlywood;
// `;
// export const HomeContentGridProdutosProdutoCardProdValorContent = styled(Box)`
//   width: 170px;
//   height: 100%;
//   position: relative;
//   margin-left: auto;
//   margin-right: auto;
//   p {
//     height: 8px;
//     line-height: 130%;
//     font-size: 11px;
//     font-family: "Open sans", sans-serif;
//     text-align: right;
//   }

//   strong {
//     font-size: 18px;
//     letter-spacing: -0.02rem;
//     font-family: "Open sans", sans;
//   }
// `;
// export const HomeContentGridProdutosProdutobtn = styled(Box)`
//   width: 100%;
//   height: 50px;
//   position: relative;
//   top: -40px;
//   // background-color: rgb(255, 94, 0);

//   button {
//     width: 100%;
//     height: 27px;
//     position: relative;
//     top: 10px;
//     border: none;
//     border-radius: 2px;
//     letter-spacing: 0.05rem;
//     background-color: ${cor_base_1};
//     font-size: 18px;
//     font-family: "Open sans", sans-serif;
//     color: white;
//     font-weight: 400px;
//   }
// `;

export const InnovationSiteHomeBannerMobile = styled(Box)`
  width: 420px;
  height: 380px;
  display: block;
  position: relative;
  // float: left;
  margin-left: auto;
  margin-right: auto;
  // background-color: darkcyan;

  img {
    width: 100%;
    height: 300px;
    display: block;
    object-fit: cover;
    position: relative;
    margin-left: auto;
    margin-right: auto;
  }
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`
export const InnovationSiteHomeContentMobile = styled(Box)`
  width: 100%;
  height: auto;
  overflow: hidden;
  display: block;
  position: relative;
  float: left;
  top: 15px;
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    z-index: -1;
  }
  // background-color: darkgoldenrod;
  .carousel {
    width: 350px;

    .carousel-control-prev {
      width: 51px;
      left: -20px;
      z-index: 997;
      top: 40px;

      img {
        width: 51px;
        height: 48px;
      }
    }
    .carousel-control-next {
      width: 51px;
      right: -40px;
      top: 40px;
      z-index: 997;
      img {
        width: 51px;
        height: 48px;
      }
    }

    .carousel-indicators {
      width: 80px;
      height: 20px;
      top: 0px;
      margin-top: 0px;
      position: relative;
      margin-left: auto;
      margin-right: auto;

      li {
        width: 15px;
        height: 15px;
        position: relative;
        // left: -80px;
        border-radius: 35px;
        margin: 5px;
        background-color: rgb(211, 211, 211);
        cursor: pointer;
      }
    }

    .carousel-indicators .active {
      background-color: ${cor_base_2};
    }

    .carousel-inner {
      width: 372px;
      height: 600px;

      .carousel-item {
        height: 420px;
        z-index: 996;
        img {
          position: relative;
          margin-left: auto;
          margin-right: auto;
          max-width: 1049px;
        }
      }

      .carousel-item:hover {
        opacity: 1;
      }
    }

    .carousel-inner:hover {
      opacity: 1;
    }
  }
  .carousel:hover {
    opacity: 1;
  }
`
export const InnovationSiteHomeContentTitleMobile = styled(Box)`
  width: 100%;
  height: 50px;
  position: relative;
  float: left;
  // background-color: darkmagenta;

  h1 {
    font-size: 22px;
    text-align: center;
    position: relative;
    top: 10px;
    font-family: "Open sans", sans;
  }
`
export const InnovationSiteHomeContentGridMobile = styled(Box)`
  width: 100%;
  height: 600px;
  position: relative;
  float: left;
`
export const InnovationSiteHomeContentGridContentMobile = styled(Box)`
  width: 372px;
  height: 100%;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  top: 15px;
  // background-color: darkslateblue;
  width: 372px;
`
export const InnovationSiteHomeContentGridContentCardMobile = styled(Box)`
  width: 172px;
  height: 226px;
  position: relative;
  float: left;
  margin-top: 8px;
  margin-left: 8px;
  // background-color: deeppink;
  background-size: 172px 226px;

  img {
    width: 172px;
    height: 226px;
  }
`

export const CarouselPrincipalMobile = styled(Box)`
  width: 371px;
  height: 350px;
  margin-left: 0px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-top: -50px;

  #carouselExampleDark {
    height: 350px;
    .carousel-indicators {
      width: 200px;
      height: 30px;
      position: relative;
      top: 310px;
      z-index: 999;
      button {
        width: 20px;
        height: 20px;
        border-radius: 10px;
        border: 1px solid transparent;
        opacity: 0.4;
      }

      .active {
        opacity: 1;
        background-color: white;
      }
    }

    .carousel-inner {
      .carousel-item {
        img {
          position: absolute;
          z-index: -1;
        }

        h1 {
          width: 45%;
          height: 80px;
          font-size: 32px;
          line-height: 90%;
          font-family: "Open sans", sans-serif;
          color: white;
          margin-left: 15px;
          margin-top: 20px;
        }

        p {
          width: 50%;
          font-size: 20px;
          line-height: 110%;
          font-family: "Open sans", sans-serif;
          color: white;
          margin-left: 15px;
        }
      }
    }
  }
`

export const CarouselCategoriasMobile = styled(Box)`
  width: 90%;
  min-width: 360px;
  max-width: 400px;
  height: 180px;
  position: relative;
  padding-left: 5px;
  margin: -40px auto 15px auto;
`

export const CarouselInfoMobile = styled(Box)`
  width: 360px;
  height: 480px;
  position: relative;
  padding-left: 5px;
  margin: 30px auto 0 auto;
`
