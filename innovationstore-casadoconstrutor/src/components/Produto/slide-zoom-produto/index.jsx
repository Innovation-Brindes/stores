import React, { useEffect, useState } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { BoxCardItemZoom, BoxCardsZoom, ControlSlider } from './styles';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useMediaQuery } from '@chakra-ui/react';

export default function SlideZoomProduto({ list_img, setStandardImage, standardImage, setIdxImage, idxImage }) {
    const [mobileView, setmobileView] = useState();
    const [sizeHeight768px] = useMediaQuery('(max-height: 769px)')
    const [sizeWidth1366px] = useMediaQuery('(max-width: 1367px)')

    var styles = {
        slider: {
            width: mobileView ? '200px' : sizeHeight768px && sizeWidth1366px ? '630px' : 'auto',
            position: 'relative',
            height: sizeHeight768px && sizeWidth1366px ? '450px' : '640px',
            marginLeft: 'auto',
            marginRight: 'auto',
            zIndex: 99,
            border: 'none',
            borderRadius: '5px',
            left: sizeHeight768px && sizeWidth1366px ? '-60px' : '0',

        },
        slide: {
            left: sizeHeight768px && sizeWidth1366px ? '0px' : '0',
            height: sizeHeight768px && sizeWidth1366px ? '430px' : '640px',
        }
    }

    useEffect(() => {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            setmobileView(true);
        } else {
            setmobileView(false);
        }

        if (standardImage == null || standardImage == undefined) {
            setStandardImage(list_img[0]);
        } else {
            setStandardImage(standardImage);
        }
    }, [])

    const newList_img = list_img.filter(i => i !== standardImage)
    function hasDuplicates(array) {
        return (new Set(array)).size !== array.length;
    }
    newList_img.unshift(standardImage)
    hasDuplicates(newList_img)

    return (

        <CarouselProvider naturalSlideWidth={100} naturalSlideHeight={90} totalSlides={list_img.length} isIntrinsicHeight={'230px'} infinite={true}>
            <Slider style={styles.slider}>
                {newList_img.map((image, idx) => {
                    return <Slide style={styles.slide} index={idx}>
                        <BoxCardItemZoom objectFit='cover' src={image} href="" />
                    </Slide>
                })}
            </Slider>

            {/* <ControlSlider> */}
            <ButtonBack style={{ top: sizeHeight768px && sizeWidth1366px ? '40%' : '45%', position: 'absolute', zIndex: 999 }}>
                <ChevronLeftIcon fontSize={'50px'} fontWeight={100} />
            </ButtonBack>
            <ButtonNext style={{ top: sizeHeight768px && sizeWidth1366px ? '40%' : '45%', left: sizeHeight768px && sizeWidth1366px ? "80%" : "93%", position: 'absolute', zIndex: 999 }}>
                <ChevronRightIcon fontSize={'50px'} fontWeight={100} />
            </ButtonNext>
            {/* </ControlSlider> */}

        </CarouselProvider>
    );
}