import {
  Button,
  Center,
  Flex,
  Image,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  VStack,
  ChakraProvider
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import InputForm from "./InputForm";
import InputMask from "react-input-mask";
import * as S from "./styles";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import { arrayUfs } from "../../../../../utils/UfsArray";
import { telefone_format } from "../../../../../utils/mask";

const loadingGif = "/images/loading.gif";

const EditForm = ({
  title,
  mobileView,
  loadingAtualiza,
  handleSubmit,
  onSubmit,
  register,
  dados_cliente
}) => {
  const [maskCPFCNPJ, setMaskCPFCNPJ] = useState("999.999.999-999");
  const [selectOpen, setSelectOpen] = useState(false);
  const [razaoSocial, setRazaoSocial] = useState(false);
  useEffect(() => {
    setSelectOpen(false);
  }, []);

  const getChangeSelect = (e) => {
    if (e.target.value !== "") {
      setSelectOpen(false);
    }
  };

  function handleChangeCPFCNPJ(value) {

    var format_data = value;

    var format_data = format_data.replaceAll(".", "").replaceAll("-", "").replaceAll("/", "").replaceAll("_", "")

    if (format_data.length > 11) {
      setMaskCPFCNPJ("99.999.999/9999-99");
      setRazaoSocial(true)
    } else if (format_data.length <= 11) {
      setMaskCPFCNPJ("999.999.999-999");
      setRazaoSocial(false)
    }
  }

  const maskPhone = "(99) 99999-9999";
  const maskCep = "99999-999";

  return (
    <ChakraProvider>
      <ModalContent w={mobileView ? "95%" : "500px"}>
        <ModalHeader color="#7fbc03">
          Dados {title === "Entrega" ? "da" : "do"} <strong>{title}</strong>
        </ModalHeader>
        <ModalCloseButton
          mt='8px'
          color="#7fbc03"
          _hover={{ bgColor: "#7fbc03", color: "white" }}
          _active={{ transform: "scale(0.90)" }}
          boxShadow="none !important"
          variant='outline'
          border='1.5px solid #7fbc03'
        />
        {loadingAtualiza ? (
          <Center w="100%" borderRadius="6px" h={title === 'contato' ? "300px" : "600px"}>
            <Image position="relative" top="-25px" src={loadingGif} />
          </Center>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalBody>
              <VStack spacing={3} align="right" h="auto">
                {title === "Contato" ? (
                  <>
                    <InputForm
                      setSelectOpen={setSelectOpen}
                      register={register}
                      autoFocus={false}
                      name="contato_nome"
                      placeholder={dados_cliente.contato_nome}
                      type="text"
                    />
                    <S.InputMaskFormEditar>
                      <InputMask
                        onClick={() => setSelectOpen(false)}
                        style={{
                          width: "100%",
                          height: "40px",
                          border: "1px solid gray",
                          borderRadius: "5px",
                          paddingLeft: "15px",
                          letterSpacing: "1px",
                        }}
                        mask={maskPhone}
                        {...register("contato_telefone")}
                        name="contato_telefone"
                        placeholder={telefone_format(dados_cliente.contato_telefone)}
                        type="text"
                      />
                    </S.InputMaskFormEditar>
                    <InputForm
                      setSelectOpen={setSelectOpen}
                      register={register}
                      autoFocus={false}
                      name="contato_email"
                      placeholder={dados_cliente.contato_email}
                      type="email"
                    />
                  </>
                ) : (
                  <>
                    <S.InputMaskFormEditar>
                      <InputMask
                        onClick={() => setSelectOpen(false)}
                        style={{
                          width: "100%",
                          height: "40px",
                          border: "1px solid gray",
                          borderRadius: "5px",
                          paddingLeft: "15px",
                          letterSpacing: "1px",
                        }}
                        mask={maskCPFCNPJ}
                        {...register(title === 'Faturamento' ? "fat_cpf_cnpj" : "ent_cpf_cnpj")}
                        autoFocus={false}
                        name={title === 'Faturamento' ? "fat_cpf_cnpj" : "ent_cpf_cnpj"}
                        placeholder="CPF | CNPJ"
                        type="text"
                        onChange={(e) => handleChangeCPFCNPJ(e.target.value)}
                      />
                    </S.InputMaskFormEditar>
                    {razaoSocial && <InputForm
                      setSelectOpen={setSelectOpen}
                      register={register}
                      autoFocus={false}
                      name={title === 'Faturamento' ? "fat_razao_social" : "ent_razao_social"}
                      placeholder="Razão Social"
                      type="number"
                      razaoSocial={razaoSocial}
                    />}
                    <InputForm
                      setSelectOpen={setSelectOpen}
                      register={register}
                      autoFocus={false}
                      name={title === 'Faturamento' ? "fat_nome" : "ent_nome"}
                      placeholder="Nome"
                      type="text"
                    />
                    <InputForm
                      setSelectOpen={setSelectOpen}
                      register={register}
                      autoFocus={false}
                      name={title === 'Faturamento' ? "fat_endereco" : "ent_endereco"}
                      placeholder="Endereço"
                      type="text"
                    />
                    <InputForm
                      setSelectOpen={setSelectOpen}
                      register={register}
                      autoFocus={false}
                      name={title === 'Faturamento' ? "fat_email" : "ent_email"}
                      placeholder="E-mail"
                      type="email"
                    />
                    <S.InputMaskFormEditar>
                      <InputMask
                        onClick={() => setSelectOpen(false)}
                        style={{
                          width: "100%",
                          height: "40px",
                          border: "1px solid gray",
                          borderRadius: "5px",
                          paddingLeft: "15px",
                          letterSpacing: "1px",
                        }}
                        mask={maskPhone}
                        {...register(title === 'Faturamento' ? "fat_telefone" : "ent_telefone")}
                        name={title === 'Faturamento' ? "fat_telefone" : "ent_telefone"}
                        placeholder="Telefone"
                        type="text"
                      />
                    </S.InputMaskFormEditar>

                    <Flex w="100%">
                      <S.InputFlex
                        onClick={() => setSelectOpen(false)}
                        {...register(title === 'Faturamento' ? "fat_cidade" : "ent_cidade")}
                        autoFocus={false}
                        name={title === 'Faturamento' ? "fat_cidade" : "ent_cidade"}
                        placeholder="Cidade"
                        type="text"
                      />
                      <S.SelectFormEditar
                        placeholder="UF"
                        onChange={getChangeSelect}
                        onClick={() => setSelectOpen(!selectOpen)}
                        icon={selectOpen ? <RiArrowUpSFill /> : <RiArrowDownSFill />}
                        {...register("uf")}
                      >
                        {arrayUfs.map((uf) => (
                          <option key={uf} value={uf}>
                            {uf}
                          </option>
                        ))}
                      </S.SelectFormEditar>
                    </Flex>
                    <S.InputMaskFormEditar>
                      <InputMask
                        onClick={() => setSelectOpen(false)}
                        {...register(title === 'Faturamento' ? "fat_cep" : "ent_cep")}
                        autoFocus={false}
                        name={title === 'Faturamento' ? "fat_cep" : "ent_cep"}
                        mask={maskCep}
                        placeholder="Cep"
                        type="text"
                      />
                    </S.InputMaskFormEditar>
                  </>
                )}

              </VStack>
            </ModalBody>
            <ModalFooter>
              <Button
                type="submit"
                boxShadow="none !important"
                bgColor="#7fbc03"
                transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                _hover={{ bgColor: "#7fbc03", opacity: "0.9" }}
                color="white"
              >
                <span>Salvar</span>
              </Button>
            </ModalFooter>
          </form>
        )}
      </ModalContent>
    </ChakraProvider>
  );
};

export default EditForm;
