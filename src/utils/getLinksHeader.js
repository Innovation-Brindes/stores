import { dadosMenu, dadosSegmentos } from "../services/api"

export async function getSegmentos() {
  try {
    const response = await dadosSegmentos.get("")
    var dados = response.data

    dados.sort(function (a, b) {
      if (a.descricao > b.descricao) {
        return 1
      }
      if (a.descricao < b.descricao) {
        return -1
      }

      return 0
    })

    return { segmentos: dados }
  } catch (error) {
    console.log(Object.keys(error), error.message)
  }
}

export async function getCategorias() {
  try {
    const response = await dadosMenu.get()
    var dados = await response.data

    var categorias = []
    for (var cat of dados) {
      categorias.push(titleize(cat.descricao_grupo_produto_pai.trim()))
    }

    categorias = categorias
      .filter(function (e, i) {
        return categorias.indexOf(e) === i
      })
      .sort()

    var subcategoria = []
    var menu = []
    var qtd = 0
    for (var cat of categorias) {
      eval("menu.push({'" + qtd + "':[{'categoria':'" + titleize(cat) + "'}]})")
      for (var subcat of dados) {
        if (titleize(cat) === titleize(subcat.descricao_grupo_produto_pai.trim())) {
          menu[qtd][qtd].push({
            name: titleize(subcat.descricao_grupo_produto.trim()),
            cod_grupo: subcat.codigo_grupo_produto,
            url_site: subcat.url_site,
          })

          subcategoria.push({
            name: titleize(subcat.descricao_grupo_produto.trim()),
            cod_grupo: subcat.codigo_grupo_produto,
            url_site: subcat.url_site,
          })
        }
      }
      qtd++
    }

    subcategoria.sort(function (a, b) {
      if (a.name > b.name) {
        return 1
      }
      if (a.name < b.name) {
        return -1
      }
      return 0
    })

    return {
      categorias: categorias.sort(),
      subcategorias: subcategoria,
      menu_categorias: menu,
    }
  } catch (error) {
    console.log(Object.keys(error), error.message)
  }
}

function titleize(text) {
  var words = text.toLowerCase().split(" ")
  for (var a = 0; a < words.length; a++) {
    var w = words[a]
    words[a] = w[0].toUpperCase() + w.slice(1)
  }
  return words.join(" ")
}
