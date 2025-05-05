import { Box, Flex, Image, Text, useMediaQuery } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { CarrinhoContentResumoPedidoListaProdutosProdutoTitleTextNomeProdFinalizarPedido, ContainerBoxProductTableTextFinalizarPedido, InputEnviarMaisTarde } from '../../styles'

const btnRemoveMobile = "/images/btn_remove_mobile.svg";

export const ComponentCarrinhoFinalizarPedido = () => {
  const [size1024px] = useMediaQuery('(max-width: 1024px)')
  const [mobileView, setmobileView] = useState(false)


  useEffect(() => {

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      setmobileView(true);
    } else {
      setmobileView(false);
    }
  }, [])

  return (
    <>
      <Box borderTop='1px solid rgb(204, 204, 204)' w='98%' maxW='1160px' mx='auto' />
      <Flex h='200px' w='100%'>
        <Flex pt='15px' justify='start' pl={size1024px ? '20px' : '50px'} align='center' w='45%' h='150px'>
          <Box mt='20px' border='1px solid rgb(204, 204, 204)' w='100px' h='130px' />
          <ContainerBoxProductTableTextFinalizarPedido>
            <CarrinhoContentResumoPedidoListaProdutosProdutoTitleTextNomeProdFinalizarPedido>
              <a href={''}>
                <Text fontSize='15px' fontFamily='Gisha'>data.nome_prod <strong>- data.codprod -</strong></Text>
              </a>
              <Text fontSize={size1024px ? '12px' : '14px'} mt='30px' fontFamily='Gisha'>
                Cor: única | Gravação: tampo 2 cores
              </Text>
              <Text fontSize={size1024px ? '12px' : '14px'} mt='-5px' fontFamily='Gisha'>
                Impressões: 2 | Prazo de produção: 10 dias úteis
              </Text>
            </CarrinhoContentResumoPedidoListaProdutosProdutoTitleTextNomeProdFinalizarPedido>
          </ContainerBoxProductTableTextFinalizarPedido>
        </Flex>
        <Flex flexDir='column' mt='20px' align='center' w='65%' h='200px'>
          <Flex w='100%' h='100px'>
            <Box h='70%' w='15%' borderLeft='1px solid rgb(204, 204, 204)' >
              <Text mt='20px' textAlign='center'>1000</Text>
            </Box>
            <Box h='70%' w='35%' borderLeft='1px solid rgb(204, 204, 204)' >
              <Text textAlign='center' mt='20px' >10 dias úteis</Text>
            </Box>
            <Box h='70%' w='20%' borderLeft='1px solid rgb(204, 204, 204)'>
              <Text mt='20px' textAlign='center'>R$ 115,35</Text>
            </Box>
            <Box h='70%' w='30%' borderLeft='1px solid rgb(204, 204, 204)'>
              <Text textAlign='center' mt='20px'><strong>R$ 223.150,00</strong></Text>
            </Box>
          </Flex>
          <Flex fontFamily='Akrobat' ml='-80px' fontSize='14px' justify='center' w='100%' h='30px'>
            <Flex w='170px' h='100%'>
              <Image cursor='pointer' h='30px' w='auto' src='images/clip.svg' />
              <Text ml='10px' mt='4px' >Anexar logo | arte</Text>
            </Flex>
            <Flex ml='30px' w='200px' h='100%'>
              <InputEnviarMaisTarde>
                <input
                  type="radio"
                  checked={''}
                />
                <Text w='200px' mt='4px' >Enviar a arte mais tarde.</Text>
              </InputEnviarMaisTarde>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}