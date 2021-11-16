import { forwardRef, useState } from 'react';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import { FaCalendarAlt } from 'react-icons/fa';

import localePtBR from 'date-fns/locale/pt-BR';

import { Box, Input, InputGroup, InputRightElement } from '@chakra-ui/react';

import 'react-datepicker/dist/react-datepicker.css';

import { usePet } from '../../hooks/usePet';
import { useSidebarDrawer } from '../../hooks/useSidebarDrawer';

registerLocale('pt-BR', localePtBR);

// eslint-disable-next-line react/display-name
const CustomInput = forwardRef(({ value, onClick }: any, ref: any) => (
  <InputGroup w="200px">
    <Input onClick={onClick} ref={ref} value={value} onChange={() => {}} />
    <InputRightElement children={<FaCalendarAlt />} onClick={onClick} />
  </InputGroup>
));

export const DatePicker: React.FC = () => {
  const { changeDate, selectDate } = usePet();

  const { onClose } = useSidebarDrawer();

  const [value, setValue] = useState(selectDate);

  function handleChangeDate(date: Date) {
    setValue(date);

    changeDate(date);

    onClose();
  }

  return (
    <Box id="my-custom-datepicker">
      <ReactDatePicker
        selected={value}
        locale="pt-BR"
        dateFormat="dd/MM/yyyy"
        onChange={(date: Date) => handleChangeDate(date)}
        customInput={<CustomInput />}
      />
    </Box>
  );
};
