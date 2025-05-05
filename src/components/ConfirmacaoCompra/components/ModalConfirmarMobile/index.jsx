import { DeclaracaoLeitura } from "../DeclaracaoLeitura";
import { ObservacaoPedido } from "../ObsPedido";
import { PedidoAprovado } from "../PedidoAprovado";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

export function ModalConfirmarMobile({
  openModal,
  setIsChecked,
  setOpenModal,
  handleConfirmarPedido,
  isChecked,
  textFrete,
  descricaoVendas,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Modal
        isOpen={openModal}
        onClose={() => {
          setOpenModal(false);
          setIsChecked(!isChecked);
        }}
        size="xxl"
        height="100%"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Observação do pedido</ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
            height="100%"
            gap="2rem"
          >
            <ObservacaoPedido
              textFrete={textFrete}
              descricaoVendas={descricaoVendas}
            />
            <DeclaracaoLeitura setIsChecked={setIsChecked} />
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                setOpenModal(false);
                setIsChecked(!isChecked);
                handleConfirmarPedido();
              }}
              disabled={isChecked ? false : true}
            >
              Aceitar e finalizar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
