import { Box, Flex, Image, Link, Text, useMediaQuery } from "@chakra-ui/react";
import * as S from "../styles";
import NextLink from "next/link";
import { ButtonSave } from "../Button";
import { useEffect } from "react";

export function List({
  dados_layout,
  mobileView,
  isChecked,
  idTabela,
  enviarDesc,
  enviarImagens,
  isSubmitting,
  progress,
  messageProgress,
  handleArrayIDTabela,
  handleIdButtonEditar,
  image,
  setIsChecked,
  index,
  setIndex,
  removeIdTabela,
  deleteNameFile,
  toast,
}) {
  const [isMaxWidth800] = useMediaQuery("(max-width: 800px)");
  const [isMaxWidth1400] = useMediaQuery("(max-width: 1400px)");

  return (
    dados_layout &&
    dados_layout.map((data, idx) => {
      return (
        <S.FlexProdutos
          key={data.codigo_produto}
          isChecked={isChecked}
          idx={idx}
        >
          <Flex
            mb={mobileView ? "15px" : ""}
            alignItems="center"
            w={isMaxWidth1400 ? "310px" : "370px"}
            h={mobileView ? "100px" : "150px"}
            gap={10}
          >
            <NextLink target="_blank" href={`/` + data.url_seo} passHref>
              <Link
                boxShadow="none !important"
                target="_blank"
                textDecoration="none"
              >
                <Image
                  w="73px"
                  height="91px"
                  border="2px solid #cecece"
                  borderRadius="10px"
                  padding="3px"
                  src={`/images/produtos/${
                    data.codigo_produto.length < 4
                      ? "0" + data.codigo_produto
                      : data.codigo_produto
                  }/${data.url_img}-1-1.jpg`}
                />
              </Link>
            </NextLink>
            <Flex fontFamily="Arial" fontSize="14px" flexDir="column">
              <NextLink href={`/` + data.url_seo} passHref>
                <Link
                  boxShadow="none !important"
                  target="_blank"
                  position="relative"
                  _hover={{ color: "black" }}
                  cursor="pointer"
                  color="black"
                  textDecoration="none"
                  textTransform="uppercase"
                >
                  <strong>{data.nome_produto.substring(0, 20) + "..."}</strong>{" "}
                  <br />
                  <strong>Cód.: {data.codigo_produto}</strong>
                </Link>
              </NextLink>
              <Text margin="0">{data.qtd_batida} impressão</Text>
              <Text margin="0">{data.ds_impr}</Text>
              <Text margin="0" textTransform="lowercase">
                {data.ds_cor}
              </Text>
            </Flex>
          </Flex>
          <Flex
            w={isMaxWidth800 ? "100%" : "550px"}
            mb={mobileView ? "15px" : ""}
            h="150px"
          >
            <S.TextareaSolicitacaoLayout
              autoFocus={idx === 0 && true}
              variant="outline"
              colorScheme="orange"
              name="desc"
              placeholder="Ex.: Aplicar o logo centralizado na peça e no tamanho máximo de impressão"
              onBlur={(e) => enviarDesc(e)}
            />
          </Flex>
          <Flex
            flexDir="column"
            justifyContent="center"
            mx={mobileView ? "auto" : ""}
            w={isMaxWidth800 ? "100%" : "390px"}
            h={mobileView ? "100px" : "100px"}
          >
            {isChecked && idx === 0 && (
              <>
                <ButtonSave
                  toast={toast}
                  isChecked={isChecked}
                  index={index}
                  label={
                    idTabela.includes(data.codigo_produto)
                      ? "Editar"
                      : "Enviar arquivo"
                  }
                  enviarImagens={enviarImagens}
                  isLoading={index === idx ? isSubmitting : false}
                  isSubmitting={index === idx ? isSubmitting : false}
                  progress={index === idx ? progress : false}
                  messageProgress={
                    index === idx ? messageProgress : "Enviando arquivo..."
                  }
                  handleIdTabela={() => {
                    handleArrayIDTabela(data.codigo_produto);
                    handleIdButtonEditar(data.codigo_produto);
                  }}
                  image={image}
                  setIndex={() => {
                    setIndex(idx);
                  }}
                  changeBg={
                    idTabela.includes(data.codigo_produto) ? "#f85300" : "#fff"
                  }
                  changeColor={
                    idTabela.includes(data.codigo_produto) ? "#fff" : "#f85300"
                  }
                  containsPhoto={
                    idTabela.includes(data.codigo_produto) ? true : false
                  }
                  deleteIDTabela={() => {
                    removeIdTabela(data.codigo_produto);
                    deleteNameFile(data.codigo_produto);
                  }}
                  isDisabled={isSubmitting}
                  disableAllButtonNotIndex={
                    idTabela.filter((id) => id !== data.codigo_produto).length >
                      0 || isSubmitting
                      ? true
                      : false
                  }
                />
              </>
            )}
            {!isChecked && (
              <ButtonSave
                disableAllButtonNotIndex={
                  idTabela.filter((id) => id !== data.codigo_produto).length >
                    0 || isSubmitting
                    ? true
                    : false
                }
                isDisabled={isSubmitting}
                toast={toast}
                isChecked={isChecked}
                index={index}
                label={
                  idTabela.includes(data.codigo_produto)
                    ? "Editar arquivo"
                    : "Enviar arquivo"
                }
                enviarImagens={enviarImagens}
                isLoading={index === idx ? isSubmitting : false}
                isSubmitting={index === idx ? isSubmitting : false}
                progress={index === idx ? progress : false}
                messageProgress={messageProgress}
                handleIdTabela={() => {
                  handleArrayIDTabela(data.codigo_produto);
                  handleIdButtonEditar(data.codigo_produto);
                }}
                image={image}
                setIndex={() => {
                  setIndex(idx);
                }}
                changeBg={
                  idTabela.includes(data.codigo_produto) ? "#f85300" : "#fff"
                }
                changeColor={
                  idTabela.includes(data.codigo_produto) ? "#fff" : "#f85300"
                }
                containsPhoto={
                  idTabela.includes(data.codigo_produto) ? true : false
                }
                deleteIDTabela={() => {
                  removeIdTabela(data.codigo_produto);
                  deleteNameFile(data.codigo_produto);
                }}
              />
            )}

            {idx === 0 && (
              <S.InputChecked>
                <input
                  onClick={() => {
                    setIsChecked(!isChecked);
                    removeIdTabela(data.codigo_produto);
                  }}
                  checked={isChecked}
                  id="all_images"
                  type="radio"
                />
                <label
                  for="all_images"
                  style={{
                    position: "absolute",
                  }}
                >
                  Utilizar o mesmo arquivo para todos os brindes!
                </label>
              </S.InputChecked>
            )}
          </Flex>
        </S.FlexProdutos>
      );
    })
  );
}
