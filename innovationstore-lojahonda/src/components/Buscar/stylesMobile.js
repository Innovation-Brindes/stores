import { IconButton } from "@chakra-ui/react";
import styled from "styled-components";
import { cor_base_1 } from "../../services/cores";

export const OrderMobile = styled.div`
  width: 180px;
  height: 30px;
  position: relative;
  // background-color: darkblue;
  border-right: 1px solid rgb(238, 238, 238);
  button {
    width: 150px;
    height: 40px;
    border: none;
    position: relative;
    top: -7px;
    background-color: transparent;
    font-family: "Gisha";
    font-weight: 600;
    letter-spacing: 0.06rem;
    color: ${cor_base_1};
    i {
      position: relative;
      top: 6px;
      margin-right: 10px;
    }
  }
`;
export const ContainerControlFiltroMobile = styled.div`
  display: none;
  width: 100%;
  height: 60px;
  position: relative;
  top: 10px;
  @media screen and (max-width: 768px){
    display:block;
  }
`;
export const ContainerControlFiltroContentMobile = styled.div`
  width: 97%;
  height: 45px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  // background-color: cyan;
  display: flex;
  justify-content: center;
  box-shadow: 0 1px 0 0 rgb(238, 238, 238);
`;
export const ContainerControlFiltroContentFiltroMobile = styled.div`
  width: 180px;
  height: 45px;
  position: relative;
  // background-color: rgb(139, 51, 0);
  // border-bottom: 1px solid rgb(238, 238, 238);
  button {
    width: 150px;
    height: 40px;
    border: none;
    position: relative;
    top: -7px;
    background-color: transparent;
    font-family: "Gisha";
    font-weight: 600;
    letter-spacing: 0.06rem;
    color: ${cor_base_1};
    i {
      position: relative;
      top: 6px;
      margin-right: 10px;
    }
  }
`;
export const ControlFiltroMobile = styled.div`
  width: 180px;
  height: 45px;
  position: relative;
  // background-color: rgb(139, 51, 0);
  // border-bottom: 1px solid rgb(238, 238, 238);
  button {
    width: 150px;
    height: 40px;
    border: none;
    position: relative;
    top: -7px;
    background-color: transparent;
    font-family: "Gisha";
    font-weight: 600;
    letter-spacing: 0.06rem;
    color: ${cor_base_1};
    i {
      position: relative;
      top: 6px;
      margin-right: 10px;
    }
  }
`;
export const ContentFiltroMobile = styled.div`
  width: 100%;
  height: 0px;
  min-height: 1800px;
  position: absolute;
  display: block;
  top: 0px;
  background-color: rgb(255, 255, 255);
  z-index: 99999;
`;
export const ContentFiltroVoltarMobile = styled.div`
  width: 90%;
  height: 80px;
  position: relative;
  float: left;
  z-index: 9999999;
  /* background-color: violet; */
  box-shadow: 0 1px 0 0 rgb(238, 238, 238);
`;
export const ContentFiltroVoltarBtnMobile = styled(IconButton)`
  width: 20px;
  height: 60px;
  position: relative;
  top: 20px;
  box-shadow: none !important;
  background-color: white;
  // background-color: yellow;
  &:hover{
    background-color: white;
  }
`;
export const ContentFiltroContentMobile = styled.div`
  width: 70%;
  height: 80vh;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  z-index: 997;
`;
export const ContentFiltroContentFiltroPorMobile = styled.div`
  width: 275px;
  position: relative;
  float: left;
`;
export const ContentFiltroContentFiltroPorTitleMobile = styled.div`
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
export const ContentFiltroContentDetalhesCoresMobile = styled.div`
  width: 300px;
  height: 180px;
  // background-color: burlywood;
`;
export const ContentFiltroContentDetalhesCoresContentMobile = styled.div`
  width: 100%;
  height: 72px;
  // background-color: cadetblue;
`;
export const ContentFiltroContentDetalhesCoresContentTitleMobile = styled.div`
  width: 90%;
  height: 25px;
  font-size: 14px;
  position: relative;
  float: left;
  font-family: "Akrobat";
  // background-color: cornflowerblue;
`;
export const ContentFiltroContentDetalhesCoresContentGridCoresMobile = styled.div`
  width: 100%;
  height: 72px;
  position: relative;
  float: left;
  // background-color: crimson;
`;
export const ContentFiltroContentDetalhesCoresContentGridCoresCorMobile = styled.div`
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
export const ContentFiltroContentDetalhesCoresContentGridCoresCorCircleOutMobile = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 35px;
  // border: 2px solid #8EC505;
  border: 2px solid #f1f1f1;
  cursor: pointer;
`;
export const ContentFiltroContentDetalhesCoresContentGridCoresCorCircleInMobile = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 15px;
  // background-color: #33629E;
  position: relative;
  left: 5px;
  top: 4.8px;
  cursor: pointer;
`;
export const ContentFiltroContentDetalhesCoresContentVerMaisMobile = styled.div`
  width: 100%;
  height: 30px;
  position: relative;
  float: left;
  // background-color: aqua;
`;
export const ContentFiltroContentDetalhesCoresContentVerMaisTextoMobile = styled.div`
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
export const ContentFiltroContentDetalhesCoresContentVerMaisLinhaMobile = styled.div`
  width: 62%;
  height: 1px;
  position: relative;
  float: left;
  top: 14px;
  background-color: rgb(173, 173, 173);
`;
export const ContentFiltroContentInputCategoriaMobile = styled.div`
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
export const ContentFiltroContentInputCategoriaTitleMobile = styled.div`
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
export const ContentFiltroContentInputCategoriaTitleSelecionadosMobile = styled.div`
  width: 150px;
  margin-top: 1rem;
  p {
    width: 150px;
    text-align: right;
    margin-top: -1rem;
  }
`;
export const ContentFiltroContentInputCategoriaContentMobile = styled.div`
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
export const ContentFiltroContentInputSubCategoriaMobile = styled.div`
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
export const ContentFiltroContentInputSubCategoriaTitleMobile = styled.div`
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
export const ContentFiltroContentInputSubCategoriaTitleSelecionadosMobile = styled.div`
  width: 120px;
  margin-top: 1rem;
  p {
    margin-top: -1rem;
    width: 120px;
    text-align: right;
  }
`;
export const ContentFiltroContentInputSubCategoriaTitleSelecionadosContentMobile = styled.div`
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
export const ContentFiltroContentInputPrazoMobile = styled.div`
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
export const ContentFiltroContentInputPrazoTitleMobile = styled.div`
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
export const ContentFiltroContentInputPrazoContentMobile = styled.div`
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
export const ContentFiltroContentInputPrecoMobile = styled.div`
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
export const ContentFiltroContentInputPrecoTitleMobile = styled.div`
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
export const ContentFiltroContentInputPrecoContentMobile = styled.div`
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
  .de {
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
  }
  .ate {
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
  }

  .btn {
    width: 18%;
  height: 37px;
  position: relative;
  float: left;
  top: 17px;
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
export const ContentFiltroContentInputQuantidadeMobile = styled.div`
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
export const ContentFiltroContentInputQuantidadeTitleMobile = styled.div`
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
export const ContentFiltroContentInputQuantidadeInputMobile = styled.div`
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
export const ContentFiltroContentInputQuantidadeButtonMobile = styled.div`
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
