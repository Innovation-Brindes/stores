import { Button } from "@chakra-ui/button"
import { Box, Flex, Text } from "@chakra-ui/layout"
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal"
import { useCart } from "../../../../contexts/useCart"
import { useForm } from "react-hook-form"
import { Input } from "@chakra-ui/input"
import { useEffect } from "react"
import { EditeSeuProduto } from "../../../EditSeuProduto"
import { ProductInfo } from "./ProductInfo"
import axios from "axios"
import { useState } from "react"
import { Icon, useMediaQuery } from "@chakra-ui/react"
import { IoMdCloseCircle } from "react-icons/io"
import { useCallback } from "react"
import { setFirstLetterUpperCase } from "../../../../utils/setFirstLetterUpperCase"
import { buscaProduto } from "../../../../services/api"

export function EditModal() {
  const { openModal, handleCloseModal, itemEdit, editItem, setItemEdit } = useCart()

  const [isLargerThan768] = useMediaQuery("(max-width: 768px)")
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (isLargerThan768) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }, [isLargerThan768])

  async function handleSubmitEdit() {
    editItem(itemEdit)
  }

  const handleEditItem = useCallback(
    async (item) => {
      const params = {
        batidas: item.impressao,
        codigo_cor: item.cor_produto?.cod ? item.cor_produto?.cod : itemEdit?.cor_produto?.cod,
        codigo_impressao: item.personalizacao.value ? item.personalizacao.value : itemEdit?.codigo_impressao,
        codigo_produto: itemEdit?.codprod,
        prazo_entrega: item.retirada,
        quantidade: item.quantidade,
      }

      const response = await axios.post(
        "https://api.innovationbrindes.com.br/api/site/v2/produto/buscar-valor-produto",
        params,
      )

      const responseTabelaPreco = await buscaProduto.post(
        "listar-tabela-preco/" + itemEdit?.codprod + "/" + item?.quantidade,
      )

      const qtdcaixa = []
      const altura = []
      const largura = []
      const comprimento = []
      const peso = []
      const cubagemTotal = []

      const mensagem = responseTabelaPreco.data[0].mensagem

      if (mensagem != null) {
        const produtos = mensagem.split(";")

        produtos.forEach((produto) => {
          if (produto.trim() !== "") {
            const produtoInfo = produto.split(",")

            const qtdCaixa = produtoInfo.find((info) => info.startsWith("QtdCaixa="))
            const alturaProduto = produtoInfo.find((info) => info.startsWith("Altura="))
            const larguraProduto = produtoInfo.find((info) => info.startsWith("Largura="))
            const comprimentoProduto = produtoInfo.find((info) => info.startsWith("Comprimento="))
            const pesoCaixa = produtoInfo.find((info) => info.startsWith("PesoCaixa="))
            const cubTot = produtoInfo.find((info) => info.startsWith("CubagemTotal="))

            if (qtdCaixa) {
              qtdcaixa.push({ valor: qtdCaixa.split("=")[1].replace(".", ",") })
            }
            if (cubagemTotal) {
              cubagemTotal.push({ valor: cubTot.split("=")[1] })
            }

            if (alturaProduto) {
              altura.push({ valor: alturaProduto.split("=")[1].replace(".", ",") })
            }
            if (larguraProduto) {
              largura.push({ valor: larguraProduto.split("=")[1].replace(".", ",") })
            }
            if (comprimentoProduto) {
              comprimento.push({ valor: comprimentoProduto.split("=")[1].replace(".", ",") })
            }
            if (pesoCaixa) {
              peso.push({ valor: pesoCaixa.split("=")[1].replace(".", ",") })
            }
          }
        })
      }

      const newItem = {
        ...itemEdit,
        prazo: item?.retirada,
        cor_produto: {
          desc: item?.cor_produto?.text ? item?.cor_produto?.text : itemEdit?.cor_produto?.desc,
          cod: item?.cor_produto?.cod ? item?.cor_produto?.cod : itemEdit?.cor_produto?.cod,
        },
        quantidade: item?.quantidade,
        batidas: item?.impressao,
        tipo_gravacao: {
          desc: item?.personalizacao?.text ? item?.personalizacao?.text : itemEdit?.tipo_gravacao?.desc,
          cod: item?.personalizacao?.value ? item?.personalizacao?.value : itemEdit?.tipo_gravacao?.cod,
        },
        valor_unitario: response.data.valor_unitario,
        valor_total: response.data.valor_total,
        cubagem: {
          qtdcaixa: qtdcaixa[0],
          altura: altura[0],
          largura: largura[0],
          comprimento: comprimento[0],
          peso: peso[0],
          calc_kangu: responseTabelaPreco.data[0]?.calc_kangu,
          cubagemTotal: cubagemTotal[0],
        },
      }

      if (response.status === 200) {
        setItemEdit(newItem)
      }
    },
    [itemEdit, setItemEdit],
  )

  return (
    <>
      <Modal blockScrollOnMount={false} isOpen={openModal} onClose={handleCloseModal} size="5xl">
        <ModalOverlay />
        <ModalContent borderRadius="1rem">
          <ModalHeader
            color="#cc0000"
            ml="auto"
            mr="4rem"
            fontFamily={"Open Sans, sans-serif"}
            fontWeight="bold"
            {...(isMobile && {
              fontSize: ".9rem",
              paddingBottom: ".7rem",
              position: "relative",
              left: "-1rem",
            })}
          >
            Edite as Configurações do seu Produto <br />
            {isMobile && (
              <Text as="span" fontSize=".8rem" color="#cc0000" ml="auto" textAlign="start">
                Item 1{" "}
                <Text as="span" color="#000000">
                  {setFirstLetterUpperCase(itemEdit?.nome_prod)} - {itemEdit?.codprod} -
                </Text>
              </Text>
            )}
          </ModalHeader>

          <Icon
            as={IoMdCloseCircle}
            onClick={handleCloseModal}
            position="absolute"
            top="1rem"
            right="1rem"
            width="1.9rem"
            height="1.9rem"
            color="#CFCFCF"
            cursor="pointer"
          />

          <ModalBody>
            <Flex
              m="0 auto"
              w="100%"
              alignItems="flex-start"
              justifyContent="center"
              gap={"2.5rem"}
              {...(isMobile && { flexDirection: "column" })}
            >
              {!isMobile && <ProductInfo itemEdit={itemEdit} />}
              <EditeSeuProduto
                colors={itemEdit?.list_cores}
                personalizacao={itemEdit?.tipos_gravacao}
                impressao={itemEdit?.numero_max_impressoes}
                prazo={itemEdit?.prazo_producao}
                handleEditItem={handleEditItem}
                handleSubmitEdit={handleSubmitEdit}
              />
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
