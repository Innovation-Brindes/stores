import { styled } from "../../styles"

export const HeaderContainer = styled("div", {
  width: "100%",
  backgroundColor: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingBlock: "1rem",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  borderBottom: "1px solid #d4d4d4",

  "@media screen and (max-width: 768px)": {
    height: "120px",
    flexDirection: "column",
    paddingLeft: "5px",
    paddingRight: "5px;",
  },
})

export const Header = styled("div", {
  width: "100%",
  height: "70px",
  backgroundColor: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderBottom: "1px solid #d4d4d4",
  /* margin-bottom: 15px; */
  paddingLeft: "20px",
  paddingRight: "20px",
  marginInline: "auto",

  opacity: "var(--opacity)",

  "@media screen and (max-width: 768px)": {
    height: "120px",
    flexDirection: "column",
    paddingLeft: "5px",
    paddingRight: "5px;",
  },
})

export const HeaderContent = styled("div", {
  width: "100%",
  maxWidth: "1360px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
})

export const MobileControl = styled("div", {
  display: "none",
  "@media screen and (max-width: 768px)": {
    display: "block",
  },
})

export const HeaderContentLogo = styled("div", {
  width: "100%",
  alignItems: "center",
})

export const HeaderContentNav = styled("div", {
  width: "40%",
  /* max-width:540px, */
  height: "100%",
  /* background-color:red, */
  display: "flex",
  justifyContent: "space-between",
  marginRight: "10px",
  gap: "10px",

  "@media screen and (max-width: 768px)": {
    display: "none",
  },
})

export const HeaderContentNavItem = styled("div", {
  display: "flex",
  justifyCcontent: "space-between",
  alignItems: "center",

  fontSize: "17px",
  position: "relative",

  a: {
    textDecoration: "none",
    color: "black",
  },
  "a:hover": {
    textDecoration: "none",
    color: "black",
  },

  "&:nth-child(1)": {
    ".dropdown .btn": {
      backgroundColor: "transparent",
      color: "black",
      border: "none",
      outline: "none",
      boxShadow: "none",
    },

    ".dropdown .dropdown-menu": {
      width: "900px",

      fontSize: "14px",
      /* display: flex; */
    },
    ".dropdown .dropdown-menu .content-menu": {
      position: "relative",
      float: "left",
    },
  },

  "&:nth-child(2)": {
    ".dropdown .btn": {
      backgroundColor: "transparent",
      color: "black",
      border: "none",
      outline: "none",
      boxShadow: "none",
    },

    ".dropdown .dropdown-menu": {
      width: "300px",

      fontSize: "14px",
      /* display: flex; */
    },
    ".dropdown .dropdown-menu .content-menu": {
      position: "relative",
      float: "left",
    },
  },

  "&:nth-child(3)": {
    flexDirection: "column",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  "&:nth-child(4)": {
    flexDirection: "column",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    "@media screen and (max-width: 1100px)": {
      width: "60px",
      marginRight: "0px",
      top: "-3px",
      lineHeight: "90%",
    },

    "@media screen and (max-width: 1100px)": {
      span: {
        top: "2px",
        left: "0px",
      },
    },
  },
})

export const HeaderContentContact = styled("div", {
  height: "40px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderRight: "1px solid #d4d4d4",
  gap: "10px",
  p: {
    height: "10px",
    marginRight: "8px",
    fontFamily: "Open Sans",
  },
  a: {
    height: "10px",
    marginRight: "8px",

    textDecoration: "none",
    color: "black",
    marginTop: "-15px",
  },

  "@media screen and (max-width: 375px)": {
    a: {
      fontSize: "15px",
    },
  },
})

export const ContentIcon = styled("div", {
  padding: "7px",
  borderRadius: "50%",
  border: "2px solid #FC5000",
})

export const ContentInfoCart = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "10px",
})

export const HeaderContentInputMobile = styled("div", {
  width: "98%",
  height: "35px",
  display: "none",
  marginTop: "12px",

  ".click-lupa": {
    width: "35px",
    height: "35px",
    backgroundColor: "transparent",
    position: "absolute",
    left: "90%",
    zIndex: "999",
  },
  "@media screen and (max-width: 768px)": {
    display: "block",
  },
})

export const HeaderContentInput = styled("div", {
  width: "230px",
  height: "35px",

  ".click-lupa": {
    width: "35px",
    height: "35px",
    backgroundColor: "transparent",
    position: "absolute",
    left: "81%",
    zIndex: 999,
    cursor: "pointer",
  },
  "@media screen and (max-width: 768px)": {
    display: "none",
  },
})

export const TagInfo = styled("span", {
  width: "60px",
  height: "18px",
  position: "absolute",

  backgroundColor: "#FC5000",
  fontSize: "12px",
  textAlign: "center",
  borderRadius: "2px",
  letterSpacing: "0.05rem",
  color: "white",

  top: "var(--top-size)",
  left: "var(--left-size)",
})
