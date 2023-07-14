import { useProductProvider } from "../../../../contexts/ProductProvider"
import { formatPrice } from "../../../../utils/formatPrice"
import { Button } from "../../components/Button"
import { ContainerActions, ProductValueContent, ResumoContent } from "../styles"
import * as S from "./styles"
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import InputMask from "react-input-mask"
import axios from "axios"
import { useCallback, useEffect, useState } from "react"
import { GerarOrcamento } from "../../../../services/api"

const schema = yup.object().shape({
  nome: yup.string().required("Nome é obrigatório"),
  cpf_cnpj: yup.string().required("CPF/CNPJ é obrigatório"),
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  telefone: yup
    .string()
    .transform((value) => value.replace(/\D/g, ""))
    .required("Telefone é obrigatório"),
  aceito: yup.boolean().oneOf([true], "É necessário aceitar os termos"),
})

export function Orcamento() {
  const { price, previousStep, resumo, state } = useProductProvider()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    control,
  } = useForm({
    resolver: yupResolver(schema),
  })

  const [dataCnpj, setDataCnpj] = useState(null)
  const [loading, setLoading] = useState(false)

  const acceptedTerms = watch("aceito")
  const cnpj = watch("cpf_cnpj")

  const formattedTotalPrice = formatPrice(price?.valor_unitario)
  const isOrcamentoShow = resumo?.step === 2

  async function onSubmit(data) {
    setLoading(true)

    const cnpjReplaced = data.cpf_cnpj.replace(/\D/g, "")

    //cria um array de product
    const product = []

    const productObject = {
      sequencia: 1,
      codprod: state?.codColor?.codigo_produto,
      quantidade: state?.productQuantity,
      valor_unitario: parseFloat(price?.valor_unitario),
      valor_total: parseFloat(price?.valor_total),
      prazo_entrega: parseInt(state?.entrega?.prazo),
      numero_impressao: parseInt(state?.codImp?.codigo_impressao),
      cor_produto: parseInt(state?.codColor?.codigo_cor),
      batidas: state?.batidas,
      frete_site: "",
      token_embalagem: null,
      embalagem: null,
    }

    product.push(productObject)

    const params = {
      nome_parceiro: data.nome,
      razao_social: data.razao_social,
      email_parceiro: data.email,
      telefone_parceiro: data.telefone,
      observacao: "",
      cpf_cnpj_parceiro: cnpjReplaced,
      carrinho: product,
    }

    const response = await GerarOrcamento.post("", params)

    setLoading(false)

    reset()
    previousStep()
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

  return (
    <S.Container show={isOrcamentoShow}>
      <ResumoContent border show={isOrcamentoShow}>
        <S.HeaderResumoOrcamento>
          <h1>Resumo</h1>

          <ProductValueContent>
            <div className="priceProduct">
              <span>R$</span>
              <strong>{formattedTotalPrice}</strong>
              <span>unidade</span>
            </div>
          </ProductValueContent>

          <ContainerActions>
            <Button.Root label="Adicionar ao carrinho" background="#cc0000" color="#fff" />
            <Button.Root label="Ver resumo" background="#FFE6DB" color="#cc0000" onClick={previousStep}>
              <Button.Icon icon={"https://imgproductioncrm.s3.us-east-2.amazonaws.com/resumo.svg"} />
            </Button.Root>
          </ContainerActions>
        </S.HeaderResumoOrcamento>
      </ResumoContent>
      <S.FormResumoOrcamento show={isOrcamentoShow} onSubmit={handleSubmit(onSubmit)}>
        <div className="form-header">
          <span>Preencha os dados abaixo e pronto,</span>
          <strong>baixe seu orçamento</strong>
        </div>
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
          <span>
            Ao enviar este formulário, eu declaro que aceito compartilhar minhas informações pessoais e compreendo que
            esses dados estão sujeitos à Política de Privacidade do Google.
          </span>

          <Controller
            name="aceito"
            control={control}
            render={({ field }) => (
              <S.ContainerCheckbox>
                <S.StyledCheckbox
                  {...field}
                  id="aceito"
                  onCheckedChange={(e) => {
                    field.onChange(e)
                  }}
                >
                  <S.StyledIndicator />
                </S.StyledCheckbox>
                <label htmlFor="aceito">Aceito receber notificações</label>
              </S.ContainerCheckbox>
            )}
          />

          <Button.Root
            label={!loading ? "Baixar" : "Gerando orçamento..."}
            background="#cc0000"
            color="#fff"
            type="submit"
            isDisabled={!acceptedTerms}
          />
        </div>
      </S.FormResumoOrcamento>
    </S.Container>
  )
}
