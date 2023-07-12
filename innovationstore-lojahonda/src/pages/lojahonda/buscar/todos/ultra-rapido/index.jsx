import Header from "../../../../components/Header/index"
import { Center, ChakraProvider, Flex, Grid, Image, Select } from "@chakra-ui/react"
import React, { useEffect, useState } from "react"
import axios from "axios"
import { GridProductDefault } from "../../../../../components/GridProductsDefault"
import Head from "next/head"
import FooterComponent from "../../../../../components/Footer/FooterComponent"
import * as S from "../../../../../pageStyles/ultrarapido"
import { useMediaQuery } from "@chakra-ui/react"
import { getCategorias, getSegmentos } from "../../../../../utils/getLinksHeader"

const loading_ultra_rapido = "/images/loading-ultra-rapido.gif"

const AllProductsUltraRapido = (props) => {
  const [sortBanner, setSortBanner] = useState(0)
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [orderPrice, setOrderPrice] = useState("desc")
  const [isMobile, setIsMobile] = useState(false)
  const [isThan728] = useMediaQuery("(min-width: 728px)")

  //useEffect toda vez que o media query muda para mobile
  useEffect(() => {
    setIsMobile(!isThan728)
  }, [isThan728])

  const ifnull = (value, replace) => {
    if (value === null || value === undefined) {
      return replace
    } else {
      return value
    }
  }

  function handleOrderPrice() {
    if (orderPrice === "asc") {
      setOrderPrice("desc")
      setProducts(products.sort((a, b) => (parseFloat(a.valor_home) > parseFloat(b.valor_home) ? 1 : -1)))
    } else {
      setOrderPrice("asc")
      setProducts(products.sort((a, b) => (parseFloat(a.valor_home) < parseFloat(b.valor_home) ? 1 : -1)))
    }
  }

  const getAllProducts = async () => {
    const produtos = []

    try {
      setLoading(true)
      const response = await axios.post("https://api.innovationbrindes.com.br/api/segmento/lista-ultra-rapidos")

      for (var prod of response.data) {
        var url_seo = prod.url_seo.split("-")
        var referencia = prod.referencia.toString()
        var link =
          "/" +
          referencia.substring(referencia.length - 4) +
          "/" +
          url_seo.slice(0, url_seo.length - 1).join("-") +
          "-1-1.jpg"
        var preco_home = Math.round(parseFloat(prod.preco_home) * 100) / 100

        if (isNaN(preco_home)) {
          preco_home = 0.0
        }

        produtos.push({
          prod_nome: prod.nome_produto.trim(),
          prod_cod: prod.referencia,
          url_prod: prod.url_seo,
          img_prod: link,
          referencia: prod.referencia,
          descricao: prod.descricao,
          caracteristicas: prod.caracteristicas,
          valor_home: (Math.round(parseFloat(preco_home) * 100) / 100).toLocaleString("pt-br", {
            minimumFractionDigits: 2,
          }),
          cores: ifnull(prod.rgb_cores, "").trim(),
          ad_embalagem: prod.ad_embalagem ? "S" : "N",
          selo_prod: prod.selo_prod,
          segmento: prod.segmento,
          ultrarapido: 1,
          estoque: prod.estoque,
          data_ultra_rapido: prod.data_ultra_rapido,
        })
      }

      const productLowerPrice = produtos.sort((a, b) => (parseFloat(a.valor_home) > parseFloat(b.valor_home) ? 1 : -1))

      setProducts(productLowerPrice)
    } catch (error) {
      console.log(Object.keys(error), error.message)
    } finally {
      setLoading(false)
    }

    setLoading(false)
  }

  useEffect(() => {
    const sortedBanner = Math.floor(Math.random() * 3)
    setSortBanner(sortedBanner)
    getAllProducts()
    setOrderPrice("desc")
  }, [])

  return (
    <ChakraProvider>
      <Head>
        <title>Ultra Rápido - Innovation Brindes</title>
        <meta name="description" content="Ultra Rápido - Innovation Brindes" />
        <meta name="keywords" content="Ultra Rápido - Innovation Brindes" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Innovation Brindes" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header subcategorias={props.linksSubcategorias} segmentos={props.linksSegmentos} />
      <Flex flexDirection="column" alignItems="center" justifyContent="center" w={"100%"}>
        <S.ContainerImage
          mt="-15px"
          src={
            !isMobile
              ? `/images/banners/banner-ultra-rapido/banner-ultra-rapido-${sortBanner}.png`
              : `/images/banners/banner-ultra-rapido/banner-ultra-rapido-mobile-${sortBanner}.png`
          }
          // src={`/images/banners/banner-ultra-rapido/banner-ultra-rapido-mobile-${sortBanner}.png`}
          alt="banner-ultra-rapido"
        />
        {loading && (
          <Flex minH={"calc(100vh - 30rem)"}>
            <Center mt={"2rem"}>
              <img alt="loading_ultra_rapido" src={loading_ultra_rapido} />
            </Center>
          </Flex>
        )}
        <Flex flexDir={"column"} mt={"2rem"}>
          {!loading && (
            <Select
              onChange={handleOrderPrice}
              value={orderPrice}
              w={"20rem"}
              ml={"auto"}
              mb={"2rem"}
              _focus={{ outlineColor: "#FFC700", outlineWidth: "2px", outlineStyle: "solid", outlineOffset: "0px" }}
              defaultValue="asc"
            >
              <option value="desc">Menor preço</option>
              <option value="asc">Maior preço</option>
            </Select>
          )}
          <S.Container templateColumns={"repeat(5, 1fr)"} gap={"3rem"}>
            {products.map((data) => (
              <GridProductDefault
                prod_nome={data.prod_nome}
                codigo_prod={data.prod_cod}
                url_prod={data.url_prod}
                img_prod={"/images/produtos" + data.img_prod}
                descricao={data.descricao}
                caracteristicas={data.caracteristicas}
                valor_home={data.valor_home}
                selo={data.selo}
                segmento={data.segmento}
                ultrarapido={data.ultrarapido}
                // url_site={this.state.url_site}
                ad_pdv={data.pdv}
                cores={data.cores}
                estoque={data.estoque}
                isUltraRapido={true}
                state={null}
                selo_prod={data.selo_prod}
                data_ultra_rapido={data.data_ultra_rapido}
              />
            ))}
          </S.Container>
        </Flex>
      </Flex>

      <FooterComponent />
    </ChakraProvider>
  )
}

export default AllProductsUltraRapido

export const getStaticProps = async () => {
  const linksSubcategorias = await getCategorias()
  const linksSegmentos = await getSegmentos()

  return {
    props: {
      linksSubcategorias: linksSubcategorias.subcategorias,
      linksSegmentos: linksSegmentos.segmentos,
    },
  }
}
