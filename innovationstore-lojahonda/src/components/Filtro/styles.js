import styled from "styled-components"

export const Container = styled.div`
  font-family: "Open Sans", sans-serif;

  display: flex;
  flex-direction: column;
  padding: 10px;
  max-width: 440px;
  width: 100%;

  border: 1px solid #d4d4d4;
  border-radius: 5px;

  gap: 10px;

  position: sticky;
  top: 10px;
  float: left;

  @media (max-width: 768px) {
    z-index: 99;
    top: 0;
    //blur background
    backdrop-filter: blur(50px);
    background-color: rgba(255, 255, 255, 0.5);
    border: none;
  }
`

export const FilterTitleContent = styled.div`
  display: flex;
  flex-direction: column;

  h1,
  h2 {
    margin: 0;
  }

  .title {
    font-size: 60px;
    color: #cc0000;
    font-weight: bold;
  }

  h2 {
    font-size: 25px;
    color: #494949;
    font-weight: bold;

    span {
      color: #cc0000;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 40px;
    }

    h2 {
      font-size: 20px;
    }
  }
`

export const Content = styled.div`
  padding-inline: 20px;
  padding-block: 10px;
  border: 1px solid #d4d4d4;
  border-radius: 5px;

  .prices {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    @media (max-width: 768px) {
      font-size: 13px;
    }
  }

  @media (max-width: 768px) {
    display: ${(props) => (props.show ? "block" : "none")};
  }
`

export const ButtonFilter = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: block;
    background-color: #cc0000;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    width: 100%;
    margin-top: 10px;
  }
`

export const ColorInputContent = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  flex-wrap: wrap;

  .colors {
    display: flex;
    gap: 5px;
    flex-wrap: wrap;
    position: relative;

    &::before {
      content: "";
      width: 1px;
      height: 100%;
      background-color: #d4d4d4;
      position: absolute;
      left: 0;
      top: 0;
      margin-right: -8px;
      margin-left: -8px;
    }

    @media (max-width: 768px) {
      font-size: 13px;
    }
  }
`

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;

  flex-direction: ${(props) => (props.column ? "column" : "row")};

  label {
    align-self: center;

    @media (max-width: 768px) {
      font-size: 13px;
    }
  }
`

export const ColorInput = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  border: 1px solid;
  border-color: #d4d4d4;
  position: relative;

  //quando estiver selecionada coloque um check dentro da cor
  ${(props) =>
    props.selected &&
    `
    &:after {
      content: "✓";
      color: #fff;
      font-size: 13px;
      font-weight: bold;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  `}

  &:hover {
    cursor: pointer;
  }
`

export const PrazoProducaoContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;

  align-self: center;

  .prazoItem {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;

    .days {
      font-size: 14px;
      font-weight: 600;
      padding: 2px 3px;
      border-radius: 5px;

      @media (max-width: 768px) {
        font-size: 13px;
      }
    }

    .days.selected {
      color: rgb(55, 98, 19);
      background-color: #e6f5e0;
      font-weight: bold;
    }

    .name-data {
      font-size: 10px;

      @media (max-width: 768px) {
        font-size: 9px;
      }
    }

    //só coloca o after se não tiver a classe last
    &:not(.last):after {
      content: "";
      width: 1px;
      height: 100%;
      background-color: #d4d4d4;
      position: absolute;
      right: 0;
      top: 0;
      margin-right: -8px;
    }
  }
`

export const QuantityContent = styled.form`
  display: flex;
  align-items: center;
  gap: 15px;

  input {
    outline: none;
    height: 100%;
    width: 100%;
    background-color: transparent;
  }
`

export const LabelQuantity = styled.div`
  position: relative;

  &::after {
    content: "";
    width: 1px;
    height: 100%;
    background-color: #d4d4d4;
    position: absolute;
    right: 0;
    top: 0;
    margin-right: -8px;
  }
`

export const LabelCores = styled.div`
  position: relative;
  padding-right: 10px;
`

export const LabelFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 14px;

  @media (max-width: 768px) {
    display: none;
  }
`

export const ButtonAtualizar = styled.button`
  background-color: #cc0000;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 4px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  max-width: 100px;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`
