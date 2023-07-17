import styled from "styled-components"

export const CardContainer = styled.div`
  width: 195px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-inline: 12px;
  padding-block: 14px;
  min-height: 455px;
  transition: 0.3s;
  position: relative;

  border: 1px solid #cfcfcf;
  border-radius: 15px;

  &:hover {
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    width: 175px;
  }
`

export const CardImageContainer = styled.div`
  width: 100%;

  img {
    width: 100%;
    object-fit: cover;
  }
`

export const CardContent = styled.div`
  color: #414042;

  text-align: center;
  overflow: hidden;
  margin-top: 10px;

  h1 {
    font-size: 13px;
    font-weight: bold;
    height: 40px;
    text-overflow: ellipsis;
  }

  h2 {
    font-size: 13px;
    font-weight: bold;
    margin-top: 15px;
  }

  p {
    color: #919191;
    font-size: 10px;
    text-align: left;
  }
`

export const FooterCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: auto;

  .colors {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 6px;

    span {
      font-size: 10px;
      font-weight: bold;
    }

    strong {
      font-size: 14px;
    }
  }

  span {
    font-size: 10px;
  }

  strong {
    font-weight: bold;
    font-size: 16px;
  }

  .price {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 20px;

    .group {
      position: relative;

      .unity {
        position: absolute;
        top: 50%;
        right: -3.5rem;
        transform: translateY(-50%);
      }
    }
  }
`

export const Tag = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 134px;
  padding: 3px;
  font-size: 12px;
  font-weight: bold;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;

  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
`
