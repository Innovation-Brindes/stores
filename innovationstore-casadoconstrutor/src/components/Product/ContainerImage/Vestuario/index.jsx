import * as S from "./styles"
import { ModalVestuario } from "./ModalVestuario"

export function Vestuario({ product }) {
  return (
    <S.ButtonVestuarioContainer>
      <ModalVestuario product={product} />
    </S.ButtonVestuarioContainer>
  )
}
