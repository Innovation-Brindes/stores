import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/accordion";
import { Box, Flex, Text } from "@chakra-ui/layout";

export function Steps({ title, children, error }) {
  return (
    <AccordionItem border={0} w="100%">
      <h2>
        <AccordionButton
          bgColor={error ? "#f8bfa5" : "#F5F5F5"}
          borderRadius="0.5rem"
          _focus={{ outline: "none" }}
        >
          <Box as="span" flex="1" textAlign="left">
            {title}
          </Box>
          <Flex
            color="#FF4F00"
            gap="1rem"
            alignItems="center"
            justifyContent="center"
          >
            <Text m="0">Editar</Text>
            <Flex
              w="1.8rem"
              h="1.8rem"
              borderRadius="50%"
              border="2px solid #FF4F00"
              alignItems="center"
              justifyContent="center"
            >
              <AccordionIcon color="#FF4F00" />
            </Flex>
          </Flex>
        </AccordionButton>
      </h2>
      <AccordionPanel
        paddingTop={4}
        paddingBottom={6}
        mb="1rem"
        border="1px solid #CFCFCF"
        borderRadius="10px"
        w="100%"
      >
        {children}
      </AccordionPanel>
    </AccordionItem>
  );
}
