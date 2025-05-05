import * as S from "./styles";

export function ConfirmarPedido({
  isMobile = false,
  label,
  disabled = false,
  color,
  onClick,
}) {
  return isMobile ? (
    <S.Button colorScheme="blue" onClick={onClick} disabled={disabled}>
      {label}
    </S.Button>
  ) : (
    <S.Button
      width="350px"
      colorScheme="blue"
      disabled={disabled}
      color={color}
      onClick={onClick}
    >
      {label}
    </S.Button>
  );
}
