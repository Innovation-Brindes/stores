import { ChevronDownIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/image";
import { Flex, Text } from "@chakra-ui/layout";
import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useWhatsApp } from "../../contexts/WhatsAppProvider";
import { BsBatteryHalf } from "react-icons/bs";
import { MdNetworkWifi } from "react-icons/md";
import { MdNetworkCell } from "react-icons/md";
import { useEffect } from "react";
import { CgMail } from "react-icons/cg";
import { AiFillChrome } from "react-icons/ai";

export function Header() {
  const { setOpenChat } = useWhatsApp();
  const [time, setTime] = useState(0);

  //pegar hora atual e atualizar a cada 1 segundo
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Flex
        alignItems="center"
        gap={5}
        w="100%"
        bgColor="#0c685d"
        padding=".2rem"
        justifyContent="space-between"
        paddingInline=".5rem"
      >
        <Flex alignItems={"center"} gap={1}>
          <CgMail size="1.3rem" color="#fff" />
          <AiFillChrome size="1.3rem" color="#fff" />
        </Flex>
        <Flex gap={2} alignItems="center">
          <MdNetworkWifi size="1rem" color="#fff" />
          <MdNetworkCell size="1rem" color="#fff" />
          <BsBatteryHalf size="1.3rem" color="#fff" />
          <Text m="0" color="#fff">
            {time}
          </Text>
        </Flex>
      </Flex>
      <Flex
        alignItems="center"
        gap={5}
        w="100%"
        bgColor="#075E54"
        paddingBlock=".3rem"
        paddingInline=".7rem"
      >
        <Image
          src="/images/menu/chat/logo.png"
          alt="whatsapp"
          width="1.5rem"
          height="1.5rem"
        />
        <Text m="0" color="#fff">
          Innovation Brindes
        </Text>
        <Flex
          justifySelf="flex-end"
          flexGrow="1"
          justifyContent="flex-end"
          cursor="pointer"
        >
          <Flex
            as={Flex}
            rightIcon={<ChevronDownIcon />}
            onClick={() => setOpenChat(false)}
          >
            <AiOutlineCloseCircle size="1.5rem" color="#fff" />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
