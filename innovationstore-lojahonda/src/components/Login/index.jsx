import Image from "next/image"
import * as S from "./styles"
import { BiSolidUserCircle } from "react-icons/bi"
import { RiLockPasswordFill } from "react-icons/ri"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useState } from "react"
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"
import { useAuth } from "../../contexts/AuthProvider"
import { useRouter } from "next/router"
import Link from "next/link"
import axios from "axios"

const schema = yup.object().shape({
  email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
  password: yup.string().required("Campo obrigatório"),
})

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const { login } = useAuth()

  const router = useRouter()

  const [showPassword, setShowPassword] = useState(false)

  const onSubmit = async (data) => {
    const response = await axios.post(
      "https://api.innovationbrindes.com.br/api/site/v2/innovation-store/valida-login",
      {
        email: data.email,
        senha: data.password,
        loja: "lojahonda",
      },
    )

    const dataLogin = response.data

    if (dataLogin === "Usuário não encontrado") {
      return alert("Email ou senha incorretos")
    }

    const { id: token, nome } = dataLogin

    await login(nome, token)

    router.push("/lojahonda/painel/relatorios")
  }

  return (
    <S.Container>
      <S.LoginContainer>
        <S.LoginSection>
          <S.ImageContent>
            <Image src="https://imgproductioncrm.s3.us-east-2.amazonaws.com/logo2.png" width={203} height={63} />
          </S.ImageContent>

          <S.TitleContainer>
            <h1>Bem vindo a área de login</h1>
          </S.TitleContainer>

          <S.FormContainer>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
              <S.FormTitle>Entrar</S.FormTitle>
              <S.InputGroup>
                <BiSolidUserCircle />
                <S.FormInput placeholder="Usuário" {...register("email")} />
              </S.InputGroup>
              {errors.user && <S.FormError>{errors.user.message}</S.FormError>}

              <S.InputGroup>
                <RiLockPasswordFill />
                <S.FormInput placeholder="Senha" type={showPassword ? "text" : "password"} {...register("password")} />
                {showPassword ? (
                  <AiFillEyeInvisible onClick={() => setShowPassword(!showPassword)} />
                ) : (
                  <AiFillEye onClick={() => setShowPassword(!showPassword)} />
                )}
              </S.InputGroup>
              {errors.password && <S.FormError>{errors.password.message}</S.FormError>}
              <S.FormButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Carregando..." : "Entrar"}
              </S.FormButton>
              <S.Wrapper>
                <Link href="/lojahonda" passHref>
                  <S.FormLink>Voltar para home</S.FormLink>
                </Link>
              </S.Wrapper>
            </S.Form>
          </S.FormContainer>
        </S.LoginSection>
      </S.LoginContainer>
    </S.Container>
  )
}
