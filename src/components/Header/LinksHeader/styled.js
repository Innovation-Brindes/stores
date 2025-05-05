import styled from 'styled-components'
import { Flex } from "@chakra-ui/react";


export const FlexContainerHeaderLink = styled(Flex)`
padding-top: 3px;
width: 1360px;
justify-content: end;
height: 100%;
margin: 0 auto;
justify-content: flex-end;
align-items: center;
padding-top: 0;

  @media screen and (max-width: 1366px){
    width: 100%;
    padding: 0 1rem!important;
  }
  @media screen and (max-width: 768px){
    width: 100%;
    padding: 0 1rem!important;

  }
`;