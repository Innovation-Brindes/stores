import styled from 'styled-components';
import { Box } from "@chakra-ui/react";

export const BoxCards = styled(Box)`
    width:90%;
    height:230px;
    position:relative;
    margin-left:auto;
    margin-right:auto;
    display:flex;
    justify-content:space-between;
    @media screen and (max-width:768px){
        width:100%;
        
    }
`

export const BoxCardItem = styled.a`
    width:170px;
    height:170px;
    background-repeat: no-repeat;
    margin-top:32px;
    cursor: pointer;
    transition: 0.2s;
    background: ${props => (props.bgimg ? `url(${props.bgimg})` : 'none')};
    background-size: 170px 170px;

    &:hover{
        transform:scale(1.1,1.1);
        transition: 0.2s;
    }

    @media screen and (max-width:1330px){
        width:160px;
        height:160px;
        background-size: 160px 160px;
    }
    @media screen and (max-width:1230px){
        width:130px;
        height:130px;
        background-size: 130px 130px;
    }
    @media screen and (max-width:768px){
        width:125px;
        height:125px;
        background-size: 125px 125px;
    }
`