import Link from "next/link"
import { ColorInputComponent } from "../../ContainerConfig/ColorInput/styles"
import * as S from "./styles"
import { formatPrice } from "../../../../utils/formatPrice"

export function CardRelatedProducts({ item }) {
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

  return (
    <Link href={`/lojahonda/${item.url_produto}`} passHref>
      <a target="_blank">
        <S.CardContainer>
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
