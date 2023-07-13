import { styled } from "../../../styles"

export const Container = styled("div", {
  width: "100%",
  backgroundColor: "#CFCFCF",
  color: "#414042",
})

export const Content = styled("div", {
  maxWidth: "1366px",
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: "0px 60px",

  a: {
    fontSize: "12px",
    textDecoration: "none",
    color: "#414042",
  },

  "@media (max-width: 768px)": {
    padding: "0px 20px",
  },
})

export const Divider = styled("div", {
  width: "1px",
  height: "14px",
  backgroundColor: "#414042",
  margin: "0 10px",
})
