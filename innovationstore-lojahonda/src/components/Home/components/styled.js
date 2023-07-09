import { styled } from "../../../styles"

export const HomeContentSlide = styled("div", {
  width: "100%",
  height: "747px",
  position: "relative",
  marginLeft: "auto",
  marginRight: "auto",
  backgroundColor: "white",

  "@media screen and (max-width: 1366px)": {
    width: "100%",
    height: "530px",
  },

  "@media screen and (max-width: 1200px)": {
    width: "100%",
    height: "530px",
  },
  "@media screen and (max-width: 768px)": {
    width: "100%",
    height: "640px",
  },
})

export const HomeContentSlideTopo = styled("div", {
  width: "1380px",
  height: "100%",
  position: "relative",
  marginLeft: "auto",
  marginRight: "auto",
  zIndex: "revert",
  display: "flex",
  justifyContent: "space-between",
  /* background-color:yellow, */

  "@media screen and (max-width: 1366px)": {
    width: "90%",
    justifyContent: "center",
  },

  "@media screen and (max-width: 1150px)": {
    justifyContent: "flex-start",
  },

  "@media screen and (max-width: 768px)": {
    width: "100%",
    justifyContent: "center",
  },
})

export const HomeContentSlideTopoFilter = styled("div", {
  width: "485px",
  height: "100%",
  /* background-color:cyan, */
  "@media screen and (max-width: 1366px)": {
    marginRight: "100px",
  },
  "@media screen and (max-width: 1150px)": {
    marginRight: "0px",
    width: "400px",
  },
  "@media screen and (max-width: 768px)": {
    marginRight: "0px",
    width: "100%",
  },
})

export const HomeContentSlideTopoFilterHeader = styled("div", {
  width: "100%",
  /* background-color:red, */

  h1: {
    fontSize: "110px",
    lineHeight: "85%",
    fontFamily: "Open Sans",
    background: "-webkit-linear-gradient(#7fbc04, #7fbc04, #58bc03, #58bc03)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    fontWeight: "bold",
    margin: "0px",
  },
  h2: {
    fontSize: "35px",
    fontFamily: "Open sans",
    color: "#58bc03",
    span: {
      color: "black",
    },
  },
  p: {
    fontSize: "18px",
    fontFamily: "Open sans",
  },

  "@media screen and (max-width: 1366px)": {
    height: "200px",
    h1: {
      fontSize: "50px",
      fontFamily: "Open sans",
      lineHeight: "85%",
      background: "-webkit-linear-gradient(#7fbc04, #7fbc04, #58bc03, #58bc03)",
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
    },
    h2: {
      fontSize: "25px",
      fontFamily: "Open sans",
      lineHeight: "98%",
      color: "#58bc03",
      span: {
        color: "black",
      },
    },
    p: {
      fontSize: "15px",
      fontFamily: "Open sans",
    },
  },
  "@media screen and (max-width: 1200px)": {
    height: "200px",
    h1: {
      fontSize: "50px",
      fontFamily: "Open sans",
      lineHeight: "85%",
      background: "-webkit-linear-gradient(#7fbc04, #7fbc04, #58bc03, #58bc03)",
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
    },
    h2: {
      fontSize: "25px",
      fontFamily: "Open sans",
      lineHeight: "98%",
      color: "#58bc03",
      span: {
        color: "black",
      },
    },
    p: {
      fontSize: "15px",
      fontFamily: "Open sans",
    },
  },

  "@media screen and (max-width: 768px)": {
    display: "none",
  },
})

export const HomeContentSlideTopoFilterHeaderMobile = styled("div", {
  width: "100%",
  height: "320px",
  display: "none",
  /* background-color:red, */
  p: {
    fontSize: "15px",
    fontFamily: "Open sans",
    paddingLeft: "5px",
  },
  "@media screen and (max-width: 768px)": {
    display: "block",
  },
})

export const HomeContentSlideTopoFilterHeaderMobileInfo = styled("div", {
  width: "98%",
  height: "250px",
  display: "flex",
  justifyContent: "flex-end",
  position: "relative",
  marginLeft: "auto",
  marginRight: "auto",
  fontFamily: "Open sans",

  div: {
    width: "100%",
    position: "absolute",
    h1: {
      width: "208px",
      fontSize: "60px",
      fontFamily: "Open sans",
      lineHeight: "80%",
      background: " -webkit-linear-gradient(#7fbc04, #7fbc04, #58bc03, #58bc03)",
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
    },
    h2: {
      width: "160px",
      fontSize: "23px",
      fontFamily: "Open sans",
      lineHeight: "98%",
      color: "#58bc03",
      span: {
        color: "black",
      },
    },
    p: {
      width: "127px",
      fontSize: "12px",
      fontFamily: "Open sans",
    },
  },

  img: {
    width: "65%",
    display: "block",
    objectFit: "contain",
    alignSelf: "flex-end",
    zIndex: "revert",
  },
})

export const HomeContentSlideTopoFilterControl = styled("div", {
  width: "100%",
  minHeight: "360px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  /* background-color:red, */

  "@media screen and (max-width: 1366px)": {
    minHeight: "300px",
  },
  "@media screen and (max-width: 768px)": {
    position: "relative",
    marginLeft: "auto",
    marginRight: "auto",
    width: "350px",
  },
})

export const HomeContentSlideTopoFilterControlCustom = styled("div", {
  width: "100%",
  height: "81px",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row",
})

export const HomeContentSlideTopoFilterControlItem = styled("div", {
  // width:${props => (props.wid ? props.wid : 100)}%,
  width: "100%",
  border: "1px solid #d4d4d4",
  borderRadius: "5px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "10px",

  "@media screen and (max-width: 1366px)": {
    height: "60px",
  },

  "@media screen and (max-width: 768px)": {
    width: "350px",
  },
})

export const HomeContentSlideTopoFilterBodyBrindes = styled("div", {
  width: "1353px",
  /* width: ${props => (props.view ? 1353 : 0)}px, */
  // height: ${props => (props.view ? 292 : 0)}px,

  height: "292px",
  backgroundColor: "white",
  border: "1px solid #d4d4d4",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // opacity: ${props => (props.view ? 1 : 0)},
  left: "4px",
  marginTop: "230px",
  // zIndex:${props => (props.view ? 99 : -1)},
  borderRadius: "5px",
  boxShadow: "1px 1px 8px 5px rgb(212,212,212,0.3)",
  transition: "0.3s",
  outline: "none",

  "@media screen and (max-width: 1920px)": {
    marginTop: "415px",
    left: "0px",
  },

  "@media screen and (max-width: 1366px)": {
    left: "4px",
    marginTop: "240px",
    width: "1200px",
  },

  "@media screen and (max-width: 1280px)": {
    marginLeft: "0px",
    width: "1024px",
  },
  "@media screen and (max-width: 1100px)": {
    marginLeft: "0px",
    width: "900px",
  },
  "@media screen and (max-width: 768px)": {
    display: "none",
  },
})

export const HomeContentSlideTopoFilterBodyBrindesContent = styled("div", {
  width: "98%",
  height: "95%",
  // display: ${props => (props.view ? 'flex' : 'none')},
  display: "flex",

  justifyContent: "center",
  /* background-color: yellow, */
})

export const HomeContentSlideTopoFilterBodyBrindesContentGrid = styled("div", {
  width: "84%",
  height: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  borderRight: "1px solid #d4d4d4",

  "@media screen and (max-width: 768px)": {
    width: "100%",
    borderRight: "none",
  },
})

export const HomeContentSlideTopoFilterBodyBrindesContentGridColumn = styled("div", {
  minWidth: "185px",
  height: "100%",
  margin: "2px",
  /* background-color:green, */
  display: "flex",
  flexDirection: "column",

  a: {
    width: "100%",
    fontSize: "12px",
    margin: "2px",
    fontFamily: "Open sans",
    marginBottom: "5px",
    paddingLeft: "6px",
    cursor: "pointer",
  },

  "a:hover": {
    backgroundColor: "#daeac5",
  },

  "&:nth-child(6)": {
    minWidth: "145px",
  },

  "@media screen and (max-width: 1366px)": {
    minWidth: "160px",
    a: {
      fontSize: "11.5px",
    },
  },
  "@media screen and (max-width: 1280px)": {
    minWidth: "135px",
    a: {
      fontSize: "10px",
    },
    "&:nth-child(6)": {
      minWidth: "130px",
    },
  },
  "@media screen and (max-width: 1100px)": {
    minWidth: "105px",
  },
})

export const HomeContentSlideTopoFilterBodyBrindesContentImgProd = styled("div", {
  width: "240px",
  height: "100%",
  /* background-color:yellow, */
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  img: {
    /* height:90%, */
  },

  "@media screen and (max-width:1366px)": {
    img: {
      /* height:160px, */
    },
  },

  "@media screen and (max-width: 768px)": {
    display: "none",
  },
})

export const HomeContentSlideTopoFilterBodyBrindesMobile = styled("div", {
  width: "100%",
  /* max-width:400px, */
  /* width: ${props => (props.view ? 1353 : 0)}px, */
  // height: ${props => (props.view ? 292 : 0)}px,
  height: "100vh",
  backgroundColor: "white",
  border: "1px solid #d4d4d4",
  position: "absolute",
  display: "none",
  justifyContent: "center",
  alignItems: "center",
  // opacity: ${props => (props.view ? 1 : 0)},
  opacity: 0,
  left: "0%",
  // zIndex:${props => (props.view ? 999 : -1)},
  borderRadius: "5px",
  boxShadow: "1px 1px 8px 5px rgb(212,212,212,0.3)",
  transition: "0.3s",
  overflow: "auto",

  "@media screen and (max-width: 768px)": {
    display: "flex",
  },
})

export const HomeContentSlideTopoFilterBodyBrindesMobileContent = styled("div", {
  width: "98%",
  height: "95%",
  // display: ${props => (props.view ? 'flex' : 'none')},
  display: "flex",
  justifyContent: "center",
  /* background-color: yellow, */
})

export const HomeContentSlideTopoFilterBodyBrindesMobileContentGrid = styled("div", {
  width: "84%",
  height: "70vh",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  borderRight: "1px solid #d4d4d4",

  "@media screen and (max-width: 768px)": {
    width: "100%",
    borderRight: "none",
  },
})

export const HomeContentSlideTopoFilterBodyBrindesMobileContentGridColumn = styled("div", {
  minWidth: "100%",
  height: "100%",
  margin: "2px",
  /* background-color:green, */
  display: "flex",
  flexDirection: "column",

  a: {
    width: "100%",
    fontSize: "14px",
    margin: "2px",
    fontFamily: "Open sans",
    marginBottom: "5px",
    paddingLeft: "6px",
    cursor: "pointer",
  },

  "a:hover": {
    backgroundColor: "#daeac5",
  },

  "&:nth-child(6)": {
    minWidth: "145px",
  },
})

export const HomeContentSlideTopoFilterBodyBrindesMobileContentImgProd = styled("div", {
  width: "240px",
  height: "100%",
  /* background-color:yellow, */
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  img: {
    /* height:90%, */
  },

  "@media screen and (max-width:1366px)": {
    img: {
      /* height:160px, */
    },
  },

  "@media screen and (max-width: 768px)": {
    display: "none",
  },
})

export const HomeContentSlideTopoFilterControlItemText = styled("div", {
  // width: ${props => (props.wid ? props.wid : 40)}%,
  width: "100%",
  // width: "40%",
  height: "50px",
  display: "block",
  // flexDirection: ${props => (props.value ? 'none' : 'row')},
  /* z-index: revert, */
  ".title": {
    width: "100%",
    height: "30px",
    display: "flex",
    justifyContent: "space-between",

    p: {
      width: "50%",
      display: "flex",
      justifyContent: "flex-start",
      "white-space": "nowrap",
      input: {
        left: "0px",
        margin: "0px",
        marginLeft: "5px",
        width: "50px",
      },
    },

    "@media screen and (max-width:1150px)": {
      p: {
        fontSize: "14px",
        input: {
          fontSize: "14px",
        },
      },
    },
  },

  h1: {
    minWidth: "70px",
    // width:${props => (props.wH ? props.wH : '70px')},
    width: "70px",
    height: "50px",
    // fontSize:${props => (props.h1F ? props.h1F : 16)}px,
    fontSize: "16px",
    borderRight: "1px solid #dadada",
    marginLeft: "15px",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },

  h2: {
    minWidth: "190px",
    height: "50px",
    fontSize: "16px",
    fontFamily: "Open sans",
    marginLeft: "15px",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    span: {
      fontFamily: "Open sans",
      marginLeft: "5px",
    },
  },

  p: {
    minWidth: "250px",
    height: "50px",
    fontSize: "13px",
    fontFamily: "Open sans",
    display: "flex",
    alignItems: "center",
    marginLeft: "15px",
    cursor: "pointer",
    strong: {
      marginLeft: "5px",
    },
  },

  a: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    justifySelf: "flex-end",
    marginTop: "-25px",
    cursor: "pointer",
  },

  input: {
    outline: "none",
    marginLeft: "15px",
    fontSize: "16px",
    marginTop: "0px",
    fontFamily: "Open sans",
  },

  "input::placeholder": {
    fontFamily: "Open sans",
  },

  div: {
    display: "flex",
    justifyContent: "flex-start",

    label: {
      width: "30px",
      fontSize: "16px",
      fontFamily: "Open sans",
      fontWeight: "600",
    },

    input: {
      width: "100%",
      outline: "none",
      fontSize: "16px",
      fontFamily: "Open sans",
      fontWeight: "600",

      "::placeholder": {
        fontWeight: "400",
      },
    },
  },

  "@media screen and (max-width:768px)": {
    h1: {
      fontSize: "14px",
    },
    h2: {
      fontSize: "14px",
    },

    p: {
      width: "165px",
      minWidth: "165px",
    },

    a: {
      width: "100%",
      display: "flex",
      justifyContent: "flex-end",
      justifySelf: "flex-end",
      marginTop: "-25px",
      cursor: "pointer",
    },

    input: {
      outline: "none",
      marginLeft: "15px",
      fontSize: "16px",
      marginTop: "0px",
      fontFamily: "Open sans",
    },

    "input::placeholder": {
      fontFamily: "Open sans",
    },

    div: {
      display: "flex",
      justifyContent: "flex-start",

      label: {
        width: "30px",
        fontSize: "16px",
        fontFamily: "Open sans",
        fontWeight: "600",
      },

      input: {
        width: "100%",
        outline: "none",
        fontSize: "16px",
        fontFamily: "Open sans",
        fontWeight: "600",

        "::placeholder": {
          fontWeight: "400",
        },
      },
    },
  },
})

export const HomeContentSlideTopoFilterControlItemArrow = styled("div", {
  // width: ${props => (props.wid ? props.wid : 50)}%,
  width: "50%",
  height: "50px",
  /* background-color: blue, */
  display: "flex",
  justifyContent: "flex-end",
  /* align-items:center, */
  marginTop: "-10px",
  cursor: "pointer",
})

export const HomeContentSlideTopoFilterControlSubmit = styled("div", {
  width: "100%",
  height: "60px",

  button: {
    width: "100%",
    height: "45px",
    backgroundColor: "#58bc03",
    marginTop: "25px",
    borderRadius: "10px",
    fontSize: "16px",
    fontFamily: "Open sans",
    letterSpacing: "0.1rem",
    color: "white",
  },

  "@media screen and (max-width: 1366px)": {
    button: {
      marginTop: "0px",
    },
  },
})

export const HomeContentSlideTopoBanner = styled("div", {
  width: "950px",
  height: "100%",
  display: "flex",
  alignItems: "right",
  /* background-color:blue, */

  "@media screen and (max-width: 1366px)": {
    /* width: 950px, */
    justifySelf: "center",
    width: "auto",

    img: {
      display: "block",
      objectFit: "cover",
      width: "auto",
      height: "480px",
    },
  },
  "@media screen and (max-width: 1280px)": {
    width: "650px",
    justifySelf: "center",

    img: {
      /* width:auto, */
      marginTop: "25px",
      height: "90%",
    },
  },
  "@media screen and (max-width: 1150px)": {
    width: "65%",
    justifySelf: "center",

    img: {
      width: "100%",
      marginTop: "25px",
      height: "auto",
      display: "block",
      objectFit: "contain",
    },
  },
  "@media screen and (max-width: 768px)": {
    display: "none",
  },
})
