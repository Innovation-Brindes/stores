import { HamburgerIcon } from "@chakra-ui/icons"
import {
  Box,
  Button,
  ChakraProvider,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Image,
  List,
  ListIcon,
  ListItem,
  Table,
  Tbody,
  Td,
  Text,
  Tr,
  useDisclosure,
} from "@chakra-ui/react"
import React from "react"
import { BiCategory } from "react-icons/bi"
import { cor_base_1, cor_base_2 } from "../../../services/cores"
import { HeaderContentNavItem, TagInfo } from "../styled"
import { BoxMenuSegmentos, ImageMenuHeader, TextMenu, TextMenuHeader } from "./stylesMobile"
import Link from "next/link"

const logotipo = "/images/logoTopoMobile-copia.png"

const MenuHeaderMobile = (data) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <ChakraProvider>
      <IconButton
        fontSize={35}
        aria-label="Options"
        icon={<HamburgerIcon _active={{ color: `${cor_base_1}` }} />}
        variant="ghost"
        onClick={onOpen}
        boxShadow="none !important"
        _active={{ backgroundColor: "white" }}
      />
      <Drawer size="xs" placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent fontFamily={"Open sans"}>
          <DrawerHeader h="70px" borderBottomWidth="1.5px">
            <Flex>
              <ImageMenuHeader
                onClick={() => (window.location.href = "/")}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
                alt="logo-tipo-mobile"
                src={logotipo}
              />
              <TextMenuHeader initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                Catálogo de brindes
              </TextMenuHeader>
            </Flex>
          </DrawerHeader>
          <DrawerHeader h="70px" borderBottomWidth="1.5px">
            <Flex>
              <BoxMenuSegmentos>
                <TagInfo left={1} fSize={10} pTop={"2px"} top={7} lSpacing={"0.08rem"}>
                  Confira
                </TagInfo>
                <Link href="/lojahonda/segmento/novidades/6">
                  <a>Lançamentos</a>
                </Link>
              </BoxMenuSegmentos>
              <Box w={"0.3px"} h={"35px"} bg="rgb(0,0,0,0.2)"></Box>
              <BoxMenuSegmentos>
                <TagInfo left={1} fSize={10} pTop={"2px"} top={7} lSpacing={"0.08rem"}>
                  Exclusivo
                </TagInfo>
                <Link href="/lojahonda/ultra-rapido">
                  <a>Pronto em 48 Horas</a>
                </Link>
              </BoxMenuSegmentos>
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            {data.state.subcategorias.map((item) => {
              return (
                <List size="sm">
                  <ListItem
                    ml="-1.5rem"
                    color="black"
                    fontSize="12px"
                    textDecoration="none"
                    display="flex"
                    flexDirection="row"
                    _hover={{ color: "gray" }}
                    as="a"
                    href={"/lojahonda/categoria/" + item.url_site + "/" + item.cod_grupo}
                    borderBottom={`0.3px solid #E8E8E8`}
                  >
                    <ListIcon as={BiCategory} mt={1} />
                    <TextMenu>{item.name}</TextMenu>
                  </ListItem>
                </List>
              )
            })}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </ChakraProvider>
  )
}

export default MenuHeaderMobile
