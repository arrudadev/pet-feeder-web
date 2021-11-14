import { Text } from '@chakra-ui/react'

import { AreaChart } from '../AreaChart';
import { BoxShadow } from '../BoxShadow';

export const DayMealsChart: React.FC = () => {
  return (
    <BoxShadow>
      <Text fontSize="lg" mb="4" color="gray.600">
        Alimentações ao longo do dia
      </Text>

      <AreaChart />
    </BoxShadow>
  );
}