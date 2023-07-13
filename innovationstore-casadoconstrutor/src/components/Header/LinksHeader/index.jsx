import React from "react"
import Link from "next/link"
import { Container, Content, Divider } from "./styles"

// import { colorBaseUltraRapido } from './../../UltraRapido/component/FlexFiltroUltraRapido/styles';

export const LinksHeader = () => {
  return (
    <Container>
      <Content>
        <Link href="/acompanhe-seu-pedido">Status do seu pedido</Link>
        <Divider />
        <a href="/blog">Blog</a>
      </Content>
    </Container>
  )
}
