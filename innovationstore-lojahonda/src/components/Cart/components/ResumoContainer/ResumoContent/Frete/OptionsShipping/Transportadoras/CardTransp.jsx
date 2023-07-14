import { Button, Flex, Grid, Text } from "@chakra-ui/react"

export function CardTransp({ nome, prazo, frete, logo, onClick }) {
  return (
    <>
      <Flex
        w="100%"
        textAlign="left"
        justifyContent="space-between"
        alignItems="flex-start"
        border="1px solid #CFCFCF"
        paddingBlock="7px"
        paddingLeft="0.3125rem"
        borderRadius="6px"
        cursor="pointer"
        color="#818181"
        _hover={{
          transition: "all 0.2s ease-in-out",
          transform: "scale(1.02)",
          border: "1px solid #cc0000",
        }}
        bg="transparent"
        onClick={onClick}
        _focus={{
          outline: "none",
        }}
        position={"relative"}
      >
        <Grid w="100%" templateColumns="2fr 1.5fr 1fr">
          <Text as="span" fontSize="0.6875rem">
            {nome}
          </Text>
          <Text as="span" fontSize="11px" textTransform="lowercase" color="#818181">
            {prazo}
            {parseInt(prazo) === 1 ? " Dia útil" : " Dias úteis"}
          </Text>
          <Text as="span" color="#414042" fontSize="0.6875rem" fontWeight={"bold"} textAlign={"center"}>
            {frete}
          </Text>
        </Grid>
      </Flex>
    </>
  )
}
