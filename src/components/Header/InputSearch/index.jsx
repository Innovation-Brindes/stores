import { Icon } from "@chakra-ui/icon"
import { Search2Icon } from "@chakra-ui/icons"
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input"
import { Box, Flex } from "@chakra-ui/layout"
import { BiSearch } from "react-icons/bi"
import { HeaderContentInput } from "../styled"
import { useCallback, useEffect, useRef, useState } from "react"
import axios from "axios"
import { useDebounce } from "../../../hooks/useDebounce"

export function InputSearch() {
  const [textoBuscado, setTextoBuscado] = useState("")

  const suggestionsRef = useRef(null)

  const clickBuscarProduto = () => {
    var texto_buscado = textoBuscado
    texto_buscado = texto_buscado.toLowerCase()
    texto_buscado = texto_buscado.replaceAll("  ", " ")
    texto_buscado = texto_buscado.replaceAll(" ", "&")
    return texto_buscado
  }
  const [suggestions, setSuggestions] = useState([])
  const [dataLabelOpen, setDataLabelOpen] = useState(false)
  const debouncedText = useDebounce(textoBuscado, 200)

  const getSuggestionsText = useCallback(async () => {
    const response = await axios.get(
      `https://api.innovationbrindes.com.br/api/site/v2/pedido/busca-palavra-chave/${debouncedText}`,
    )

    const { data } = response

    setSuggestions(data)
  }, [debouncedText])

  function closeDataLabel() {
    setDataLabelOpen(false)
  }

  function openDataLabel() {
    setDataLabelOpen(true)
  }

  useEffect(() => {
    if (debouncedText.length > 2) {
      getSuggestionsText()
      setDataLabelOpen(true)
    }

    if (debouncedText.length === 0) {
      setSuggestions([])
      setDataLabelOpen(false)
    }
  }, [debouncedText, getSuggestionsText])

  return (
    <HeaderContentInput>
      <Flex alignItems="center" justifyContent="center" onMouseLeave={() => closeDataLabel()} w="100%">
        <Box position="relative" w="100%">
          <InputGroup>
            <Input
              _focus={{
                borderColor: "#cc0000",
              }}
              type="text"
              placeholder="Pesquise"
              onChange={(e) => setTextoBuscado(e.target.value)}
              onClick={() => openDataLabel()}
              onFocus={() => openDataLabel()}
              onKeyPress={(e) =>
                e.key === "Enter" && textoBuscado !== "" && textoBuscado != null
                  ? (window.location.href = "/buscar/" + clickBuscarProduto())
                  : ""
              }
            />
            <InputRightElement
              pointerEvents="none"
              cursor={"pointer"}
              children={<Search2Icon color="gray.300" position={"relative"} top={-0.5} cursor="pointer" />}
            />
          </InputGroup>
          <Flex
            id="suggestions"
            ref={suggestionsRef}
            position="absolute"
            w="100%"
            alignItems="center"
            justifyContent="start"
            borderBottomRadius={".3rem"}
            display={suggestions.length > 0 ? "flex" : "none"}
            zIndex={9999999}
            //parar evento de fechar o data label
            //stopPropagation

            onClick={(e) => e.stopPropagation()}
          >
            <Flex flexDir="column" flex={1} display={dataLabelOpen ? "flex" : "none"}>
              {suggestions.map((suggestion) => (
                <Flex
                  as="a"
                  textDecoration="none"
                  color="#000"
                  key={suggestion}
                  alignItems="center"
                  flex={1}
                  w="100%"
                  gap={"1rem"}
                  padding=".5rem"
                  bgColor="#ffffff"
                  paddingInline="1rem"
                  paddingBlock="0.5rem"
                  _hover={{
                    bgColor: "#cc0000",
                    color: "#fff",
                  }}
                  cursor="pointer"
                  // onClick={() => (window.location.href = "/buscar/" + suggestion)}
                  href={suggestion.link_categoria}
                >
                  <Icon color="#b2b2b2" as={BiSearch} />

                  {suggestion.descricao_categoria}
                </Flex>
              ))}
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </HeaderContentInput>
  )
}
