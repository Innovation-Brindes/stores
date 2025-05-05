import { Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'

const MobileButton = () => {
  const router = useRouter()

  return (
    <Link href='/acompanhe-seu-pedido' prefetch={true}>
      <Button as='a' ml='-10px' textDecoration='none' leftIcon={<AiOutlineArrowLeft fontSize={'25px'} />} bgColor='#f5f5f5' color='black' _hover={{ bgColor: '#f5f5f5', color:'black' }} _active={{ bgColor: '#f5f5f5', transform: 'scale(0.90)', }} boxShadow='none !important' />
    </Link>
  )
}

export default MobileButton
