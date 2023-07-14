import * as Popover from "@radix-ui/react-popover"
import { styled, keyframes } from "@stitches/react"

export const slideUpAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
})

export const slideRightAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(-2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
})

export const slideDownAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(-2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
})

export const slideLeftAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
})

export const PopoverContent = styled(Popover.Content, {
  borderRadius: 4,
  padding: 20,
  width: 260,
  backgroundColor: "white",
  boxShadow: "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  animationDuration: "400ms",
  animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
  willChange: "transform, opacity",
  '&[data-state="open"]': {
    '&[data-side="top"]': { animationName: slideDownAndFade },
    '&[data-side="right"]': { animationName: slideLeftAndFade },
    '&[data-side="bottom"]': { animationName: slideUpAndFade },
    '&[data-side="left"]': { animationName: slideRightAndFade },
  },
  "&:focus": {
    boxShadow: `hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px, 0 0 0 2px ${"#000"}`,
  },
})

export const PopoverArrow = styled(Popover.Arrow, {
  fill: "white",
})

export const PopoverClose = styled(Popover.Close, {
  all: "unset",
  fontFamily: "inherit",
  borderRadius: "100%",
  height: 25,
  width: 25,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#000",
  position: "absolute",
  top: 5,
  right: 5,

  "&:hover": { backgroundColor: "#414042", color: "white" },
  "&:focus": { boxShadow: `0 0 0 2px ${"#000"}` },
})

export const Flex = styled("div", {
  display: "flex",

  a: {
    textDecoration: "none",
    color: "#000",
  },
})

export const IconButton = styled("button", {
  all: "unset",
  fontFamily: "inherit",
  borderRadius: "100%",
  height: 35,
  width: 35,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#000",
  backgroundColor: "white",
  boxShadow: `0 2px 2px ${"#000"}`,
  "&:hover": { backgroundColor: "#000" },
  "&:focus": { boxShadow: `0 0 0 2px black` },
})
export const Fieldset = styled("fieldset", {
  all: "unset",
  display: "flex",
  gap: 20,
  alignItems: "center",
})

export const Label = styled("label", {
  fontSize: 13,
  color: "#000",
  width: 75,
})

export const Input = styled("input", {
  all: "unset",
  width: "100%",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flex: "1",
  borderRadius: 4,
  padding: "0 10px",
  fontSize: 13,
  lineHeight: 1,
  color: "#000",
  boxShadow: `0 0 0 1px ${"#000"}`,
  height: 25,

  "&:focus": { boxShadow: `0 0 0 2px ${"#000"}` },
})

export const Text = styled("p", {
  margin: 0,
  color: "#000",
  fontSize: 15,
  lineHeight: "19px",
  fontWeight: 500,
})
