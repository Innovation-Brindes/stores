import { Button } from "@chakra-ui/button"
import { Icon } from "@chakra-ui/icon"
import { Box, Flex, Text } from "@chakra-ui/layout"
import { useState } from "react"
import { FaWhatsapp } from "react-icons/fa"
import { useWhatsApp } from "../../contexts/WhatsAppProvider"
import { WhatsAppButton as PulseWhatsAppButton } from "./styles"
import { AiFillCloseCircle } from "react-icons/ai"

export function WhatsAppButton() {
  const { openChat, setOpenChat } = useWhatsApp()
  const [buttonVisible, setButtonVisible] = useState(true)

  return (
    <Flex
      position="fixed"
      bottom="20px"
      right="20px"
      justifyContent="center"
      alignItems="center"
      display={buttonVisible ? "flex" : "none"}
      zIndex="999999"
    >
      <PulseWhatsAppButton
        position="fixed"
        bottom="35px"
        right="20px"
        backgroundColor="#25d366"
        color="white"
        fontSize="40px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="0"
        height="0"
        padding="27px"
        textDecoration="none"
        borderRadius="50%"
        animationName="pulse"
        animationDuration="1.5s"
        animationTimingFunction="ease-out"
        animationIterationCount="infinite"
        onClick={() => setOpenChat(!openChat)}
        _before={{
          content: "''",
          position: "absolute",
          borderRadius: "50%",
          padding: "25px",
          border: "5px solid #25d366",
          opacity: 0.75,
          animationName: "pulse-border",
          animationDuration: "1.5s",
          animationTimingFunction: "ease-out",
          animationIterationCount: "infinite",
        }}
        _hover={{
          backgroundColor: "#128c7e",
        }}
        _focus={{
          outline: "none",
          boxShadow: "none",
        }}
      >
        <Icon as={FaWhatsapp} fontSize="2rem" />
      </PulseWhatsAppButton>

      <Flex
        transition="all 0.3s ease-in-out"
        transform={"translate(-4rem, .5rem)"}
        bgColor="#25d366"
        color="#fff"
        paddingInline=".5rem"
        paddingBlock=".2rem"
        borderRadius=".5rem"
        cursor="pointer"
        position="relative"
        _after={{
          content: '""',
          position: "absolute",
          top: "50%",
          right: "-.5rem",
          transform: "translateY(-50%)",
          width: 0,
          height: 0,
          borderLeft: "1rem solid #25d366",
          borderTop: "1rem solid transparent",
          borderBottom: "1rem solid transparent",
        }}
      >
        <Icon
          onClick={() => setButtonVisible(!buttonVisible)}
          bgColor="transparent"
          color="red"
          position="absolute"
          top="-1rem"
          right="-4rem"
          size="1.8rem"
          as={AiFillCloseCircle}
        />
        <Text>
          Fale com <br />{" "}
          <Text as="span" fontWeight={"bold"}>
            nossa equipe <br /> agora!
          </Text>
        </Text>
      </Flex>
    </Flex>
  )
}
