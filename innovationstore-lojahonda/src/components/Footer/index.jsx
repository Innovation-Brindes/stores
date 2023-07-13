import React, { Component, forwardRef, useEffect, useImperativeHandle, useState } from "react"
import Link from "next/link"
import { baseURL, SalvarContatoSite } from "./../../services/api"
import FooterComponent from "./FooterComponent"
import { NewFooter } from "../NewFooter"

import { cor_base_1 } from "../../services/cores"

import InputMask from "react-input-mask"

// import loading from "../../resources/images/loading.gif";
import {
  Box,
  Button,
  Center,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react"
import {
  FooterContainer,
  FooterContainerBodyModal,
  FooterContainerBodyModalHeader,
  FooterContainerBodyModalTable,
  FooterContainerContantSlide3,
  FooterContainerCookies,
  FooterContainerCookiesContent,
  FooterContainerText2,
  FooterContainerTitle,
} from "./styles"

import { AiFillCloseCircle } from "react-icons/ai"
import {
  CenterMobile,
  FooterContainerContentDadosLogoMobile,
  FooterContainerContentDadosMobile,
  FooterContainerContentDadosSubTitleMobile,
  FooterContainerContentDadosTitleMobile,
  FooterContainerContentMobile,
  FooterContainerContentSlidesMobile,
  FooterContainerContentTitleMobile,
  FooterContainerCookiesContentMobile,
  FooterContainerCookiesMobile,
  FooterContainerIconWhatsCloseMobile,
  FooterContainerIconWhatsContentMobile,
  FooterContainerIconWhatsMobile,
  FooterContainerIconWhatsPromptBodyContactMobile,
  FooterContainerIconWhatsPromptBodyInputMobile,
  FooterContainerIconWhatsPromptBodyMobile,
  FooterContainerIconWhatsPromptBodyMsg1Mobile,
  FooterContainerIconWhatsPromptBodyMsg2Mobile,
  FooterContainerIconWhatsPromptBodyMsg3Mobile,
  FooterContainerIconWhatsPromptHeaderContentMobile,
  FooterContainerIconWhatsPromptHeaderMobile,
  FooterContainerIconWhatsPromptLoadingMobile,
  FooterContainerIconWhatsPromptMobile,
  FooterContainerMobile,
  InputDataNomeMobile,
} from "./stylesMobile"
import FooterSocialMediaComponent from "./FooterSocialMedia"
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
} from "@chakra-ui/react"
import { validaCpfCnpj, validaTelefone } from "../../utils/mask"
import axios from "axios"
import { setFirstLetterUpperCase } from "../../utils/setFirstLetterUpperCase"
import { Divider } from "./Divider"

const parceiros1desk = "https://imgproductioncrm.s3.us-east-2.amazonaws.com/parceiros-1.png"
const parceiros2desk = "https://imgproductioncrm.s3.us-east-2.amazonaws.com/parceiros-2.png"
const parceiros3desk = "https://imgproductioncrm.s3.us-east-2.amazonaws.com/parceiros-3.png"
const parceiros1 = "/images/banners/mobile/cliente-1.png"
const parceiros2 = "/images/banners/mobile/cliente-2.png"
const parceiros3 = "/images/banners/mobile/cliente-3.png"
const parceiros4 = "/images/banners/mobile/cliente-4.png"
const parceiros5 = "/images/banners/mobile/cliente-5.png"
const parceiros6 = "/images/banners/mobile/cliente-6.png"
const parceiros7 = "/images/banners/mobile/cliente-7.png"
const parceiros8 = "/images/banners/mobile/cliente-8.png"
const parceiros9 = "/images/banners/mobile/cliente-9.png"
const parceiros10 = "/images/banners/mobile/cliente-10.png"
const parceiros11 = "/images/banners/mobile/cliente-11.png"
const parceiros12 = "/images/banners/mobile/cliente-12.png"
const rodape = "/images/menu/logoTopoMobile.png"
const logoModal = "/images/menu/logoModal.png"
const logoRodape = "/images/menu/logoRodape.png"

const loading = "/images/loading.gif"

const Footer = forwardRef((props, ref) => {
  const [window_width, setwindow_width] = useState(0)

  useEffect(() => {
    setwindow_width(window.innerWidth - 290)

    window.addEventListener("resize", function () {
      setwindow_width(window.innerWidth - 290)
    })
  }, [])

  return (
    <Box bgColor="white">
      {!props.chat_only ? (
        <>
          <FooterContainerMobile>
            <FooterContainerContentMobile>
              <div className="md:hidden mt-10">
                <Divider>Conheça mais sobre a Innovation Brindes</Divider>
              </div>
            </FooterContainerContentMobile>
          </FooterContainerMobile>

          <Box
            bgColor="white"
            zIndex="999999"
            className="modal fade"
            id="exampleModalScrollable"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalScrollableTitle"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-scrollable" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <img alt="logoModal" className="modal-title" id="exampleModalScrollableTitle" src={logoModal} />
                  <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <BodyModalCookies />
                </div>
              </div>
            </div>
          </Box>
          <FooterContainer>
            <FooterContainer>
              <div className="hidden md:block">
                <Divider>
                  <div className="w-[400px] text-center">Conheça mais sobre a Innovation Brindes</div>
                </Divider>
              </div>
              <FooterContainerText2>
                <br />
                <br />
                Todo o mercado busca <strong>Brindes Personalizados</strong> com qualidade. Afinal, ter a disposição o{" "}
                <strong>Melhor Brinde</strong>, com um repertório de 3 mil produtos não é um privilégio para qualquer
                um, a Innovation é um dos <strong>Fornecedores de Brindes</strong> que possui quase tudo que você
                precisa, fazendo com que o seu público tenha os <strong>Brindes</strong> com a qualidade que a sua marca
                precisa!
                <br />
                <br />A Innovation Brindes conta com um atendimento ao cliente de alto padrão, somos a Empresa que mais
                cresce no <strong>Mercado De Brindes</strong>, estamos aqui para ser a sua primeira escolha ao procurar{" "}
                <strong>Produtos Personalizados</strong>. A variedade de <strong>Brindes em pronta entrega</strong> que
                oferecemos não tem comparação, com a mesma qualidade que as suas <strong>Campanhas Promocionais</strong>
                , cuidaremos para que a sua marca seja impressa perfeitamente nos nossos Brindes, totalmente{" "}
                <strong>Personalizado</strong> para você.
                <br />
                <br />
                Na dúvida de como <strong>Oferecer Brindes</strong> para o seu cliente? Conte com todos nossos tipos de
                Brindes para melhorar a sua estratégia de marketing,
                <Link href="/categoria/caneta-plastica-brindes-personalizados/1023103">
                  <a> Canetas Promocionais</a>
                </Link>
                ,
                <Link href="/categoria/power-bank-personalizado-para-brindes/1012053">
                  <a> Power Banks Personalizados</a>
                </Link>
                ,
                <Link href="/categoria/pen-drive-personalizado-para-brindes/1012132">
                  <a> Pen-drives Para Eventos</a>
                </Link>
                ,
                <Link href="/categoria/squeeze-personalizado-para-brindes/1015092">
                  <a> Squeezes Personalizados</a>
                </Link>
                ,
                <Link href="/categoria/chaveiro-personalizado-para-brindes/1018109">
                  <a> Chaveiros Promocionais</a>
                </Link>
                ,
                <Link href="/categoria/diversos-personalizados-para-brindes/1025125">
                  <a> Porta Retratos Para Ação Promocional</a>
                </Link>
                ,
                <Link href="/categoria/porta-cartoes-personalizado-para-brindes/1016112">
                  <a> Porta Cartão Para Eventos</a>
                </Link>
                ,
                <Link href="/categoria/espelhos-personalizado-para-brindes/1017065">
                  <a> Espelho De Bolsa Personalizado</a>
                </Link>
                , e mais uma série de Brindes para a sua Campanha Promocional, aqui na Innovation Brindes oferecemos
                tudo que a sua empresa precisa, oferecemos toda a experiência e tradição da nossa empresa tendo um
                acerto garantido na produção deBrindes Personalizados para você divulgar a sua marca.
                <br />
                <br />
                Quando você procurar por Brindes Personalizados ou{" "}
                <Link href="/categoria/acessorios-personalizados-para-brindes/1012055">
                  <a>Brindes Tecnológicos</a>
                </Link>
                , venha para a Innovation Brindes. Com atendimento em todo o Brasil além de uma história no ramo de
                Brindes Corporativos trilhada há anos, os consultores da Innovation Brindes sabem exatamente como
                identificar as suas necessidades, podendo focar presencialmente no que você precisa, e no prazo em que
                você necessita.
                <br />
                <br />
                Fique um passo a frente da concorrência e um passo mais próximo da melhor qualidade em Produtos
                Personalizados com osBrindes Promocionais da Innovation Brindes. Com variedade e inovação, qualidade e
                utilidade, garantimos que você consiga conquistar a atenção do seu público-alvo e, com economia,
                agilidade e eficiência.
                <br />
                <br />
                As melhores soluções para quem procura por Brindes Personalizados, Brindes Promocionais e Brindes
                Corporativos é na Innovation Brindes!
                <br />
                <br />
                Tags: personalizada é,{" "}
                <Link href="/categoria/caneta-de-metal-personalizada-para-brindes/1023104">
                  <a> canetas personalizadas</a>
                </Link>
                ,
                <Link href="/categoria/guarda-chuva-personalizado-para-brindes/1034147">
                  <a> guarda sol personalizado</a>
                </Link>
                ,
                <Link href="/categoria/bolsas-personalizadas-para-brindes/1017129">
                  <a> bolsas térmicas</a>
                </Link>
                ,
                <Link href="/categoria/copos-canecas-personalizados-para-brindes/1015137">
                  <a> copos personalizados</a>
                </Link>
                ,
                <Link href="/categoria/pen-drive-personalizado-para-brindes/1012132">
                  <a> pen drive personalizado</a>
                </Link>
                ,
                <Link href="/categoria/copos-canecas-personalizados-para-brindes/1015137">
                  <a> canecas personalizadas</a>
                </Link>
                , brindes para eventos,{" "}
                <Link href="/categoria/kit-churrasco-personalizado-para-brindes/1020073">
                  <a> kit churrasco</a>
                </Link>
                ,
                <Link href="/categoria/porta-cartoes-personalizado-para-brindes/1016112">
                  <a> porta cartões</a>
                </Link>
                ,
                <Link href="/categoria/chaveiro-personalizado-para-brindes/1018109">
                  <a> chaveiros personalizado</a>
                </Link>
                ,
                <Link href="/categoria/mochilas-personalizadas-para-brindes/1032146">
                  <a> mochila personalizada</a>
                </Link>
                , sp canetas, brindes personalizados sp
              </FooterContainerText2>

              <NewFooter />
            </FooterContainer>
          </FooterContainer>
        </>
      ) : (
        <></>
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
                      "@context" : "https://schema.org",
                      "@type" : "Organization",
                      "url" : "https://www.innovationbrindes.com.br/",
                      "name": "Innovation Brindes",
                      "logo":"https://innovationbrindes.com.br/images/menu/logo-topo.png",
                      "sameAs": [
                        "https://www.youtube.com/c/InnovationbrindesBr",
                        "https://www.linkedin.com/company/innovationbrindes/",
                        "https://www.instagram.com/innovationbrindes/",
                        "https://pt-br.facebook.com/innovationbrindessp/",
                        "https://br.pinterest.com/innovationbrindes/"
                      ],
                      "contactPoint": {
                        "@type": "ContactPoint",
                        "contactType": "sales",
                        "telephone": "+55 (11) 2649-6030"
                      }
                    }`,
        }}
      ></script>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
                      "@context": "http://www.schema.org",
                      "@type": "LocalBusiness",
                      "name": "Innovation Brindes",
                      "sameAs": [
                        "https://www.youtube.com/c/InnovationbrindesBr"
                        , "https://www.linkedin.com/company/innovationbrindes/"
                        , "https://www.instagram.com/innovationbrindes/"
                        , "https://pt-br.facebook.com/innovationbrindessp/"
                        , "https://br.pinterest.com/innovationbrindes/"
                      ], 
                      "url": "https://www.innovationbrindes.com.br/",
                      "image": "https://innovationbrindes.com.br/images/menu/logo-topo.png",
                      "logo": "https://innovationbrindes.com.br/images/menu/logo-topo.png",
                      "description": "A Innovation Brindes é uma das maiores empresas de produção de brindes corporativos no mercado, \natualmente com mais de 5 mil clientes satisfeitos, temos a visão de crescer e melhorar ainda mais!",
                      "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "R. VILA DE AROUCA, 310 - SÍTIO BARROCADA",
                        "addressLocality": "SAO PAULO",
                        "addressRegion": "SAO PAULO",
                        "postalCode": "02285-020",
                        "addressCountry": "Brasil"
                      },
                      "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": "-23.4169686",
                        "longitude": "-46.5782601"
                      },
                      "hasMap": "https://www.google.com/maps/place/R.+Vila+de+Arouca,+310+-+S%C3%ADtio+Barrocada,+S%C3%A3o+Paulo+-+SP,+02285-020/@-23.4169606,-46.5782705,16.97z/data=!4m5!3m4!1s0x94cef409d964eb1b:0x34c79619d7f56914!8m2!3d-23.4169686!4d-46.5782601",
                      "openingHours": "Mo, Tu, We, Th, Fr 08:30-18:00",
                      "contactPoint": {
                        "@type": "ContactPoint",
                        "contactType": "sales",
                        "telephone": "+55 (11) 2649-6030"
                      },
                      "priceRange": "sob encomenda",
                      "telephone": "+55 (11) 2649-6030"
                    }`,
        }}
      ></script>
    </Box>
  )
})

function BodyModalCookies() {
  return (
    <FooterContainerBodyModal>
      <FooterContainerBodyModalHeader>
        <h1 style={{ marginTop: "0px" }}>
          <strong>Política de Cookies</strong>
        </h1>
        <p>
          Os cookies usados no site são categorizados e você pode ler sobre cada categoria e permitir ou negar parte ou
          a totalidade. Quando as categorias permitidas anteriormente são desativadas, todos os cookies atribuídos a
          essa categoria serão excluídos do seu navegador. Além disso, você pode ver uma lista de cookies atribuídos a
          cada categoria e informações detalhadas na declaração de cookies.
        </p>
        <h1>
          <strong>Cookies necessarios</strong>
        </h1>
        <p>
          Alguns cookies são necessários para fornecer a funcionalidade principal. O site não funcionará corretamente
          sem esses cookies e eles estão ativados por padrão e não podem ser desativados.
        </p>
      </FooterContainerBodyModalHeader>
      <FooterContainerBodyModalTable>
        <table>
          <tr>
            <th>Nome</th>
            <th>Nome do anfitrião</th>
            <th>Caminho</th>
            <th>Termo</th>
          </tr>
          <tr>
            <td>cookie... (nome)</td>
            <td>innovationbrindes.com.br</td>
            <td>/</td>
            <td>365 dias</td>
          </tr>
        </table>
        <p>
          Usado por Innovation Brindes para armazenar se o visitante consentiu ou negou o uso de cookies nesse site.
        </p>
        <table>
          <tr>
            <td>XXXX (nome)</td>
            <td>(host)</td>
            <td>/</td>
            <td>Sessão</td>
            <td>Terceiros</td>
          </tr>
        </table>
        <table style={{ position: "relative", top: "-2px" }}>
          <tr>
            <td>
              General purpose platform session cookie, used by sites with JavaServer Pages (JSP).
              <br />
              The cookie is usually used to maintain an anonymous user session by the server.
            </td>
          </tr>
        </table>
      </FooterContainerBodyModalTable>
      <FooterContainerBodyModalHeader style={{ height: "110px" }}>
        <h1 style={{ marginTop: "0px" }}>
          <strong>Preferências</strong>
        </h1>
        <p>
          Os cookies de preferência permitem que o site se lembre de informações para personalizar a aparência ou o
          comportamento do site para cada usuário. Isso pode incluir o armazenamento de moedas, regiões, idiomas ou
          temas de cor selecionados.
        </p>
      </FooterContainerBodyModalHeader>
      <FooterContainerBodyModalTable>
        <table>
          <tr>
            <th>Nome</th>
            <th>Nome do anfitrião</th>
            <th>Caminho</th>
            <th>Termo</th>
          </tr>
          <tr>
            <td>crisp-client%2Fsession%2F-KDQfDU61uePvos5V5RK</td>
            <td>innovationbrindes.com.br</td>
            <td>/</td>
            <td>182 dias, 12 horas</td>
          </tr>
        </table>
        <p>
          Este cookie é definido por xxxxx um serviço de mensagens. Eles são necessários para restaurar a sessão de
          bate-papo e as mensagens de um usuário do xxxxx ao navegar entre as páginas do site e / ou voltar ao site
          alguns dias depois. Este cookie não é usado para fins de rastreamento em sites.
        </p>
        <table>
          <tr>
            <th>NID</th>
            <th>.google.com</th>
            <th>/</th>
            <th>183 dias</th>
            <th>Terceiros</th>
          </tr>
        </table>
        <p>
          O navegador envia esse cookie com requisições para o Google. O cookie NID contém um único ID Google usado para
          lembrar suas preferências, como a sua linguagem preferida, se você veio por meio de uma busca Google, entre
          outras informações.
        </p>
        <table>
          <tr>
            <th>(nome ID)</th>
            <th>app.innovationbrindes.com.br</th>
            <th>/</th>
            <th>364 dias</th>
          </tr>
        </table>
        <p>
          Este cookie está ligado à plataforma de desenvolvimento web do XXXXX para XXXX. Ele é projetado para ajudar a
          proteger um site contra um certo tipo de ataque de software em formulários da web.
        </p>
        <table>
          <tr>
            <th>sib_cuid</th>
            <th>app.innovationbrindes.com.br</th>
            <th>/</th>
            <th>181 dias, 9 horas</th>
          </tr>
        </table>
        <p>
          Cookie usado para coletar informações sobre a navegação e as preferências dos usuários do site. É usado para
          direcionar um possível boletim informativo com base nessas informações.
        </p>
      </FooterContainerBodyModalTable>
      <FooterContainerBodyModalHeader style={{ height: "80px" }}>
        <h1 style={{ marginTop: "0px" }}>
          <strong>Cookies Analíticos</strong>
        </h1>
        <p>Os cookies analíticos nos ajudam a melhorar nosso site, coletando e relatando informações sobre seu uso.</p>
      </FooterContainerBodyModalHeader>
      <FooterContainerBodyModalTable>
        <table>
          <tr>
            <th>Nome</th>
            <th>Nome do anfitrião</th>
            <th>Caminho</th>
            <th>Termo</th>
          </tr>
          <tr>
            <td>xxxx</td>
            <td>innovationbrindes.com.br</td>
            <td>/</td>
            <td>365 dias</td>
          </tr>
        </table>
        <p>
          Cookie Hotjar. Esse cookie é definido quando o cliente chega pela primeira vez em uma página com o script
          Hotjar. Ele é usado para persistir o ID de usuário aleatório, exclusivo para esse site no navegador. Isso
          garante que o comportamento nas visitas subseqüentes ao mesmo site seja atribuído ao mesmo ID do usuário. O
          Hotjar é uma ferramenta de análise usada pelo nosso time de design para melhorar a experiência de uso.
        </p>
        <table>
          <tr>
            <td>_hjIncludedInPageviewSample</td>
            <td>innovationbrindes.com.br</td>
            <td>/</td>
            <td>1 hora</td>
          </tr>
        </table>
        <p>Este cookie está sendo definido pelo Hotjar para fins de desempenho e análise.</p>

        <table>
          <tr>
            <td>_ga</td>
            <td>innovationbrindes.com.br</td>
            <td>/</td>
            <td>730 dia</td>
          </tr>
        </table>
        <p>
          Registra um ID exclusivo para um visitante do site que rastreia como o visitante usa o site. Os dados são
          usados para estatísticas.
        </p>

        <table>
          <tr>
            <td>_gid</td>
            <td>innovationbrindes.com.br</td>
            <td>/</td>
            <td>1 dia</td>
          </tr>
        </table>
        <p>
          Registra um ID exclusivo para um visitante do site que rastreia como o visitante usa o site. Os dados são
          usados para estatísticas.
        </p>

        <table>
          <tr>
            <td>amplitude_id_53c6c686a302c7f6d05c7806d6fb2f2</td>
            <td>innovationbrindes.com.br</td>
            <td>/</td>
            <td>3650 dias</td>
          </tr>
        </table>
        <p>
          Registra um ID exclusivo na ferramenta Amplitude para um visitante do site que rastreia como o visitante usa o
          site. Os dados são usados para estatísticas e aperfeiçoamento de produto.
        </p>

        <table>
          <tr>
            <td>_hjTLDTest</td>
            <td>innovationbrindes.com.br</td>
            <td>/</td>
            <td>Sessão</td>
          </tr>
        </table>
        <p>
          Quando o script Hotjar é executado, tentamos determinar o caminho de cookie mais genérico que devemos usar, em
          vez do nome do host da página. Isso é feito para que os cookies possam ser compartilhados entre subdomínios
          (quando aplicável). Para determinar isso, tentamos armazenar o cookie _hjTLDTest para diferentes alternativas
          de substring de URL até que ele falhe. Após esta verificação, o cookie é removido.
        </p>

        <table>
          <tr>
            <td>_gat</td>
            <td>innovationbrindes.com.br</td>
            <td>/</td>
            <td>1 hora</td>
          </tr>
        </table>
        <p>Definido pelo Google Analytics para controlar a taxa de solicitações.</p>

        <table>
          <tr>
            <td>_gat_gtag_UA_78594611_1</td>
            <td>innovationbrindes.com.br</td>
            <td>/</td>
            <td>1 hora</td>
          </tr>
        </table>
        <p>Cookie usado pelo Google Analytics.</p>

        <table>
          <tr>
            <td>_hjFtSeen</td>
            <td>innovationbrindes.com.br</td>
            <td>/</td>
            <td>1 hora</td>
          </tr>
        </table>
        <p>
          This cookie is set by Hotjar to identify a new user’s first session. It stores a true/false value, indicating
          whether this was the first time Hotjar saw this user. It is used by Recording filters to identify new user
          sessions.
        </p>

        <table>
          <tr>
            <td>_hjudedInPageviewSample</td>
            <td>app.innovationbrindes.com.br</td>
            <td>/</td>
            <td>1 hora</td>
          </tr>
        </table>
        <p>Este cookie está sendo definido pelo Hotjar para fins de desempenho e análise.</p>
      </FooterContainerBodyModalTable>
      <FooterContainerBodyModalHeader style={{ height: "160px" }}>
        <h1 style={{ marginTop: "0px" }}>
          <strong>Cookies de Marketing</strong>
        </h1>
        <p>
          Estes cookies permitem que você compartilhe nosso conteúdo nas suas redes sociais. Também podem ser usados
          para rastrear visitantes em sites para permitir que os editores exibam anúncios com base em seu perfil de
          usuário e preferências. Além disso, também guardam dados sobre quantos visitantes viram ou clicaram nos nossos
          anúncios, a fim de otimizar as campanhas publicitárias.
        </p>
      </FooterContainerBodyModalHeader>
      <FooterContainerBodyModalTable>
        <table>
          <tr>
            <th>Nome</th>
            <th>Nome do anfitrião</th>
            <th>Caminho</th>
            <th>Termo</th>
          </tr>
          <tr>
            <td>_fbp</td>
            <td>innovationbrindes.com.br</td>
            <td>/</td>
            <td>90 dias</td>
          </tr>
        </table>
        <p>Este cookie é usado pelo Facebook para fins de publicidade e acompanhamento de conversões.</p>
        <table>
          <tr>
            <td>fr</td>
            <td>.facebook.com</td>
            <td>/</td>
            <td>90 dias</td>
            <td>Terceiros</td>
          </tr>
        </table>
        <p>
          Cookie definido pelo Facebook. As informações coletadas são usadas em seus produtos de publicidade, por
          exemplo, lances em tempo real de anunciantes de terceiros.
        </p>
        <table>
          <tr>
            <td>IDE</td>
            <td>.doubleclick.net</td>
            <td>/</td>
            <td>390 dias</td>
            <td>Terceiros</td>
          </tr>
        </table>
        <p>Cookie do Double Click (Google), que nos ajuda a analisar e otimizar nossas campanhas de publicidade.</p>
        <table>
          <tr>
            <td>uuid</td>
            <td>sibautomation.com</td>
            <td>/</td>
            <td>181 dias, 9 horas</td>
            <td>Terceiros</td>
          </tr>
        </table>
        <p>
          MediaMath usa esse cookie para identificar um visitante único. É usado para otimizar a relevância de anúncios
          coletando dados de múltiplos sites. Não coleta informação razoavelmente suficiente para identificar uma
          pessoa.
        </p>
        <table>
          <tr>
            <td>test_cookie</td>
            <td>.doubleclick.net</td>
            <td>/</td>
            <td>1 hora</td>
            <td>Terceiros</td>
          </tr>
        </table>
        <p>Usado para verificar se o navegador do visitante suporta cookies.</p>
      </FooterContainerBodyModalTable>
      <FooterContainerBodyModalHeader style={{ height: "20px" }}></FooterContainerBodyModalHeader>
    </FooterContainerBodyModal>
  )
}

export default Footer
