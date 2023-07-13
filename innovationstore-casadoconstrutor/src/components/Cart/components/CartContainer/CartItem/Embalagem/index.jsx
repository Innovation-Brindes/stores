import { AspectRatio, Button, Flex, Image, Text, Tooltip, useMediaQuery } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { IoIosArrowDown } from "react-icons/io"
import { RadioComponent } from "./RadioComponent"
import { VideoComponent } from "./VideoComponent"
import axios from "axios"
import { username, password } from "../../../../../../services/enviroment"
import { BsTrash } from "react-icons/bs"
import { useCart } from "../../../../../../contexts/useCart"
import { baseURL } from "../../../../../../services/api/index"

export function EmbalagemEspec({ item }) {
  const [isOpen, setIsOpen] = useState(false)
  const [color, setColor] = useState("")
  const [cubagemEmbalagem, setCubagemEmbalagem] = useState({})

  function formatPrice(price) {
    return price?.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })
  }

  const { getInfoEmb, removeInfoEmb, handleAddEmbalagem, cart } = useCart()

  useEffect(() => {
    handleInfoEmbalagem()
  }, [cart, removeInfoEmb])

  async function handleInfoEmbalagem() {
    const response = await baseURL.post(`/produto/listar-tabela-preco/${item.codprod}/${item.quantidade}`, {
      codigo_produto: item.codprod,
      quantidade_produto: item.quantidade,
      ad_embalagem: item.ad_embalagem,
      codigo_impressao: item.codigo_impressao,
      codigo_cor: item.cor_produto?.cod,
    })

    const cubagem = {}

    response.data[0].mensagem.split(",").forEach((item) => {
      const [chave, valor] = item.split("=")
      cubagem[chave] = valor
    })


    setCubagemEmbalagem(cubagem)
  }

  async function handleColorEmbalagem(e) {
    await handleInfoEmbalagem()

    setColor(e)
    const calcEmb = {
      ...item,
      sequencia: item.sequencia++,
      id: item.id_hash,
      name: item.name,
      color: e,
      price: item.quantidade * cubagemEmbalagem?.ValorVenda,
      embalagem: true,
      codprod: item.ad_embalagem,
      frete_site: item.frete_site,
      cubagem_embalagem: cubagemEmbalagem,
      id_produto: item.id_hash,
    }

    getInfoEmb(calcEmb)
  }

  function handleDeleteEmb(value) {
    setColor("")
    removeInfoEmb(value)
    setCubagemEmbalagem({})
    setRemoveEmbalagem(false)
  }

  const [isLargerThan768] = useMediaQuery("(min-width: 768px)")
  const [isLargerThan1040] = useMediaQuery("(max-width: 1040px)")
  const [isMaxWidth1366] = useMediaQuery("(max-width: 1366px)")
  const [isNotebook, setIsNotebook] = useState(false)

  const [removeEmbalagem, setRemoveEmbalagem] = useState(false)

  const [isMedia, setIsMedia] = useState(false)

  useEffect(() => {
    setIsMedia(isLargerThan1040)
  }, [isLargerThan1040, isLargerThan768])

  useEffect(() => {
    if (isMaxWidth1366) {
      setIsNotebook(true)
    }
  }, [isMaxWidth1366])

  return (
    <>
      <Flex
        alignItems="center"
        marginBottom={!isOpen && "1.5rem"}
        width={isMedia && "100%"}
        justifyContent="space-between"
        flexDirection={isMedia ? "column" : "row"}
        w={color !== "" && !isOpen && "100%"}
        minW={isMedia && "100%"}
      >
        <Flex alignItems="flex-start" gap={!isMedia && "3.188rem"} w="100%" flexDirection={isMedia ? "column" : "row"}>
          <Flex flexDir="column" gap={2} w="100%">
            <Flex
              marginLeft={!isMedia && "2.563rem"}
              {...(isMedia && {
                alignItems: "center",
                width: "100%",
              })}
              bgColor="#F5F5F5"
              borderRadius="17px"
              gap="1.313rem"
              cursor="pointer"
              onClick={() => {
                setIsOpen(!isOpen)
              }}
              maxW={!isMedia && "30.188rem"}
            >
              <Tooltip
                label={
                  color === ""
                    ? "Clique para selecionar a embalagem"
                    : "Para trocar a embalagem, remova a embalagem atual"
                }
              >
                <Flex
                  gap={1}
                  minW={!isMedia && "30.188rem"}
                  alignItems="center"
                  justifyContent="space-between"
                  width={isMedia && "100%"}
                  {...(isMedia && {
                    paddingInline: "17px",
                  })}
                  // cursor={color === "" ? "pointer" : "not-allowed"}
                >
                  <Flex alignItems="center" width={isMedia && "100%"}>
                    {!isMedia && <Image src="/images/icones/embalagem.svg" width="47px" height="37px" />}
                    <Flex alignItems="center" width={isMedia && "100%"}>
                      {isMedia && <Image src="/images/icones/embalagem.svg" width="47px" height="37px" />}
                      <Flex flexDir={isMedia ? "column" : "row"} {...(isMedia && { paddingBlock: ".5rem" })}>
                        <Text
                          as="span"
                          fontWeight={"bold"}
                          mr=".3rem"
                          fontSize={isMedia && ".8rem"}
                          {...(isMedia && {
                            textTransform: "uppercase",
                          })}
                        >
                          Embalagem especial -
                        </Text>{" "}
                        <Text as="span" color="#616162" fontSize={isMedia && ".8rem"}>
                          {color === "" ? (
                            <Text as="span">
                              por mais {formatPrice(parseFloat(cubagemEmbalagem?.ValorVenda))} unidade
                            </Text>
                          ) : (
                            <Text as="span" fontWeight={"bold"} color="#FF4F00">
                              {" "}
                              COR {color}
                            </Text>
                          )}
                        </Text>
                      </Flex>
                    </Flex>
                  </Flex>
                  <Flex
                    alignItems="center"
                    justifyContent="center"
                    width="1.5rem"
                    height="1.5rem"
                    transform={isOpen ? "rotate(180deg)" : "rotate(0deg)"}
                    transition="all 0.3s ease-in-out"
                    mr="1rem"
                  >
                    <IoIosArrowDown size="1.5rem" color="#ff4f00" />
                  </Flex>
                </Flex>
              </Tooltip>
            </Flex>
            {isOpen && (
              <Flex
                gap={isMedia ? "1.5rem" : "3.75rem"}
                {...(isMedia && {
                  flexDirection: "column",
                  alignItems: "center",
                  width: "100%",
                })}
              >
                <Flex flexDir="column" width={isMedia ? "100%" : "30.188rem"}>
                  <RadioComponent
                    corEmbalagem={color}
                    handleCorEmbalagem={handleColorEmbalagem}
                    setIsOpen={setIsOpen}
                  />
                  <Flex
                    width={isMedia ? "100%" : "30.188rem"}
                    marginLeft={!isMedia && "2.563rem"}
                    alignItems="center"
                    justifyContent="center"
                    marginBlock="1.5rem"
                  >
                    <Text as="span" color="#616162" textAlign="center" fontSize="1.25rem" m="0">
                      <Text as="span" color="#ff4f00" fontWeight={"bold"} m="0">
                        GRATIS
                      </Text>{" "}
                      - seu logo impresso na embalagem!
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            )}
          </Flex>
          {isOpen && <VideoComponent />}
        </Flex>

        {!isOpen && color !== "" && (
          <Flex
            width="100%"
            maxWidth={!isMedia && "30.188rem"}
            alignItems="center"
            borderTop="2px solid #f5f5f5"
            justifyContent="space-between"
            paddingInline="1rem"
            mt={isMedia && "1.5rem"}
          >
            <Text as="span" color="#616162" fontSize="15px">
              {item.quantidade}
            </Text>
            <Text as="span" color="#616162" fontSize="15px" {...(isNotebook && { marginLeft: "4rem" })}>
              {formatPrice(parseFloat(cubagemEmbalagem?.ValorVenda))}
            </Text>
            <Text as="span" color="#616162" fontSize="15px" {...(isNotebook && { marginLeft: "4rem" })}>
              {formatPrice(item.quantidade * cubagemEmbalagem?.ValorVenda)}
            </Text>

            <Tooltip label="Remover embalagem">
              <Button
                background="transparent"
                _hover={{
                  background: "transparent",
                }}
                border={`1px solid ${removeEmbalagem ? "#FF4F00" : "#CFCFCF"}`}
                color={removeEmbalagem ? "#FF4F00" : "#A4A3A3"}
                fontWeight={"normal"}
                size="sm"
                mt=".3rem"
                padding="0.525rem"
                onClick={() => handleDeleteEmb(item)}
              >
                <BsTrash size="1rem" />
              </Button>
            </Tooltip>
          </Flex>
        )}
      </Flex>
    </>
  )
}
