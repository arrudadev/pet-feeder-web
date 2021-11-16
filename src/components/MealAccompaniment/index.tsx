import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Flex, Text } from '@chakra-ui/react';

import { usePet } from '../../hooks/usePet';
import { BoxShadow } from '../BoxShadow';
import { NoData } from '../NoData';
import { Table } from '../Table';

export const MealAccompaniment: React.FC = () => {
  const { dayMealAccompaniment } = usePet();

  const columns = [
    {
      title: 'Horário da Refeição',
      field: 'datetime',
      id: 'datetime-mealaccompaniment',
    },
    {
      title: 'Comeu no horário correto',
      field: 'status',
      id: 'status-mealaccompaniment',
    },
  ];

  const rows = dayMealAccompaniment.map((item, index) => {
    return {
      id: `${index}-mealaccompaniment`,
      datetime: format(parseISO(item.datetime), 'HH:mm', {
        locale: ptBR,
      }),
      status: item.status,
    };
  });

  return (
    <BoxShadow>
      <Flex>
        <Text fontSize="lg" mb="4" color="gray.600">
          Acompanhamento de Refeições do dia
        </Text>
      </Flex>

      {rows.length === 0 && <NoData />}

      {rows.length > 0 && (
        <Table columns={columns} rows={rows} height="250px" />
      )}
    </BoxShadow>
  );
};
