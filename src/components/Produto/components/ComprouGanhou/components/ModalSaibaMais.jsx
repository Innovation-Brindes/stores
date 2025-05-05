import {
  Box,
  Button,
  Flex,
  Icon,
  Image,
  Modal as ChakraModal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useMediaQuery,
  Text,
  useDisclosure,
} from "@chakra-ui/react"
import React, { useEffect } from "react"
import { FaBeer } from "react-icons/fa"
import { CiForkAndKnife } from "react-icons/ci"
import { CgGlassAlt } from "react-icons/cg"
import { IoHeadsetSharp } from "react-icons/io5"
import { BsFillBoomboxFill } from "react-icons/bs"
import { MenuItem } from "./MenuItem"
import { Caneca } from "./Caneca"
import { KitChurrasco } from "./KitChurrasco"
import { Copo } from "./Copo"
import { Fone } from "./Fone"
import { CaixaDeSom } from "./CaixaDeSom"
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"

export function ModalSaibaMais({ defaultValue }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selected, setSelected] = React.useState(defaultValue)
  const [mobile, setMobile] = React.useState(false)
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)")
  const [next, setNext] = React.useState(0)
  const [prev, setPrev] = React.useState(0)

  useEffect(() => {
    setMobile(!isLargerThan768)
  }, [isLargerThan768])

  const indexSelected = {
    0: "caneca",
    1: "kit-churrasco",
    2: "copo-termic",
    3: "fone",
    4: "caixa-de-som",
  }

  function nextSlide() {
    for (let i = 0; i <= 4; i++) {
      if (next === 4) {
        setNext(0)
        setSelected(indexSelected[next])
      } else {
        setNext(next + 1)
        setSelected(indexSelected[next])
      }
    }
  }

  function prevSlide() {
    //fazer loop para voltar ao inicio
    for (let i = 0; i <= 4; i++) {
      if (prev === 0) {
        setPrev(4)
        setSelected(indexSelected[prev])
      } else {
        setPrev(prev - 1)
        setSelected(indexSelected[prev])
      }
    }
  }

  return (
    <>
      <Text
        fontSize={".8rem"}
        m={0}
        as={"p"}
        fontWeight={"normal"}
        color={"gray.900"}
        onClick={onOpen}
        textDecoration={"underline"}
        _hover={{
          cursor: "pointer",
        }}
      >
        Saiba +
      </Text>

      <ChakraModal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalOverlay />
        <ModalContent position={"relative"} overflow={"hidden"} {...(mobile && { minHeight: "100vh" })}>
          {!mobile && (
            <ModalHeader
              fontSize={".8rem"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
              mt={"2rem"}
              flexWrap={"wrap"}
            >
              <MenuItem
                title={"Caneca de Metal"}
                value={"1.000,00"}
                icon={FaBeer}
                selected={selected === "caneca"}
                onClick={() => setSelected("caneca")}
              />
              <MenuItem
                title={"Kit churrasco"}
                value={"3.000,00"}
                icon={CiForkAndKnife}
                selected={selected === "kit-churrasco"}
                onClick={() => setSelected("kit-churrasco")}
              />
              <MenuItem
                title={"Copo térmico"}
                value={"5.000,00"}
                icon={CgGlassAlt}
                selected={selected === "copo-termic"}
                onClick={() => setSelected("copo-termic")}
              />
              <MenuItem
                title={"Fone de ouvido"}
                value={"10.000,00"}
                icon={IoHeadsetSharp}
                selected={selected === "fone"}
                onClick={() => setSelected("fone")}
              />
              <MenuItem
                title={"Caixa de som"}
                value={"30.000,00"}
                icon={BsFillBoomboxFill}
                selected={selected === "caixa-de-som"}
                onClick={() => setSelected("caixa-de-som")}
              />
            </ModalHeader>
          )}
          <ModalCloseButton
            sx={{
              bgColor: "#017D9D",
              color: "#fff",
              fontSize: "1rem",
              fontWeight: "bold",
              borderRadius: "100%",
              width: "2rem",
              height: "2rem",
            }}
            _focus={{
              outline: "none",
            }}
            _hover={{
              filter: "brightness(1.2)",
            }}
          />
          <ModalBody pb={6} paddingRight={"3rem"} mt={"2rem"} {...(!mobile && { minHeight: "30rem" })}>
            <Flex alignItems={"flex-start"}>
              <Flex flexDir={"column"} alignItems={"flex-start"} gap={"2rem"} ml={"auto"}>
                <Text as={"h1"} fontSize={"3.5rem"} fontWeight={"bold"} lineHeight={"3rem"} color={"#017D9D"}>
                  Aqui você <br />{" "}
                  <Text as={"span"} color={"#ADD353"}>
                    ganha
                  </Text>
                  mais!
                </Text>
                {selected === "caneca" && <Caneca />}
                {selected === "kit-churrasco" && <KitChurrasco />}
                {selected === "copo-termic" && <Copo />}
                {selected === "fone" && <Fone />}
                {selected === "caixa-de-som" && <CaixaDeSom />}
              </Flex>
            </Flex>
          </ModalBody>
          <Image
            src={`/images/produto/saiba-mais/${selected}.png`}
            transform={!mobile && "translateX(-3rem)"}
            w={"20rem"}
            position={!mobile && "absolute"}
            bottom={"2rem"}
            left={"1.5rem"}
            {...(mobile && { margin: "0 auto" })}
          />
          {/*{selected === "caixa-de-som" && (*/}
          {/*  <Image*/}
          {/*    src={`/images/produto/saiba-mais/caixa-de-som-2.png`}*/}
          {/*    transform={"translateX(-3rem)"}*/}
          {/*    w={"20rem"}*/}
          {/*    position={"absolute"}*/}
          {/*    bottom={"2rem"}*/}
          {/*    left={"1.5rem"}*/}
          {/*  />*/}
          {/*)}*/}
          {mobile && (
            <>
              <Icon
                onClick={prevSlide}
                as={AiOutlineArrowLeft}
                position={"fixed"}
                top={"50%"}
                left={".5rem"}
                transform={"translateY(-50%)"}
                fontSize={"2rem"}
                color={"#017D9D"}
              />
              <Icon
                as={AiOutlineArrowRight}
                onClick={nextSlide}
                position={"fixed"}
                top={"50%"}
                right={".5rem"}
                transform={"translateY(-50%)"}
                fontSize={"2rem"}
                color={"#017D9D"}
              />
            </>
          )}
          <Box
            position={"absolute"}
            w={"23rem"}
            h={"23rem"}
            bgColor={"#017D9D"}
            borderRadius={"50px"}
            left={"-10rem"}
            bottom={"-2rem"}
            transform={"rotate(45deg)"}
            zIndex={-1}
          ></Box>
        </ModalContent>
      </ChakraModal>
    </>
  )
}
