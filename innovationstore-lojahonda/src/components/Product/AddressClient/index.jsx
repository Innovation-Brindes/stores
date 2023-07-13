import { useState } from "react"
import { useCookiesSession } from "../../../contexts/cookiesSessionProvider"
import { ContainerAddress, ContainerAddressClient, ImageGratis } from "./styles"
import { TfiLocationPin } from "react-icons/tfi"
import { Spinner } from "@chakra-ui/react"
import Image from "next/image"
import { PopoverFrete } from "./PopoverFrete"
import { useEffect } from "react"

export function AddresClient() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)
  const [loadingRefreshCep, setLoadingRefreshCep] = useState(false)
  const { addressClient, haveClientAddresCookies } = useCookiesSession()

  const enderecoFormatado = `${addressClient?.rua}, ${addressClient?.bairro}, ${addressClient?.cidade}, ${addressClient?.uf}`

  function handleClosePopover() {
    setIsPopoverOpen(false)
  }

  function handleOpenPopover() {
    setIsPopoverOpen(!isPopoverOpen)
  }
  //41745-001

  useEffect(() => {
    setLoadingRefreshCep(true)

    setTimeout(() => {
      setLoadingRefreshCep(false)
    }, 1000)
  }, [addressClient])

  if (haveClientAddresCookies) {
    return (
      <ContainerAddressClient onClick={handleOpenPopover}>
        {/* <PopoverFrete isOpen={isPopoverOpen} onClose={handleClosePopover} /> */}
        {!loadingRefreshCep ? (
          <ContainerAddress>
            <TfiLocationPin size={20} />
            {enderecoFormatado.length > 22 ? enderecoFormatado.substring(0, 22).concat("...") : enderecoFormatado}
          </ContainerAddress>
        ) : (
          <Spinner size="sm" />
        )}
        {!loadingRefreshCep && addressClient.frete_gratis === "S" && (
          <ImageGratis src="/gifs/frete-gratis/frete-gratis.png" alt="frete-gratis" />
        )}
      </ContainerAddressClient>
    )
  }

  return null
}
