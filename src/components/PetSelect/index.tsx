import { useEffect } from 'react';

import { usePet } from '../../hooks/usePet';
import { useSidebarDrawer } from '../../hooks/useSidebarDrawer';
import { Select } from '../Select';

export const PetSelect = () => {
  const { petList, loadPetList, changePet, selectedPetId, selectedPetName } = usePet();

  const { onClose } = useSidebarDrawer();

  const pets = petList.map(pet => {
    return {
      value: pet.petId, 
      label: pet.petName
    }
  });

  let pet;

  if (selectedPetId) {
    pet = {
      value: selectedPetId, 
      label: selectedPetName
    }
  } else {
    pet = null;
  }

  const handleChangePet = (selectedPet: any) => {
    changePet(selectedPet.value);

    pet = {
      value: selectedPet.value, 
      label: selectedPet.label
    }

    onClose();
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
      value={pet}
      onChange={(item: any) => handleChangePet(item)}      
    />
  );
}