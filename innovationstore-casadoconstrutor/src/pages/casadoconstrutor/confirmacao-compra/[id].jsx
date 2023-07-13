import Head from "next/head"
import { ConfirmarCompra } from "../../../components/ConfirmacaoCompra"
import { baseURL } from "../../../services/api"

export async function getServerSideProps({ params }) {
  const { id } = params

  const { data } = await baseURL.get(`/pedido/busca-info-clientes-pagamento/${id}`)

  const { data: data2 } = await baseURL.get(`/pedido/busca-info-itens-pagamento/${id}`)

  return {
    props: {
      id,
      infoClientes: data,
      infoItens: data2,
    },
  }
}

const ConfirmacaoCompra = ({ id, infoClientes, infoItens }) => {
  const pedido = infoClientes.map((item) => item.numero_unico)
  const CNPJEMP = infoClientes.map((item) => item.emp_cnpj)
  const RAZAOEMP = infoClientes.map((item) => item.emp_razao_social)

  const dadosPix = {
    CNPJEMP,
    RAZAOEMP,
  }

  return (
    <>
      <Head>
        <title>{pedido} - Confirmação de Compra - Innovation Brindes</title>
      </Head>
      <ConfirmarCompra id={id} dataInfoClientes={infoClientes} data={infoItens} dadosPix={dadosPix} />
    </>
  )
}

export default ConfirmacaoCompra
