import { Flex, Radio, RadioGroup, Text, useMediaQuery } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export function RadioComponent({
  corEmbalagem,
  handleCorEmbalagem,
  setIsOpen,
}) {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const [isLargerThan1040] = useMediaQuery("(max-width: 1040px)");

  const [isMedia, setIsMedia] = useState(false);

  useEffect(() => {
    setIsMedia(isLargerThan1040);
  }, [isLargerThan1040, isLargerThan768]);

  function handleChange(e) {
    setIsOpen(false);
    handleCorEmbalagem(e);
  }

  return (
    <>
      <Flex
        width={isMedia ? "100%" : "30.188rem"}
        marginLeft={!isMedia && "2.563rem"}
        boxShadow={"0px 3px 6px #00000029"}
        paddingBlock="0.875rem"
        borderRadius="18px"
        flexDirection="column"
      >
        <Text
          textTransform={"uppercase"}
          fontSize="11px"
          marginInline="8px"
          borderRadius="10px"
          bgColor="#F5F5F5"
          textAlign={"center"}
          paddingBlock=".3rem"
          fontWeight={"bold"}
        >
          Escolha a cor da embalagem
        </Text>
        <Flex justifyContent="space-between" alignItems="center" width="100%">
          <RadioGroup
            display="flex"
            flexDirection="column"
            alignItems="center"
            width="100%"
            colorScheme={"orange"}
            onChange={(e) => handleChange(e)}
            value={corEmbalagem}
          >
            <Flex
              justifyContent="space-between"
              alignItems="center"
              width="100%"
              paddingInline={isMedia ? "1rem" : "2.75rem"}
              {...(isMedia && { fontSize: "10px" })}
            >
              <Flex flexDir="column" alignItems="center">
                <Radio value="Preta" size={"lg"} />
                Preta
              </Flex>
              <Flex flexDir="column" alignItems="center">
                <Radio value="Prata" size={"lg"} />
                Prata
              </Flex>

              <Flex flexDir="column" alignItems="center">
                <Radio value="Dourada" size={"lg"} />
                Dourada
              </Flex>

              <Flex flexDir="column" alignItems="center">
                <Radio value="Vermelha" size={"lg"} />
                Vermelha
              </Flex>

              <Flex flexDir="column" alignItems="center">
                <Radio value="Azul" size={"lg"} />
                Azul
              </Flex>
              <Flex flexDir="column" alignItems="center">
                <Radio value="Branco" size={"lg"} />
                Branco
              </Flex>
            </Flex>
          </RadioGroup>
        </Flex>
      </Flex>
    </>
  );
}
