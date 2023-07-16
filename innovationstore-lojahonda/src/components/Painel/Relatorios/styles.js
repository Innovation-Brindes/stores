import styled from "styled-components"

export const RelatoriosContainer = styled.div`
  font-family: Open Sans;
  --webkit-font-smoothing: antialiased;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    font-family: Open Sans;
    margin: 0;
  }

  max-width: 1920px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  margin: 0 auto;
`

export const BaseFlex = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const RelatoriosHeaderImage = styled(BaseFlex)`
  padding-block: 25px;

  img {
    width: 300px;
    height: 73px;
  }
`
export const RelatoriosSummary = styled(BaseFlex)`
  background-color: #f5f5f5;
  padding-block: 21px;
  gap: 46px;

  flex-wrap: wrap;
`

export const TitleRelatorios = styled.h1`
  font-size: 31px;
  color: #414042;
  text-transform: uppercase;
  font-weight: 700;
`

export const RelatoriosSummaryCard = styled.div`
  font-size: 16px;
  text-transform: uppercase;

  h2 {
    color: ${({ theme }) => theme.primary};
    font-size: 16px;
    font-weight: 700;
  }

  span {
    font-size: 16px;
    font-weight: 700;
    color: #414042;
  }
`

export const RelatoriosHeadingTable = styled(BaseFlex)`
  padding-block: 34px;

  background-color: ${({ theme }) => theme.primary};

  h1 {
    color: #fff;
    font-size: 20px;
    font-weight: 700;
  }
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  svg {
    color: ${({ theme }) => theme.primary};
  }
`

export const FilterContainer = styled(BaseFlex)`
  padding-block: 31px;
  display: flex;
  gap: 15px;

  flex-wrap: wrap;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    max-width: 300px;
  }
`

export const FilterHeading = styled.h1`
  font-size: 18px;
  color: #414042;
  font-weight: 700;
`

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 5px 3px;

  border: 1px solid #cfcfcf;
  border-radius: 5px;

  /* transition: all 0.1s ease-in-out; */

  span {
    font-size: 14px;
    font-weight: 700;
    color: #414042;
    margin-left: 10px;
  }

  input {
    width: 100%;
    border: none;
    outline: none;
    padding: 0 10px;
    font-size: 16px;
    font-weight: 400;
    color: #414042;
  }

  &:focus-within {
    /* border: 1px solid ${({ theme }) => theme.primary}; */
    outline-color: ${({ theme }) => theme.primary};
    outline-width: 2px;
    outline-style: solid;

    span {
      color: ${({ theme }) => theme.primary};
    }
  }
`

export const FilterButton = styled.button`
  padding: 5px 18px;
  background-color: ${({ theme }) => theme.primary};
  border: none;
  outline-color: ${({ theme }) => theme.primary};
  border-radius: 5px;
  text-transform: uppercase;
  color: #fff;

  font-size: 17px;

  transition: all 0.1s ease-in-out;

  &:hover {
    filter: brightness(0.9);
  }
`

export const TableTitleSummary = styled(BaseFlex)`
  background-color: ${({ theme }) => theme.primary};
  color: #fff;
  font-size: 14px;
  font-weight: 700;

  gap: 90px;

  padding: 12px 0;

  @media (max-width: 768px) {
    padding: 6px 0;
    text-align: center;
  }
`

export const TableContainer = styled(BaseFlex)`
  overflow-x: auto;
`

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 5px 0;

  @media (max-width: 768px) {
    display: none;
  }

  thead {
    tr {
      th {
        padding: 10px 0;
        font-size: 14px;
        font-weight: 700;
        color: #414042;
        text-align: center;
        border-bottom: 1px solid #f5f5f5;
        background-color: #f5f5f5;
      }
    }
  }

  tbody {
    tr {
      td {
        padding: 10px 0;
        font-size: 14px;
        font-weight: 400;
        color: #414042;
        text-align: center;
      }
    }

    tr:nth-child(even) {
      background-color: #f5f5f5;

      td {
        border-bottom: 1px solid #fff;
      }
    }
  }
`

export const CardRelatorioMobile = styled.div`
  display: none;

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;

    padding: 10px 10px;
    border-bottom: 1px solid #f5f5f5;

    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    background-color: #f5f5f5;
  }

  h2 {
    font-size: 14px;
    font-weight: 700;
    color: ${({ theme }) => theme.primary};
  }

  span {
    font-size: 14px;
    font-weight: 700;
    color: #414042;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    color: #414042;
    margin: 0;
  }
`

export const ContainerCardMobile = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    padding: 0 10px;
  }
`
