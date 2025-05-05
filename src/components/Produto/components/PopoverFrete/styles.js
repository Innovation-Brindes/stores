import { styled } from "../../../../styles"

export const PopoverContainer = styled("div", {
  display: "flex",
  position: "absolute",
  // display={isOpen ? "flex" : "none"}

  top: "4rem",
  color: "#000",
  right: "3.9rem",
  width: "100%",
  height: "100vh",
  zIndex: "9",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "Open Sans",
})
