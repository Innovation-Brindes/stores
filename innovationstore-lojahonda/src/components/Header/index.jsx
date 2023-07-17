import React, { useState, useEffect } from "react"

import MenuHeaderMobile from "./MenuHeaderMobile"
import Head from "next/head"
import Link from "next/link"
import { LinksHeader } from "./LinksHeader"
import { useCart } from "../../contexts/useCart"
import { FreteGratis } from "../FreteGratis"
import { Links } from "./Links"
import {
  ButtonGroup,
  Container,
  Divider,
  IconContent,
  IconGroup,
  InfosContent,
  LinkGroup,
  MenuButton,
  MenuContent,
  MenuOpen,
  SpanLink,
} from "./headerStyles"
import Image from "next/image"
import { IoIosArrowDown } from "react-icons/io"
import { InputSearch } from "./InputSearch"
import { FaPhoneAlt, FaShoppingCart, FaUser } from "react-icons/fa"
import { MobileControl } from "./styled"
import { useAuth } from "../../contexts/AuthProvider"
import { BiLogIn, BiLogInCircle, BiLogOutCircle } from "react-icons/bi"
import { UserComponentLogin } from "./UserComponentLogin/index.jsx"

export default function HeaderComponent({ segmentos, subcategorias }) {
  const [display_init, setDisplayInit] = useState(0)
  const { cart } = useCart()
  const [openMenu, setOpenMenu] = useState({
    segmentos: false,
    subcategorias: false,
  })

  const {
    state: { user, token, isAuthenticated },
    logout,
  } = useAuth()

  useEffect(() => {
    const timer = setTimeout(function () {
      setDisplayInit(1)
      clearTimeout(timer)
    }, 500)
  }, [])

  function handleOpenMenu(label) {
    setOpenMenu({
      ...openMenu,
      segmentos: label === "segmentos" ? !openMenu.segmentos : false,
      subcategorias: label === "subcategorias" ? !openMenu.subcategorias : false,
    })
  }

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{                  
                                    "@context": "http://schema.org",
                                    "@type": "BreadcrumbList",
                                    "itemListElement": [
                                        ${subcategorias.map((data, idx) => {
                                          return JSON.stringify({
                                            "@type": "ListItem",
                                            position: idx + 1,
                                            item: {
                                              "@id":
                                                "https://innovationbrindes.com.br/" +
                                                data.url_site +
                                                "/" +
                                                data.cod_grupo,
                                              name: data.name,
                                            },
                                          })
                                        })}
                                    ]
                                }`,
          }}
        ></script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
                                "@context": "https://schema.org",
                                "@type": "WebSite",
                                "name": "Innovation Brindes",
                                "url": "https://www.innovationbrindes.com.br/",
                                "potentialAction": {
                                    "@type": "SearchAction",
                                    "target": "https://innovationbrindes.com.br/buscar/{search_term}",
                                    "query-input": "required name=search_term"
                                }
                            }`,
          }}
        ></script>
      </Head>
      <LinksHeader />
      <MobileControl>
        <div className="flex items-center gap-2">
          <MenuHeaderMobile state={{ subcategorias: subcategorias }} retiraAcentos={retira_acentos} />
          <img
            src="https://imgproductioncrm.s3.us-east-2.amazonaws.com/logo-honda.png"
            className="cursor-pointer w-32"
          />
          {/* <Image
            src="https://imgproductioncrm.s3.us-east-2.amazonaws.com/logo%20mobile-01.svg"
            width={38}
            height={38}
            priority
            className="cursor-pointer"
          /> */}
        </div>
        <InfosContent>
          {/* <IconGroup>
            <IconContent border>
              <FaPhoneAlt />
            </IconContent>
            <span>2649-6030</span>
          </IconGroup> */}
          <IconGroup
            css={{
              fontWeight: "bold",
            }}
          >
            <IconContent border>
              <FaUser />
            </IconContent>
            {!isAuthenticated && (
              <Link href={"/lojahonda/login"}>
                <span>Entrar</span>
              </Link>
            )}
            {isAuthenticated && (
              <>
                <UserComponentLogin user={user} logout={logout} />
              </>
            )}
          </IconGroup>
          <Divider />
          <IconGroup
            css={{
              fontWeight: "bold",
            }}
          >
            <IconContent border>
              <FaShoppingCart />
            </IconContent>
            <Link href="/lojahonda/carrinho">
              <span>{cart?.length} itens</span>
            </Link>
          </IconGroup>
        </InfosContent>
      </MobileControl>
      <div
        className={`${display_init === 0 ? "opacity-0" : "opacity-100"}
        transition-all duration-500 font-sans`}
      >
        <Container>
          <Link href="/lojahonda">
            <img src="https://imgproductioncrm.s3.us-east-2.amazonaws.com/logo-honda.png" className="cursor-pointer" />
          </Link>

          <MenuContent>
            <ButtonGroup
              onClick={() => {
                handleOpenMenu("subcategorias")
              }}
            >
              <MenuButton active={openMenu.subcategorias}>Brindes</MenuButton>
              <IoIosArrowDown
                color="#cc0000"
                className={`${openMenu.subcategorias ? "transform rotate-180" : ""} transition`}
              />

              <MenuOpen
                css={{
                  display: openMenu.subcategorias ? "flex" : "none",
                  width: "900px",
                  height: "500px",
                }}
                onMouseLeave={() => {
                  setOpenMenu({
                    ...openMenu,
                    subcategorias: false,
                  })
                }}
              >
                <div className="header">
                  <h1>Catálogo de brindes</h1>
                </div>
                <div className="content">
                  {openMenu.subcategorias &&
                    subcategorias.map((data, index) => (
                      <Links key={index} data={data} pathname={"/lojahonda/categoria/[slug]" + "/" + "[id]"} />
                    ))}
                </div>
              </MenuOpen>
            </ButtonGroup>

            <Link
              href={{
                pathname: `${"/lojahonda/segmento/[slug]" + "/" + "[id]"}`,
                query: { slug: "novidades", id: 6 },
              }}
            >
              <LinkGroup>
                <SpanLink
                  css={{
                    background: "#CFCFCF",
                    color: "#cc0000",
                  }}
                >
                  Confira
                </SpanLink>
                <MenuButton>Lançamentos</MenuButton>
              </LinkGroup>
            </Link>
            <Link href="/lojahonda/ultra-rapido">
              <LinkGroup>
                <SpanLink
                  css={{
                    background: "#CFCFCF",
                    color: "#cc0000",
                  }}
                >
                  Exclusivo
                </SpanLink>
                <MenuButton>Pronto em 48 horas</MenuButton>
              </LinkGroup>
            </Link>
          </MenuContent>
          <InputSearch />
          <InfosContent>
            <IconGroup>
              <IconContent border>
                <FaPhoneAlt />
              </IconContent>
              <div className="group-whats">
                <SpanLink
                  css={{
                    background: "#cfcfcf",
                    color: "#cc0000!important",
                  }}
                >
                  Central de atendimento
                </SpanLink>
                <a
                  href="https://api.whatsapp.com/send?phone=551126496030&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20da%20Innovation%20Brindes"
                  target="_blank"
                  rel="noreferrer"
                >
                  11 2649-6030
                </a>
              </div>
            </IconGroup>
            <Divider />
            <IconGroup
              css={{
                fontWeight: "bold",
              }}
            >
              <IconContent border>
                <FaShoppingCart />
              </IconContent>
              <Link href="/lojahonda/carrinho">
                <span>{cart?.length} itens</span>
              </Link>
            </IconGroup>
            {/* <Divider /> */}
            {/* <IconGroup
              css={{
                fontWeight: "bold",
              }}
            >
              <IconContent border>
                <FaUser />
              </IconContent>
              {!isAuthenticated && (
                <Link href={"/lojahonda/login"}>
                  <span>Entrar</span>
                </Link>
              )}
              {isAuthenticated && (
                <>
                  <UserComponentLogin user={user} logout={logout} />
                </>
              )}
            </IconGroup> */}
          </InfosContent>
        </Container>
      </div>
      <FreteGratis />
    </>
  )
}

function retira_acentos(str) {
  var com_acento = "ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝŔÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿŕ"
  var sem_acento = "AAAAAAACEEEEIIIIDNOOOOOOUUUUYRsBaaaaaaaceeeeiiiionoooooouuuuybyr"

  var novastr = ""
  for (var i = 0; i < str.length; i++) {
    var troca = false
    for (var a = 0; a < com_acento.length; a++) {
      if (str.substr(i, 1) == com_acento.substr(a, 1)) {
        novastr += sem_acento.substr(a, 1)
        troca = true
        break
      }
    }
    if (troca == false) {
      novastr += str.substr(i, 1)
    }
  }
  return novastr
}
