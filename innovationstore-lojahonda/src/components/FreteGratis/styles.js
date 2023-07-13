import { styled } from "../../styles/index"

export const FreteGratisContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "601px 1fr",
  fontFamily: "Nunito Sans",
  height: "58px",
  placeContent: "center",
  maxWidth: "2100px",
  margin: "0 auto",
  "@media only screen and (max-width: 1200px)": {
    gridTemplateColumns: "418px 1fr",
  },
  "@media only screen and (max-width: 992px)": {
    gridTemplateColumns: "418px 1fr",
  },
  "@media only screen and (max-width: 768px)": {
    display: "none",
  },
  "@media (max-width: 768px)": {
    display: "none",
  },
})

export const FreteGratisContent = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "9px",
  paddingRight: "20px",
  cursor: "pointer",
  color: "#E2001B",
  fontWeight: "600",

  variants: {
    backgroundColor: {
      true: {
        backgroundColor: "#f5f5f5",
      },
      false: {
        backgroundColor: "#F5F5F5",
      },
    },
  },
})

export const TemFreteGratis = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "9px",
  span: {
    fontSize: "14px",
    fontWeight: "bold",
  },
  h1: {
    fontSize: "14px",
    fontWeight: "bold",
    color: "#fff",
    textTransform: "uppercase",
    backgroundColor: "#E2001B",
    padding: ".2rem .8rem",
    borderRadius: "13px",
    margin: "0",
  },
})
export const SemFreteGratis = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flex: 1,
  color: "#0B73F8",
  fontWeight: "600",
  cursor: "pointer",
  paddingBlock: ".1rem",

  ".not-free": {
    fontWeight: "bold",
    fontSize: "14px",
  },

  ".garantimos": {
    fontSize: "12px",
    color: "#414042A8",
    lineHeight: ".8rem",
  },

  ".openPop": {
    display: "flex",
  },

  ".columnSemFrete": {
    display: "flex",
    flexDirection: "column",
    lineHeight: "1.2rem",

    div: {
      display: "flex",
      gap: "4px",
    },
  },

  variants: {
    backgroundColor: {
      true: {
        backgroundColor: "#0B73F81A",
      },
      false: {
        backgroundColor: "#F5F5F5",
      },
    },
  },
})

export const ImageContainer = styled("div", {
  display: "flex",
  backgroundColor: "#1f1f1f",
  flex: 1,
  alignItems: "center",
  justifyContent: "space-between",
  paddingLeft: "81px",
  paddingRight: "24px",
  width: "100%",
  height: "58px",
})
