export function obterValorMaisProximo(valores, calcKangu) {
  let diferencaMinima = Infinity
  let valorMaisProximo = null
  let maiorKey = -Infinity

  for (const objeto of Object.values(valores)) {
    const diferenca = Math.abs(objeto.key - calcKangu)

    if (diferenca <= diferencaMinima) {
      diferencaMinima = diferenca
      valorMaisProximo = objeto
    }

    if (objeto.key > maiorKey) {
      maiorKey = objeto.key
    }
  }

  if (calcKangu > maiorKey) {
    return null
  }

  return valorMaisProximo
}
