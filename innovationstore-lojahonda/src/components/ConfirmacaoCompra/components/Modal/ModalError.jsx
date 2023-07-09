import {
  Box,
  Button,
  ChakraProvider,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { AiFillWarning } from "react-icons/ai";

export function ModalUsage({
  isOpen,
  message,
  title,
  closeModal,
  codProd,
  filteredCodProd,
}) {
  const { onClose } = useDisclosure();

  return (
    <ChakraProvider>
      <Modal
        isOpen={isOpen}
        onClose={() => closeModal(!isOpen)}
        isCentered
        size={"sm"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center" paddingBottom="0">
            <Flex justifyContent="center" alignItems="center" gap={2}>
              <Box color="#ff7e00">
                <AiFillWarning size={30} />
              </Box>
              {title}
            </Flex>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody paddingBlock="3rem">
            <Text m="0" fontWeight="bold">
              É necessário aprovar{" "}
              <Text as="span" color="#ff7e00">
                todos os layouts
              </Text>{" "}
              para confirmar o pedido.
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
}
