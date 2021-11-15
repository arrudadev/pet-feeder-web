import { useEffect } from 'react';

import { usePet } from '../../hooks/usePet';
import { Select } from '../Select';

export const PetSelect = () => {
  const { petList, loadPetList, changePet } = usePet();

  const pets = petList.map(pet => {
    return {
      value: pet.petId, 
      label: pet.petName
    }
  });

  const handleChangePet = (petId: any) => {
    changePet(petId);
  }

  useEffect(() => {
    const fetchPets = async () => {
      await loadPetList();
    }

    fetchPets();
  }, []);

  return (
    <Select
      colorScheme="green"
      options={pets}
      placeholder="Escolha um Pet"
      onChange={(item: any) => handleChangePet(item.value)}
      closeMenuOnSelect={false}
    />
  );
}