import axios from "axios"

export async function kanguCotation(volumsnCartKangu, cubagemProximaCaixa, isAgrupped, cep) {
  const itemsForKanug = volumsnCartKangu

  const valorTotalMercadoria = itemsForKanug.reduce((acc, item) => acc + parseFloat(item.value), 0)

  const valorTotalMercadoriaMais20 = valorTotalMercadoria * 1.2

  const paramsItem = []
  const paramsItemAgrupado = []

  itemsForKanug.map((item) => {
    paramsItem.push({
      peso: item.weight,
      quantidade: item.amount,
      altura: item.height,
      largura: item.width,
      comprimento: item.length,
      tipo: "C",
      valor: valorTotalMercadoriaMais20,
    })
  })

  itemsForKanug.map((item) => {
    paramsItemAgrupado.push({
      peso: item.weight,
      quantidade: item.amount,
      altura: cubagemProximaCaixa?.altura || 0,
      largura: cubagemProximaCaixa?.largura || 0,
      comprimento: cubagemProximaCaixa?.comprimento || 0,
      tipo: "C",
      valor: valorTotalMercadoriaMais20,
    })
  })

  const proxCub = paramsItemAgrupado.slice(0, 1)

  const paramsKangu = {
    dados_produto: isAgrupped ? proxCub : paramsItem,
    cep_destino: cep,
  }

  const responseKangu = await axios.post(
    "https://api.innovationbrindes.com.br/api/site/v2/frete-transp-kangu/consulta-frete-api",
    paramsKangu,
  )

  //10%
  //30% em cima do valor + 10%

  const responseFormatted = responseKangu.data.map((item) => {
    const originalValue = parseFloat(item.vlrFrete)

    const increasedValue = originalValue * 1.1 // Adiciona 10% ao valor original

    //mais 30% em cima do valor + 10%
    const increasedValue30 = increasedValue * 1.3

    return {
      original_value: originalValue,
      vlrFrete: increasedValue30, // Arredonda para 2 casas decimais
      prazoEnt: item.prazoEnt + 1,
      transp_nome: item.transp_nome,
    }
  })
  return responseFormatted
}
