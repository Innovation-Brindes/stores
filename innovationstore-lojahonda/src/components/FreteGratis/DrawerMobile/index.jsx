import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  useDisclosure,
} from "@chakra-ui/react"
import InputMask from "react-input-mask"
import { TfiLocationPin } from "react-icons/tfi"
import { maskCep } from "../../../utils/maskCep"
import { useCookiesSession } from "../../../contexts/cookiesSessionProvider"
import { useForm } from "react-hook-form"
import { baseURL } from "../../../services/api"
import { setCookie } from "nookies"
import { DrawerMobileButton } from "./styles"

export function DrawerMobile() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { addressClient, setAddressClient } = useCookiesSession()
  const {
    handleSubmit,
    setError,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

  async function getAddressClient(data) {
    try {
      const response = await baseURL.get(`/pedido/busca-endereco-cliente/${data.cep}`)

      if (response.data.length === 0) {
        setError("cep", {
          type: "manual",
          message: "CEP não encontrado",
        })

        return setAddressClient(null)
      }

      const { cep, rua, bairro, cidade, uf, frete_gratis, valida_frete } = response.data[0]

      const cookies = {
        cep,
        rua,
        bairro,
        cidade,
        uf,
        frete_gratis,
        valida_frete,
      }

      setCookie(null, "@innovationbrindes/addressClient:0.0.1", JSON.stringify(cookies), {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: "/",
      })

      setAddressClient({
        cep,
        rua,
        bairro,
        cidade,
        uf,
        frete_gratis,
        valida_frete,
      })

      onClose()
    } catch (error) {
      setError("cep", {
        type: "manual",
        message: "CEP não encontrado!",
      })

      setAddressClient(null)
    }
  }

  return (
    <>
      <DrawerMobileButton onClick={onOpen}>
        <img
          src="https://res.cloudinary.com/dktvxb98b/image/upload/v1686838575/cidades-mobile-4x-otimizado_1_gciq19.gif"
          alt="Frete grátis para alguns estados"
        />
        {!addressClient && (
          <Flex ml=".6rem" color="#0B73F8" alignItems="center" gap={1} marginBlock=".2rem">
            <TfiLocationPin size={20} />
            <Text as="span" m={0} fontSize="12px" onClick={onOpen}>
              Informe seu CEP
            </Text>
          </Flex>
        )}
        {addressClient && (
          <Flex ml=".6rem" alignItems="center" padding={1}>
            <TfiLocationPin size={15} color="#0B73F8" />
            <Text as="span" m={0} fontSize="10px" color="#0B73F8" fontWeight="bold">
              Cep: {maskCep(addressClient.cep)} {addressClient.frete_gratis === "N" && "não é gratuito :("}
            </Text>
            {addressClient.frete_gratis === "S" && (
              <Text
                as="span"
                marginInline="5px"
                color="#FFD500"
                fontSize="8px"
                textTransform="uppercase"
                bgColor="#0B73F8"
                paddingBlock=".2rem"
                paddingInline="5px"
                fontWeight="bold"
                borderRadius="13px"
                width="fit-content"
                //nowrap
                // onClick={() => setIsOpen(true)}
              >
                Tem frete grátis!
              </Text>
            )}
          </Flex>
        )}
      </DrawerMobileButton>
      <Drawer placement={"top"} onClose={onClose} isOpen={isOpen} size="full">
        <DrawerOverlay />
        <DrawerContent fontFamily={"Open sans"} padding="15px" bgColor="#F5F5F5">
          <DrawerCloseButton margin="15px" size="lg" />
          <DrawerBody padding="35px" bgColor="#fff" as="form" onSubmit={handleSubmit(getAddressClient)}>
            <Text as="h1" m={0} fontSize="15px">
              Verifique agora mesmo se o <br /> FRETE GRÁTIS{" "}
              <strong>
                está disponível para <br /> a sua região!
              </strong>
            </Text>

            <FormControl id="cep" position="relative">
              <FormLabel htmlFor="cep" mt={4} mb={0} fontSize="14px" color="#414042" fontWeight="normal">
                Digite seu CEP
              </FormLabel>
              <InputMask mask="99999-999" maskChar="_" {...register("cep")}>
                {({ inputRef, ...rest }) => (
                  <Input
                    id="cepMask"
                    type="text"
                    placeholder="00000-000"
                    height="45px"
                    borderRadius="0"
                    mt="8px"
                    ref={inputRef}
                    {...rest}
                  />
                )}
              </InputMask>
              {(errors.cep && (
                <Box position="absolute" bottom="-2.5rem">
                  <Text color="red.400" fontSize="14px">
                    {errors.cep.message}
                  </Text>
                </Box>
              )) ||
                null}
            </FormControl>
            <Button
              bgColor="#0B73F8"
              width="100%"
              color="#fff"
              fontSize="20px"
              textTransform="uppercase"
              borderRadius="23px"
              mt={"25px"}
              mb={4}
              fontWeight="normal"
              height="45px"
              _hover={{
                filter: "brightness(0.9)",
              }}
              type="submit"
              isLoading={isSubmitting}
              loadingText="Buscando..."
            >
              Confirmar
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
