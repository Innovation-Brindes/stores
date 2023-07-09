import { Flex, Text, useBreakpointValue } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { baseURL } from "../../services/api"
import {
  AtendimentoContainer,
  BodyFooterContainer,
  ContainerHorario,
  InnovationContainer,
  InnovationContent,
  LineContainerAttributes,
  SegmentosContainer,
  SegmentosRowContent,
  SoAquiContainer,
  Wrapper,
} from "./styles"
import Link from "next/link"

export function BodyFooter() {
  const [links, setLinks] = useState([])
  async function getLinksSegments() {
    const { data } = await baseURL.get("pedido/listar-segmento-rodape")

    setLinks(data)
  }

  useEffect(() => {
    getLinksSegments()
  }, [])

  return (
    <BodyFooterContainer>
      <InnovationContainer>
        <h1>INNOVATION</h1>
        <InnovationContent>
          <h2>Como comprar</h2>
          <h2>Política de troca e correções</h2>
          <Link href="/enderecos">
            <h2>Endereços</h2>
          </Link>
        </InnovationContent>
      </InnovationContainer>
      <SegmentosContainer>
        {" "}
        <h1>SEGMENTOS</h1>
        <Wrapper>
          <LineContainerAttributes containerHeight="200px" height="86%">
            {!links.length ? (
              <div>Carregando...</div>
            ) : (
              links.map((link, index) => {
                if (index < 10) {
                  return (
                    <Text
                      m={0}
                      color="#414042"
                      textDecoration={"none"}
                      key={link.id_segmento}
                      as="a"
                      href={link.url_segmento}
                    >
                      {link.descricao}
                    </Text>
                  )
                }
              })
            )}
          </LineContainerAttributes>
          <SegmentosRowContent>
            {!links.length ? (
              <div>Carregando...</div>
            ) : (
              links.map((link, index) => {
                if (index >= 10) {
                  return (
                    <Text
                      m={0}
                      color="#414042"
                      textDecoration={"none"}
                      key={link.id_segmento}
                      as="a"
                      href={link.url_segmento}
                    >
                      {link.descricao}
                    </Text>
                  )
                }
              })
            )}
          </SegmentosRowContent>
        </Wrapper>
      </SegmentosContainer>
      <SoAquiContainer>
        <h1>SÓ AQUI</h1>
        <LineContainerAttributes height="75%" containerHeight="70px">
          <Link href="/segmento/novidades/6">
            <h2>Lançamentos</h2>
          </Link>
          <Link href="/ultra-rapido">
            <h2>Pronto em 48 horas</h2>
          </Link>

          <Link href="/regulamento-compre-ganhe">
            <h2>Compre e ganhe</h2>
          </Link>
        </LineContainerAttributes>
      </SoAquiContainer>

      <AtendimentoContainer>
        {" "}
        <Text fontSize="14px" m={0} mb="15px">
          ATENDIMENTO
        </Text>
        <LineContainerAttributes height="50%" containerHeight="40px">
          <a
            href="https://api.whatsapp.com/send?phone=551126496030&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20da%20Innovation%20Brindes"
            target="_blank"
            rel="noreferrer"
          >
            SP +55 11 2649-6030 - WhatsApp
          </a>
          <h2>comercial@innovationbrindes.com.br</h2>
        </LineContainerAttributes>
      </AtendimentoContainer>
      <ContainerHorario>
        <h1 fontSize="14px" m={0} mb="15px">
          HORÁRIO
        </h1>
        <LineContainerAttributes height="61px" containerHeight="61px">
          <h2>Segunda a sexta-feira</h2>
          <h2>das 08:00 as 12:00 horas</h2>
          <h2>das 13:30 as 18 horas</h2>
        </LineContainerAttributes>
      </ContainerHorario>
    </BodyFooterContainer>
  )
}
