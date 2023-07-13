import styled from "styled-components";

export const Radio = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: ${({ checked }) =>
    checked ? "1px solid #ff4f00" : "1px solid #cecece"};
  margin-right: 10px;
  cursor: pointer;
  position: relative;

  input {
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  &:after {
    content: "";
    display: ${({ checked }) => (checked ? "block" : "none")};
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #ff4f00;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
