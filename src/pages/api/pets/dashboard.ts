import { NextApiRequest, NextApiResponse } from 'next';

import { filterByDate } from '../_lib/filterByDate';
import { data } from '../_lib/fake-data.json';

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const { petId, date } = request.body;
  
  if (petId && date) {
    const pet = data.find(pet => pet.petId === petId);
    
    const dayMealAccompaniment = filterByDate(date, pet?.feed || [], 'datetime');
    const dayliControl = filterByDate(date, pet?.feedHistory || [], 'datetime');

    const calculateTheTotalMealStatus = (type: string) => {
      return pet?.feed.reduce((accumulator, item) => {
        if (type === item.status) return accumulator += 1;

        return accumulator;
      }, 0);
    }

    const AllMealAccompaniment = {
      mealAtTheRightTime: calculateTheTotalMealStatus('Sim'),
      notMealAtTheRightTime: calculateTheTotalMealStatus('Não'),
    }
      
    return response.status(200).json({
      petId: pet?.petId,
      petName: pet?.petName,
      AllMealAccompaniment,
      dayMealAccompaniment,
      dayliControl
    });
  }
    
  return response.status(200).json({});
}
  