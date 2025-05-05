import { Flex, Text, useMediaQuery } from "@chakra-ui/react"
import { useEffect } from "react"
import { useState } from "react"

export function HeaderCart() {
  const [isLargerThan768] = useMediaQuery("(max-width: 768px)")
  const [isLargerThan1500] = useMediaQuery("(max-width: 1500px)") // 1500px

  const [isMedia, setIsMedia] = useState(false)
  const [isLarge, setIsLarge] = useState(false)

  useEffect(() => {
    setIsMedia(isLargerThan768)
    setIsLarge(isLargerThan1500)
  }, [isLargerThan768, isLargerThan1500])

  return (
    <Flex
      bgColor="#FFF"
      marginTop=".163rem"
      paddingBlock="2.313rem"
      paddingInline={isLarge ? "1rem" : "15.438rem"}
      borderRadius="5px"
      justifyContent="center"
      alignItems="center"
      mt={!isMedia && "2.1rem"}
    >
      <Flex flexDir="column" gap={"7px"}>
        <Text
          as="h1"
          fontSize="1.25rem"
          {...(isMedia && { textAlign: "center" })}
          fontWeight="bold"
          textTransform={"uppercase"}
          letterSpacing="0.1rem"
          bgColor="#cc0000"
          color="white"
          paddingBlock=".4rem"
          paddingInline={isMedia ? "1rem" : "5rem"}
          borderRadius="5px"
          m="0"
        >
          Bem-vindo ao seu carrinho!
        </Text>
        <Flex flexDir="column" mt=".8rem" gap={1}>
          <Text
            as="h2"
            fontSize="1.25rem"
            fontWeight="bold"
            textTransform={"uppercase"}
            color="#414042"
            textAlign="center"
            m="0"
          >
            Falta pouco para finalizar!
          </Text>

          <Text
            color="#414042"
            fontSize="14px"
            letterSpacing="0px"
            {...(isMedia && { textAlign: "center" })}
            textAlign="center"
            m="0"
          >
            {!isMedia ? (
              "Confira seus itens e conclua seu orçamento agora mesmo!"
            ) : (
              <>
                Confira seus itens e conclua seu orçamento <br /> agora mesmo!
              </>
            )}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}
