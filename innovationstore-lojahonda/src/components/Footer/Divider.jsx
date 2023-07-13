export function Divider({ children }) {
  return (
    <div className="w-full flex items-center justify-center md:gap-4 gap-2">
      <div className="md:w-full w-1/12 h-[1px] bg-[#CFCFCF]"></div>
      <h1 className="text-[#414042] text-sm md:text-lg m-0">{children}</h1>
      <div className="md:w-full w-1/12 h-[1px] bg-[#CFCFCF]"></div>
    </div>
  )
}
