import { ColorInputComponent } from "./styles"

export function ColorInput({ value, handleSelectedColor, isSelected }) {
  const isDisabled = parseInt(value?.estoque_disponivel) === 0

  return (
    <>
      <ColorInputComponent
        backgroundColor={value?.rgb_cores}
        disabled={isDisabled}
        onClick={() => handleSelectedColor(value)}
        selectedColor={isSelected}
      />
    </>
  )
}
