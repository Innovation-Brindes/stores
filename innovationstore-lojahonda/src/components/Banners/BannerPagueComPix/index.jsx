import { Image } from "@chakra-ui/image";
import { Flex, Text } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import { ChakraProvider } from "@chakra-ui/provider";
import { useEffect, useState } from "react";
import { useWhatsApp } from "../../../contexts/WhatsAppProvider";

export function BannerPagueComPix() {
  const [isLargerThan768] = useMediaQuery("(max-width: 768px)");
  const [isLargerThan1366] = useMediaQuery("(max-width: 1366px)");
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const { openChat, setOpenChat } = useWhatsApp();

  useEffect(() => {
    if (isLargerThan768) {
      setIsMobile(true);

      return;
    }

    if (isLargerThan1366) {
      setIsDesktop(true);

      return;
    }

    setIsMobile(false);
  }, [isLargerThan768, isLargerThan1366]);

  return (
    <ChakraProvider resetCSS>
      <Flex
        w="100%"
        bgColor="#017D9D"
        fontFamily="Open Sans, sans-serif"
        alignItems="center"
        justifyContent="space-between"
        paddingBlock="0.5rem"
        paddingInline="1rem"
        height="5.5625rem"
        mb="1.4375rem"
        display={isMobile ? "none" : "flex"}
      >
        <Flex
          w="100%"
          maxW="1366px"
          alignItems="center"
          justifyContent="space-between"
          margin="0 auto"
          height="100%"
        >
          <Flex alignItems="center" gap="1.25rem" height="100%">
            <Flex
              bgColor="#DFF609"
              color="#017D9D"
              height="fit-content"
              borderRadius="1.0625rem"
              fontWeight="bold"
              fontSize="11px"
            >
              <Text
                as="span"
                paddingInline="0.438rem"
                textTransform="uppercase"
                m="0"
              >
                Novidade!
              </Text>
            </Flex>
            <Flex>
              <Text
                color="#fff"
                fontSize="1.563rem"
                textAlign="left"
                letterSpacing="1.2px"
                fontWeight={700}
                m="0"
                lineHeight="1"
              >
                Pague com pix <br />e ganhe 5% OFF
              </Text>
            </Flex>
            <Flex fontSize="0.8125rem" flexDirection="column">
              <Text color="#fff" m="0">
                A maneira mais{" "}
                <Text as="span" color="#DFF609" m="0">
                  prática, rápida e econômica
                </Text>
              </Text>
              <Text color="#fff" m="0">
                de adquirir seus brindes na Innovation!
              </Text>
              <Text fontSize="0.5rem" m="0" color="#fff">
                *desconto válido para os valores aplicados no site
              </Text>
            </Flex>
          </Flex>
          <Flex
            alignItems="center"
            justifyContent="center"
            bgColor="#fff"
            width=".1rem"
            height="100%"
          />
          <Flex alignItems="center" gap="1.25rem" height="100%">
            <Flex>
              <Text
                color="#fff"
                fontSize="1.563rem"
                textAlign="left"
                letterSpacing="1.2px"
                fontWeight={700}
                m="0"
                lineHeight="1"
              >
                Ou parcele <br /> com Cartão
              </Text>
            </Flex>
            <Flex fontSize="0.8125rem" flexDirection="column">
              <Text color="#fff" m="0">
                Pague sua compra em{" "}
                <Text as="span" color="#DFF609" m="0"></Text>
              </Text>
              <Text color="#DFF609" m="0">
                até 12x no cartão de crédito!*
              </Text>
              <Text fontSize="0.5rem" m="0" color="#fff">
                *Juros de 2.96% a.m. e 17.48% a.a.
              </Text>
            </Flex>
          </Flex>
          <Flex
            alignItems="center"
            justifyContent="center"
            bgColor="#fff"
            width=".1rem"
            height="100%"
            lineHeight={1}
          />
          <Flex
            alignItems="center"
            gap="1.25rem"
            paddingInline="0.5625rem"
            paddingBlock="0.9375rem"
            border="1px solid #fff"
            borderRadius="14px"
            justifyContent="center"
            transition="all 0.2s ease-in-out"
            _hover={{
              borderColor: "#DFF609",
            }}
          >
            <Flex
              alignItems="center"
              justifyContent="center"
              cursor="pointer"
              gap={2}
              onClick={() => setOpenChat(!openChat)}
            >
              <Text color="#DFF609" m="0" textTransform={"uppercase"}>
                Dúvidas?
              </Text>
              <Text color="#fff" m="0" lineHeight={1} fontSize="0.9375rem">
                Fale agora com um <br /> de nossos consultores
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      {isMobile && (
        <Image
          src="/images/banners/animados/banner-pix/banner-pix-cartao-mobile.gif"
          cursor="pointer"
          onClick={() => setOpenChat(!openChat)}
        />
      )}
    </ChakraProvider>
  );
}
