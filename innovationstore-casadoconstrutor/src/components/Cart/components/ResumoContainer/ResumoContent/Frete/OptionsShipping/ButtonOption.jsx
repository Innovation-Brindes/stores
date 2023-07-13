import { Flex, Icon, Text } from "@chakra-ui/react"
import { GoLocation } from "react-icons/go"
import { useCart } from "../../../../../../../contexts/useCart"

export function ButtonOption({ label, color, bgColor, onClick, borderColor }) {
  const { handleStepCart } = useCart()

  return (
    <Flex
      as="div"
      alignItems="center"
      justifyContent="center"
      w="100%"
      border={`1px solid`}
      borderColor={borderColor}
      bg={bgColor}
      color={color}
      borderRadius="10px"
      maxW="13.125rem"
      m="0 auto"
      paddingBlock=".6rem"
      gap={2}
      cursor="pointer"
      transition="all 0.2s ease-in-out"
      onClick={onClick}
    >
      {label === "Trocar endereço" && <Icon as={GoLocation} fontSize="1.5rem" />}
      <Text m="0" fontSize="15px" color={color} fontWeight="700">
        {label}
      </Text>
    </Flex>
  )
}
