import { Text } from '@chakra-ui/react'

import { usePet } from '../../hooks/usePet';
import { AreaChart } from '../AreaChart';
import { BoxShadow } from '../BoxShadow';

export const DayMealsChart: React.FC = () => {
  const { dayliControlData } = usePet();

  const categories = dayliControlData.map(item => item.datetime);
  const series = dayliControlData.map(item => Number(item.weight));

  return (
    <BoxShadow>
      <Text fontSize="lg" mb="4" color="gray.600">
        Alimentações ao longo do dia
      </Text>

      <AreaChart categories={categories} series={series} />
    </BoxShadow>
  );
}