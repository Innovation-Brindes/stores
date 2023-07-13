import { useRouter } from "next/router"
import { useProductProvider } from "../../../../contexts/ProductProvider"
import { useCart } from "../../../../contexts/useCart"
import { formatPrice } from "../../../../utils/formatPrice"
import { ComprouGanhou } from "../../../Produto/components/ComprouGanhou"
import { AddresClient } from "../../AddressClient"
import { Button } from "../../components/Button"
import { PaymentMethods } from "../PaymentMethods"
import * as S from "../styles"
import { setFirstLetterUpperCase } from "../../../../utils/setFirstLetterUpperCase"

export function Resumo({ product }) {
  const { state, price, nextStep, cubagens } = useProductProvider()

  const { addToCart } = useCart()

  const router = useRouter()

  const unitPriceFormatted = parseFloat(price?.valor_unitario).toFixed(2).replace(".", ",")
  const totalPriceFormatted = formatPrice(price?.valor_total)

  function handleAddProductCart() {
    if (!cubagens) return

    const { QtdCaixa, Altura, Largura, Comprimento, PesoCaixa, CubagemTotal, calc_kangu } = cubagens[0]

    const cubagem = {
      altura: { valor: Altura },
      largura: { valor: Largura },
      comprimento: { valor: Comprimento },
      peso: { valor: PesoCaixa },
      qtdcaixa: { valor: QtdCaixa },
      calc_kangu: calc_kangu,
      cubagemTotal: { valor: CubagemTotal },
    }

    const corProduto = {
      cod: state.codColor.codigo_cor,
      desc: state.codColor.descricao_cor,
    }

    const cores = product.cores.map((item) => {
      return {
        cod: item.codigo_cor,
        text: item.descricao_cor,
        rgb_cores: item.rgb_cores,
      }
    })

    const numeroMaxImpressoes = Array.from(Array(product.batidas.length).keys()).map((item) => String(item + 1))

    const tiposGravacao = product.personalizacoes.map((item) => {
      return {
        nome: item.descricao_impressao,
        cod: item.codigo_impressao,
      }
    })

    const produto = {
      id_hash: product.codigo_produto,
      codprod: product.codigo_produto,
      imagem: product.imagem_produto,
      nome_prod: product.nome,
      referencia: product.referencia,
      ad_embalagem: product.ad_embalagem,
      cubagem_embalagem: [null, null, null, null],
      batidas: state.batidas,
      cor_produto: corProduto,
      cubagem: cubagem,
      quantidade: state.productQuantity,
      prazo: state.entrega.prazo,
      valor_unitario: parseFloat(price.valor_unitario),
      valor_total: parseFloat(price.valor_total),
      prazo_entrega: state.entrega.prazo,
      tipo_gravacao: {
        cod: state.codImp.codigo_impressao,
        desc: state.codImp.descricao_impressao,
      },
      numero_max_impressoes: numeroMaxImpressoes,
      list_cores: cores,
      url_img: product.imagens_produto[0].url,
      allInfos: product,
      embalagem: false,
      codigo_impressao: state.codImp.codigo_impressao,
      prazo_producao: product.prazos,
      tipos_gravacao: tiposGravacao,
    }

    addToCart(produto)
    router.push("/casadoconstrutor/carrinho")
  }

  return (
    <>
      <S.Heading>Resumo</S.Heading>
      <S.ProductInfo>
        <div>
          <span>Cor do produto:</span> <strong>{setFirstLetterUpperCase(state?.codColor?.descricao_cor)}</strong>
        </div>
        <div>
          <span>Personalização:</span> <strong>{state?.codImp?.descricao_impressao}</strong>
        </div>
        <div>
          <span>Número da impressão:</span> <strong>{state?.batidas}</strong>
        </div>
        <div>
          <span>Saída da mercadoria:</span>{" "}
          <strong>
            {state?.entrega?.data_producao} | {state?.entrega?.nome_data}
          </strong>
        </div>
        <div>
          <span>Quantidade:</span> <strong>{state?.productQuantity}</strong>
        </div>
      </S.ProductInfo>
      <AddresClient />
      <S.ProductValueContent>
        <div className="priceProduct">
          <span>R$</span>
          <strong>{unitPriceFormatted}</strong>
          <span>unidade</span>
        </div>
      </S.ProductValueContent>
      <S.ContainerDivider>
        <S.Divider />
        <S.ProductTotalPrice>
          <span>Total</span>
          <strong>{totalPriceFormatted}</strong>
        </S.ProductTotalPrice>
        <S.Divider />
      </S.ContainerDivider>

      <PaymentMethods totalPedido={parseFloat(price?.valor_total)} />
      <ComprouGanhou valor={parseFloat(price?.valor_total)} />

      <S.ContainerActions>
        <Button.Root
          label="Adicionar ao carrinho"
          background="#FF4F00"
          color="#fff"
          onClick={() => handleAddProductCart()}
        />
        <Button.Root label="baixar orçamento" border="#FF4F00" color="#FF4F00" onClick={nextStep} />
      </S.ContainerActions>
    </>
  )
}
