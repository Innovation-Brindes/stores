import Head from "next/head"
import { Login } from "../../../components/Login"

export default function LoginPage({ linksSubcategorias, linksSegmentos }) {
  return (
    <div>
      <Head>
        <title>Login | Loja Honda</title>
      </Head>
      <Login />
    </div>
  )
}
