import { Image } from '@chakra-ui/react';
import styled from 'styled-components';

export const BoxCards = styled.div`
    width:80%;
    height:90px;
    position:relative;
    margin-left:auto;
    margin-right:auto;
    display:flex;
    justify-content:flex-start;

    @media screen and (max-width:768px){
        width:100%;
        height:320px;
        position:relative;
        margin-left:auto;
        margin-right:auto;
        display:flex;
        justify-content:flex-start;
        border-radius:8px;
        padding-top:5px;
        /* background-color:red; */
    }
`

export const BoxCardItem = styled(Image)`
    width:110px;
    height:86px;
    background-repeat: no-repeat;
    display:block;
    margin-top:0px;
    cursor: pointer;
    transition: 0.2s;
    background: ${props => (props.bgimg ? `url(${props.bgimg})` : 'none')};
    background-size: 100% auto;
    background-position: auto auto;
    background-repeat: no-repeat;
    margin: 0px;
    border-radius:3px;
    

    /* @media screen and (max-width:1330px){
        width:160px;
        height:160px;
        background-size: 160px 160px;
    } */
    /* @media screen and (max-width:1230px){
        width:130px;
        height:130px;
        background-size: 130px 130px;
    } */
    @media screen and (max-width:768px){
        width:100%;
        height:100%;
        margin-top:0px;
        cursor: pointer;
        transition: 0.2s;
        background: ${props => (props.bgimg ? `url(${props.bgimg})` : 'none')};
        background-size: auto 90%;
        background-position: 0px 4px;
        background-repeat: no-repeat;
        margin: 0px;
        border-radius:3px;
        /* border:none; */
        &:hover{
            transform:none;
            transition: 0.2s;
        }
    }
`

export const CarouselProd = styled.div`

    #carouselExampleDark{
        .carousel-indicators{
            height:30px;
            position:absolute;
            top:90%;
            .indicators{
                width:16px;
                height:16px;
                border-radius:20px;
                border:2px solid transparent;
                background-color:grey;
            }
            .active{
                background-color:white;
                border:1px solid grey;
            }
        }
    }
`