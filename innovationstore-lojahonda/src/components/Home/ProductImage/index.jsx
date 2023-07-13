import { ProductImageContent } from "./styles"

export function ProductImage({ url, title, subtitle = false, description, position }) {
  return (
    <ProductImageContent target="_blank" background={url} backgroundPositionX={position}>
      <div>
        <h1>{title}</h1>
        <span>{subtitle}</span>
        <p>{description}</p>
        <button>Confira!</button>
      </div>
    </ProductImageContent>
  )
}
