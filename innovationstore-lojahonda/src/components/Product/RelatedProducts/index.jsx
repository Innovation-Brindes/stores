import { CardRelatedProducts } from "./CardRelatedProducts"
import * as S from "./styles"

export function RelatedProducts({ product }) {
  return (
    <S.RelatedProductsContainer>
      <S.RelatedProductsContentInside>
        <img src="https://imgproductioncrm.s3.us-east-2.amazonaws.com/tagsconfira-tambem.png" alt="Confira também" />
        <S.RelatedProductsContent>
          {product.relatedProducts?.map((item, index) => (
            <CardRelatedProducts key={index} item={item} />
          ))}
        </S.RelatedProductsContent>
      </S.RelatedProductsContentInside>
    </S.RelatedProductsContainer>
  )
}
