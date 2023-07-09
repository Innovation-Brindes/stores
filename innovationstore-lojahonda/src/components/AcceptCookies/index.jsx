import { useEffect, useReducer } from "react"
import { parseCookies, setCookie } from "nookies"
import * as S from "./styles"
import Image from "next/image"
import Link from "next/link"

const initialState = {
  showCookie: true,
}

function reducer(state, action) {
  switch (action.type) {
    case "ACCEPT_COOKIES":
      return {
        ...state,
        showCookie: false,
      }
    default:
      return state
  }
}

export function AcceptCookies() {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const cookies = parseCookies()
    if (cookies.acceptedCookies) {
      dispatch({ type: "ACCEPT_COOKIES" })
    }
  }, [])

  const handleAcceptCookies = () => {
    setCookie(null, "acceptedCookies", "true", {
      maxAge: 30 * 24 * 60 * 60, // 30 days
      path: "/", // adjust the path as needed
    })
    dispatch({ type: "ACCEPT_COOKIES" })
  }

  if (!state.showCookie) return null

  return (
    <S.Container showCookie={state.showCookie}>
      <S.Header>
        <Image src="https://imgproductioncrm.s3.us-east-2.amazonaws.com/logo%20mobile-01.svg" width={30} height={30} />
        <span>Consentimento de cookies</span>
      </S.Header>
      <S.Content>
        <h1>
          Nós utilizamos os cookies para personalizar anúncios, gerar dados estatísticos e garantir que você tenha a
          melhor experiência na Innovation!. <br />{" "}
          <Link href="/politica-de-privacidade">
            <span>Conheça a Política de Privacidade</span>
          </Link>{" "}
          e a{" "}
          <Link href="/politica-de-cookies">
            <span>Política de Cookies</span>
          </Link>{" "}
          da Innovation.{" "}
        </h1>
      </S.Content>
      <S.Footer>
        <S.Button
          onClick={() => {
            handleAcceptCookies()
          }}
        >
          Entendido
        </S.Button>
      </S.Footer>
    </S.Container>
  )
}
