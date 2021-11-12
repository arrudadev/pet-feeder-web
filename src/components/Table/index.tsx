import {
  Box,
  Table as ChakraTable,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from '@chakra-ui/react';

import { Pagination } from '../Pagination';

type TableProps = {
  usePagination?: boolean;
};

export const Table: React.FC<TableProps> = ({ usePagination = false }) => {
  return (
    <Box w="100%">
      <ChakraTable variant="simple">
        <Thead>
          <Tr>
            <Th>Refeição</Th>
            <Th isNumeric>Status</Th>
          </Tr>
        </Thead>

        <Tbody>
          <Tr>
            <Td>08:00</Td>
            <Td isNumeric>Comeu no horário</Td>
          </Tr>
          <Tr>
            <Td>14:00</Td>
            <Td isNumeric>Não comeu no Horário</Td>
          </Tr>
          <Tr>
            <Td>20:00</Td>
            <Td isNumeric>Aguardando Alimentação</Td>
          </Tr>
        </Tbody>
      </ChakraTable>

      {usePagination && <Pagination />}
    </Box>
  );
};
