import { ChakraProvider, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";

export function Success({ message, description = false }) {
  const [isMaxWidth768] = useMediaQuery("(max-width: 768px)");
  const [isMinWidthMedium, setIsMinWidthMedium] = useState(false);

  useEffect(() => {
    if (isMaxWidth768 !== isMinWidthMedium) {
      setIsMinWidthMedium(isMaxWidth768);
    }
  }, [isMaxWidth768]);

  return (
    <ChakraProvider>
      <Flex
        alignItems="center"
        flexDirection={isMinWidthMedium ? "column" : "row"}
      >
        <Flex
          alignItems="center"
          bgColor="#80BD01"
          justifyContent="center"
          w="100%"
          paddingBlock="4rem"
          gap="1rem"
          paddingInline={isMinWidthMedium ? "1rem" : "0"}
          flexDir={description ? "column" : "row"}
        >
          <Flex alignItems="center" justifyContent="center" gap="1rem">
            {" "}
            <AiFillCheckCircle size={30} color="white" />
            <Text
              fontSize={isMinWidthMedium ? "1.2rem" : "1.7rem"}
              color="white"
              m="0"
              fontWeight={600}
            >
              {message}
            </Text>
          </Flex>

          {description && (
            <Text
              fontSize={isMinWidthMedium ? "1rem" : "1.2rem"}
              color="white"
              m="0"
              fontWeight={600}
            >
              {description}
            </Text>
          )}
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}
