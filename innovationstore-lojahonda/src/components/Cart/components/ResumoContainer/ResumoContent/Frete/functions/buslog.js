import axios from "axios"

export async function buslogCotation(volumnsCart, cep) {
  const cubagensBuslog = volumnsCart?.map((item) => {
    return {
      Altura: item?.height,
      Largura: item?.width,
      Comprimento: item?.length,
      Peso: item?.weight,
      quantidade_caixas: item?.amount.toString(),
      ValorMercadoria: item?.value.replace(',', '.'),
      CepDestino: cep.replace('-', ''),
    }
  })
  const params = {
    informacoes_frete: cubagensBuslog,
  }

  const response = await axios.post(
    'https://api.innovationbrindes.com.br/api/site/v2/simulacao-buslog/simula-buslog',
    params,
  )

  if (response.data.Transportadora) {
    return 
  }

  const [ buslog ] =  response.data
  
  return buslog
}