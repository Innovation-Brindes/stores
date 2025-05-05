import { useEffect, useState } from "react"
import { AiFillGift } from "react-icons/ai"
import { DesktopContainer } from "./DesktopContainer"
import { AiFillCloseCircle } from "react-icons/ai"
import { MobileContainer } from "./MobileContainer"

export function ComprouGanhou({ price }) {
  const [open, setOpen] = useState(false)
  const [itemActive, setItemActive] = useState(null)
  const [value, setValue] = useState(0)

  const values = {
    0: "Chaveiro de metal abridor",
    1000: "Moleskine",
    3000: "Caneca inox 400ml",
    5000: "Copo térmico 500ml",
    10000: "Squeeze metal 750ML",
    30000: "Fone de ouvido bluetooth",
    50000: "Mala de bordo",
  }

  useEffect(() => {
    console.log(price)

    Object.entries(values).forEach(([key, value]) => {
      if (price >= key) {
        setValue(value)
      }
    })
  }, [price])

  const isOpen = !!open

  function handleOpen() {
    setOpen(true)
  }

  function handleClose() {
    setOpen(false)
  }

  useEffect(() => {
    function onEsc(event) {
      if (event.keyCode === 27) {
        handleClose()
      }
    }

    window.addEventListener("keydown", onEsc)

    return () => {
      window.removeEventListener("keydown", onEsc)
    }
  }, [])

  function getItemActive(item) {
    setItemActive(item)
  }

  return (
    <>
      <div className="flex gap-2 self-start mt-2">
        <AiFillGift className="text-[#CC0000] text-2xl" />
        <div className="flex flex-col ">
          <span className="font-bold text-sm text-[#CC0000]">Comprou, ganhou</span>
          <div className="flex items-center gap-2 text-sm">
            <span>{value && value}</span>
            <button className="underline" onClick={handleOpen}>
              Saiba +
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed z-10 inset-0 overflow-hidden font-sans"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-sans w-full min-h-[calc(100vh-135px)] md:mt-0 md:min-h-0 inline-block align-bottom bg-white rounded-lg text-left shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full md:max-w-5xl">
              <button className="absolute -right-0 -top-10  text-white rounded-full flex items-center justify-center">
                <AiFillCloseCircle className="text-3xl" onClick={handleClose} />
              </button>
              <div className="bg-white px-4 pt-2 md:pt-5 pb-4 sm:p-6 sm:pb-4 rounded-full  md:rounded-none">
                <DesktopContainer itemActive={itemActive} getItemActive={getItemActive} open={open} price={price} />
                <MobileContainer itemActive={itemActive} getItemActive={getItemActive} open={open} price={price} />
              </div>
              <div className="hidden  px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse mb-3">
                <span className="text-[9px] text-[#919191]">* Promoção não cumulativa. 1 item por pedido</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
