import styled, { keyframes } from "styled-components"

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #f5f5f5;
`

export const LoginContainer = styled.div`
  width: 100%;
  max-width: 600px;
  height: 800px;
  display: grid;
  grid-template-columns: 1fr;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    height: 100%;
    box-shadow: none;
  }
`

export const ImageSlider = styled.div`
  width: 100%;
  object-fit: cover;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const ImageContent = styled.div`
  width: 100%;
  padding-block: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ background }) => background || "#e2001b"};
`

export const HeroSection = styled.div`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;

  position: relative;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const LoginSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #fff;
`

export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    width: 100%;
    max-width: 200px !important;
  }
`

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;

  h1 {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 1rem;
    color: #1f1f1f;
  }
`

export const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #1f1f1f;
  gap: 1rem;
`

export const InputGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  border: 1px solid #1f1f1f;
  border-left: 4px solid #1f1f1f;
  border-radius: 4px;
  padding: 0 1rem;
  color: #1f1f1f;
  transition: all 0.2s ease-in-out;
  height: 40px;

  svg {
    font-size: 1.5rem;
    color: #1f1f1f;
    transition: all 0.2s ease-in-out;

    cursor: pointer;
  }

  &:focus-within {
    border: 1px solid #e2001b;

    svg {
      color: #e2001b;
    }
  }
`

export const FormInput = styled.input`
  width: 100%;
  color: #fff;
  background-color: transparent;
  font-size: 1rem;
  font-weight: 500;
  outline: none;
`

export const FormButton = styled.button`
  width: 100%;
  height: 40px;
  border: 1px solid #e2001b;
  border-radius: 4px;
  padding: 0 1rem;
  color: #fff;
  background-color: #e2001b;
  font-size: 1rem;
  font-weight: 500;
  outline: none;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    color: #e2001b;
  }

  &:disabled {
    background-color: #e2001b;
    filter: brightness(0.5);
    color: #fff;
    cursor: not-allowed;
  }
`

export const FormTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
`

export const FormLink = styled.a`
  color: #1f1f1f;
  font-size: 0.8rem;
  font-weight: 500;
  text-decoration: none;
  align-self: flex-start;

  &:hover {
    text-decoration: underline;
  }
`

export const FormError = styled.p`
  margin: 0;
  color: #e2001b;
  font-size: 0.8rem;
  font-weight: 500;
  align-self: flex-start;
`
