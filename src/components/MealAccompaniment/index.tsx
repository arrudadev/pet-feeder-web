import { Flex, Text } from '@chakra-ui/react';

import { BoxShadow } from '../BoxShadow';
import { Table } from '../Table';

export const MealAccompaniment: React.FC = () => {
  const columns = [
    { 
      title: 'Horário da Refeição',
      field: 'meal_hour'
    },
    { 
      title: 'Comeu no horário correto',
      field: 'meal_at_the_right_time'
    }
  ];

  const rows = [
    {
      id: '1asdfasdf', meal_hour: '10:33', meal_at_the_right_time: 'Não'
    },
    {
      id: 'asdfasdf', meal_hour: '10:33', meal_at_the_right_time: 'Não'
    },
    {
      id: 'asfdasrqwer', meal_hour: '10:33', meal_at_the_right_time: 'Não'
    },
  ];

  return (
    <BoxShadow>
      <Flex>
        <Text fontSize="lg" mb="4" color="gray.600">
          Acompanhamento de Refeições do dia
        </Text>
      </Flex>

      <Table columns={columns} rows={rows} height="250px" />
    </BoxShadow>
  );
}