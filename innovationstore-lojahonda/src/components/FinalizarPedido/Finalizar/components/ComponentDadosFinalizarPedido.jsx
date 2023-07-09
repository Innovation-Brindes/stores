import { Box, Flex, Text, useMediaQuery } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { EditarEntregueProFinazilarPedido } from './componentsModalEditarFinalizarPedido/EditarEntreguePorFinalizarPedido'
import EditarDadosDeFaturamentoFinalizarPedido from './componentsModalEditarFinalizarPedido/EditarFaturamentoFinalizarPedido'

export const ComponentDadosFinalizarPedido = () => {
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
    <Flex flexDir={mobileView ? 'column' : 'row'} fontSize='14px' mx='auto' w={mobileView ? '400px' : '98%'} justify='space-around' h={mobileView ? 'auto' : '280px'}>

      <Box pt='20px' mx={mobileView ? 'auto' : ''} my={mobileView ? '10px' : ''} pl={mobileView ? '10px' : '30px'} w={mobileView ? '400px' : size1024px ? '450px' : '550px'} border={mobileView ? 'none' : '1px solid rgb(204, 204, 204)'} borderRadius='3px' h='100%'>
        <Text fontFamily='Gisha Bold' color='#FF4F00' textTransform='uppercase'><strong>Dados do Faturamento</strong></Text>
        <Text mt='30px' textTransform='uppercase'><strong>Honda-automóveis-do-brasil-ltda</strong></Text>
        <Text mt='20px' ><strong>CPF | CNPJ: </strong> 31.632.728/0001-60 <strong>IE</strong></Text>
        <Text mt='-10px' >R Maria Amalia Lopes Azevedo, 2775 SL 02 - Vila Albertina</Text>
        <Text mt='-10px' >São Paulo | <strong>CEP: </strong>88034-110</Text>
        <Text mt='-10px' >Thiago Valezin - 119 41850150 - thiagovalezin@gmail.com</Text>
        <EditarDadosDeFaturamentoFinalizarPedido />
      </Box>

      <Box pt='20px' mx={mobileView ? 'auto' : ''} my={mobileView ? '10px' : ''} pl={mobileView ? '10px' : '30px'} w={mobileView ? '400px' : size1024px ? '450px' : '550px'} border={mobileView ? 'none' : '1px solid rgb(204, 204, 204)'} borderRadius='3px' h='100%'>
        <Text color='#FF4F00' textTransform='uppercase'><strong>Dados da Entrega</strong></Text>
        <Text mt='30px' textTransform='uppercase'><strong>Honda-automóveis-do-brasil-ltda</strong></Text>
        <Text mt='20px' ><strong>CPF | CNPJ: </strong> 31.632.728/0001-60 <strong>IE</strong></Text>
        <Text mt='-10px' >R Maria Amalia Lopes Azevedo, 2775 SL 02 - Vila Albertina</Text>
        <Text mt='-10px' >São Paulo | <strong>CEP: </strong>88034-110</Text>
        <Text mt='-10px' >Thiago Valezin - 119 41850150 - thiagovalezin@gmail.com</Text>
        <EditarEntregueProFinazilarPedido />
      </Box>

    </Flex>
  )
}

