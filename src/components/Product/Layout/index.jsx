import { LayoutBackground, ProductContainer, ProductContent } from "./styles"

export function Layout({ children }) {
  return (
    <LayoutBackground>
      <ProductContainer>
        <ProductContent>{children}</ProductContent>
      </ProductContainer>
    </LayoutBackground>
  )
}
