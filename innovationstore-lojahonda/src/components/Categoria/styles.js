import styled from "styled-components"

export const CategoriaContainerProducts = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 16px;
  padding-inline: 16px;
`

export const OrderbyContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 16px;

  padding-inline: 16px;

  margin-bottom: 16px;
`

export const OrderbyComponent = styled.select`
  max-width: 191px;
  width: 100%;
  background-color: #ffffff;
  border: 1px solid #cfcfcf;
  border-radius: 10px;

  padding: 5px 15px;

  align-self: flex-end;

  &:focus {
    outline-color: #95c620;
  }

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%2395C620' viewBox='0 0 16 16'%3E%3Cpath d='M8 11.5L3.5 7h9L8 11.5z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position-x: 95%;
  background-position-y: 50%;
  background-size: 25px;
`

export const AlertContent = styled.div`
  background: #f5f5f5;
  padding: 10px 15px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 10px;

  span {
    font-size: 11px;
  }
`

export const ContainerFilter = styled.div`
  position: sticky;
  top: 16px;

  z-index: 999;
`

export const TextSeoContainer = styled.div`
  font-size: 14px;
  color: #414042;

  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  margin-top: 20px;

  font-family: "Open Sans", sans-serif;
`
