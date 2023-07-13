import { styled } from "../../styles"

export const Container = styled("div", {
  width: "100%",
  fontFamily: "Open Sans, sans-serif",
  maxWidth: "1366px",
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "9px 60px",
  backgroundColor: "#fff",

  "--webkit-font-smoothing": "antialiased",

  //display none no mobile
  "@media (max-width: 768px)": {
    display: "none",
  },
})

export const MenuContent = styled("div", {
  display: "flex",
  alignItems: "flex-end",
  gap: "25px",
  fontSize: "13px",
})

export const MenuOpen = styled("div", {
  display: "$$display",
  flexDirection: "column",
  gap: "5px",
  position: "absolute",
  top: "1.5rem",
  left: "0",
  width: "$$width",
  height: "$$height",
  backgroundColor: "#fff",
  borderRadius: "5px",
  border: "1px solid #CFCFCF",
  zIndex: "999999999",

  ".header": {
    width: "100%",
  },

  ".content": {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    height: "450px",
  },

  h1: {
    fontSize: "13px",
    fontWeight: "600",
    color: "#414042",
    padding: "10px 20px",
    margin: "0",
    borderBottom: "1px solid #cfcfcf",
    width: "100%",
  },

  li: {
    listStyle: "none",
    fontSize: "13px",
    fontWeight: "400",
    color: "#414042",
    cursor: "pointer",
    padding: "2px 20px",

    //a

    a: {
      textDecoration: "none",
      color: "inherit",
    },

    "&:hover": {
      backgroundColor: "#F2F2F2",
    },
  },
})

export const ButtonGroup = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "3.5px",
  cursor: "pointer",
  position: "relative",
})

export const LinkGroup = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "1.5px",
  cursor: "pointer",
  flexDirection: "column",
})

export const Divider = styled("div", {
  width: "1px",
  height: "20px",
  backgroundColor: "#CFCFCF",
})

export const InfosContent = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "10px",
})

export const SpanLink = styled("span", {
  paddingInline: "6px",
  backgroundColor: "$$background",
  fontSize: "11px",
  width: "100%",
  textAlign: "center",
  color: "$$color",
})

export const MenuButton = styled("button", {
  border: "none",
  background: "none",
  cursor: "pointer",
  position: "relative",

  "&::after": {
    content: "''",
    position: "absolute",
    bottom: "-2px",
    display: "block",
    width: "0%",
    height: "2px",
    backgroundColor: "#E2001B",
    transition: "all 0.1s ease-in-out",
  },

  "&:hover": {
    "&::after": {
      content: "''",
      position: "absolute",
      bottom: "-2px",
      display: "block",
      width: "100%",
      height: "2px",
      backgroundColor: "#E2001B",
    },
  },

  variants: {
    active: {
      true: {
        "&::before": {
          content: "''",
          position: "absolute",
          bottom: "-2px",
          display: "block",
          width: "100%",
          height: "2px",
          backgroundColor: "#E2001B",
        },
      },

      false: {
        "&::before": {
          content: "''",
          position: "absolute",
          bottom: "-2px",
          display: "block",
          width: "0%",
          height: "2px",
          backgroundColor: "#E2001B",
        },
      },
    },
  },
})

export const IconGroup = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "5px",
  cursor: "pointer",

  fontWeight: "$$fontWeight",

  ".group-whats": {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    gap: "2px",
  },

  "span, a": {
    fontSize: "12px",
    color: "#414042",
    textDecoration: "none",
    transition: "all 0.1s ease-in-out",

    "&:hover": {
      color: "#E2001B",
    },

    span: {
      fontSize: "10px",
    },
  },
})

export const IconContent = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "5px",
  borderRadius: "50%",
  border: "2px solid",
  borderColor: "$$border",
  color: "#E2001B",

  variants: {
    border: {
      true: {
        border: "2px solid",
        borderColor: "#E2001B",
      },
      false: {
        border: "none",
      },
    },
  },
})
