import { Button, Flex, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, VStack, chakra, useToast, CloseButton, Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { BiEdit } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { ModalEditarDados } from '../../../styles';


export const EditarTransportadora = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()

  const MotionModalContent = motion(ModalContent);
  const MotionModalModal = motion(ModalBody);
  const [mobileView, setmobileView] = useState(false)


  useEffect(() => {

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      setmobileView(true);
    } else {
      setmobileView(false);
    }
  }, [])

  function closeAll() {
    // you may optionally pass an object of positions to exclusively close
    // keeping other positions opened
    // e.g. `{ positions: ['bottom'] }`
    toast.closeAll()
  }

  return (
    <>
      <ModalEditarDados>
        <Button onClick={() => { onOpen() }} bgColor='white' size='sm' transition='all 0.2s cubic-bezier(.08,.52,.52,1)' _hover={{ bgColor: 'white' }} leftIcon={<BiEdit color='#7fbc03' size={30} />} _active={{ bgColor: 'white', transform: 'scale(0.90)' }} boxShadow='none !important'>Editar</Button>
      </ModalEditarDados>
      <Modal isCentered='false' isOpen={isOpen} onClose={onClose}>
        <ModalOverlay
          bg='none'
          backdropFilter='auto'
          backdropInvert='40%'
          backdropBlur='2px'
        />
        <MotionModalContent
          w={mobileView ? '95%' : '500px'}
          initial={mobileView ? { opacity: 0, y: 100, x: 0, scale: 0.1 } : { opacity: 0, y: 0, x: 0, scale: 0.1 }}
          animate={mobileView ? { opacity: 1, x: 0, y: 0, scale: 1, transition: { type: "fade", stiffness: 100 } } : { opacity: 1, x: 0, y: 0, scale: 1, transition: { type: "spring", stiffness: 100 } }}
        >
          <ModalHeader color='#7fbc03'> <strong>Transportadoras</strong></ModalHeader>
          <ModalCloseButton color='#7fbc03' _hover={{ bgColor: '#7fbc03', color: 'white' }} _active={{ transform: 'scale(0.90)' }} boxShadow='none !important' />
          <MotionModalModal
            initial={{ y: -50, opacity: 0 }}
            animate={{
              y: 0, opacity: 1,
              transition: { delay: 0.3 }
            }}
          >
            <VStack spacing={3} align='right' h='auto' >
              <Input autoFocus focusBorderColor='gray' placeholder='CPF | CNPJ' />
              <Input focusBorderColor='gray' placeholder='Razão social' />
              <Input focusBorderColor='gray' placeholder='Endereço' />
              <Input focusBorderColor='gray' placeholder='Cidade | UF' />
              <Input focusBorderColor='gray' placeholder='CEP' />
            </VStack>
          </MotionModalModal>
          <ModalFooter>
            <Button onClick={() =>
              toast(
                {
                  position: 'bottom-left',
                  duration: 2000,
                  render: () => (
                    <Box borderRadius='10px' borderLeft='5px solid green' color='white' p={2} bg='#7fbc03'>
                      <Flex justifyContent='space-between'>
                        <Text mt='5px'><strong>Dados da transportadora atualizados!</strong></Text>
                        <CloseButton onClick={closeAll} boxShadow='none !important' />
                      </Flex>
                    </Box>
                  )
                },
                onClose()
              )
            } boxShadow='none !important' bgColor='#7fbc03' transition='all 0.2s cubic-bezier(.08,.52,.52,1)' _hover={{ bgColor: '#7fbc03', opacity: '0.9' }} _active={{ bgColor: '#7fbc03', transform: 'scale(0.90)', }} color='white'>Salvar</Button>
          </ModalFooter>
        </MotionModalContent>
      </Modal>
    </>
  )
}