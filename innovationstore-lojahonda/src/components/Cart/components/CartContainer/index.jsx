import { Button, Flex, Text } from "@chakra-ui/react"
import { HeaderCart } from "./HeaderCart"
import { CartItem } from "./CartItem"
import { useCart } from "../../../../contexts/useCart"
import { BsPlusCircleFill } from "react-icons/bs"
import Link from "next/link"

export function CartContainer() {
  const { cart } = useCart()

  return (
    <div>
      <HeaderCart />
      {cart?.map((item, index) => {
        if (!item.embalagem) {
          return <CartItem key={item.id} item={item} index={index} />
        }
      })}

      <Link href="/">
        <Button
          marginBlock="1rem"
          ml="auto"
          display="flex"
          alignItems="center"
          gap="0.5rem"
          bgColor="#fff"
          _hover={{ bgColor: "#fff" }}
          _active={{ bgColor: "#fff" }}
          _focus={{ bgColor: "#fff" }}
        >
          <Flex paddingInline="0.688rem" alignItems="center" gap={2}>
            {" "}
            <BsPlusCircleFill color="#E2001B" size={25} />
            <Text m="0" fontWeight="normal" color="#414042">
              adicionar mais produto
            </Text>
          </Flex>
        </Button>
      </Link>
    </div>
  )
}
