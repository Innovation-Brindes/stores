import { Avatar, Flex, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Text, useDisclosure, Box, ModalFooter } from '@chakra-ui/react'
import React from 'react'
import { FlexButtonTshirt, FlexTableBody, FlexTableFooter, FlexTableHead, FlexTableTitle, ImageCamisaTabela, ModalTShirt, ModalHeaderTitle } from '../styles'

const camiseta = '/images/camiseta_botao.svg'
const camiseta_modal_tabela = '/images/camiseta_modal_tabela.png'

const ModalTamanho = ({ nome_prod, modelo, mobileView, tabela_tamanho_genero }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <FlexButtonTshirt isOpen={isOpen} onClick={onOpen}>
        <Avatar bgColor='white' w='35px' h='35px' objectFit='cover' src={camiseta} />
        <Text ml='5px' fontFamily='Gisha' mt='15px' fontSize='12px'>VER TABELA <strong>DE MEDIDAS</strong></Text>
      </FlexButtonTshirt>
      <ModalTShirt borderRadius='1px' size={mobileView ? 'sm' : 'xxl'} motionPreset='slideInBottom' isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent boxShadow='box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px' w={mobileView ? '100%' : '750px'} h={mobileView ? 'auto' : '370px'}>
          <ModalHeaderTitle>Tabela {tabela_tamanho_genero !== 'F' ? '1' : '2'}</ModalHeaderTitle>
          <ModalCloseButton mt='3px' color='#E8E8E8' _hover={{ color: 'gray', border: '2px solid gray' }} border='2px solid #E8E8E8' colorScheme='gray' borderRadius='50%' boxShadow='none !important' />
          <ModalBody >
            <Flex flexDir={mobileView ? 'column' : 'row'}>
              <ImageCamisaTabela mx={mobileView ? 'auto' : ''} src={camiseta_modal_tabela} />
              <Box fontFamily='Gisha'>
                <Box ml={mobileView ? '0' : '15px'} pt={mobileView ? '15px' : '13px'} w={mobileView ? '100%' : '470px'} textAlign='center' h='50px' bgColor='#E8E8E8'>
                  <FlexTableTitle >MEDIDAS {nome_prod} MODELO {modelo.toString().substr(-4)}</FlexTableTitle>
                </Box>
                {tabela_tamanho_genero !== 'F' ? (
                  <>
                    <FlexTableHead>
                      <Flex w={mobileView ? '50px' : '65px'} mr='28px' lineHeight='100%' flexDir='column'>
                        <Text textAlign='left' mt='-3px' >Tamanho</Text>
                        <Text textAlign='center' mt='-15px'>(cm)</Text>
                      </Flex>
                      <Text w={mobileView ? '40px' : '50px'} >P</Text>
                      <Text w={mobileView ? '40px' : '50px'} >M</Text>
                      <Text w={mobileView ? '40px' : '50px'} >G</Text>
                      <Text w={mobileView ? '40px' : '50px'} >GG</Text>
                      <Text w={mobileView ? '40px' : '50px'} >XGG</Text>
                    </FlexTableHead>
                    <FlexTableBody pt='10px' >
                      <Text color='#FF4F00' w={mobileView ? '70px' : '90px'} textAlign='left' ><b>A</b> (Altura)</Text>
                      <Text w={mobileView ? '40px' : '50px'} >69 CM</Text>
                      <Text w={mobileView ? '40px' : '50px'} >72 CM</Text>
                      <Text w={mobileView ? '40px' : '50px'} >74 CM</Text>
                      <Text w={mobileView ? '40px' : '50px'} >76 CM</Text>
                      <Text w={mobileView ? '40px' : '50px'} >78 CM</Text>
                    </FlexTableBody>
                    <FlexTableBody pt='5px'>
                      <Text color='#FF4F00' w={mobileView ? '70px' : '90px'} textAlign='left' ><b>L</b> (Largura)</Text>
                      <Text w={mobileView ? '40px' : '50px'} >50 CM</Text>
                      <Text w={mobileView ? '40px' : '50px'} >53 CM</Text>
                      <Text w={mobileView ? '40px' : '50px'} >56 CM</Text>
                      <Text w={mobileView ? '40px' : '50px'} >59 CM</Text>
                      <Text w={mobileView ? '40px' : '50px'} >63 CM</Text>
                    </FlexTableBody>
                  </>
                ) : (
                  <>
                    <FlexTableHead>
                      <Flex w={mobileView ? '50px' : '65px'} mr='28px' lineHeight='100%' flexDir='column'>
                        <Text textAlign='center' mt='-3px' >Tamanho</Text>
                        <Text textAlign='center' mt='-15px'>(cm)</Text>
                      </Flex>
                      <Text w={mobileView ? '40px' : '50px'} >P</Text>
                      <Text w={mobileView ? '40px' : '50px'} >M</Text>
                      <Text w={mobileView ? '40px' : '50px'} >G</Text>
                      <Text w={mobileView ? '40px' : '50px'} >GG</Text>
                    </FlexTableHead>
                    <FlexTableBody pt='10px' >
                      <Text color='#FF4F00' w={mobileView ? '70px' : '90px'} textAlign='left' ><b>A</b> (Altura)</Text>
                      <Text w={mobileView ? '40px' : '50px'} >60 CM</Text>
                      <Text w={mobileView ? '40px' : '50px'} >62 CM</Text>
                      <Text w={mobileView ? '40px' : '50px'} >64 CM</Text>
                      <Text w={mobileView ? '40px' : '50px'} >66 CM</Text>
                    </FlexTableBody>
                    <FlexTableBody pt='5px'>
                      <Text color='#FF4F00' w={mobileView ? '70px' : '90px'} textAlign='left' ><b>L</b> (Largura)</Text>
                      <Text w={mobileView ? '40px' : '50px'} >41 CM</Text>
                      <Text w={mobileView ? '40px' : '50px'} >44 CM</Text>
                      <Text w={mobileView ? '40px' : '50px'} >47 CM</Text>
                      <Text w={mobileView ? '40px' : '50px'} >50 CM</Text>
                    </FlexTableBody>
                  </>
                )}
                <ModalFooter>
                  <FlexTableFooter>Na indústria têxtil podem existir diferenças de 5% em relação as medidas indicadas.</FlexTableFooter>
                </ModalFooter>
              </Box>
            </Flex>
          </ModalBody>
        </ModalContent>
      </ModalTShirt>
    </>
  )
}

export default ModalTamanho
//teste