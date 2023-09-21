import { useState } from "react"
import { AiFillCloseCircle } from "react-icons/ai"
import { FaWhatsapp } from "react-icons/fa"

export function WhatsAppChat() {
  const [buttonVisible, setButtonVisible] = useState(true)

  function hiddenButton() {
    setButtonVisible(false)
  }

  return (
    <div
      className={`
        w-[calc(100%-1rem)] 
        fixed z-20 
        cursor-pointer
        bottom-2
        right-1/2
        transform translate-x-1/2
        md:w-fit
        md:transform-none
        md:translate-x-0
        md:right-6 
        md:bottom-6 
        ${buttonVisible ? "block" : "hidden"}
  `}
    >
      <button
        className="
        flex 
        items-center 
        justify-start 
        p-2
        bg-white 
        shadow-2xl 
        rounded-3xl
        relative
        w-full
      "
      >
        <div className="flex gap-2 items-center">
          <div
            className="bg-[#cc0000]
          text-white
          flex items-center justify-center
          w-14 h-14
          rounded-full
          cursor-pointer
          hover:brightness-90 
          focus:outline-none
          focus:shadow-none"
          >
            <FaWhatsapp className="text-3xl" />
          </div>
          <div className="hidden text-[14px] md:flex md:flex-col text-start">
            <span>Seja bem vindo!</span>
            <span>Fala comigo pelo </span>
            <span className="font-bold">WhatsApp agora.</span>
          </div>
          <div className="md:hidden block text-[14px] text-start">
            Seja bem vindo! Fala comgio <br /> pelo, <span className="font-bold">WhatsApp agora.</span>
          </div>
          <div className="bg-white w-24 h-24 md:w-20 md:h-20 rounded-full absolute bottom-0 right-0  md:shadow-none shadow-2xl flex items-center justify-center md:relative md:p-0">
            <img className="w-20 h-20" src="https://imgproductioncrm.s3.us-east-2.amazonaws.com/mirian.png" alt="" />
          </div>
        </div>
      </button>
      <div className="absolute -top-10 md:-top-8 right-3 md:right-0 z-20">
        <AiFillCloseCircle className="text-xl md:text-2xl text-gray-400" onClick={() => hiddenButton()} />
      </div>
    </div>
  )
}
