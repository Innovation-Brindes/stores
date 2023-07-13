import { Box, Divider, Flex, Grid, GridItem, Text, useBreakpointValue } from "@chakra-ui/react"
import { baseURL } from "../../services/api"
import { useEffect, useState } from "react"
import Image from "next/image"
import { PaymentMethods } from "./PaymentMethods"
import { BodyFooter } from "./BodyFooter"
import { BsInstagram, BsPinterest, BsYoutube } from "react-icons/bs"
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa"
import * as S from "./styles"

export function NewFooter() {
  return (
    <S.Container>
      {/* HEADER */}
      <S.Content>
        <S.ImageContainer>
          {" "}
          <img src="/images/logobanner.png" />
        </S.ImageContainer>
        <S.IconsSocialMedia>
          <a href="https://www.linkedin.com/company/innovationbrindes/" target="_blank" rel="noreferrer">
            <FaLinkedinIn color="#9fcd42" className="icon-border" />
          </a>
          <a href="https://www.instagram.com/innovationbrindes/" target="_blank" rel="noreferrer">
            <BsInstagram color="#9fcd42" className="icon-border" />
          </a>
          <a href="https://www.facebook.com/innovationbrindes" target="_blank" rel="noreferrer">
            <FaFacebookF color="#9fcd42" className="icon-border" />
          </a>
          <a href="https://br.pinterest.com/innovationbrindes/" target="_blank" rel="noreferrer">
            <BsPinterest color="#9fcd42" className="icon-border" />
          </a>
          <a href="https://www.youtube.com/c/InnovationbrindesBr" target="_blank" rel="noreferrer">
            <BsYoutube color="#9fcd42" className="icon-border" />
          </a>
        </S.IconsSocialMedia>

        <S.FeaturesContent>
          <a
            href="https://transparencyreport.google.com/safe-browsing/search?url=innovationbrindes.com.br
"
            target="_blank"
            rel="noreferrer"
          >
            <img className="onePerRow" src="/images/googlesafety.png" />
          </a>
          <img className="twoPerRow" src="/images/security.png" />
          <a href="https://g.page/r/CRRx_rrlky81EBM/review" target="_blank" rel="noreferrer">
            <img className="treePerRow" src="/images/google.png" />
          </a>
        </S.FeaturesContent>
      </S.Content>
      {/* BODY */}
      <BodyFooter />
      {/* FOOTER */}
      <PaymentMethods />
    </S.Container>
  )
}
