import { CardRelatedProducts } from "./CardRelatedProducts"
import * as S from "./styles"

export function RelatedProducts({ product }) {
  return (
    <S.RelatedProductsContainer>
      <S.RelatedProductsContentInside>
        <img src="https://imgproductioncrm.s3.us-east-2.amazonaws.com/confira-tambem.png" alt="Confira também" />
        <S.RelatedProductsContent>
          {product.relatedProducts?.map((item, index) => (
            <CardRelatedProducts key={index} item={item} />
          ))}
        </S.RelatedProductsContent>
        <S.ContainerTextSeo dangerouslySetInnerHTML={{ __html: product?.texto_seo }} />
      </S.RelatedProductsContentInside>
    </S.RelatedProductsContainer>
  )
}
