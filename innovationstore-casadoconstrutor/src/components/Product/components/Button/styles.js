import styled from "styled-components"

export const Button = styled.button`
  width: 100%;
  flex: 1;
  border-radius: 23px;
  font-size: ${(props) => (props.textSize ? props.textSize : "20px")};
  text-transform: uppercase;
  background: ${({ background }) => background};
  color: ${({ color }) => color};
  border: 1px solid ${({ border }) => border};
  padding-block: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: filter 0.2s;

  position: relative;

  div {
    position: absolute;
    top: 50%;
    right: 2rem;
    transform: translateY(-50%);
  }

  //hover not disabled
  &:not(:disabled):hover {
    filter: brightness(0.9);
  }

  &:disabled {
    background: #ccc;
    border-color: #ccc;
    cursor: not-allowed;
  }
`
