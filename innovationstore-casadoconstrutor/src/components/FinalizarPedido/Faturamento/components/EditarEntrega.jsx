import {
  Button,
  Modal,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";
import { BiEdit } from "react-icons/bi";
import { ModalEditarComponentFaturamento } from "../../styles";
import EditForm from "./form/EditForm";
import { NextSeo } from "next-seo";

const EditarDadosDaEntrega = ({ 
  mobileView,
  loadingAtualiza,
  handleSubmit,
  onSubmit,
  register,
  isOpen,
  onOpen,
  onClose,
  dados_cliente
}) => {


  return (
    <>
      <NextSeo title={isOpen && `Dados da Entrega`} />
      <ModalEditarComponentFaturamento>
        <Button
          mt="20px"
          onClick={() => {
            onOpen();
          }}
          bgColor="white"
          size="sm"
          transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
          _hover={{ bgColor: "white" }}
          leftIcon={<BiEdit color="#7fbc03" size={30} />}
          _active={{ bgColor: "white", transform: "scale(0.90)" }}
          boxShadow="none !important"
        >
          Editar
        </Button>
      </ModalEditarComponentFaturamento>
      <Modal isCentered="false" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay
          bg="none"
          backdropFilter="auto"
          backdropInvert="40%"
          backdropBlur="2px"
        />
        <EditForm
          dados_cliente={dados_cliente}
          title="Entrega"
          register={register}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          mobileView={mobileView}
          loadingAtualiza={loadingAtualiza}
        />
      </Modal>
    </>
  );
};

export default EditarDadosDaEntrega;
