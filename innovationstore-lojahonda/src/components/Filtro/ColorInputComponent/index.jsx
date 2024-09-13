import * as S from "./styles"

export function ColorInputComponent({ onClick, color, selected }) {
  return <S.ColorInputComponent color={color} onClick={onClick} selectedColor={selected} />
}
