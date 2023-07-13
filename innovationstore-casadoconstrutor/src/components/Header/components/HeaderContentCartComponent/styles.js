import { styled } from "../../../../styles"

export const HeaderContentCart = styled("div", {
  height: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  gap: "12px",
  position: "relative",

  p: {
    height: "10px",
    color: "#FC5000",
    fontFamily: "Akrobat",
    cursor: "pointer",
  },

  span: {
    display: "none",
    cursor: "pointer",
  },

  "@media screen and (max-width: 1200px)": {
    width: "40px",
    marginLeft: "8px",
    p: {
      display: "none",
    },
    span: {
      width: "18px",
      height: "18px",
      backgroundColor: "#FC5000",
      fontSize: "12px",
      borderRadius: "10px",
      display: "flex",
      fontFamily: "Akrobat",
      color: "white",
      alignItems: "center",
      textAlign: "center",
      position: "absolute",
      paddingLeft: "6px",
      top: "0",
      right: "0px",
    },
  },
})
