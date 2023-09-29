import { PiNotepadFill } from "react-icons/pi"
import * as S from "../styles"
import { AiFillDollarCircle, AiOutlineDollarCircle } from "react-icons/ai"
import { formatPrice } from "../../../../utils/formatPrice"

export function Summary({ summary }) {
  return (
    <S.RelatoriosSummary>
      <S.RelatoriosSummaryCard>
        <S.Wrapper>
          <PiNotepadFill size={30} />
          <h2>Total de pedidos:</h2>
          <span>{summary.totalPedidos}</span>
        </S.Wrapper>
      </S.RelatoriosSummaryCard>
      {/* <S.RelatoriosSummaryCard>
        <S.Wrapper>
          <AiOutlineDollarCircle size={30} />
          <h2>Valor total:</h2>
          <span>{formatPrice(summary.totalValor)}</span>
        </S.Wrapper>
      </S.RelatoriosSummaryCard> */}
      <S.RelatoriosSummaryCard>
        <S.Wrapper>
          <AiFillDollarCircle size={30} />
          <h2>Desconto adquirido:</h2>
          <span>{formatPrice(summary.descontoAdquirido)}</span>
        </S.Wrapper>
      </S.RelatoriosSummaryCard>
      <S.RelatoriosSummaryCard>
        <S.Wrapper>
          <AiFillDollarCircle size={30} />
          <h2>Total com Desconto:</h2>
          <span>{formatPrice(summary.totalValor)}</span>
        </S.Wrapper>
      </S.RelatoriosSummaryCard>
      <S.RelatoriosSummaryCard>
        <S.Wrapper>
          <AiFillDollarCircle size={30} />
          <h2>Total sem Desconto:</h2>
          <span>{formatPrice(summary.totalSemDesconto)}</span>
        </S.Wrapper>
      </S.RelatoriosSummaryCard>
    </S.RelatoriosSummary>
  )
}
