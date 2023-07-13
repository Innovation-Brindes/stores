import * as S from "./styles"

export function ButtonRoot({ children, label, color, background, onClick, border, type, isDisabled, textSize }) {
  return (
    <S.Button
      background={background}
      color={color}
      border={background || border}
      onClick={onClick}
      type={type}
      disabled={isDisabled}
      textSize={textSize}
    >
      {label}
      <span>{children}</span>
    </S.Button>
  )
}
