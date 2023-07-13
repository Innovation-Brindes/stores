import styled, { keyframes } from "styled-components"

const show = keyframes`
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`

export const Container = styled.div`
  --webkit-font-smoothing: antialiased;

  font-family: "Open Sans", sans-serif;

  display: flex;
  opacity: ${(props) => (props.showCookie ? 1 : 0)};
  transform: ${(props) => (props.showCookie ? "translateY(0px)" : "translateY(100px)")};
  transition: 0.5s;
  width: 400px;
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  z-index: 9999999;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
  overflow: hidden;
  color: #333;

  //animation container
  animation: ${show} 0.5s ease-in-out;

  @media (max-width: 768px) {
    left: 0;
  }
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 1rem;
  background-color: #e7f3ca;
  width: 100%;
  gap: 10px;
`

export const Content = styled.div`
  padding: 10px;

  h1 {
    font-size: 0.9rem;
  }

  span {
    color: #72a904;
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;

    &:hover {
      filter: brightness(0.9);
    }
  }
`

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem 1rem 1rem;
  width: 100%;
  gap: 10px;
`

export const Button = styled.button`
  background-color: #7fbc04;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: 0.3s;
  justify-self: center;
  margin: 0 auto;
  font-weight: bold;

  &:hover {
    filter: brightness(0.9);
  }
`
