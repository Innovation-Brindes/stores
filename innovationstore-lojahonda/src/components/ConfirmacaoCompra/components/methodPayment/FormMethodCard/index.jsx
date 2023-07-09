import {
  Button,
  ChakraProvider,
  Flex,
  FormControl,
  Grid,
  useMediaQuery,
  useToast,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { baseURL } from "../../../../../services/api";
import { maskString } from "../../../../../utils/mask";
import { ToastUsage } from "../../toast/ToastUsage";
import { CardForm } from "./CardForm";
import { FormFooter } from "./FormFooter";
import { HeaderForm } from "./HeaderForm";
import InputForm from "./InputForm";
import { useDebounce } from "../../../../../hooks/useDebounce";

const schema = yup.object().shape({
  nome: yup.string().required("Nome é obrigatório"),
  email: yup.string().required("Email é obrigatório"),
  cpf: yup.string().required("CPF é obrigatório"),
  cep: yup.string().required("CEP é obrigatório"),
  numero: yup.string().required("Número é obrigatório"),
  // telefone: yup.string().required("Telefone é obrigatório"),
  celular: yup.string().required("Celular é obrigatório"),
});

const FormMethodCard = ({
  valorProduto,
  descricaoProduto,
  quantidadeProduto,
  dataBack,
  chaveEmp,
  valores,
  valorFreteAmostra,
}) => {
  const toast = useToast();
  const [options, setOptions] = useState([]);
  const [cidades, setCidades] = useState([]);
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const [isMaxWidth768] = useMediaQuery("(max-width: 768px)");
  const [cep, setCep] = useState("");
  const [valueCep, setValueCep] = useState("");
  const debouncedCep = useDebounce(valueCep, 1000);


  const router = useRouter();

  const [isMinWidthMedium, setIsMinWidthMedium] = useState(false);

  useEffect(() => {
    async function getCep(e) {
      try {
        const response = await baseURL.get(
          `/pedido/busca-endereco-cliente/${debouncedCep}`
        );

        setCep(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    if (debouncedCep) {
      getCep();
    }
  }, [debouncedCep]);

  useEffect(() => {
    if (isMaxWidth768 !== isMinWidthMedium) {
      setIsMinWidthMedium(isMaxWidth768);
    }
  }, [isMaxWidth768, isMinWidthMedium]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const maskPhone = (value) => {
    return maskString("(##) #####-####", value);
  };

  const maskCel = (value) => {
    return maskString("(##) #####-####", value);
  };

  async function getEstados() {
    const { data } = await axios.get(
      "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
    );
    const options = data.map((estado) => ({
      label: estado.nome,
      value: estado.sigla,
    }));
    setOptions(options);
  }

  useEffect(() => {
    getEstados();
  }, []);

  async function getCidades(estado) {
    const { data } = await axios.get(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/municipios`
    );
    const options = data.map((cidade) => ({
      label: cidade.nome,
      value: cidade.nome,
    }));
    setCidades(options);
  }

  const submit = async (data) => {
    const valorTotalItem = Array.from(valores.valorTotalItens).reduce(
      (acc, curr) => {
        return acc + Number(curr);
      },
      0
    );


    const param = {
      nome: data.nome,
      cpf: data.cpf,
      email: data.email,
      cep_cobranca: data.cep,
      rua_end_cobranca: cep[0].rua,
      numero_end_cobranca: data.numero,
      complemento_cobranca: data.complemento,
      cidade_cobranca: cep[0].cidade,
      uf_cobranca: cep[0].uf,
      bairro_end_cobranca: cep[0].bairro,
      telefone_cliente: data.celular,
      descricao_produto: descricaoProduto,
      valor_produto: valorProduto,
      quantidade_de_pecas: quantidadeProduto,
      cidade_pessoal: dataBack.cidadePessoal,
      nunota: dataBack.nunota,
      uf_pessoal: dataBack.ufPessoal,
      cep_pessoal: dataBack.cepPessoal,
      rua_end_pessoal: dataBack.ruaEndPessoal,
      numero_end_pessoal: dataBack.numeroEndPessoal,
      bairo_end_pessoal: dataBack.bairroEndPessoal,
      uf_entrega: dataBack.ufEntrega,
      cidade_entrega: dataBack.cidadeEntrega,
      cep_entrega: dataBack.cepEntrega,
      numero_end_entrega: dataBack.numeroEndEntrega,
      rua_end_entrega: dataBack.ruaEndEntrega,
      bairo_end_entrega: dataBack.bairroEndEntrega,
      valor_entrega: dataBack.valorFreteResumo,
      obs_entrega: dataBack.obsEntrega,
      tipo_pagamento: dataBack.paymentType,
      chave_emp: chaveEmp,
      substituicao_tributaria: parseFloat(valores.substituicaoTributaria)
        .toFixed(2)
        .toString()
        .replace(".", ""),

      valor_total_pedido: String(
        parseFloat(
          valorTotalItem +
            parseFloat(valorFreteAmostra) +
            parseFloat(valores.substituicaoTributaria)
        ).toFixed(2)
      ),
    };

    if (cep.estado === "") {
      toast({
        position: "top",
        render: () => <ToastUsage description="Selecione um estado" />,
      });
      return;
    }

    if (cep.cidade === "") {
      toast({
        position: "top",
        render: () => <ToastUsage description="Selecione uma cidade" />,
      });
      return;
    }

    if (cep.rua === "") {
      toast({
        position: "top",
        render: () => <ToastUsage description="Selecione um endereço" />,
      });
      return;
    }

    if (cep.bairro === "") {
      toast({
        position: "top",
        render: () => <ToastUsage description="Selecione um bairro" />,
      });
      return;
    }

    const response = await baseURL.post("/pedido/envia-dados-pagamento", param);

    if (typeof window !== "undefined" && response.status === 200) {
      window.open(response.data).focus();

      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
  };

  return (
    <ChakraProvider>
      <FormControl
        as="form"
        size="lg"
        w="100%"
        onSubmit={handleSubmit(submit)}
        display="flex"
        flexDirection="column"
      >
        <HeaderForm />

        <Flex gap={3} flexDirection={isMinWidthMedium ? "column" : "row"}>
          <CardForm
            label="Dados do titular do cartão"
            size={isMinWidthMedium ? "100%" : "400px"}
          >
            <InputForm
              label="Nome do titular"
              name="nome"
              id="nome"
              placeholder="Nome do titular"
              {...register("nome")}
              errors={errors.nome?.message}
            />
            <InputForm
              label="CPF"
              name="cpf"
              id="cpf"
              placeholder="XX.XXX.XXX/0001-XX."
              {...register("cpf")}
              errors={errors.cpf?.message}
            />
            <InputForm
              label="E-mail"
              name="email"
              id="email"
              placeholder="E-mail"
              {...register("email")}
              errors={errors.email?.message}
            />
          </CardForm>
          <CardForm label="Endereço da fatura do cartão" flex="1">
            <Grid
              gridTemplateColumns={isMinWidthMedium ? "1fr" : "1fr 1fr"}
              gap={3}
            >
              <Flex flexDir="column">
                <InputForm
                  label="CEP"
                  name="cep"
                  id="cep"
                  placeholder="CEP"
                  {...register("cep")}
                  errors={errors.cep?.message}
                  onChange={(e) => setValueCep(e.target.value)}
                />
                <InputForm
                  label="Endereço"
                  name="endereco"
                  id="endereco"
                  placeholder="Endereço"
                  {...register("endereco")}
                  errors={errors.endereco?.message}
                  value={cep[0]?.rua}
                />{" "}
                <Flex gap={3}>
                  <InputForm
                    label="Número"
                    name="numero"
                    id="numero"
                    placeholder="Número"
                    {...register("numero")}
                    errors={errors.numero?.message}
                  />
                  <InputForm
                    label="Complemento"
                    name="complemento"
                    id="complemento"
                    placeholder="Complemento"
                    {...register("complemento")}
                  />
                </Flex>
                <InputForm
                  label="Bairro"
                  name="bairro"
                  id="bairro"
                  placeholder="Bairro"
                  {...register("bairro")}
                  errors={errors.bairro?.message}
                  value={cep[0]?.bairro}
                />
              </Flex>
              <Flex flexDir="column">
                <InputForm
                  label="Estado"
                  name="estado"
                  id="estado"
                  placeholder="Estado"
                  value={cep[0]?.estado}
                />
                <InputForm
                  label="Cidade"
                  name="cidade"
                  id="cidade"
                  placeholder="Cidade"
                  value={cep[0]?.cidade}
                />
                <InputForm
                  label="Telefone"
                  name="telefone"
                  id="telefone"
                  placeholder="(XX) XXXX-XXXX"
                  {...register("telefone")}
                  errors={errors.telefone?.message}
                />
                <InputForm
                  label="Celular"
                  name="celular"
                  id="celular"
                  placeholder="(XX) XXXXX-XXXX"
                  {...register("celular")}
                  errors={errors.celular?.message}
                />
              </Flex>
            </Grid>
          </CardForm>
        </Flex>

        <FormFooter />
        <Button
          type="submit"
          bgColor="#80BD01"
          color="#fff"
          _hover={{ bgColor: "#80BD01" }}
          mx="auto"
          px={10}
          borderRadius={4}
          mt={3}
          textTransform="uppercase"
        >
          Salvar e continuar
        </Button>
      </FormControl>
    </ChakraProvider>
  );
};

export default FormMethodCard;
