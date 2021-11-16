import { Text } from '@chakra-ui/react';

import { usePet } from '../../hooks/usePet';
import { BoxShadow } from '../BoxShadow';
import { NoData } from '../NoData';
import { PieChart } from '../PieChart';

export const AllMealAccompanimentChart: React.FC = () => {
  const { allMealAccompanimentData } = usePet();

  const noHasData =
    allMealAccompanimentData.mealAtTheRightTime === 0 &&
    allMealAccompanimentData.notMealAtTheRightTime === 0;

  return (
    <BoxShadow>
      <Text fontSize="lg" mb="4" color="gray.600">
        Acompanhamento de Todas Alimentações
      </Text>

      {noHasData && <NoData />}

      {!noHasData && (
        <PieChart
          labels={['Comeu no Horário', 'Não comeu no horário']}
          series={[
            allMealAccompanimentData.mealAtTheRightTime,
            allMealAccompanimentData.notMealAtTheRightTime,
          ]}
        />
      )}
    </BoxShadow>
  );
};
