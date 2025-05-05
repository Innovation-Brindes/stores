import { formatPrice } from "../../../../utils/formatPrice"
import { format } from "date-fns"

export function Tr({ item }) {
  const maskedCnpj = item.cpfcnpj_parceiro.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5")

  return (
    <tr>
      <td>
        <a href={`https://innovationstore.com.br/confirmacao-compra/${item.nunota}`} target="_blank" rel="noreferrer">
          {item.numero_pedido}
        </a>
      </td>
      <td>{format(new Date(item.dt_ultatu), "dd/MM/yyyy")}</td>
      <td>{item.razao_social}</td>
      <td>{maskedCnpj}</td>
      {/* <td>C</td> */}
      <td>{item.nome_parceiro}</td>
      <td>{item.email_parceiro}</td>
      <td>{item.prazo_producao} dias</td>
      <td>{parseFloat(item.percentual_desconto).toFixed(2)} %</td>
      <td>{formatPrice(item.valor_sem_desconto)}</td>
      <td>{formatPrice(item.valor_pedido)}</td>
    </tr>
  )
}
