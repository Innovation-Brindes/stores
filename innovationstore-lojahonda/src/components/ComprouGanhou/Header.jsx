import { useEffect, useState } from "react"
import { formatPrice } from "../../utils/formatPrice"

const itens = [
  {
    id: 1,
    name: "Chaveiro de metal abridor",
    title: "Chaveiro de metal abridor",
    active: false,
    value: 0,
    photoUrl: "https://imgproductioncrm.s3.us-east-2.amazonaws.com/chaveiro-compre-ganhe.png",
    photoUrl2x: "https://imgproductioncrm.s3.us-east-2.amazonaws.com/chaveiro-compre-ganhe-2x.png",
    description: "Ganhe um chaveiro abridor de metal grátis!",
    descriptionSecond: "Não importa o valor do seu pedido: Comprou, Ganhou!",
  },
  {
    id: 2,
    name: "Moleskine",
    title: "Moleskine",
    active: true,
    value: 1000,
    photoUrl: "https://imgproductioncrm.s3.us-east-2.amazonaws.com/moleskine-compre-ganhe.png",
    photoUrl2x: "https://imgproductioncrm.s3.us-east-2.amazonaws.com/moleskine-compre-ganhe-2x.png",
    description:
      "Ganhe um moleskine! O Moleskine é um  caderno de anotações de qualidade superior, perfeito para anotar suas ideias, fazer anotações e criar.",
  },
  {
    id: 3,
    name: "Caneca inox 400ml",
    title: "Caneca térmica 400ml",
    active: false,
    value: 3000,
    photoUrl: "https://imgproductioncrm.s3.us-east-2.amazonaws.com/caneca-compre-ganhe.png",
    photoUrl2x: "https://imgproductioncrm.s3.us-east-2.amazonaws.com/caneca-compre-ganhe-2x.png",
    description:
      "Essa caneca de 350ml em parede dupla de inox é sua! A caneca é perfeita para tomar seu café, chá ou bebida favorita :)",
  },
  {
    id: 4,
    name: "Copo térmico 500ml",
    title: "Copo térmico 500ml",
    surname: "com abridor",
    active: false,
    value: 5000,
    photoUrl: "https://imgproductioncrm.s3.us-east-2.amazonaws.com/copo-stanley-compre-ganhe.png",
    photoUrl2x: "https://imgproductioncrm.s3.us-east-2.amazonaws.com/copo-stanley-compre-ganhe-2x.png",
    description:
      "Ganhe um copo térmico para levar sua bebida para onde quiser! seja no escritório, em casa ou em uma viagem.",
  },
  {
    id: 5,
    name: "Squeeze metal 750ML",
    title: "Squeeze metal",
    surname: "750ML",
    active: false,
    value: 10000,
    photoUrl: "https://imgproductioncrm.s3.us-east-2.amazonaws.com/squeeze-compre-ganhe.png",
    photoUrl2x: "https://imgproductioncrm.s3.us-east-2.amazonaws.com/squeeze-compre-ganhe-2x.png",
    description:
      "Ganhe uma garrafa em aço inox com capacidade de 750ml grátis! Perfeita para manter suas bebidas frescas por horas, e é feita de materiais de alta qualidade que a tornam durável e resistente.",
  },
  {
    id: 6,
    name: "Fone de ouvido bluetooth",
    title: "Fone de ouvido",
    surname: "bluetooth",
    active: false,
    value: 30000,
    photoUrl: "https://imgproductioncrm.s3.us-east-2.amazonaws.com/fone-de-ouvido-compre-ganhe.png",
    photoUrl2x: "https://imgproductioncrm.s3.us-east-2.amazonaws.com/fone-de-ouvido-compre-ganhe-2x.png",
    description:
      "Ganhe um fone de ouvido wireless, perfeito para ouvir suas músicas e podcasts favoritos com liberdade de movimento.",
  },
  {
    id: 7,
    name: "Mala de bordo",
    title: "Mala de bordo",
    active: false,
    value: 50000,
    photoUrl: "https://imgproductioncrm.s3.us-east-2.amazonaws.com/mala-de-bordo-compre-ganhe.png",
    photoUrl2x: "https://imgproductioncrm.s3.us-east-2.amazonaws.com/mala-de-bordo-compre-ganhe-2x.png",
    description:
      "Essa linda mala de viagem é ideal para quem não abre mao de praticidade e estilo! Produzida em ABS resistente, forro poliéster, carrinho de aço, alça nas laterais e topo, quatro rodas 360 graus. Excelente para qualquer ocasião.",
  },
]

export function Header({ getItemActive, price, open }) {
  const [itensList, setItensList] = useState(itens)

  function handleSetActiveItem(id) {
    const newItens = itens.map((item) => {
      if (item.id === id) {
        return { ...item, active: true }
      } else {
        return { ...item, active: false }
      }
    })

    const itemActive = newItens.find((item) => item.active === true)

    setItensList(newItens)
    getItemActive(itemActive)
  }

  useEffect(() => {
    //itemActive percorre o array de itens e pega o item mais proximo do valor do pedido, se for menor que 1000, ele pega o primeiro item
    const itemActive = itens.reduce((prev, curr) => {
      return curr.value <= price ? curr : prev
    })
    //declara ele como ativo e pega o item ativo
    const newItens = itens.map((item) => {
      if (item.id === itemActive.id) {
        return { ...item, active: true }
      } else {
        return { ...item, active: false }
      }
    })

    setItensList(newItens)

    getItemActive(itemActive)
  }, [price, open])

  return (
    <>
      <div className="w-full hidden md:grid grid-cols-7 justify-between text-center items-center border-b pb-4 gap-5">
        {itensList.map((item) => (
          <div
            key={item.id}
            className={`flex cursor-pointer items-center justify-center gap-3 after:w-[120%] after:left-0 after:h-1 after:bg-[#CC0000] after:absolute relative ${
              item.active ? `after:translate-y-12` : ""
            }
        ${item.active ? "after:content-['']" : "after:hidden"}
      `}
            onClick={() => handleSetActiveItem(item.id)}
          >
            <div className="flex items-center gap-2">
              <div className={`h-7 rounded-full bg ${item.active ? "bg-[#CC0000]" : "bg-[#414042]"} px-[10px]`}>
                <span className="text-sm uppercase text-white">{item.id}</span>
              </div>{" "}
              <p className={`text-sm ${item.active ? "text-[#CC0000]" : "text-[#414042]"} uppercase`}>{item.name}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full hidden md:grid grid-cols-7 justify-between text-center items-start gap-5 mt-2 translate-x-4">
        {itensList.map((item) => (
          <span key={item.id} className="text-[10px] text-[#414042]">
            {item.value === 0 ? "Para qualquer pedido" : `Para pedido acima de ${formatPrice(item.value)}`}
          </span>
        ))}
      </div>
    </>
  )
}
