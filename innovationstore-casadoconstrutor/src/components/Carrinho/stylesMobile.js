import styled from "styled-components";
import { cor_base_1, cor_base_2 } from "../../services/cores";

export const GridFreteMobile = styled.div`
  width: 370px;
  height: auto;
  position: relative;
  top: 0%;
  margin-left: auto;
  margin-right: auto;
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
  // background-color: $cor_base_2;
`;
export const GridFreteTableMobile = styled.div`
  width: auto;
  height: 450px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 20px;
  // background-color: #ffffff;
`;
export const GridFreteTableColMobile = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  float: left;
  margin-left: 1%;
  // background-color: #F8AC00;
`;
export const GridFreteTableColBlocoMobile = styled.div`
  width: 100%;
  height: 75px;
  margin-top: 0px;
  // background-color: aqua;
  img {
    width: 100%;
    display: block;
    object-fit: scale-down;
  }

  h1 {
    font-size: 15px;
    margin-left: 10px;
    font-family: "Akrobat SemiBold";
    color: rgb(82, 82, 82);
  }

  p {
    padding-top: 10px;
    font-size: 16px;
    font-family: "Akrobat";
    position: relative;
    margin-left: 10px;
    color: rgb(82, 82, 82);
  }
`;
export const GridFreteTableColBlocoOptionMobile = styled.div`
  width: 100%;
  height: 60px;
  margin-top: 10px;
  // background-color: aqua;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    position: relative;
    top: -20px;
    display: block;
    object-fit: scale-down;
  }

  h1 {
    height: 50%;
    font-size: 15px;
    font-family: "Akrobat SemiBold";
    position: relative;
    line-height: 90%;
    top: 5%;
    color: rgb(82, 82, 82);
  }

  p {
    height: 40%;
    font-size: 13px;
    font-family: "Akrobat";
    position: relative;
    color: rgb(82, 82, 82);
  }
  input {
    width: 40px;
    height: 50%;
    position: relative;
    top: 22%;
    left: 0;
  }

  input[type="radio"]:checked:before {
    content: "";
    display: block;
    position: relative;
    width: 30px;
    height: 100%;
    left: 5px;
    border-radius: 15px;
    background: url("../../images/ok.png");
    background-color: white;
    background-size: 100% 100%;
  }
`;
export const GridFreteTableColBlocoOptionValueMobile = styled.div`
  width: 100%;
  height: 60px;
  margin-top: 10px;
  // background-color: aqua;

  img {
    width: 100%;
    position: relative;
    top: -20px;
    display: block;
    object-fit: scale-down;
  }

  h1 {
    height: 50%;
    font-size: 15px;
    font-family: "Akrobat SemiBold";
    position: relative;
    margin-left: 10px;
    margin-left: 10px;
    line-height: 90%;
    top: 5%;
    color: rgb(82, 82, 82);
  }

  p {
    height: 40%;
    font-size: 17px;
    font-family: "Akrobat";
    position: relative;
    margin-left: 10px;
    top: -5px;
    color: rgb(82, 82, 82);
  }
`;
export const GridFreteTableColBlocoSeloClienteRetiraMobile = styled.div`
  width: 100%;
  height: 5vw;
  background-color: ${cor_base_1};
  font-size: 14px;
  border-radius: 3px;
  font-family: "Akrobat SemiBold";
  letter-spacing: 0.03rem;
  color: white;
  text-align: center;
`;
export const GridFreteTableColBlocoSeloNossoCarroMobile = styled.div`
  width: 100%;
  height: 5vw;
  background-color: ${cor_base_2};
  font-size: 14px;
  border-radius: 3px;
  font-family: "Akrobat SemiBold";
  letter-spacing: 0.03rem;
  color: white;
  text-align: center;
`;
export const ContentHeaderMobile = styled.div`
  width: 100%;
  height: 42%;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  top: 20px;
  display: flex;
  justify-content: center;
  // background-color: darkgoldenrod;
`;
export const ContentHeaderTextMobile = styled.div`
  width: 80%;
  height: 100%;
  position: relative;

  h1 {
    // font-size: 25px;
    font-size: 160%;
    font-family: "Gisha";
    letter-spacing: 0.02rem;
    color: #606060;
    strong {
      font-family: "Gisha Bold";
      // font-size: 17px;
      font-size: 110%;
      color: ${cor_base_2};
    }
  }

  p {
    font-size: 100%;
    display: block;
    font-family: "Gisha";
    letter-spacing: 0.02rem;
    top: -10px;
    color: #606060;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
export const ContentHeaderImgMobile = styled.div`
  width: 20%;
  height: 100%;
  position: relative;
  img {
    width: 120px;
    position: relative;
    left: -5px;
  }
`;
