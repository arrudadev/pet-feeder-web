import { useContext } from "react";

import { PetContext } from '../contexts/PetContext'

export const usePet = () => {
  return useContext(PetContext);
};