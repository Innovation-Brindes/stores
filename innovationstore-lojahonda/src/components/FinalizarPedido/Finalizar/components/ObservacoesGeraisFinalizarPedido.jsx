import { Box, Text, useMediaQuery } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

export const ObservacoesGeraisFinalizarPedido = () => {
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
    <Box fontFamily='Gisha' lineHeight='140%' pt='15px' px='10px' fontSize={size1024px ? '12px' : '13px'} color='#6d6e71' border='1px solid rgb(204, 204, 204)' w='98%' maxW='1160px' mx='auto' h='300px'>
      <Text fontSize='15px' textAlign='center' color='#FF4F00' textTransform='uppercase'><strong>Observações Gerais</strong></Text>
      <Box overflow={mobileView ? 'auto' : 'none'} h={mobileView ? '80%' : ''}>
        <Text><strong>1. CONDIÇÕES DE PAGAMENTO:</strong> faturado: 14 DIAS ddl</Text>
        <Text><strong>2. PRAZO DA PROPOSTA:</strong> 2 dias, ou por enquanto durarem nossos estoques. Caso o produto/cor escolhido esteja em falta ou tenha sofrido alterações de valores, daremos uma opção de produto similar.</Text>
        <Text><strong>3. SOBRE ICMS ST:</strong> Empresa optante pelo Simples não da direito ao Crédito de ICMS. 1º. Nas operações interestaduais realizadas com contribuintes, cujo Estado ﬁrmou Protocolos ou Convênios com o Estado de São Paulo, que estabelece o regime de substituição tributaria , a ELE ﬁca atribuída a responsabilidade pela retençãoe recolhimento do imposto em favor do Estado destinatário .O orçamento acima , sofrerá alteração quanto ao ICMS-ST , pois cada Estado tem uma singularidade e alíquota diferenciada, cujo imposto será retido, recolhido, lançado na NF-E e no respectivo boleto. 2º. Os Estados que forem signatários do Protocolo ICMS no.21/2011 cujo teor, estabelece a favor da unidade federada do destino da mercadoria, o ICMS devido na operação interestadual em que o consumidor ﬁnal adquire mercadoria sob encomenda de forma não presencial. Caso o cliente se encaixe nessa situação o imposto será, retido,recolhido, lançado na NF-E e no respectivo boleto.</Text>
        <Text><strong>4. TROCA:</strong> Nos termos do art. 24 da Lei 8078/90, os produtos terão garantia para defeito de fabricação pelo prazo de 30 (trinta) dias quando não duráveis e 90 (noventa) dias quando duráveis, ambos contados da data de sua entrega.</Text>
      </Box>
    </Box>
  )
}

