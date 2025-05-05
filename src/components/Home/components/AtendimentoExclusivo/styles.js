import styled from "styled-components"
import Image from "next/image"

export const ContainerAtendimento = styled.div`
  font-family: "Open Sans", sans-serif;
  --webkit-font-smoothing: antialiased;
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  flex-direction: column;

  max-width: 1044px;
  margin: 20px auto 50px auto;
  border: 1px solid #c7c7c7;

  border-bottom-right-radius: 13px;
  border-bottom-left-radius: 13px;

  h1,
  p,
  h2 {
    margin: 0;
  }

  @media (max-width: 768px) {
    margin-inline: 10px;
  }
`

export const HeaderAtendimento = styled.div`
  padding-block: 13px;
  background-color: #cc0000;
  width: 100%;
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  gap: 13px;

  h2 {
    font-size: 24px;

    font-weight: bold;
    text-transform: uppercase;
    padding-left: 160px;
  }
  p {
    font-weight: bold;
  }

  span {
    font-weight: normal;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    font-size: 18px;

    h2 {
      padding-left: 0;
      font-size: 18px;
    }

    p {
      text-align: center;
    }
  }
`

export const ContentAtendimento = styled.div`
  width: 100%;
  max-width: 407px;
  display: flex;
  margin-top: 26px;
  margin-bottom: 46px;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 21px;
  gap: 22px;

  .content {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .group {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .group-info {
    color: #707070;

    a {
      text-decoration: none;
      color: inherit;

      &:hover {
        text-decoration: underline;
      }
    }

    span {
      font-weight: bold;
    }
  }

  @media (max-width: 768px) {
    font-size: 16px;
    max-width: 317px;
    justify-content: space-between;
  }
`

export const Icon = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #cc0000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ImageContainter = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 24px;

  @media (max-width: 768px) {
    position: relative;
    top: 0;
    transform: translateY(0);
    left: 0;
  }
`

export const ImageAtendimento = styled(Image)`
  width: 143px;
  height: 143px;
  border-radius: 50%;
`
