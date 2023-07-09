import React from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import { useCart } from "../../../../contexts/useCart"
import { ContentIcon } from "../../styles"
import { BsFillCartFill } from "react-icons/bs"
import { HeaderContentCart } from "./styles"

const Index = (props) => {
  const { cart } = useCart()

  const router = useRouter()

  return (
    <Link href="/carrinho">
      <HeaderContentCart>
        <ContentIcon>
          <BsFillCartFill size={20} color="#FC5000" />
        </ContentIcon>
        <div>
          <span>{cart?.length}</span>
          <p>{cart?.length} ITENS</p>
        </div>
      </HeaderContentCart>
    </Link>
  )
}

export default Index
