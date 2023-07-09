import { Box, Grid, useMediaQuery } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useCart } from "../../../contexts/useCart"

export function Layout({ children }) {
  const [isLargerThan768] = useMediaQuery("(max-width: 768px)")
  const [isLargerThan1354] = useMediaQuery("(max-width: 1354px)")
  const { cart } = useCart()

  const [isMedia, setIsMedia] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(isLargerThan768)
  }, [isLargerThan768])

  useEffect(() => {
    setIsMedia(isLargerThan1354)
  }, [isLargerThan1354])

  return (
    <Box maxW="2100px" m="0 auto">
      <Grid
        gridTemplateColumns={isMedia ? "1fr" : "1fr 320px"}
        display={isMedia ? "flex" : "grid"}
        flexDirection="column"
        maxWidth="1200px"
        w="100%"
        m="0 auto"
        gap={!isMedia && "0.75rem"}
        minH="calc(100vh - 14.5rem)"
        position="relative"
        fontFamily={"Open Sans, sans-serif"}
        bgColor="#F5F5F5"
        minW="100%"
        paddingInline={isMobile ? ".9rem" : "1.875rem"}
      >
        {children}
      </Grid>
    </Box>
  )
}
