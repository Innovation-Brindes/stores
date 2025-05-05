import React, { useEffect, useState } from 'react'
import { Box, Flex, Image, Text, VStack } from '@chakra-ui/react'
import { FlexCheckedFaturamento, FlexCheckedFaturamento2, FlexCheckedFaturamento3 } from '../styles';

const loadingGif = "/images/loading.gif";


const Index = () => {
  const [loading, setLoading] = useState(false)
  const [mobileView, setmobileView] = useState(false)

  useEffect(() => {
    try {
      setLoading(true)
      const timer = setTimeout(function () {
        setLoading(false);
        clearTimeout(timer);
      }, 1500)
    } catch (err) {
      setLoading(false)
    }
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      setmobileView(true);
    } else {
      setmobileView(false);
    }
  }, [])


  return (
    <>
      {loading ? (
        <Flex justify="center" w='98%' maxW='1200px' h='300px' align="center" mx='auto'>
          <img
            alt="loading"
            style={{
              position: "relative",
            }}
            src={loadingGif}
          />
        </Flex>
      ) : (
        <Flex mt={mobileView ? '-100px' : '0'} flexDir={mobileView ? 'column' : 'row'} boxShadow={mobileView ? 'none' : '1px 1px 3px 1px #dbdbdb'} fontFamily='gisha' borderRadius='10px' mx='auto' h={mobileView ? 'auto' : '300px'} w={mobileView ? '400px' : '100%'} maxW='1200px'>
          <Flex mt={mobileView ? '-40px' : '0'} flexDir='column' w='390px' h='100%'>
            <Flex justify='center' align='center' w='100%' h={mobileView ? '100px' : '200px'}>
              <Image src='images/pagamento1.svg' h={mobileView ? '50px' : '100px'} mt='40px' w='auto' />
            </Flex>
            <Box w='100%' h={mobileView ? '70px' : '200px'}>
              <FlexCheckedFaturamento>
                <input
                  type="radio"
                />
                <Box ml='-35px' mt={mobileView ? '0' : "-3px"} color='#414042'>
                  <Text textTransform='uppercase' fontSize={mobileView ? '18px' : "21px"}><strong>À Vista</strong></Text>
                  <Text fontSize="14px" mt='-20px'><strong>antecipado</strong></Text>
                </Box>
              </FlexCheckedFaturamento>
            </Box>
          </Flex>

          <Box display={mobileView ? 'none' : 'block'} borderLeft='1px solid #dbdbdb' h='250px' my='auto' />

          <Flex borderTop={mobileView ? '1px solid #dbdbdb' : ''} flexDir='column' w='400px' h='100%'>
            <Flex mt={mobileView ? '-35px' : '0'} justify='center' align='center' w='100%' h={mobileView ? '100px' : '200px'}>
              <Image src='images/pagamento2.svg' h={mobileView ? '50px' : '100px'} mt='40px' w='auto' />
            </Flex>
            <Box w='100%' h={mobileView ? '70px' : '200px'}>
              <FlexCheckedFaturamento>
                <input
                  type="radio"
                />
                <Box ml='-35px' mt={mobileView ? '0' : "-3px"} color='#414042'>
                  <Text textTransform='uppercase' fontSize={mobileView ? '18px' : "21px"}><strong>Cartão de Crédito</strong></Text>
                  <Text textAlign='center' fontSize="14px" mt='-20px'><strong>com acréscimo de 4%</strong></Text>
                </Box>
              </FlexCheckedFaturamento>
            </Box>
          </Flex>

          <Box display={mobileView ? 'none' : 'block'} borderLeft='1px solid #dbdbdb' h='250px' my='auto' />

          <Flex borderTop={mobileView ? '1px solid #dbdbdb' : ''} flexDir='column' w='400px' h='100%'>
            <Flex mt={mobileView ? '-35px' : '0'} justify='center' align='center' w='100%' h={mobileView ? '100px' : '200px'}>
              <Image src='images/pagamento3.svg' h={mobileView ? '50px' : '100px'} mt='50px' w='auto' />
            </Flex>
            <Box color='#414042' w='100%' h={mobileView ? '80px' : '200px'}>
              <FlexCheckedFaturamento2>
                <input
                  type="radio"
                />
                <Flex ml={mobileView ? '-41px' : '-35px'} mt={mobileView ? '0' : "-3px"} >
                  <Text textTransform='uppercase' fontSize={mobileView ? '18px' : "21px"}>Faturado </Text>
                  <Text ml={mobileView ? '6px' : '5px'} fontSize={mobileView ? '18px' : "21px"}><strong>15 dll</strong> </Text>
                </Flex>
              </FlexCheckedFaturamento2>
              <FlexCheckedFaturamento3>
                <input
                  type="radio"
                />
                <Flex ml='-33.5px' mt={mobileView ? '0' : "-3px"} >
                  <Text ml={mobileView ? '-7px' : '-2px'} textTransform='uppercase' fontSize={mobileView ? '18px' : "21px"}>Faturado </Text>
                  <Text ml={mobileView ? '15px' : '5px'} fontSize={mobileView ? '18px' : "21px"}> <strong>15 | 30 ddl</strong></Text>
                </Flex>
              </FlexCheckedFaturamento3>
              <Text textAlign='center' pt={mobileView ? '0' : '15px'} fontSize="14px">Faturado somente após a emissão da nota fiscal</Text>
              <Text textAlign='center' mt='-18px' fontSize="12px">(produto já personalizado para despacho)</Text>
            </Box>
          </Flex>

        </Flex>
      )
      }
    </>
  )
}

export default Index

