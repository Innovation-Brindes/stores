import Link from "next/link"
import { ColorInputComponent } from "../../ContainerConfig/ColorInput/styles"
import * as S from "./styles"
import { formatPrice } from "../../../../utils/formatPrice"
import { BiTime } from "react-icons/bi"
import { useEffect } from "react"
import { useState } from "react"
import { RiCloseCircleFill } from "react-icons/ri"
import { PiSpeakerHighBold } from "react-icons/pi"

export function CardRelatedProducts({ item }) {
  const [tag, setTag] = useState(null)
  const maxLetterProduct = 75

  const productDescriptionSliced =
    item.caracteristicas.length > maxLetterProduct
      ? item.caracteristicas.slice(0, maxLetterProduct).concat("...")
      : item.caracteristicas

  const maxColorInput = 4

  const sliceColorInput = item.list_cores.slice(0, maxColorInput)

  const restLengthColorInput = item.list_cores.length - maxColorInput

  function padStatCodprod(codprod) {
    const variables = {
      1: "000",
      2: "00",
      3: "0",
      4: "",
    }

    return String(variables[codprod.length] + codprod)
  }

  const isUltraRapido = item.ultrarapido === "S"
  const isIndisponivel = parseInt(item.estoque) === 0
  const isNovidade = item.selo === "S" || item.segmento === "" || item.segmento === null

  function getTagColor(tag) {
    const objectColorsTag = {
      isUltraRapido: {
        backgroundColor: "#CC0000",
        color: "#fff",
        text: "Pronto em 48 hrs!",
        icon: BiTime,
      },
      isIndisponivel: {
        backgroundColor: "#414042",
        color: "#FFF",
        text: "Indisponível",
        icon: RiCloseCircleFill,
      },
      isNovidade: {
        backgroundColor: "#F5F5F5",
        color: "#CC0000",
        text: "Novidade",
        icon: PiSpeakerHighBold,
      },
    }

    return objectColorsTag[tag]
  }

  useEffect(() => {
    const tagReturned = getTagColor(
      isUltraRapido ? "isUltraRapido" : isIndisponivel ? "isIndisponivel" : !isNovidade ? "isNovidade" : null,
    )

    setTag(tagReturned)
  }, [isUltraRapido, isIndisponivel, isNovidade])

  return (
    <Link href={`/${item.url_produto}`} passHref>
      <a target="_blank">
        <S.CardContainer>
          <S.Tag backgroundColor={tag?.backgroundColor} color={tag?.color}>
            {tag?.text}
            {tag?.icon && <tag.icon size={20} color={tag?.color} />}
          </S.Tag>
          <S.CardImageContainer>
            <img src={item.imagem_home_store} alt="Adaptador Universal Tomada" />
          </S.CardImageContainer>
          <S.CardContent>
            <h1>{item.nome}</h1>
            <h2>- {padStatCodprod(String(item.codigo_produto))} - </h2>
            <p>{productDescriptionSliced}</p>
          </S.CardContent>

          <S.FooterCard>
            <div className="colors">
              <span>Cores:</span>
              {sliceColorInput?.map((color, index) => (
                <ColorInputComponent backgroundColor={color.hex} />
              ))}
              {restLengthColorInput > 0 && <strong>+{restLengthColorInput}</strong>}
            </div>

            <div className="price">
              <span>A partir de</span>
              <div className="group">
                <strong>{formatPrice(item.preco_home)}</strong>
                <span className="unity">* a unidade</span>
              </div>
            </div>
          </S.FooterCard>
        </S.CardContainer>
      </a>
    </Link>
  )
}
