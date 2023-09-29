import Image from "next/image"
import * as S from "./styles"
import { format } from "date-fns"
import { usePdfGenerator } from "../../../hooks/usePdfGenerator"

import { useState } from "react"
import { Tr } from "./Tr"
import { Summary } from "./Summary"
import { formatPrice } from "../../../utils/formatPrice"
import { CardMobile } from "./CardMobile"

export function Relatorios({ relatorios }) {
  const [cnpj, setCnpj] = useState("")
  const [data, setData] = useState(relatorios)
  const [dataDe, setDataDe] = useState("")
  const [dataAte, setDataAte] = useState("")

  function handleCnpj(e) {
    const cnpj = e.target.value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5")

    setCnpj(cnpj)
  }

  function handleFilter(e) {
    const cnpjNotFormatted = cnpj.replace(/(\.|\-|\/)/g, "")

    if (cnpjNotFormatted.length === 14) {
      const filter = relatorios.filter((item) => {
        return item.cpfcnpj_parceiro === cnpjNotFormatted
      })

      setData(filter)
      return
    }

    if (dataDe && dataAte) {
      const filter = relatorios.filter((item) => {
        const dataDeFormatted = format(new Date(dataDe), "yyyy-MM-dd")
        const dataAteFormatted = format(new Date(dataAte), "yyyy-MM-dd")

        const dataPedido = format(new Date(item.dt_ultatu), "yyyy-MM-dd")

        return dataPedido >= dataDeFormatted && dataPedido <= dataAteFormatted
      })

      setData(filter)
      return
    }

    setData(relatorios)
  }

  const summary = data.reduce(
    (acc, curr) => {
      const { valor_cupom, valor_pedido, valor_sem_desconto } = curr

      const valorPedido = parseFloat(valor_pedido)
      const valorSemDesconto = parseFloat(valor_sem_desconto)

      acc.totalSemDesconto += valorSemDesconto

      acc.totalPedidos += 1
      acc.totalValor += valorPedido

      if (valorSemDesconto > valorPedido) {
        acc.descontoAdquirido += valorSemDesconto - valorPedido
      }

      return {
        ...acc,
      }
    },
    {
      totalPedidos: 0,
      totalValor: 0,
      descontoAdquirido: 0,
      totalSemDesconto: 0,
    },
  )

  const headData = [
    "Pedido",
    "Data",
    "Razão Social",
    "CNPJ",
    // "Tipo",
    "Responsável",
    "E-mail",
    "Prazo de produção",
    "% de desconto",
    "Valor sem desconto",
    "Valor com desconto",
  ]

  const mapBodyData = () => {
    return data.map((item) => [
      item.numero_pedido,
      format(new Date(item.dt_ultatu), "dd/MM/yyyy"),
      item.razao_social,
      item.cpfcnpj_parceiro,
      item.nome_parceiro,
      item.email_parceiro,
      `${item.prazo_producao} dias`,
      `${parseFloat(item.percentual_desconto).toFixed(2)} %`,
      formatPrice(item.valor_sem_desconto),
      formatPrice(item.valor_pedido),
    ])
  }

  const headSummary = [
    "Total de pedidos",
    "Valor total",
    "Desconto adquirido",
    "Total com Desconto",
    "Total sem Desconto",
  ]

  const summaryData = [
    summary.totalPedidos,
    formatPrice(summary.totalValor),
    formatPrice(summary.descontoAdquirido),
    formatPrice(summary.totalValor),
    formatPrice(summary.totalSemDesconto),
  ]

  const generatePDF = usePdfGenerator(headData, mapBodyData, headSummary, summaryData, "Relatório")

  return (
    <S.RelatoriosContainer>
      <S.RelatoriosHeaderImage>
        <Image src="https://imgproductioncrm.s3.us-east-2.amazonaws.com/logo-honda.png" width={300} height={73} />
      </S.RelatoriosHeaderImage>
      <Summary summary={summary} />
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
          <input
            type="date"
            onChange={(e) => {
              setDataDe(e.target.value)
            }}
          />
        </S.InputGroup>
        <S.InputGroup>
          <span>Ate:</span>
          <input
            type="date"
            onChange={(e) => {
              setDataAte(e.target.value)
            }}
          />
        </S.InputGroup>
        <S.FilterButton
          type="button"
          onClick={() => {
            handleFilter()
          }}
        >
          Ok
        </S.FilterButton>
      </S.FilterContainer>
      <button onClick={generatePDF} className="mb-3 px-4 py-2 bg-[#cc0000] text-white rounded-md hover:brightness-90">
        Gerar relatório em PDF
      </button>

      <S.TableTitleSummary>
        <span>TOTAL DE PEDIDOS: {summary.totalPedidos}</span>
        <span>VALOR TOTAL: {formatPrice(summary.totalValor)}</span>
        {/* <span>CRÉDITO DISPONÍVEL: R$ 99.999,00</span> */}
      </S.TableTitleSummary>

      <S.TableContainer>
        <S.Table>
          <thead>
            <tr>
              <th>Pedido</th>
              <th>Data</th>
              <th>Razão Social</th>
              <th>CNPJ</th>
              {/* <th>Tipo</th> */}
              <th>Responsável</th>
              <th>E-mail</th>
              <th>Prazo de produção</th>
              <th>% de desconto</th>
              <th>Valor sem desconto</th>
              <th>Valor com desconto</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <Tr key={index} item={item} />
            ))}
          </tbody>
        </S.Table>
        <S.ContainerCardMobile>
          {data.map((item, index) => (
            <CardMobile key={index} item={item} />
          ))}
        </S.ContainerCardMobile>
      </S.TableContainer>
    </S.RelatoriosContainer>
  )
}
