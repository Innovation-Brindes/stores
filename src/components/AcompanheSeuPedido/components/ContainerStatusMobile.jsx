import { Accordion, AccordionButton, Button, Heading, AccordionIcon, AccordionItem, AccordionPanel, Badge, Box, Flex, Image, Progress, Text, Link as ChakraLink } from '@chakra-ui/react'
import Link from 'next/link';
import React, { useState } from 'react'
import { useEffect } from 'react'
import { ContainerFlexStatusPedidoMobile } from '../styles'

const greenLoading = "/images/menu/green-loader.gif";

const ContainerStatusMobile = (props) => {

  const [pedido, setPedido] = useState(1)
  const [loading, setLoading] = useState(false)
  const [mobileView, setmobileView] = useState();


  useEffect(() => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      setmobileView(true);
    } else {
      setmobileView(false);
    }
    loadingResumoToggle()
  }, [])

  const loadingResumoToggle = async () => {
    try {
      if (props.state.itens_pedido.length == 0) {
        setLoading(true)
      }
      const timer = setTimeout(function () {
        setLoading(false);
        clearTimeout(timer);
      }, 500)
    } catch (err) {
      setLoading(false)
    }
  }

  return (
    <>
      {loading ? (
        <img width={100} height={100} style={{ position: 'relative', margin: 'auto' }} alt="green-loading" src={greenLoading} />
      ) : (
        <ContainerFlexStatusPedidoMobile itens_pedido={props.state.itens_pedido}>
          {props.state.itens_pedido.length > 0 ? (
            <Flex align='center' h='40px' justify='center' pt='35px' mb='20px' bgColor='#f5f5f5' mx='auto'>
              <Text textAlign='center' fontsize='16px' fontFamily='Gisha' textTransform='uppercase'>Previsão de conclusão do seu pedido: <br /><strong>{props.state.dados_parceiro.data_previsao_pedido}</strong></Text>
            </Flex>
          ) : (
            <></>
          )}
          {props.state.itens_pedido.length !== 0 ? props.state.itens_pedido.map((item) => {

            return (
              <>
                <Flex mt='20px' h='120px' w='100vw' align='center' pl='15px'>
                <Link href={`https://innovationbrindes.com.br/${item.link_produto}`}>
                  <a target='_blank'><Image border='1px solid #d1d1d1' src={item.image_url} w='85px' h='105px' /></a>
                </Link>
                  <Text ml='15px'>{item.nome_produto} <strong>- {item.codigo_prod} -</strong></Text>
                </Flex>
                <Flex pl='70px' w='100vw' h='50px' bgColor='#7fbc03' mt='20px' align='center' justify='center'>
                  <Image h='40px' w='40px' alt='icone-check' src='/images/check-acompanhe-seu-pedido.svg' />
                  <Flex ml='10px' w='100vw' color='white' h='100%' flexDir='column'>
                    <Text fontSize='18px'>{item.passo_atual_producao.descricao}</Text>
                    <Text fontSize='14px' mt='-21px'>{item.passo_atual_producao.data}</Text>
                  </Flex>
                </Flex>
                <Accordion allowToggle>
                  <AccordionItem>
                    {({ isExpanded }) => (
                      <>
                        <h2>
                          <AccordionButton mb='20px' h='50px'w='100vw' boxShadow='none !important' border='1px solid #7fbc03' mt='20px'>
                            <Box flex='1' fontSize='20px' pl='20px' textAlign='center'>
                              Status detalhado
                            </Box>
                            <AccordionIcon color='#7fbc03' />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                          <Flex justify="center" fontSize='20px'>
                            <Text>STATUS DO <strong>PEDIDO</strong></Text>
                            <Text ml='5px' color='#7fbc03'>
                              <strong>
                                {item.porcentagem_producao}%
                              </strong>
                            </Text>
                          </Flex>

                          <Flex justify='center'>
                            <Flex align='center' flexDir='column' h='480px'>
                              <Progress w='5px' mt='17px' hasStripe bgColor={'#7fbc03'} h='40px' size='sm' isIndeterminate={item.data_recebido_status === 'S' ? true : false} colorScheme='whiteAlpha' value={item.data_recebido_status === 'S' ? 100 : 0} />

                              <Badge textAlign='center' fontSize='25px' bgColor={item.data_recebido_status === 'S' ? '#7fbc03' : '#dbdbdb'} w='40px' variant='solid' h='40px' pt='5px' pl='6px' borderRadius='full'><Image src={item.data_recebido_status === 'S' ? '/images/check-acompanhe-seu-pedido.svg' : '/images/check-acompanhe-seu-pedido-cinza.svg'} size='30px' /></Badge>

                              <Progress w='5px' hasStripe bgColor={item.data_em_producao_status === 'S' ? '#7fbc03' : '#dbdbdb'} h='40px' size='sm' isIndeterminate={item.data_em_producao_status === 'S' ? true : false} colorScheme='whiteAlpha' value={item.data_em_producao_status === 'S' ? 100 : 0} />

                              <Badge textAlign='center' fontSize='25px' bgColor={item.data_em_producao_status === 'S' ? '#7fbc03' : '#dbdbdb'} w='40px' pt='4px' pl='5px' variant='solid' h='40px' borderRadius='full'><Image src={item.data_em_producao_status === 'S' ? '/images/check-acompanhe-seu-pedido.svg' : '/images/check-acompanhe-seu-pedido-cinza.svg'} size='30px' /></Badge>

                              <Progress w='5px' hasStripe bgColor={item.data_controle_status === 'S' ? '#7fbc03' : '#dbdbdb'} h='40px' size='sm' isIndeterminate={item.data_controle_status === 'S' ? true : false} colorScheme='whiteAlpha' value={item.data_controle_status === 'S' ? 100 : 0} />

                              <Badge textAlign='center' fontSize='25px' bgColor={item.data_controle_status === 'S' ? '#7fbc03' : '#dbdbdb'} w='40px' pt='4px' pl='5px' variant='solid' h='40px' borderRadius='full'><Image src={item.data_controle_status === 'S' ? '/images/check-acompanhe-seu-pedido.svg' : '/images/check-acompanhe-seu-pedido-cinza.svg'} size='30px' /></Badge>

                              <Progress w='5px' hasStripe bgColor={item.data_nota_fiscal_status === 'S' && item.data_controle_status === 'S' ? '#7fbc03' : '#dbdbdb'} h='40px' size='sm' isIndeterminate={item.data_nota_fiscal_status === 'S' && item.data_controle_status === 'S' ? true : false} colorScheme='whiteAlpha' value={item.data_nota_fiscal_status === 'S' && item.data_controle_status === 'S' ? 100 : 0} />

                              <Badge textAlign='center' fontSize='25px' bgColor={item.data_nota_fiscal_status === 'S' && item.data_controle_status === 'S' ? '#7fbc03' : '#dbdbdb'} w='40px' pt='4px' pl='5px' variant='solid' h='40px' borderRadius='full'><Image src={item.data_nota_fiscal_status === 'S' && item.data_controle_status === 'S' ? '/images/check-acompanhe-seu-pedido.svg' : '/images/check-acompanhe-seu-pedido-cinza.svg'} size='30px' /></Badge>

                              <Progress w='5px' hasStripe bgColor={item.data_coletado_status === 'S' ? '#7fbc03' : '#dbdbdb'} h='40px' size='sm' isIndeterminate={item.data_coletado_status === 'S' ? true : false} colorScheme='whiteAlpha' value={item.data_coletado_status === 'S' ? 100 : 0} />

                              <Badge textAlign='center' fontSize='25px' bgColor={item.data_coletado_status === 'S' ? '#7fbc03' : '#dbdbdb'} w='40px' pt='4px' pl='5px' variant='solid' h='40px' borderRadius='full'><Image src={item.data_coletado_status === 'S' ? '/images/check-acompanhe-seu-pedido.svg' : '/images/check-acompanhe-seu-pedido-cinza.svg'} size='30px' /></Badge>

                              <Progress w='5px' hasStripe bgColor={item.data_coletado_status === 'S' ? '#7fbc03' : '#dbdbdb'} h='40px' size='sm' isIndeterminate={item.data_coletado_status === 'S' ? true : false} colorScheme='whiteAlpha' value={item.data_coletado_status === 'S' ? 100 : 0} />
                            </Flex>

                            <Flex ml='30px' justify='space-around' flexDir='column'>
                              <Box h='60px' color={item.data_recebido_status === 'S' ? 'black' : '#d1d1d1'} mt='30px'>
                                <Text >Pedido recebido</Text>
                                <Text w='200px' fontSize='11px' mt='-17px'>Pedido recebido dia <br />{item.data_recebido_status === 'S' ? item.data_recebido.substr(0, item.data_recebido.length - 8) : ''}<br />{item.ip_data_recebido}</Text>
                              </Box>
                              <Box h='40px' color={item.data_em_producao_status === 'S' ? 'black' : '#d1d1d1'} position='relative' top='-15px'>
                                <Text >Em produção</Text>
                                <Text h='20px' fontSize='11px' mt='-17px'>{item.data_em_producao}</Text>
                              </Box>
                              <Box h='40px' color={item.data_controle_status === 'S' ? 'black' : '#d1d1d1'} position='relative' top='-16px'>
                                <Text >Controle de qualidade</Text>
                                <Text h='20px' fontSize='11px' mt='-17px'>{item.data_controle}</Text>
                              </Box>
                              <Box h='40px' color={item.data_nota_fiscal_status === 'S' && item.data_controle_status === 'S' ? 'black' : '#d1d1d1'} position='relative' top='-16px'>
                                <Text >Nota Fiscal</Text>
                                <Text h='20px' fontSize='11px' mt='-17px'>{item.data_nota_fiscal}</Text>
                              </Box>
                              <Box h='60px' color={item.data_coletado_status === 'S' ? 'black' : '#d1d1d1'} position='relative' top='-18px' >
                                <Text lineHeight='130%' >Coletado pela transportadora</Text>
                                {item.data_coletado_status === 'S' ? (
                                  <>
                                    <Text h='20px' position='relative' top='-10px' fontSize='11px' >{item.data_coletado}</Text>
                                    <Text color='gray' fontSize='11px' position='relative' top='-20px' >{item.nome_transportadora}</Text>
                                    <ChakraLink style={{ textDecoration: 'none' }} href={item.tipo_transporte !== 'Coletado pela transportadora' || item.telefone_transportadora === '' ? 'tel:551126496030' : `tel:${item.telefone_transportadora}`}>
                                      <Text textAlign='left' ml='20px' mt='-50px' position='relative' color='gray' fontSize={'11px'}><Image right='20px' position='relative' top='15px' h='15px' w='15px' alt='icone-phone' src={'/images/icone-phone.svg'} />{item.tipo_transporte === 'Coletado pela transportadora' ? ` +${item.telefone_transportadora}` : '+55(11) 2649-6030'}</Text>
                                    </ChakraLink>
                                  </>
                                ) : (
                                  <></>
                                )}
                              </Box>
                            </Flex>
                          </Flex>
                        </AccordionPanel>
                      </>
                    )}
                  </AccordionItem>
                </Accordion>
              </>
            )
          })
            :
            <Flex flexDir='column' h='100px' borderBottom='1px solid #d1d1d1' justify='center' align='center'>
              <Heading as='h1' size='xl'>Você ainda não tem pedido</Heading>
              <Button bgColor='#7fbc03' _hover={{ bgColor: "#7fbc03", opacity: "0.9" }} _active={{ transform: 'scale(0.95)', bgColor: "#7fbc03" }} transition='all 0.2s cubic-bezier(.08,.52,.52,1)' color='white' boxShadow='none !important'>Voltar</Button>
            </Flex>
          }
        </ContainerFlexStatusPedidoMobile>
      )}
    </>
  )
}

export default ContainerStatusMobile
