import { Button, useMediaQuery } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { AiFillCaretLeft, AiOutlineArrowLeft } from "react-icons/ai";


export const BotaoVoltar = () => {
  
  // const [MobileView] = useMediaQuery('(max-width: 768px)')
  const [mobileView, setMobileView] = useState();

  useEffect(() =>{
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      setMobileView(true);
    }else{
      setMobileView(false);
    }
  },[])

  return (
    <>
    {mobileView ? (
      <Button fontSize='25px' fontFamily='Gisha Regular' ml='25px' h='30px' leftIcon={<AiOutlineArrowLeft/>} bgColor='#ededed' _hover={{bgColor:'#ededed'}} boxShadow='none !important' onClick={() =>window.history.back()} _active={{bgColor:'#ededed'}} />
      ):(
      <Button fontSize='14px' fontFamily='Gisha Regular' ml='25px' h='30px' leftIcon={<AiFillCaretLeft/>} bgColor='#ededed' _hover={{bgColor:'#ededed'}} boxShadow='none !important' onClick={() =>window.history.back()} _active={{bgColor:'#ededed'}} >Voltar</Button>
    )}
    </>
  )
}

