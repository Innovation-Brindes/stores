import { Box, Text, useMediaQuery } from "@chakra-ui/react"
import { formatPrice } from "../../../../../../utils/formatPrice"
import React from "react"

export function Card({ index, parcela, taxas }) {
  const [isMobile] = useMediaQuery("(max-width: 768px)")
  const [mobile, setMobile] = React.useState(false)

  React.useEffect(() => {
    setMobile(isMobile)
  }, [isMobile])

  return (
    <Box
      key={index}
      bgColor={index % 2 === 0 ? "#F5F5F5" : "white"}
      paddingInline={"1rem"}
      paddingBlock={".5rem"}
      mt={index !== 0 && ".5rem"}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Text as={"span"} color={"gray.700"} fontSize={"1rem"}>
        {index + 1}x de {formatPrice(parseFloat(parcela))}{" "}
        {index === 0 && (
          <Text as={"span"} color={"#95C620"} fontSize={".8rem"}>
            sem juros
          </Text>
        )}
        {index !== 0 && (
          <>
            <Text as={"span"} color={"#95C620"} fontSize={".8rem"} display={mobile && "inline-block"}>
              com juros de {taxas[index + 1] + "% a.m."}
            </Text>
          </>
        )}
      </Text>
      <Text as={"span"} color={"gray.700"} fontSize={"1rem"} fontWeight={"500"}>
        {formatPrice(parseFloat(parcela) * (index + 1))}
      </Text>
    </Box>
  )
}
