import styled from "styled-components"

export const IconsSocialMedia = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding-inline: 1rem;
  background: #fff;
  background-color: white;
  margin-left: 12rem;

  .icon-border {
    border: 1px solid #9fcd42;
    padding: 0.3rem;
    border-radius: 0.5rem;
    color: #9fcd42;
    font-size: 2.5rem;
  }

  @media (max-width: 768px) {
    margin: 0;
    padding: 0;
    margin-inline: auto;
    padding-top: 23px;

    .icon-border {
      font-size: 2rem;
    }
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1920px;
  margin-inline: auto;
  margin-top: 2rem;
  padding-bottom: 3rem;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1366px;
  justify-content: space-between;
  margin-bottom: 19px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const ImageContainer = styled.div`
  padding-left: 83px;

  @media (max-width: 768px) {
    padding: 0 55px;
  }
`

export const FeaturesContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 147px;

  @media (max-width: 768px) {
    display: grid;
    padding: 0 55px;

    grid-template-areas: "a a" "b c";

    transform: translateX(-15px);
    .onePerRow {
      grid-area: a;
    }

    .twoPerRow {
      grid-area: b;
    }

    .threePerRow {
      grid-area: c;
    }
  }
`

export const BodyFooterContainer = styled.div`
  display: flex;
  flex: 1;

  flex-wrap: wrap;

  color: #95c620;
  font-weight: bold;
  padding-inline: 140px;
  justify-content: space-between;
  width: 100%;
  max-width: 1366px;
  margin-inline: auto;
  flex-direction: row;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0 55px;
  }
`

export const InnovationContainer = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 14px;
  }

  h2 {
    font-size: 12px;
    font-weight: normal;
    margin: 0;
  }
`

export const InnovationContent = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  color: #414042;
  font-size: 12px;
  font-weight: normal;

  white-space: nowrap;
`

export const SegmentosContainer = styled.div`
  flex-direction: column;
  margin-left: 47px;
  position: relative;
  height: fit-content;

  h1 {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    margin-top: 1rem;
    margin-left: 0;
    padding-bottom: 15px;
  }
`

export const Wrapper = styled.div`
  display: flex;
`

export const LineContainerAttributes = styled.div`
  display: flex;
  gap: 2px;
  flex-direction: column;
  color: #414042;
  font-size: 12px;
  font-weight: normal;
  height: ${(props) => props.containerHeight || "0"};

  h2,
  a {
    color: #414042;
    font-size: 12px;
    font-weight: normal;
    cursor: pointer;

    text-decoration: none;
  }

  //before
  &::before {
    content: "";
    position: absolute;
    width: 1px;
    height: ${(props) => props.height};
    background-color: #e8e8e8;
    left: -1.3rem;
    bottom: 0px;
  }

  @media (max-width: 768px) {
    &::before {
      display: none;
    }
  }
`

export const SegmentosRowContent = styled.div`
  display: flex;

  gap: 2px;
  flex-direction: column;
  color: #414042;
  font-size: 12px;
  font-weight: normal;
  height: 200px;
  margin-left: 58px;
`

export const SoAquiContainer = styled.div`
  flex-direction: column;
  margin-left: 58px;
  position: relative;
  height: fit-content;

  h1 {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    padding-bottom: 15px;
  }
`

export const ContainerHorario = styled.div`
  margin-left: 50px;
  flex-direction: column;
  position: relative;
  height: fit-content;

  h1 {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    padding-bottom: 15px;
  }
`

export const AtendimentoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 37px;
  position: relative;
  height: fit-content;

  h1 {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    padding-bottom: 15px;
    margin-top: 30px;
  }
`

export const PaymentMethodContainer = styled.div`
  display: flex;
  margin-top: 3rem;
  width: 100%;
  max-width: 1366px;

  @media (max-width: 768px) {
    .divider {
      display: none;
    }

    justify-content: center;
  }
`

export const PaymentMethodContent = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
  margin-top: 0.4rem;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-top: 21px;
  }
`

export const ContainerFeaturesMobile = styled.div`
  display: flex;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-top: 2rem;
  }
`
