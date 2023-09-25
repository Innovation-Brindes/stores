import Image from "next/image"
import { Header } from "./Header"

export function DesktopContainer({ itemActive, getItemActive, price, open }) {
  return (
    <>
      <Header getItemActive={getItemActive} price={price} open={open} />
      <div className="md:block hidden bg-compre-ganhe-pattern min-h-[400px] rounded-[37px] p-5 mt-10">
        {/* {itemActive && itemActive.name} */}
        <div className="flex items-start justify-start flex-col max-w-[400px] relative h-full">
          <div className="leading-[60px] text-7xl text-white relative">
            <p className="text-black">
              Aqui<span className="font-bold text-[#CC0000]">vocẽ</span>
            </p>
            <p className="text-black">
              <span className="font-bold text-[#CC0000]">ganha</span>mais! <span className="text-2xl absolute">*</span>
            </p>
          </div>
          {/* description */}
          <div className="self-end uppercase bg-[#CC0000] text-base font-bold text-[#fff] max-w-[321px] w-full text-center py-1 mt-2 translate-x-[10px]">
            <p>Para qualquer pedido!</p>
          </div>
          <div class="absolute -right-[400px] -top-28 flex h-screen w-full justify-center">
            <div class="mt-12 flex h-[480px] w-[380px] shrink-0 items-center justify-center rounded-[50%] bg-[#CC0000] rotate-45">
              <div class="-rotate-45 object-contain absolute w-[446px] h-[366px] flex items-center justify-center ">
                {itemActive?.photoUrl2x && <Image src={itemActive?.photoUrl2x} width={546} height={561} />}
              </div>
            </div>
          </div>
          <div className="absolute right-[-550px] top-12 w-56 h-56 bg-[#CC0000] rounded-full flex flex-col items-center justify-center leading-10">
            <span className="text-[#fff] text-[42px] font-bold text-center">{itemActive?.title}</span>
            {itemActive?.surname && (
              <span className="text-[#017D9D] text-[30px] text-center">{itemActive?.surname}</span>
            )}
          </div>

          {/* description */}
          <div className="text-black max-w-[355px] w-full mt-5">
            <div className="flex flex-col">
              <span>{itemActive?.description}</span>
              {itemActive?.descriptionSecond && (
                <span className="uppercase font-bold">{itemActive?.descriptionSecond}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
