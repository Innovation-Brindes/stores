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

const schema = yup.object().shape({
  user: yup.string().required("Campo obrigatório"),
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
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log(data)

    await login(data.user, data.password)

    router.push("/lojahonda/painel/relatorios")
  }

  return (
    <S.Container>
      <S.LoginContainer>
        {/* <S.HeroSection>
          <S.ImageContent>
            <img src="https://imgproductioncrm.s3.us-east-2.amazonaws.com/logo2.png" />
          </S.ImageContent>
        </S.HeroSection> */}
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
                <S.FormInput placeholder="Usuário" {...register("user")} />
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
              <S.FormLink href="#">Esqueci minha senha</S.FormLink>
            </S.Form>
          </S.FormContainer>
        </S.LoginSection>
      </S.LoginContainer>
    </S.Container>
  )
}
