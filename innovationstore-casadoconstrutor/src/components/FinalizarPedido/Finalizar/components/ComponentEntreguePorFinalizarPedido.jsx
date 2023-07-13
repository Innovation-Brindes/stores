import { Box, Flex, Text, useMediaQuery, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { EditarEntregueProFinazilarPedido } from './componentsModalEditarFinalizarPedido/EditarEntreguePorFinalizarPedido'
import { EditarTransportadora } from './componentsModalEditarFinalizarPedido/EditarTransportadora'

export const ComponentEntreguePorFinalizarPedido = () => {
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
    <Flex mx='auto' justify="space-between" w='98%' maxW='1160px' flexDir={mobileView ? 'column' : 'row'} h={mobileView ? 'auto' : '180px'}>
      <Box h={mobileView ? 'auto' : '130px'} w={mobileView ? '100%' : '65%'} my='auto' border='1px solid rgb(204, 204, 204)'>
        <Flex w='100%' h='50%'>
          <Flex flexDir={mobileView ? 'column' : 'row'} align={mobileView ? 'start' : 'center'} pt='15px' pl='20px' w={mobileView ? '100%' : '70%'} h='100%'>
            <Text textAlign={mobileView ? 'start' : 'center'} fontSize={size1024px ? '15px' : '16px'} color='#FF4F00' textTransform='uppercase'><strong>Entregue Por:</strong></Text>
            <Text fontSize={size1024px ? '15px' : '16px'} mt={mobileView ? '-15px' : '0'} ml={mobileView ? '0' : '10px'}>Trans Wells | Pontualidade em Transportes</Text>
          </Flex>
          <Flex display={mobileView ? 'none' : 'block'} mt='15px' align='center' justify='center' w='30%' h='100%'>
            <EditarTransportadora />
          </Flex>
        </Flex>
        <Flex mt={mobileView ? '10px' : '0'} flexDir={mobileView ? 'column' : 'row'} pl='20px' fontSize='14px' align={mobileView ? 'start' : 'center'} w='100%' h={mobileView ? 'auto' : '50%'}>
          <Text ><strong>Previsão Transportadora:</strong>{mobileView ? '' : size1024px ? <br /> : ''} 1 dia útil</Text>
          <Box display={mobileView ? 'none' : 'block'} mx='10px' h='60%' mt='-10px' borderLeft='1px solid rgb(204, 204, 204)' />
          <Text ><strong>Prazo da Produção:</strong>{mobileView ? '' : size1024px ? <br /> : ''} 10 dias úteis</Text>
          <Box display={mobileView ? 'none' : 'block'} mx='10px' h='60%' mt='-10px' borderLeft='1px solid rgb(204, 204, 204)' />
          <Text ><strong>Previsão de entrega:</strong>{mobileView ? '' : size1024px ? <br /> : ''} até 11 dias úteis</Text>
        </Flex>
        <Flex display={mobileView ? 'block' : 'none'} mt={mobileView ? '-10px' : '0'} align='center' mb={mobileView ? '10px' : '0'} justify={mobileView ? 'end' : 'center'} w={mobileView ? '100%' : '30%'} h='100%'>
          <EditarTransportadora />
        </Flex>
      </Box>
      <Flex h='130px' w={mobileView ? '100%' : '30%'} my='20px' border='1px solid rgb(204, 204, 204)'>

        <Flex flexDir='column' fontSize='15px' pt='15px' spacing={4} pl='20px' align='stretch' w='60%' h='100%'>
          <Text fontSize={size1024px ? '13px' : '15px'}>Valor total dos produtos:</Text>
          <Text fontSize={size1024px ? '13px' : '15px'}>Valor do frete:</Text>
          <Text fontSize={size1024px ? '12px' : '15px'} color='#FF4F00' textTransform='uppercase' ><strong>Valor total do pedido:</strong></Text>
        </Flex>

        <Flex flexDir='column' fontSize='15px' pt='15px' spacing={4} pl='10px' align='stretch' w='40%' h='100%'>
          <Text fontSize={size1024px ? '13px' : '15px'}><strong>R$ 9.780.070,00</strong></Text>
          <Text fontSize={size1024px ? '13px' : '15px'}><strong>R$ 250,00</strong></Text>
          <Text fontSize={size1024px ? '13px' : '15px'} color='#FF4F00' textTransform='uppercase' ><strong>R$ 9.780.320,00</strong></Text>
        </Flex>

      </Flex>
    </Flex>
  )
}
