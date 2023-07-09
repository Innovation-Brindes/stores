import {
  Box,
  CloseButton,
  Flex,
  Text,
  useDisclosure,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import EditarDadosDaEntrega from "./components/EditarEntrega";
import EditarDadosDoContato from "./components/EditarContato";
import EditarDadosDoFaturamento from "./components/EditarFaturamento";
import { useForm } from "react-hook-form";
import { TextForm } from "../styles";
import { cep_format, cpf_cnpj_format, telefone_format } from './../../../utils/mask/index';
import { AtualizaInfoCliente, getListarInfoClientes } from "../../../services/api";


const InfoEditar = ({ title, mobileView, dados_cliente, setLoading }) => {
  const [param, setParam] = useState({});
  const [loadingAtualiza, setLoadingAtualiza] = useState(false);

  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  
  const onSubmit = (e) => {
    setLoadingAtualiza(true);
    const param = {
      contato_nome: e.contato_nome === undefined ? '' : e.contato_nome,
      contato_telefone: e.contato_telefone === undefined ? '' : e.contato_telefone.replaceAll("(", "").replaceAll(")", "").replaceAll(" ", "").replaceAll("-", "").trim(),
      contato_email: e.contato_email === undefined ? '' : e.contato_email,
      fat_cpf_cnpj: e.fat_cpf_cnpj === undefined ? '' : e.fat_cpf_cnpj.replaceAll(".", "").replaceAll("-", "").replaceAll("/", "").replaceAll("_", "").trim(),
      ent_cpf_cnpj: e.ent_cpf_cnpj === undefined ? '' : e.ent_cpf_cnpj.replaceAll(".", "").replaceAll("-", "").replaceAll("/", "").replaceAll("_", "").trim(),
      fat_razao_social: e.fat_razao_social === undefined ? '' : e.fat_razao_social,
      ent_razao_social: e.ent_razao_social === undefined ? '' : e.ent_razao_social,
      fat_nome: e.fat_nome === undefined ? '' : e.fat_nome,
      ent_nome: e.ent_nome === undefined ? '' : e.ent_nome,
      fat_endereco: e.fat_endereco === undefined ? '' : e.fat_endereco,
      ent_endereco: e.ent_endereco === undefined ? '' : e.ent_endereco,
      fat_email: e.fat_email === undefined ? '' : e.fat_email,
      ent_email: e.ent_email === undefined ? '' : e.ent_email,
      fat_telefone: e.fat_telefone === undefined ? '' : e.fat_telefone.replaceAll("(", "").replaceAll(")", "").replaceAll(" ", "").replaceAll("-", "").trim(),
      ent_telefone: e.ent_telefone === undefined ? '' : e.ent_telefone.replaceAll("(", "").replaceAll(")", "").replaceAll(" ", "").replaceAll("-", "").trim(),
      fat_cidade: e.fat_cidade === undefined ? '' : e.fat_cidade,
      ent_cidade: e.ent_cidade === undefined ? '' : e.ent_cidade,
      fat_cep: e.fat_cep === undefined ? '' : e.fat_cep.replaceAll("-", "").trim(),
      ent_cep: e.ent_cep === undefined ? '' : e.ent_cep.replaceAll("-", "").trim(),
      numero_nota: dados_cliente.numero_nota,
    }
    setParam(param);
    const timer = setTimeout(function () {
      dadosCliente(param)
      clearTimeout(timer);
    }, 500);
    setLoadingAtualiza(false);
  };

  const visualizarInfoCliente = async (numero_nota) => {
    try {
      const clienteAtualizado = await getListarInfoClientes.get(`/${numero_nota}`);
      if (clienteAtualizado.statusText === 'OK') {
        setLoading(true)
        const timer = setTimeout(function () {
          setLoading(false)
          clearTimeout(timer);
        }, 1000);
      }

    } catch (error) {
      console.log(Object.keys(error), error.message);
    }
  }

  const dadosCliente = async (teste) => {

    try {
      const dadosAtualizados = await AtualizaInfoCliente.post('', teste)

      const timer = setTimeout(function () {
        visualizarInfoCliente(dados_cliente.numero_nota)
        clearTimeout(timer);
      }, 1000);
      onClose()
    } catch (error) {
      console.log(Object.keys(error), error.message);
    }
  }




  return (
    <Flex flexDir="column" w="400px" h="100%">
      <Flex pt="10px" h="60px" w="100%" justify="center" align="center">
        <Text textTransform="uppercase" color="#7fbc03">
          Dados {title === "entrega" ? "da" : "do"} <strong>{title}</strong>
        </Text>
      </Flex>
      <VStack spacing={2} align="right" pl="15px" h="200px" w="100%">
        {title === "contato" ? (
          <>
            <TextForm mb="1px">
              <strong>Nome:</strong> {dados_cliente.contato_nome}
            </TextForm>
            <TextForm>
              <strong>Tel.:</strong> {telefone_format(dados_cliente.contato_telefone)}
            </TextForm>
            <TextForm>
              <strong>E-mail:</strong> {dados_cliente.contato_email}
            </TextForm>
          </>
        ) : (
          <>
            <TextForm mb="1px">
              <strong>CPF | CNPJ:</strong> {title === 'faturamento' ? cpf_cnpj_format(dados_cliente.fat_cpf_cnpj) : title === 'entrega' ? cpf_cnpj_format(dados_cliente.ent_cpf_cnpj) : ''} <strong>IE:</strong> {title === 'faturamento' ? dados_cliente.fat_ie : title === 'entrega' ? dados_cliente.ent_ie : ''}
            </TextForm>
            <TextForm>
              <strong>Nome:</strong> {title === 'faturamento' ? dados_cliente.fat_nome : title === 'entrega' ? dados_cliente.ent_nome : ''}
            </TextForm>
            <TextForm>
              <strong>Tel.:</strong> {title === 'faturamento' ? telefone_format(dados_cliente.fat_telefone) : title === 'entrega' ? telefone_format(dados_cliente.ent_telefone) : ''}
            </TextForm>
            <TextForm>
              <strong>Endereço:</strong> {title === 'faturamento' ? dados_cliente.fat_endereco : title === 'entrega' ? dados_cliente.ent_endereco : ''}
            </TextForm>
            <TextForm>
              <strong>E-mail:</strong> {title === 'faturamento' ? dados_cliente.fat_email : title === 'entrega' ? dados_cliente.ent_email : ''}
            </TextForm>
            <TextForm>
              <strong>Cidade:</strong> {title === 'faturamento' ? dados_cliente.fat_cidade : title === 'entrega' ? dados_cliente.ent_cidade : ''}
              {title === 'faturamento' && dados_cliente.fat_cidade && " ,"} {title === 'faturamento' && dados_cliente.fat_nome === "" && "|"} {title === 'faturamento' && dados_cliente.fat_uf}
              {title === 'entrega' && dados_cliente.ent_cidade && " ,"} {title === 'entrega' && dados_cliente.ent_nome === "" && "|"} {title === 'entrega' && dados_cliente.ent_uf}
            </TextForm>
            <TextForm>
              <strong>CEP:</strong> {title === 'faturamento' ? cep_format(dados_cliente.fat_cep) : title === 'entrega' ? cep_format(dados_cliente.ent_cep) : ''}
            </TextForm>
          </>
        )}
      </VStack>
      <Flex>
        {title === "faturamento" && (
          <EditarDadosDoFaturamento
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
            mobileView={mobileView}
            register={register}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            loadingAtualiza={loadingAtualiza}
            dados_cliente={dados_cliente}
          />
        )}
        {title === "entrega" && (
          <EditarDadosDaEntrega
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
            mobileView={mobileView}
            register={register}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            loadingAtualiza={loadingAtualiza}
            dados_cliente={dados_cliente}
          />
        )}
        {title === "contato" && (
          <EditarDadosDoContato
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
            mobileView={mobileView}
            register={register}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            loadingAtualiza={loadingAtualiza}
            dados_cliente={dados_cliente}
          />
        )}
      </Flex>
    </Flex>
  );
};

export default InfoEditar;
