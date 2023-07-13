import * as yup from "yup";

export const schema = yup.object().shape({
  cpf_cnpj_parceiro: yup.string().required("Campo obrigatório"),
  nome_parceiro: yup.string().required("Campo obrigatório"),
  telefone_parceiro: yup.string().required("Campo obrigatório"),
  email_parceiro: yup
    .string()
    .email("E-mail inválido")
    .required("Campo obrigatório"),
});
