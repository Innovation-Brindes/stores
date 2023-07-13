import { styled } from "../../styles"

export const HomeContainer = styled("div", {
  backgroundColor: "white",
  width: "100%",
  margin: "0 auto",
  transition: "0.3s",
  ".modal": {
    zIndex: "999999",
    ".modal-dialog": {
      zIndex: "999999",
      ".modal-content": {
        zIndex: "999999",
        position: "relative",
        width: "573px",
        height: "80%",
        left: "-8%",
        top: "10%",

        ".modal-body": {
          zIndex: "999999",
          height: "30vw",
        },

        ".modal-footer": {
          zIndex: "999999",
          button: {
            backgroundColor: "#FC5000",
            color: "white",
            fontFamily: "Akrobat, sans-serif",
            fontSize: "1vw",
            borderRadius: "7px",
            border: "none",
          },
        },
      },
    },
  },
})

export const HomeContent = styled("div", {
  width: "100%",
  height: "auto",
  overflow: "hidden",
  position: "relative",
  display: "block",
  /* background-color:red, */
  "@media screen and (max-width: 768px)": {
    display: "none",
  },
})

export const HomeContentBody = styled("div", {
  width: "1360px",
  minHeight: "800px",
  position: "relative",
  marginLeft: "auto",
  marginRight: "auto",
  /* background-color:yellow, */

  "@media screen and (max-width: 1370px)": {
    width: "97%",
  },
})

export const HomeContentBodyTitle = styled("div", {
  width: "100%",
  height: "100px",
  /* background-color:white, */
  display: "flex",
  justifyContent: "center",
  img: {
    display: "block",
    objectFit: "scale-down",
  },
})

export const HomeContentBodyCategorias = styled("div", {
  width: "100%",
  height: "620px",
  /* background-color:green, */
  display: "flex",
  justifyContent: "space-between",
  "@media screen and (max-width: 1350px)": {
    width: "75%",
    position: "relative",
    marginLeft: "auto",
    marginRight: "auto",
    zoom: "80%",
  },
  "@media screen and (max-width: 1270px)": {
    width: "82%",
    position: "relative",
    marginLeft: "auto",
    marginRight: "auto",
    zoom: "82%",
  },
  "@media screen and (max-width: 1140px)": {
    width: "100%",
    position: "relative",
    marginLeft: "auto",
    marginRight: "auto",
    zoom: "100%",
  },
})

export const HomeContentBodySlideCategorias = styled("div", {
  width: "100%",
  height: "230px",
})

export const HomeContentBodyBanner = styled("div", {
  width: "100%",
  height: "300px",
  display: "flex",
  justifyContent: "center",
  /* background-color:red, */
})
