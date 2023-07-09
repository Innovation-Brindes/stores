import * as Dialog from "@radix-ui/react-dialog"
import { ModalCloseButton, ModalContent, ModalDescription, ModalOverlay, ModalTitle, TableContainer } from "./styles"
import * as S from "../styles"
import { BiSolidTShirt } from "react-icons/bi"
import { useState } from "react"
import { IoClose } from "react-icons/io5"
import Image from "next/image"

export function ModalVestuario({ product }) {
  const [isOpen, setIsOpen] = useState(false)
  const onOpen = () => setIsOpen(true)
  const onClose = () => setIsOpen(false)

  const productName = product.nome.toLowerCase()
  const productReference = String(product.referencia).slice(-4)

  const headerTable = product.genero === "F" ? "medidas feminina" : "medidas masculina"

  return (
    <Dialog.Root open={isOpen}>
      <Dialog.Trigger asChild>
        <S.ButtonVestuario active={isOpen} onClick={onOpen}>
          <BiSolidTShirt />
          Ver tabela de medidas
        </S.ButtonVestuario>
      </Dialog.Trigger>
      <Dialog.Portal>
        <ModalOverlay>
          <ModalContent onEscapeKeyDown={onClose}>
            <ModalTitle>Tabela de {headerTable}</ModalTitle>
            <ModalDescription>
              <Image
                src="https://imgproductioncrm.s3.us-east-2.amazonaws.com/camiseta_modal_tabela.png"
                width={217}
                height={248}
              />
              <TableContainer>
                <div className="header-title">
                  Medidas {productName} modelo - {productReference}
                </div>
                <div className="table-header">
                  <div>
                    Tamanho <span>(cm)</span>{" "}
                  </div>
                  <div>P</div>
                  <div>M</div>
                  <div>G</div>
                  <div>GG</div>
                </div>
                <div className="table-body-group">
                  <div className="table-body">
                    <div>A (Altura)</div>
                    <div>60 CM</div>
                    <div>62 CM</div>
                    <div>64 CM</div>
                    <div>66 CM</div>
                  </div>
                  <div className="table-body">
                    <div>L (Largura)</div>
                    <div>41 CM</div>
                    <div>44 CM</div>
                    <div>47 CM</div>
                    <div>50 CM</div>
                  </div>
                </div>
              </TableContainer>
            </ModalDescription>
            <ModalCloseButton asChild>
              <button onClick={onClose}>
                <IoClose />
              </button>
            </ModalCloseButton>
            <div className="footer">
              Na indústria têxtil podem existir diferenças de 5% em relação as medidas indicadas
            </div>
          </ModalContent>
        </ModalOverlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
