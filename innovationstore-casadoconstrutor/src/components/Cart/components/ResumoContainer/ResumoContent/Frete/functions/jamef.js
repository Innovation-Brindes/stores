import axios from "axios"

export async function jamefCotation(volumnsCart, cep) {
  const cubagensJamef = volumnsCart?.map((item) => {
    return {
      altura: item?.height,
      largura: item?.width,
      comprimento: item?.length,
      peso: item?.weight,
      quantidade_caixas: item?.amount.toString(),
      valor: item?.value.replace(",", "."),
    }
  })

  const valorTotalMercadoria = volumnsCart?.reduce((acc, item) => {
    return acc + parseFloat(item?.value)
  }, 0)

  const params = {
    cep_destino: cep.replace("-", ""),
    cubagens: cubagensJamef,
    valor_total_mercadoria: valorTotalMercadoria,
  }

  const response = await axios.post(
    "https://api.innovationbrindes.com.br/api/site/v2/simula-jamef/simulacao-jamef-site",
    params,
  )

  const jamefTransp = {
    id: 1,
    transp_nome: "Jamef",
    previsao: response?.data?.previsao_entrega,
    prazoEnt: response?.data?.quantidade_dias_entrega,
    //valor frete + 40% de seguro
    vlrFrete: response?.data?.valor + 0.4 * response?.data?.valor,
    isValid: response.data?.Transportadora,
  }


  return jamefTransp
}
