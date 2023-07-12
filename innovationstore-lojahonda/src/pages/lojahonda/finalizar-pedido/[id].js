import FinalizarPedido from "../../components/FinalizarPedido"
import { getInformacoesLayout, getListarInfoClientes } from "../../services/api"
import { getCategorias, getSegmentos } from "../../utils/getLinksHeader"
import Header from "../../components/Header"

export const getServerSideProps = async (ctx) => {
  const { id } = ctx.params

  const dados_layout = await getInformacoesLayout.get(`/${id}`)

  const dadosSerializados = JSON.parse(JSON.stringify(dados_layout.data))

  const dados_info_cliente = await getListarInfoClientes.get(`/${id}`)

  const dadosInfoCliente = JSON.parse(JSON.stringify(dados_info_cliente.data))

  return {
    props: {
      id,
      dadosSerializados,
      dadosInfoCliente,
    },
  }
}

const Post = ({ id, dadosSerializados, dadosInfoCliente, linksSubcategorias, linksSegmentos }) => {
  return (
    <>
      <FinalizarPedido id={id} dados_layout={dadosSerializados} dados_cliente={dadosInfoCliente} />
    </>
  )
}

export default Post
