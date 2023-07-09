import { Grid, Box } from "@chakra-ui/react";
import styled from "styled-components";
import { cor_base_1, cor_base_2 } from "../../services/cores";

export const BuscarContentNaoEncontrou = styled.div`
  width: 100%;
  height: 900px;
  position: relative;
  background-color: #f9f9f9;
`;
export const BuscarContentNaoEncontrouHeader = styled.div`
  width: 100%;
  height: 145px;
  position: relative;
  float: left;
`;
export const BuscarContentNaoEncontrouHeaderTitle = styled.div`
  width: 900px;
  height: 100%;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;

  h1 {
    font-size: 26px;
    font-family: "Gisha Bold";
    position: relative;
    float: left;
    top: 50%;
    margin-left: 10px;
  }

  img {
    width: 72px;
    height: 72px;
    position: relative;
    top: 40%;
    margin-left: 10px;
  }
`;
export const BuscarContentNaoEncontrouHeaderSubtitle = styled.div`
  width: 900px;
  height: 100%;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  // background-color: cadetblue;

  h1 {
    font-size: 21px;
    position: relative;
    font-family: "Gisha";
    text-align: center;
  }
`;
export const BuscarContentNaoEncontrouGrid = styled.div`
  width: 1180px;
  height: 620px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  top: 270px;
  // background-color: cornflowerblue;
`;
export const BuscarContentNaoEncontrouGridCard = styled.div`
  width: 231px;
  height: 305px;
  position: relative;
  float: left;
  top: -142px;
  margin-left: 5px;
  margin-top: 5px;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    transition: 0.6s;
    img {
      transition: 0.4s;
      transform: scale(1.02, 1.02);
      box-shadow: 0 0 1em rgb(191, 191, 191);
    }
  }
`;
export const BuscarContentNaoEncontrouGridCardMarginHidden = styled(BuscarContentNaoEncontrouGridCard)`
  width: 231px;
  height: 305px;
  position: relative;
  float: left;
  top: -142px;
  margin-left: 0px;
  margin-top: 5px;
  transition: 0.3s;
  cursor: pointer;
`;

export const BuscarContent = styled.div`
  width: 1309px;
  min-height:800px;
  height:auto;
  position:relative;
  margin-left:auto;
  margin-right:auto;
  display:flex;
  justify-content:space-between;

  @media screen and (max-width:1330px){
    width:95%;
  }
  @media screen and (max-width:768px){
      width: 100%;
      flex-direction:column;
      z-index: 999;
  }
`;

export const BuscarContentFilter = styled(Box)`
  width: 1260px;
  // max-width: 1110px;
  // min-width: 1098px;
  top:${(props) => props.isUltraRapido ? "0vw":"0vw"};
  left:${(props) => props.isUltraRapido ? "-13px":"-13px"};
  height: 80px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  z-index: revert;
  // background-color: #4d4d4d;
  display: flex;
  justify-content: flex-end;
  input[type="text"],
  input[type="password"],
  textarea,
  select {
    outline: none;
  }

  .sm {
    width: 100;
    background-color: #00acd6;
  }
  @media screen and (max-width: 1280px) {
    width:95%;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }

`;
export const BuscarContentFilterSelect = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
  background-color: white;
  background-image: ${(props) => props.isUltraRapido ? 'url("/images/select.png")' : 'url("/images/menu/seta.png")'};
  background-repeat: no-repeat;
  background-position-x: 90%;
  background-position-y: 11px;
  width: 190px;
  height: 34px;
  position: relative;
  float:left;
  border-radius: 3px;
  border: 0.8px solid rgb(191, 191, 191);
  top: 20%;
  /* left: 350px; */
  font-size: 100%;
  font-family: "Akrobat";

  option {
    position: relative;
    text-align: center;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
export const BuscarContentFiltroContentFiltroPor = styled.div`
  width: 275px;
  position: relative;
  float: left;
`;
export const BuscarContentFiltroContentFiltroPorTitle = styled.div`
  width: 100%;
  height: 35px;
  position: relative;
  margin-top: 20px;

  h1 {
    font-size: 25px;
    font-family: "Akrobat";
    color: rgb(62, 62, 62);
  }
`;
export const BuscarContentFiltroContentDetalhesCores = styled.div`
  width: 300px;
  height: 180px;
  // background-color: burlywood;
`;
export const BuscarContentFiltroContentDetalhesCoresContent = styled.div`
  width: 100%;
  height: 72px;
  // background-color: cadetblue;
`;
export const BuscarContentFiltroContentDetalhesCoresContentTitle = styled.div`
  width: 90%;
  height: 25px;
  font-size: 14px;
  position: relative;
  float: left;
  font-family: "Akrobat";
  // background-color: cornflowerblue;
`;
export const BuscarContentFiltroContentDetalhesCoresContentGridCores = styled.div`
  width: 100%;
  height: 72px;
  position: relative;
  float: left;
  // background-color: crimson;
`;
export const BuscarContentFiltroContentDetalhesCoresContentGridCoresCor = styled.div`
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
export const BuscarContentFiltroContentDetalhesCoresContentGridCoresCorCircleOut = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 35px;
  // border: 2px solid #8EC505;
  border: 2px solid #f1f1f1;
  cursor: pointer;
`;
export const BuscarContentFiltroContentDetalhesCoresContentGridCoresCorCircleIn = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 15px;
  // background-color: #33629E;
  position: relative;
  left: 5px;
  top: 4.8px;
  cursor: pointer;
`;
export const BuscarContentVerMais = styled.div`
  width: 100%;
  height: 30px;
  position: relative;
  float: left;
  // background-color: aqua;
`;
export const BuscarContentVerMaisText = styled.div`
  width: 30%;
  height: 100%;
  position: relative;
  float: left;
  cursor: pointer;
  // background-color: bisque;

  p {
    font-size: 18px;
    font-family: "Akrobat";
    position: relative;
    left: 22px;
    color: rgb(82, 82, 82);
  }
`;
export const BuscarContentVerMaisTextLine = styled.div`
  width: 62%;
  height: 1px;
  position: relative;
  float: left;
  top: 14px;
  background-color: rgb(173, 173, 173);
`;
export const BuscarContentFiltroInputCategoria = styled.div`
  width: 275px;
  height: 34px;
  position: relative;
  float: left;
  background-color: white;
  border-radius: 3px;
  border: 0.6px solid rgb(204, 204, 204);
  cursor: pointer;
  margin-top: 20px;

  background-image: url("/images/menu/seta.png");
  background-repeat: no-repeat;
  background-position-x: 95%;
  background-position-y: 12px;
`;
export const BuscarContentFiltroInputCategoriaTitle = styled.div`
  width: 80%;
  height: 100%;
  position: relative;
  left: 8%;
  top: 15%;
  font-size: 100%;
  font-family: "Akrobat";
  color: rgb(82, 82, 82);
  display: flex;
  justify-content: space-between;

  p {
    width: 85px;
  }
`;
export const BuscarContentFiltroInputCategoriaTitleSelecionados = styled.div`
  width: 150px;
  margin-top: 1rem;
  p {
    width: 150px;
    text-align: right;
    margin-top: -1rem;
  }
`;
export const BuscarContentFiltroInputCategoriaContent = styled.div`
  width: 275px;
  height: 0px;
  position: relative;
  float: left;
  background-color: white;
  top: -5px;
  left: -1px;
  border-radius: 3px;
  border-left: 0.6px solid rgb(204, 204, 204);
  border-right: 0.6px solid rgb(204, 204, 204);
  border-bottom: 0.6px solid rgb(204, 204, 204);
  p {
    margin-top: -0.5rem;
    width: 50%;
    height: 30px;
    position: relative;
    left: 10%;
    color: ${cor_base_1};
    text-decoration-line: ${cor_base_1};
  }

  input {
    width: 225px;
    height: 32px;
    border-radius: 0px;
    top: 18px;
    left: 8%;
    position: relative;
    border: 0.6px solid rgb(204, 204, 204);
    outline: none;
  }

  input::-webkit-input-placeholder {
    padding-left: 10px;
    font-family: "Akrobat";
    color: rgb(204, 204, 204);
  }

  ul {
    width: 270px;
    height: 180px;
    position: relative;
    top: 18px;
    // overflow-x: scroll;
    // left: 8%;
    // background-color: rgba(95, 158, 160, 0.377);
  }

  li {
    width: 225px;
    height: 35px;
    position: relative;
    margin-top: 5px;
    // background-color: chocolate;
    list-style-type: none;
    left: -33px;

    input {
      margin-top: -0.5rem;
      width: 15%;
      height: 60%;
      position: relative;
      float: left;
    }

    input[type="checkbox"]:checked:before {
      content: "";
      display: block;
      position: relative;
      width: 23px;
      height: 23px;
      left: 5px;
      background: url("../images/check-verde.png");
      background-color: white;
      background-size: 100% 100%;
    }

    p {
      width: 50%;
      height: 100%;
      position: relative;
      float: left;
      top: 18px;
      left: 25px;
      font-size: 100%;
      font-family: "Akrobat";
      color: rgb(82, 82, 82);
    }
  }
`;

export const BuscarContentFiltroInputSubcategoria = styled.div`
  width: 275px;
  height: 34px;
  position: relative;
  float: left;
  background-color: white;
  border-radius: 3px;
  border: 0.6px solid rgb(204, 204, 204);
  cursor: pointer;
  margin-top: 20px;

  background-image: url("/images/menu/seta.png");
  background-repeat: no-repeat;
  background-position-x: 95%;
  background-position-y: 17px;
`;
export const BuscarContentFiltroInputSubcategoriaTitle = styled.div`
  width: 80%;
  height: 100%;
  position: relative;
  left: 8%;
  top: 15%;
  font-size: 100%;
  font-family: "Akrobat";
  color: rgb(82, 82, 82);
  display: flex;
  justify-content: space-between;

  p {
    width: 85px;
  }
`;
export const BuscarContentFiltroInputSubcategoriaTitleSelecionados = styled.div`
  width: 120px;
  margin-top: 1rem;
  p {
    margin-top: -1rem;
    width: 120px;
    text-align: right;
  }
`;
export const BuscarContentFiltroInputSubcategoriaContent = styled.div`
  width: 275px;
  height: 0px;
  position: relative;
  float: left;
  background-color: white;
  top: -5px;
  left: -1px;
  border-radius: 3px;
  border-left: 0.6px solid rgb(204, 204, 204);
  border-right: 0.6px solid rgb(204, 204, 204);
  border-bottom: 0.6px solid rgb(204, 204, 204);

  p {
    margin-top: -0.5rem;
    width: 50%;
    height: 30px;
    position: relative;
    left: 10%;
    color: ${cor_base_1};
    text-decoration-line: ${cor_base_1};
  }

  input {
    width: 225px;
    height: 32px;
    border-radius: 0px;
    top: 18px;
    left: 8%;
    position: relative;
    border: 0.6px solid rgb(204, 204, 204);
    outline: none;
  }

  input::-webkit-input-placeholder {
    padding-left: 10px;
    font-family: "Akrobat";
    color: rgb(204, 204, 204);
  }

  ul {
    width: 270px;
    height: 180px;
    position: relative;
    top: 18px;
    // overflow-x: scroll;
    // left: 8%;
    // background-color: rgba(95, 158, 160, 0.377);
  }

  li {
    width: 225px;
    height: 35px;
    position: relative;
    margin-top: 5px;
    // background-color: chocolate;
    list-style-type: none;
    left: -33px;

    input {
      margin-top: -0.5rem;
      width: 15%;
      height: 60%;
      position: relative;
      float: left;
    }

    input[type="checkbox"]:checked:before {
      content: "";
      display: block;
      position: relative;
      width: 23px;
      height: 23px;
      left: 5px;
      background: url("../images/check-verde.png");
      background-color: white;
      background-size: 100% 100%;
    }

    p {
      width: 50%;
      height: 100%;
      position: relative;
      float: left;
      top: 18px;
      left: 25px;
      font-size: 100%;
      font-family: "Akrobat";
      color: rgb(82, 82, 82);
    }
  }
`;
export const InputPrazo = styled.div`
  width: 275px;
  height: 34px;
  position: relative;
  float: left;
  background-color: white;
  border-radius: 3px;
  border: 0.6px solid rgb(204, 204, 204);
  cursor: pointer;
  margin-top: 20px;

  background-image: url("/images/menu/seta.png");
  background-repeat: no-repeat;
  background-position-x: 95%;
  background-position-y: 12px;
`;
export const InputPrazoTitle = styled.div`
  width: 80%;
  height: 100%;
  position: relative;
  left: 8%;
  top: 15%;
  font-size: 100%;
  font-family: "Akrobat";
  color: rgb(82, 82, 82);
  display: flex;
  justify-content: space-between;
`;
export const InputPrazoContent = styled.div`
  width: 275px;
  height: 0px;
  position: relative;
  float: left;
  background-color: white;
  top: -5px;
  left: -1px;
  border-radius: 3px;
  border-left: 0.6px solid rgb(204, 204, 204);
  border-right: 0.6px solid rgb(204, 204, 204);
  border-bottom: 0.6px solid rgb(204, 204, 204);

  p {
    width: 50%;
    height: 30px;
    position: relative;
    left: 10%;
    color: ${cor_base_1};
    text-decoration-line: ${cor_base_1};
  }

  input {
    z-index: 999999;
    width: 225px;
    height: 32px;
    border-radius: 0px;
    top: 18px;
    left: 8%;
    position: relative;
    border: 0.6px solid rgb(204, 204, 204);
    outline: none;
  }

  input::-webkit-input-placeholder {
    background-color: black;
    padding-left: 10px;
    font-family: "Akrobat";
    color: rgb(204, 204, 204);
  }

  ul {
    width: 270px;
    height: 180px;
    position: relative;
    top: 18px;
    // left: 8%;
    // background-color: rgba(95, 158, 160, 0.377);
  }

  li {
    width: 225px;
    height: 35px;
    position: relative;
    margin-top: 5px;
    // background-color: chocolate;
    list-style-type: none;
    left: -33px;

    input {
      width: 15%;
      height: 60%;
      position: relative;
      float: left;
    }

    input[type="checkbox"]:checked:before {
      content: "";
      display: block;
      position: relative;
      width: 23px;
      height: 23px;
      left: 5px;
      background: url("../images/check-verde.png");
      background-color: white;
      background-size: 100% 100%;
    }

    p {
      width: 50%;
      height: 100%;
      position: relative;
      top: 18px;
      left: 25px;
      font-size: 100%;
      font-family: "Akrobat";
      color: rgb(82, 82, 82);
    }
  }
`;
export const Preco = styled.div`
  width:80px;
`;
export const InputPreco = styled.div`
  width: 275px;
  height: 34px;
  position: relative;
  float: left;
  background-color: white;
  border-radius: 3px;
  border: 0.6px solid rgb(204, 204, 204);
  cursor: pointer;
  margin-top: 20px;

  background-image: url("/images/menu/seta.png");
  background-repeat: no-repeat;
  background-position-x: 95%;
  background-position-y: 12px;
`;
export const InputPrecoTitle = styled.div`
  width: 80%;
  height: 100%;
  position: relative;
  left: 8%;
  top: 15%;
  font-size: 100%;
  font-family: "Akrobat";
  color: rgb(82, 82, 82);
  display: flex;
  justify-content: space-between;
`;
export const InputPrecoContent = styled.div`
  width: 275px;
  height: 0px;
  position: relative;
  float: left;
  background-color: white;
  left: -1px;
  border-radius: 3px;
  border-left: 0.6px solid rgb(204, 204, 204);
  border-right: 0.6px solid rgb(204, 204, 204);
  border-bottom: 0.6px solid rgb(204, 204, 204);

  p {
    width: 50%;
    height: 30px;
    position: relative;
    float: left;
    left: 10%;
    color: ${cor_base_1};
    text-decoration-line: ${cor_base_1};
  }

  label {
    position: relative;
    float: left;
  }

  input::-webkit-input-placeholder {
    padding-left: 10px;
    font-family: "Akrobat";
    color: rgb(204, 204, 204);
  }

  ul {
    width: 270px;
    height: 180px;
    position: relative;
    float: left;
    overflow-x: hidden;
    top: 18px;
  }

  li {
    width: 225px;
    height: 35px;
    position: relative;
    margin-top: 1rem;
    // background-color: chocolate;
    list-style-type: none;
    left: -15px;

    input {
      width: 15%;
      height: 60%;
      position: relative;
      float: left;
    }

    input[type="checkbox"]:checked:before {
      content: "";
      display: block;
      position: relative;
      width: 23px;
      height: 23px;
      left: 5px;
      background: url("../images/check-verde.png");
      background-color: white;
      background-size: 100% 100%;
    }

    p {
      margin-top: -1rem;
      width: 50%;
      height: 100%;
      position: relative;
      float: left;
      top: 18px;
      left: 25px;
      font-size: 100%;
      font-family: "Akrobat";
      color: rgb(82, 82, 82);
    }
  }
`;
export const InputPrecoContentDe = styled.div`
  width: 32%;
  height: 32px;
  position: relative;
  float: left;
  top: 18px;
  left: 20px;
  display: flex;
  justify-content: space-between;
  // background-color: aqua;
  label {
    width: 18px;
    font-size: 15px;
    position: relative;
    top: 5px;
    font-family: "Akrobat";
  }
  input {
    width: 62px;
    height: 32px;
    border-radius: 0px;
    left: 2%;
    position: relative;
    border: 0.6px solid rgb(204, 204, 204);
    outline: none;
  }
`;
export const InputPrecoContentAte = styled.div`
  width: 32%;
  height: 32px;
  position: relative;
  float: left;
  top: 18px;
  left: 25px;
  display: flex;
  justify-content: space-between;
  // background-color: rgb(145, 255, 0);
  label {
    width: 22px;
    font-size: 15px;
    font-family: "Akrobat";
    position: relative;
    top: 5px;
  }
  input {
    width: 62px;
    height: 32px;
    border-radius: 0px;
    left: 2%;
    position: relative;
    border: 0.6px solid rgb(204, 204, 204);
    outline: none;
  }
`;
export const InputPrecoContentBtn = styled.div`
  width: 18%;
  height: 32px;
  position: relative;
  float: left;
  top: 18px;
  left: 30px;
  // background-color: rgb(255, 0, 149);

  button {
    width: 100%;
    height: 100%;
    color: white;
    font-size: 18px;
    font-family: "Akrobat";
    border: none;
    background-color: ${cor_base_1};
  }
`;
export const InputQtd = styled.div`
  width: 275px;
  height: 34px;
  position: relative;
  float: left;
  background-color: white;
  border-radius: 3px;
  border: 0.6px solid rgb(204, 204, 204);
  cursor: pointer;
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;
export const InputQtdTitle = styled.div`
  width: 35%;
  height: 80%;
  position: relative;
  top: 3px;
  // background-color: coral;

  p {
    font-size: 100%;
    font-family: "Akrobat";
    position: relative;
    color: rgb(82, 82, 82);
    left: 22px;
    top: 2px;
  }
`;
export const InputQtdInput = styled.div`
  width: 50%;
  height: 100%;
  // background-color: cornflowerblue;

  input {
    width: 100%;
    height: 100%;
    border: none;
    background-color: white;
    outline: none;
  }
  input::-webkit-input-placeholder {
    padding-left: 10px;
    font-size: 100%;
    font-family: "Akrobat";
    color: rgb(204, 204, 204);
  }

  input:focus {
    outline: none;
  }
`;
export const InputQtdBtn = styled.div`
  width: 15%;
  height: 100%;
  // background-color: crimson;

  button {
    width: 100%;
    height: 100%;
    border: none;
    color: white;
    font-family: "Akrobat";
    background-color: ${cor_base_1};
  }
`;

export const NaoEncontrouProduto = styled.div`
  /* width:850px; */
  width:64%;
  height:362px;
  border-radius:5px;
  border: 0.3px solid #dadada;
  display:flex;
  align-items:center;
  justify-content:center;

  @media screen and (max-width:1330px){
    width:62%;
  }
  @media screen and (max-width:1250px){
    width:60%;
  }
  @media screen and (max-width:1180px){
    width:57%;
  }
  @media screen and (max-width:768px){
    width:100%;
  }
`;

export const NaoEncontrouProdutoBody = styled.div`
  width:90%;
  height:80%;
  display:flex;
  flex-direction:column;
  align-items:center;

  h1{
    height:80px;
    display:flex;
    justify-content:space-between;
    font-family:"Gisha Bold";
    img{
      height:55px;
      margin-right:15px;
    }
  }
  h2{
    height:80px;
    font-size:25px;
    display:flex;
    justify-content:space-between;
    font-family:"Gisha Bold";
  }
  p{

    font-size:18px;
    font-family:"Gisha";
    strong{
      font-family:"Gisha Bold";
    }
  }

  button{
    width:220px;
    height:60px;
    background-color: ${cor_base_2};
    border-radius:30px;
    font-size:18px;
    font-family:"Gisha Bold";
    color:white;
  }

  
  @media screen and (max-width:1180px){
    h2{
      font-size:22px;
    }
  }

  @media screen and (max-width:768px){
    
    h1{
      font-size:25px;
      img{
        height:40px;
      }
    }
    h2{
      font-size:20px;
      text-align:center;
    }
    p{
      align-items:center;
    }
  }
`;

export const GridProduts = styled(Grid)`
  width: 830px;
  max-width: 930px;
  min-height:auto;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  z-index: 997;
  grid-template-columns:repeat(auto-fill, 205px);
  
  /* background-color: aquamarine; */
  
  @media screen and (max-width: 1366px){
    z-index: 997;
    width: 830px;
    max-width: 930px;
    min-height:auto;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    grid-template-columns: repeat(auto-fill, 205px);
  }
  @media screen and (max-width: 1250px){
      width: 50%;
      grid-template-columns: repeat(auto-fill, 200px);
    }
    @media screen and (max-width: 768px) {
    grid-template-columns:${(props) => (props.isUltraRapido ? 'repeat(auto-fill, 200px)': 'repeat(auto-fill, 200px)')};
    width:${(props) => (props.isUltraRapido ? '400px': '400px')};
    min-height: 1200px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    float: none;
    justify-content: none;
    z-index: revert;
    top: none;
    left: none;
  }

  
`;
export const GridProdutsLoading = styled.div`
  width: 100%;
  height: 20%;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  display:flex;
  justify-content:center;
  margin-top: 20%;
  @media screen and (max-width: 768px) {
    width:100%;
    height: 50%;
    position: absolute;
    margin-top: 20%;
    left: 0rem;
    
    img{
      width: 100px;
      height: 100px;
    }
  }
`;
export const GridProdutsProduto = styled.div`
  width: 200px;
  height: 550px;
  position: relative;
  float: right;
  text-align: center;
  font-family: "Akrobat";
  font-size: 120%;
  display: block;
  // background-color: cadetblue;
  @media screen and (max-width: 768px) {
    width: 180px;
    height: 550px;
    position: relative;
    float: left;
    text-align: center;
    font-family: "Akrobat";
    font-size: 120%;
    display: block;
    margin-right: auto; 
    margin-left: auto; 
  }
  @media screen and (max-width: 1685px) {
    margin-left: 5px;
  }
  @media screen and (max-width: 1440px) {
    margin-left: 5px;
  }
  @media screen and (max-width: 1300px) {
    margin-left: 5px;
  }
`;
export const GridProdutsProdutoTitle = styled.div`
  font-size: 17px;
  height: 60px;
  // font-family: 'Akrobat';
  font-family: "Gisha Bold";
  // white-space: nowrap;
  text-align: center;

  strong {
    width: 200px;
    height: 45px;
    font-weight: bolder;
    position: relative;
  }

  h1 {
    font-size: 15px;
    height: 20px;
    line-height: 100%;
    font-family: "Gisha Bold";
  }
  p {
    font-size: 16px;
    position: relative;
    font-weight: 100;
    font-family: "Gisha";
  }
  @media screen and (max-width: 768px) {
    font-size: 17px;
    height: 60px;
    // font-family: 'Akrobat';
    font-family: "Gisha bold";
    // white-space: nowrap;
    text-align: center;

    strong {
      width: 200px;
      height: 45px;
      font-weight: bolder;
      position: relative;
    }

    h1 {
      font-size: 15px;
      height: 20px;
      line-height: 100%;
      font-family: "Gisha bold";
    }
    p {
      font-size: 16px;
      position: relative;
      font-weight: 100;
      font-family: "Gisha";
    }
  }
`;
export const GridProdutsProdutoCardProdCustom = styled.div`
  width: 100%;
  height: 441px;
  position: relative;
  border: 0.6px solid #eeeeee;
  // background-color: rgb(23, 223, 100);
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 441px;
    position: relative;
    border: 0.6px solid #eeeeee;
    // background-color: rgb(23, 223, 100);
  }
`;
export const GridProdutsProdutoCardProdCustomImgProd = styled.img`
  width: 100%;
  height: 247px;
  position: relative;
  float: left;
  display: block;
  object-fit: scale-down;
  border: 0.6px solid #eeeeee;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: scale-down;
    border: 1px solid #eeeeee;
  }
  &:hover {
    transition: 0.3s;
    opacity: 0.8;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 247px;
    position: relative;
    float: left;
    display: block;
    object-fit: scale-down;
    border: 0.6px solid #eeeeee;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: scale-down;
      border: 1px solid #eeeeee;
    }
    &:hover {
      transition: 0.3s;
      opacity: 0.8;
    }
  }
`;
export const GridProdutsProdutoCardProdCustomSeloEmbalagem = styled.div`
  width: 196px;
  height: 68px;
  position: absolute;
  top: 190px;
  left: -15px;
  background-image: url("/images/menu/EMBALAGEM-ESPECIAL.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  // background-color: burlywood;
  @media screen and (max-width: 768px) {
    width: 196px;
    height: 68px;
    position: absolute;
    top: 190px;
    left: -15px;
    background-image: url("/images/menu/EMBALAGEM-ESPECIAL.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    // background-color: burlywood;
  }
`;
export const GridProdutsProdutoCardProdCustomSelo = styled.div`
  width: 95px;
  height: 21px;
  position: absolute;
  top: 1px;
  left: 103px;
  // background-image: url("/images/menu/ultrarapido.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  // background-color: burlywood;
  @media screen and (max-width: 768px) {
    width: 95px;
    height: 21px;
    position: absolute;
    top: 1px;
    left: 103px;
    // background-image: url("/images/menu/ultrarapido.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    // background-color: burlywood;
  }
`;
export const GridProdutsProdutoCardProdCustomDesc = styled.div`
  width: 100%;
  height: 50px;
  display: block;
  position: relative;
  float: left;
  // background-color: #f05423;
  /* margin-bottom: 1.3rem; */
  p {
    width: 175px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
    line-height: 150%;
    font-size: 11px;
    font-family: "Gisha";
    top: 12px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 50px;
    display: block;
    position: relative;
    float: left;
    // background-color: #f05423;

    p {
      width: 175px;
      position: relative;
      margin-left: auto;
      margin-right: auto;
      text-align: left;
      line-height: 150%;
      font-size: 11px;
      font-family: "Gisha";
      top: 12px;
    }
  }
`;
export const GridProdutsProdutoCardProdCustomQuantidade = styled.div`
  width: 100%;
  height: 18px;
  display: block;
  position: relative;
  float: left;
  margin-top: 3px;
  // background-color: #f05423;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 18px;
    display: block;
    position: relative;
    float: left;
    margin-top: 3px;
    // background-color: #f05423;
  }
`;
export const GridProdutsProdutoCardProdCustomQuantidadeTitle = styled.div`
  width: 100%;
  height: 18px;
  letter-spacing: 0.03rem;
  position: relative;
  // background-color: aqua;

  p {
    width: 174px;
    height: 100%;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    font-size: 12.5px;
    letter-spacing: 0.03rem;
    font-family: "Akrobat";
    text-align: left;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 18px;
    letter-spacing: 0.03rem;
    position: relative;
    // background-color: aqua;

    p {
      width: 174px;
      height: 100%;
      position: relative;
      margin-left: auto;
      margin-right: auto;
      font-size: 12.5px;
      letter-spacing: 0.03rem;
      font-family: "Akrobat";
      text-align: left;
    }
  }
`;
export const GridProdutsProdutoCardProdCustomCores = styled.div`
  width: 100%;
  height: 19px;
  display: block;
  position: relative;
  float: left;
  margin-top: 3px;
  // background-color: #f05423;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 19px;
    display: block;
    position: relative;
    float: left;
    margin-top: 3px;
    // background-color: #f05423;
  }
`;
export const GridProdutsProdutoCardProdCustomCoresTitle = styled.div`
  width: 20%;
  height: 18px;
  position: relative;
  float: left;
  left: 12px;
  letter-spacing: 0.03rem;
  // background-color: aqua;

  p {
    width: 174px;
    height: 100%;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    font-size: 12.5px;
    letter-spacing: 0.03rem;
    font-family: "Akrobat";
    text-align: left;
  }
  @media screen and (max-width: 768px) {
    width: 20%;
    height: 18px;
    position: relative;
    float: left;
    left: 3px;
    letter-spacing: 0.03rem;
    // background-color: aqua;

    p {
      width: 174px;
      height: 100%;
      position: relative;
      margin-left: auto;
      margin-right: auto;
      font-size: 12.5px;
      letter-spacing: 0.03rem;
      font-family: "Akrobat";
      text-align: left;
    }
  }
`;
export const GridProdutsProdutoCardProdCustomCoresGridCores = styled.div`
  width: 147px;
  height: 80px;
  position: relative;
  float: left;
  top: -2px;
  @media screen and (max-width: 768px) {
    width: 110px;
    height: 80px;
    position: relative;
    float: left;
    margin-left:0px;
    top: -2px;
  }
`;
export const GridProdutsProdutoCardProdCustomCoresGridCoresContent = styled.div`
  width: 100%;
  height: 14px;
  margin-top: 5px;
  position: relative;
  left: 0px;
  // background-color: rgba(165, 42, 42, 0.349);
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 14px;
    margin-top: 5px;
    position: relative;
    left: 0px;
    // background-color: rgba(165, 42, 42, 0.349);
  }
`;
export const GridProdutsProdutoCardProdCustomCoresGridCoresContentCor = styled.div`
  width: 14px;
  height: 14px;
  position: relative;
  float: left;
  margin-left: 5px;
  border-radius: 14px;

  .tooltip-inner {
    background-color: #00acd6 !important;
    /*!important is not necessary if you place custom.css at the end of your css calls. For the purpose of this demo, it seems to be required in SO snippet*/
    color: #fff;
  }
  @media screen and (max-width: 768px) {
    width: 14px;
    height: 14px;
    position: relative;
    float: left;
    margin-left: 5px;
    border-radius: 14px;

    .tooltip-inner {
      background-color: #00acd6 !important;
      /*!important is not necessary if you place custom.css at the end of your css calls. For the purpose of this demo, it seems to be required in SO snippet*/
      color: #fff;
    }
  }
`;
export const GridProdutsProdutoCardProdCustomCoresGridCoresContentAviso = styled.div`
  width: 35px;
  height: 15px;
  position: relative;
  float: left;
  margin-left: 2px;

  p {
    font-size: 15px;
    font-family: "Akrobat";
    position: relative;
    top: -5px;
  }
  @media screen and (max-width: 768px) {
    width: 35px;
    height: 15px;
    position: relative;
    float: left;
    margin-left: 2px;

    p {
      font-size: 15px;
      font-family: "Akrobat";
      position: relative;
      top: -5px;
    }
  }
`;
export const GridProdutsProdutoCardProdCustomValor = styled.div`
  width: 40%;
  height: 48px;
  display: block;
  position: absolute;
  float: right;
  top: 385px;
  left: 110px;
  // background-color: burlywood;
  @media screen and (max-width: 768px) {
    width: 40%;
    height: 48px;
    display: block;
    position: absolute;
    float: right;
    top: 385px;
    left: 103px;
    // background-color: burlywood;
  }
`;
export const GridProdutsProdutoCardProdCustomValorContent = styled.div`
  width: 90px;
  height: 100%;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  p {
    height: 18px;
    line-height: 130%;
    font-size: 11px;
    font-family: "Gisha";
    text-align: left;
  }

  strong {
    font-size: 18px;
    // font-weight: 400;
    letter-spacing: -0.02rem;
    font-family: "Gisha Bold";
    position: relative;
    text-align: left;
    top: 2px;
    margin-left: -0.5rem;
  }
  @media screen and (max-width: 768px) {
    width: 90px;
    height: 100%;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    p {
      height: 18px;
      line-height: 130%;
      font-size: 11px;
      font-family: "Gisha";
      text-align: left;
    }

    strong {
      font-size: 18px;
      // font-weight: 400;
      letter-spacing: -0.02rem;
      font-family: "Gisha bold";
      position: relative;
      text-align: left;
      top: 2px;
    }
  }
`;
export const GridProdutsProdutoBtnConferirIndisponivel = styled.div`
  width: 100%;
  height: 50px;
  position: relative;
  // background-color: rgb(255, 94, 0);

  button {
    width: 100%;
    height: 27px;
    position: relative;
    top: 10px;
    border: none;
    border-radius: 2px;
    letter-spacing: 0.05rem;
    background-color: #dfdfdf;
    font-size: 16px;
    font-family: "Akrobat";
    color: #4d4d4d;
    font-weight: 400px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 70px;
    position: relative;
    top: -50px;
    // background-color: rgb(255, 94, 0);

    button {
      width: 100%;
      height: 47px;
      position: relative;
      top: 52px;
      border: none;
      border-radius: 2px;
      letter-spacing: 0.05rem;
      background-color: #dfdfdf;
      font-size: 16px;
      font-family: "Akrobat";
      color: #4d4d4d;
      font-weight: 400px;
    }
  }
`;
export const GridProdutsProdutoBtnConferir = styled.div`
  width: 100%;
  height: 50px;
  position: relative;
  // background-color: rgb(255, 94, 0);

  button {
    width: 100%;
    height: 27px;
    position: relative;
    top: 10px;
    border: none;
    border-radius: 2px;
    letter-spacing: 0.05rem;
    background-color: ${cor_base_1};
    font-size: 16px;
    font-family: "Akrobat";
    color: white;
    font-weight: 400px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 70px;
    position: relative;
    top: -50px;
    // background-color: rgb(255, 94, 0);

    button {
      width: 100%;
      height: 47px;
      position: relative;
      top: 52px;
      border: none;
      border-radius: 2px;
      letter-spacing: 0.05rem;
      background-color: ${cor_base_1};
      font-size: 18px;
      font-family: "Akrobat";
      color: white;
      font-weight: 400px;
    }
  }
`;
export const CardProd = styled.div`
  width: 100%;
  height: 417px;
  position: relative;
  border: 0.6px solid #eeeeee;
  // background-color: rgb(23, 223, 100);
`;
export const CardProdImgProd = styled.img`
  width: 100%;
  height: 247px;
  position: relative;
  float: left;
  display: block;
  object-fit: scale-down;
  border: 0.6px solid #eeeeee;
  cursor: pointer;
  &:hover {
    transition: 0.3s;
    opacity: 0.8;
  }
  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: scale-down;
    border: 1px solid #eeeeee;
  }
`;
export const CardProdSeloEmbalagem = styled.div`
  width: 196px;
  height: 68px;
  position: absolute;
  top: 190px;
  left: -15px;
  background-image: url("/images/menu/EMBALAGEM-ESPECIAL.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  // background-color: burlywood;
`;
export const CardProdDesc = styled.div`
  width: 100%;
  height: 50px;
  display: block;
  position: relative;
  float: left;
  // background-color: #f05423;

  p {
    width: 175px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
    line-height: 150%;
    font-size: 11px;
    font-family: "Gisha";
    top: 12px;
  }
`;
export const CardProdDescCores = styled.div`
  width: 100%;
  height: 68px;
  display: block;
  position: relative;
  float: left;
  // background-color: #f05423;
`;
export const CardProdDescCoresTitle = styled.div`
  width: 100%;
  height: 18px;
  position: relative;
  // background-color: aqua;

  p {
    width: 174px;
    height: 100%;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    font-size: 12.5px;
    font-family: "Akrobat";
    text-align: left;
  }
`;
export const CardProdDescCoresGridCores = styled.div`
  width: 100%;
  height: 50px;
  position: relative;
  float: left;
  // background-color: rgb(238, 144, 30);
`;
export const CardProdDescCoresGridCoresContent = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  left: 10px;
  z-index: 999;
  // background-color: rgba(165, 42, 42, 0.349);
`;
export const CardProdDescCoresGridCoresContentCor = styled.div`
  width: 14px;
  height: 14px;
  position: relative;
  float: left;
  margin-left: 6px;
  margin-top: 6px;
  border-radius: 14px;

  .tooltip-inner {
    background-color: #00acd6 !important;
    /*!important is not necessary if you place custom.css at the end of your css calls. For the purpose of this demo, it seems to be required in SO snippet*/
    color: #fff;
  }
`;
export const CardProdValor = styled.div`
  width: 100%;
  height: 48px;
  display: block;
  position: relative;
  float: left;
  margin-left: auto;
  margin-right: auto;
  top: -2px;
  // background-color: burlywood;
`;
export const CardProdValorContent = styled.div`
  width: 170px;
  height: 100%;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  p {
    height: 8px;
    line-height: 130%;
    font-size: 11px;
    font-family: "Gisha";
    text-align: right;
  }

  strong {
    font-size: 18px;
    letter-spacing: -0.02rem;
    font-family: "Gisha Bold";
  }
`;
