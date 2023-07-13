import styled from "styled-components"

export const HeaderImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  margin-bottom: 21px;
  color: #000000;
  letter-spacing: 0.1px;

  span {
    font-size: 13px;

    span {
      font-weight: 700;
      color: #414042;
    }
  }
`

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  overflow: hidden;
`
export const ImageContent = styled.div`
  max-width: 427px;
  max-height: 322px;
  cursor: pointer;

  border: 1px solid #e5e5e5;
  border-radius: 5px;

  overflow: hidden;

  img {
    object-fit: cover;
  }
`

export const ImageSliderContainer = styled.div`
  margin-top: 1rem;

  //max-width: 700px;

  @media (max-width: 768px) {
  }
`

export const ImageSliderContent = styled.div`
  width: 120px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${(props) => (props.active ? "#a4a3a3" : "#e5e5e5")};

  transition: all 0.2s ease-in-out;
  border-radius: 5px;
`

export const SliderControllerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
`

export const SliderController = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #a4a3a3;
  border-radius: 50%;

  cursor: pointer;

  svg {
    //tamnho do icone
    width: 13px;
    color: #a4a3a3;
  }
`

export const Heading = styled.h1`
  font-size: 13px;
  text-transform: uppercase;
  color: #000000;
  letter-spacing: 0.1px;
`

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #414042;
  margin-top: 1rem;
  letter-spacing: 0.1px;

  gap: 4px;

  span {
    color: #919191;
    font-size: 9px;
  }

  h1 {
    font-size: 13px;
    line-height: 1.4;
    font-weight: 400;

    strong {
      font-weight: bold;
    }
  }

  button {
    border: none;
    background-color: transparent;
    color: #000;
    font-size: 13px;
    text-decoration: underline;
    cursor: pointer;

    &:hover {
      color: #a4a3a3;
    }
  }
`
