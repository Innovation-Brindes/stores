import { formatPrice } from "../../../../utils/formatPrice"
import * as S from "../styles"
import { format } from "date-fns"

export function CardMobile({ item }) {
  const maskedCnpj = item.cpfcnpj_parceiro.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5")

  return (
    <S.CardRelatorioMobile>
      <h2>
        <span>Pedido:</span> {item.numero_pedido}
      </h2>
      <p>
        <span>Data:</span> {format(new Date(item.dt_ultatu), "dd/MM/yyyy")}
      </p>
      <p>
        <span>Razão Social:</span> {item.razao_social}
      </p>
      <p>
        <span>CNPJ:</span> {maskedCnpj}
      </p>
      <p>
        <span>Responsável:</span> {item.nome_parceiro}
      </p>
      <p>
        <span>E-mail:</span> {item.email_parceiro}
      </p>
      <p>
        <span>Prazo de produção:</span> {item.prazo_producao}
      </p>
      <p>
        <span>Percentual de desconto:</span> {} {parseFloat(item.percentual_desconto).toFixed(2)} %
      </p>
      <p>
        <span>Valor com desconto:</span> {formatPrice(item.valor_pedido)}
      </p>
      <p>
        <span>Valor sem desconto:</span> {formatPrice(item.valor_sem_desconto)}
      </p>
    </S.CardRelatorioMobile>
  )
}
