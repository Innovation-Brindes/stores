import * as S from "./styles"

export function SkeletonRoot({ height, children }) {
  return <S.Skeleton height={height}>{children}</S.Skeleton>
}
