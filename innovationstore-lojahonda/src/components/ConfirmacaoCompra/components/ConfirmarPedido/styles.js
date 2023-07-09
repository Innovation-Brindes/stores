import styled from "styled-components";

export const Button = styled.button`
  width: ${(props) => props.width || "100%"};
  height: 50px;
  background-color: #58bc03;
  color: ${(props) => props.color || "#fff"};
  border: 1px solid transparent;
  font-weight: 600;

  transition: 0.2s;

  &:disabled {
    background-color: #cecece;
    opacity: 0.5;
  }

  &:hover:not(:disabled) {
    background-color: #fff;
    color: #58bc03;
    border: 1px solid #58bc03;
  }

  @media (max-width: 768px) {
    font-weight: bold;
    text-transform: uppercase;
    font-size: 1.3rem;
  }
`;
