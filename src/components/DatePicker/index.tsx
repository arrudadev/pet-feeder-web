import { forwardRef, useState } from 'react';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import { FaCalendarAlt } from 'react-icons/fa';

import localePtBR from 'date-fns/locale/pt-BR';

import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';

import 'react-datepicker/dist/react-datepicker.css';

registerLocale('pt-BR', localePtBR);

// eslint-disable-next-line react/display-name
const CustomInput = forwardRef(({ value, onClick }: any, ref: any) => (
  <InputGroup w="200px">
    <Input onClick={onClick} ref={ref} value={value} onChange={() => {}} />
    <InputRightElement children={<FaCalendarAlt />} onClick={onClick} />
  </InputGroup>
));

export const DatePicker: React.FC = () => {
  const [value, setValue] = useState(new Date());

  return (
    <ReactDatePicker
      selected={value}
      locale="pt-BR"
      onChange={(date: Date) => setValue(date)}
      customInput={<CustomInput />}
    />
  );
};
