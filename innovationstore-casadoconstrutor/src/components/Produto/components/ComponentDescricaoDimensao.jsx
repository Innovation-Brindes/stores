import { Box, Button, Collapse, Flex, Text, useMediaQuery } from "@chakra-ui/react"
import React, { forwardRef, useEffect, useState } from "react"
import { DivComponentDesktop, DivComponentMobile } from "../styles"
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai"

const ComponentDescricaoDimensao = forwardRef((props, ref) => {
  const [show, setShow] = useState(false)
  const [mobileView, setmobileView] = useState(false)
  const [widthScreen] = useMediaQuery("(max-width:1390px)")

  useEffect(() => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      setmobileView(true)
      setShow(true)
    } else {
      setmobileView(false)
    }
  }, [])

  const handleToggle = () => setShow(!show)

  const clickVerMais = () => {
    handleToggle()
    if (widthScreen) {
      window.scrollTo(0, 300)
    }
  }
  return (
    <>
      <DivComponentMobile>
        <Box color="#414042" mt={"15rem"} w="400px" h="auto" position={"relative"} ml={"auto"} mr={"auto"}>
          <Text pl="25px">Descrição</Text>
          <Box mt="-10px" w="90%" mr="auto" ml="auto" borderBottom="1px solid #414042"></Box>
          <Collapse position="relative" bgColor="#414042" startingHeight={48} in={show}>
            <Text position="relative" fontSize="13px" pt="10px" w="96%" pl="25px" noOfLines={show ? "none" : 2}>
              {props.state.dados.caracteristicas}
            </Text>
          </Collapse>
          <Flex w="100%" justify="start" display={mobileView ? "none" : "flex"}>
            <Button
              color="#8ec505"
              leftIcon={show ? <AiFillCaretUp /> : <AiFillCaretDown />}
              w="100px"
              h="18px"
              ml="25px"
              borderColor=" #8ec505"
              mt={show ? "-5px" : "5px"}
              variant="outline"
              _hover={{ opacity: "0.8" }}
              _active={{ transform: "scale(0.90)" }}
              boxShadow="none !important"
              size="sm"
              onClick={handleToggle}
            >
              Ver {show ? "menos." : "mais..."}
            </Button>
          </Flex>

          <Text mt={show ? "-0px" : "0px"} pt="40px" pl="25px">
            Dimensões
          </Text>
          <Box mt="-10px" w="90%" mr="auto" ml="auto" borderBottom="1px solid #414042"></Box>
          <Flex flexDir="column" pt="10px" w="95%" justify="space-between">
            <Text fontSize="13px" pl="25px">
              <strong>{props.state.dados.dimensoes}</strong>
            </Text>
            <Text mt="-10px" w="100%" pl="25px" fontSize="10px">
              (Esse produto é produzido por diversos fabricantes, portanto as medidas e o peso apresentados podem sofrer
              pequenas alterações.)
            </Text>
          </Flex>
        </Box>
      </DivComponentMobile>
      <DivComponentDesktop>
        <Box color="#414042" mt="120px" w={["400px", "400px", "400px", "100%", "100%"]} h="auto" mb="20px">
          <Text pl="25px">Descrição</Text>
          <Box mt="-10px" w="90%" mr="auto" ml="auto" borderBottom="1px solid #414042"></Box>
          <Collapse position="relative" bgColor="#414042" startingHeight={55} in={show}>
            <Text position="relative" fontSize="13px" pt="10px" w="96%" pl="25px" noOfLines={show ? "none" : 2}>
              {props.state.dados.caracteristicas}
            </Text>
          </Collapse>
          <Flex w="100%" justify="start">
            <Button
              fontSize="11px"
              fontFamily="Gisha Regular"
              color="#8ec505"
              leftIcon={show ? <AiFillCaretUp /> : <AiFillCaretDown />}
              w="100px"
              h="18px"
              ml="25px"
              borderColor=" #8ec505"
              mt={show ? "-5px" : "5px"}
              variant="outline"
              _hover={{ opacity: "0.8" }}
              _active={{ transform: "scale(0.90)" }}
              boxShadow="none !important"
              size="sm"
              onClick={() => clickVerMais()}
            >
              Ver {show ? "menos." : "mais..."}
            </Button>
          </Flex>
        </Box>
      </DivComponentDesktop>
    </>
  )
})

export default ComponentDescricaoDimensao
