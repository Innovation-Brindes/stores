import { styled } from "../../../styles"

export const DrawerMobileButton = styled("div", {
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#F5F5F5",
  cursor: "pointer",

  "@media (min-width: 768px)": {
    display: "none",
  },
})
