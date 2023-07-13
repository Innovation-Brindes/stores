import Image from "next/image"
import * as S from "./styles"
import { Container } from "../styles"
import { CarouselProvider, Slide, Slider } from "pure-react-carousel"
import { useEffect, useReducer, useState } from "react"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import "pure-react-carousel/dist/react-carousel.es.css"
import { ModalSlideImages } from "./ModalSlideImage"
import { Vestuario } from "./Vestuario"

export function ContainerImage({ product }) {
  const [openModalSlide, setOpenModalSlide] = useState(false)

  function handleOpenModalSlide() {
    setOpenModalSlide(true)
  }

  function handleCloseModalSlide() {
    setOpenModalSlide(false)
  }

  const [listImages, setListImages] = useState(product.imagens_produto)
  const [imageSelected, setImageSelected] = useState(product.imagens_produto[0])
  const [imageActive, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "next":
        if (state === product.imagens_produto.length - 1) {
          return 0
        }
        return state + 1
      case "prev":
        if (state === 0) {
          return product.imagens_produto.length - 1
        }
        return state - 1
      default:
        return state
    }
  }, 0)

  function handleNextImage() {
    dispatch({ type: "next" })
  }

  function handlePrevImage() {
    dispatch({ type: "prev" })
  }

  function handleImageSelected(image) {
    setImageSelected(image)
  }

  useEffect(() => {
    setImageSelected(product.imagens_produto[0])
  }, [product])

  return (
    <Container>
      <S.ImageContainer>
        <S.HeaderImageContainer>
          <S.Heading>{product.nome}</S.Heading>
          <span>
            Modelo: <span>{product.referencia}</span>
          </span>
        </S.HeaderImageContainer>
        <ModalSlideImages
          isOpen={openModalSlide}
          onClose={handleCloseModalSlide}
          images={product.imagens_produto}
          onOpen={handleOpenModalSlide}
          initialImage={imageSelected.url}
        />
        <S.ImageSliderContainer>
          <CarouselProvider
            naturalSlideWidth={400}
            naturalSlideHeight={360}
            totalSlides={product.imagens_produto.length}
            visibleSlides={3}
            infinite={true}
            dragEnabled={true}
            currentSlide={imageActive}
          >
            <Slider>
              {product.imagens_produto.map((image, id) => {
                return (
                  <Slide index={id} key={id}>
                    <S.ImageSliderContent
                      active={imageSelected.id === image.id}
                      onClick={() => handleImageSelected(image)}
                    >
                      <Image
                        src={image.url}
                        alt={image.caracteristicas}
                        width={427}
                        height={322}
                        placeholder="blur"
                        blurDataURL={image.url}
                      />
                    </S.ImageSliderContent>
                  </Slide>
                )
              })}
            </Slider>
          </CarouselProvider>
        </S.ImageSliderContainer>
        {product.prod_vestuario === "S" && <Vestuario product={product} />}
        <S.SliderControllerContainer>
          <S.SliderController onClick={handlePrevImage}>
            <IoIosArrowBack />
          </S.SliderController>
          <S.SliderController onClick={handleNextImage}>
            <IoIosArrowForward />
          </S.SliderController>
        </S.SliderControllerContainer>
        <S.DescriptionContainer>
          <h1>Descrição: {product.caracteristicas}</h1>
          <button>+ detalhes</button>
          <h1>
            <strong>Dimensões:</strong> {product.dimensoes}
          </h1>

          <span>
            (Esse produto é produzido por diversos fabricantes, portanto as medidas e o peso apresentados podem sofrer
            pequenas alterações.)
          </span>
        </S.DescriptionContainer>
      </S.ImageContainer>
    </Container>
  )
}
