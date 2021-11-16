import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Flex, Text } from '@chakra-ui/react';

import { usePet } from '../../hooks/usePet';
import { BoxShadow } from '../BoxShadow';
import { NoData } from '../NoData';
import { Table } from '../Table';

type DayliControlProps = {
  height?: string;
};

export const DayliControl: React.FC<DayliControlProps> = ({
  height = '100%',
}) => {
  const { dayliControlData } = usePet();

  const columns = [
    {
      title: 'Data',
      field: 'date',
      id: 'date-daylicontrol',
    },
    {
      title: 'Horário da Refeição',
      field: 'hour',
      id: 'hour-daylicontrol',
    },
    {
      title: 'Quantidade de Ração',
      field: 'weight',
      id: 'weight-daylicontrol',
    },
  ];

  const rows = dayliControlData.map((item, index) => {
    return {
      id: `${index}-daylicontrol`,
      date: format(parseISO(item.datetime), 'dd/MM/yyyy', {
        locale: ptBR,
      }),
      hour: format(parseISO(item.datetime), 'HH:mm', {
        locale: ptBR,
      }),
      weight: item.weight,
    };
  });

  return (
    <BoxShadow>
      <Flex>
        <Text fontSize="lg" mb="4" color="gray.600">
          Controle de Alimentação Diario
        </Text>
      </Flex>

      {rows.length === 0 && <NoData />}

      {rows.length > 0 && (
        <Table columns={columns} rows={rows} height={height} />
      )}
    </BoxShadow>
  );
};
