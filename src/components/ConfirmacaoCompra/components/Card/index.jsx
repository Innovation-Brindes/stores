import { Flex, Text, useMediaQuery } from "@chakra-ui/react"
import React, { useEffect } from "react"
import { GoAlert } from "react-icons/go"
import { formatDate } from "../../../../utils/formatDate"
import { maskString } from "../../../../utils/mask"
import { setFirstLetterUpperCase } from "../../../../utils/setFirstLetterUpperCase"
import { CardProduct } from "./CardProduct"
import { CardProductMobile } from "./CardProductMobile"
import * as S from "./cardStyles"

const Card = ({
  headerCard = false,
  isConsultor = false,
  isProduct = false,
  cardProduct = false,
  cardEntregas = false,
  label,
  dados,
  isTransp = false,
  isMobile = false,
  dataInfoClientes,
  isFat,
  isEnt,
  data,
  setIsChecked,
  isChecked,
  textFrete,
}) => {
  const [isMaxWidth768] = useMediaQuery("(max-width: 768px)")
  const [isMinWidthMedium, setIsMinWidthMedium] = React.useState(false)

  useEffect(() => {
    if (isMaxWidth768 !== isMinWidthMedium) {
      setIsMinWidthMedium(isMaxWidth768)
    }
  }, [isMaxWidth768])

  const maskPhoneDDI = (value) => {
    if (value.length === 10) {
      return maskString(value, "(##) ####-####")
    }

    return maskString(value, "(##) #####-####")
  }

  const maskCep = (value) => {
    return maskString(value, "#####-###")
  }

  const maskCNPJorCPF = (value) => {
    if (value.length > 11) {
      return maskString(value, "##.###.###/####-##")
    } else {
      return maskString(value, "###.###.###-##")
    }
  }

  function verifyLengthCodprod(value) {
    if (value.length === 4) return value

    if (value.length === 3) return `0${value}`

    if (value.length === 2) return `00${value}`

    if (value.length === 1) return `000${value}`

    return value
  }

  const dadosInnovation = dataInfoClientes?.map((item, index) => {
    return (
      <S.Card width={isMinWidthMedium ? "100%" : "833px"} minHeight={"166px"} borderColor="#cecece" key={index}>
        <S.CardHeader bgColor="#cecece" textColor="#616060">
          INNOVATION BRINDES
        </S.CardHeader>
        <S.CardContent>
          <S.Wrapper>
            <S.WrapperContent>
              <span
                style={
                  isMinWidthMedium
                    ? { fontWeight: "600" }
                    : isMinWidthMedium
                    ? { fontWeight: "600" }
                    : { fontWeight: "bold" }
                }
              >
                Razão Social:{" "}
              </span>{" "}
              <span>{item.emp_razao_social}</span>
            </S.WrapperContent>
            <S.WrapperContent>
              <span
                style={
                  isMinWidthMedium
                    ? { fontWeight: "600" }
                    : isMinWidthMedium
                    ? { fontWeight: "600" }
                    : { fontWeight: "bold" }
                }
              >
                CNPJ:
              </span>{" "}
              <span>{maskCNPJorCPF(item.emp_cnpj)}</span>
            </S.WrapperContent>
            <S.WrapperContent>
              <span
                style={
                  isMinWidthMedium
                    ? { fontWeight: "600" }
                    : isMinWidthMedium
                    ? { fontWeight: "600" }
                    : { fontWeight: "bold" }
                }
              >
                IE:
              </span>{" "}
              <span>{item.emp_ie}</span>
            </S.WrapperContent>
          </S.Wrapper>
          <S.Wrapper>
            {/* <S.WrapperContent>
              <span
                style={
                  isMinWidthMedium
                    ? { fontWeight: "600" }
                    : isMinWidthMedium
                    ? { fontWeight: "600" }
                    : { fontWeight: "bold" }
                }
              >
                Endereço:
              </span>{" "}
              <span>{setFirstLetterUpperCase(item.emp_endereco)}</span>
            </S.WrapperContent>
            <S.WrapperContent>
              <span
                style={
                  isMinWidthMedium
                    ? { fontWeight: "600" }
                    : isMinWidthMedium
                    ? { fontWeight: "600" }
                    : { fontWeight: "bold" }
                }
              >
                Cidade/UF:
              </span>{" "}
              <span>{item.emp_estado}</span>
            </S.WrapperContent>
            <S.WrapperContent>
              <span
                style={
                  isMinWidthMedium
                    ? { fontWeight: "600" }
                    : isMinWidthMedium
                    ? { fontWeight: "600" }
                    : { fontWeight: "bold" }
                }
              >
                CEP:
              </span>{" "}
              <span>{maskCep(item.emp_cep)}</span>
            </S.WrapperContent> */}
          </S.Wrapper>
        </S.CardContent>
      </S.Card>
    )
  })

  const dataInfoTranspEntFat = dataInfoClientes?.map((item, index) => {
    return (
      <S.Card
        width="400px"
        borderColor="#cc0000"
        minHeight="450px"
        {...(isMinWidthMedium && { width: "100%" })}
        key={index}
      >
        <S.CardHeader bgColor="#cc0000" textColor="white">
          {label}
        </S.CardHeader>
        <S.CardContent>
          <S.Wrapper>
            {!isTransp && (
              <>
                <Flex gap={".5rem"} flexDirection="column">
                  <S.WrapperContent>
                    <span
                      style={
                        isMinWidthMedium
                          ? { fontWeight: "600" }
                          : isMinWidthMedium
                          ? { fontWeight: "600" }
                          : { fontWeight: "bold" }
                      }
                    >
                      Razão Social:
                    </span>{" "}
                    <span>
                      {!isTransp && isFat
                        ? item.fat_razao_social
                        : isEnt
                        ? item.ent_razao_social
                        : item.transp_razao_social}
                    </span>
                  </S.WrapperContent>
                  <S.WrapperContent>
                    <span style={isMinWidthMedium ? { fontWeight: "600" } : { fontWeight: "bold" }}>CNPJ:</span>{" "}
                    <span>
                      {!isTransp && isFat
                        ? maskCNPJorCPF(item.fat_cpf_cnpj)
                        : isEnt
                        ? maskCNPJorCPF(item.ent_cpf_cnpj)
                        : ""}
                    </span>
                  </S.WrapperContent>
                  <S.WrapperContent>
                    <span style={isMinWidthMedium ? { fontWeight: "600" } : { fontWeight: "bold" }}>IE:</span>{" "}
                    <span>
                      {!isTransp && isFat ? item.fat_insricao_estadual : isEnt && item.ent_inscricao_estadual}{" "}
                    </span>
                  </S.WrapperContent>
                  <S.WrapperContent>
                    <span style={isMinWidthMedium ? { fontWeight: "600" } : { fontWeight: "bold" }}>Endereço:</span>{" "}
                    <span>
                      {!isTransp && isFat ? item.fat_endereco : isEnt ? item.ent_endereco : item.transp_endereco}
                    </span>
                  </S.WrapperContent>
                  <S.WrapperContent>
                    <span style={isMinWidthMedium ? { fontWeight: "600" } : { fontWeight: "bold" }}>CEP:</span>{" "}
                    <span>
                      {!isTransp && isFat
                        ? maskCep(item.fat_cep)
                        : isEnt
                        ? maskCep(item.ent_cep)
                        : maskCep(item.transp_cep)}
                    </span>
                  </S.WrapperContent>
                  <S.WrapperContent>
                    <span style={isMinWidthMedium ? { fontWeight: "600" } : { fontWeight: "bold" }}>Cidade/UF:</span>{" "}
                    <span>
                      {!isTransp && isFat
                        ? item.fat_cidade + "/" + item.fat_uf
                        : isEnt
                        ? item.ent_cidade + "/" + item.ent_uf
                        : item.transp_cidade}
                    </span>
                  </S.WrapperContent>
                  <S.WrapperContent>
                    <span style={isMinWidthMedium ? { fontWeight: "600" } : { fontWeight: "bold" }}>Nome:</span>{" "}
                    <span>{!isTransp && isFat ? item.fat_nome : isEnt ? item.ent_nome : ""}</span>
                  </S.WrapperContent>
                  <S.WrapperContent>
                    <span style={isMinWidthMedium ? { fontWeight: "600" } : { fontWeight: "bold" }}>Email:</span>{" "}
                    <span>{!isTransp && isFat ? item.fat_email : isEnt ? item.ent_email : item.transp_email}</span>
                  </S.WrapperContent>
                  <S.WrapperContent>
                    <span style={isMinWidthMedium ? { fontWeight: "600" } : { fontWeight: "bold" }}>Tel:</span>{" "}
                    <span>
                      {!isTransp && isFat
                        ? maskPhoneDDI(item.fat_fixo)
                        : isEnt
                        ? maskPhoneDDI(item.ent_fixo)
                        : item.transp_telefone}
                    </span>
                  </S.WrapperContent>
                  <S.WrapperContent>
                    <span style={isMinWidthMedium ? { fontWeight: "600" } : { fontWeight: "bold" }}>Cel:</span>{" "}
                    <span>
                      {!isTransp && isFat
                        ? maskPhoneDDI(item.fat_telefone)
                        : isEnt
                        ? maskPhoneDDI(item.ent_telefone)
                        : item.transp_telefone}
                    </span>
                  </S.WrapperContent>
                </Flex>
              </>
            )}

            {!!isTransp && (
              <S.WrapperContent>
                <Flex gap={".5rem"} flexDirection="column">
                  <Flex gap=".5rem" alignItems="center" justifyContent="start">
                    <Text fontSize="1rem" margin="0" fontWeight={"bold"}>
                      Saída da mercadoria da fábrica:{" "}
                    </Text>
                    <Text
                      as="span"
                      border={item.destacar_data === "S" ? "1px solid #f21b1b" : ""}
                      padding={item.destacar_data === "S" ? "0 .1rem" : ""}
                      borderRadius={item.destacar_data === "S" ? ".2rem" : ""}
                      color={item.destacar_data === "S" ? "#f21b1b" : ""}
                      bg={item.destacar_data === "S" ? "#f21b1b1a" : ""}
                    >
                      {item.transp_saida}
                    </Text>
                  </Flex>
                  {/* {textFrete?.indexOf("FOB") &&
                  item.transp_nome !== "CLIENTE RETIRA" ? null : (
                    <Flex
                      gap=".5rem"
                      alignItems="center"
                      justifyContent="start"
                    >
                      <Text fontSize="1rem" margin="0" fontWeight={"bold"}>
                        Prazo previsto transportadora:
                      </Text>{" "}
                      <span>{item.transp_prazo}</span>
                    </Flex>
                  )} */}

                  <Flex gap=".5rem" alignItems="center" justifyContent="start">
                    <Text fontSize="1rem" margin="0" fontWeight={"bold"}>
                      Entregue por:
                    </Text>{" "}
                    <span>{item.transp_nome.substring(0, 20) + "..."}</span>
                  </Flex>
                  <Flex gap=".8rem" marginTop="1rem">
                    <GoAlert size={20} color="#ff7e00 " /> <Text color="#ff7e00 ">Importante</Text>
                  </Flex>
                  <Text>
                    Não nos responsabilizamos por eventuais atrasos na entrega de seus produtos por meio de
                    transportadoras ou correios.
                  </Text>
                </Flex>
              </S.WrapperContent>
            )}
          </S.Wrapper>
        </S.CardContent>
      </S.Card>
    )
  })

  return (
    <>
      {!!cardProduct && (
        <>
          {data?.map((item, index) => (
            <CardProduct
              key={index}
              item={item}
              verifyLengthCodprod={verifyLengthCodprod}
              setIsChecked={setIsChecked}
              isChecked={isChecked}
            />
          ))}
        </>
      )}
      {!!headerCard && dadosInnovation}
      {!!isConsultor &&
        dataInfoClientes?.map((item, index) => (
          <>
            <S.Card width="400px" borderColor="#cecece" {...(isMinWidthMedium && { width: "100%" })}>
              <S.CardHeader bgColor="#cecece" textColor="#616060">
                SEU CONSULTOR
              </S.CardHeader>
              <S.CardContent>
                <S.Wrapper>
                  <S.WrapperContent>
                    <span style={isMinWidthMedium ? { fontWeight: "600" } : { fontWeight: "bold" }}>Nome:</span>{" "}
                    <span>{item.nome_vendedor}</span>
                  </S.WrapperContent>
                  <S.WrapperContent>
                    <span style={isMinWidthMedium ? { fontWeight: "600" } : { fontWeight: "bold" }}>Telefone:</span>{" "}
                    <span>{maskPhoneDDI(item.numero_vendedor)}</span>
                  </S.WrapperContent>
                  <S.WrapperContent>
                    <span style={isMinWidthMedium ? { fontWeight: "600" } : { fontWeight: "bold" }}>Celular:</span>{" "}
                    <span>{maskPhoneDDI(item.celular_vendedor)}</span>
                  </S.WrapperContent>
                  <S.WrapperContent>
                    <span style={isMinWidthMedium ? { fontWeight: "600" } : { fontWeight: "bold" }}>Email:</span>{" "}
                    <span>{item.email_vendedor}</span>
                  </S.WrapperContent>
                </S.Wrapper>
              </S.CardContent>
            </S.Card>
          </>
        ))}
      {!!cardEntregas && dataInfoTranspEntFat}
      {!!isMobile &&
        data?.map((item, index) => (
          <CardProductMobile
            key={index}
            item={item}
            verifyLengthCodprod={verifyLengthCodprod}
            setIsChecked={setIsChecked}
            isChecked={isChecked}
          />
        ))}
    </>
  )
}

export default Card
