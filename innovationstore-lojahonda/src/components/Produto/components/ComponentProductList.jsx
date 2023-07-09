import { Center, Spinner } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { GridMaisOfertas } from '../styles';
import { GridProductDefault } from '../../GridProductsDefault';


export default function ComponentProductList(props) {
  const [mobileScreen, setMobileScreen] = useState(false);
  const [gridTelaProduto, setgridTelaProduto] = useState();


  useEffect(() => {

    setgridTelaProduto(true)

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      setMobileScreen(true);
    } else {
      setMobileScreen(false);
    }
  }, []);

  return (
    <>
      <Center w='100%' bg='white' >
        {props.state.dados_produtos_lista.length == 0 ? (
          <Spinner
            mt='10px'
            mb='10px'
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='#FF4F00'
            size='xl'
          />
        ) : (
          <GridMaisOfertas>
            {props.state.dados_produtos_lista.map((data, index) => {
              if (index < 8) {
                if (mobileScreen) {
                  if (index < 4) {
                    return <GridProductDefault
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
                      state={props.state}
                      selo_prod={data.selo_prod}
                      gridTelaProduto={gridTelaProduto}
                    />
                  }
                } else {
                  return <GridProductDefault
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
                    state={props.state}
                    selo_prod={data.selo_prod}
                    gridTelaProduto={gridTelaProduto}
                  />
                }

              }
            }
            )}
          </GridMaisOfertas>
        )
        }
      </Center>
    </>
  )
}