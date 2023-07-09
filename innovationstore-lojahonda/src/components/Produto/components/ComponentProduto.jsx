import { Box, ChakraProvider, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Show, Spinner, Text, useDisclosure, useMediaQuery } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import SlideProduto, { CarrosselProduto } from '../slide-produto'
import { DivComponentMobile, FlexContainerComponentProduto, FlexContainerComponentProdutoBoxImage, FlexContainerComponentProdutoBoxImageMotion, FlexContainerComponentProdutoImage } from '../styles'
import SlideZoomProduto from '../slide-zoom-produto'
import ModalTamanho from './ModalTamanho'


export const ComponentProduto = (props) => {

  
  const [standardImage, setStandardImage] = useState(null);
  const [idxImage, setIdxImage] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const MotionModalContent = motion(ModalContent);
  const MotionModalBody = motion(ModalBody);
  const [mobileView, setmobileView] = useState(false);
  const [sizeWidth1366px, setSizeWidth1366px] = useState(false)


  useEffect(() => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      setmobileView(true);
    } else {
      setmobileView(false);
    }
  }, [])

  useEffect(() => {
    if (window.matchMedia("(max-width: 1366px)").matches) {
      setSizeWidth1366px(true)
    } else {
      setSizeWidth1366px(false)
    }
  }, []);


  useEffect(() => {
    if (standardImage == null || standardImage == undefined) {
      setStandardImage(props.list_img[0]);
    }
  })

  const ifnull = (a, b) => {
    if (a == undefined || a == null || a == "") {
      return b;
    } else {
      return a;
    }
  }

  return (
    <ChakraProvider>
      <FlexContainerComponentProduto>

        <DivComponentMobile heigth={'70px'}>
          <h1 style={{ textAlign: 'center' }}>{ifnull(props.state.dados.nome, "").charAt(0).toUpperCase() + ifnull(props.state.dados.nome, "").toLowerCase().slice(1)}</h1>
          <p style={{ textAlign: 'center' }}>Modelo: <strong>{props.state.dados.referencia}</strong></p>
          {/* <Text pl='20px' pt='30px' fontSize="21px" textAlign='center' fontFamily={'Gisha'}>{props.state.dados.nome}</Text>
          <Text pl='20px' mt='-15px' fontSize="18px" textAlign='center'  fontFamily={'Gisha'}>Modelo: <strong>{props.state.dados.referencia}</strong></Text> */}
        </DivComponentMobile>

        <Show breakpoint='(min-width: 768px)'>
          <Text mt='0px' pl='25px' fontSize="22px" h={'27px'} letterSpacing={'0.03rem'}>{ifnull(props.state.dados.nome, "").charAt(0).toUpperCase() + ifnull(props.state.dados.nome, "").toLowerCase().slice(1)}</Text>
          <Text pl='25px' mb='30px' mt='-15px' fontSize="16px"><strong>Modelo: </strong>{" "}{props.state.dados.referencia}</Text>
        </Show>

        <FlexContainerComponentProdutoBoxImage cursor='pointer'>
          {props.list_img == '' ? (
            <Flex justify='center' align='center' h='100%' w='100%' >
              <Spinner
                thickness='5px'
                speed='0.3s'
                emptyColor='gray.200'
                color={'#58bc03'}
                size='xl'
                position={'relative'}
                marginLeft={'auto'}
                marginRight={'auto'}
              />
            </Flex>
          ) : (
            mobileView ?
              (
                <CarrosselProduto list_img={props.list_img} />
              ) : (
                <FlexContainerComponentProdutoImage onClick={() => { setIdxImage(idxImage != 0 ? idxImage - 1 : 0); onOpen() }} mx='auto' src={standardImage} />
              )
          )}
        </FlexContainerComponentProdutoBoxImage>
        <Modal size={sizeWidth1366px ? "3xl" : "4xl"} isCentered onClose={onClose} isOpen={isOpen}>
          <ModalOverlay />
          <MotionModalContent
            h={sizeWidth1366px ? 'auto' : 'auto'}
            rounded={5} ml={[0]}
            initial={{ opacity: 0, y: 0, x: -450, scale: 0.1 }}
            animate={{ opacity: 1, x: 0, y: 0, scale: 1, transition: { type: 'fade', stiffness: 100 } }}
          >
            <ModalHeader>
              {/* <Text h={11} textAlign={'center'}>{props.state.dados.nome}</Text> */}
            </ModalHeader>
            <ModalCloseButton boxShadow='none !important' />
            <MotionModalBody initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { delay: 0.3 } }}>
              <FlexContainerComponentProdutoBoxImageMotion >
                <SlideZoomProduto list_img={props.list_img} standardImage={standardImage} setStandardImage={setStandardImage} setIdxImage={setIdxImage} idxImage={idxImage} />
              </FlexContainerComponentProdutoBoxImageMotion>
            </MotionModalBody>
          </MotionModalContent>
        </Modal>

        <Box mr='auto' mt={mobileView ? '0px' : '0px'} ml={mobileView ? '5px' : 'auto'} w='90%' h='120px' display={mobileView ? 'none' : 'block'}>
          <Text mt='10px'>Mais fotos</Text>
          <Box mt='-5px' mr='auto' w='400px' h='100px' ml='auto'>
            {props.list_img == '' ? (
              <Flex ml='-20px' justify='space-around' align='center' h='100px' w='400px' >
                <Spinner
                  thickness='2px'
                  speed='0.3s'
                  emptyColor='gray.200'
                  color={'#58bc03'}
                  size='md'
                  position={'relative'}
                  marginLeft={'auto'}
                  marginRight={'auto'}
                />
                <Spinner
                  thickness='2px'
                  speed='0.3s'
                  emptyColor='gray.200'
                  color={'#58bc03'}
                  size='md'
                  position={'relative'}
                  marginLeft={'auto'}
                  marginRight={'auto'}
                />
                <Spinner
                  thickness='2px'
                  speed='0.3s'
                  emptyColor='gray.200'
                  color={'#58bc03'}
                  size='md'
                  position={'relative'}
                  marginLeft={'auto'}
                  marginRight={'auto'}
                />
              </Flex>
            ) : (
              <SlideProduto list_img={props.list_img} setStandardImage={setStandardImage} setIdxImage={setIdxImage} idxImage={idxImage} />
            )}
          </Box>
        </Box>

        {props.state.dados.prod_vestuario === 'S' ? (
          <Box position='relative' top={mobileView ? '20px' : '50px'}>
            <ModalTamanho mobileView={mobileView} sizeWidth1366px={sizeWidth1366px} tabela_tamanho_genero={props.state.dados.genero} nome_prod={props.state.dados.nome} modelo={props.state.dados.referencia} />
          </Box>
        ) : (
          <></>
        )}
      </FlexContainerComponentProduto>
    </ChakraProvider>
  )
}
