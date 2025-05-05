import axios from "axios"

export async function getShippingFedex(volumnsCart, cep) {
  const valueTotalItem = volumnsCart?.reduce((acc, curr) => {
    const { value } = curr

    const valueTotal = parseFloat(value)

    return acc + valueTotal
  }, 0)

  const cubagem = []

  const multiplicador = 200

  volumnsCart?.map((item, index) => {
    cubagem.push({
      index: index,

      total: item.amount * item.height * item.length * item.width * multiplicador,
    })
  })

  const reducerCubagem = cubagem?.reduce((acc, item) => {
    const { total } = item

    return acc + total
  }, 0)

  const params = {
    cpf_cnpj_cliente: "101635104000126",
    cep_cliente: cep.replace("-", ""),
    valor_total_itens: valueTotalItem + valueTotalItem * 0.2,
    peso_total_itens: reducerCubagem,
  }

  const response = await axios.post(
    "https://api.innovationbrindes.com.br/api/site/v2/simula-fedex/simulacao-fedex",
    params,
  )

  const valorMais10 = parseFloat(response?.data.Valor_Total) + parseFloat(response?.data.Valor_Total) * 0.1
  const valorDezMais30 = valorMais10 + valorMais10 * 0.3

  const dataFormatted = {
    transp_nome: "TNT",
    id: new Date().getTime(),
    previsao: response.data.Prazo,
    prazoEnt: parseInt(response.data.Prazo) + 1,
    vlrFrete: valorDezMais30,
    original_value: parseFloat(response.data.Valor_Total),
  }

  return dataFormatted
}
