import { Flex, Text, useDisclosure, useMediaQuery, keyframes, Image, Icon } from "@chakra-ui/react"
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/modal"
import React, { useEffect, useState } from "react"
import { formatPrice } from "../../utils/formatPrice"
import { headerLabels } from "./headerLabels"
import { Header } from "./components/Header"
import { HeaderMobile } from "./components/HeaderMobile"
import { FcNext, FcPrevious } from "react-icons/fc"

export function ModalCompreGanhe({ value }) {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)")
  const [isMobile, setIsMobile] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [activeLabel, setActiveLabel] = useState(value)
  const [data, setData] = useState("")

  const animation = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
    `

  function changeLabel(value) {
    const getObject = headerLabels.find((item) => item.value === value.value)

    setActiveLabel(value.value)
    setData(getObject)
  }

  useEffect(() => {
    setIsMobile(!isLargerThan768)
  }, [isLargerThan768])

  useEffect(() => {
    setActiveLabel(value)

    const initialValue = headerLabels.find((item) => item.value === value)

    setData(initialValue)
  }, [isOpen])

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

      <Modal isOpen={isOpen} onClose={onClose} size={!isMobile ? "5xl" : "sm"} fontFamily={"Open Sans, sans-serif"}>
        <ModalOverlay />
        <ModalContent
          borderRadius={!isMobile ? 0 : "2rem"}
          position={"relative"}
          {...(!isMobile
            ? {
                _before: {
                  content: "''",
                  position: "absolute",
                  width: "100%",
                  height: "3px",
                  backgroundColor: "#F5F5F5",
                  top: "4.35rem",
                  left: "0",
                },
              }
            : {
                height: "calc(100vh - 6.5rem)",
              })}
        >
          {isMobile && (
            <>
              <HeaderMobile isMobile={isMobile} data={data} activeLabel={activeLabel} />
              <Image
                src={"/images/compre-ganhe/background-mobile.png"}
                position={"absolute"}
                top={"50%"}
                left={"50%"}
                transform={"translate(-50%, -50%)"}
              />
            </>
          )}
          <Header isMobile={isMobile} changeLabel={changeLabel} activeLabel={activeLabel} />
          <ModalCloseButton
            right={!isMobile ? "-3rem" : ".4rem"}
            top={!isMobile ? "-1rem" : "-3rem"}
            bg={"#FFFFFF"}
            borderRadius={"50%"}
            _hover={{
              bg: "#FFFFFF",
              color: "#000000",
            }}
          />
          <ModalBody
            paddingInline={isMobile ? "0" : "40px"}
            paddingTop={isMobile && "2rem"}
            fontFamily={"Open sans"}
            {...(!isMobile && {
              maxHeight: "600px",
              minHeight: "495px",
              height: "100%",
            })}
            display={"grid"}
            gridTemplateColumns={isMobile ? "1fr" : "1.5fr 1fr"}
            position={"relative"}
          >
            <Flex
              display={isMobile ? "flex" : "none"}
              position={"absolute"}
              top={"50%"}
              left={"50%"}
              transform={"translate(-50%, -50%)"}
              alignItems={"center"}
              width={"100%"}
              paddingInline={"2rem"}
              paddingBottom={"3rem"}
              justifyContent={"space-between"}
              zIndex={"99999"}
            >
              <Flex
                width={"43px"}
                height={"43px"}
                borderRadius={"50%"}
                bgColor={"#fff"}
                alignItems={"center"}
                justifyContent={"center"}
                boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
                onClick={() =>
                  changeLabel({
                    value: headerLabels.find((item) => item.value === activeLabel - 1) ? activeLabel - 1 : 5,
                  })
                }
              >
                <Icon as={FcPrevious} fill={"#CC0000"} stroke={"#CC0000"} fontSize={"2rem"} />
              </Flex>
              <Flex
                height={"43px"}
                width={"43px"}
                borderRadius={"50%"}
                bgColor={"#fff"}
                alignItems={"center"}
                justifyContent={"center"}
                boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
                onClick={() =>
                  changeLabel({
                    value: headerLabels.find((item) => item.value === activeLabel + 1) ? activeLabel + 1 : 1,
                  })
                }
              >
                <Icon as={FcNext} color={"#CC0000"} fontSize={"2rem"} />
              </Flex>
            </Flex>
            <Text
              as={"h1"}
              paddingLeft={!isMobile && "34px"}
              m={0}
              color={"#CC0000"}
              fontSize={"42px"}
              textAlign={!isMobile ? "left" : "center"}
              fontWeight={"bold"}
              position={"relative"}
              zIndex={!isMobile && "3"}
            >
              Aqui você <br /> <span style={{ color: "#CC0000" }}> ganha </span> mais!
            </Text>
            <Text
              display={!isMobile ? "block" : "none"}
              fontSize={"14px"}
              color={"#FFFFFF"}
              m={0}
              position={"absolute"}
              left={activeLabel === 5 ? "62px" : "49px"}
              top={"50%"}
              transform={"translateY(-50%)"}
              zIndex={"3"}
            >
              Receba presentes, <br /> incríveis a <br /> cada compra!
            </Text>
            {Array.from({ length: 5 }).map((_, index) => (
              <Image
                src={`https://imgproductioncrm.s3.us-east-2.amazonaws.com/compre-ganhe-${
                  isMobile ? "mobile" : "desk"
                }-${index + 1}.png`}
                transition={"all .3s ease-in-out"}
                opacity={activeLabel === index + 1 ? 1 : 0}
                visibility={activeLabel === index + 1 ? "visible" : "hidden"}
                alt={"Compre e Ganhe"}
                position={"absolute"}
                bottom={!isMobile && ".1rem"}
                top={isMobile && "50%"}
                left={!isMobile ? ".7rem" : "50%"}
                transform={isMobile && "translate(-50%, -50%)"}
                animation={`${animation} 1s ease-in-out`}
                {...(isMobile && {
                  transform: activeLabel === 2 ? "rotate(45deg) translate(-80%, -10%)" : "translate(-50%, -50%)",
                })}
              />
            ))}
            <Flex
              flexDir={"column"}
              alignItems={"center"}
              {...(isMobile && {
                position: "absolute",
                bottom: activeLabel === 5 ? "0" : "2.6rem",
                left: "50%",
                transform: "translateX(-50%)",
                width: "100%",
              })}
            >
              <Flex
                w={"230px"}
                h={"230px"}
                borderRadius={"50%"}
                bgColor={"#CC0000"}
                color={"#FFFFFF"}
                alignItems={"center"}
                justifyContent={"center"}
                marginTop={!isMobile && "40px"}
                position={"relative"}
                zIndex={!isMobile && "3"}
                {...(isMobile && {
                  width: "150px",
                  height: "150px",
                })}
              >
                <Text
                  m={0}
                  fontSize={!isMobile ? "42px" : "24px"}
                  textAlign={"center"}
                  fontWeight={"bold"}
                  lineHeight={!isMobile && "42px"}
                  dangerouslySetInnerHTML={{ __html: data?.description }}
                  animation={`${animation} 1s ease-in-out`}
                />
              </Flex>
              <Flex
                alignItems={"center"}
                justifyContent={"center"}
                gap={"10px"}
                marginTop={"1rem"}
                display={isMobile ? "flex" : "none"}
              >
                {Array.from({ length: 5 }).map((_, index) => (
                  <Flex
                    w={"20px"}
                    h={"20px"}
                    borderRadius={"50%"}
                    bgColor={index + 1 === activeLabel ? "#CC0000" : "#FFFFFF"}
                    border={"1px solid #CC0000"}
                    color={index + 1 === activeLabel ? "#FFFFFF" : "#CC0000"}
                    onClick={() => changeLabel(headerLabels[index])}
                    cursor={"pointer"}
                    position={"relative"}
                    zIndex={"99999"}
                  />
                ))}
              </Flex>
              <Flex
                flexDir={"column"}
                lineHeight={!isMobile && "1.9rem"}
                position={"relative"}
                zIndex={"3"}
                width={isMobile && "300px"}
                {...(isMobile && {
                  mx: "auto",
                  alignItems: "flex-start",
                })}
              >
                <Text
                  m={0}
                  as={"h3"}
                  fontSize={!isMobile ? "16px" : "14px"}
                  pt={"17px"}
                  color={"#CC0000"}
                  fontWeight={"bold"}
                  {...(isMobile && {
                    textAlign: "left!important",
                    alignSelf: "flex-start",
                  })}
                >
                  Comprando acima de {formatPrice(data?.price)},
                </Text>
                {data?.label === "caixa de som" && (
                  <Text m={0} as={"p"} fontSize={!isMobile ? "16px" : "14px"} pt={"7px"}>
                    ganhe uma caixa de som para aproveitar <br /> sua música favorita com qualidade, <br /> enquanto
                    carrega seus dispositivos <br /> compatíveis com tecnologia wireless, sem <br /> precisar usar
                    cabos.
                  </Text>
                )}
                {data?.label === "fone de ouvido" && (
                  <Text m={0} as={"p"} fontSize={!isMobile ? "16px" : "14px"} pt={"7px"}>
                    ganhe um fone de ouvido wireless, Perfeito <br />
                    para ouvir suas músicas e podcasts favoritos <br /> com liberdade de movimento.
                  </Text>
                )}
                {data?.label === "copo térmico 500 ml" && (
                  <Text m={0} as={"p"} fontSize={!isMobile ? "16px" : "14px"} pt={"7px"}>
                    ganhe um copo térmico para levar sua bebida <br />
                    para onde quiser! Seja no escritório, em casa <br /> ou em uma viagem.
                  </Text>
                )}
                {data?.label === "kit churrasco" && (
                  <Text m={0} as={"p"} fontSize={!isMobile ? "16px" : "14px"} pt={"7px"}>
                    ganhe um kit churrasco com 2 peças para <br />
                    fazer seu churrasco com muito mais estilo, <br /> e praticidade!
                  </Text>
                )}
                {data?.label === "caneca de metal" && (
                  <Text m={0} as={"p"} fontSize={!isMobile ? "16px" : "14px"} pt={"7px"}>
                    ganhe uma caneca de metal perfeita <br />
                    para qualquer ocasião, seja no escritório, <br /> em casa ou em uma viagem.
                  </Text>
                )}
              </Flex>
            </Flex>
            <Text
              m={"0"}
              position={"absolute"}
              bottom={".3rem"}
              right={!isMobile ? ".3rem" : "5.5rem"}
              color={"#919191"}
              fontSize={"9px"}
            >
              * Promoção não cumulativa. 1 item por pedido.
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
