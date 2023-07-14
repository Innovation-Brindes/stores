import { Flex, Grid, Text } from "@chakra-ui/react"

export function ClienteRetira({ handleStepCartValue }) {
  return (
    <Grid
      fontSize="11px"
      w="100%"
      templateColumns="2fr 2fr 1fr"
      gap="6px"
      bgColor="#fff"
      color="#cc0000"
      paddingInline="10px"
      cursor={"pointer"}
      borderRadius="6px"
      border="1px solid #cc0000"
      onClick={() => handleStepCartValue("clienteRetira")}
      height="35px"
      alignItems="center"
    >
      <Flex flexDir="column">
        <Flex textTransform="uppercase" flexDir="column">
          <Text m="0" fontWeight="bold" fontSize="11px">
            Retire / Fábrica{" "}
          </Text>
          <Text as="span" fontSize="9px" color="#919191">
            São paulo - Capital
          </Text>
        </Flex>
      </Flex>
      <Text as="span" fontSize="11px" color="#919191" textTransform={"lowercase"} paddingLeft="1.3rem">
        1 dia útil
      </Text>
      <Text as="span" fontSize="11px" color="#919191" textTransform={"lowercase"} whiteSpace="nowrap">
        sem custo
      </Text>
    </Grid>
  )
}
