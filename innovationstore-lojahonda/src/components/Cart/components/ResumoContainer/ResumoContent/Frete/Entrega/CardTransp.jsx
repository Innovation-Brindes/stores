import { Button, Grid, Text } from "@chakra-ui/react"

export function CardTransp({ nome, prazo, frete, logo, onClick }) {
  return (
    <>
      <Button
        w="100%"
        textAlign="left"
        justifyContent="space-between"
        alignItems="flex-start"
        border="1px solid #CFCFCF"
        paddingBlock="0.775rem"
        paddingLeft="0.3125rem"
        borderRadius="6px"
        cursor="pointer"
        color="#818181"
        _hover={{
          transition: "all 0.2s ease-in-out",
          transform: "scale(1.02)",
          border: "1px solid #E2001B",
          color: "#E2001B",
        }}
        bg="transparent"
        onClick={onClick}
        _focus={{
          outline: "none",
        }}
        position={"relative"}
      >
        <Grid w="100%" templateColumns="2fr .9fr 1fr">
          <Text as="span" fontSize="0.6875rem">
            {nome}
          </Text>
          <Text as="span" fontSize="0.6875rem" fontWeight={"bold"} textTransform={"uppercase"}>
            {prazo} dias
          </Text>
          <Text as="span" fontSize="0.6875rem" fontWeight={"bold"} textAlign={"center"}>
            {frete}
          </Text>
        </Grid>
      </Button>
    </>
  )
}
