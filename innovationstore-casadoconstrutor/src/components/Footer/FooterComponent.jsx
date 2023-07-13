import * as S from "./FooterComponentStyle";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsInstagram, BsPinterest, BsYoutube } from "react-icons/bs";
import { useState, useEffect } from "react";
import { GiSmartphone } from "react-icons/gi";
import { BsWhatsapp } from "react-icons/bs";
import { baseURL } from "../../services/api";
import Link from "next/link";

const FooterComponent = () => {
  const [links, setLinks] = useState([]);

  async function getLinks() {
    const { data } = await baseURL.get("pedido/listar-segmento-rodape");

    setLinks(data);
  }

  useEffect(() => {
    getLinks();
  }, []);

  return (
    <S.FooterContainer>
      <S.FooterHeader>
        <div className="logo_div">
          <S.FooterLogo src="/images/logobanner.png" margin="1rem" />
        </div>
        <S.MobileContent>
          <FaLinkedinIn size={40} color="#9fcd42" className="icon-border" />
          <BsInstagram size={40} color="#9fcd42" className="icon-border" />
          <FaFacebookF size={40} color="#9fcd42" className="icon-border" />
          <BsYoutube size={40} color="#9fcd42" className="icon-border" />
          <BsPinterest size={40} color="#9fcd42" className="icon-border" />
        </S.MobileContent>

        <S.HeaderContent>
          <S.LogoContent>
            <div>
              <span>Site seguro</span>
              <S.FooterLogo src="/images/googlesafety.png" />
            </div>
            <S.FooterLogo src="/images/security.png" />
            <S.FooterLogo src="/images/google.png" />
          </S.LogoContent>
        </S.HeaderContent>
      </S.FooterHeader>
      <S.FooterBody>
        <S.FooterBodyContent>
          <S.Title align="center">Segmentos</S.Title>
          <S.FooterBodyContentLinks>
            {!links.length ? (
              <div>Carregando...</div>
            ) : (
              links.map((link) => (
                <S.FooterBodyContentLink>
                  <a href={link.url_segmento}>{link.descricao}</a>
                </S.FooterBodyContentLink>
              ))
            )}
          </S.FooterBodyContentLinks>
        </S.FooterBodyContent>
        <S.DividierMobile />
        <S.Features>
          <img src="/images/googlesafety.png" />
          <img src="/images/security.png" />
          <img src="/images/google.png" />
        </S.Features>
        <S.DividierMobile />
        <S.FooterBodyContent>
          <div className="soaqui">
            <S.IconsSocialMedia>
              <a
                href="https://www.linkedin.com/company/innovationbrindes/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn
                  size={40}
                  color="#9fcd42"
                  className="icon-border"
                />
              </a>
              <a
                href="https://www.instagram.com/innovationbrindes/"
                target="_blank"
                rel="noreferrer"
              >
                <BsInstagram
                  size={40}
                  color="#9fcd42"
                  className="icon-border"
                />
              </a>
              <a
                href="https://www.facebook.com/innovationbrindes"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF
                  size={40}
                  color="#9fcd42"
                  className="icon-border"
                />
              </a>
              <a
                href="https://www.youtube.com/c/InnovationbrindesBr"
                target="_blank"
                rel="noreferrer"
              >
                <BsYoutube size={40} color="#9fcd42" className="icon-border" />
              </a>
              <a
                href="https://br.pinterest.com/innovationbrindes/"
                target="_blank"
                rel="noreferrer"
              >
                <BsPinterest
                  size={40}
                  color="#9fcd42"
                  className="icon-border"
                />
              </a>
            </S.IconsSocialMedia>
            <S.Title align="center">Só aqui</S.Title>
            <ul className="content-soaqui">
              <S.FooterBodyContentLink>
                <Link href="/segmento/novidades/6">Lançamentos</Link>
              </S.FooterBodyContentLink>
              {/* <S.FooterBodyContentLink>
                <Link href="/ultra-rapido">Pronto em 1 dia</Link>
              </S.FooterBodyContentLink> */}
            </ul>
          </div>
        </S.FooterBodyContent>
        <S.FooterBodyContent>
          <S.FooterBodyContentTitle>Atendimento</S.FooterBodyContentTitle>
          <S.FooterBodyContentInfo>
            <li className="list_atendimento">
              <div>
                <GiSmartphone color="#9fcd42" size={25} />
                <a href="tel: +55 11 2649-6030">SP +55 11 2649-6030</a>
              </div>
              <div>
                <BsWhatsapp color="#9fcd42" size={25} />
                <a
                  href="https://api.whatsapp.com/send?phone=551126496030&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20da%20Innovation%20Brindes"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                </a>
              </div>
              <div>
                <AiOutlineMail color="#9fcd42" size={25} />
                <a href="mailto:comercial@innovationbrindes.com.br">
                  comercial@innovationbrindes.com.br
                </a>
              </div>
            </li>
          </S.FooterBodyContentInfo>
        </S.FooterBodyContent>
        <S.FooterBodyContent>
          <S.FooterBodyContentTitle>Horário</S.FooterBodyContentTitle>
          <S.FooterBodyContentInfo>
            <li>
              <div className="info-horarios">
                <p>Segunda a sexta-feira</p>
                <p>das 08:00 às 12:00 horas</p>
                <p>e 13:30 às 18 horas</p>
              </div>
            </li>
          </S.FooterBodyContentInfo>
        </S.FooterBodyContent>
      </S.FooterBody>
    </S.FooterContainer>
  );
};

export default FooterComponent;
