import { useContext, createContext, useState, useEffect, useCallback } from "react"

import { parseCookies, setCookie, destroyCookie } from "nookies"

const CookiesSessionContext = createContext({})

export function CookiesSessionProvider({ children }) {
  const [addressClient, setAddressClient] = useState(null)

  const cookies = parseCookies()

  const addressClientCookies = cookies["@innovationstore-honda/addressClient:0.0.1"]

  const haveClientAddresCookies = !!addressClientCookies

  const handleAddressClient = useCallback(async () => {
    if (addressClient) {
      setCookie(undefined, "@innovationstore-honda/addressClient:0.0.1", JSON.stringify(addressClient), {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: "/",
      })
    } else {
      destroyCookie(undefined, "@innovationstore-honda/addressClient:0.0.1", {
        path: "/",
      })
    }
  }, [addressClient])

  useEffect(() => {
    handleAddressClient()
  }, [addressClient, handleAddressClient])

  useEffect(() => {
    handleAddressClient()
  }, [])

  if (addressClientCookies) {
    const { cep, rua, bairro, cidade, uf, frete_gratis } = JSON.parse(addressClientCookies)

    if (!addressClient) {
      setAddressClient({
        cep,
        rua,
        bairro,
        cidade,
        uf,
        frete_gratis,
      })
    }
  }

  return (
    <CookiesSessionContext.Provider value={{ addressClient, setAddressClient, haveClientAddresCookies }}>
      {children}
    </CookiesSessionContext.Provider>
  )
}

export function useCookiesSession() {
  const context = useContext(CookiesSessionContext)

  return context
}
