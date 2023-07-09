import { Box, Flex, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { ContainerBoxImg, ContainerFlex } from '../../../Carrinho/styles'
import { CarrinhoContentResumoPedidoListaProdutosProdutoTitleTextNomeProdFlexMobile } from '../../../Carrinho/stylesMobile'
import { InputEnviarMaisTarde, InputEnviarMaisTardeMobile } from '../../styles'

export const ComponentCarrinhoFinalizarPedidoMobile = (props) => {
  return (
    <ContainerFlex>

      <Flex w='100%' h='180px'>
        <ContainerBoxImg>
          <a href='#'>
            <img style={{ height: '130px', width: '120px', border: '1px solid rgb(228, 228, 228)', borderRadius: '7px', objectFit: 'cover', display: 'block' }} alt="url-img" src='' />
          </a>
        </ContainerBoxImg>
        <Box h='180px' w='245px'>
          <CarrinhoContentResumoPedidoListaProdutosProdutoTitleTextNomeProdFlexMobile>
            <a href='#'>
              <Text fontSize='15px' mt='15px' fontFamily='Gisha'>data.nome_prod - data.codprod -</Text>
            </a>
            <Image
              w='25px'
              h='25px'
              position='relative'
              cursor='pointer'
              top='10px'
              left='20px'
              alt="btnRemoveMobile"
              src={props.btnRemoveMobile}
              onClick={''}
            />
          </CarrinhoContentResumoPedidoListaProdutosProdutoTitleTextNomeProdFlexMobile>
          <VStack mt='-10px' spacing={0.5} align='stretch' color='rgb(120, 120, 120)' fontSize='13px' fontFamily='Gisha'>
            <Text mb='-0px'>
              <strong>Cor:</strong> data.cor_produto.desc
            </Text>
            <Text>
              <strong>Gravação:</strong> data.tipo_gravacao.desc
            </Text>
            <Text>
              <strong>Impressões:</strong> data.batidas
            </Text>
            <Text>
              <strong>Prazo de produção:</strong> data.prazo dias úteis
            </Text>
          </VStack>
        </Box>
      </Flex>
      <Box fontFamily='Gisha' fontSize='14px' textAlign='center' color='rgb(120, 120, 120)' w='400px' h='auto'>
        <Flex align='center' justify='space-between' w='400px' h='100px'>
          <Text w='60px'><strong>Qtd.</strong></Text>
          <Text w='70px'><strong>Prazo de Produção</strong></Text>
          <Text w='70px'><strong>Valor do frete</strong></Text>
          <Text w='70px'><strong>Valor unitário</strong></Text>
          <Text w='100px'><strong>Valor total</strong></Text>
        </Flex>

        <Flex align='center' justify='space-between' mt='-20px' w='400px' h='100px'>
          <Text w='60px'><strong>9.500.000</strong></Text>
          <Box h='50%' borderLeft='0.5px solid rgb(228, 228, 228)' />
          <Text mt='23px' w='70px'><strong>data.prazo dias úteis</strong></Text>
          <Box h='50%' borderLeft='0.5px solid rgb(228, 228, 228)' />
          <Text w='70px'><strong>----------</strong></Text>
          <Box h='50%' borderLeft='0.5px solid rgb(228, 228, 228)' />
          <Text w='70px'>
            <strong>
              {/* {parseFloat(
                    data.valor_unitario
                      .replace(".", "")
                      .replace(",", ".")
                  ).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                })}   */}
              R$ 11.000
            </strong>
          </Text>
          <Box h='50%' borderLeft='0.5px solid rgb(228, 228, 228)' />
          <Text w='100px'>
            <strong>
              {/* {parseFloat(
                      data.valor_total
                        .replace(".", "")
                        .replace(",", ".")
                    ).toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                })} */}
              R$ 12.000
            </strong>
          </Text>
        </Flex>
        <Flex h='35px' w='95%' mx='auto' borderRadius='5px' bgColor='#7fbc03'>
          <InputEnviarMaisTardeMobile>
            <input
              type="radio"
              checked={''}
            />
          </InputEnviarMaisTardeMobile>
          <Flex mx='auto' w='200px' h='100%'>
            <Image ml='-15px' mt='3px' cursor='pointer' h='30px' w='auto' src='images/clip-branco.svg' />
            <Text fontFamily='Gisha' fontSize='16px' ml='10px' mt='6px' color='white' textTransform='uppercase'><strong>Anexar logo / arte</strong></Text>
          </Flex>
        </Flex>

        <Flex my='10px' h='35px' w='95%' mx='auto' borderRadius='5px' bgColor='rgb(120, 120, 120)'>
          <InputEnviarMaisTardeMobile>
            <input
              type="radio"
              checked={''}
            />
          </InputEnviarMaisTardeMobile>
          <Flex mx='auto' w='auto' h='100%'>
            <Text textAlign='center' fontFamily='Gisha' fontSize='16px' mt='6px' color='white' textTransform='uppercase'><strong>Enviar logo / arte mais tarde</strong></Text>
          </Flex>
        </Flex>
      </Box>
    </ContainerFlex>
  )
}

