import { NextApiRequest, NextApiResponse } from 'next';

import { data } from '../_lib/fake-data.json';

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const pets = data.map(pet => {
    return {
      petId: pet.petId,
      petName: pet.petName
    }
  });
    
  return response.status(200).json({ pets });
}
  