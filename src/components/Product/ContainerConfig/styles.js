import { Accordion, AccordionButton, AccordionItem, AccordionPanel, AccordionIcon } from "@chakra-ui/react"
import styled from "styled-components"

export const Heading = styled.h1`
  color: #cc0000;
  font-size: 20px;
  font-weight: bold;
`

export const AccordionIconArea = styled(AccordionIcon)``

export const AccordionSection = styled(Accordion)`
  margin-top: 2rem;
  width: 100%;
`

export const AccordionItemContent = styled(AccordionItem)`
  border: none;
  border-radius: 5px;
`

export const AccordionButtonContent = styled(AccordionButton)`
  padding-bottom: 1rem;
  background-color: #f5f5f5;
  border-radius: 5px;
  outline: none !important;
  border: none !important;
  box-shadow: none !important;

  span {
    font-family: "Open Sans", sans-serif;
    flex: 1;
    text-align: left;
    color: #414042;
    font-weight: 400;
    letter-spacing: 0.3px;
  }
`

export const AccordionPanelContent = styled(AccordionPanel)`
  margin-bottom: 1rem;
  border: ${(props) => (props.borderNone ? "none" : "1px solid #cfcfcf")};
  border-radius: 10px;
  padding-bottom: 0.8rem !important;
  ${(props) => (props.borderNone ? "padding: 0 !important;" : "")}
`

export const ButtonEdit = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #cc0000;
`

export const Icon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid #cc0000;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    color: #cc0000;
    font-size: 20px;
  }
`
