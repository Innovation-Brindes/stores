import { headerLabels } from "../headerLabels"
import { Flex, Text } from "@chakra-ui/react"
import { formatPrice } from "../../../utils/formatPrice"
import { ModalHeader } from "@chakra-ui/modal"
import React from "react"

export function Header({ activeLabel, changeLabel, isMobile, animation }) {
  return (
    <ModalHeader
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      paddingInline={isMobile ? "0" : "40px"}
      paddingTop={isMobile ? "52px" : "28px"}
      position={"relative"}
      overflow={"hidden"}
      {...(isMobile && { display: "none" })}
    >
      {headerLabels.map((label) => {
        return (
          <Flex flexDir={"column"} alignItems={"center"} {...(isMobile && { display: "none" })}>
            <Flex
              alignItems={"center"}
              gap={"9px"}
              cursor={"pointer"}
              paddingBottom={"14.5px"}
              position={"relative"}
              animation={`${animation} 1s`}
              color={activeLabel === label.value ? "#CC0000" : "#414042"}
              _after={{
                content: "''",
                position: "absolute",
                opacity: activeLabel === label.value ? "1" : "0",
                transition: "all .3s ease-in-out",
                width: "100%",
                height: "3px",
                backgroundColor: "#CC0000",
                bottom: "-2px",
              }}
              onClick={() => changeLabel(label)}
            >
              <Flex
                w={"28px"}
                h={"28px"}
                borderRadius={"50%"}
                bgColor={activeLabel === label.value ? "#CC0000" : "#414042"}
                transition={"all .3s ease-in-out"}
                color={"#FFFFFF"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text fontSize={"14px"} as={"span"}>
                  {label.index}
                </Text>
              </Flex>
              <Text as={"span"} textTransform={"uppercase"} fontSize={"14px"}>
                {label.label}
              </Text>
            </Flex>
            <Text m={0} textAlign={"center"} fontSize={"10px"} mt={"5px"}>
              Para pedidos acima <br /> de {formatPrice(label.price)}
            </Text>
          </Flex>
        )
      })}
    </ModalHeader>
  )
}
