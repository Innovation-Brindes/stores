import * as S from "./styles"
import { Button } from "../../components/Button"
import { useForm, Controller } from "react-hook-form"
import InputMask from "react-input-mask"
import { useCallback } from "react"
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { SalvarAvisoProdutoIndisponivel } from "../../../../services/api"
import { useProductProvider } from "../../../../contexts/ProductProvider"
import * as Toast from "@radix-ui/react-toast"

const schema = yup.object().shape({
  nome: yup.string().required("Nome é obrigatório"),
  cpf_cnpj: yup
    .string()
    .transform((value) => value.replace(/\D/g, ""))
    .required("CPF/CNPJ é obrigatório"),
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  telefone: yup
    .string()
    .transform((value) => value.replace(/\D/g, ""))
    .required("Telefone é obrigatório"),
})

export function IsNotAvailable({ product }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
    control,
  } = useForm({
    resolver: yupResolver(schema),
  })
  const [dataCnpj, setDataCnpj] = useState(null)
  const [toastOpen, setToastOpen] = useState(false)
  const { state } = useProductProvider()

  const cnpj = watch("cpf_cnpj")

  async function onSubmit(data) {
    try {
      const params = {
        nome_parceiro: data.nome,
        cpf_cnpj_parceiro: data.cpf_cnpj,
        razao_social_parceiro: data.razao_social,
        telefone_parceiro: data.telefone,
        email_parceiro: data.email,
        codigo_produto: state.codprod,
      }

      const response = await SalvarAvisoProdutoIndisponivel.post("", params)

      reset()
      setDataCnpj(null)
      setToastOpen(true)
    } catch (error) {
      console.log(error)
    }
  }

  const handleDataCnpj = useCallback(async () => {
    if (!cnpj || cnpj.length < 18) return

    const replacedCnpj = cnpj.replace(/\D/g, "")

    const response = await axios.get(
      `https://api.innovationbrindes.com.br/api/site/v2/pedido/busca-dados-receita/${replacedCnpj}`,
    )

    setDataCnpj(response.data)
  }, [cnpj])

  useEffect(() => {
    handleDataCnpj()
  }, [cnpj, handleDataCnpj])

  const today = new Date().getTime()

  const nextRepoStock = product.cores
    .filter((item) => {
      const formattedDate = item.reposicao_estoque?.split("-").reverse().join("-")
      const date = new Date(formattedDate).getTime()
      const dateDiff = date - today

      return dateDiff > 0
    })
    .sort((a, b) => {
      const formattedDateA = a.reposicao_estoque?.split("-").reverse().join("-")
      const formattedDateB = b.reposicao_estoque?.split("-").reverse().join("-")
      const dateA = new Date(formattedDateA).getTime()
      const dateB = new Date(formattedDateB).getTime()

      const diffA = Math.abs(dateA - today)
      const diffB = Math.abs(dateB - today)

      return diffA - diffB
    })

  const dateRepo = nextRepoStock[0]?.reposicao_estoque?.split("-").join("/")

  const quantityRepo = nextRepoStock.reduce((acc, item) => {
    if (item.reposicao_estoque !== nextRepoStock[0].reposicao_estoque) return acc

    return acc + parseInt(item.quantidade_reposicao)
  }, 0)

  const { url_categoria } = product

  function toCategoryRelated() {
    const newUrlPage = (window.location.href = url_categoria)
    window.open(newUrlPage, "_self")
  }

  return (
    <>
      <S.IsNotAvailableHeader>Produto indisponível</S.IsNotAvailableHeader>
      <S.IsNotAvailableContent>
        <h1>Previsão de reposição de estoque:</h1>
        <div className="span-group">
          <S.IsNotAvailableSpan background="#FF0000">{dateRepo}</S.IsNotAvailableSpan>
          <S.IsNotAvailableSpan background="#414042">+{quantityRepo} un.</S.IsNotAvailableSpan>
        </div>
        <div className="hero-section">
          <span>A gente te avisa quando ele estiver em nosso estoque. Basta deixar seus dados aqui:</span>
        </div>
        <S.FormResumoOrcamento show={true} onSubmit={handleSubmit(onSubmit)}>
          <div className="form-wrapper">
            <Controller
              name="cpf_cnpj"
              control={control}
              onChange={(e) => e[0].target.value}
              render={({ field }) => (
                <S.CustomizableInputCnpj
                  className={errors.cpf_cnpj ? "error" : ""}
                  placeholder="* CPF | CNPJ"
                  {...field}
                  onChange={(e, type) => {
                    field.onChange(e.target.value)
                  }}
                />
              )}
            />

            <input type="text" placeholder="* Nome" {...register("nome")} className={errors.nome ? "error" : ""} />
            {dataCnpj && (
              <input
                type="text"
                placeholder="* Razão Social"
                {...register("razao_social")}
                value={dataCnpj.RAZAO_SOCIAL}
              />
            )}

            <InputMask mask="(99) 99999-9999" maskChar="_" {...register("telefone")} placeholder="* Telefone">
              {({ inputRef, ...rest }) => <input {...rest} ref={inputRef} className={errors.telefone ? "error" : ""} />}
            </InputMask>
            <input type="email" placeholder="* E-mail" {...register("email")} className={errors.email ? "error" : ""} />
          </div>

          <div className="form-footer">
            <Button.Root
              label={!isSubmitting ? "Me avise quando chegar" : "Enviando dados..."}
              background="#414042"
              color="#fff"
              type="submit"
              textSize={"16px"}
            />
            <Button.Root
              label="Ver produtos similares"
              textSize={"16px"}
              border=" #CFCFCF"
              onClick={() => toCategoryRelated()}
            />
          </div>
        </S.FormResumoOrcamento>
      </S.IsNotAvailableContent>

      <Toast.Provider swipeDirection="right">
        <S.ToastContainer open={toastOpen} onOpenChange={setToastOpen} show={toastOpen}>
          <Toast.Title>
            Seus dados foram enviados com sucesso! <br />
            Você receberá um e-mail assim que o produto estiver disponível.
          </Toast.Title>
        </S.ToastContainer>
        <Toast.Viewport />
      </Toast.Provider>
    </>
  )
}
