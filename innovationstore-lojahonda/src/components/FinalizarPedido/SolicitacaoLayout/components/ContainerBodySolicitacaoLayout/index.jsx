import React, { useEffect, useState } from "react"
import { Flex, Text, Image, useMediaQuery, ChakraProvider } from "@chakra-ui/react"
import * as S from "./styles"
import LdsEllipsisLoading from "../../../../../utils/LoadingLdsEllipsis/LdsEllipsis"
import { useRouter } from "next/router"

import { transformToBase64 } from "../../../../../utils/transformToBase64"
import { replaceImgNot64 } from "../../../../../utils/transformToBase64"
import { AiFillCaretRight, AiOutlineRight } from "react-icons/ai"
import { List } from "./List"
import { baseURL } from "../../../../../services/api"
import Toast from "../../../../../components/toast/index"

const icon_upload = "/images/tela-upload/upload-icon.svg"
const banner = "/images/tela-upload/banner-upload.jpg"
const banner_mobile = "/images/tela-upload/banner-upload-mobile.png"
const alert_icon = "/images/exclamacao.png"
const loadingGif = "/images/loading.gif"

const ContainerBodySolicitacaoLayout = ({
  mobileView,
  dados_layout,
  noteView,
  setPaginacao,
  paginacao,
  isSolicitation,
}) => {
  const [numeroNota, setNumeroNota] = useState([])
  const [numeroUnico, setNumeroUnico] = useState([])
  const [codProd, setCodProd] = useState([])
  const [loading, setLoading] = useState()
  const [image, setImage] = useState([])
  const [desc, setDesc] = useState([])
  const [idTabela, setIdTabela] = useState([])
  const [buttonEditar, setButtonEditar] = useState([])
  const [arrayDados, setArrayDados] = useState({})
  const [file, setFile] = useState([])
  const [isChecked, setIsChecked] = useState(false)
  const [onlyFiles, setOnlyFiles] = useState(0)
  const [progress, setProgress] = useState(0)
  const [messageProgress, setMessageProgress] = useState("")
  const [index, setIndex] = useState(0)
  const [sequencia, setSequencia] = useState([])
  const [fileName, setFileName] = useState([])
  const [toast, setToast] = useState({
    sucess: false,
    error: false,
    errorFileLenght: false,
    errorSize: false,
  })

  const router = useRouter()

  const [isMaxWidth800] = useMediaQuery("(max-width: 800px)")

  const [isSubmitting, setIsSubmitting] = useState(false)

  const indexDados = dados_layout?.map((data, index) => index)

  // useEffect(() => {
  //   setOnlyFiles(indexDados.length - 1);
  // }, [file]);

  useEffect(() => {
    try {
      setLoading(true)
      const timer = setTimeout(function () {
        setLoading(false)
        clearTimeout(timer)
      }, 1500)
    } catch (err) {
      setLoading(false)
    }
  }, [])

  const handleArrayIDTabela = (id) => {
    setIdTabela([...idTabela, id])
  }

  const deleteArrayIDTabela = (id) => {
    const array = idTabela.filter((item) => item !== id)
    setIdTabela(array)
  }

  const removeIdTabela = (id) => {
    deleteArrayIDTabela(id)
  }

  const deleteNameFile = (id) => {
    const array = fileName.filter((item) => item !== id)
    setFileName(array)
  }

  const handleIdButtonEditar = (id) => {
    setButtonEditar([...buttonEditar, id])
  }

  const numeroDoProduto = dados_layout.map((data) => data.codigo_produto)
  const numerodaNota = dados_layout.map((data) => data.numero_nota)
  const numeroDoUnico = dados_layout.map((data) => data.ad_numinno)
  const sequenciaDados = dados_layout.map((data) => data.sequencia)

  useEffect(() => {
    setCodProd(...codProd, numeroDoProduto)
    setNumeroNota(...numeroNota, numerodaNota)
    setNumeroUnico(...numeroUnico, numeroDoUnico)
    setSequencia(...sequencia, sequenciaDados)
  }, [])

  useEffect(() => {
    if (file[0]) {
      functionSalvar()
    }
  }, [file])

  const functionSalvar = async () => {
    setIsSubmitting(true)

    const response = await baseURL.post("pedido/upload-drive-encaminha-layout", arrayDados, {
      onUploadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent
        let percent = Math.floor((loaded * 100) / total)
        setMessageProgress(`${percent}%`)
        if (percent < 100) {
          setProgress(percent)
        }
      },
    })

    setIsSubmitting(false)
  }

  const enviarInfoCliente = async (e) => {
    if (file.length === 0) {
      return setToast({ ...toast, errorFileLenght: true })
    }

    const params = {
      numero_nota: numeroNota,
      codigo_produto: codProd,
      sequencia: sequencia,
      numero_unico: numeroUnico,
      observacao: desc,
    }

    try {
      const response = await baseURL.post("pedido/inserir-observacoes-envia-layout", params)

      setLoading(false)

      setToast({ sucess: true, error: false })
      router.push("/lojahonda/solicitacao-layout/success")
    } catch (error) {
      setLoading(false)
      console.log(error)
      setToast({ sucess: false, error: true })
    }

    setToast({ sucess: false, error: false, errorFileLenght: false })
  }

  const enviarImagens = async (e) => {
    let files = e.target.files[0]

    if (!files) {
      return
    }

    try {
      if (files.size > 15000000) {
        setToast({ sucess: false, error: false, errorSize: true })
        return
      }

      if (
        files.type !== "application/pdf" &&
        files.type !== "image/jpeg" &&
        files.type !== "image/png" &&
        files.type !== "image/jpg" &&
        files.type !== "image/svg+xml" &&
        files.type !== "application/octet-stream" &&
        files.type !== "application/postscript"
      ) {
        alert("Tipo de arquivo não permitido")
        return
      }

      setFileName((fileName) => [...fileName, files.name])

      if (isChecked) {
        await transformToBase64(files).then((result) => {
          setImage([result])
          setArrayDados({
            codigo_produto: codProd,
            observacao: desc,
            file: replaceImgNot64(result),
            numero_pedido: numeroUnico[0],
            numero_nota: numeroNota[0],
            formatImage: result.substring(0, 30),
            fileName: result.substring(0, 30),
            validacao: isChecked,
          })
        })
      }

      if (!isChecked) {
        await transformToBase64(files).then((result) => {
          for (let i = 0; i < dados_layout.length; i++) {
            setArrayDados({
              codigo_produto: codProd[i],
              file: replaceImgNot64(result),
              numero_pedido: numeroUnico[i],
              numero_nota: numeroNota[i],
              formatImage: result.substring(0, 30),
              fileName: result.substring(0, 30),
              validacao: isChecked,
            })
          }
        })
      }

      setFile([...file, files])
      await transformToBase64(files).then((result) => {
        setImage([...image, result])
      })
    } catch (error) {
      console.log(error)
    }

    setToast({ sucess: false, error: false, errorSize: false })
  }

  const enviarDesc = (e) => {
    setDesc([...desc, e.target.value])
  }

  return loading ? (
    <Flex justify="center" w="98%" maxW="1200px" h="300px" align="center" mx="auto">
      <img
        alt="loading"
        style={{
          position: "relative",
        }}
        src={loadingGif}
      />
    </Flex>
  ) : (
    <S.ContainerSolicitacaoLayout>
      {isMaxWidth800 ? (
        <Image src={"/images/banners/banner-mobile.png"} alt="logo" />
      ) : (
        <Image src={"/images/banners/banner-upload.jpg"} alt="logo" margin="0 auto" />
      )}
      {/* <S.BoxSpaceSolicitacaoLayout /> */}

      <Text
        position="relative"
        top={mobileView ? "5px" : "20px"}
        textAlign="center"
        paddingBlock={isMaxWidth800 ? "0px" : "2rem"}
        margin="0"
      >
        Este espaço foi reservado para você enviar alguma informação adicional.
      </Text>
      <ChakraProvider>
        {!!toast.sucess && (
          <Toast
            message="Dados enviados com sucesso"
            description="Seus dados foram enviados com sucesso."
            status="success"
          />
        )}
        {!!toast.error && (
          <Toast
            message="Erro ao enviar dados"
            description="Ocorreu um erro ao enviar os dados, tente novamente mais tarde."
            status="error"
          />
        )}
        {!!toast.errorFileLenght && (
          <Toast
            message="Selecione ao menos uma imagem"
            description="Selecione ao menos uma imagem para enviar."
            status="error"
          />
        )}
        {!!toast.errorSize && (
          <Toast
            message="Tamanho máximo de arquivo excedido"
            description="O tamanho máximo de arquivo é de 15MB."
            status="error"
          />
        )}
      </ChakraProvider>
      <List
        dados_layout={dados_layout}
        mobileView={mobileView}
        noteView={noteView}
        isChecked={isChecked}
        idTabela={idTabela}
        buttonEditar={buttonEditar}
        enviarImagens={enviarImagens}
        enviarDesc={enviarDesc}
        isSubmitting={isSubmitting}
        progress={progress}
        messageProgress={messageProgress}
        handleArrayIDTabela={handleArrayIDTabela}
        handleIdButtonEditar={handleIdButtonEditar}
        image={image}
        setIsChecked={setIsChecked}
        indexDados={indexDados}
        codProd={codProd}
        setIndex={setIndex}
        index={index}
        fileName={fileName}
        setFile={setFile}
        setFileName={setFileName}
        file={file}
        deleteNameFile={deleteNameFile}
        deleteArrayIDTabela={deleteArrayIDTabela}
        removeIdTabela={removeIdTabela}
        toast={toast}
      />

      <Flex mt={mobileView ? "0" : "50px"} h="40px" alignItems="center" justify="center">
        {!isMaxWidth800 && (
          <>
            <Image w={25} h={25} src={alert_icon} />

            <Text position="relative" fontSize="14px" mt="20px" ml="20px">
              Só iremos produzir seu material após aprovação de crédito e da amostra virtual aprovada pelo cliente.
            </Text>
          </>
        )}
      </Flex>

      <Flex
        position="relative"
        h="40px"
        marginBlock={isMaxWidth800 ? "0px" : "2rem"}
        justify="center"
        alignItems="center"
        w="100%"
      >
        <S.ButtonConfirmarSolicitacaoLayout
          type="submit"
          onClick={() => enviarInfoCliente()}
          rightIcon={mobileView ? <AiOutlineRight /> : <AiFillCaretRight />}
        >
          {loading ? <LdsEllipsisLoading w="80px" h="80px" left="3px" /> : isSolicitation ? "Confirmar" : "Avançar"}
        </S.ButtonConfirmarSolicitacaoLayout>
      </Flex>
      {!!isMaxWidth800 && (
        <Flex alignItems="center">
          <Image w={25} h={25} src={alert_icon} />

          <Text position="relative" fontSize="14px" mt="20px" ml="20px">
            Só iremos produzir seu material após aprovação de crédito e da amostra virtual aprovada pelo cliente.
          </Text>
        </Flex>
      )}
    </S.ContainerSolicitacaoLayout>
  )
}

export default ContainerBodySolicitacaoLayout
