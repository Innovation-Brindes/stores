import Header from "../Header/index"
import { ChakraProvider, Flex, Text, useMediaQuery } from "@chakra-ui/react"
import React, { useEffect } from "react"
import { HeaderFiltro } from "./components/HeaderFiltro"
import InputGroup from "./components/InputGroup"
import FiltroBusca from "../Buscar/components/Filtro"
import { dadosSubCategoriasUltraRapido } from "../../services/api"

export function BuscaUltraRapido({ textobuscado, subcategorias }) {
  const [mobile] = useMediaQuery("(max-width: 768px)")
  const [isMobile, setIsMobile] = React.useState(false)
  const [data, setData] = React.useState([])

  useEffect(() => {
    if (typeof window !== "undefined") {
      const local = localStorage.getItem("filtro-rapido")

      if (local) {
        const data = JSON.parse(local)
        setData(data)
      }
    }
  }, [])



  async function getCategory() {
    const response = await dadosSubCategoriasUltraRapido.get()

  }

  useEffect(() => {
    getCategory()
  }, [])

  useEffect(() => {
    setIsMobile(mobile)
  }, [mobile])

  return (
    <ChakraProvider>
      <Header />
      <Flex flexDir={"column"} {...(!isMobile && { paddingInline: "10rem" })} fontFamily={"Open Sans"}>
        <FiltroBusca
          loadingProd={null}
          texto_buscado={textobuscado}
          subcategoria_carregada={subcategorias}
          subcategorias={subcategorias}
          cores={[]}
          cor_selecionadas={null}
          quantidade_selecionada={100}
          valor_de={data.valor_inicial}
          valor_ate={data.valor_final}
          atualizarBusca={null}
          count_produtos={2}
          active_load={() => {}}
          isUltraRapido={true}
          selo_prod={null}
        />
        {/*<Flex*/}
        {/*  flexDir={"column"}*/}
        {/*  padding={5}*/}
        {/*  borderRadius={"10px"}*/}
        {/*  border={"1px solid #E2E2E2"}*/}
        {/*  maxWidth={"500px"}*/}
        {/*  gap={3}*/}
        {/*>*/}
        {/*  <HeaderFiltro textobuscado={textobuscado} />*/}
        {/*  <InputGroup label={"Brinde"} type={"text"} />*/}
        {/*</Flex>*/}
      </Flex>
    </ChakraProvider>
  )
}
