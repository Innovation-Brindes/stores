import styled from "styled-components"

export const ProductImageContent = styled.div`
  background: ${(props) => (props.background ? `url(${props.background})` : "none")};
  width: 361px;
  height: 294px;

  background-position-x: ${(props) => (props.backgroundPositionX ? props.backgroundPositionX : "center")};
  //no-repeat: no-repeat;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #f2f2f2;
  padding: 23px 13px;
  border-radius: 13px;

  div {
    height: 100%;
    display: flex;
    flex-direction: column;

    h1,
    p {
      margin: 0;
    }

    h1 {
      max-width: fit-content;
      text-transform: uppercase;
      font-size: 20px;
      padding: 0.3rem 0.6rem;
      background: #414042;
      border-radius: 13px;
      color: #fff;
      min-width: 173px;
      text-align: center;
    }

    span {
      font-weight: bold;
      text-transform: uppercase;
      margin-left: 12px;
    }

    p {
      max-width: 170px;
      padding-left: 12px;
      margin-top: 13px;
      flex: 1;
    }

    button {
      align-self: flex-start;
      padding: 6px 26px;

      margin-bottom: 13px;

      font-size: 20px;
      color: #fff;
      background-color: #e2001b;
      border-radius: 23px;

      text-transform: uppercase;
    }
  }
`
