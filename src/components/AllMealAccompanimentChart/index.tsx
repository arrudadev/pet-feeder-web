import { Text } from '@chakra-ui/react'

import { BoxShadow } from '../BoxShadow';
import { PieChart } from '../PieChart';

export const AllMealAccompanimentChart: React.FC = () => {
  return (
    <BoxShadow>
      <Text fontSize="lg" mb="4" color="gray.600">
        Acompanhamento de Todas Alimentações
      </Text>

      <PieChart
        labels={['Comeu no Horário', 'Não comeu no horário']}
        series={[380, 560]}
      />
    </BoxShadow>
  );
}