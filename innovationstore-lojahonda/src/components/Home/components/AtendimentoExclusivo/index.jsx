import { AiOutlineMail } from "react-icons/ai"
import * as S from "./styles"
import { BsTelephoneForward } from "react-icons/bs"
import { SlScreenSmartphone } from "react-icons/sl"

export function AtendimentoExclusivo() {
  return (
    <S.ContainerAtendimento>
      <S.ImageContainter>
        <S.ImageAtendimento
          src="https://imgproductioncrm.s3.us-east-2.amazonaws.com/mirian%402x.png"
          alt=""
          width={143}
          height={143}
          placeholder="blur"
          blurDataURL="https://imgproductioncrm.s3.us-east-2.amazonaws.com/mirian%402x.png"
        />
      </S.ImageContainter>
      <S.HeaderAtendimento>
        <h2>Atendimento Exclusivo</h2>{" "}
        <p>
          Mirian Marques / <span>Departamento Comercial</span>
        </p>
      </S.HeaderAtendimento>
      <S.ContentAtendimento>
        <div className="group">
          <S.Icon>
            <AiOutlineMail size={20} />
          </S.Icon>
          <div className="group-info">
            <a href="mailto:vendas4@innovationbrindes.com.br">
              <span>vendas4</span>@innovationbrindes.com.br
            </a>
          </div>
        </div>
        <div className="content">
          <div className="group">
            <S.Icon>
              <BsTelephoneForward size={20} />
            </S.Icon>
            <div className="group-info">
              11 <span>2649 6030</span>
            </div>
          </div>
          <div className="group">
            <S.Icon>
              <SlScreenSmartphone size={20} />
            </S.Icon>
            <div className="group-info">
              <a
                href={
                  "https://api.whatsapp.com/send?phone=5511986050047&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20da%20Innovation%20Brindes"
                }
                target="_blank"
                rel="noreferrer"
              >
                11 <span>98605 0047</span>
              </a>
            </div>
          </div>
        </div>
      </S.ContentAtendimento>
    </S.ContainerAtendimento>
  )
}
