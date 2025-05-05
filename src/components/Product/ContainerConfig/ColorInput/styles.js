import styled from "styled-components"

export const ColorInputComponent = styled.div`
  background-color: #fff;
  border-radius: 50%;
  width: 25px;
  height: 25px;

  border: 1px solid ${(props) => (props.selectedColor ? "#95c620" : "#cfcfcf")};

  position: relative;

  display: grid;
  place-items: center;

  transition: all 0.2s ease-in-out;

  cursor: pointer;

  //disabled stock

  ${(props) =>
    props.disabled &&
    `
    opacity: 0.5;
    cursor: not-allowed;
    position: relative;

  `}

  &::after {
    content: "";
    position: absolute;

    width: 17px;
    height: 17px;
    border-radius: 50%;
    background-color: ${(props) => props.backgroundColor};
  }

  &::before {
    content: "";
    position: absolute;
    display: ${(props) => (props.disabled ? "block" : "none")};

    width: 5px;
    height: 100%;
    background-color: red;
    z-index: 1;

    transform: rotate(45deg);
  }
`
