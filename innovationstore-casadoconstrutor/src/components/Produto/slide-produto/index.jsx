import React, { useEffect, useState } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { BoxCardItem, BoxCards, CarouselProd } from './styles';
import { height } from '@mui/system';
import { ArrowLeftIcon, ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { BoxCardItemZoom, ControlSlider } from '../slide-zoom-produto/styles';
import { useMediaQuery } from '@chakra-ui/react';

const box1 = '/images/home/slides/box-1.png';
const box2 = '/images/home/slides/box-2.png';
const box3 = '/images/home/slides/box-3.png';
const box4 = '/images/home/slides/box-4.png';
const box5 = '/images/home/slides/box-5.png';
const box6 = '/images/home/slides/box-6.png';
const box7 = '/images/home/slides/box-7.png';
const box8 = '/images/home/slides/box-8.png';
const box9 = '/images/home/slides/box-9.png';
const box10 = '/images/home/slides/box-10.png';
const box11 = '/images/home/slides/box-11.png';
const box12 = '/images/home/slides/box-12.png';
const box13 = '/images/home/slides/box-13.png';
const box14 = '/images/home/slides/box-14.png';
const box15 = '/images/home/slides/box-15.png';
const box16 = '/images/home/slides/box-16.png';
const box17 = '/images/home/slides/box-17.png';
const box18 = '/images/home/slides/box-18.png';
const box19 = '/images/home/slides/box-19.png';
const box20 = '/images/home/slides/box-20.png';
const box21 = '/images/home/slides/box-21.png';

export default function SlideProduto({ isMobile = false, list_img, setStandardImage, setIdxImage, idxImage }) {
  const [mobileView, setmobileView] = useState();
  const [sizeHeight768px] = useMediaQuery('(max-height: 769px)')
  const [sizeWidth1366px] = useMediaQuery('(max-width: 1366px)')

  var styles = {
    slider: {
      height: '100px',
      paddingTop: '8px',
      position: 'relative',
      margin: '0 auto',
      zIndex: 99,
      borderRadius: '5px',
      width: '400px',
    },
    slide: {
    }
  }


  useEffect(() => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      setmobileView(true);
    } else {
      setmobileView(false);
    }
  }, [])

  // const marginSlider = `${list_img.length == 0 ? 
  //                           list_img.length == 4 ?
  //                           '0px' :
  //                           '39px' }`

  return (
    <CarouselProvider style={{ width:'400px'}} naturalSlideWidth={100} naturalSlideHeight={90} totalSlides={((list_img.length + 1) / 3).toFixed(1)} isIntrinsicHeight={'230px'} infinite={true}>
      <ButtonBack style={{
        width: '25px',
        borderTopLeftRadius: '10px',
        borderBottomLeftRadius: '10px',
        height: '25px',
        top: '-32px',
        right: `${mobileView ? '55%' : '50%'}`,
        position: 'absolute',
        border: '0.3px solid rgb(0,0,0,0.2)',
        margin: '2px'
      }}
      // onClick={()=>{
      //     setStandardImage(list_img[(idxImage != 0 ? idxImage -1 : 0)]);
      //     setIdxImage((idxImage != 0 ? idxImage -1 : 0));
      //   }
      // }
      >
        <ChevronLeftIcon fontSize={'20px'} position='relative' top='-3px' fontWeight={100} />
      </ButtonBack>
      <ButtonNext style={{
        width: '25px',
        borderTopRightRadius: '10px',
        borderBottomRightRadius: '10px',
        height: '25px',
        top: '-32px',
        left: `${mobileView ? '45%' : '50%'}`,
        position: 'absolute',
        border: '0.3px solid rgb(0,0,0,0.2)',
        margin: '2px'
      }}
      // onClick={()=>{
      //     setStandardImage(list_img[(idxImage != 2 ? idxImage + 1 : 2)]);
      //     setIdxImage((idxImage != 2 ? idxImage + 1 : 2));
      //   }
      // }
      >
        <ChevronRightIcon fontSize={'20px'} position='relative' top='-3px' fontWeight={100} />
      </ButtonNext>
      {/* <Slider style={{width:mobileView?'200px':'600px',position:'relative',marginLeft:'auto',marginRight:'auto',zIndex:99,border:'0.3px solid rgb(0,0,0,0.2)',borderRadius:'5px'}}>
                  {list_img.map((image, idx) => {
                    return <Slide index={idx}>
                              <BoxCardItemZoom objectFit='cover' src={image} href=""/>
                            </Slide>
                  })}
              </Slider> */}
      <Slider style={styles.slider} >
        {list_img.map((image, idx) => {
          return <Slide index={idx} style={idx > 0 ? { marginLeft: sizeWidth1366px ? '-125px' : '-95px' } : {}}>
            <BoxCardItem
              bgimg={image}
              onClick={() => {
                setStandardImage(list_img[idx]);
                setIdxImage(idx);
              }}
            />
          </Slide>
        })}
      </Slider>
      {/*             
            <ControlSlider>
              <ButtonBack>
                <ChevronLeftIcon fontSize={'50px'} fontWeight={100}/>
              </ButtonBack>
              <ButtonNext>
                <ChevronRightIcon fontSize={'50px'} fontWeight={100}/>
              </ButtonNext>
            </ControlSlider> */}

    </CarouselProvider>
    // <>
    //   <CarouselProvider  naturalSlideWidth={100} naturalSlideHeight={90} totalSlides={7} isIntrinsicHeight={'230px'} infinite={true}>
    //     <Slider>
    //       <Slide>
    //         {list_img.map((image, idx) => {
    //           return <Slide><BoxCardItem
    //                       bgimg={image}
    //                       onClick={()=>{
    //                           setStandardImage(list_img[idx]);
    //                           setIdxImage(idx);
    //                         }
    //                       }/></Slide>
    //         })}
    //         </Slide>
    //     </Slider>
    //     <ButtonBack style={{width:'25px',
    //                         borderTopLeftRadius:'10px',
    //                         borderBottomLeftRadius:'10px',
    //                         height:'25px',
    //                         top:'-32px',
    //                         right:`${mobileView ? '55%' : '50%'}`,
    //                         position:'absolute',
    //                         border:'0.3px solid rgb(0,0,0,0.2)',
    //                         margin:'2px'}}
    //                         onClick={()=>{
    //                             setStandardImage(list_img[(idxImage != 0 ? idxImage -1 : 0)]);
    //                             setIdxImage((idxImage != 0 ? idxImage -1 : 0));
    //                           }
    //                         }
    //                         >
    //         <ChevronLeftIcon fontSize={'20px'} position='relative' top='-3px' fontWeight={100}/>
    //     </ButtonBack>
    //     <ButtonNext style={{width:'25px',
    //                         borderTopRightRadius:'10px',
    //                         borderBottomRightRadius:'10px',
    //                         height:'25px',
    //                         top:'-32px',
    //                         left:`${mobileView ? '45%' : '50%'}`,
    //                         position:'absolute',
    //                         border:'0.3px solid rgb(0,0,0,0.2)',
    //                         margin:'2px'}}
    //                         onClick={()=>{
    //                             setStandardImage(list_img[(idxImage != 2 ? idxImage + 1 : 2)]);
    //                             setIdxImage((idxImage != 2 ? idxImage + 1 : 2));
    //                           }
    //                         }
    //                         >
    //         <ChevronRightIcon fontSize={'20px'}  position='relative' top='-3px' fontWeight={100}/>
    //     </ButtonNext>
    //   </CarouselProvider>
    //   {/* <BoxCards>
    //       {list_img.map((item,idx)=>{
    //         return idx < 3 ? 
    //                 <BoxCardItem
    //                     bgimg={item}
    //                     onClick={()=>{
    //                         setStandardImage(list_img[idx]);
    //                         setIdxImage(idx);
    //                       }
    //                     }/> :
    //                 <></>
    //       })}
    //   </BoxCards> */}
    // </>

  );
}

export function CarrosselProduto({ isMobile = false, list_img }) {
  return <CarouselProd>
    <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        {list_img.map((item, idx) => {
          if (idx == 0) {
            return <div type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={idx} class="active indicators" aria-current="true" aria-label={`Slide ${(idx + 1)}`} style={{ borderRadius: '10px' }}></div>
          } else {
            return <div type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={idx} class="indicators" aria-label={`Slide ${(idx + 1)}`}></div>
          }
        })}
      </div>
      <div class="carousel-inner">

        {list_img.map((item, idx) => {
          if (idx == 0) {
            return <div className="carousel-item active">
              <img className="d-block w-100" src={item} alt="slides" />
            </div>
          } else {
            return <div className="carousel-item">
              <img className="d-block w-100" src={item} alt="slides" />
            </div>
          }

        })}
      </div>
    </div>
  </CarouselProd>
}