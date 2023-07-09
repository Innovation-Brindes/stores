import { Flex, Grid, Text } from "@chakra-ui/layout"
import { useBreakpointValue } from "@chakra-ui/media-query"
import { useState } from "react"
import { TfiLocationPin } from "react-icons/tfi"
import { Popover } from "./Popover"
import { Image } from "@chakra-ui/image"
import { maskCep } from "../../utils/maskCep"
import { useCookiesSession } from "../../contexts/cookiesSessionProvider"
import { extendTheme } from "@chakra-ui/react"
import { DrawerMobile } from "./DrawerMobile"
import { FreteGratisContainer, FreteGratisContent, ImageContainer, SemFreteGratis, TemFreteGratis } from "./styles"

export function FreteGratis() {
  const [isOpen, setIsOpen] = useState(false)
  const { addressClient, setAddressClient } = useCookiesSession()

  function handleClosePopover() {
    setIsOpen(false)
  }

  const breakpoints = {
    sm: "320px",
    md: "768px",
    lg: "1280px",
    xl: "1366px",
    "2xl": "1920px",
  }

  const theme = extendTheme({ breakpoints })

  return (
    <>
      <div className="block md:hidden">
        <DrawerMobile />
      </div>
      <div className="hidden md:block">
        <FreteGratisContainer>
          <FreteGratisContent
            backgroundColor={addressClient?.frete_gratis === "S" ? "true" : "false"}
            onClick={() => setIsOpen(true)}
          >
            {!addressClient ? (
              <>
                <TfiLocationPin size={30} />
                <Text as="span" m={0} fontSize="14px" onClick={() => setIsOpen(true)}>
                  Informe seu CEP
                </Text>
              </>
            ) : addressClient.frete_gratis === "S" ? (
              <TemFreteGratis>
                <TfiLocationPin size={30} />
                <span>Cep: {maskCep(addressClient.cep)}</span>
                <h1 onClick={() => setIsOpen(true)}>Tem frete grátis!</h1>
              </TemFreteGratis>
            ) : (
              <SemFreteGratis backgroundColor={addressClient?.frete_gratis === "S" ? "true" : "false"}>
                <div className="openPop">
                  <TfiLocationPin size={30} />{" "}
                  <div className="columnSemFrete">
                    <div>
                      <span className="not-free">Cep: {maskCep(addressClient.cep)}</span>
                      <span className="not-free">não é gratuito :(</span>
                    </div>
                    <span className="garantimos">
                      Mas garantimos ótimas condições de prazo <br /> e valores na sua região.
                    </span>
                  </div>
                </div>
              </SemFreteGratis>
            )}
          </FreteGratisContent>
          <ImageContainer>
            <img src="/gifs/frete-gratis/banner-gif-frete.gif" alt="Frete Grátis" />
          </ImageContainer>
          <Popover isOpen={isOpen} onClose={handleClosePopover} setAddressClient={setAddressClient} />
        </FreteGratisContainer>
      </div>
    </>
  )
}
