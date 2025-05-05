import Image from "next/image"

export function ButtonIcon({ icon }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image src={icon} alt="icon" width={30} height={30} />
    </div>
  )
}
