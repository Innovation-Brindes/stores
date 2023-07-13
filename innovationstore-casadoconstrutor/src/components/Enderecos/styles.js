import { Grid } from "@chakra-ui/react";
import { style } from "@mui/system";
import styled from "styled-components";
import { cor_base_2 } from "../../services/cores";

export const Content = styled.div`
    width:850px;
    min-height: 100vh;
    position:relative;
    margin-left:auto;
    margin-right:auto;
    /* background-color:red; */
    display:flex;
    flex-direction:column;

    @media screen and (max-width:768px){
        width:100%;
        max-width:400px;
    }
`

export const ContentHeader = styled.div`
    width:100%;
    height:310px;
    /* background-color:yellow; */
    position:relative;
    margin-left:auto;
    margin-right:auto;
    display:block;

    @media screen and (max-width:768px){
        display:none;
    }
`

export const ContentHeaderMobile = styled.div`
    width:400px;
    height:350px;
    /* background-color:yellow; */
    position:relative;
    margin-left:auto;
    margin-right:auto;
    display:none;
    justify-content:center;
    @media screen and (max-width:768px){
        width:100%;
        display:flex;

        img{
            max-width:370px;
            display:block;
            object-fit:contain;
        }
    }
`

export const ContentHeaderDescription = styled.div`
    width: 100%;
    height:120px;
    display:block;
    display:flex;
    flex-direction:column;
    align-items:center;
    h1{
        width:100%;
        font-size:13px;
        font-family:"Gisha Bold";
        text-align:center;
        text-transform:uppercase;
    }

    p{
        width:90%;
        font-size:14.2px;
        font-family:"Gisha";
        text-align:center;
    }

    @media screen and (max-width:768px){
        display:none;
    }
`

export const ContentHeaderSubheader = styled.div`
    width:100%;
    height:60px;
    /* background-color:red; */
    display:flex;
    h1{
        font-size:18px;
        color:${cor_base_2};
        font-weight:900;
        font-family:"Gisha Bold";
        text-align:center;
        text-transform:uppercase;
        display:flex;
        align-self:flex-end;
        position:relative;
        margin-left:auto;
        margin-right:auto;
    }
`

export const ContentBody = styled(Grid)`
    width:100%;
    /* background-color:yellow; */
    margin-bottom:125px;
    grid-template-columns:repeat(auto-fill,425px);

    @media screen and (max-width:768px){
        width:100%;
        max-width:360px;
        position:relative;
        margin-left:auto;
        margin-right:auto;
        grid-template-columns:repeat(1,350px);
    }
`

export const ContentBodyAddress = styled.div`
    width:400px;
    height:120px;
    /* background-color:green; */
    position:relative;
    margin-left:auto;
    margin-right:auto;
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top:50px;
    color:white;
    a{
        width:120px;
        height:40px;
        background-color: ${cor_base_2};
        border-radius:7px;
        font-size:16px;
        font-family:"Gisha Bold";
        display:block;
        color:white;
        text-decoration:none;
        display:flex;
        align-items:center;
        text-align:center;
        padding-left:28px;
        cursor: pointer;
    }

    a:hover{
        color:white;
    }
    &:nth-child(odd){
        border-right:2px solid ${cor_base_2};
    }

    @media screen and (max-width:768px){
        width:100%;
        border-top:25px solid transparent;
        border-bottom:25px solid transparent;
        &:nth-child(odd){
            border-top:25px solid #DDDDDD;
            border-bottom:25px solid #DDDDDD;
            background-color:#DDDDDD;
            border-right:none;
        }
    }
`

export const ContentBodyAddressHeader = styled.div`
    width:90%;
    height:80%;
    /* background-color:rebeccapurple; */
    align-self:right;
    display:flex;
    flex-direction:row;

    .pin-img{
        width:20%;
        height:100%;
        /* background-color:red; */
    }

    .description{
        width:80%;
        height:100%;
        /* background-color:green; */
        display:flex;
        flex-direction:column;
        color:black;
        h1{
            font-size:12px;
            font-family:"Gisha Bold";
            text-transform:uppercase;
            margin-top:2px;
        }
        p{
            font-size:11px;
            font-family:"Gisha";
            text-transform:uppercase;
        }
    }

    @media screen and (max-width:768px){
        .description{
            h1{
                font-size:10px;
            }
            p{
                font-size:10px;
            }
        }
    }
`
