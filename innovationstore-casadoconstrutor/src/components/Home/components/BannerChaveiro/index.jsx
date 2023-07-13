import styled from "styled-components"
import Link from "next/link"

const ContainerBanner = styled.div`
  font-family: "Open Sans", sans-serif;
  --webkit-font-smoothing: antialiased;

  width: 100%;
  position: relative;
  margin-top: 2rem;

  display: flex;
  align-items: center;

  overflow: hidden;

  @media (max-width: 768px) {
    display: none;
  }
`

const ContainerGif = styled.img`
  position: absolute;
  top: 0;
  left: -4rem;
  object-fit: cover;
`

const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;

  left: 33rem;

  h1 {
    color: #515151;
    font-size: 2.5rem;
    font-weight: bold;
    letter-spacing: -0.8px;
    text-transform: uppercase;
  }
  h2 {
    font-size: 28px;
    color: #fff;
    background-color: #fb6670;
    letter-spacing: 0.56px;
    text-transform: uppercase;
    padding: 8px 4px;
  }

  p {
    color: #515151;
    font-size: 16px;
    letter-spacing: 0.32px;

    span {
      color: #fb6670;
      font-weight: bold;
    }
  }
`

const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 63rem;

  button {
    font-size: 20px;
    text-transform: uppercase;
    color: #fff;
    padding-inline: 3.063rem;
    padding-block: 0.5rem;
    background: #00d3fb;
    border: none;
    outline: none;
    border-radius: 23px;
    font-weight: light;
    transition: 0.3s;

    a {
      text-decoration: none;
      color: #fff;
    }

    &:hover {
      transform: scale(1.1);
    }

    @media (max-width: 1380px) {
      padding-inline: 2.063rem;
      padding-block: 0.5rem;
      font-size: 18px;
    }
  }
`

const ContainerBannerMobile = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    button {
      font-size: 20px;
      text-transform: uppercase;
      color: #fff;
      padding-inline: 3.063rem;
      padding-block: 0.5rem;
      background: #00d3fb;
      border: none;
      outline: none;
      border-radius: 23px;
      font-weight: light;
      transition: 0.3s;
      width: 20rem;

      margin-bottom: 1rem;

      a {
        text-decoration: none;
        color: #fff;
      }

      &:hover {
        transform: scale(1.1);
      }

      @media (max-width: 1380px) {
        padding-inline: 2.063rem;
        padding-block: 0.5rem;
        font-size: 18px;
      }
    }
  }
`

const BannerChaveiro = () => {
  return (
    <div>
      <ContainerBanner>
        <img src="/images/banners/banner-gif-home/bg.png" alt="" />
        <ContainerGif src="/images/banners/banner-gif-home/gif-banner-desk.gif" alt="" />
        <ContainerText>
          <h1>CHAVEIRO DE ACRÍLICO</h1>
          <h2>PERSONALIZADO</h2>
          <p>
            Deixe sua marca em todos os lugares com <br /> <span>CHAVEIROS ÚNICOS E EXCLUSIVOS</span> feitos <br /> sob
            medida para você.
          </p>
        </ContainerText>
        <ContainerButton>
          <button>
            <Link href="/chaveiro-chaveiro-acrilico-10181090914">Personalize o seu!</Link>
          </button>
        </ContainerButton>
      </ContainerBanner>
      <ContainerBannerMobile>
        <img src="/images/banners/banner-gif-home/banner-mobile.gif" alt="" />
        <button>
          <Link href="/chaveiro-chaveiro-acrilico-10181090914">Personalize o seu!</Link>
        </button>
      </ContainerBannerMobile>
    </div>
  )
}

export default BannerChaveiro
