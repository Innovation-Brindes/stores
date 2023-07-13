
import React from "react";
import { FooterSocialMedia, FooterSocialMediaContent, FooterSocialMediaContentControl, FooterSocialMediaContentLogo } from "../styles";

const logo = "/images/menu/logo.png";

const linkedin = "/images/socialmedia/linkedin.png";
const instagram = "/images/socialmedia/instagram.png";
const facebook = "/images/socialmedia/facebook.png";
const pinterest = "/images/socialmedia/pinterest.png";
const youtube = "/images/socialmedia/youtube.png";


export default function FooterSocialMediaComponent(){
    return  <FooterSocialMedia>
                <FooterSocialMediaContent>
                    <FooterSocialMediaContentLogo>
                        {/* <img alt="" src={logo} /> */}
                        <a href="/enderecos">Endereços</a>
                    </FooterSocialMediaContentLogo>
                    <FooterSocialMediaContentControl>
                        <a href="https://www.linkedin.com/company/innovationbrindes/" target="_blank"><img alt="linkedin-icon" src={linkedin}/></a>
                        <a href="https://www.instagram.com/innovationbrindes/" target="_blank"><img alt="instagram-icon" src={instagram}/></a>
                        <a href="https://pt-br.facebook.com/innovationbrindessp/" target="_blank"><img alt="facebook-icon" src={facebook}/></a>
                        <a href="https://br.pinterest.com/innovationbrindes/" target="_blank"><img alt="pinterest-icon" src={pinterest}/></a>
                        <a href="https://www.youtube.com/c/InnovationbrindesBr" target="_blank"><img alt="youtube-icon" src={youtube}/></a>
                        <p onClick={()=>window.scrollTo(0, 0)}>Topo</p>
                    </FooterSocialMediaContentControl>
                </FooterSocialMediaContent>
            </FooterSocialMedia>
}