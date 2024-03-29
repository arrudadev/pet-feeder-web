import { createContext, ReactNode, useState } from 'react';

import { Spinner } from '../components/Spinner';
import { useUser } from '../hooks/useUser';
import { api } from '../services/api';

type PetContextData = {
  petList: any[];
  selectedPetId: string;
  selectedPetName: string;
  selectDate: Date;
  allMealAccompanimentData: {
    mealAtTheRightTime: number;
    notMealAtTheRightTime: number;
  };
  dayMealAccompaniment: any[];
  dayliControlData: any[];
  loadPetList: () => Promise<void>;
  changePet: (id: string) => Promise<void>;
  changeDate: (newDate: Date) => Promise<void>;
};

export const PetContext = createContext({} as PetContextData);

type PetContextProviderProps = {
  children: ReactNode;
};

export const PetContextProvider = ({ children }: PetContextProviderProps) => {
  const { token } = useUser();

  const [petList, setPetList] = useState([]);
  const [selectedPetId, setSelectedPetId] = useState('');
  const [selectedPetName, setSelectedPetName] = useState('');
  const [selectDate, setSelectDate] = useState(new Date());
  const [allMealAccompanimentData, setAllMealAccompanimentData] = useState({
    mealAtTheRightTime: 0,
    notMealAtTheRightTime: 0,
  });
  const [dayMealAccompaniment, setDayMealAccompaniment] = useState([]);
  const [dayliControlData, setDayliControlData] = useState([]);

  const [loading, setLoading] = useState(false);

  const loadPetList = async () => {
    setLoading(true);
    const response = await api.get(`/pet?token=${token}`);

    const { success, pets } = response.data;

    if (success) {
      setPetList(pets);
      setLoading(false);
    }
  };

  const updateData = (data: any) => {
    const {
      AllMealAccompaniment,
      dayMealAccompaniment: dayMealAccompanimentData,
      dayliControl,
    } = data;
    setAllMealAccompanimentData(AllMealAccompaniment);
    setDayMealAccompaniment(dayMealAccompanimentData);
    setDayliControlData(dayliControl);
  };

  const changePet = async (id: string) => {
    setLoading(true);

    const response = await api.post('/pet/dashboard/', {
      petId: id,
      date: selectDate.toISOString(),
      token,
    });

    const { petId, petName } = response.data;

    setSelectedPetId(petId);
    setSelectedPetName(petName);

    updateData(response.data);

    setLoading(false);
  };

  const changeDate = async (newDate: Date) => {
    if (selectedPetId.length > 0) {
      setLoading(true);

      const response = await api.post('/pet/dashboard/', {
        petId: selectedPetId,
        date: newDate.toISOString(),
        token,
      });

      setSelectDate(newDate);

      updateData(response.data);

      setLoading(false);
    }
  };

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
        changeDate,
      }}
    >
      {children}
      <Spinner visible={loading} />
    </PetContext.Provider>
  );
};
