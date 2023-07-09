import { Grid, GridItem } from "@chakra-ui/react"

export function Divider() {
  return (
    <Grid gap={2} templateColumns="repeat(21, 1fr)" paddingBlock="10px">
      {Array.from({ length: 21 }).map((_, index) => (
        <GridItem key={index} w="100%" h="1px" bg="#cecece" />
      ))}
    </Grid>
  )
}
