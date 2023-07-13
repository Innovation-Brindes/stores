import React from 'react'
import { PaginationUltraRapido, SelectUltraRapido } from '../../styles';
import { ProdutosLoading, ProdutosLoadingImage, UltraRapidoContainerGridProdutos, UltraRapidoContainerGridProdutosFilter, UltraRapidoContent } from './styles';
import { Box, Center } from '@chakra-ui/react';
import { GridProduts, GridProdutsLoading, NaoEncontrouProduto, NaoEncontrouProdutoBody } from '../../../Buscar/styles';
import { GridProductDefault } from '../../../GridProductsDefault';

const loading = "/images/loading.gif";
const lupa = "/images/menu/lupa-busca.png";

const Index = (props) => {
  
  return (
    <UltraRapidoContainerGridProdutos>
      {/* <UltraRapidoContainerGridProdutosFilter>

        <SelectUltraRapido id="select-order" onClick={(e) => props.handleOrderBy(e)}>
          <option>Ordenar produtos</option>
          <option>Menor Valor</option>
          <option>Maior Valor</option>
        </SelectUltraRapido>

      </UltraRapidoContainerGridProdutosFilter> */}

      <UltraRapidoContent>
        {props.state.dados.length == 0 && props.state.loadingProd == "none" ?
          <NaoEncontrouProduto>
            <NaoEncontrouProdutoBody>
              <h1><img alt='lupa' src={lupa} /> Busca sem resultado :(</h1>
              <h2>Nenhum produto correspondente à sua pesquisa</h2>
              <p>Faça uma <strong>nova pesquisa</strong> ou fale com um de <strong>nossos consultores</strong></p>
              <button onClick={() => props.footerChatRef.current?.openChat()}>Falar com consultor</button>
            </NaoEncontrouProdutoBody>
          </NaoEncontrouProduto>
          :
          <GridProduts style={props.state.loadingProd == 'block' ? { height: '500px' } : {}} >
            <GridProdutsLoading style={{ display: props.state.loadingProd }}>
              <Center>
                <img alt="loading" src={loading} />
              </Center>
            </GridProdutsLoading>

            {props.state.dados.map((data) => {
              return (
                <GridProductDefault
                  prod_nome={data.prod_nome}
                  codigo_prod={data.prod_cod}
                  url_prod={data.url_prod}
                  img_prod={"/images/produtos" + data.img_prod}
                  descricao={data.descricao}
                  caracteristicas={data.caracteristicas}
                  valor_home={data.valor_home}
                  selo={data.selo}
                  segmento={data.segmento}
                  ultrarapido={data.ultrarapido}
                  url_site={props.state.url_site}
                  ad_pdv={data.pdv}
                  cores={data.cores}
                  estoque={data.estoque}
                  state={data.state}
                  selo_prod={data.selo_prod}
                />
              );

            })}
          </GridProduts>
        }
      </UltraRapidoContent>

      <UltraRapidoContainerGridProdutosFilter>
        <PaginationUltraRapido>
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" data={props.state.paginacao == 1 ? 1 : props.state.paginacao - 1} onClick={(e) => props.setPagination(e)}>
                  {"<"}
                </a>
              </li>

              {props.state.total_paginacao.map((item, idx) => {
                if (props.state.mobileView) {
                  if (props.state.paginacao >= 3) {
                    if (((idx + 1) >= props.state.paginacao - 2) && ((idx + 1) <= props.state.paginacao + 2)) {
                      return (
                        <li className={props.state.paginacao == item ? "page-item-active" : "page-item"}>
                          <a data={item} onClick={(e) => props.setPagination(e)} className="page-link">
                            {item}
                          </a>
                        </li>
                      );
                    }
                  } else {
                    if (idx <= 4) {
                      return (
                        <li className={props.state.paginacao == item ? "page-item-active" : "page-item"}>
                          <a data={item} onClick={(e) => props.setPagination(e)} className="page-link">
                            {item}
                          </a>
                        </li>
                      );
                    }
                  }
                } else {

                  if (props.state.paginacao >= 10) {
                    if (((idx + 1) >= props.state.paginacao - 5) && ((idx + 1) <= props.state.paginacao + 5)) {
                      return (
                        <li className={props.state.paginacao == item ? "page-item-active" : "page-item"}>
                          <a data={item} onClick={(e) => props.setPagination(e)} className="page-link">
                            {item}
                          </a>
                        </li>
                      );
                    }
                  } else {
                    if (idx <= 11) {
                      return (
                        <li className={props.state.paginacao == item ? "page-item-active" : "page-item"}>
                          <a data={item} onClick={(e) => props.setPagination(e)} className="page-link">
                            {item}
                          </a>
                        </li>
                      );
                    }
                  }
                }

              })}

              <li className="page-item">
                <a className="page-link" data={props.state.paginacao == props.state.total_paginacao.length ? props.state.paginacao : props.state.paginacao + 1} onClick={(e) => props.setPagination(e)}>
                  {">"}
                </a>
              </li>
            </ul>
          </nav>
        </PaginationUltraRapido>
      </UltraRapidoContainerGridProdutosFilter>

    </UltraRapidoContainerGridProdutos>
  )
}

export default Index
