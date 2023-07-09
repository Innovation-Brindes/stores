import {
  Badge,
  ChakraProvider,
  Flex,
  Input,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiFillCheckCircle, AiOutlineQrcode } from "react-icons/ai";
import { RiComputerLine } from "react-icons/ri";
import { maskString } from "../../../../../utils/mask";
import { ConfirmarPedido } from "../../ConfirmarPedido";
import { QRCode } from "./QRCode";

export const MethodPix = ({ urlPix, codigoPix, dadosPix }) => {
  const [isMaxWidth768] = useMediaQuery("(max-width: 768px)");
  const [isMinWidthMedium, setIsMinWidthMedium] = useState(false);
  const [copied, setCopied] = useState(false);

  const maskCNPJorCPF = (value) => {
    if (value.length > 11) {
      return maskString(value, "##.###.###/####-##");
    } else {
      return maskString(value, "###.###.###-##");
    }
  };

  useEffect(() => {
    if (isMaxWidth768 !== isMinWidthMedium) {
      setIsMinWidthMedium(isMaxWidth768);
    }
  }, [isMaxWidth768]);

  function copyToClipboard() {
    navigator.clipboard.writeText(codigoPix);
    setCopied(true);
  }

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    }
  }, [copied]);

  return (
    <ChakraProvider>
      <Flex
        width="100%"
        bg="#7fbc03"
        alignItems="center"
        justifyContent="center"
      >
        <Text
          width="100%"
          textAlign="center"
          margin="0"
          paddingBlock=".3rem"
          fontWeight="normal"
          color="white"
          textTransform="uppercase"
          {...(isMinWidthMedium && { fontSize: "1.2rem" })}
        >
          Falta pouco! Agora é só pagar pelo{" "}
          <Text as="span" m="0" fontWeight="bold">
            PIX
          </Text>{" "}
          para finalizar seu pedido
        </Text>
      </Flex>
      <Flex
        flexDir={"column"}
        alignItems="center"
        justifyContent="center"
        width="100%"
      >
        <Flex
          alignItems={isMinWidthMedium ? "flex-start" : "center"}
          gap={isMinWidthMedium && 6}
          width="100%"
          justifyContent="space-between"
          flexDirection={isMinWidthMedium ? "column" : "row"}
        >
          <Flex alignItems="center" gap={3}>
            <Flex
              padding="0.5rem"
              borderRadius="50%"
              backgroundColor="#7fbc03"
              color="#fff"
            >
              {" "}
              <RiComputerLine color="#fff" size={30} />
            </Flex>
            <Text as="span" fontSize="1rem">
              Acesse seu internet banking ou <br /> app de pagamentos
            </Text>
          </Flex>
          <Flex alignItems="center" gap={3}>
            <Flex
              padding="0.5rem"
              borderRadius="50%"
              backgroundColor="#7fbc03"
              color="#fff"
            >
              {" "}
              <AiOutlineQrcode color="#fff" size={30} />
            </Flex>
            <Text as="span" fontSize="1rem">
              Escolha a opção <br /> pagar com QR Code
            </Text>
          </Flex>
          <Flex alignItems="center" gap={3}>
            <Flex
              padding="0.5rem"
              borderRadius="50%"
              backgroundColor="#7fbc03"
              color="#fff"
            >
              {" "}
              <AiOutlineQrcode color="#fff" size={30} />
            </Flex>
            <Text as="span" fontSize="1rem">
              Escaneie o codigo abaixo
            </Text>
          </Flex>
          <Flex alignItems="center" gap={3}>
            <Flex
              padding="0.5rem"
              borderRadius="50%"
              backgroundColor="#7fbc03"
              color="#fff"
            >
              {" "}
              <AiFillCheckCircle color="#fff" size={30} />
            </Flex>
            <Text as="span" fontSize="1rem">
              Confira os dados e confirme o pagamento <br /> para{" "}
              <Text as="span" m="0" fontWeight="bold">
                {" "}
                {dadosPix.RAZAOEMP.toString()} <br />
                {maskCNPJorCPF(dadosPix.CNPJEMP.toString())}
              </Text>
            </Text>
          </Flex>
        </Flex>

        <Flex marginTop="2rem" transform="translateX(09%)" position="relative">
          <QRCode urlPix={urlPix} />
        </Flex>

        <Flex
          height=".1rem"
          width="100%"
          bgColor="#cecece"
          marginTop="
       2rem"
          alignItems="center"
          justifyContent="center"
          mb="1rem"
        >
          <Text fontSize="1rem" margin="0" bgColor="#fff" paddingInline="1rem">
            OU
          </Text>
        </Flex>
        <Text>
          Copie o código e cole na sessão "Pix Copia e Cola" do seu app de
          pagamentos
        </Text>
        <ConfirmarPedido
          label="COPIAR O CÓDIGO PIX"
          color="#fff"
          onClick={copyToClipboard}
        />

        <Flex width="100%" position="relative">
          <Input
            value={codigoPix}
            isReadOnly
            mt="2rem"
            cursor="pointer"
            borderColor={copied ? "green.500" : "gray.300"}
            onClick={copyToClipboard}
          />
          {copied && (
            <Badge colorScheme="green" position="absolute" top="0" right="0">
              Pix copiado!
            </Badge>
          )}
        </Flex>
      </Flex>
      <Flex
        width="100%"
        bg="#7fbc03"
        alignItems="center"
        justifyContent="center"
      >
        <Text
          width="100%"
          textAlign="center"
          margin="0"
          paddingBlock=".3rem"
          fontWeight="normal"
          color="white"
          textTransform="uppercase"
          {...(isMinWidthMedium && { fontSize: "1.2rem" })}
        >
          Depois de efetuar o pagamento, aguarde que enviaremos um e-mail com a
          confirmação.
        </Text>
      </Flex>
    </ChakraProvider>
  );
};
