import React from "react"
import Link from "next/link"
import { Container, Content, Divider } from "./styles"

export const LinksHeader = () => {
  return (
    <Container>
      <Content>
        <Link href="/lojahonda/acompanhe-seu-pedido">Status do seu pedido</Link>
      </Content>
    </Container>
  )
}
