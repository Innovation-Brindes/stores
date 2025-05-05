import { createContext, useContext, useReducer, useEffect, useCallback } from "react"

import { parseCookies, setCookie, destroyCookie } from "nookies"
import { useRouter } from "next/router"

const AuthContext = createContext({})

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
}

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
      }
    case "LOGOUT":
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
      }
    default:
      return state
  }
}

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const cookies = parseCookies()

  const userCookies = cookies["@innovationstore-honda/user:0.0.1"]
  const tokenCookies = cookies["@innovationstore-honda/token:0.0.1"]

  const haveUserCookies = !!userCookies
  const haveTokenCookies = !!tokenCookies

  const router = useRouter()

  const handleUser = useCallback(async () => {
    if (state.user) {
      setCookie(undefined, "@innovationstore-honda/user:0.0.1", JSON.stringify(state.user), {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: "/",
      })
    } else {
      destroyCookie(undefined, "@innovationstore-honda/user:0.0.1", {
        path: "/",
      })
    }
  }, [state.user])

  const handleToken = useCallback(async () => {
    if (state.token) {
      setCookie(undefined, "@innovationstore-honda/token:0.0.1", JSON.stringify(state.token), {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: "/",
      })
    } else {
      destroyCookie(undefined, "@innovationstore-honda/token:0.0.1", {
        path: "/",
      })

      destroyCookie(undefined, "@innovationstore-honda/user:0.0.1", {
        path: "/",
      })
    }
  }, [state.token])

  useEffect(() => {
    handleUser()
  }, [state.user, handleUser])

  useEffect(() => {
    handleToken()
  }, [state.token, handleToken])

  async function login(user, token) {
    dispatch({
      type: "LOGIN",
      payload: {
        user,
        token,
      },
    })
  }

  async function logout() {
    dispatch({
      type: "LOGOUT",
    })

    destroyCookie(undefined, "@innovationstore-honda/token:0.0.1", {
      path: "/",
    })

    destroyCookie(undefined, "@innovationstore-honda/user:0.0.1", {
      path: "/",
    })

    router.push("/")
  }

  useEffect(() => {
    handleUser()
    handleToken()
  }, [])

  useEffect(() => {
    if (userCookies && tokenCookies) {
      const user = JSON.parse(userCookies)
      const token = JSON.parse(tokenCookies)

      if (!state.user && !state.token) {
        dispatch({
          type: "LOGIN",
          payload: {
            user,
            token,
          },
        })
      }
    }
  }, [userCookies, tokenCookies, state.user, state.token])

  return (
    <AuthContext.Provider
      value={{
        state,
        login,
        logout,
        haveUserCookies,
        haveTokenCookies,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  return context
}
