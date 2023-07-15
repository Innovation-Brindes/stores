import Image from "next/image"
import * as S from "./styles"
import { PiNotepadFill } from "react-icons/pi"

import { AiFillDollarCircle, AiOutlineDollarCircle } from "react-icons/ai"
import { useState } from "react"

export function Relatorios() {
  const [cnpj, setCnpj] = useState("")

  function handleCnpj(e) {
    const cnpj = e.target.value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5")

    setCnpj(cnpj)
  }

  return (
    <S.RelatoriosContainer>
      <S.RelatoriosHeaderImage>
        <Image src="https://imgproductioncrm.s3.us-east-2.amazonaws.com/logo-honda.png" width={300} height={73} />
      </S.RelatoriosHeaderImage>
      <S.RelatoriosSummary>
        <S.TitleRelatorios>Dashboard</S.TitleRelatorios>
        <S.RelatoriosSummaryCard>
          <S.Wrapper>
            <PiNotepadFill size={30} />
            <h2>Total de pedidos:</h2>
            <span>1.000</span>
          </S.Wrapper>
        </S.RelatoriosSummaryCard>
        <S.RelatoriosSummaryCard>
          <S.Wrapper>
            <AiOutlineDollarCircle size={30} />
            <h2>Valor total:</h2>
            <span>989.978,00</span>
          </S.Wrapper>
        </S.RelatoriosSummaryCard>
        <S.RelatoriosSummaryCard>
          <S.Wrapper>
            <AiFillDollarCircle size={30} />
            <h2>Desconto adiquirido:</h2>
            <span>99.004,00</span>
          </S.Wrapper>
        </S.RelatoriosSummaryCard>
      </S.RelatoriosSummary>
      <S.RelatoriosHeadingTable>
        <h1>Resumo da Produção</h1>
      </S.RelatoriosHeadingTable>

      <S.FilterContainer>
        <S.FilterHeading>Filtrar por:</S.FilterHeading>
        <S.InputGroup>
          <span>CNPJ:</span>
          <input
            type="text"
            value={cnpj}
            maxLength={18}
            onChange={(e) => {
              handleCnpj(e)
            }}
          />
        </S.InputGroup>
        <S.InputGroup>
          <span>De:</span>
          <input type="date" />
        </S.InputGroup>
        <S.InputGroup>
          <span>Ate:</span>
          <input type="date" />
        </S.InputGroup>
        <S.FilterButton>Ok</S.FilterButton>
      </S.FilterContainer>
      <S.TableTitleSummary>
        <span>TOTAL DE PEDIDOS: 500</span>
        <span>VALOR TOTAL: R$ 111.432.978,00</span>
        <span>CRÉDITO DISPONÍVEL: R$ 99.999,00</span>
      </S.TableTitleSummary>

      <S.TableContainer>
        <S.Table>
          <thead>
            <tr>
              <th>Pedido</th>
              <th>Data</th>
              <th>Razão Social</th>
              <th>CNPJ</th>
              <th>Tipo</th>
              <th>Responsável</th>
              <th>E-mail</th>
              <th>Prazo de produção</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>12123123</td>
              <td>01/01/2021</td>
              <td>Alexandre</td>
              <td>Alexandre</td>
              <td>C</td>
              <td>Alexandre</td>
              <td>alesurf13@gmail.com</td>
              <td>1 dia</td>
              <td>10000</td>
            </tr>
            <tr>
              <td>12123123</td>
              <td>01/01/2021</td>
              <td>Alexandre</td>
              <td>Alexandre</td>
              <td>C</td>
              <td>Alexandre</td>
              <td>alesurf13@gmail.com</td>
              <td>1 dia</td>
              <td>10000</td>
            </tr>
            <tr>
              <td>12123123</td>
              <td>01/01/2021</td>
              <td>Alexandre</td>
              <td>Alexandre</td>
              <td>C</td>
              <td>Alexandre</td>
              <td>alesurf13@gmail.com</td>
              <td>1 dia</td>
              <td>10000</td>
            </tr>
            <tr>
              <td>12123123</td>
              <td>01/01/2021</td>
              <td>Alexandre</td>
              <td>Alexandre</td>
              <td>C</td>
              <td>Alexandre</td>
              <td>alesurf13@gmail.com</td>
              <td>1 dia</td>
              <td>10000</td>
            </tr>
            <tr>
              <td>12123123</td>
              <td>01/01/2021</td>
              <td>Alexandre</td>
              <td>Alexandre</td>
              <td>C</td>
              <td>Alexandre</td>
              <td>alesurf13@gmail.com</td>
              <td>1 dia</td>
              <td>10000</td>
            </tr>
            <tr>
              <td>12123123</td>
              <td>01/01/2021</td>
              <td>Alexandre</td>
              <td>Alexandre</td>
              <td>C</td>
              <td>Alexandre</td>
              <td>alesurf13@gmail.com</td>
              <td>1 dia</td>
              <td>10000</td>
            </tr>
            <tr>
              <td>12123123</td>
              <td>01/01/2021</td>
              <td>Alexandre</td>
              <td>Alexandre</td>
              <td>C</td>
              <td>Alexandre</td>
              <td>alesurf13@gmail.com</td>
              <td>1 dia</td>
              <td>10000</td>
            </tr>
            <tr>
              <td>12123123</td>
              <td>01/01/2021</td>
              <td>Alexandre</td>
              <td>Alexandre</td>
              <td>C</td>
              <td>Alexandre</td>
              <td>alesurf13@gmail.com</td>
              <td>1 dia</td>
              <td>10000</td>
            </tr>
            <tr>
              <td>12123123</td>
              <td>01/01/2021</td>
              <td>Alexandre</td>
              <td>Alexandre</td>
              <td>C</td>
              <td>Alexandre</td>
              <td>alesurf13@gmail.com</td>
              <td>1 dia</td>
              <td>10000</td>
            </tr>
            <tr>
              <td>12123123</td>
              <td>01/01/2021</td>
              <td>Alexandre</td>
              <td>Alexandre</td>
              <td>C</td>
              <td>Alexandre</td>
              <td>alesurf13@gmail.com</td>
              <td>1 dia</td>
              <td>10000</td>
            </tr>
            <tr>
              <td>12123123</td>
              <td>01/01/2021</td>
              <td>Alexandre</td>
              <td>Alexandre</td>
              <td>C</td>
              <td>Alexandre</td>
              <td>alesurf13@gmail.com</td>
              <td>1 dia</td>
              <td>10000</td>
            </tr>
            <tr>
              <td>12123123</td>
              <td>01/01/2021</td>
              <td>Alexandre</td>
              <td>Alexandre</td>
              <td>C</td>
              <td>Alexandre</td>
              <td>alesurf13@gmail.com</td>
              <td>1 dia</td>
              <td>10000</td>
            </tr>
            <tr>
              <td>12123123</td>
              <td>01/01/2021</td>
              <td>Alexandre</td>
              <td>Alexandre</td>
              <td>C</td>
              <td>Alexandre</td>
              <td>alesurf13@gmail.com</td>
              <td>1 dia</td>
              <td>10000</td>
            </tr>
            <tr>
              <td>12123123</td>
              <td>01/01/2021</td>
              <td>Alexandre</td>
              <td>Alexandre</td>
              <td>C</td>
              <td>Alexandre</td>
              <td>alesurf13@gmail.com</td>
              <td>1 dia</td>
              <td>10000</td>
            </tr>
            <tr>
              <td>12123123</td>
              <td>01/01/2021</td>
              <td>Alexandre</td>
              <td>Alexandre</td>
              <td>C</td>
              <td>Alexandre</td>
              <td>alesurf13@gmail.com</td>
              <td>1 dia</td>
              <td>10000</td>
            </tr>
            <tr>
              <td>12123123</td>
              <td>01/01/2021</td>
              <td>Alexandre</td>
              <td>Alexandre</td>
              <td>C</td>
              <td>Alexandre</td>
              <td>alesurf13@gmail.com</td>
              <td>1 dia</td>
              <td>10000</td>
            </tr>
            <tr>
              <td>12123123</td>
              <td>01/01/2021</td>
              <td>Alexandre</td>
              <td>Alexandre</td>
              <td>C</td>
              <td>Alexandre</td>
              <td>alesurf13@gmail.com</td>
              <td>1 dia</td>
              <td>10000</td>
            </tr>
            <tr>
              <td>12123123</td>
              <td>01/01/2021</td>
              <td>Alexandre</td>
              <td>Alexandre</td>
              <td>C</td>
              <td>Alexandre</td>
              <td>alesurf13@gmail.com</td>
              <td>1 dia</td>
              <td>10000</td>
            </tr>
            <tr>
              <td>12123123</td>
              <td>01/01/2021</td>
              <td>Alexandre</td>
              <td>Alexandre</td>
              <td>C</td>
              <td>Alexandre</td>
              <td>alesurf13@gmail.com</td>
              <td>1 dia</td>
              <td>10000</td>
            </tr>
            <tr>
              <td>12123123</td>
              <td>01/01/2021</td>
              <td>Alexandre</td>
              <td>Alexandre</td>
              <td>C</td>
              <td>Alexandre</td>
              <td>alesurf13@gmail.com</td>
              <td>1 dia</td>
              <td>10000</td>
            </tr>
            <tr>
              <td>12123123</td>
              <td>01/01/2021</td>
              <td>Alexandre</td>
              <td>Alexandre</td>
              <td>C</td>
              <td>Alexandre</td>
              <td>alesurf13@gmail.com</td>
              <td>1 dia</td>
              <td>10000</td>
            </tr>
            <tr>
              <td>12123123</td>
              <td>01/01/2021</td>
              <td>Alexandre</td>
              <td>Alexandre</td>
              <td>C</td>
              <td>Alexandre</td>
              <td>alesurf13@gmail.com</td>
              <td>1 dia</td>
              <td>10000</td>
            </tr>
          </tbody>
        </S.Table>
      </S.TableContainer>
    </S.RelatoriosContainer>
  )
}
