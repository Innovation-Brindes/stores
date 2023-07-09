import * as S from "../../styles"

export function TitleStep({ title }) {
  return (
    <h2>
      <S.AccordionButtonContent>
        <span>{title}</span>
        <S.ButtonEdit>
          Editar{" "}
          <S.Icon>
            <S.AccordionIconArea />
          </S.Icon>
        </S.ButtonEdit>
      </S.AccordionButtonContent>
    </h2>
  )
}
