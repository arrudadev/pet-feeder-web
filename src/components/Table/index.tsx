import {
  Box,
  Flex,
  Text,
  Table as ChakraTable,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from '@chakra-ui/react';

type Column = {
  title: string;
  field: string;
  id: string;
};

type TableProps = {
  columns: Column[];
  rows: any[];
  height?: string;
};

export const Table: React.FC<TableProps> = ({ columns, rows, height }) => {
  const customHeight = height && height?.length > 0 ? height : '100%';

  return (
    <Box w="100%" h={customHeight} overflowY="auto">
      <ChakraTable variant="striped" h={customHeight}>
        <Thead>
          {columns.map(column => (
            <Th key={column.id} textAlign="center" position="sticky">
              {column.title}
            </Th>
          ))}
        </Thead>

        <Tbody>
          {rows.map(row => (
            <Tr key={row.id}>
              {columns.map(column => (
                <Td
                  key={`row-${row.id}-column-${column.field}`}
                  textAlign="center"
                  position="relative"
                >
                  {row[column.field]}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </ChakraTable>

      <Flex mt="10px">
        <Text fontSize="lg" mb="4" color="gray.600">
          Total {rows.length}
        </Text>
      </Flex>
    </Box>
  );
};
