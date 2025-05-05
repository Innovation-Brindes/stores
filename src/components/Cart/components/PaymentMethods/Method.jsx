import { Flex, Icon, Text } from "@chakra-ui/react"
import { formatPrice } from "../../../../utils/formatPrice"

export function Method({ icon, color, value, offer = false }) {
  return (
    <Flex alignItems={"center"} gap={2}>
      <>
        <Icon as={icon} color={color} fontSize={"1.5rem"} />
        <Text fontSize={".9rem"} fontWeight={"bold"} ml={".5rem"} m={0}>
          {formatPrice(parseFloat(value))}
        </Text>
        {offer && (
          <Text
            fontSize={".9rem"}
            fontWeight={"normal"}
            ml={".5rem"}
            m={0}
            paddingInline={".5rem"}
            paddingBlock={".1rem"}
            backgroundColor={"#D8ECD6"}
          >
            {offer}
          </Text>
        )}
      </>
    </Flex>
  )
}
