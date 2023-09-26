import Image from "next/image"
import { useEffect, useState } from "react"
import { formatPrice } from "../../utils/formatPrice"
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md"

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
    slug: "bluetooth",
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

export function MobileContainer({ price, open }) {
  const [listItems, setListItems] = useState(itens)
  const [itemActive, setItemActive] = useState(null)

  const [slide, setSlide] = useState(0)

  const handleSelectItem = (item) => {
    const prevItem = listItems.find((item) => item.active === true)

    if (prevItem) {
      prevItem.active = false
    }

    const newItem = listItems.find((itemList) => itemList.id === item.id)
    newItem.active = true

    setListItems([...listItems])

    setItemActive(newItem)
  }

  const handleNextSlide = () => {
    if (slide === listItems.length - 1) {
      setSlide(0)
      handleSelectItem(listItems[0])
    } else {
      setSlide(slide + 1)
      handleSelectItem(listItems[slide + 1])
    }
  }

  const handlePrevSlide = () => {
    if (slide === 0) {
      setSlide(listItems.length - 1)
      handleSelectItem(listItems[listItems.length - 1])
    } else {
      setSlide(slide - 1)
      handleSelectItem(listItems[slide - 1])
    }
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

    setListItems(newItens)

    setItemActive(itemActive)
  }, [price, open])

  return (
    <>
      <div className="md:hidden block min-h-[400px] rounded-[37px] p-1 w-full">
        <header className="flex items-center justify-center gap-2">
          <div className="w-9 h-9 flex items-center justify-center text-white font-bold rounded-full bg-[#000]">
            <span>{itemActive?.id}</span>
          </div>
          <div className="text-[#fff] text-sm bg-[#CC0000] py-2 min-w-[268px] text-center font-bold">
            <span className="uppercase">
              {itemActive?.value === 0
                ? "Para qualquer pedido!"
                : `Comprando  acima de ${formatPrice(itemActive?.value)}`}
            </span>
          </div>
        </header>
        <div className="flex px-4 mt-1 sm:px-6 sm:hidden items-center justify-center mb-3">
          <span className="text-[9px] text-[#919191]">* Promoção não cumulativa. 1 item por pedido</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="max-w-[318px]">
            <p className="text-[42px] leading-10 font-bold text-[#000]  text-center">
              Aqui você <span className="text-[#CC0000]">ganha</span> mais!
            </p>
          </div>

          <div className="mt-4 relative">
            <div class="relative mx-auto md:container h-[22rem] mb-20">
              <div class="bg-[#CC0000] rounded-[50%] w-72 h-full absolute top-0 left-1/2 -translate-x-1/2 rotate-[20deg]"></div>
              <div class="h-full flex items-center justify-center max-w-[686px] mx-auto relative z-20">
                {itemActive?.photoUrl && (
                  <Image src={itemActive?.photoUrl} alt={itemActive?.name} width={343} height={343} />
                )}
              </div>

              <div className="w-36 h-36 rounded-full bg-[#CC0000] relative left-1/2 -translate-x-1/2 -top-16 flex items-center justify-center">
                <div className="flex flex-col items-center max-w-[140px]">
                  {" "}
                  <span className="text-2xl text-[#fff] font-bold text-center leading-6">{itemActive?.title}</span>
                  {itemActive?.slug && (
                    <span className="text-[#fff] text-sm text-center uppercase">{itemActive?.slug}</span>
                  )}
                </div>
              </div>

              <button
                onClick={handlePrevSlide}
                className="text-[#017D9D] bg-white shadow-lg rounded-full p-2 flex items-center justify-center absolute top-1/2 -translate-y-1/2 left-0 z-50"
              >
                <MdArrowBackIosNew size={30} />
              </button>
              <button
                onClick={handleNextSlide}
                className="text-[#017D9D] bg-white shadow-lg rounded-full p-2 flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-0 z-50"
              >
                <MdArrowForwardIos size={30} className="font-bold" />
              </button>
            </div>

            <div className="flex items-center justify-center w-full py-2">
              {/* create dots slide */}
              {listItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`w-2 h-2 rounded-full bg-[#CC0000] mx-1 cursor-pointer ${item.active ? "bg-[#000]" : ""}`}
                  onClick={() => handleSelectItem(item)}
                ></div>
              ))}
            </div>

            <div className="flex items-center justify-center w-full">
              <span className="text-xs">
                {itemActive?.description}
                {itemActive?.descriptionSecond && (
                  <span className="text-xs font-bold"> {itemActive?.descriptionSecond}</span>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
