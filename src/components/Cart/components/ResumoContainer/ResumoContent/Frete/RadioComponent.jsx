import { Flex, Radio, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useCart } from "../../../../../../contexts/useCart";
import { setFirstLetterUpperCase } from "../../../../../../utils/setFirstLetterUpperCase";
import { CustomRadio } from "./CustomRadio";

export function RadioComponent({
  shippingInfo,
  handleChange,
  value,
  checked,
  bgColor,
}) {
  const formatPrice = (price) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  return (
    <>
      <Flex w="100%" justifyContent={"space-between"} mt="1rem">
        <Flex gap={2}>
          <Flex alignItems="center" gap={2}>
            <CustomRadio
              onChange={handleChange}
              checked={checked}
              value={value}
              shippingInfo={shippingInfo}
            />
            <Text
              m="0"
              color={bgColor}
              textTransform="uppercase"
              fontWeight={"bold"}
              fontSize="0.875rem"
            >
              {shippingInfo.nome}
            </Text>
          </Flex>
        </Flex>
        {value !== "clienteRetira" && value !== "nossoCarro" && (
          <Text m="0" fontSize="12px" fontWeight="bold">
            {formatPrice(shippingInfo.valor)}
          </Text>
        )}
        {value === "nossoCarro" && shippingInfo.totalItems < 2000 && (
          <Text m="0" fontSize="12px" fontWeight="bold">
            {formatPrice(shippingInfo.valor)}
          </Text>
        )}
        {value === "clienteRetira" && (
          <Flex
            bgColor="#00AFFF"
            paddingInline="12px"
            paddingBlock="1.7px"
            alignItems="center"
            borderRadius="10px"
          >
            <Text
              m="0"
              color="white"
              fontSize="0.75rem"
              textTransform="uppercase"
              fontWeight="bold"
            >
              Grátis
            </Text>
          </Flex>
        )}
        {value === "nossoCarro" &&
          parseFloat(shippingInfo.totalItems) >= 2000 && (
            <Flex
              bgColor="#00AFFF"
              paddingInline="12px"
              paddingBlock="1.7px"
              alignItems="center"
              borderRadius="10px"
            >
              <Text
                m="0"
                color="white"
                fontSize="0.75rem"
                textTransform="uppercase"
                fontWeight="bold"
              >
                Grátis
              </Text>
            </Flex>
          )}
      </Flex>

      {value !== "clienteRetira" && (
        <>
          <Flex
            mt=".2rem"
            w="100%"
            paddingLeft="2.2rem"
            justifyContent={"flex-start"}
            gap={2}
          >
            <Text m="0" color="#414042" fontSize="11px">
              Previsão de entrega
            </Text>
            <Text m="0" color="#414042" fontSize="11px">
              -
            </Text>
            <Text m="0" color="#414042" fontSize="11px" fontWeight={"bold"}>
              {shippingInfo["Previsão de entrega"] + " dias úteis"}
            </Text>
          </Flex>
          <Flex
            mt=".2rem"
            w="100%"
            paddingLeft="2.2rem"
            justifyContent={"flex-start"}
            gap={2}
          >
            <Text
              m="0"
              color="
            "
              fontSize="11px"
            >
              {" "}
              Transportadora
            </Text>
            <Text m="0" color="#414042" fontSize="11px">
              -
            </Text>
            <Text
              m="0"
              color="
            "
              fontSize="11px"
              fontWeight={"normal"}
            >
              {setFirstLetterUpperCase(
                shippingInfo["Transportadora"].length > 20
                  ? shippingInfo["Transportadora"].slice(0, 20) + "..."
                  : shippingInfo["Transportadora"]
              )}
            </Text>
          </Flex>
          <Flex
            mt=".2rem"
            w="100%"
            paddingLeft="2.2rem"
            justifyContent={"flex-start"}
            gap={2}
          >
            <Text
              m="0"
              color="
            "
              fontSize="11px"
            >
              Prazo transportadora
            </Text>
            <Text m="0" color="#414042" fontSize="11px">
              -
            </Text>
            <Text
              m="0"
              color="
            "
              fontSize="11px"
              fontWeight={"normal"}
            >
              {shippingInfo["Prazo transportadora"]}
            </Text>
          </Flex>
        </>
      )}
      {value === "clienteRetira" && (
        <>
          <Flex
            mt=".2rem"
            w="100%"
            paddingLeft="2.2rem"
            justifyContent={"flex-start"}
            gap={2}
          >
            <Text
              m="0"
              color="
            "
              fontSize="11px"
            >
              Previsão de Entrega
            </Text>
            <Text m="0" color="#414042" fontSize="11px">
              -
            </Text>
            <Text
              m="0"
              color="
            "
              fontSize="11px"
              fontWeight="bold"
            >
              {shippingInfo["Previsão de entrega"]}
            </Text>
          </Flex>
          <Flex
            mt=".2rem"
            w="100%"
            paddingLeft="2.2rem"
            justifyContent={"flex-start"}
            gap={2}
          >
            <Text
              m="0"
              color="
            "
              fontSize="11px"
            >
              São Paulo - Capital
            </Text>
            <Text m="0" color="#414042" fontSize="11px">
              -
            </Text>
            <Text
              m="0"
              color="
            "
              fontSize="11px"
              fontWeight="normal"
            >
              {shippingInfo["Prazo produção"]}
            </Text>
          </Flex>
        </>
      )}
      <Flex
        mt=".2rem"
        w="100%"
        paddingLeft="2.2rem"
        justifyContent={"flex-start"}
        gap={2}
      >
        <Text
          m="0"
          color="
        "
          fontSize="11px"
        >
          Prazo Produção
        </Text>
        <Text m="0" color="#414042" fontSize="11px">
          -
        </Text>
        <Text
          m="0"
          color="
        "
          fontSize="11px"
          fontWeight="normal"
        >
          {shippingInfo["Prazo produção"]}
        </Text>
      </Flex>
    </>
  );
}
