import Image from "next/image"
import * as S from "./styles"
import { ImageContent } from "../styles"
import { AiOutlineCloseCircle } from "react-icons/ai"
import { ButtonBack, ButtonNext, CarouselProvider, Slider } from "pure-react-carousel"
import "pure-react-carousel/dist/react-carousel.es.css"
import { GrNext, GrPrevious } from "react-icons/gr"

export function ModalSlideImages({ onOpen, isOpen, onClose, images, initialImage }) {
  const currentImage = images.findIndex((image) => {
    return image.url === initialImage
  })

  return (
    <>
      <ImageContent onClick={onOpen}>
        <Image
          src={initialImage}
          width={427}
          height={322}
          priority
          quality={30}
          placeholder="blur"
          blurDataURL={initialImage}
          alt="Imagem do produto"
        />
      </ImageContent>
      <S.Overlay open={isOpen} onClick={onClose} />
      <S.ContainerModalSlideImage open={isOpen}>
        <S.ContainerButtonClose>
          <S.ButtonClose onClick={onClose}>
            <AiOutlineCloseCircle size={30} />
          </S.ButtonClose>
        </S.ContainerButtonClose>

        <S.ContentModalSlideImage>
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={images.length}
            visibleSlides={1}
            currentSlide={currentImage}
          >
            <Slider>
              {images.map((image) => (
                <Image
                  key={image.url}
                  src={image.url}
                  width={688}
                  height={536}
                  alt="Imagem do produto"
                  priority
                  quality={30}
                  placeholder="blur"
                  blurDataURL={image.url}
                />
              ))}
            </Slider>
            <S.ContainerButtonController>
              <ButtonBack>
                <GrPrevious />
              </ButtonBack>
              <ButtonNext>
                <GrNext />
              </ButtonNext>
            </S.ContainerButtonController>
          </CarouselProvider>
        </S.ContentModalSlideImage>
      </S.ContainerModalSlideImage>
    </>
  )
}
