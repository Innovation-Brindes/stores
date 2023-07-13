import { Flex, Text } from "@chakra-ui/layout";

import TypewritterEf from "./Typewriter";

export function Message({ message, time, error = false }) {
  return (
    <Flex
      bgColor={error ? "#ffe5e5" : "#e5ffe5"}
      w="100%"
      justifyContent="space-between"
      alignItems="center"
      paddingInline=".7rem"
      paddingBlock=".3rem"
      borderLeftRadius={".5rem"}
      position="relative"
      _after={{
        content: '""',
        position: "absolute",
        top: "50%",
        right: "-.4rem",
        transform: "translateY(-50%) rotate(45deg)",
        width: 3,
        height: 3,
        bgColor: error ? "#ffe5e5" : "#e5ffe5",
      }}
      gap={2}
    >
      <Text fontSize=".9rem" color="#383737" m="0">
        <TypewritterEf text={message} time={1} />
      </Text>
      <Text as="span" fontSize=".7rem" color="#383737" m="0">
        {time}
      </Text>
    </Flex>
  );
}
