import { Flex, Text } from '@chakra-ui/react';

import { BoxShadow } from '../BoxShadow';
import { Table } from '../Table';

type DayliControlProps = {
  useAllColumns?: boolean;
  height?: string;
}

export const DayliControl: React.FC<DayliControlProps> = ({ useAllColumns = false, height = "100%" }) => {
  const columns = [
    { 
      title: 'Data',
      field: 'date'
    },
    { 
      title: 'Horário da Refeição',
      field: 'hour'
    },
    { 
      title: 'Quantidade de Ração',
      field: 'weight'
    },
  ];

  if (useAllColumns) {
    columns.push({ 
      title: 'Comeu no horário correto',
      field: 'meal_at_the_right_time'
    });
  }

  const rows = [
    { id: '1', date: '13/11/2021', hour: '10:33', weight: '50g', meal_at_the_right_time: 'Não'  },
    { id: '2', date: '13/11/2021', hour: '10:33', weight: '50g', meal_at_the_right_time: 'Não'  },
    { id: '3', date: '13/11/2021', hour: '10:33', weight: '50g', meal_at_the_right_time: 'Não'  },
    { id: '4', date: '13/11/2021', hour: '10:33', weight: '50g', meal_at_the_right_time: 'Não'  },
    { id: '5', date: '13/11/2021', hour: '10:33', weight: '50g', meal_at_the_right_time: 'Não'  },
    { id: '6', date: '13/11/2021', hour: '10:33', weight: '50g', meal_at_the_right_time: 'Não'  },
    { id: '7', date: '13/11/2021', hour: '10:33', weight: '50g', meal_at_the_right_time: 'Não'  },
    { id: '8', date: '13/11/2021', hour: '10:33', weight: '50g', meal_at_the_right_time: 'Não'  },
    { id: '9', date: '13/11/2021', hour: '10:33', weight: '50g', meal_at_the_right_time: 'Não'  },
    { id: '10', date: '13/11/2021', hour: '10:33', weight: '50g', meal_at_the_right_time: 'Não'  },
  ];

  return (
    <BoxShadow>
      <Flex>
        <Text fontSize="lg" mb="4" color="gray.600">
          Controle de Alimentação Diario
        </Text>
      </Flex>

      <Table columns={columns} rows={rows} height={height} />
    </BoxShadow>
  );
}