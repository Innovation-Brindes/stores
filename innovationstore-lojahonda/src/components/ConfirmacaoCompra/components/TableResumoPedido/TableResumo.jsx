import {
  ChakraProvider,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { ListTable } from "./ListTable";

export function TableResumo({ data }) {
  return (
    <ChakraProvider>
      <Flex
        width="100%"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="1rem"
      >
        <Text
          fontSize="1rem"
          fontWeight="600"
          py=".3rem"
          display="block"
          width="100%"
          textAlign="center"
          m="0"
          bg="#cecece"
          textTransform="uppercase"
        >
          Detalhes do pedido
        </Text>
      </Flex>
      <TableContainer width="100%">
        <Table variant="simple" width="100%">
          <Thead>
            <Tr bg="#cecece">
              <Th>Item</Th>
              <Th textAlign="center">Qtd.</Th>
              <Th textAlign="center">Valor unitário.</Th>
              <Th textAlign="center">Valor total.</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item, index) => (
              <ListTable item={item} index={index} />
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </ChakraProvider>
  );
}
