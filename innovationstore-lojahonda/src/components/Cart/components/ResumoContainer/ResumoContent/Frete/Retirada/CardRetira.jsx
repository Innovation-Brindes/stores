import { Button, Flex, Grid, Icon, Text } from "@chakra-ui/react"
import { useState } from "react"
import { AiOutlineEnvironment } from "react-icons/ai"
import { FaMapMarkerAlt } from "react-icons/fa"
import { GoLocation } from "react-icons/go"

export function CardRetira({ nome, estado, enderecoCompleto, estadoECep, valor, prazo, onClick }) {
  const [effectHover, setEffectHover] = useState(false)

  return (
    <>
      <Flex
        w="100%"
        flexDir="column"
        alignItems="center"
        justifyContent={"flex-start"}
        border="1px solid #cfcfcf"
        paddingBlock=".8rem"
        paddingInline=".4rem"
        borderRadius="6px"
        mt=".4rem"
        cursor={"pointer"}
        _hover={{
          bgColor: "#f5f5f5",
          transition: "all 0.2s ease-in-out",
        }}
        onMouseEnter={() => setEffectHover(true)}
        onMouseLeave={() => setEffectHover(false)}
        onClick={onClick}
      >
        <Grid w="100%" templateColumns="2fr 1fr 1fr">
          <Text w="87px">{estado}</Text>
          <Text
            position="relative"
            paddingRight="1.3rem"
            right={effectHover ? "-.3rem" : "0"}
            transition="all 0.2s ease-in-out"
            fontWeight="bold"
            {...(valor === "GRÁTIS" && {
              transform: "translateX(-.7rem)",
            })}
          >
            {prazo} {prazo > 1 ? "dias" : "dia"}
          </Text>
          <Text
            marginRight="1.8rem"
            transition="all 0.2s ease-in-out"
            position="relative"
            right={effectHover ? ".5rem" : "0"}
            {...(valor === "GRÁTIS" && {
              bgColor: "#00AFFF",
              color: "#fff",
              paddingBlock: ".2rem",
              paddingInline: ".5rem",
              borderRadius: "6px",
              fontWeight: "bold",
              transform: "translateX(.5rem)",
            })}
            fontWeight="bold"
          >
            {valor}
          </Text>
        </Grid>
        <Flex w="100%" justifyContent="flex-start" alignItems="center" gap={1}>
          <Icon as={GoLocation} fontSize="1.2rem" color="#00AFFF" />
          <Flex flexDir="column" textTransform="capitalize">
            <Text m="0">{nome}</Text>
            <Text m="0">{enderecoCompleto}</Text>
            <Text paddingRight="2.375rem" m="0">
              {estadoECep}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
