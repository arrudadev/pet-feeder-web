import { createContext, ReactNode, useState } from 'react';

import { api } from '../services/api';

type PetContextData = {
  petList: any[];
  selectedPetId: string;
  selectedPetName: string;
  selectDate: Date;
  allMealAccompanimentData: {
    mealAtTheRightTime: number,
    notMealAtTheRightTime: number
  };
  dayMealAccompaniment: any[];
  dayliControlData: any[];
  loadPetList: () => Promise<void>;
  changePet: (id: string) => Promise<void>;
  changeDate: (newDate: Date) => Promise<void>;
}

export const PetContext = createContext({} as PetContextData);

type PetContextProviderProps = {
  children: ReactNode;
};

export const PetContextProvider = ({ children }: PetContextProviderProps) => {
  const [petList, setPetList] = useState([]);
  const [selectedPetId, setSelectedPetId] = useState('');
  const [selectedPetName, setSelectedPetName] = useState('');
  const [selectDate, setSelectDate] = useState(new Date());
  const [allMealAccompanimentData, setAllMealAccompanimentData] = useState({
    mealAtTheRightTime: 0,
    notMealAtTheRightTime: 0
  });
  const [dayMealAccompaniment, setDayMealAccompaniment] = useState([]);
  const [dayliControlData, setDayliControlData] = useState([]);

  const loadPetList = async () => {
    const response = await api.post('/pets/list');

    const { pets } = response.data;

    setPetList(pets);
  }

  const updateData = (data: any) => {
    const {
      AllMealAccompaniment,
      dayMealAccompaniment,
      dayliControl
    } = data;

    
    setAllMealAccompanimentData(AllMealAccompaniment);
    setDayMealAccompaniment(dayMealAccompaniment);
    setDayliControlData(dayliControl);
  }

  const changePet = async (id: string) => {
    const response = await api.post('/pets/dashboard', {
      petId: id,
      date: selectDate,
    });

    const { petId, petName } = response.data;

    setSelectedPetId(petId);
    setSelectedPetName(petName);

    updateData(response.data);
  }

  const changeDate = async (newDate: Date) => {
    const response = await api.post('/pets/dashboard', {
      petId: selectedPetId,
      date: newDate,
    });    

    setSelectDate(newDate);

    updateData(response.data);
  }

  return (
    <PetContext.Provider
      value={{
        petList,
        selectedPetId,
        selectedPetName,
        selectDate,
        allMealAccompanimentData,
        dayMealAccompaniment,
        dayliControlData,
        loadPetList,
        changePet,
        changeDate
      }}
    >
      {children}
    </PetContext.Provider>
  );
}